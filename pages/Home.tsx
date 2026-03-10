import React, { useState, useMemo } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { STATIC_COUNTRIES } from '../constants';
import { ArrowLeft, ArrowRight, Sparkles, Globe, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { ImageWithFallback } from '../components/ImageWithFallback';

const Home: React.FC = () => {
  const { t, language, dir } = useLanguage();
  const [activeRegion, setActiveRegion] = useState('All');
  const navigate = useNavigate();

  const regions = [
    'All',
    'Arab World',
    'Europe',
    'Asia',
    'Americas',
    'Africa'
  ];

  const filteredCountries = useMemo(() => {
    if (activeRegion === 'All') return STATIC_COUNTRIES;
    return STATIC_COUNTRIES.filter(c => c.region === activeRegion);
  }, [activeRegion]);

  return (
    <div className="min-h-screen bg-midnight">
      {/* Hero Section */}
      <div className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
            alt="World Map"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-midnight via-transparent to-midnight"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/30 rounded-full px-4 py-1.5 text-gold-500 text-sm font-bold mb-6 animate-fade-in-up">
            <Sparkles size={16} />
            <span>{t('discoverWorld')}</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-white mb-4 tracking-tight drop-shadow-2xl animate-fade-in-up delay-100">
            PYRAMID
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 font-light tracking-wide animate-fade-in-up delay-200">
            {t('exploreAllDestinations')}
          </p>

          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center animate-fade-in-up delay-200">
            <button
              onClick={() => document.getElementById('destinations')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gold-500 hover:bg-gold-400 text-black font-bold py-4 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg shadow-gold-500/20"
            >
              {t('exploreGuide')}
            </button>
          </div>
        </div>
      </div>

      {/* Destinations Section */}
      <div id="destinations" className="max-w-[1600px] w-full mx-auto px-6 md:px-12 lg:px-20 pb-16 pt-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-6 border-b border-white/10 pb-6">
          <div>
            <h2 className="text-4xl font-bold text-white mb-2 flex items-center gap-3">
              <Globe className="text-gold-500" />
              {t('featuredDestinations')}
            </h2>
            <p className="text-gray-400">{t('discoverWorld')}</p>
          </div>

          {/* Region Filters */}
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto scrollbar-hide">
            {regions.map((region) => (
              <button
                key={region}
                onClick={() => setActiveRegion(region)}
                className={`px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all ${activeRegion === region
                  ? 'bg-white text-black'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                  }`}
              >
                {region === 'All' ? t('featuredDestinations') : t(`region_${region.replace(' ', '')}`) || region}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {filteredCountries.map((country) => (
            <a
              href={`#/country/${country.id}`}
              key={country.id}
              className="group relative h-[220px] md:h-[350px] lg:h-[400px] rounded-xl md:rounded-2xl lg:rounded-3xl overflow-hidden border border-white/10 lg:hover:border-gold-500/50 transition-all duration-500 lg:hover:shadow-2xl lg:hover:shadow-gold-500/10 block"
              style={{ WebkitTapHighlightColor: 'transparent' }}
            >
              <img
                src={country.heroImage}
                alt={country.name}
                className="absolute inset-0 w-full h-full object-cover lg:group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

              {/* Region Label */}
              <div className="absolute top-2 right-2 md:top-3 md:right-3 bg-black/60 backdrop-blur-sm text-white px-2 py-0.5 md:px-3 md:py-1 rounded-full text-[9px] md:text-xs font-bold uppercase tracking-wider flex items-center gap-1">
                <MapPin size={10} className="text-gold-500" />
                {t(`region_${country.region.replace(' ', '')}`) || country.region}
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-3 md:p-6 lg:p-8">
                <h3 className="text-lg md:text-2xl lg:text-3xl font-black text-white mb-1 md:mb-2">
                  {language === 'ar' ? country.name : country.englishName}
                </h3>
                <p className="text-gray-300 text-[11px] md:text-sm line-clamp-1 md:line-clamp-2 mb-2 md:mb-3">
                  {language === 'ar'
                    ? country.description
                    : t('homeCardGenericDesc').replace('{country}', country.englishName)
                  }
                </p>
                <div className="flex items-center gap-1 text-gold-500 text-[11px] md:text-sm font-bold">
                  {t('readMore')}
                  {dir === 'rtl' ? <ArrowLeft size={14} /> : <ArrowRight size={14} />}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;