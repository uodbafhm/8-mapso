import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Phone, Calendar } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface ServicePageProps {
  title: string;
  heroImg?: string;
  content: React.ReactNode;
}

export default function ServicePage({ title, heroImg, content }: ServicePageProps) {
  const { t, isRTL } = useLanguage();

  return (
    <div className="flex flex-col" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Modern Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            src={heroImg || "https://my-smile.ma/wp-content/uploads/2021/11/Nouveau-projet-51-scaled.jpg"} 
            alt={title} 
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
              {isRTL ? 'تخصصاتنا' : 'Nos Spécialités'}
            </span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold uppercase tracking-tight mb-8"
          >
            {title}
          </motion.h1>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ delay: 0.4 }}
            className="h-1.5 bg-rose-500 mx-auto rounded-full"
          />
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {content}
          </motion.div>

          {/* Service CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-32 p-12 bg-slate-900 rounded-[3rem] text-white text-center relative overflow-hidden"
          >
            <div className={`absolute top-0 ${isRTL ? 'left-0' : 'right-0'} w-64 h-64 bg-rose-500/10 rounded-full blur-3xl ${isRTL ? '-ml-32' : '-mr-32'} -mt-32`}></div>
            <div className={`absolute bottom-0 ${isRTL ? 'right-0' : 'left-0'} w-64 h-64 bg-rose-500/10 rounded-full blur-3xl ${isRTL ? '-mr-32' : '-ml-32'} -mb-32`}></div>
            
            <h3 className="text-3xl md:text-4xl font-bold mb-6 relative z-10">{isRTL ? 'هل تحتاج إلى موعد؟' : "Besoin d'un rendez-vous ?"}</h3>
            <p className="text-slate-400 mb-12 max-w-xl mx-auto text-lg relative z-10">
              {isRTL ? 'خبراؤنا في خدمتكم لاقتراح أفضل خطة علاج تناسب احتياجاتكم.' : 'Nos spécialistes sont à votre écoute pour vous proposer le meilleur plan de traitement adapté à vos besoins.'}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
              <Link to="/contact" className="bg-rose-500 hover:bg-rose-600 text-white px-10 py-4 rounded-full font-bold transition-all hover:scale-105 hover:shadow-xl flex items-center justify-center space-x-2 rtl:space-x-reverse">
                <Calendar size={20} /> <span>{isRTL ? 'حجز موعد عبر الإنترنت' : 'Prendre RDV en ligne'}</span>
              </Link>
              <a href="tel:+212500000000" className="bg-white/10 hover:bg-white/20 text-white px-10 py-4 rounded-full font-bold transition-all hover:scale-105 flex items-center justify-center space-x-2 rtl:space-x-reverse">
                <Phone size={20} /> <span>{isRTL ? 'اتصل بالعيادة' : 'Appeler le cabinet'}</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
