import React from 'react';
import { Landmark } from '../types';
import { MapPin, ArrowUpRight, Globe } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { ImageWithFallback } from './ImageWithFallback';

interface Props {
  landmark: Landmark;
  countryName: string;
}

const LandmarkCard: React.FC<Props> = ({ landmark, countryName }) => {
  const { t, language } = useLanguage();
  const navigate = useNavigate();
  const ArrowIcon = ArrowUpRight;

  const handleEarthClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const query = encodeURIComponent(`${landmark.name}, ${countryName}`);
    window.open(`https://earth.google.com/web/search/${query}`, '_blank');
  };

  // Convert category string (e.g. 'Hidden Gem') to translation key (e.g. 'cat_HiddenGem')
  const categoryKey = `cat_${landmark.category.replace(/\s+/g, '')}`;

  return (
    <div
      onClick={() => navigate(`/landmark/${landmark.id}`, { state: { landmark, countryName } })}
      className="block group relative h-[350px] md:h-[450px] rounded-3xl md:rounded-[2rem] overflow-hidden cursor-pointer border border-white/10 transition-all duration-500 hover:shadow-[0_0_50px_rgba(234,179,8,0.25)] md:hover:-translate-y-2 transform perspective-1000 bg-gray-900 z-10"
    >
      {/* Background Image with Fallback */}
      <div className="absolute inset-0 bg-gray-900 z-0 pointer-events-none">
        <ImageWithFallback
          src={landmark.imageUrl}
          alt={landmark.name}
          className="w-full h-full object-cover transition-transform duration-700 md:group-hover:scale-110 opacity-80 lg:group-hover:opacity-100"
        />
      </div>

      {/* Dark Gradient Overlay for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 md:via-black/30 to-transparent z-10 transition-opacity duration-300 pointer-events-none"></div>

      {/* NEW HOLOGRAPHIC SHEEN EFFECT - Using the global CSS class */}
      <div className="holographic-sheen pointer-events-none"></div>

      {/* Static Glow Border on Hover */}
      <div className="absolute inset-0 z-20 border-2 border-gold-500/0 group-hover:border-gold-500/50 rounded-[2rem] transition-colors duration-500 pointer-events-none"></div>

      {/* Top Badge */}
      <div className="absolute top-4 right-4 z-30 rtl:right-4 rtl:left-auto ltr:left-auto ltr:right-4 flex flex-col gap-2 items-end">
        <span className="bg-gold-500/90 backdrop-blur-md text-black text-[10px] md:text-xs font-black px-3 py-1.5 md:px-4 md:py-2 rounded-full uppercase tracking-widest shadow-lg flex items-center border border-gold-400 pointer-events-none">
          {t(categoryKey) || landmark.category}
        </span>
        <button
          onClick={handleEarthClick}
          className="group/earth flex items-center gap-1.5 md:gap-2 bg-blue-600/90 backdrop-blur-md border border-blue-400 text-white px-2.5 py-1.5 md:px-3 md:py-1.5 rounded-full hover:bg-blue-500 hover:scale-105 transition-all duration-300 shadow-[0_0_15px_rgba(37,99,235,0.5)] cursor-pointer mt-1"
          title={t('viewOnEarth')}
        >
          <Globe className="w-3.5 h-3.5 md:w-4 md:h-4 animate-[spin_10s_linear_infinite] md:group-hover/earth:animate-[spin_2s_linear_infinite]" />
          <span className="text-[10px] md:text-xs font-bold whitespace-nowrap">{t('viewOnEarth')}</span>
        </button>
      </div>

      {/* Content */}
      <div className="absolute inset-x-0 bottom-0 p-5 md:p-8 flex flex-col justify-end z-30 pointer-events-none">
        <div className="transform translate-y-0 lg:translate-y-6 lg:group-hover:translate-y-0 transition-transform duration-500 ease-out">

          {/* Location Tag */}
          <div className="flex items-center gap-1.5 md:gap-2 mb-2 md:mb-3 text-gold-400 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase opacity-100 lg:opacity-80 lg:group-hover:opacity-100 transition-opacity">
            <MapPin size={14} className="w-3.5 h-3.5 md:w-4 md:h-4" />
            <span>{countryName}</span>
          </div>

          {/* Title */}
          <h3 className="text-2xl md:text-3xl font-black text-white mb-2 md:mb-3 leading-tight drop-shadow-md lg:group-hover:text-gold-100 transition-colors">
            {landmark.name}
          </h3>

          {/* Description (Fades in) */}
          <div className="overflow-hidden transition-all duration-500 max-h-24 lg:max-h-0 lg:group-hover:max-h-24 opacity-100 lg:opacity-0 lg:group-hover:opacity-100">
            <p className={`text-gray-300 text-xs md:text-sm line-clamp-2 mb-4 md:mb-5 border-gold-500/50 ${language === 'ar' ? 'border-r-2 pr-3 md:pr-4' : 'border-l-2 pl-3 md:pl-4'}`}>
              {landmark.description}
            </p>
          </div>

          {/* Action Button */}
          <div className="inline-flex pointer-events-auto items-center w-fit text-xs md:text-sm font-bold text-white bg-white/10 px-4 py-2.5 md:px-5 md:py-2.5 rounded-full border border-white/10 md:group-hover:bg-gold-500 md:group-hover:text-black md:group-hover:border-gold-500 transition-all duration-300 gap-2 mt-0 md:mt-2 lg:group-hover:mt-0">
            {t('readMore')} <ArrowIcon size={14} className="md:w-4 md:h-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandmarkCard;