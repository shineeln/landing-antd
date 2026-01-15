
import React from 'react';
import { Typography, Badge, Button, Space } from 'antd';
import { CheckCircleFilled, RocketFilled, ThunderboltFilled } from '@ant-design/icons';
import { i18n, Language } from './i18n';
import { Reveal } from './CommonUI';

const { Text } = Typography;

interface PricingSectionProps {
  lang: Language;
  theme: 'light' | 'dark';
}

export const PricingSection: React.FC<PricingSectionProps> = ({ lang, theme }) => {
  const t = i18n[lang];
  const isDark = theme === 'dark';

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="pricing" className={`section-fullscreen transition-colors duration-500 ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-6 w-full">
        <Reveal>
          <div className="text-center mb-16 md:mb-20">
             <div className={`inline-flex items-center gap-3 px-6 py-2 rounded-full border mb-8 ${isDark ? 'border-blue-500/20 bg-blue-500/5' : 'border-blue-200 bg-blue-50'}`}>
                <Text className={`text-[10px] font-black tracking-[0.4em] uppercase ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>{t.pricing.tag}</Text>
             </div>
            <h2 className={`text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tighter ${isDark ? 'text-white' : 'text-slate-900'}`}>
              {t.pricing.title}
            </h2>
            <p className={`text-base md:text-lg max-w-3xl mx-auto font-medium ${isDark ? 'text-slate-500' : 'text-slate-600'}`}>
              {t.pricing.subtitle}
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 max-w-5xl mx-auto">
          {/* Free Plan */}
          <Reveal direction="right" delay={200}>
            <div className={`glass-card-pro p-8 md:p-10 rounded-[3rem] h-full flex flex-col transition-all hover:scale-[1.02] duration-500 border ${isDark ? 'border-white/5 hover:border-white/10' : 'border-slate-100 hover:border-slate-300'}`}>
              <div className="mb-10">
                <Text className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 block mb-4">{t.pricing.free.name}</Text>
                <div className="flex items-baseline gap-3 mb-4">
                  <span className={`text-5xl md:text-6xl font-black tracking-tighter ${isDark ? 'text-white' : 'text-slate-900'}`}>{t.pricing.free.price}</span>
                  <span className="text-slate-500 font-bold uppercase text-[9px] tracking-[0.2em]">/ {t.pricing.free.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-10 flex-1">
                {t.pricing.free.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <CheckCircleFilled className={isDark ? 'text-slate-700' : 'text-slate-300'} />
                    <Text className={`${isDark ? 'text-slate-400' : 'text-slate-600'} text-sm font-medium`}>{feature}</Text>
                  </li>
                ))}
              </ul>

              <button 
                className={`h-16 w-full rounded-2xl border font-black uppercase tracking-[0.2em] text-[10px] transition-all active:scale-95 ${isDark ? 'bg-white/5 border-white/10 text-white hover:bg-white/10' : 'bg-slate-50 border-slate-200 text-slate-900 hover:bg-slate-100'}`}
                onClick={() => scrollTo('contact')}
              >
                {t.pricing.free.cta}
              </button>
            </div>
          </Reveal>

          {/* Pro Plan */}
          <Reveal direction="left" delay={400}>
            <div className={`glass-card-pro relative p-8 md:p-10 rounded-[3rem] h-full flex flex-col transition-all hover:scale-[1.02] duration-500 border ${isDark ? 'border-blue-500/20 shadow-[0_0_80px_rgba(37,99,235,0.1)]' : 'border-blue-200 shadow-xl'}`}>
              <div className="absolute top-0 right-0 p-8">
                <ThunderboltFilled className="text-4xl text-blue-500 opacity-20" />
              </div>

              <div className="mb-10 relative z-10">
                <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500 text-white text-[8px] font-black tracking-widest uppercase mb-6 shadow-xl shadow-blue-600/30">
                  RECOMMENDED
                </div>
                <Text className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500 block mb-4">{t.pricing.pro.name}</Text>
                <div className="flex items-baseline gap-3 mb-4">
                  <span className={`text-5xl md:text-6xl font-black tracking-tighter ${isDark ? 'text-white' : 'text-slate-900'}`}>{t.pricing.pro.price}</span>
                  <span className="text-slate-500 font-bold uppercase text-[9px] tracking-[0.2em]">/ {t.pricing.pro.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-10 flex-1 relative z-10">
                {t.pricing.pro.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <CheckCircleFilled className="text-blue-500" />
                    <Text className={`${isDark ? 'text-white' : 'text-slate-900'} text-sm font-bold tracking-tight`}>{feature}</Text>
                  </li>
                ))}
              </ul>

              <Button 
                type="primary" 
                size="large" 
                block 
                icon={<RocketFilled />}
                className="h-16 rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] shadow-2xl shadow-blue-600/40"
                onClick={() => scrollTo('contact')}
              >
                {t.pricing.pro.cta}
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
