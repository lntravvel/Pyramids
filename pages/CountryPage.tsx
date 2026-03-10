import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Country } from '../types';
import { STATIC_COUNTRIES } from '../constants';
import { getCountryDetails } from '../services/geminiService';
import LandmarkCard from '../components/LandmarkCard';
import { Calendar, Info, MapPin, AlertCircle, Loader2, Lightbulb, Share2, Heart, Utensils, Star, BedDouble, Sun, Snowflake, ArrowLeft, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { ImageWithFallback } from '../components/ImageWithFallback';

const CountryPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [data, setData] = useState<Country | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { language, t, dir } = useLanguage();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      if (!id) return;

      const staticCountry = STATIC_COUNTRIES.find(
        c => c.id.toLowerCase() === id.toLowerCase() ||
          c.englishName.toLowerCase() === id.toLowerCase() ||
          c.name === id
      );

      if (staticCountry && language === 'ar') {
        setData(staticCountry);
        setLoading(false);
        return;
      }

      const searchTerm = staticCountry ? staticCountry.englishName : id;

      try {
        const geminiData = await getCountryDetails(searchTerm, language);
        if (geminiData) {
          const newCountry: Country = {
            id: id,
            name: searchTerm,
            englishName: id,
            region: staticCountry ? staticCountry.region : (geminiData.region || 'Asia'),
            description: geminiData.description,
            heroImage: staticCountry ? staticCountry.heroImage : `https://picsum.photos/seed/${id}/1920/1080`,
            bestTimeToVisit: geminiData.bestTimeToVisit,
            culturalTips: geminiData.culturalTips,
            landmarks: geminiData.landmarks,
            restaurants: geminiData.restaurants || [],
            hotels: geminiData.hotels || [],
            summerActivities: geminiData.summerActivities || [],
            winterActivities: geminiData.winterActivities || []
          };
          setData(newCountry);
        } else {
          setError(t('errorMsg'));
        }
      } catch (err) {
        setError(t('errorMsg'));
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id, language, t]);

  const BackIcon = dir === 'rtl' ? ArrowRight : ArrowLeft;

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-midnight text-white">
        <div className="relative">
          <div className="absolute inset-0 bg-gold-500/20 blur-xl rounded-full animate-pulse"></div>
          <Loader2 className="w-16 h-16 text-gold-500 animate-spin relative z-10" />
        </div>
        <h2 className="mt-8 text-2xl font-bold animate-pulse">{t('loading')}</h2>
        <p className="text-gray-400 mt-2">{t('loadingSub')}</p>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-midnight text-white pt-20">
        <AlertCircle className="w-20 h-20 text-red-500 mb-6" />
        <h2 className="text-3xl font-bold mb-4">{t('error')}</h2>
        <p className="text-gray-400 max-w-md text-center">{error || t('errorMsg')}</p>
        <button onClick={() => window.history.back()} className="mt-8 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors">
          {t('backHome')}
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-midnight pb-20">

      {/* Floating Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="fixed top-24 z-40 bg-black/50 hover:bg-gold-500 hover:text-black text-white p-3 rounded-full backdrop-blur-md border border-white/10 transition-all duration-300 rtl:right-4 ltr:left-4 shadow-lg group"
        title={t('back')}
      >
        <BackIcon size={24} className="group-hover:scale-110 transition-transform" />
      </button>

      {/* Hero Header */}
      <div className="relative h-[50vh] w-full shadow-2xl shadow-black/50 bg-gray-900">
        <ImageWithFallback src={data.heroImage} alt={data.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-midnight"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 max-w-[1600px] w-full mx-auto">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-black text-white mb-2 drop-shadow-xl border-r-8 border-gold-500 pr-6 rtl:border-r-8 rtl:border-l-0 ltr:border-l-8 ltr:border-r-0 rtl:pr-6 ltr:pl-6">{data.name}</h1>
          </div>
        </div>
      </div>

      <div className="max-w-[1600px] w-full mx-auto px-6 md:px-12 lg:px-20 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

          {/* Sidebar Section (1 Column) */}
          <div className="lg:col-span-1 space-y-6">
            {/* Description Mini-Card */}
            <div className="glass-panel p-6 rounded-2xl">
              <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                <Info size={20} className="text-gold-500" /> {t('about')}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {data.description}
              </p>
            </div>

            {/* Best Time Card */}
            <div className="glass-panel p-6 rounded-2xl border-t-4 border-gold-500 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Calendar size={80} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2 relative z-10">
                <Calendar className="text-gold-500" size={20} /> {t('bestTime')}
              </h3>
              <p className="text-gray-300 leading-relaxed relative z-10 font-medium">
                {data.bestTimeToVisit}
              </p>
            </div>

            {/* Traveler Tips Card */}
            <div className="glass-panel p-6 rounded-2xl border-t-4 border-blue-500 relative overflow-hidden">
              <div className="absolute -bottom-4 -left-4 p-4 opacity-5">
                <Lightbulb size={100} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2 relative z-10">
                <Lightbulb className="text-blue-400" size={20} /> {t('tips')}
              </h3>
              <ul className="space-y-4 relative z-10">
                {data.culturalTips.map((tip, index) => (
                  <li key={index} className="flex gap-3 text-gray-300 text-sm bg-white/5 p-3 rounded-lg border border-white/5 hover:border-white/10 transition-colors">
                    <span className="text-gold-500 font-bold text-lg leading-none">•</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2">
              <button className="flex-1 bg-white/5 hover:bg-white/10 text-gray-300 py-3 rounded-xl flex items-center justify-center gap-2 transition-all border border-white/10">
                <Heart size={18} /> {t('save')}
              </button>
              <button className="flex-1 bg-white/5 hover:bg-white/10 text-gray-300 py-3 rounded-xl flex items-center justify-center gap-2 transition-all border border-white/10">
                <Share2 size={18} /> {t('share')}
              </button>
            </div>
          </div>

          {/* Main Content Section (3 Columns) */}
          <div className="lg:col-span-3 space-y-12">

            {/* Seasonal Activities - NEW SECTION */}
            {(data.summerActivities?.length > 0 || data.winterActivities?.length > 0) && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Summer */}
                <div className="glass-panel p-6 rounded-2xl border border-white/10 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Sun size={100} />
                  </div>
                  <h3 className="text-xl font-bold text-amber-400 mb-4 flex items-center gap-2">
                    <Sun size={24} /> {t('cat_Modern')} {/* Using generic placeholder or specific trans later, sticking to icon for now */}
                  </h3>
                  <ul className="space-y-3 relative z-10">
                    {data.summerActivities?.map((act, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-300 text-sm">
                        <span className="text-amber-500 mt-1">✦</span> {act}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Winter */}
                <div className="glass-panel p-6 rounded-2xl border border-white/10 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Snowflake size={100} />
                  </div>
                  <h3 className="text-xl font-bold text-blue-300 mb-4 flex items-center gap-2">
                    <Snowflake size={24} /> {t('cat_Nature')} {/* Using generic placeholder */}
                  </h3>
                  <ul className="space-y-3 relative z-10">
                    {data.winterActivities?.map((act, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-300 text-sm">
                        <span className="text-blue-400 mt-1">✦</span> {act}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* Landmarks */}
            <div>
              <div className="mb-8 border-b border-white/10 pb-6">
                <h2 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
                  <MapPin className="text-gold-500" /> {t('landmarks')}
                </h2>
                <p className="text-gray-400">{t('landmarkDesc')} {data.name}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {data.landmarks.map((landmark) => (
                  <LandmarkCard key={landmark.id} landmark={landmark} countryName={data.name} />
                ))}
              </div>
            </div>

            {/* Restaurants Section */}
            {data.restaurants && data.restaurants.length > 0 && (
              <div className="animate-fade-in-up">
                <div className="mb-8 border-b border-white/10 pb-6">
                  <h2 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
                    <Utensils className="text-gold-500" /> {t('restaurants')}
                  </h2>
                  <p className="text-gray-400">{t('restaurantsDesc')}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {data.restaurants.map((rest, idx) => (
                    <div key={idx} className="group bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-gold-500/50 transition-all hover:shadow-xl hover:shadow-gold-500/5">
                      <div className="h-48 relative overflow-hidden bg-gray-800">
                        <ImageWithFallback
                          src={rest.imageUrl}
                          alt={rest.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute top-3 right-3 bg-black/70 backdrop-blur text-gold-500 px-2 py-1 rounded-lg flex items-center gap-1 text-sm font-bold z-10">
                          <Star size={14} fill="currentColor" /> {rest.rating}
                        </div>
                      </div>
                      <div className="p-5">
                        <div className="text-xs text-gold-500 uppercase tracking-widest font-bold mb-2">{rest.cuisine}</div>
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gold-500 transition-colors">{rest.name}</h3>
                        <p className="text-gray-400 text-sm line-clamp-2">{rest.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Hotels Section */}
            {data.hotels && data.hotels.length > 0 && (
              <div className="animate-fade-in-up">
                <div className="mb-8 border-b border-white/10 pb-6">
                  <h2 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
                    <BedDouble className="text-gold-500" /> {t('hotels')}
                  </h2>
                  <p className="text-gray-400">{t('hotelsDesc')}</p>
                </div>

                <div className="flex flex-col gap-6">
                  {data.hotels.map((hotel, idx) => (
                    <div key={idx} className="group flex flex-col md:flex-row bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-gold-500/50 transition-all hover:shadow-xl hover:shadow-gold-500/5 h-auto md:h-56">
                      {/* Hotel Image */}
                      <div className="w-full md:w-1/3 relative overflow-hidden h-48 md:h-full bg-gray-800">
                        <ImageWithFallback
                          src={hotel.imageUrl}
                          alt={hotel.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>

                      {/* Hotel Details */}
                      <div className="flex-1 p-6 flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <div className="flex text-gold-500 mb-1">
                                {[...Array(Math.floor(hotel.stars))].map((_, i) => (
                                  <Star key={i} size={14} fill="currentColor" className="mr-0.5" />
                                ))}
                              </div>
                              <h3 className="text-2xl font-bold text-white group-hover:text-gold-500 transition-colors">{hotel.name}</h3>
                            </div>
                            <div className="bg-gold-500 text-black px-3 py-1 rounded-lg font-bold text-sm">
                              {hotel.rating}/10
                            </div>
                          </div>
                          <p className="text-gray-400 text-sm line-clamp-2 md:line-clamp-3 mb-4">{hotel.description}</p>
                        </div>

                        <div className="flex items-center justify-between mt-auto border-t border-white/10 pt-4">
                          <div className="text-sm text-gray-300">
                            <span className="text-gold-500 font-bold text-lg">{hotel.price}</span> <span className="text-xs text-gray-500">{t('perNight')}</span>
                          </div>
                          <button className="text-sm font-bold text-white bg-white/10 hover:bg-gold-500 hover:text-black px-4 py-2 rounded-lg transition-colors">
                            {t('bookNow')}
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

        </div>
      </div>
    </div>
  );
};

export default CountryPage;