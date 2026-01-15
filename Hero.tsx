
import React, { useState } from 'react';
import { Button, Segmented, Card, Space, Typography } from 'antd';
import { 
  ArrowRightOutlined, 
  EyeOutlined, 
  DashboardOutlined, 
  UserOutlined, 
  SafetyOutlined, 
  MessageOutlined, 
  RiseOutlined 
} from '@ant-design/icons';
import { i18n, Language } from './i18n';
import { Reveal } from './CommonUI';
import { 
  PreviewCommandCenter, 
  PreviewBorrower360, 
  PreviewLegalPipeline, 
  PreviewSMSDashboard, 
  PreviewPerformance 
} from './DashboardPreviews';

const { Title, Paragraph, Text } = Typography;

// Fix: Ant Design Card component can sometimes have type issues in certain TS environments. 
// Casting it to any as a workaround for the "does not have any construct or call signatures" error.
const AntdCard = Card as any;

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
    { value: 'legal', icon: <SafetyOutlined />, label: t.hero.carousel.legal, component: <PreviewLegalPipeline theme={theme}/> },
    { value: 'sms', icon: <MessageOutlined />, label: t.hero.carousel.sms, component: <PreviewSMSDashboard theme={theme}/> },
    { value: 'performance', icon: <RiseOutlined />, label: t.hero.carousel.performance, component: <PreviewPerformance theme={theme}/> },
  ];

  return (
    <header className={`relative pt-32 pb-24 md:pb-32 overflow-hidden min-h-screen flex flex-col justify-center transition-colors duration-500 ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
      <div className="bloom top-0 left-1/2 -translate-x-1/2"></div>
      <div className="absolute inset-0 grid-bg -z-10"></div>
      
      <div className="max-w-5xl mx-auto px-6 text-center relative z-10 mb-16">
        <Reveal>
           <Space direction="horizontal" className="px-5 py-2 rounded-full border border-blue-500/20 bg-blue-500/5 mb-8 md:mb-10">
              <ThunderboltIcon />
              <Text className="text-[10px] md:text-xs font-black tracking-widest uppercase text-blue-500">{t.hero.tag}</Text>
           </Space>
           <Title level={1} className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-[1.1] md:leading-[1.05] tracking-tight break-words">
             {lang === 'mn' ? <>Зээл төлүүлэлтийн <br className="hidden sm:block" /><span className="gradient-text">cockpit удирдлага.</span></> : <>The command <br className="hidden sm:block" /><span className="gradient-text">cockpit for recovery.</span></>}
           </Title>
           <Paragraph className={`text-base md:text-xl max-w-2xl mx-auto mb-10 md:mb-12 font-medium leading-relaxed px-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
             {t.hero.subtitle}
           </Paragraph>
           <Space size="middle" className="flex justify-center flex-wrap gap-4">
             <Button type="primary" size="large" icon={<ArrowRightOutlined />} className="px-6 md:px-10 h-12 md:h-16 uppercase tracking-widest text-[11px] md:text-sm font-black">
                {t.hero.cta}
             </Button>
             <Button size="large" icon={<EyeOutlined />} className="px-6 md:px-10 h-12 md:h-16 uppercase tracking-widest text-[11px] md:text-sm font-black">
                {t.hero.secondary}
             </Button>
           </Space>
        </Reveal>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-6 relative w-full">
         <AntdCard 
            className={`rounded-[2rem] md:rounded-[3rem] shadow-2xl border-slate-200 dark:border-slate-800 backdrop-blur-xl overflow-hidden ${isDark ? 'bg-slate-900/40' : 'bg-white/90'}`}
            styles={{ body: { padding: '24px md:padding: 48px' } }}
          >
            <div className="flex justify-center mb-8 md:mb-12 overflow-x-auto pb-4 scrollbar-hide no-scrollbar">
              <Segmented
                size="middle"
                options={heroSlides.map(s => ({ value: s.value, icon: s.icon, label: s.label }))}
                value={activeKey}
                onChange={(val) => setActiveKey(val.toString())}
                className={`p-1 rounded-xl md:rounded-2xl max-w-full text-[10px] md:text-sm ${isDark ? 'bg-slate-800/80' : 'bg-slate-100'}`}
              />
            </div>
            <div className="animate-content-entrance min-h-[300px] md:min-h-[450px]">
              {heroSlides.find(s => s.value === activeKey)?.component}
            </div>
         </AntdCard>
      </div>
    </header>
  );
};

const ThunderboltIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500 animate-pulse">
    <path d="M13 2 L3 14 L12 14 L11 22 L21 10 L12 10 L13 2 Z" />
  </svg>
);
