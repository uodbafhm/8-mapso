import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Conseils() {
  const { t, isRTL } = useLanguage();

  const conseils = [
    {
      title: t('conseils.manual.title'),
      desc: t('conseils.manual.desc'),
      img: 'https://my-smile.ma/wp-content/uploads/2021/11/ppg7zcckx38cuz9plirvbf0z22bd.jpg'
    },
    {
      title: t('conseils.mouthwash.title'),
      desc: t('conseils.mouthwash.desc'),
      img: 'https://my-smile.ma/wp-content/uploads/2021/11/7x5qb86zorqvay7377n1omt1buld.jpg'
    },
    {
      title: t('conseils.electric.title'),
      desc: t('conseils.electric.desc'),
      img: 'https://my-smile.ma/wp-content/uploads/2021/11/wrephvxfz1x6yt2lmgn6aap4rs0k.jpg'
    },
    {
      title: t('conseils.floss.title'),
      desc: t('conseils.floss.desc'),
      img: 'https://my-smile.ma/wp-content/uploads/2021/11/phx33nph5qjae5cb4y9jczsifdln.jpg'
    }
  ];

  return (
    <div className="flex flex-col" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            src="https://my-smile.ma/wp-content/uploads/2021/11/Nouveau-projet-51-scaled.jpg" 
            alt="Conseils" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px]"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-1 bg-rose-500/20 backdrop-blur-md rounded-full text-rose-400 text-sm font-bold tracking-widest uppercase">
              {t('conseils.tag')}
            </span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold uppercase tracking-tight mb-8"
          >
            {t('conseils.title')}
          </motion.h1>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ delay: 0.4 }}
            className="h-1.5 bg-rose-500 mx-auto rounded-full"
          />
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center mb-24">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-slate-600 text-xl leading-relaxed mb-8"
          >
            {t('conseils.intro1')}
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 text-lg leading-relaxed"
          >
            {t('conseils.intro2')}
          </motion.p>
        </div>

        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
          {conseils.map((c, idx) => (
            <motion.div 
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="group bg-slate-50 rounded-[2.5rem] overflow-hidden border border-slate-100 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500"
            >
              <div className="aspect-video overflow-hidden relative">
                <img 
                  src={c.img} 
                  alt={c.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  referrerPolicy="no-referrer" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                  <CheckCircle className={`text-rose-500 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                  <span className="text-white font-bold">{t('conseils.expert')}</span>
                </div>
              </div>
              <div className="p-10 text-center">
                <h4 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-rose-500 transition-colors">
                  {c.title}
                </h4>
                <p className="text-slate-500 leading-relaxed">{c.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900 text-white text-center relative overflow-hidden">
        <div className={`absolute top-0 ${isRTL ? 'left-0' : 'right-0'} w-64 h-64 bg-rose-500/10 rounded-full blur-3xl ${isRTL ? '-ml-32' : '-mr-32'} -mt-32`}></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h3 className="text-3xl md:text-4xl font-bold mb-8">{t('conseils.cta.title')}</h3>
          <p className="text-slate-400 text-lg mb-12">{t('conseils.cta.desc')}</p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
            <Link to="/appointment" className="bg-rose-500 hover:bg-rose-600 text-white px-12 py-4 rounded-full font-bold uppercase tracking-widest transition-all inline-flex items-center space-x-3 rtl:space-x-reverse">
              <span>{t('conseils.cta.btn')}</span> <ArrowRight className={`${isRTL ? 'rotate-180' : ''}`} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
