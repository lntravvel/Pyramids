import React from 'react';
import { useParams, Navigate, useNavigate, useLocation } from 'react-router-dom';
import { Landmark } from '../types';
import { STATIC_COUNTRIES } from '../constants';
import { MapPin, BookOpen, Lightbulb, Camera, Globe, ArrowLeft, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import AudioPlayer from '../components/AudioPlayer';
import AmbientSound from '../components/AmbientSound';
import { ImageWithFallback } from '../components/ImageWithFallback';

const LandmarkPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const navigate = useNavigate();
  const { t, dir } = useLanguage();

  // Try to get data from location.state first (for backward compat), fallback to STATIC_COUNTRIES lookup
  const stateData = location.state as { landmark: Landmark; countryName: string } | null;

  let landmark: Landmark | undefined;
  let countryName: string = '';

  if (stateData?.landmark) {
    landmark = stateData.landmark;
    countryName = stateData.countryName;
  } else if (id) {
    // Look up landmark from all countries
    for (const country of STATIC_COUNTRIES) {
      const found = country.landmarks.find(l => l.id === id);
      if (found) {
        landmark = found;
        countryName = country.name;
        break;
      }
    }
  }

  if (!landmark) {
    return <Navigate to="/" />;
  }

  const BackIcon = dir === 'rtl' ? ArrowRight : ArrowLeft;

  const handleEarthClick = () => {
    const query = encodeURIComponent(`${landmark.name}, ${countryName}`);
    window.open(`https://earth.google.com/web/search/${query}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-midnight pt-20 pb-20">

      {/* Floating Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="fixed top-24 z-40 bg-black/50 hover:bg-gold-500 hover:text-black text-white p-3 rounded-full backdrop-blur-md border border-white/10 transition-all duration-300 rtl:right-4 ltr:left-4 shadow-lg group"
        title={t('back')}
      >
        <BackIcon size={24} className="group-hover:scale-110 transition-transform" />
      </button>

      {/* Immersive Sound Atmosphere */}
      <AmbientSound category={landmark.category} />

      <div className="max-w-[1600px] w-full mx-auto px-6 md:px-12 lg:px-20 mt-10">

        {/* Header Image */}
        <div className="relative h-[60vh] rounded-3xl overflow-hidden mb-12 shadow-2xl shadow-gold-900/10 group bg-gray-900">
          <ImageWithFallback
            src={landmark.imageUrl}
            alt={landmark.name}
            className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-midnight via-black/20 to-transparent"></div>

          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
            <div className="flex gap-3 mb-4 animate-fade-in-up">
              <span className="inline-block bg-gold-500 text-black font-bold px-4 py-1.5 rounded-full text-sm tracking-widest uppercase shadow-lg shadow-gold-500/20">
                {landmark.category}
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-white mb-4 drop-shadow-xl animate-fade-in-up delay-100">
              {landmark.name}
            </h1>

            <div className="flex flex-wrap items-center justify-between gap-6 animate-fade-in-up delay-200">
              <div className="flex items-center text-gray-200 gap-2 text-xl font-medium">
                <MapPin size={24} className="text-gold-500" />
                <span>{countryName}</span>
              </div>

              <button
                onClick={handleEarthClick}
                className="flex items-center gap-2 bg-white/10 hover:bg-blue-600 backdrop-blur-md text-white font-bold py-3 px-6 rounded-full transition-all border border-white/20 hover:border-blue-500 group"
              >
                <Globe size={20} className="group-hover:rotate-180 transition-transform duration-700" />
                {t('viewOnEarth')}
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content - Story */}
          <div className="lg:col-span-2 space-y-8">
            <div className="glass-panel p-8 md:p-10 rounded-3xl border-l-4 border-gold-500 rtl:border-l-0 rtl:border-r-4 ltr:border-l-4 ltr:border-r-0 relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none">
                <BookOpen size={200} />
              </div>

              <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4 relative z-10">
                <div className="flex items-center gap-4">
                  <div className="bg-gold-500/20 p-3 rounded-xl text-gold-500">
                    <BookOpen size={28} />
                  </div>
                  <h2 className="text-3xl font-bold text-white font-sans">{t('story')}</h2>
                </div>
                {/* Audio Player added here */}
                {landmark.story && <AudioPlayer text={landmark.story} />}
              </div>

              <div className="prose prose-invert prose-lg text-gray-300 leading-loose font-light relative z-10">
                <p className="text-xl italic text-white/90 mb-8 font-serif border-l-4 border-gold-500/50 pl-6 rtl:border-l-0 rtl:border-r-4 rtl:pl-0 rtl:pr-6">
                  "{landmark.description}"
                </p>
                <div className="bg-black/40 p-10 rounded-3xl border border-white/10 shadow-lg shadow-black/50">
                  <p className="text-lg leading-loose tracking-wide text-gray-200">
                    {landmark.story || "..."}
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-panel p-8 md:p-10 rounded-3xl border border-white/5 shadow-xl shadow-black/50 mt-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-blue-500/20 p-4 rounded-2xl text-blue-400">
                  <Camera size={28} />
                </div>
                <h2 className="text-3xl font-bold text-white font-sans">{t('whyVisit')}</h2>
              </div>
              <p className="text-gray-300 leading-loose tracking-wide text-lg bg-white/5 p-8 rounded-2xl border border-white/10">
                {landmark.description}
              </p>
            </div>
          </div>

          {/* Sidebar - Tips */}
          <div className="space-y-8">
            <div className="glass-panel p-8 md:p-10 rounded-3xl sticky top-28 border-t-4 border-gold-500 shadow-xl shadow-gold-500/10">
              <div className="flex items-center gap-4 mb-8 text-gold-500">
                <div className="bg-gold-500/10 p-4 rounded-2xl">
                  <Lightbulb size={28} />
                </div>
                <h3 className="text-3xl font-bold text-white font-sans">{t('visitorTips')}</h3>
              </div>
              <ul className="space-y-5">
                {landmark.visitorTips && landmark.visitorTips.length > 0 ? (
                  landmark.visitorTips.map((tip, idx) => (
                    <li key={idx} className="flex gap-4 text-gray-300 text-sm md:text-base border-b border-white/5 pb-4 last:border-0 group">
                      <span className="text-gold-500 font-bold text-xl group-hover:scale-125 transition-transform duration-300">•</span>
                      {tip}
                    </li>
                  ))
                ) : (
                  <li className="text-gray-400 text-sm">...</li>
                )}
              </ul>

              <div className="mt-8 pt-6 border-t border-white/10">
                <button className="w-full bg-gold-600 hover:bg-gold-500 text-black font-bold py-4 px-6 rounded-2xl transition-all shadow-lg shadow-gold-900/20 hover:shadow-gold-500/30 flex justify-center items-center gap-2">
                  <span className="text-xl">♥</span> {t('addToFavorites')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandmarkPage;