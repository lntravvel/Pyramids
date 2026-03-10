import React from 'react';
import { Pyramid, Twitter, Instagram, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gold-500/5 pointer-events-none"></div>
      <div className="max-w-[1600px] w-full mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <Pyramid className="w-8 h-8 text-gold-500" />
              <h2 className="text-2xl font-bold text-white">PYRAMID</h2>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-md">
              {t('footerDesc')}
            </p>
          </div>

          <div>
            <h3 className="text-gold-500 font-bold mb-6">{t('quickLinks')}</h3>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">{t('about')}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t('destinations')}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t('contactUs')}</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-gold-500 font-bold mb-6">{t('contactUs')}</h3>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-gold-500 hover:text-black transition-all">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-gold-500 hover:text-black transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-gold-500 hover:text-black transition-all">
                <Globe size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
          <p>© 2024 PYRAMID. {t('rightsReserved')}.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;