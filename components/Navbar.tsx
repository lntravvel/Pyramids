import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Menu, X, Pyramid, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const { language, setLanguage, t } = useLanguage();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/country/${encodeURIComponent(searchTerm)}`);
      setSearchTerm('');
      setIsOpen(false);
    }
  };

  const languages = [
    { code: 'ar', label: 'العربية' },
    { code: 'en', label: 'English' },
    { code: 'es', label: 'Español' },
    { code: 'fr', label: 'Français' },
    { code: 'de', label: 'Deutsch' },
    { code: 'nl', label: 'Nederlands' },
    { code: 'zh', label: '中文' },
  ];

  return (
    <nav className="fixed w-full z-50 transition-all duration-300">
      <div className="w-full bg-gold-500 text-black text-center py-1 text-xs font-bold tracking-widest uppercase">
        Mostafa Elkholy Project
      </div>
      <div className="bg-midnight/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-[1600px] w-full mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative">
                <Pyramid className="w-10 h-10 text-gold-500 group-hover:text-gold-400 transition-colors" />
                <div className="absolute inset-0 bg-gold-500 blur-lg opacity-20 group-hover:opacity-40 transition-opacity"></div>
              </div>
              <div>
                <h1 className="text-2xl font-bold tracking-wider text-white font-sans">PYRAMID</h1>
                <p className="text-xs text-gold-500 tracking-widest uppercase">{t('pyramid')}</p>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <Link to="/" className="text-gray-300 hover:text-gold-400 transition-colors text-sm font-semibold">{t('home')}</Link>
              <Link to="/#destinations" className="text-gray-300 hover:text-gold-400 transition-colors text-sm font-semibold">{t('destinations')}</Link>

              <div className="relative">
                <form onSubmit={handleSearch} className="relative">
                  <input
                    type="text"
                    placeholder={t('searchPlaceholder')}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className={`bg-white/5 border border-white/10 rounded-full py-2 px-4 text-sm focus:outline-none focus:border-gold-500/50 w-64 transition-all focus:w-80 text-white placeholder-gray-500 ${language === 'ar' ? 'pl-10' : 'pr-10'}`}
                  />
                  <button type="submit" className={`absolute top-1/2 -translate-y-1/2 text-gold-500 ${language === 'ar' ? 'left-3' : 'right-3'}`}>
                    <Search size={16} />
                  </button>
                </form>
              </div>

              {/* Language Switcher */}
              <div className="relative">
                <button
                  onClick={() => setIsLangOpen(!isLangOpen)}
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                >
                  <Globe size={18} />
                  <span className="uppercase font-bold text-sm">{language}</span>
                </button>

                {isLangOpen && (
                  <div className="absolute top-full right-0 rtl:left-0 rtl:right-auto mt-2 w-32 bg-midnight border border-white/10 rounded-xl shadow-xl overflow-hidden glass-panel z-50">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code as any);
                          setIsLangOpen(false);
                        }}
                        className={`block w-full text-left px-4 py-2 text-sm hover:bg-white/10 transition-colors ${language === lang.code ? 'text-gold-500 font-bold' : 'text-gray-300'}`}
                      >
                        {lang.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Mobile Button */}
            <div className="md:hidden flex items-center gap-4">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="text-gray-300 hover:text-white"
              >
                <span className="uppercase font-bold text-sm">{language}</span>
              </button>
              <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-gold-500">
                {isOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden glass-panel border-t border-white/10">
            <div className="px-4 pt-2 pb-6 space-y-4">
              {isLangOpen && (
                <div className="flex gap-2 flex-wrap mb-4 pb-4 border-b border-white/10">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code as any);
                        setIsLangOpen(false);
                      }}
                      className={`px-3 py-1 rounded-full text-xs border ${language === lang.code ? 'border-gold-500 text-gold-500' : 'border-white/20 text-gray-400'}`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              )}
              <Link to="/" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-white hover:text-gold-500">{t('home')}</Link>
              <Link to="/#destinations" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-white hover:text-gold-500">{t('destinations')}</Link>
              <form onSubmit={handleSearch} className="mt-4 relative">
                <input
                  type="text"
                  placeholder={t('searchPlaceholder')}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-white/10 border border-white/20 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-gold-500"
                />
                <button type="submit" className={`absolute top-1/2 -translate-y-1/2 text-gold-500 ${language === 'ar' ? 'left-4' : 'right-4'}`}>
                  <Search size={20} />
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;