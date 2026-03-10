import React from 'react';
import { Landmark } from '../types';
import { MapPin, ArrowUpRight, Globe } from 'lucide-react';
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
    <a
      href={`#/landmark/${landmark.id}`}
      className="block group relative h-[250px] md:h-[400px] lg:h-[450px] rounded-xl md:rounded-2xl lg:rounded-[2rem] overflow-hidden border border-white/10 transition-all duration-500 lg:hover:shadow-[0_0_50px_rgba(234,179,8,0.25)] lg:hover:-translate-y-2"
      style={{ WebkitTapHighlightColor: 'transparent' }}
    >
      {/* Background Image */}
      <img
        src={landmark.imageUrl}
        alt={landmark.name}
        className="absolute inset-0 w-full h-full object-cover lg:group-hover:scale-110 transition-transform duration-700"
      />

      {/* Dark Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

      {/* Holographic Sheen (desktop only via CSS media query) */}
      <div className="holographic-sheen"></div>

      {/* Top Badges */}
      <div className="absolute top-3 right-3 md:top-4 md:right-4 z-30 flex flex-col gap-1.5 items-end">
        <span className="bg-gold-500/90 backdrop-blur-md text-black text-[9px] md:text-xs font-black px-2.5 py-1 md:px-4 md:py-2 rounded-full uppercase tracking-widest shadow-lg border border-gold-400">
          {t(categoryKey) || landmark.category}
        </span>
        <button
          onClick={handleEarthClick}
          className="flex items-center gap-1.5 bg-blue-600/90 backdrop-blur-md border border-blue-400 text-white px-2 py-1 md:px-3 md:py-1.5 rounded-full hover:bg-blue-500 transition-all duration-300 shadow-[0_0_15px_rgba(37,99,235,0.5)]"
          title={t('viewOnEarth')}
        >
          <Globe className="w-3 h-3 md:w-4 md:h-4 animate-[spin_10s_linear_infinite]" />
          <span className="text-[9px] md:text-xs font-bold whitespace-nowrap">{t('viewOnEarth')}</span>
        </button>
      </div>

      {/* Content */}
      <div className="absolute inset-x-0 bottom-0 p-3 md:p-6 lg:p-8 z-30">
        {/* Location Tag */}
        <div className="flex items-center gap-1 mb-1 md:mb-2 text-gold-400 text-[9px] md:text-xs font-bold tracking-[0.15em] uppercase">
          <MapPin size={10} className="md:w-3.5 md:h-3.5" />
          <span>{countryName}</span>
        </div>

        {/* Title */}
        <h3 className="text-lg md:text-2xl lg:text-3xl font-black text-white mb-1 md:mb-2 leading-tight">
          {landmark.name}
        </h3>

        {/* Description */}
        <p className={`text-gray-300 text-[11px] md:text-sm line-clamp-1 md:line-clamp-2 mb-2 md:mb-4 border-gold-500/50 ${language === 'ar' ? 'border-r-2 pr-2 md:pr-4' : 'border-l-2 pl-2 md:pl-4'}`}>
          {landmark.description}
        </p>

        {/* Action Button */}
        <div className="inline-flex items-center text-[11px] md:text-sm font-bold text-white bg-white/10 px-3 py-1.5 md:px-5 md:py-2.5 rounded-full border border-white/10 lg:group-hover:bg-gold-500 lg:group-hover:text-black transition-all duration-300 gap-1.5">
          {t('readMore')} <ArrowIcon size={12} className="md:w-4 md:h-4" />
        </div>
      </div>
    </a>
  );
};

export default LandmarkCard;