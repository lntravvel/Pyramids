import { GoogleGenAI, Type } from "@google/genai";
import { GeminiResponse } from '../types';

const apiKey = process.env.API_KEY || '';

// Initialize Gemini client
const ai = new GoogleGenAI({ apiKey });

export const getCountryDetails = async (countryName: string, language: string = 'ar'): Promise<GeminiResponse | null> => {
  if (!apiKey) {
    console.warn("No API Key provided for Gemini.");
    return null;
  }

  try {
    const model = 'gemini-3-flash-preview';
    
    // Updated prompt for more detailed and suspenseful storytelling + seasonal activities
    const prompt = `
      You are an expert, world-class travel guide and storyteller for a futuristic travel website called "PYRAMID".
      Create a highly detailed, comprehensive travel guide for the country: "${countryName}".
      
      IMPORTANT: The output MUST be in this language: ${language === 'zh' ? 'Chinese (Simplified)' : language === 'ar' ? 'Arabic' : language === 'fr' ? 'French' : language === 'de' ? 'German' : 'English'}.
      
      Requirements:
      1. "description": An engaging, professional, and inspiring introduction (3-4 sentences). Focus on what makes this country unique globally.
      2. "bestTimeToVisit": The ideal months to visit with a brief reason why.
      3. "region": The region this country belongs to. Choose one of: 'Arab World', 'Europe', 'Asia', 'Americas', 'Africa', 'Oceania'.
      4. "culturalTips": 3-4 key cultural or etiquette tips for tourists to act like locals.
      5. "summerActivities": List 4-5 specific, exciting tourism activities to do in Summer.
      6. "winterActivities": List 4-5 specific, exciting tourism activities to do in Winter.
      7. "landmarks": List 5-6 top-tier famous landmarks or tourist attractions.
         For each landmark:
         - "name": Name in the requested language.
         - "id": a unique english slug.
         - "category": choose from 'History', 'Nature', 'Modern', 'Hidden Gem'.
         - "description": A detailed, factual description of the place (2 sentences).
         - "story": A RICH, SUSPENSEFUL, AND DETAILED ARTICLE/STORY about the place (min 6-8 sentences). This is the most important part. Use dramatic, evocative, and professional storytelling language. Transport the reader there. Mention legends, historical secrets, sensory details (smells, sounds), and the atmosphere. Do not just list facts; tell a compelling narrative.
         - "visitorTips": 2-3 practical, insider tips (e.g., best photo spot, hidden entrance, best time of day).
         - "imageUrl": use a keyword related to the place (e.g., "Rome Colosseum").
      8. "restaurants": List 3-4 top-rated, must-visit restaurants in the country.
          For each restaurant:
          - "name": Name of the restaurant.
          - "description": Brief description of the vibe and food (1 sentence).
          - "cuisine": The type of cuisine (e.g., "Italian", "Street Food", "Fine Dining").
          - "rating": A number between 4.0 and 5.0.
          - "imageUrl": use a keyword related to food or the restaurant vibe.
      9. "hotels": List 5 top-rated hotels (mix of luxury and unique stays).
          For each hotel:
          - "name": Name of the hotel.
          - "stars": Number of stars (1-5).
          - "price": Price range or average price (e.g. "$300/night").
          - "rating": Rating out of 10 (e.g. 9.2).
          - "description": Brief description of the hotel's key feature (view, history, etc.).
          - "imageUrl": use a keyword related to the hotel (e.g. "Luxury Hotel Lobby").
    `;

    const response = await ai.models.generateContent({
      model,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            description: { type: Type.STRING },
            bestTimeToVisit: { type: Type.STRING },
            region: { type: Type.STRING, enum: ['Arab World', 'Europe', 'Asia', 'Americas', 'Africa', 'Oceania'] },
            culturalTips: { type: Type.ARRAY, items: { type: Type.STRING } },
            summerActivities: { type: Type.ARRAY, items: { type: Type.STRING } },
            winterActivities: { type: Type.ARRAY, items: { type: Type.STRING } },
            landmarks: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  id: { type: Type.STRING },
                  name: { type: Type.STRING },
                  category: { type: Type.STRING, enum: ['History', 'Nature', 'Modern', 'Hidden Gem'] },
                  description: { type: Type.STRING },
                  story: { type: Type.STRING },
                  visitorTips: { type: Type.ARRAY, items: { type: Type.STRING } },
                  imageUrl: { type: Type.STRING }
                },
                required: ['id', 'name', 'category', 'description', 'story', 'visitorTips', 'imageUrl']
              }
            },
            restaurants: {
              type: Type.ARRAY,
              items: {
                 type: Type.OBJECT,
                 properties: {
                   name: { type: Type.STRING },
                   description: { type: Type.STRING },
                   cuisine: { type: Type.STRING },
                   rating: { type: Type.NUMBER },
                   imageUrl: { type: Type.STRING }
                 },
                 required: ['name', 'description', 'cuisine', 'rating', 'imageUrl']
              }
            },
            hotels: {
              type: Type.ARRAY,
              items: {
                 type: Type.OBJECT,
                 properties: {
                   name: { type: Type.STRING },
                   stars: { type: Type.NUMBER },
                   price: { type: Type.STRING },
                   rating: { type: Type.NUMBER },
                   description: { type: Type.STRING },
                   imageUrl: { type: Type.STRING }
                 },
                 required: ['name', 'stars', 'price', 'rating', 'description', 'imageUrl']
              }
            }
          },
          required: ['description', 'bestTimeToVisit', 'region', 'culturalTips', 'summerActivities', 'winterActivities', 'landmarks', 'restaurants', 'hotels']
        }
      }
    });

    if (response.text) {
      const data = JSON.parse(response.text) as GeminiResponse;
      data.landmarks = data.landmarks.map(l => ({
        ...l,
        imageUrl: `https://picsum.photos/seed/${l.id}/800/600`
      }));
      if (data.restaurants) {
          data.restaurants = data.restaurants.map((r, index) => ({
              ...r,
              imageUrl: `https://picsum.photos/seed/rest-${index}-${countryName}/800/600`
          }));
      }
      if (data.hotels) {
          data.hotels = data.hotels.map((h, index) => ({
              ...h,
              imageUrl: `https://picsum.photos/seed/hotel-${index}-${countryName}/800/600`
          }));
      }
      return data;
    }
    return null;

  } catch (error) {
    console.error("Error fetching country details:", error);
    return null;
  }
};

export const getOracleResponse = async (context: string, question: string, language: string): Promise<string> => {
  if (!apiKey) return "Error: API Key missing.";

  try {
    const prompt = `
      You are "The Oracle", a highly advanced, futuristic AI travel assistant for the website "PYRAMID".
      Current Context: The user is browsing the page for: "${context}".
      User Question: "${question}"
      Language: ${language}.
      
      Instructions:
      - Answer specifically about ${context}.
      - Keep the answer concise (max 3 sentences) but helpful.
      - Use a helpful, slightly mysterious but modern tone.
      - If asked about prices, give estimates in USD.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
    });

    return response.text || "I cannot see the future clearly right now.";
  } catch (e) {
    console.error(e);
    return "Connection to the Oracle lost.";
  }
};