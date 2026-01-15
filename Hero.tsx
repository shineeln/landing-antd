
import React, { useState } from 'react';
import { Button, Segmented, Typography } from 'antd';
import { 
  ArrowRightOutlined, 
  PlayCircleFilled,
  DashboardOutlined, 
  UserOutlined, 
  SafetyOutlined, 
  MessageOutlined, 
  RiseOutlined 
} from '@ant-design/icons';
import { i18n, Language } from './i18n';
import { Reveal, GlowOrb } from './CommonUI';
import { 
  PreviewCommandCenter, 
  PreviewBorrower360, 
  PreviewLegalPipeline, 
  PreviewSMSDashboard, 
  PreviewPerformance 
} from './DashboardPreviews';

const { Text } = Typography;

interface HeroProps {
  lang: Language;
  theme: 'light' | 'dark';
}

export const Hero: React.FC<HeroProps> = ({ lang, theme }) => {
  const t = i18n[lang];
  const [activeKey, setActiveKey] = useState('dashboard');
  const isDark = theme === 'dark';

  const heroSlides = [
    { value: 'dashboard', icon: <DashboardOutlined />, label: t.hero.carousel.dashboard, component: <PreviewCommandCenter lang={lang} theme={theme}/> },
    { value: 'profile', icon: <UserOutlined />, label: t.hero.carousel.profile, component: <PreviewBorrower360 lang={lang} theme={theme}/> },
    { value: 'legal', icon: <SafetyOutlined />, label: t.hero.carousel.legal, component: <PreviewLegalPipeline lang={lang} theme={theme}/> },
    { value: 'sms', icon: <MessageOutlined />, label: t.hero.carousel.sms, component: <PreviewSMSDashboard lang={lang} theme={theme}/> },
    { value: 'performance', icon: <RiseOutlined />, label: t.hero.carousel.performance, component: <PreviewPerformance lang={lang} theme={theme}/> },
  ];

  return (
    <header className="relative pt-48 pb-32 overflow-hidden flex flex-col items-center min-h-screen">
      {/* Background Deep Ambience */}
      <div className="absolute inset-0 grid-bg-complex -z-10"></div>
      <GlowOrb color="bg-blue-600" className="top-20 left-1/4 w-[600px] h-[600px] opacity-10 blur-[180px]" />
      <GlowOrb color="bg-cyan-500" className="bottom-40 right-1/4 w-[500px] h-[500px] opacity-10 blur-[200px]" />
      
      {/* Central Content */}
      <div className="max-w-5xl mx-auto px-6 text-center relative z-10 mb-24">
        <Reveal>
           <div className={`inline-flex items-center gap-3 px-5 py-2 rounded-full border mb-10 transition-colors ${isDark ? 'border-blue-500/20 bg-blue-500/5' : 'border-blue-100 bg-blue-50'}`}>
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></div>
              <Text className={`text-[11px] font-black tracking-[0.1em] uppercase ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>{t.hero.tag}</Text>
           </div>
           
           <h1 className="text-5xl md:text-8xl font-black mb-10 leading-[1.05] tracking-tighter gradient-text-hero">
             {lang === 'mn' ? (
               <>Ирээдүйн <br/>Зээлийн Удирдлага</>
             ) : (
               <>Future-Proof <br/>Loan Recovery</>
             )}
           </h1>
           
           <p className={`text-lg md:text-xl max-w-3xl mx-auto mb-14 font-medium leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
             {t.hero.subtitle}
           </p>
           
           <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
             <Button 
                type="primary"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="h-16 px-12 rounded-2xl text-[12px] font-black uppercase tracking-wider flex items-center gap-4"
             >
                {t.hero.cta}
                <ArrowRightOutlined />
             </Button>
             <button className={`h-16 px-10 rounded-2xl text-[12px] font-black uppercase tracking-wider border flex items-center gap-4 transition-all active:scale-95 ${isDark ? 'bg-white/5 border-white/10 text-white hover:bg-white/10' : 'bg-slate-50 border-slate-200 text-slate-900 hover:bg-slate-100'}`}>
                <PlayCircleFilled className="text-blue-500 text-2xl" />
                {t.hero.secondary}
             </button>
           </div>
        </Reveal>
      </div>

      {/* Product Stage */}
      <div className="w-full max-w-6xl mx-auto px-6 relative">
         <Reveal delay={400} className="relative">
            <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[140%] h-[400px] stage-glow opacity-60 pointer-events-none"></div>
            
            <div className={`relative z-10 glass-card-pro rounded-[3rem] p-4 md:p-10 animate-float shadow-2xl ${isDark ? 'border-white/5' : 'border-slate-200 shadow-slate-900/5'}`}>
               <div className="flex justify-center mb-10 overflow-x-auto pb-2 no-scrollbar">
                  <Segmented
                    size="large"
                    options={heroSlides.map(s => ({ value: s.value, icon: s.icon, label: s.label }))}
                    value={activeKey}
                    onChange={(val) => setActiveKey(val.toString())}
                    className="p-1.5 rounded-xl"
                  />
               </div>
               
               <div className="animate-content-entrance min-h-[450px] flex items-center justify-center">
                  <div className="w-full h-full scale-[1.01] origin-top">
                    {heroSlides.find(s => s.value === activeKey)?.component}
                  </div>
               </div>
            </div>

            {/* Micro Widgets - Scaled down */}
            <div className="absolute -left-12 top-1/2 hidden 2xl:block animate-float" style={{ animationDelay: '2s' }}>
               <div className="glass-card-pro p-8 rounded-[2rem] w-64 border-blue-500/20">
                  <div className="text-[10px] font-black uppercase tracking-[0.05em] text-blue-500 mb-3">Network LOAD</div>
                  <div className={`text-3xl font-black tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>12.4K <span className="text-[10px] text-slate-500 ml-1">TPS</span></div>
               </div>
            </div>
         </Reveal>
      </div>
    </header>
  );
};
