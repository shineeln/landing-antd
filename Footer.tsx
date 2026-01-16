
import React from 'react';
import { Shield, Cpu, ArrowRight, Zap } from 'lucide-react';
import { i18n, Language } from './i18n';
import { Reveal } from './CommonUI';

interface FooterProps {
  lang: Language;
  theme: 'light' | 'dark';
}

export const Footer: React.FC<FooterProps> = ({ lang, theme }) => {
  const t = i18n[lang];
  const isDark = theme === 'dark';

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <>
      <section className={`py-20 md:py-48 px-4 sm:px-6 relative overflow-hidden transition-colors duration-500 ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto relative group">
          <div className="absolute top-[-20%] left-[-10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-blue-600/10 rounded-full blur-[100px] md:blur-[180px] animate-pulse-slow"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-emerald-500/10 rounded-full blur-[100px] md:blur-[180px] animate-pulse-slow"></div>

          <div className={`relative rounded-[2rem] md:rounded-[5rem] overflow-hidden border glass-card-pro ${isDark ? 'border-white/10' : 'border-slate-200 shadow-xl'}`}>
            <div className="absolute inset-0 grid-bg opacity-[0.1]"></div>
            
            <div className="relative z-10 px-6 py-16 md:py-32 flex flex-col items-center text-center">
              <Reveal>
                <div className={`inline-flex items-center gap-3 px-6 md:px-8 py-2 md:py-2.5 rounded-full border mb-8 md:mb-12 ${isDark ? 'border-blue-500/20 bg-blue-500/10' : 'border-blue-100 bg-blue-50'}`}>
                  <Zap size={16} className="text-blue-500 fill-blue-500"/>
                  <span className={`text-[9px] md:text-[11px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>MISSION_CRITICAL_READY</span>
                </div>
                
                <h2 className={`text-4xl md:text-[8rem] font-black mb-8 md:mb-12 tracking-tighter leading-[1.1] md:leading-[0.85] ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  {lang === 'mn' ? (
                    <>Эрсдэлээ <br className="sm:hidden"/><span className="gradient-text-impact">Орлого</span> болго.</>
                  ) : (
                    <>Turn <span className="text-red-500">Risk</span> Into <br className="sm:hidden"/><span className="gradient-text-impact">Revenue.</span></>
                  )}
                </h2>
                
                <p className={`text-base md:text-2xl max-w-[280px] sm:max-w-2xl mx-auto mb-10 md:mb-16 font-medium leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  {t.finalCta.subtitle}
                </p>
                
                <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-8 w-full max-w-xs sm:max-w-none mx-auto">
                  <button 
                    onClick={() => scrollTo('contact')}
                    className="group h-16 md:h-24 px-8 md:px-16 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-2xl md:rounded-3xl text-xs md:text-sm uppercase tracking-[0.2em] md:tracking-[0.3em] shadow-[0_25px_60px_rgba(37,99,235,0.4)] transition-all duration-300 flex items-center justify-center gap-4 md:gap-6"
                  >
                    {t.finalCta.cta}
                    <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                  </button>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
        <style>{`
          .gradient-text-impact {
            background: linear-gradient(to right, #3b82f6, #10b981);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
        `}</style>
      </section>
      
      <footer className={`pt-20 md:pt-32 pb-12 border-t transition-colors duration-500 ${isDark ? 'bg-slate-950 border-white/5' : 'bg-slate-50 border-slate-200'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12 mb-16 md:mb-24">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4 cursor-pointer group" onClick={() => scrollTo('home')}>
                <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-600 rounded-xl md:rounded-2xl flex items-center justify-center font-black text-white text-xl shadow-lg">D</div>
                <span className={`text-xl md:text-2xl font-black uppercase tracking-[0.1em] ${isDark ? 'text-white' : 'text-slate-900'}`}>DEBTPRO</span>
              </div>
              <p className="text-sm font-bold leading-relaxed max-w-[280px] text-slate-500">
                Advanced operating system for credit recovery automation and NPL lifecycle management.
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:flex gap-x-8 gap-y-6 text-[9px] font-black uppercase tracking-[0.15em] text-slate-400">
               <button onClick={() => scrollTo('home')} className="text-left hover:text-blue-500 transition-colors">HOME</button>
               <button onClick={() => scrollTo('product')} className="text-left hover:text-blue-500 transition-colors">PLATFORM</button>
               <button onClick={() => scrollTo('why')} className="text-left hover:text-blue-500 transition-colors">ADVANTAGES</button>
               <button onClick={() => scrollTo('pricing')} className="text-left hover:text-blue-500 transition-colors">LICENSING</button>
               <button onClick={() => scrollTo('faq')} className="text-left hover:text-blue-500 transition-colors">FAQ</button>
            </div>
          </div>

          <div className={`pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-6 ${isDark ? 'border-white/5' : 'border-slate-200'}`}>
            <p className="text-[9px] font-black text-slate-600 uppercase tracking-[0.1em] text-center md:text-left">
              © 2024 KCH SOLUTION LLC. MISSION CRITICAL.
            </p>
            <div className="flex items-center gap-4">
               <span className="text-[9px] font-black text-slate-500 uppercase tracking-[0.1em] flex items-center gap-2">
                 ENGINEERED_IN_MONGOLIA <span className="text-lg">🇲🇳</span>
               </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
