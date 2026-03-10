import React from 'react';
import { Landmark } from '../types';
import { MapPin, ArrowUpRight, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { ImageWithFallback } from './ImageWithFallback';

interface Props {
  landmark: Landmark;
  countryName: string;
}

const LandmarkCard: React.FC<Props> = ({ landmark, countryName }) => {
  const { t, language } = useLanguage();
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
    <Link
      to={`/landmark/${landmark.id}`}
      state={{ landmark, countryName }}
      className="block group relative h-[450px] rounded-[2rem] overflow-hidden cursor-pointer border border-white/10 transition-all duration-500 hover:shadow-[0_0_50px_rgba(234,179,8,0.25)] hover:-translate-y-2 transform perspective-1000 bg-gray-900 z-10"
    >
      {/* Background Image with Fallback */}
      <div className="absolute inset-0 bg-gray-900 z-0">
        <ImageWithFallback
          src={landmark.imageUrl}
          alt={landmark.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
        />
      </div>

      {/* Dark Gradient Overlay for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-midnight via-black/50 to-transparent z-10 transition-opacity duration-300"></div>

      {/* NEW HOLOGRAPHIC SHEEN EFFECT - Using the global CSS class */}
      <div className="holographic-sheen"></div>

      {/* Static Glow Border on Hover */}
      <div className="absolute inset-0 z-20 border-2 border-gold-500/0 group-hover:border-gold-500/50 rounded-[2rem] transition-colors duration-500 pointer-events-none"></div>

      {/* Top Badge */}
      <div className="absolute top-5 right-5 z-30 rtl:right-5 rtl:left-auto ltr:left-auto ltr:right-5 flex flex-col gap-2 items-end">
        <span className="bg-gold-500/90 backdrop-blur-md text-black text-xs font-black px-4 py-2 rounded-full uppercase tracking-widest shadow-lg flex items-center border border-gold-400">
          {t(categoryKey) || landmark.category}
        </span>
        <button
          onClick={handleEarthClick}
          className="group/earth flex items-center gap-2 bg-blue-600/90 backdrop-blur-md border border-blue-400 text-white px-3 py-1.5 rounded-full hover:bg-blue-500 hover:scale-105 transition-all duration-300 shadow-[0_0_15px_rgba(37,99,235,0.5)] cursor-pointer mt-1"
          title={t('viewOnEarth')}
        >
          <Globe className="w-4 h-4 animate-[spin_10s_linear_infinite] group-hover/earth:animate-[spin_2s_linear_infinite]" />
          <span className="text-xs font-bold whitespace-nowrap">{t('viewOnEarth')}</span>
        </button>
      </div>

      {/* Content */}
      <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col justify-end z-30">
        <div className="transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500 ease-out">

          {/* Location Tag */}
          <div className="flex items-center gap-2 mb-3 text-gold-400 text-xs font-bold tracking-[0.2em] uppercase opacity-80 group-hover:opacity-100 transition-opacity">
            <MapPin size={14} />
            <span>{countryName}</span>
          </div>

          {/* Title */}
          <h3 className="text-3xl font-black text-white mb-3 leading-tight drop-shadow-md group-hover:text-gold-100 transition-colors">
            {landmark.name}
          </h3>

          {/* Description (Fades in) */}
          <div className="overflow-hidden transition-all duration-500 max-h-0 group-hover:max-h-24 opacity-0 group-hover:opacity-100">
            <p className={`text-gray-300 text-sm line-clamp-2 mb-5 border-gold-500/50 ${language === 'ar' ? 'border-r-2 pr-4' : 'border-l-2 pl-4'}`}>
              {landmark.description}
            </p>
          </div>

          {/* Action Button */}
          <div className="inline-flex items-center text-sm font-bold text-white bg-white/10 px-5 py-2.5 rounded-full border border-white/10 group-hover:bg-gold-500 group-hover:text-black group-hover:border-gold-500 transition-all duration-300 gap-2 mt-2 group-hover:mt-0">
            {t('readMore')} <ArrowIcon size={16} />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default LandmarkCard;