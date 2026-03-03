import { Link } from 'react-router-dom';
import { Facebook, Instagram, Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t, isRTL } = useLanguage();

  return (
    <footer className="bg-slate-900 text-white pt-24 pb-12 relative overflow-hidden" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-rose-500 via-rose-400 to-rose-500"></div>
      <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-rose-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Column 1: Brand & About */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center mb-8 group">
              <div className="w-10 h-10 bg-rose-500 rounded-xl flex items-center justify-center text-white font-bold text-xl mx-3 group-hover:rotate-12 transition-transform">
                M
              </div>
              <span className="text-2xl font-bold tracking-tight">MAPSO</span>
            </Link>
            <p className="text-slate-400 leading-relaxed mb-10 text-sm">
              {t('footer.about')}
            </p>
            <div className="flex gap-4">
              {[
                { icon: Facebook, href: '#' },
                { icon: Instagram, href: '#' }
              ].map((social, i) => (
                <motion.a 
                  key={i}
                  whileHover={{ y: -5, backgroundColor: '#f43f5e' }}
                  href={social.href} 
                  className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center transition-colors border border-white/10"
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h5 className="text-lg font-bold mb-8 flex items-center">
              {t('footer.nav')} <div className="mx-3 h-1 w-6 bg-rose-500 rounded-full"></div>
            </h5>
            <ul className="space-y-4">
              {[
                { name: t('nav.home'), path: '/' },
                { name: t('nav.soins'), path: '/soins/omnipratiques' },
                { name: t('nav.urgences'), path: '/urgences' },
                { name: t('nav.conseils'), path: '/conseils' },
                { name: t('nav.contact'), path: '/contact' },
                { name: t('nav.appointment'), path: '/appointment' }
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-slate-400 hover:text-rose-400 transition-all flex items-center group text-sm"
                  >
                    <ArrowRight size={14} className={`mx-2 opacity-0 ${isRTL ? '-mr-4 group-hover:mr-0' : '-ml-4 group-hover:ml-0'} transition-all`} />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="lg:col-span-2">
            <h5 className="text-lg font-bold mb-8 flex items-center">
              {t('footer.contact')} <div className="mx-3 h-1 w-6 bg-rose-500 rounded-full"></div>
            </h5>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4 rtl:space-x-reverse group">
                  <div className="w-10 h-10 bg-rose-500/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-rose-500 transition-colors">
                    <MapPin size={18} className="text-rose-500 group-hover:text-white transition-colors" />
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {t('contact.find.content')}
                  </p>
                </div>
                <div className="flex items-center space-x-4 rtl:space-x-reverse group">
                  <div className="w-10 h-10 bg-rose-500/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-rose-500 transition-colors">
                    <Mail size={18} className="text-rose-500 group-hover:text-white transition-colors" />
                  </div>
                  <p className="text-slate-400 text-sm">contact@mapso.ma</p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-center space-x-4 rtl:space-x-reverse group">
                  <div className="w-10 h-10 bg-rose-500/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-rose-500 transition-colors">
                    <Phone size={18} className="text-rose-500 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-xs uppercase tracking-widest mb-1">{t('contact.call.fix')}</p>
                    <p className="text-white font-bold text-sm" dir="ltr">+212 500 000 000</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 rtl:space-x-reverse group">
                  <div className="w-10 h-10 bg-rose-500/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-rose-500 transition-colors">
                    <Phone size={18} className="text-rose-500 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-xs uppercase tracking-widest mb-1">WhatsApp</p>
                    <p className="text-rose-400 font-bold text-sm" dir="ltr">+212 600 000 000</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-slate-500 text-xs font-medium">
            &copy; {currentYear} MAPSO {t('header.subtitle')}. {t('footer.rights')}
          </p>
          <div className="flex items-center space-x-6">
            <div className="flex space-x-4">
              <img 
                src="https://my-smile.ma/wp-content/uploads/2021/12/google-play.png" 
                alt="Google Play" 
                className="h-8 opacity-40 hover:opacity-100 transition-opacity cursor-pointer grayscale hover:grayscale-0"
                referrerPolicy="no-referrer"
              />
              <img 
                src="https://my-smile.ma/wp-content/uploads/2021/12/app-store-2.png" 
                alt="App Store" 
                className="h-8 opacity-40 hover:opacity-100 transition-opacity cursor-pointer grayscale hover:grayscale-0"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

