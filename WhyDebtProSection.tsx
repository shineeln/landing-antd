
import React from 'react';
import { ShieldCheck, Zap, Globe, AlertTriangle, CheckCircle2, XCircle, Layout, Building2, Landmark, ArrowRight } from 'lucide-react';
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
    <section id="why" className={`py-32 relative overflow-hidden transition-colors ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-24">
            <div className={`inline-block px-5 py-2 rounded-full border text-[11px] font-black uppercase tracking-widest mb-8 ${isDark ? 'bg-blue-500/10 border-blue-500/20 text-blue-400' : 'bg-blue-50 border-blue-100 text-blue-600'}`}>
              {t.whyDebtPro.tag}
            </div>
            <h2 className={`text-4xl md:text-6xl font-black mb-8 tracking-tighter ${isDark ? 'text-white' : 'text-slate-900'}`}>
              {t.whyDebtPro.title}
            </h2>
            <p className={`text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed ${isDark ? 'text-slate-500' : 'text-slate-600'}`}>
              {t.whyDebtPro.subtitle}
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
          {/* Legacy Card */}
          <Reveal direction="right">
            <div className={`h-full p-10 rounded-[2.5rem] border flex flex-col ${isDark ? 'bg-slate-900/30 border-slate-800' : 'bg-white border-slate-200 shadow-xl shadow-slate-200/50'}`}>
              <div className="flex items-center gap-5 mb-10">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${isDark ? 'bg-red-500/10 text-red-500' : 'bg-red-50 text-red-600'}`}>
                  <AlertTriangle size={28} />
                </div>
                <h3 className={`text-2xl font-black tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  {t.whyDebtPro.legacy.title}
                </h3>
              </div>
              <ul className="space-y-6 flex-1">
                {t.whyDebtPro.legacy.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <XCircle size={18} className="text-red-500 mt-1 shrink-0" />
                    <span className={`text-base font-medium ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Advantage Card */}
          <Reveal direction="left">
            <div className={`h-full p-10 rounded-[2.5rem] border flex flex-col relative overflow-hidden ${isDark ? 'bg-blue-600/5 border-blue-500/20' : 'bg-blue-50/30 border-blue-200 shadow-xl'}`}>
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <ShieldCheck size={120} className="text-blue-500" />
              </div>
              <div className="flex items-center gap-5 mb-10 relative z-10">
                <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-blue-600/20">
                  <ShieldCheck size={28} />
                </div>
                <h3 className={`text-2xl font-black tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  {t.whyDebtPro.advantage.title}
                </h3>
              </div>
              <ul className="space-y-6 flex-1 relative z-10">
                {t.whyDebtPro.advantage.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <CheckCircle2 size={18} className="text-emerald-500 mt-1 shrink-0" />
                    <span className={`text-base font-bold ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {/* Use Cases Section */}
        <div className="relative">
          <Reveal>
            <div className="mb-16">
              <h3 className={`text-3xl font-black tracking-tight mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                {t.whyDebtPro.useCases.title}
              </h3>
              <div className="w-16 h-1.5 bg-blue-600 rounded-full"></div>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Standardized Use Case Cards */}
            {[t.whyDebtPro.useCases.bank, t.whyDebtPro.useCases.nbfi].map((item, i) => (
              <Reveal key={i} direction={i === 0 ? "right" : "left"} delay={i * 100}>
                <div className={`group p-10 rounded-[2.5rem] border transition-all duration-500 ${isDark ? 'bg-slate-900/20 border-slate-800 hover:border-blue-500/40' : 'bg-slate-50 border-slate-100 hover:border-blue-200 shadow-sm'}`}>
                  <div className="flex items-start justify-between mb-10">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${isDark ? 'bg-blue-500/10 text-blue-400' : 'bg-blue-100 text-blue-600'}`}>
                      {i === 0 ? <Landmark size={28} /> : <Building2 size={28} />}
                    </div>
                  </div>
                  <h4 className={`text-2xl font-black mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {item.title}
                  </h4>
                  <p className={`text-base font-medium leading-relaxed mb-10 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    {item.desc}
                  </p>
                  <div className="flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-blue-500 group-hover:gap-5 transition-all cursor-pointer">
                    View Solution <ArrowRight size={16} />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
