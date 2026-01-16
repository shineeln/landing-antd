
import React from 'react';
import { Typography, Badge, Button, Space } from 'antd';
import { CheckCircleFilled, RocketFilled, ThunderboltFilled, StarFilled } from '@ant-design/icons';
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
    <section id="pricing" className={`py-32 md:py-48 transition-colors duration-500 ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-6 w-full">
        <Reveal>
          <div className="text-center mb-24 md:mb-32">
             <div className={`inline-flex items-center gap-3 px-6 py-2 rounded-full border mb-8 ${isDark ? 'border-blue-500/20 bg-blue-500/5' : 'border-blue-200 bg-blue-50'}`}>
                <Text className={`text-[10px] font-black tracking-[0.4em] uppercase ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>{t.pricing.tag}</Text>
             </div>
            <h2 className={`text-4xl md:text-5xl lg:text-7xl font-black mb-10 tracking-tighter ${isDark ? 'text-white' : 'text-slate-900'}`}>
              {t.pricing.title}
            </h2>
            <p className={`text-base md:text-xl max-w-3xl mx-auto font-medium leading-relaxed ${isDark ? 'text-slate-500' : 'text-slate-600'}`}>
              {t.pricing.subtitle}
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto items-stretch">
          {/* StarterPro Plan */}
          <Reveal direction="right" delay={200}>
            <div className={`
              group glass-card-pro p-10 md:p-14 rounded-[3.5rem] h-full flex flex-col transition-all duration-500 border relative overflow-hidden
              ${isDark ? 'bg-white/5 border-white/5 hover:border-white/10' : 'bg-slate-50 border-slate-200 hover:border-slate-300 shadow-lg'}
            `}>
              <div className="mb-12">
                <Text className="text-[11px] font-black uppercase tracking-[0.4em] text-blue-500 block mb-6">{t.pricing.starter.name}</Text>
                <div className="flex items-baseline gap-4 mb-6">
                  <span className={`text-5xl md:text-6xl font-black tracking-tighter ${isDark ? 'text-white' : 'text-slate-900'}`}>{t.pricing.starter.price}</span>
                </div>
                <p className={`text-sm font-medium leading-relaxed opacity-70 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  {t.pricing.starter.desc}
                </p>
              </div>

              <div className="space-y-5 mb-12 flex-1">
                {t.pricing.starter.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <CheckCircleFilled className={`mt-1 ${isDark ? 'text-slate-700' : 'text-slate-300'}`} />
                    <Text className={`${isDark ? 'text-slate-400' : 'text-slate-600'} text-sm font-medium leading-tight`}>{feature}</Text>
                  </div>
                ))}
              </div>

              <button 
                className={`h-16 w-full rounded-2xl border font-black uppercase tracking-[0.25em] text-[11px] transition-all duration-300 active:scale-95 ${isDark ? 'bg-white/5 border-white/10 text-white hover:bg-white/10' : 'bg-white border-slate-200 text-slate-900 hover:bg-slate-100 shadow-sm'}`}
                onClick={() => scrollTo('contact')}
              >
                {t.pricing.starter.cta}
              </button>
            </div>
          </Reveal>

          {/* EnterprisePro Plan */}
          <Reveal direction="left" delay={400}>
            <div className={`
              group glass-card-pro relative p-10 md:p-14 rounded-[3.5rem] h-full flex flex-col transition-all duration-500 border
              ${isDark 
                ? 'bg-gradient-to-br from-blue-600/10 to-transparent border-blue-500/20 shadow-[0_0_100px_rgba(37,99,235,0.15)]' 
                : 'bg-white border-blue-200 shadow-[0_40px_100px_rgba(37,99,235,0.1)]'}
            `}>
              <div className="absolute top-0 right-0 p-10">
                <StarFilled className="text-5xl text-blue-600 opacity-20 animate-pulse" />
              </div>

              <div className="mb-12 relative z-10">
                <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-600 text-white text-[10px] font-black tracking-widest uppercase mb-8 shadow-2xl shadow-blue-600/40">
                  <StarFilled /> RECOMMENDED
                </div>
                <Text className="text-[11px] font-black uppercase tracking-[0.4em] text-blue-600 block mb-6">{t.pricing.enterprise.name}</Text>
                <div className="flex items-baseline gap-4 mb-6">
                  <span className={`text-5xl md:text-6xl font-black tracking-tighter ${isDark ? 'text-white' : 'text-slate-900'}`}>{t.pricing.enterprise.price}</span>
                </div>
                <p className={`text-sm font-medium leading-relaxed opacity-70 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  {t.pricing.enterprise.desc}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-1 gap-4 mb-12 flex-1 relative z-10">
                {t.pricing.enterprise.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <CheckCircleFilled className="mt-1 text-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.4)]" />
                    <Text className={`${isDark ? 'text-white' : 'text-slate-900'} text-sm font-bold tracking-tight leading-tight`}>{feature}</Text>
                  </div>
                ))}
              </div>

              <Button 
                type="primary" 
                size="large" 
                block 
                icon={<RocketFilled />}
                className="h-20 rounded-2xl font-black uppercase tracking-[0.3em] text-[12px] shadow-[0_25px_50px_rgba(37,99,235,0.4)] hover:scale-[1.02] active:scale-95 transition-all"
                onClick={() => scrollTo('contact')}
              >
                {t.pricing.enterprise.cta}
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
