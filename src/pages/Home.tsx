import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Shield, Heart, Smile, Clock, Phone, Stethoscope, MapPin, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Home() {
  const { t, isRTL } = useLanguage();

  const services = [
    {
      title: t('service.omni.title'),
      desc: t('service.omni.desc'),
      img: 'https://my-smile.ma/wp-content/uploads/2021/09/pu0xa44xunq85kgfgrchrzmjrnuw.jpg',
      link: '/soins/omnipratiques'
    },
    {
      title: t('service.ortho.title'),
      desc: t('service.ortho.desc'),
      img: 'https://my-smile.ma/wp-content/uploads/2021/09/kievnq8zk21600x26qu3h1m5c0k2.jpg',
      link: '/soins/orthodontie'
    },
    {
      title: t('service.esth.title'),
      desc: t('service.esth.desc'),
      img: 'https://my-smile.ma/wp-content/uploads/2021/09/o5pprcom8azpui2s76b47asjr5p9.jpg',
      link: '/soins/esthetiques'
    },
    {
      title: t('service.paro.title'),
      desc: t('service.paro.desc'),
      img: 'https://my-smile.ma/wp-content/uploads/2021/09/inml9f1gnlcmwrrmz1b9fkcgf1mw.jpg',
      link: '/soins/parodontologie'
    },
    {
      title: t('service.proth.title'),
      desc: t('service.proth.desc'),
      img: 'https://my-smile.ma/wp-content/uploads/2021/09/e73l2hg0epomco588l0lidch4iqf.jpg',
      link: '/soins/prothetiques'
    },
    {
      title: t('service.impl.title'),
      desc: t('service.impl.desc'),
      img: 'https://my-smile.ma/wp-content/uploads/2021/09/u16la1d5288ev6wnojtzokndjjtm.jpg',
      link: '/soins/implantologie'
    }
  ];

  const features = [
    { title: t('features.team.title'), desc: t('features.team.desc'), icon: Stethoscope },
    { title: t('features.human.title'), desc: t('features.human.desc'), icon: Heart },
    { title: t('features.client.title'), desc: t('features.client.desc'), icon: Smile },
    { title: t('features.covid.title'), desc: t('features.covid.desc'), icon: Shield },
    { title: t('features.advice.title'), desc: t('features.advice.desc'), icon: Phone },
    { title: t('features.urgency.title'), desc: t('features.urgency.desc'), icon: Clock },
  ];

  return (
    <div className="flex flex-col" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse' }}
            src="https://my-smile.ma/wp-content/uploads/2017/04/slide-3.jpg" 
            alt="Hero" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[2px]"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1 bg-rose-500/20 backdrop-blur-md rounded-full text-rose-400 text-sm font-bold tracking-widest uppercase mb-6"
          >
            {t('hero.welcome')}
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-8 leading-tight tracking-tight"
          >
            {t('hero.title')}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl font-light mb-12 text-slate-200"
          >
            {t('hero.subtitle')}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link 
              to="/appointment" 
              className="bg-rose-500 hover:bg-rose-600 text-white px-10 py-4 rounded-full font-bold uppercase tracking-wider transition-all hover:scale-105 hover:shadow-xl shadow-rose-500/20"
            >
              {t('hero.cta')}
            </Link>
            <a 
              href="tel:+212500000000" 
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-10 py-4 rounded-full font-bold uppercase tracking-wider transition-all"
            >
              {t('hero.call')}
            </a>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-2">
            <motion.div 
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2 bg-white rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-slate-800 mb-6"
            >
              {t('services.title')}
            </motion.h2>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              className="h-1.5 bg-rose-500 mx-auto rounded-full mb-8"
            />
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">
              {t('services.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, idx) => (
              <motion.div 
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="group bg-slate-50 rounded-[2.5rem] overflow-hidden border border-slate-100 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500"
              >
                <div className="overflow-hidden h-64 relative">
                  <img 
                    src={service.img} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                    <span className="text-white font-bold flex items-center">
                      {t('services.details')} <ArrowRight size={18} className={`mx-2 ${isRTL ? 'rotate-180' : ''}`} />
                    </span>
                  </div>
                </div>
                <div className="p-10">
                  <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-rose-500 transition-colors">
                    <Link to={service.link}>{service.title}</Link>
                  </h3>
                  <p className="text-slate-500 leading-relaxed mb-8">{service.desc}</p>
                  <Link to={service.link} className="inline-flex items-center text-rose-500 font-bold hover:translate-x-2 transition-transform">
                    {t('services.more')} <ArrowRight size={16} className={`mx-2 ${isRTL ? 'rotate-180' : ''}`} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl -ml-48 -mb-48"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <motion.div 
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ scale: 1.02 }}
                className="flex flex-col p-10 bg-white/5 backdrop-blur-sm rounded-[2rem] border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-rose-500/20 rounded-2xl flex items-center justify-center mb-8">
                  <feature.icon className="text-rose-400" size={32} />
                </div>
                <h4 className="text-2xl font-bold mb-4">{feature.title}</h4>
                <p className="text-slate-400 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className={`absolute -top-10 ${isRTL ? '-right-10' : '-left-10'} w-32 h-32 bg-rose-50 rounded-full -z-10`}></div>
            <h5 className="text-rose-500 font-bold tracking-widest uppercase mb-6">{t('about.tag')}</h5>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-8 leading-tight">{t('about.title')}</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-10 text-justify">
              {t('about.p1')}
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-12 text-justify">
              {t('about.p2')}
            </p>
            <Link 
              to="/contact" 
              className="group bg-slate-900 hover:bg-rose-500 text-white px-10 py-4 rounded-full font-bold uppercase tracking-wider transition-all inline-flex items-center"
            >
              {t('about.cta')} <ArrowRight size={20} className={`mx-3 group-hover:translate-x-2 transition-transform ${isRTL ? 'rotate-180' : ''}`} />
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className={`absolute -bottom-6 ${isRTL ? '-left-6' : '-right-6'} w-full h-full border-2 border-rose-500 rounded-[2.5rem] -z-10`}></div>
            <div className="aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl bg-slate-100">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/9D9LyiN4GWU" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="grid grid-cols-1 md:grid-cols-3">
        <Link to="/urgences" className="bg-rose-50 hover:bg-rose-100 transition-all duration-500 py-24 px-8 text-center group relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-rose-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
          <Clock className="mx-auto mb-8 text-rose-500 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500" size={56} />
          <h4 className="text-2xl font-bold text-slate-800 mb-4">{t('quick.urgency.title')}</h4>
          <p className="text-slate-500 font-medium">{t('quick.urgency.desc')}</p>
        </Link>
        <Link to="/conseils" className="bg-white hover:bg-slate-50 transition-all duration-500 py-24 px-8 text-center group relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-rose-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
          <Phone className="mx-auto mb-8 text-rose-500 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500" size={56} />
          <h4 className="text-2xl font-bold text-slate-800 mb-4">{t('quick.advice.title')}</h4>
          <p className="text-slate-500 font-medium">{t('quick.advice.desc')}</p>
        </Link>
        <Link to="/contact" className="bg-slate-900 hover:bg-slate-800 transition-all duration-500 py-24 px-8 text-center group relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-rose-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
          <MapPin className="mx-auto mb-8 text-rose-400 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500" size={56} />
          <h4 className="text-2xl font-bold text-white mb-4">{t('quick.find.title')}</h4>
          <p className="text-slate-400 font-medium">{t('quick.find.desc')}</p>
        </Link>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-rose-500 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row justify-between items-center gap-12 relative z-10">
          <div className={`text-center ${isRTL ? 'lg:text-right' : 'lg:text-left'}`}>
            <h3 className="text-3xl md:text-5xl font-bold mb-6">{t('cta.title')}</h3>
            <p className="text-rose-100 text-xl font-light">{t('cta.subtitle')}</p>
          </div>
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="tel:+2125000000000" 
            className="flex items-center gap-4 bg-white text-rose-500 px-12 py-6 rounded-full font-bold text-2xl shadow-2xl hover:shadow-white/20 transition-all"
            dir="ltr"
          >
            <Phone size={32} />
            <span>+212 500 000 000</span>
          </motion.a>
        </div>
      </section>
    </div>
  );
}
