

export interface Restaurant {
  name: string;
  description: string;
  cuisine: string;
  rating: number; // 1 to 5
  imageUrl: string;
}

export interface Hotel {
  name: string;
  stars: number; // 1 to 5
  price: string; // e.g. "$200/night" or "High End"
  rating: number; // e.g. 9.5
  description: string;
  imageUrl: string;
}

export interface Landmark {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  category: 'History' | 'Nature' | 'Modern' | 'Hidden Gem';
  story?: string; // The "suspenseful story" - now a rich article
  visitorTips?: string[];
}

export interface Country {
  id: string;
  name: string; // Arabic name
  englishName: string;
  region: 'Arab World' | 'Europe' | 'Asia' | 'Americas' | 'Africa' | 'Oceania'; // New field for categorization
  description: string;
  heroImage: string;
  landmarks: Landmark[];
  culturalTips: string[];
  bestTimeToVisit: string;
  restaurants: Restaurant[];
  hotels: Hotel[];
  summerActivities?: string[]; 
  winterActivities?: string[]; 
}

export interface GeminiResponse {
  landmarks: Landmark[];
  description: string;
  culturalTips: string[];
  bestTimeToVisit: string;
  restaurants: Restaurant[];
  hotels: Hotel[];
  summerActivities?: string[];
  winterActivities?: string[];
  region?: 'Arab World' | 'Europe' | 'Asia' | 'Americas' | 'Africa' | 'Oceania';
}