
import React from 'react';
import { Typography } from 'antd';
import { ArrowRightOutlined, PlayCircleFilled } from '@ant-design/icons';
import { SectionProps } from '../../shared/types';
import { i18n } from '../../shared/i18n';
import { Reveal } from '../../components/ui/Reveal';
import { GlowOrb } from '../../components/ui/GlowOrb';

const { Text } = Typography;

export const HeroSection: React.FC<SectionProps> = ({ lang, theme }) => {
  const t = i18n[lang];
  const isDark = theme === 'dark';

  return (
    <header className="relative min-h-screen flex flex-col items-center justify-center pt-24 overflow-hidden">
      <div className="absolute inset-0 grid-bg-complex -z-10 opacity-30"></div>
      <GlowOrb color="bg-blue-600" className="top-[-10%] left-[-10%] opacity-[0.05]" size="800px" />
      <GlowOrb color="bg-indigo-500" className="bottom-[-10%] right-[-10%] opacity-[0.05]" size="800px" />

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <Reveal>
          <div className={`inline-flex items-center gap-3 px-6 py-2.5 rounded-full border mb-10 ${isDark ? 'border-blue-500/20 bg-blue-500/10' : 'border-blue-100 bg-blue-50'}`}>
            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
            <Text className={`text-[11px] font-black tracking-[0.4em] uppercase ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>{t.hero.tag}</Text>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="text-5xl md:text-[8rem] font-black mb-10 leading-[0.85] tracking-tighter gradient-text-hero">
            {lang === 'mn' ? <>ИРЭЭДҮЙН <br/>ЗЭЭЛИЙН <br/>УДИРДЛАГА</> : <>FUTURE-PROOF <br/>LOAN <br/>RECOVERY</>}
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className={`text-xl md:text-2xl max-w-3xl mx-auto mb-16 font-medium leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            {t.hero.subtitle}
          </p>
        </Reveal>

        <Reveal delay={300}>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="h-20 px-16 rounded-2xl bg-blue-600 text-white text-[13px] font-black uppercase tracking-widest shadow-2xl shadow-blue-600/40 hover:scale-105 transition-transform flex items-center gap-4"
            >
              {t.hero.cta} <ArrowRightOutlined />
            </button>
            <button className={`h-20 px-16 rounded-2xl border text-[13px] font-black uppercase tracking-widest flex items-center gap-4 hover:bg-slate-50 transition-colors ${isDark ? 'bg-white/5 border-white/10 text-white' : 'bg-white border-slate-200 text-slate-900'}`}>
              <PlayCircleFilled className="text-blue-500 text-3xl" /> {t.hero.secondary}
            </button>
          </div>
        </Reveal>
      </div>
    </header>
  );
};
