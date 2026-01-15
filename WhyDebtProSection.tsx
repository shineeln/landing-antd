
import React from 'react';
import { ShieldCheck, Zap, Globe, AlertTriangle, CheckCircle2, XCircle, Layout, Code, Server } from 'lucide-react';
import { i18n, Language } from './i18n';
import { Reveal } from './CommonUI';

interface WhyDebtProSectionProps {
  lang: Language;
  theme: 'light' | 'dark';
}

export const WhyDebtProSection: React.FC<WhyDebtProSectionProps> = ({ lang, theme }) => {
  const t = i18n[lang];
  const isDark = theme === 'dark';

  return (
    <section className={`py-20 md:py-32 relative overflow-hidden transition-colors ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-16 md:mb-24">
            <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] font-black text-blue-500 uppercase tracking-widest mb-6">
              {t.whyDebtPro.tag}
            </div>
            <h2 className={`text-3xl md:text-5xl font-black mb-6 md:mb-8 tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
              {t.whyDebtPro.title}
            </h2>
            <p className={`text-base md:text-lg max-w-3xl mx-auto font-medium ${isDark ? 'text-slate-500' : 'text-slate-600'}`}>
              {t.whyDebtPro.subtitle}
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-16 md:mb-24">
          {/* Legacy Card */}
          <Reveal direction="right">
            <div className={`h-full p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem] border flex flex-col ${isDark ? 'bg-slate-900/30 border-slate-800' : 'bg-white border-slate-200 shadow-xl shadow-slate-200/50'}`}>
              <div className="flex items-center gap-4 mb-6 md:mb-8">
                <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl flex items-center justify-center ${isDark ? 'bg-red-500/10 text-red-500' : 'bg-red-50 text-red-600'}`}>
                  <AlertTriangle size={28} className="md:w-8 md:h-8" />
                </div>
                <h3 className={`text-xl md:text-2xl font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  {t.whyDebtPro.legacy.title}
                </h3>
              </div>
              <ul className="space-y-4 md:space-y-6 flex-1">
                {t.whyDebtPro.legacy.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 md:gap-4">
                    <XCircle size={18} className="text-red-500 mt-1 shrink-0" />
                    <span className={`text-sm md:text-base font-medium ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Advantage Card */}
          <Reveal direction="left">
            <div className={`h-full p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem] border flex flex-col relative overflow-hidden ${isDark ? 'bg-blue-600/5 border-blue-500/20 shadow-2xl shadow-blue-900/10' : 'bg-blue-50/30 border-blue-200 shadow-xl shadow-blue-100/50'}`}>
              <div className="absolute top-0 right-0 p-6 md:p-8 opacity-10">
                <ShieldCheck size={80} className="md:w-[120px] md:h-[120px] text-blue-500" />
              </div>
              <div className="flex items-center gap-4 mb-6 md:mb-8 relative z-10">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-blue-600 rounded-xl md:rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-600/20">
                  <ShieldCheck size={28} className="md:w-8 md:h-8" />
                </div>
                <h3 className={`text-xl md:text-2xl font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  {t.whyDebtPro.advantage.title}
                </h3>
              </div>
              <ul className="space-y-4 md:space-y-6 flex-1 relative z-10">
                {t.whyDebtPro.advantage.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 md:gap-4">
                    <CheckCircle2 size={18} className="text-emerald-500 mt-1 shrink-0" />
                    <span className={`text-sm md:text-base font-bold ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {t.whyDebtPro.benefits.map((benefit, idx) => (
            <Reveal key={idx} delay={idx * 150} direction="up">
              <div className={`p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] border h-full transition-all hover:scale-[1.03] duration-500 
                ${isDark ? 'bg-slate-900/20 border-slate-900 hover:border-blue-500/30' : 'bg-white border-slate-100 shadow-sm hover:shadow-md'}`}>
                <div className="mb-4 md:mb-6">
                  {idx === 0 ? <Globe className="text-blue-500" size={28} /> : 
                   idx === 1 ? <Layout className="text-blue-500" size={28} /> : 
                   <Zap className="text-blue-500" size={28} />}
                </div>
                <h4 className={`text-base md:text-lg font-black uppercase tracking-tight mb-3 md:mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  {benefit.title}
                </h4>
                <p className={`text-xs md:text-sm leading-relaxed ${isDark ? 'text-slate-500' : 'text-slate-600'}`}>
                  {benefit.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
