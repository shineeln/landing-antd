
import React from 'react';
import { Shield, Cpu, ArrowRight, TrendingUp, DollarSign, BarChart2, ShieldCheck, Zap } from 'lucide-react';
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
      {/* High-Impact Final CTA Section */}
      <section className={`py-40 px-6 relative overflow-hidden transition-colors duration-500 ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto relative group">
          <div className="absolute -top-60 -left-60 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[150px] animate-pulse-slow"></div>
          <div className="absolute -bottom-60 -right-60 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[150px] animate-pulse-slow"></div>

          <div className={`relative rounded-[5rem] overflow-hidden border glass-card-pro shadow-[0_80px_160px_rgba(0,0,0,0.8)] ${isDark ? 'border-white/10' : 'border-slate-200 shadow-xl'}`}>
            <div className="absolute inset-0 grid-bg opacity-10"></div>
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2">
              {/* Left Content */}
              <div className={`p-14 md:p-24 flex flex-col justify-center border-b lg:border-b-0 lg:border-r ${isDark ? 'border-white/5' : 'border-slate-100'}`}>
                <Reveal>
                  <div className={`inline-flex items-center gap-3 px-6 py-2 rounded-full border mb-10 ${isDark ? 'border-blue-500/20 bg-blue-500/5' : 'border-blue-100 bg-blue-50'}`}>
                    <Zap size={16} className="text-blue-500 fill-blue-500"/>
                    <span className={`text-[10px] font-black uppercase tracking-[0.1em] ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>MAXIMIZE_RECOVERY_NOW</span>
                  </div>
                  <h2 className={`text-5xl md:text-8xl font-black mb-12 tracking-tighter leading-[0.85] ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {lang === 'mn' ? <>Эрсдэлээ <br/><span className="text-blue-600">Орлого</span> болго.</> : <>Turn <span className="text-red-500">Risk</span> <br/>Into <span className="text-emerald-500">Revenue.</span></>}
                  </h2>
                  <p className={`text-xl md:text-2xl max-w-lg mb-16 font-medium leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    {t.finalCta.subtitle}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-8">
                    <button 
                      onClick={() => scrollTo('contact')}
                      className="group bg-blue-600 hover:bg-blue-500 text-white font-black py-6 px-12 rounded-2xl text-xs uppercase tracking-[0.1em] shadow-2xl shadow-blue-600/40 active:scale-95 transition-all flex items-center justify-center gap-4"
                    >
                      {t.finalCta.cta}
                      <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                    
                    <div className={`flex items-center gap-6 px-8 py-5 rounded-2xl border backdrop-blur-sm ${isDark ? 'border-white/5 bg-white/5' : 'border-slate-100 bg-slate-50'}`}>
                      <div className="flex -space-x-3">
                        {[1, 2, 3, 4].map(i => (
                          <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-900 bg-slate-800 text-white flex items-center justify-center text-[10px] font-black">B{i}</div>
                        ))}
                      </div>
                      <div className="text-[10px] font-black uppercase tracking-[0.1em] leading-none">
                        <span className="text-slate-500">ADOPTED_BY </span>
                        <span className={`block mt-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>20+ CORE_NBFI</span>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>

              {/* Right Visual Transformation Engine */}
              <div className={`relative p-14 md:p-24 flex items-center justify-center overflow-hidden ${isDark ? 'bg-slate-950/40' : 'bg-slate-50/40'}`}>
                <div className="absolute inset-0 flex items-center justify-center opacity-10">
                   <div className="w-[180%] h-[180%] border-[1px] border-blue-500/20 rounded-full animate-spin-slow"></div>
                   <div className="absolute w-[120%] h-[120%] border-[1px] border-blue-500/20 rounded-full animate-reverse-spin-slow"></div>
                </div>

                <div className="relative z-10 w-full max-w-md">
                  <div className="space-y-10">
                    {/* Step 1: Input (Risk) */}
                    <Reveal direction="right" delay={200}>
                      <div className={`p-8 rounded-[2.5rem] border flex items-center justify-between group shadow-2xl ${isDark ? 'border-red-500/20 bg-slate-900 shadow-red-500/10' : 'border-red-100 bg-white shadow-red-100'}`}>
                        <div className="flex items-center gap-6">
                          <div className="w-14 h-14 rounded-2xl bg-red-500/10 flex items-center justify-center text-red-500 border border-red-500/20">
                            <TrendingUp size={24} className="rotate-180" />
                          </div>
                          <div>
                            <div className="text-[10px] font-black text-red-500 uppercase tracking-[0.1em] mb-1.5">HIGH_RISK_NPL</div>
                            <div className={`text-2xl font-black tracking-tighter ${isDark ? 'text-white' : 'text-slate-900'}`}>420.0M MNT</div>
                          </div>
                        </div>
                        <div className="text-[10px] font-black text-slate-600 uppercase tracking-[0.1em]">INGEST</div>
                      </div>
                    </Reveal>

                    {/* Flow Spark Animation */}
                    <div className="flex justify-center py-4">
                       <div className="w-px h-16 relative bg-gradient-to-b from-red-500/50 via-blue-500 to-emerald-500/50">
                          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-blue-600 shadow-[0_0_20px_#2563eb] animate-bounce-slow"></div>
                       </div>
                    </div>

                    {/* Step 2: Output (Revenue) */}
                    <Reveal direction="right" delay={400}>
                      <div className={`p-8 rounded-[2.5rem] border flex items-center justify-between shadow-2xl ${isDark ? 'border-emerald-500/20 bg-slate-900 shadow-emerald-500/10' : 'border-emerald-100 bg-white shadow-emerald-100'}`}>
                        <div className="flex items-center gap-6">
                          <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 border border-emerald-500/20 shadow-xl shadow-emerald-500/10">
                            <DollarSign size={24} />
                          </div>
                          <div>
                            <div className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.1em] mb-1.5">RECOVERED_LIQUIDITY</div>
                            <div className={`text-2xl font-black tracking-tighter ${isDark ? 'text-white' : 'text-slate-900'}`}>385.2M MNT</div>
                          </div>
                        </div>
                        <div className="text-xs font-black text-emerald-500 tracking-tighter">91.7%</div>
                      </div>
                    </Reveal>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
