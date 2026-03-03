import { motion } from 'motion/react';
import { Calendar, Clock, ClipboardList, Send } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Appointment() {
  const { t, isRTL } = useLanguage();

  const services = [
    t('service.omni.title'),
    t('service.ortho.title'),
    t('service.esth.title'),
    t('service.paro.title'),
    t('service.proth.title'),
    t('service.impl.title'),
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
            alt="Appointment" 
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
              {t('appointment.tag')}
            </span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold uppercase tracking-tight mb-8"
          >
            {t('appointment.title')}
          </motion.h1>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ delay: 0.4 }}
            className="h-1.5 bg-rose-500 mx-auto rounded-full"
          />
        </div>
      </section>

      {/* Form Section */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-rose-500/5 rounded-full blur-3xl -mr-48 -mt-48"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mb-6">{t('appointment.form.title')}</h2>
            <p className="text-slate-500 text-lg">{t('appointment.form.desc')}</p>
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
              <label className={`text-sm font-bold text-slate-700 uppercase tracking-widest ${isRTL ? 'mr-1' : 'ml-1'}`}>{t('appointment.form.service')}</label>
              <div className="relative">
                <ClipboardList className={`absolute ${isRTL ? 'right-4' : 'left-4'} top-1/2 -translate-y-1/2 text-slate-400`} size={20} />
                <select className={`w-full ${isRTL ? 'pr-12 pl-6' : 'pl-12 pr-6'} py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-rose-500 outline-none transition-all appearance-none`}>
                  {services.map((service) => (
                    <option key={service} value={service}>{service}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className={`text-sm font-bold text-slate-700 uppercase tracking-widest ${isRTL ? 'mr-1' : 'ml-1'}`}>{t('contact.form.message')}</label>
              <textarea rows={4} className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-rose-500 outline-none transition-all placeholder:text-slate-300" placeholder={t('contact.form.message_placeholder')}></textarea>
            </div>

            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit" 
              className="w-full bg-rose-500 hover:bg-rose-600 text-white font-bold py-5 rounded-2xl transition-all shadow-xl shadow-rose-500/20 flex items-center justify-center space-x-3 rtl:space-x-reverse"
            >
              <Send size={20} />
              <span>{t('appointment.form.submit')}</span>
            </motion.button>
          </motion.form>
        </div>
      </section>
    </div>
  );
}
