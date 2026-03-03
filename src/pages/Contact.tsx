import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock, Send, Calendar } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Contact() {
  const { t, isRTL } = useLanguage();

  const contactInfo = [
    {
      icon: MapPin,
      title: t('contact.find.title'),
      content: t('contact.find.content'),
      color: 'rose'
    },
    {
      icon: Phone,
      title: t('contact.call.title'),
      content: (
        <div className="space-y-1" dir="ltr">
          <p className="text-rose-500 font-bold">{t('contact.call.fix')}: +212 500 000 000</p>
          <p className="text-rose-500 font-bold">WhatsApp: +212 600 000 000</p>
        </div>
      ),
      color: 'rose'
    },
    {
      icon: Mail,
      title: t('contact.email.title'),
      content: (
        <div className="space-y-1">
          <p className="text-slate-500 text-sm">{t('contact.email.desc')}</p>
          <p className="text-rose-500 font-bold">contact@mapso.ma</p>
        </div>
      ),
      color: 'rose'
    },
    {
      icon: Clock,
      title: t('contact.hours.title'),
      content: (
        <div className="text-slate-500 text-sm space-y-1">
          <p>{t('contact.hours.mon_thu')}: 09:00–13:00, 15:00–19:00</p>
          <p>{t('contact.hours.fri')}: 09:00–12:30, 15:30–19:00</p>
          <p>{t('contact.hours.sat')}: 09:00–13:00</p>
        </div>
      ),
      color: 'rose'
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
            alt="Contact" 
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
              {t('contact.tag')}
            </span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold uppercase tracking-tight mb-8"
          >
            {t('contact.title')}
          </motion.h1>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ delay: 0.4 }}
            className="h-1.5 bg-rose-500 mx-auto rounded-full"
          />
        </div>
      </section>

      {/* Info Cards */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, idx) => (
              <motion.div 
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="text-center p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 group"
              >
                <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-sm group-hover:bg-rose-500 group-hover:text-white transition-all duration-500">
                  <info.icon className="text-rose-500 group-hover:text-white transition-colors" size={32} />
                </div>
                <h5 className="text-xl font-bold text-slate-800 mb-4">{info.title}</h5>
                <div className="text-slate-500 leading-relaxed">
                  {info.content}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-rose-500/5 rounded-full blur-3xl -ml-48 -mt-48"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mb-6">{t('contact.form.title')}</h2>
            <p className="text-slate-500 text-lg">{t('contact.form.desc')}</p>
          </div>
          
          <motion.form 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8 bg-white p-10 md:p-16 rounded-[3rem] shadow-2xl border border-slate-100"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className={`text-sm font-bold text-slate-700 uppercase tracking-widest ${isRTL ? 'mr-1' : 'ml-1'}`}>{t('contact.form.name')}</label>
                <input type="text" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-rose-500 outline-none transition-all placeholder:text-slate-300" placeholder={t('contact.form.name_placeholder')} required />
              </div>
              <div className="space-y-2">
                <label className={`text-sm font-bold text-slate-700 uppercase tracking-widest ${isRTL ? 'mr-1' : 'ml-1'}`}>{t('contact.form.email')}</label>
                <input type="email" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-rose-500 outline-none transition-all placeholder:text-slate-300" placeholder="jean@exemple.com" required />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className={`text-sm font-bold text-slate-700 uppercase tracking-widest ${isRTL ? 'mr-1' : 'ml-1'}`}>{t('appointment.form.date')}</label>
                <div className="relative">
                  <Calendar className={`absolute ${isRTL ? 'right-4' : 'left-4'} top-1/2 -translate-y-1/2 text-slate-400`} size={20} />
                  <input type="date" className={`w-full ${isRTL ? 'pr-12 pl-6' : 'pl-12 pr-6'} py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-rose-500 outline-none transition-all`} required />
                </div>
              </div>
              <div className="space-y-2">
                <label className={`text-sm font-bold text-slate-700 uppercase tracking-widest ${isRTL ? 'mr-1' : 'ml-1'}`}>{t('appointment.form.time')}</label>
                <div className="relative">
                  <Clock className={`absolute ${isRTL ? 'right-4' : 'left-4'} top-1/2 -translate-y-1/2 text-slate-400`} size={20} />
                  <input type="time" className={`w-full ${isRTL ? 'pr-12 pl-6' : 'pl-12 pr-6'} py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-rose-500 outline-none transition-all`} required />
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <label className={`text-sm font-bold text-slate-700 uppercase tracking-widest ${isRTL ? 'mr-1' : 'ml-1'}`}>{t('contact.form.subject')}</label>
              <input type="text" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-rose-500 outline-none transition-all placeholder:text-slate-300" placeholder={t('contact.form.subject_placeholder')} required />
            </div>
            <div className="space-y-2">
              <label className={`text-sm font-bold text-slate-700 uppercase tracking-widest ${isRTL ? 'mr-1' : 'ml-1'}`}>{t('contact.form.message')}</label>
              <textarea rows={6} className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-rose-500 outline-none transition-all placeholder:text-slate-300" placeholder={t('contact.form.message_placeholder')} required></textarea>
            </div>
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit" 
              className="w-full bg-rose-500 hover:bg-rose-600 text-white font-bold py-5 rounded-2xl transition-all shadow-xl shadow-rose-500/20 flex items-center justify-center space-x-3 rtl:space-x-reverse"
            >
              <Send size={20} />
              <span>{t('contact.form.send')}</span>
            </motion.button>
          </motion.form>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full h-[500px] bg-slate-100 relative">
        <iframe 
          width="100%" 
          height="100%" 
          frameBorder="0" 
          scrolling="no" 
          marginHeight={0} 
          marginWidth={0} 
          src="https://maps.google.com/maps?q=Casablanca&t=&z=13&ie=UTF8&iwloc=&output=embed"
          className="grayscale hover:grayscale-0 transition-all duration-700"
        >
        </iframe>
        <div className={`absolute bottom-10 ${isRTL ? 'right-1/2 translate-x-1/2' : 'left-1/2 -translate-x-1/2'} bg-white p-6 rounded-3xl shadow-2xl border border-slate-100 hidden md:flex items-center space-x-4 rtl:space-x-reverse`}>
          <div className="w-12 h-12 bg-rose-500 rounded-2xl flex items-center justify-center text-white">
            <MapPin size={24} />
          </div>
          <div>
            <p className="font-bold text-slate-800">{t('contact.map.cabinet')}</p>
            <p className="text-sm text-slate-500">{t('contact.map.location')}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
