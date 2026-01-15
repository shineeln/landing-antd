
import React from 'react';
import { Shield, Cpu, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
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
      {/* High-Impact Final CTA Section - Refined for Cinematic Presence */}
      <section className={`py-48 px-6 relative overflow-hidden transition-colors duration-500 ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto relative group">
          {/* Dynamic Ambient Background Elements */}
          <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[180px] animate-pulse-slow"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[180px] animate-pulse-slow"></div>

          <div className={`relative rounded-[5rem] overflow-hidden border glass-card-pro shadow-[0_80px_160px_rgba(0,0,0,0.8)] ${isDark ? 'border-white/10' : 'border-slate-200 shadow-xl'}`}>
            <div className="absolute inset-0 grid-bg opacity-[0.15]"></div>
            
            {/* Full-width Impactful Content */}
            <div className="relative z-10 px-8 py-24 md:py-32 flex flex-col items-center text-center">
              <Reveal>
                <div className={`inline-flex items-center gap-3 px-8 py-2.5 rounded-full border mb-12 ${isDark ? 'border-blue-500/20 bg-blue-500/10' : 'border-blue-100 bg-blue-50'}`}>
                  <Zap size={18} className="text-blue-500 fill-blue-500"/>
                  <span className={`text-[11px] font-black uppercase tracking-[0.3em] ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>MISSION_CRITICAL_READY</span>
                </div>
                
                <h2 className={`text-6xl md:text-[8rem] font-black mb-12 tracking-tighter leading-[0.85] ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  {lang === 'mn' ? (
                    <>Эрсдэлээ <br/><span className="gradient-text-impact">Орлого</span> болго.</>
                  ) : (
                    <>Turn <span className="text-red-500">Risk</span> Into <span className="gradient-text-impact">Revenue.</span></>
                  )}
                </h2>
                
                <p className={`text-xl md:text-2xl max-w-2xl mx-auto mb-16 font-medium leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  {t.finalCta.subtitle}
                </p>
                
                <div className="flex flex-col sm:flex-row justify-center gap-8">
                  <button 
                    onClick={() => scrollTo('contact')}
                    className="group h-24 px-16 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-3xl text-sm uppercase tracking-[0.3em] shadow-[0_25px_60px_rgba(37,99,235,0.4)] hover:shadow-[0_35px_80px_rgba(37,99,235,0.5)] active:scale-95 transition-all duration-300 flex items-center justify-center gap-6"
                  >
                    {t.finalCta.cta}
                    <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
                  </button>
                </div>
                
                {/* Micro Details */}
                <div className="mt-16 flex justify-center gap-12 opacity-40">
                   <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">ISO_27001</span>
                   </div>
                   <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">CORE_SYNC_V4</span>
                   </div>
                   <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">GDPR_COMPLIANT</span>
                   </div>
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
      
      {/* Standard Obsidian Footer */}
      <footer className={`pt-32 pb-16 border-t transition-colors duration-500 ${isDark ? 'bg-slate-950 border-white/5' : 'bg-slate-50 border-slate-200'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-16 mb-24">
            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-4 cursor-pointer group" onClick={() => scrollTo('home')}>
                <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center font-black text-white text-xl shadow-2xl shadow-blue-600/30 group-hover:scale-110 transition-transform">D</div>
                <span className={`text-2xl font-black uppercase tracking-[0.1em] ${isDark ? 'text-white' : 'text-slate-900'}`}>DEBTPRO</span>
              </div>
              <p className="text-sm font-bold leading-relaxed max-w-xs text-slate-500">
                Advanced operating system for credit recovery automation and NPL lifecycle management.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-x-14 gap-y-6 text-[10px] font-black uppercase tracking-[0.15em] text-slate-400">
               <button onClick={() => scrollTo('home')} className="hover:text-blue-500 transition-colors">HOME_CMD</button>
               <button onClick={() => scrollTo('product')} className="hover:text-blue-500 transition-colors">PLATFORM_OS</button>
               <button onClick={() => scrollTo('why')} className="hover:text-blue-500 transition-colors">ADVANTAGES</button>
               <button onClick={() => scrollTo('pricing')} className="hover:text-blue-500 transition-colors">LICENSING</button>
               <button onClick={() => scrollTo('faq')} className="hover:text-blue-500 transition-colors">DOCS_FAQ</button>
            </div>

            <div className="flex flex-col sm:flex-row gap-10">
               <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${isDark ? 'bg-blue-600/10 text-blue-500 border-blue-500/20' : 'bg-blue-50 text-blue-600 border-blue-100'}`}>
                    <Shield size={20}/>
                  </div>
                  <div>
                    <div className={`text-[10px] font-black uppercase tracking-[0.1em] ${isDark ? 'text-white' : 'text-slate-900'}`}>ISO_27001</div>
                    <div className="text-[9px] font-bold text-slate-600 uppercase tracking-wide">INFRA_CERTIFIED</div>
                  </div>
               </div>
               <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${isDark ? 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20' : 'bg-emerald-50 text-emerald-600 border-emerald-100'}`}>
                    <Cpu size={20}/>
                  </div>
                  <div>
                    <div className={`text-[10px] font-black uppercase tracking-[0.1em] ${isDark ? 'text-white' : 'text-slate-900'}`}>CORE_V4.2</div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                      <span className="text-[9px] font-bold text-slate-600 uppercase tracking-wide">ONLINE</span>
                    </div>
                  </div>
               </div>
            </div>
          </div>

          <div className={`pt-12 border-t flex flex-col md:flex-row justify-between items-center gap-8 ${isDark ? 'border-white/5' : 'border-slate-100'}`}>
            <p className="text-[10px] font-black text-slate-600 uppercase tracking-[0.1em]">
              © 2024 TND DEBTPRO TECHNOLOGY GROUP. MISSION CRITICAL.
            </p>
            <div className="flex items-center gap-6">
               <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.1em] flex items-center gap-3">
                 ENGINEERED_IN_MONGOLIA <span className="text-xl">🇲🇳</span>
               </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
