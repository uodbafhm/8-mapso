import { Play } from 'lucide-react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Urgences from './pages/Urgences';
import Conseils from './pages/Conseils';
import Appointment from './pages/Appointment';
import ServicePage from './pages/ServicePage';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';

function AppRoutes() {
  const { t, isRTL } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col bg-white font-sans">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/urgences" element={<Urgences />} />
          <Route path="/conseils" element={<Conseils />} />
          
          {/* Service Routes */}
          <Route path="/soins/implantologie" element={
            <ServicePage 
              title={t('services.implant.title')} 
              content={
                <div className="space-y-16">
                  <div className="text-center max-w-4xl mx-auto space-y-6">
                    <p className="text-slate-600 leading-relaxed">{t('services.implant.p1')}</p>
                    <p className="text-slate-600 leading-relaxed">{t('services.implant.p2')}</p>
                    <p className="text-slate-600 leading-relaxed">{t('services.implant.p3')}</p>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12 max-w-6xl mx-auto">
                    <div className="space-y-6 text-center">
                      <img src="https://my-smile.ma/wp-content/uploads/2021/11/nb2kflnvck482er5w3rrjyjlrt0u.jpg" alt="Implant" className="rounded-2xl shadow-lg w-full aspect-[4/3] object-cover" referrerPolicy="no-referrer" />
                      <h4 className="text-xl font-bold text-rose-500">{t('services.implant.pose.title')}</h4>
                      <p className="text-slate-500 text-sm leading-relaxed">{t('services.implant.pose.desc')}</p>
                    </div>
                    <div className="space-y-6 text-center">
                      <img src="https://my-smile.ma/wp-content/uploads/2021/11/yp6arss8cidwa48pzib719t254e9.jpg" alt="Analyse" className="rounded-2xl shadow-lg w-full aspect-[4/3] object-cover" referrerPolicy="no-referrer" />
                      <h4 className="text-xl font-bold text-rose-500">{t('services.implant.analysis.title')}</h4>
                      <p className="text-slate-500 text-sm leading-relaxed">{t('services.implant.analysis.desc')}</p>
                    </div>
                    <div className="space-y-6 text-center">
                      <img src="https://my-smile.ma/wp-content/uploads/2021/11/xu2o4pabhm1q5cme59jcahy55l7h.jpg" alt="Greffe" className="rounded-2xl shadow-lg w-full aspect-[4/3] object-cover" referrerPolicy="no-referrer" />
                      <h4 className="text-xl font-bold text-rose-500">{t('services.implant.greffe.title')}</h4>
                      <p className="text-slate-500 text-sm leading-relaxed">{t('services.implant.greffe.desc')}</p>
                    </div>
                    <div className="space-y-6 text-center">
                      <img src="https://my-smile.ma/wp-content/uploads/2021/11/2xhnkndee8ryp6w720liqx5f8bpi.jpg" alt="Sinus" className="rounded-2xl shadow-lg w-full aspect-[4/3] object-cover" referrerPolicy="no-referrer" />
                      <h4 className="text-xl font-bold text-rose-500">{t('services.implant.sinus.title')}</h4>
                      <p className="text-slate-500 text-sm leading-relaxed">{t('services.implant.sinus.desc')}</p>
                    </div>
                  </div>
                </div>
              } 
            />
          } />

          <Route path="/soins/orthodontie" element={
            <ServicePage 
              title={t('services.ortho.title')} 
              content={
                <div className="space-y-16">
                  <div className="text-center max-w-4xl mx-auto space-y-6">
                    <p className="text-slate-600 leading-relaxed">{t('services.ortho.p1')}</p>
                    <p className="text-slate-600 leading-relaxed">{t('services.ortho.p2')}</p>
                  </div>

                  <div className="max-w-4xl mx-auto space-y-8">
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-slate-800 mb-4">{t('services.ortho.how_title')}</h3>
                      <div className="h-1 bg-rose-500 w-20 mx-auto rounded-full mb-6"></div>
                      <p className="text-slate-600 leading-relaxed mb-4">{t('services.ortho.how_desc1')}</p>
                      <p className="text-slate-600 leading-relaxed">{t('services.ortho.how_desc2')}</p>
                    </div>

                    <div className="text-center pt-8">
                      <h3 className="text-2xl font-bold text-slate-800 mb-4">{t('services.ortho.duration_title')}</h3>
                      <div className="h-1 bg-rose-500 w-20 mx-auto rounded-full mb-6"></div>
                      <p className="text-slate-600 leading-relaxed mb-4">{t('services.ortho.duration_desc1')}</p>
                      <p className="text-slate-600 leading-relaxed">{t('services.ortho.duration_desc2')}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12 max-w-6xl mx-auto">
                    <div className="space-y-6 text-center">
                      <img src="https://my-smile.ma/wp-content/uploads/2021/11/9n27h0cq3k2eakz9xq1b4fyi2fp2.jpg" alt="Invisible" className="rounded-2xl shadow-lg w-full aspect-[4/3] object-cover" referrerPolicy="no-referrer" />
                      <h4 className="text-xl font-bold text-rose-500">{t('services.ortho.invisible.title')}</h4>
                      <p className="text-slate-500 text-sm leading-relaxed">{t('services.ortho.invisible.desc')}</p>
                    </div>
                    <div className="space-y-6 text-center">
                      <img src="https://my-smile.ma/wp-content/uploads/2021/11/ny5mdxuvh8ht5lxyjgqcknt6vuk2.jpg" alt="Adulte" className="rounded-2xl shadow-lg w-full aspect-[4/3] object-cover" referrerPolicy="no-referrer" />
                      <h4 className="text-xl font-bold text-rose-500">{t('services.ortho.adult.title')}</h4>
                      <p className="text-slate-500 text-sm leading-relaxed">{t('services.ortho.adult.desc')}</p>
                    </div>
                    <div className="space-y-6 text-center">
                      <img src="https://my-smile.ma/wp-content/uploads/2021/11/kp51rz9b4d0edk9vay4knkw6496z.jpg" alt="Invisalign" className="rounded-2xl shadow-lg w-full aspect-[4/3] object-cover" referrerPolicy="no-referrer" />
                      <h4 className="text-xl font-bold text-rose-500">{t('services.ortho.invisalign.title')}</h4>
                      <p className="text-slate-500 text-sm leading-relaxed">{t('services.ortho.invisalign.desc')}</p>
                    </div>
                    <div className="space-y-6 text-center">
                      <img src="https://my-smile.ma/wp-content/uploads/2021/11/sz7tjnaz6qtisoetbafe4e0w145i.jpg" alt="Enfants" className="rounded-2xl shadow-lg w-full aspect-[4/3] object-cover" referrerPolicy="no-referrer" />
                      <h4 className="text-xl font-bold text-rose-500">{t('services.ortho.kids.title')}</h4>
                      <p className="text-slate-500 text-sm leading-relaxed">{t('services.ortho.kids.desc')}</p>
                    </div>
                  </div>
                </div>
              } 
            />
          } />

          <Route path="/soins/parodontologie" element={
            <ServicePage 
              title={t('services.paro.title')} 
              content={
                <div className="space-y-16">
                  <div className="text-center max-w-4xl mx-auto space-y-6">
                    <p className="text-slate-600 leading-relaxed">{t('services.paro.p1')}</p>
                    <p className="text-slate-600 leading-relaxed">{t('services.paro.p2')}</p>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12 max-w-6xl mx-auto">
                    <div className="space-y-6 text-center">
                      <img src="https://my-smile.ma/wp-content/uploads/2021/11/inml9f1gnlcmwrrmz1b9fkcgf1mw.jpg" alt="Maladies" className="rounded-2xl shadow-lg w-full aspect-[4/3] object-cover" referrerPolicy="no-referrer" />
                      <h4 className="text-xl font-bold text-rose-500">{t('services.paro.diseases.title')}</h4>
                      <p className="text-slate-500 text-sm leading-relaxed">{t('services.paro.diseases.desc')}</p>
                    </div>
                    <div className="space-y-6 text-center">
                      <img src="https://my-smile.ma/wp-content/uploads/2021/11/l7kfreezp7r2pnwdgxye56dnm86a.jpg" alt="Bilan" className="rounded-2xl shadow-lg w-full aspect-[4/3] object-cover" referrerPolicy="no-referrer" />
                      <h4 className="text-xl font-bold text-rose-500">{t('services.paro.bilan.title')}</h4>
                      <p className="text-slate-500 text-sm leading-relaxed">{t('services.paro.bilan.desc')}</p>
                    </div>
                    <div className="space-y-6 text-center">
                      <img src="https://my-smile.ma/wp-content/uploads/2021/11/1idglv8a6le868gyvgiatyjww3c6.jpg" alt="Maintenance" className="rounded-2xl shadow-lg w-full aspect-[4/3] object-cover" referrerPolicy="no-referrer" />
                      <h4 className="text-xl font-bold text-rose-500">{t('services.paro.maintenance.title')}</h4>
                      <p className="text-slate-500 text-sm leading-relaxed">{t('services.paro.maintenance.desc')}</p>
                    </div>
                    <div className="space-y-6 text-center">
                      <img src="https://my-smile.ma/wp-content/uploads/2021/11/ilz65g3pe9rawnkx3scz4k1alwqc.jpg" alt="Surfacage" className="rounded-2xl shadow-lg w-full aspect-[4/3] object-cover" referrerPolicy="no-referrer" />
                      <h4 className="text-xl font-bold text-rose-500">{t('services.paro.surfacage.title')}</h4>
                      <p className="text-slate-500 text-sm leading-relaxed">{t('services.paro.surfacage.desc')}</p>
                    </div>
                  </div>
                </div>
              } 
            />
          } />

          <Route path="/soins/esthetiques" element={
            <ServicePage 
              title={t('services.esth.title')} 
              content={
                <div className="space-y-16">
                  <div className="text-center max-w-4xl mx-auto space-y-8">
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-slate-800">{t('services.esth.q1')}</h3>
                      <p className="text-slate-600 leading-relaxed">{t('services.esth.p1')}</p>
                    </div>
                    
                    <div className="space-y-6 pt-8">
                      <h3 className="text-2xl font-bold text-slate-800">{t('services.esth.q2')}</h3>
                      <p className="text-slate-600 leading-relaxed">{t('services.esth.p2')}</p>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <li key={i} className="flex items-start gap-3 text-slate-600">
                            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0" />
                            <span>{t(`services.esth.list.item${i}` as any)}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12 max-w-6xl mx-auto">
                    <div className="space-y-6 text-center">
                      <img src="https://my-smile.ma/wp-content/uploads/2021/11/tpo1jzuyfv4xr12e0no96b068z3l.jpg" alt="Facettes" className="rounded-2xl shadow-lg w-full aspect-[4/3] object-cover" referrerPolicy="no-referrer" />
                      <h4 className="text-xl font-bold text-rose-500">{t('services.esth.facettes.title')}</h4>
                      <p className="text-slate-500 text-sm leading-relaxed">{t('services.esth.facettes.desc')}</p>
                    </div>
                    <div className="space-y-6 text-center">
                      <img src="https://my-smile.ma/wp-content/uploads/2021/11/ve7cy9x4f4nhaiqvb7940o53ca24.jpg" alt="Couronnes" className="rounded-2xl shadow-lg w-full aspect-[4/3] object-cover" referrerPolicy="no-referrer" />
                      <h4 className="text-xl font-bold text-rose-500">{t('services.esth.couronnes.title')}</h4>
                      <p className="text-slate-500 text-sm leading-relaxed">{t('services.esth.couronnes.desc')}</p>
                    </div>
                    <div className="space-y-6 text-center">
                      <img src="https://my-smile.ma/wp-content/uploads/2021/11/r6vt5jluieqdo4qq0dbdx5e2z3b4.jpg" alt="Inlays" className="rounded-2xl shadow-lg w-full aspect-[4/3] object-cover" referrerPolicy="no-referrer" />
                      <h4 className="text-xl font-bold text-rose-500">{t('services.esth.inlays.title')}</h4>
                      <p className="text-slate-500 text-sm leading-relaxed">{t('services.esth.inlays.desc')}</p>
                    </div>
                    <div className="space-y-6 text-center">
                      <img src="https://my-smile.ma/wp-content/uploads/2021/11/xwmraq6vlupg4rsdqa9qujho61yp.jpg" alt="Blanchiment" className="rounded-2xl shadow-lg w-full aspect-[4/3] object-cover" referrerPolicy="no-referrer" />
                      <h4 className="text-xl font-bold text-rose-500">{t('services.esth.blanchiment.title')}</h4>
                      <p className="text-slate-500 text-sm leading-relaxed">{t('services.esth.blanchiment.desc')}</p>
                    </div>
                  </div>
                </div>
              } 
            />
          } />

          <Route path="/soins/omnipratiques" element={
            <ServicePage 
              title={t('services.omni.title')} 
              content={
                <div className="space-y-16">
                  <div className="text-center max-w-4xl mx-auto space-y-6">
                    <p className="text-slate-600 leading-relaxed">{t('services.omni.p1')}</p>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12 max-w-6xl mx-auto">
                    <div className="space-y-6 text-center">
                      <img src="https://my-smile.ma/wp-content/uploads/2021/11/pavxxhsevin57awzhjvk5i75geyb.jpg" alt="Détartrage" className="rounded-2xl shadow-lg w-full aspect-[4/3] object-cover" referrerPolicy="no-referrer" />
                      <h4 className="text-xl font-bold text-rose-500">{t('services.omni.detartrage.title')}</h4>
                      <p className="text-slate-500 text-sm leading-relaxed">{t('services.omni.detartrage.desc')}</p>
                    </div>
                    <div className="space-y-6 text-center">
                      <img src="https://my-smile.ma/wp-content/uploads/2021/11/7kwt0m0btxkrz5rlm2vb8lyij7gt.jpg" alt="Composites" className="rounded-2xl shadow-lg w-full aspect-[4/3] object-cover" referrerPolicy="no-referrer" />
                      <h4 className="text-xl font-bold text-rose-500">{t('services.omni.composites.title')}</h4>
                      <p className="text-slate-500 text-sm leading-relaxed">{t('services.omni.composites.desc')}</p>
                    </div>
                    <div className="space-y-6 text-center">
                      <img src="https://my-smile.ma/wp-content/uploads/2021/11/pavxxhsevin57awzhjvk5i75geyb.jpg" alt="Endodontie" className="rounded-2xl shadow-lg w-full aspect-[4/3] object-cover" referrerPolicy="no-referrer" />
                      <h4 className="text-xl font-bold text-rose-500">{t('services.omni.endodontie.title')}</h4>
                      <p className="text-slate-500 text-sm leading-relaxed">{t('services.omni.endodontie.desc')}</p>
                    </div>
                  </div>
                </div>
              } 
            />
          } />

          <Route path="/soins/prothetiques" element={
            <ServicePage 
              title={t('services.proth.title')} 
              content={
                <div className="space-y-16">
                  <div className="text-center max-w-4xl mx-auto space-y-6">
                    <p className="text-slate-600 leading-relaxed">{t('services.proth.p1')}</p>
                    <p className="text-slate-600 leading-relaxed">{t('services.proth.p2')}</p>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12 max-w-6xl mx-auto">
                    <div className="space-y-6 text-center">
                      <img src="https://my-smile.ma/wp-content/uploads/2021/11/r692wmohvxr7tr0c5cvpljdagtv7.jpg" alt="Couronne" className="rounded-2xl shadow-lg w-full aspect-[4/3] object-cover" referrerPolicy="no-referrer" />
                      <h4 className="text-xl font-bold text-rose-500">{t('services.proth.couronne.title')}</h4>
                      <p className="text-slate-500 text-sm leading-relaxed">{t('services.proth.couronne.desc')}</p>
                    </div>
                    <div className="space-y-6 text-center">
                      <img src="https://my-smile.ma/wp-content/uploads/2021/11/v7yi8lgu05h8r8f0njj0pk2wf2ew.jpg" alt="Bridge" className="rounded-2xl shadow-lg w-full aspect-[4/3] object-cover" referrerPolicy="no-referrer" />
                      <h4 className="text-xl font-bold text-rose-500">{t('services.proth.bridge.title')}</h4>
                      <p className="text-slate-500 text-sm leading-relaxed">{t('services.proth.bridge.desc')}</p>
                    </div>
                    <div className="space-y-6 text-center">
                      <img src="https://my-smile.ma/wp-content/uploads/2021/11/rkds20elbrsttbrci9tw9lywraa7.jpg" alt="Prothèse amovible partielle" className="rounded-2xl shadow-lg w-full aspect-[4/3] object-cover" referrerPolicy="no-referrer" />
                      <h4 className="text-xl font-bold text-rose-500">{t('services.proth.amovible_partielle.title')}</h4>
                      <p className="text-slate-500 text-sm leading-relaxed">{t('services.proth.amovible_partielle.desc')}</p>
                    </div>
                    <div className="space-y-6 text-center">
                      <img src="https://my-smile.ma/wp-content/uploads/2021/11/95b0ie1fhvxbiqwcmmynkevwgbq3.jpg" alt="Prothèse amovible complète" className="rounded-2xl shadow-lg w-full aspect-[4/3] object-cover" referrerPolicy="no-referrer" />
                      <h4 className="text-xl font-bold text-rose-500">{t('services.proth.amovible_complete.title')}</h4>
                      <p className="text-slate-500 text-sm leading-relaxed">{t('services.proth.amovible_complete.desc')}</p>
                    </div>
                  </div>
                </div>
              } 
            />
          } />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <Router>
        <AppRoutes />
      </Router>
    </LanguageProvider>
  );
}
