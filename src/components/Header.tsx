import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, MapPin, Menu, X, ChevronDown, Instagram, Facebook, Globe, Search, Sparkles, Smile, ShieldCheck, Activity, Stethoscope, Layers } from 'lucide-react';
import { motion, AnimatePresence, LayoutGroup } from 'motion/react';
import { useLanguage, Language } from '../contexts/LanguageContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSoinsOpen, setIsSoinsOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t, isRTL } = useLanguage();

  const serviceIcons: Record<string, any> = {
    'implant': Activity,
    'ortho': Smile,
    'paro': ShieldCheck,
    'esth': Sparkles,
    'omni': Stethoscope,
    'proth': Layers,
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsSearchOpen(false);
  }, [location]);

  const navItems = [
    { name: t('nav.home'), path: '/' },
    {
      name: t('nav.soins'),
      path: '#',
      dropdown: true,
      children: [
        { id: 'implant', name: t('services.implant.title'), path: '/soins/implantologie', desc: t('service.impl.desc') },
        { id: 'ortho', name: t('services.ortho.title'), path: '/soins/orthodontie', desc: t('service.ortho.desc') },
        { id: 'paro', name: t('services.paro.title'), path: '/soins/parodontologie', desc: t('service.paro.desc') },
        { id: 'esth', name: t('services.esth.title'), path: '/soins/esthetiques', desc: t('service.esth.desc') },
        { id: 'omni', name: t('services.omni.title'), path: '/soins/omnipratiques', desc: t('service.omni.desc') },
        { id: 'proth', name: t('services.proth.title'), path: '/soins/prothetiques', desc: t('service.proth.desc') },
      ],
    },
    { name: t('nav.urgences'), path: '/urgences', highlight: true },
    { name: t('nav.conseils'), path: '/conseils' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  const languages: Language[] = ['FR', 'AR', 'EN', 'ES'];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-white/90 backdrop-blur-xl shadow-lg py-1' : 'bg-white py-4'
    }`} dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Top Bar - Hidden on scroll */}
      <AnimatePresence>
        {!isScrolled && (
          <motion.div 
            initial={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="hidden lg:block bg-slate-900 text-white py-2 overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-xs font-medium">
              <div className="flex items-center gap-6">
                <a href="tel:+212500000000" className="flex items-center hover:text-rose-400 transition-colors" dir="ltr">
                  <Phone size={14} className="mx-2" /> +212 500 000 000
                </a>
                <span className="flex items-center">
                  <MapPin size={14} className="mx-2" /> {t('header.location')}
                </span>
              </div>
              <div className="flex items-center gap-4">
                <a href="#" className="hover:text-rose-400 transition-colors"><Facebook size={14} /></a>
                <a href="#" className="hover:text-rose-400 transition-colors"><Instagram size={14} /></a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-4">
        <nav className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <div className="w-10 h-10 bg-rose-500 rounded-xl flex items-center justify-center text-white font-bold text-xl mx-3 group-hover:rotate-12 transition-transform">
              M
            </div>
            <div>
              <span className="text-xl font-bold text-slate-800 tracking-tight">MAPSO</span>
              <span className="block text-[10px] text-slate-500 uppercase tracking-widest -mt-1">{t('header.subtitle')}</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8 rtl:space-x-reverse">
            <LayoutGroup>
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  {item.dropdown ? (
                    <div 
                      className="flex items-center text-slate-600 hover:text-rose-500 font-semibold cursor-pointer py-2 transition-colors"
                      onMouseEnter={() => setIsSoinsOpen(true)}
                      onMouseLeave={() => setIsSoinsOpen(false)}
                    >
                      {item.name} <ChevronDown size={14} className={`mx-1 transition-transform duration-300 ${isSoinsOpen ? 'rotate-180' : ''}`} />
                      
                      <AnimatePresence>
                        {isSoinsOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 15, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            className={`absolute top-full ${isRTL ? 'right-0' : 'left-0'} w-[600px] bg-white shadow-2xl rounded-[2rem] p-8 mt-4 border border-slate-100 grid grid-cols-2 gap-6 z-50`}
                          >
                            {item.children?.map((child) => {
                              const Icon = serviceIcons[child.id || ''] || Activity;
                              return (
                                <Link
                                  key={child.name}
                                  to={child.path}
                                  className="group/item flex items-start gap-4 p-4 rounded-2xl hover:bg-rose-50 transition-all duration-300"
                                >
                                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-rose-500 group-hover/item:bg-rose-500 group-hover/item:text-white transition-all duration-300">
                                    <Icon size={24} />
                                  </div>
                                  <div className="flex-1">
                                    <h4 className="text-sm font-bold text-slate-800 mb-1 group-hover/item:text-rose-500 transition-colors">{child.name}</h4>
                                    <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">{child.desc}</p>
                                  </div>
                                </Link>
                              );
                            })}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link 
                      to={item.path} 
                      className={`relative text-slate-600 hover:text-rose-500 font-semibold py-2 transition-colors flex items-center ${
                        location.pathname === item.path ? 'text-rose-500' : ''
                      } ${item.highlight ? 'text-rose-600' : ''}`}
                    >
                      {item.highlight && <span className="w-1.5 h-1.5 bg-rose-500 rounded-full mx-1 animate-pulse" />}
                      {item.name}
                      {location.pathname === item.path && (
                        <motion.div 
                          layoutId="navUnderline"
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-rose-500 rounded-full"
                          transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                    </Link>
                  )}
                </div>
              ))}
            </LayoutGroup>

            {/* Search Button */}
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="p-2 text-slate-600 hover:text-rose-500 transition-colors"
            >
              <Search size={20} />
            </button>

            {/* Language Switcher */}
            <div className="relative group">
              <div 
                className="flex items-center text-slate-600 hover:text-rose-500 font-medium py-2 cursor-pointer"
                onMouseEnter={() => setIsLangOpen(true)}
                onMouseLeave={() => setIsLangOpen(false)}
              >
                <Globe size={16} className="mx-1" /> {language} <ChevronDown size={14} className={`mx-1 transition-transform ${isLangOpen ? 'rotate-180' : ''}`} />
                
                <AnimatePresence>
                  {isLangOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className={`absolute top-full ${isRTL ? 'right-0' : 'left-0'} w-24 bg-white shadow-xl rounded-xl p-2 mt-2 border border-slate-100`}
                    >
                      <div className="grid gap-1">
                        {languages.map((lang) => (
                          <button
                            key={lang}
                            onClick={() => {
                              setLanguage(lang);
                              setIsLangOpen(false);
                            }}
                            className={`text-sm p-2 rounded-lg transition-all text-center ${
                              language === lang ? 'bg-rose-500 text-white' : 'text-slate-600 hover:bg-rose-50'
                            }`}
                          >
                            {lang}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
            
            <Link 
              to="/appointment" 
              className="bg-rose-500 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-rose-600 hover:shadow-lg hover:-translate-y-0.5 transition-all"
            >
              {t('nav.appointment')}
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden p-2 text-slate-600 hover:text-rose-500 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>
      </div>

      {/* Search Overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-slate-900/95 backdrop-blur-xl flex items-center justify-center p-4"
          >
            <button 
              onClick={() => setIsSearchOpen(false)}
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
            >
              <X size={40} />
            </button>
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="w-full max-w-2xl"
            >
              <input 
                autoFocus
                type="text" 
                placeholder={t('hero.cta') + '...'}
                className="w-full bg-transparent border-b-2 border-white/20 py-6 text-3xl md:text-5xl text-white outline-none focus:border-rose-500 transition-colors placeholder:text-white/20"
              />
              <p className="mt-4 text-white/40 text-sm uppercase tracking-widest font-bold">Appuyez sur Entrée pour rechercher</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: isRTL ? '100%' : '-100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: isRTL ? '100%' : '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] lg:hidden bg-white overflow-y-auto"
            dir={isRTL ? 'rtl' : 'ltr'}
          >
            <div className="p-6 flex flex-col min-h-full">
              <div className="flex justify-between items-center mb-8">
                <Link to="/" className="flex items-center" onClick={() => setIsMenuOpen(false)}>
                  <div className="w-10 h-10 bg-rose-500 rounded-xl flex items-center justify-center text-white font-bold text-xl mx-3">M</div>
                  <span className="text-xl font-bold text-slate-800">MAPSO</span>
                </Link>
                <button onClick={() => setIsMenuOpen(false)} className="p-2 text-slate-600 hover:text-rose-500 transition-colors">
                  <X size={32} />
                </button>
              </div>

              <div className="flex flex-col space-y-4 mb-8">
                {/* Mobile Search */}
                <div className="relative mb-4">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input 
                    type="text" 
                    placeholder={t('hero.cta') + '...'}
                    className="w-full bg-slate-50 border-none rounded-2xl py-4 pl-12 pr-6 text-slate-800 outline-none focus:ring-2 focus:ring-rose-500 transition-all"
                  />
                </div>

                {navItems.map((item, idx) => (
                  <motion.div 
                    key={item.name} 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="border-b border-slate-50 pb-4 last:border-0"
                  >
                    {item.dropdown ? (
                      <div className="space-y-4">
                        <button 
                          onClick={() => setIsSoinsOpen(!isSoinsOpen)}
                          className="flex items-center justify-between w-full text-xl font-bold text-slate-800"
                        >
                          <span className="flex items-center">
                            {item.name}
                            {item.highlight && <span className="w-1.5 h-1.5 bg-rose-500 rounded-full mx-2 animate-pulse" />}
                          </span>
                          <ChevronDown size={20} className={`transition-transform duration-300 ${isSoinsOpen ? 'rotate-180' : ''}`} />
                        </button>
                        <AnimatePresence>
                          {isSoinsOpen && (
                            <motion.div 
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className={`mx-4 ${isRTL ? 'border-r-2' : 'border-l-2'} border-rose-100 flex flex-col space-y-3 overflow-hidden mt-2`}
                            >
                              {item.children?.map((child) => (
                                <Link 
                                  key={child.name} 
                                  to={child.path} 
                                  className="text-base text-slate-600 hover:text-rose-500 py-1 flex items-center gap-3"
                                  onClick={() => setIsMenuOpen(false)}
                                >
                                  <div className="w-1.5 h-1.5 bg-rose-200 rounded-full" />
                                  {child.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link 
                        to={item.path} 
                        className={`text-xl font-bold text-slate-800 hover:text-rose-500 transition-colors flex items-center ${
                          item.highlight ? 'text-rose-600' : ''
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                        {item.highlight && <span className="w-1.5 h-1.5 bg-rose-500 rounded-full mx-2 animate-pulse" />}
                      </Link>
                    )}
                  </motion.div>
                ))}
              </div>
              
              {/* Mobile Language Switcher */}
              <div className="py-6 border-t border-slate-100 mb-8">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">{t('header.language')}</p>
                <div className="grid grid-cols-4 gap-2">
                  {languages.map((lang) => (
                    <button
                      key={lang}
                      onClick={() => {
                        setLanguage(lang);
                        // Optional: close menu on language change or keep it open
                      }}
                      className={`h-12 rounded-xl font-bold transition-all text-sm ${
                        language === lang ? 'bg-rose-500 text-white shadow-lg shadow-rose-500/20' : 'bg-slate-50 text-slate-600'
                      }`}
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-auto pt-8 border-t border-slate-100">
                <a href="tel:+212500000000" className="flex items-center text-lg font-bold text-rose-500 mb-6" dir="ltr">
                  <Phone className="mx-3" size={20} /> +212 500 000 000
                </a>
                <Link 
                  to="/appointment" 
                  className="block w-full bg-slate-900 text-white text-center py-4 rounded-2xl font-bold text-lg hover:bg-rose-500 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('nav.appointment')}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
