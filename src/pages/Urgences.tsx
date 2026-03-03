import { motion } from 'motion/react';
import { Phone, Clock, AlertCircle, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Urgences() {
  const { t, isRTL } = useLanguage();

  const urgences = [
    {
      title: t('urgences.pain.title'),
      desc: t('urgences.pain.desc'),
      img: 'https://my-smile.ma/wp-content/uploads/2021/11/k44lrh0rvtvipm2926ix9ecdwejo.jpg'
    },
    {
      title: t('urgences.proth.title'),
      desc: t('urgences.proth.desc'),
      img: 'https://my-smile.ma/wp-content/uploads/2021/11/pr3qm9a256vq40sos7ipyptqgb63.jpg'
    },
    {
      title: t('urgences.paro.title'),
      desc: t('urgences.paro.desc'),
      img: 'https://my-smile.ma/wp-content/uploads/2021/11/pdarrdrfi8skcnldti0m4balaeza.jpg'
    },
    {
      title: t('urgences.trauma.title'),
      desc: t('urgences.trauma.desc'),
      img: 'https://my-smile.ma/wp-content/uploads/2021/11/9upacwsvel2fgfxx1pcakyqhj68c.jpg'
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
            alt="Urgences" 
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
              {t('urgences.tag')}
            </span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold uppercase tracking-tight mb-8"
          >
            {t('urgences.title')}
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
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-slate-600 text-xl leading-relaxed mb-12"
            >
              {t('urgences.intro')}
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-slate-900 rounded-[3rem] p-12 text-white relative overflow-hidden shadow-2xl"
            >
              <div className={`absolute top-0 ${isRTL ? 'left-0' : 'right-0'} w-64 h-64 bg-rose-500/10 rounded-full blur-3xl ${isRTL ? '-ml-32' : '-mr-32'} -mt-32`}></div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center space-x-2 rtl:space-x-reverse bg-rose-500/20 text-rose-400 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-8">
                  <AlertCircle size={14} />
                  <span>{t('urgences.availability')}</span>
                </div>
                <h5 className="text-2xl md:text-3xl font-bold mb-6">
                  {t('urgences.hours.title')}
                </h5>
                <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
                  {t('urgences.hours.desc')}
                </p>
                <motion.a 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="tel:+2125000000000" 
                  className="inline-flex items-center gap-4 bg-rose-500 hover:bg-rose-600 text-white px-12 py-5 rounded-full font-bold text-xl transition-all shadow-xl shadow-rose-500/20"
                  dir="ltr"
                >
                  <Phone size={28} />
                  <span>+212 500 000 000</span>
                </motion.a>
                <p className="mt-8 text-slate-500 italic">{t('urgences.hours.note')}</p>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {urgences.map((u, idx) => (
              <motion.div 
                key={u.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="group bg-slate-50 rounded-[2.5rem] overflow-hidden border border-slate-100 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500"
              >
                <div className="aspect-video overflow-hidden relative">
                  <img 
                    src={u.img} 
                    alt={u.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    referrerPolicy="no-referrer" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                    <span className="text-white font-bold flex items-center">
                      {t('urgences.more')} <ArrowRight size={18} className={`mx-2 ${isRTL ? 'rotate-180' : ''}`} />
                    </span>
                  </div>
                </div>
                <div className="p-10 text-center">
                  <h4 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-rose-500 transition-colors">
                    {u.title}
                  </h4>
                  <p className="text-slate-500 leading-relaxed">{u.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
