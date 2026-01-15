
import React from 'react';
import { Shield, Cpu, ExternalLink, ArrowRight, TrendingUp, DollarSign, BarChart2, ShieldCheck, Zap } from 'lucide-react';
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
      <section className={`py-24 px-6 relative overflow-hidden transition-colors duration-500 ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto relative group">
          {/* Animated Background Glows */}
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] animate-pulse-slow"></div>
          <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-emerald-500/5 rounded-full blur-[100px] animate-pulse-slow"></div>

          <div className={`relative rounded-[3.5rem] md:rounded-[5rem] overflow-hidden border transition-colors duration-500 ${isDark ? 'bg-slate-900/40 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
            <div className="absolute inset-0 grid-bg opacity-10"></div>
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2">
              {/* Left Content */}
              <div className={`p-10 md:p-20 flex flex-col justify-center border-b lg:border-b-0 lg:border-r ${isDark ? 'border-slate-800/50' : 'border-slate-200'}`}>
                <Reveal>
                  <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-[10px] font-black uppercase tracking-widest mb-8 ${isDark ? 'bg-blue-500/10 border-blue-500/20 text-blue-400' : 'bg-blue-50 border-blue-100 text-blue-600'}`}>
                    <Zap size={14} className={isDark ? "fill-blue-400" : "fill-blue-600"}/> {lang === 'mn' ? 'ХӨРӨНГӨ ӨСГӨХ ЦАГ' : 'MAXIMIZE RECOVERY'}
                  </div>
                  <h2 className={`text-4xl md:text-6xl lg:text-7xl font-black mb-8 tracking-tighter leading-[0.95] ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {lang === 'mn' ? <>Эрсдэлээ <br/><span className="text-blue-600">Орлого</span> болго.</> : <>Turn <span className="text-red-500">Risk</span> <br/>Into <span className="text-emerald-500">Revenue.</span></>}
                  </h2>
                  <p className={`text-lg md:text-xl max-w-lg mb-12 font-medium leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    {t.finalCta.subtitle}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-6">
                    <button 
                      onClick={() => scrollTo('contact')}
                      className="group bg-blue-600 hover:bg-blue-500 text-white font-black py-5 px-10 rounded-2xl text-xs uppercase tracking-widest shadow-2xl shadow-blue-600/30 active:scale-95 transition-all flex items-center justify-center gap-3"
                    >
                      {t.finalCta.cta}
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                    
                    <div className={`flex items-center gap-4 px-6 py-4 rounded-2xl border backdrop-blur-sm ${isDark ? 'bg-white/5 border-white/10' : 'bg-white border-slate-200 shadow-sm'}`}>
                      <div className="flex -space-x-2">
                        {[1, 2, 3].map(i => (
                          <div key={i} className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-[10px] font-black ${isDark ? 'border-slate-900 bg-slate-800 text-white' : 'border-white bg-slate-100 text-slate-600'}`}>B{i}</div>
                        ))}
                      </div>
                      <div className="text-[10px] font-black uppercase tracking-widest leading-none">
                        <span className={isDark ? 'text-slate-400' : 'text-slate-500'}>Used by </span>
                        <span className={isDark ? 'text-white' : 'text-slate-900'}>20+ Institutions</span>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>

              {/* Right Visual Transformation Engine */}
              <div className={`relative p-10 md:p-20 flex items-center justify-center overflow-hidden transition-colors ${isDark ? 'bg-slate-950/50' : 'bg-white/50'}`}>
                <div className="absolute inset-0 flex items-center justify-center opacity-20">
                   <div className={`w-[150%] h-[150%] border-[1px] rounded-full animate-spin-slow ${isDark ? 'border-slate-800' : 'border-slate-100'}`}></div>
                   <div className={`absolute w-[100%] h-[100%] border-[1px] rounded-full animate-reverse-spin-slow ${isDark ? 'border-slate-800' : 'border-slate-100'}`}></div>
                </div>

                <div className="relative z-10 w-full max-w-sm">
                  <div className="space-y-6">
                    {/* Step 1: Input (Risk) */}
                    <Reveal direction="right" delay={200}>
                      <div className={`p-5 rounded-2xl border flex items-center justify-between group-hover:-translate-y-1 transition-all ${isDark ? 'bg-slate-900 border-red-500/20' : 'bg-white border-slate-200 shadow-lg shadow-red-500/5'}`}>
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center text-red-500">
                            <TrendingUp size={20} className="rotate-180" />
                          </div>
                          <div>
                            <div className="text-[10px] font-black text-red-500 uppercase tracking-widest">High Risk NPL</div>
                            <div className={`text-lg font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>420M MNT</div>
                          </div>
                        </div>
                        <div className={`h-6 w-px ${isDark ? 'bg-slate-800' : 'bg-slate-100'}`}></div>
                        <div className="text-[10px] font-bold text-slate-400 uppercase">Input</div>
                      </div>
                    </Reveal>

                    {/* Engine Link */}
                    <div className="flex justify-center py-2">
                       <div className={`w-px h-10 relative ${isDark ? 'bg-gradient-to-b from-red-500/50 to-emerald-500/50' : 'bg-slate-200'}`}>
                          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-blue-600 shadow-[0_0_10px_#2563eb] animate-bounce-slow"></div>
                       </div>
                    </div>

                    {/* Step 2: Output (Revenue) */}
                    <Reveal direction="right" delay={400}>
                      <div className={`p-5 rounded-2xl border flex items-center justify-between group-hover:translate-y-1 transition-all ${isDark ? 'bg-slate-900 border-emerald-500/20 shadow-2xl shadow-emerald-500/10' : 'bg-white border-slate-200 shadow-xl shadow-emerald-500/10'}`}>
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                            <DollarSign size={20} />
                          </div>
                          <div>
                            <div className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">Recovered Capital</div>
                            <div className={`text-lg font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>385.2M MNT</div>
                          </div>
                        </div>
                        <div className={`h-6 w-px ${isDark ? 'bg-slate-800' : 'bg-slate-100'}`}></div>
                        <div className="text-xs font-black text-emerald-600">91.7%</div>
                      </div>
                    </Reveal>
                  </div>

                  {/* Trust Metrics below visualization */}
                  <div className="mt-12 grid grid-cols-2 gap-4">
                    <div className={`text-center p-4 rounded-2xl border transition-colors ${isDark ? 'bg-white/5 border-white/5' : 'bg-slate-50 border-slate-100'}`}>
                      <BarChart2 size={20} className="mx-auto text-blue-600 mb-2" />
                      <div className="text-[10px] font-black text-slate-500 uppercase">Efficiency</div>
                      <div className={`text-sm font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>+34%</div>
                    </div>
                    <div className={`text-center p-4 rounded-2xl border transition-colors ${isDark ? 'bg-white/5 border-white/5' : 'bg-slate-50 border-slate-100'}`}>
                      <ShieldCheck size={20} className="mx-auto text-emerald-600 mb-2" />
                      <div className="text-[10px] font-black text-slate-500 uppercase">Security</div>
                      <div className={`text-sm font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>Enterprise</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Standard Footer */}
      <footer className={`pt-20 pb-12 border-t transition-colors ${isDark ? 'bg-slate-950 border-slate-900' : 'bg-white border-slate-100'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12 mb-16">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3 cursor-pointer group" onClick={() => scrollTo('home')}>
                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center font-black text-white text-lg shadow-lg group-hover:scale-110 transition-transform">D</div>
                <span className={`text-xl font-black uppercase tracking-widest ${isDark ? 'text-white' : 'text-slate-900'}`}>DEBTPRO</span>
              </div>
              <p className={`text-xs font-bold leading-relaxed max-w-xs ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
                Банк, ББСБ-ын зээл төлүүлэлтийн процессыг цогцоор нь автоматжуулах "Enterprise-Grade" систем.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-x-12 gap-y-6 text-[10px] font-black uppercase tracking-widest transition-colors">
               <button onClick={() => scrollTo('product')} className={`${isDark ? 'text-slate-400' : 'text-slate-500'} hover:text-blue-600 transition-colors`}>{t.nav.product}</button>
               <button onClick={() => scrollTo('solutions')} className={`${isDark ? 'text-slate-400' : 'text-slate-500'} hover:text-blue-600 transition-colors`}>{t.nav.solutions}</button>
               <button onClick={() => scrollTo('why')} className={`${isDark ? 'text-slate-400' : 'text-slate-500'} hover:text-blue-600 transition-colors`}>{t.nav.why}</button>
               <button onClick={() => scrollTo('customers')} className={`${isDark ? 'text-slate-400' : 'text-slate-500'} hover:text-blue-600 transition-colors`}>{t.nav.customers}</button>
               <button onClick={() => scrollTo('faq')} className={`${isDark ? 'text-slate-400' : 'text-slate-500'} hover:text-blue-600 transition-colors`}>{t.nav.faq}</button>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 sm:gap-10">
               <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${isDark ? 'bg-emerald-500/10 text-emerald-500' : 'bg-emerald-50 text-emerald-600'}`}>
                    <Shield size={18}/>
                  </div>
                  <div>
                    <div className={`text-[10px] font-black uppercase tracking-widest ${isDark ? 'text-slate-200' : 'text-slate-900'}`}>ISO 27001</div>
                    <div className="text-[9px] font-bold text-slate-400 uppercase">Certified</div>
                  </div>
               </div>
               <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${isDark ? 'bg-blue-600/10 text-blue-600' : 'bg-blue-50 text-blue-600'}`}>
                    <Cpu size={18}/>
                  </div>
                  <div>
                    <div className={`text-[10px] font-black uppercase tracking-widest ${isDark ? 'text-slate-200' : 'text-slate-900'}`}>v4.2.0 Core</div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></span>
                      <span className="text-[9px] font-bold text-slate-400 uppercase">Deployed</span>
                    </div>
                  </div>
               </div>
            </div>
          </div>

          <div className={`pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-6 ${isDark ? 'border-slate-900' : 'border-slate-100'}`}>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
              © 2024 TND DEBTPRO. ALL RIGHTS RESERVED.
            </p>
            <div className="flex items-center gap-4">
               <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                 MADE IN MONGOLIA <span className="text-red-500 text-lg">🇲🇳</span>
               </span>
            </div>
          </div>
        </div>
      </footer>
      <style>{`
        @keyframes reverse-spin {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        .animate-reverse-spin-slow {
          animation: reverse-spin 20s linear infinite;
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translate(-50%, 0); }
          50% { transform: translate(-50%, 30px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}</style>
    </>
  );
};
