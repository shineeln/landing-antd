
import React, { useState, useEffect, useMemo } from 'react';
import { Typography, Input, Avatar, Badge, Space } from 'antd';
import { 
  ArrowRightOutlined, 
  PlayCircleFilled,
  DashboardOutlined, 
  UserOutlined, 
  SafetyOutlined, 
  MessageOutlined, 
  RiseOutlined, 
  SearchOutlined, 
  BellOutlined, 
  QuestionCircleOutlined, 
  MenuUnfoldOutlined 
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
  const [scrollY, setScrollY] = useState(0);
  const isDark = theme === 'dark';

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollProgress = useMemo(() => Math.min(scrollY / 800, 1), [scrollY]);
  
  const titleScale = 1 - (scrollProgress * 0.45);
  const titleOpacity = 1 - (scrollProgress * 1.8);
  const titleTranslateY = scrollProgress * -150;

  const mockupScale = 0.82 + (scrollProgress * 0.18);
  const mockupTranslateY = (1 - scrollProgress) * 250;
  const mockupOpacity = 0.3 + (scrollProgress * 0.7);
  const mockupBlur = (1 - scrollProgress) * 12;

  const menuItems = [
    { key: 'dashboard', icon: <DashboardOutlined />, label: t.hero.carousel.dashboard, component: <PreviewCommandCenter lang={lang} theme={theme}/> },
    { key: 'profile', icon: <UserOutlined />, label: t.hero.carousel.profile, component: <PreviewBorrower360 lang={lang} theme={theme}/> },
    { key: 'legal', icon: <SafetyOutlined />, label: t.hero.carousel.legal, component: <PreviewLegalPipeline lang={lang} theme={theme}/> },
    { key: 'sms', icon: <MessageOutlined />, label: t.hero.carousel.sms, component: <PreviewSMSDashboard lang={lang} theme={theme}/> },
    { key: 'performance', icon: <RiseOutlined />, label: t.hero.carousel.performance, component: <PreviewPerformance lang={lang} theme={theme}/> },
  ];

  const currentView = menuItems.find(m => m.key === activeKey);

  return (
    <header className="relative min-h-[175vh] flex flex-col items-center">
      <div className="fixed inset-0 grid-bg-complex -z-10 pointer-events-none"></div>
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <GlowOrb color="bg-blue-600" className="top-[-10%] left-[-10%] w-[900px] h-[900px] opacity-[0.06] blur-[220px]" />
        <GlowOrb color="bg-indigo-500" className="bottom-[-10%] right-[-10%] w-[800px] h-[800px] opacity-[0.06] blur-[240px]" />
        
        <div className="absolute inset-0 flex justify-around opacity-[0.04]">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="w-px h-full bg-gradient-to-b from-transparent via-blue-500 to-transparent animate-beam" style={{ animationDelay: `${i * 1.8}s` }}></div>
          ))}
        </div>
      </div>

      <div 
        className="w-full h-screen flex flex-col items-center justify-center sticky top-0 z-20 pointer-events-none px-6 pb-24"
        style={{ 
          transform: `scale(${titleScale}) translateY(${titleTranslateY}px)`,
          opacity: Math.max(0, titleOpacity),
          visibility: titleOpacity <= 0 ? 'hidden' : 'visible'
        }}
      >
        <div className="flex flex-col items-center max-w-7xl pointer-events-auto">
          <div className={`inline-flex items-center gap-3 px-6 py-2.5 rounded-full border mb-10 animate-content-entrance ${isDark ? 'border-blue-500/20 bg-blue-500/10' : 'border-blue-100 bg-blue-50'}`}>
            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
            <Text className={`text-[11px] font-black tracking-[0.4em] uppercase ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>{t.hero.tag}</Text>
          </div>
          
          <h1 className="text-6xl md:text-[9.5rem] font-black mb-10 leading-[0.8] tracking-tighter text-center gradient-text-hero animate-content-entrance" style={{ animationDelay: '100ms' }}>
            {lang === 'mn' ? (
              <>ИРЭЭДҮЙН <br/>ЗЭЭЛИЙН <br/>УДИРДЛАГА</>
            ) : (
              <>FUTURE-PROOF <br/>LOAN <br/>RECOVERY</>
            )}
          </h1>
          
          <p className={`text-xl md:text-2xl max-w-3xl text-center mb-16 font-medium leading-relaxed animate-content-entrance ${isDark ? 'text-slate-400' : 'text-slate-600'}`} style={{ animationDelay: '200ms' }}>
            {t.hero.subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 animate-content-entrance w-full sm:w-auto" style={{ animationDelay: '300ms' }}>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="h-20 w-full sm:w-[320px] rounded-2xl bg-blue-600 text-white text-[13px] font-black uppercase tracking-[0.25em] flex items-center justify-center gap-4 shadow-2xl shadow-blue-600/40 hover:bg-blue-500 hover:scale-[1.03] active:scale-95 transition-all duration-300"
            >
              {t.hero.cta}
              <ArrowRightOutlined className="text-xl" />
            </button>
            <button 
              className={`h-20 w-full sm:w-[320px] rounded-2xl text-[13px] font-black uppercase tracking-[0.25em] border flex items-center justify-center gap-4 hover:scale-[1.03] active:scale-95 transition-all duration-300 ${isDark ? 'bg-white/5 border-white/10 text-white hover:bg-white/10' : 'bg-slate-50 border-slate-200 text-slate-900 hover:bg-slate-100'}`}
            >
              <PlayCircleFilled className="text-blue-500 text-3xl" />
              {t.hero.secondary}
            </button>
          </div>
        </div>
      </div>

      <div 
        className="w-full max-w-[92vw] 2xl:max-w-7xl mx-auto px-6 mt-[65vh] pb-64 relative z-10 transition-all duration-300 ease-out will-change-transform"
        style={{ 
          transform: `scale(${mockupScale}) translateY(${mockupTranslateY}px)`,
          opacity: Math.max(0, mockupOpacity),
          filter: `blur(${mockupBlur}px)`
        }}
      >
        <div className="relative">
          <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[160%] h-[600px] stage-glow opacity-30 pointer-events-none"></div>
          
          <div className={`relative z-10 glass-card-pro rounded-[4.5rem] overflow-hidden border flex h-[820px] shadow-[0_80px_160px_rgba(0,0,0,0.8)] ${isDark ? 'border-white/5 shadow-black/90' : 'border-slate-200 shadow-slate-900/10'}`}>
             <aside className={`w-20 md:w-64 flex flex-col border-r transition-colors ${isDark ? 'bg-slate-950/60 border-white/5' : 'bg-slate-50 border-slate-100'}`}>
                <div className="p-10 flex items-center gap-5">
                   <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center font-black text-white shadow-xl shadow-blue-600/30">D</div>
                   <span className={`hidden md:block text-[11px] font-black tracking-[0.25em] ${isDark ? 'text-white' : 'text-slate-900'}`}>DEBTPRO_OS</span>
                </div>
                
                <nav className="flex-1 px-5 space-y-3 mt-4">
                  {menuItems.map((item) => (
                    <button
                      key={item.key}
                      onClick={() => setActiveKey(item.key)}
                      className={`w-full flex items-center gap-5 px-5 py-4 rounded-[2rem] transition-all duration-300 group
                        ${activeKey === item.key 
                          ? (isDark ? 'bg-blue-600/10 text-blue-400 border border-blue-500/20' : 'bg-blue-600 text-white shadow-xl shadow-blue-600/20') 
                          : (isDark ? 'text-slate-500 hover:bg-white/5' : 'text-slate-400 hover:bg-slate-200/50')}`}
                    >
                      <span className={`text-xl transition-transform group-hover:scale-110 ${activeKey === item.key && !isDark ? 'text-white' : ''}`}>{item.icon}</span>
                      <span className={`hidden md:block text-[10px] font-black uppercase tracking-[0.2em] ${activeKey === item.key && !isDark ? 'text-white' : ''}`}>
                        {item.label}
                      </span>
                    </button>
                  ))}
                </nav>

                <div className="p-8 border-t border-white/5">
                   <div className={`hidden md:flex items-center gap-4 p-4 rounded-[1.8rem] ${isDark ? 'bg-white/5' : 'bg-white border border-slate-100 shadow-sm'}`}>
                      <Avatar size="small" icon={<UserOutlined />} className="bg-blue-600" />
                      <div className="overflow-hidden">
                         <div className={`text-[10px] font-black uppercase tracking-[0.1em] truncate ${isDark ? 'text-white' : 'text-slate-900'}`}>Admin_User_01</div>
                         <div className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Supervisor</div>
                      </div>
                   </div>
                </div>
             </aside>

             <main className="flex-1 flex flex-col overflow-hidden">
                <header className={`h-24 border-b flex items-center justify-between px-12 transition-colors ${isDark ? 'bg-slate-950/20 border-white/5' : 'bg-white/40 border-slate-100'}`}>
                   <div className="flex items-center gap-10 flex-1">
                      <MenuUnfoldOutlined className="text-slate-500 cursor-pointer hover:text-blue-500 transition-colors text-2xl" />
                      <div className="hidden md:flex items-center gap-3 text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">
                         <span>Network</span>
                         <span className="text-slate-800">/</span>
                         <span className={isDark ? 'text-white' : 'text-slate-900'}>{currentView?.label}</span>
                      </div>
                      <Input 
                         prefix={<SearchOutlined className="text-slate-500" />} 
                         placeholder="Execute command..." 
                         className={`hidden lg:flex max-w-sm border-none h-12 rounded-2xl text-[11px] font-medium tracking-wide shadow-inner ${isDark ? 'bg-white/5 border-white/5 text-white' : 'bg-slate-100 border-slate-100 text-slate-900'}`} 
                      />
                   </div>
                   <div className="flex items-center gap-10">
                      <Space className="hidden md:flex gap-8">
                         <Badge count={3} size="small" color="#2563eb" offset={[-2, 2]}>
                            <BellOutlined className="text-2xl text-slate-500 hover:text-blue-500 cursor-pointer transition-colors" />
                         </Badge>
                         <QuestionCircleOutlined className="text-2xl text-slate-500 hover:text-blue-500 cursor-pointer transition-colors" />
                      </Space>
                      <div className={`w-px h-10 mx-2 ${isDark ? 'bg-white/10' : 'bg-slate-200'}`}></div>
                      <div className="flex items-center gap-5">
                         <div className="text-right hidden sm:block">
                            <div className={`text-[11px] font-black uppercase tracking-[0.1em] ${isDark ? 'text-white' : 'text-slate-900'}`}>TND_CORE</div>
                            <div className="text-[9px] font-bold text-emerald-500 uppercase tracking-[0.2em] flex items-center justify-end gap-2">
                               <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]"></span> Online
                            </div>
                         </div>
                         <Avatar shape="square" size="large" className="bg-blue-600 rounded-xl shadow-lg shadow-blue-600/20">A</Avatar>
                      </div>
                   </div>
                </header>

                <div className={`flex-1 overflow-y-auto p-12 no-scrollbar ${isDark ? 'bg-slate-900/20' : 'bg-slate-50/20'}`}>
                   <div className="animate-content-entrance w-full h-full">
                      {currentView?.component}
                   </div>
                </div>
             </main>
          </div>
        </div>
      </div>

      <div 
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center pointer-events-none w-full"
        style={{ 
          opacity: Math.max(0, 1 - scrollProgress * 5),
          visibility: 1 - scrollProgress * 5 <= 0 ? 'hidden' : 'visible'
        }}
      >
        <div 
          className="flex flex-col items-center gap-4 cursor-pointer pointer-events-auto group"
          onClick={() => window.scrollTo({ top: 800, behavior: 'smooth' })}
        >
          <span className={`text-[9px] font-black uppercase tracking-[0.6em] transition-colors ${isDark ? 'text-slate-600 group-hover:text-blue-400' : 'text-slate-400 group-hover:text-blue-600'}`}>
            ENTER_ECOSYSTEM
          </span>
          <div className={`w-[2px] h-12 relative overflow-hidden rounded-full ${isDark ? 'bg-white/10' : 'bg-slate-200'}`}>
            <div className="absolute top-0 left-0 w-full h-1/2 bg-blue-500 rounded-full animate-scroll-spark shadow-[0_0_15px_#2563eb]"></div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes beam {
          0% { transform: translateY(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(100%); opacity: 0; }
        }
        .animate-beam {
          animation: beam 4s linear infinite;
        }
        @keyframes scroll-spark {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(220%); }
        }
        .animate-scroll-spark {
          animation: scroll-spark 2s cubic-bezier(0.16, 1, 0.3, 1) infinite;
        }
        .gradient-text-hero {
          background: linear-gradient(to bottom, #fff 30%, #475569 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .light .gradient-text-hero {
          background: linear-gradient(to bottom, #0f172a 30%, #64748b 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        @keyframes content-entrance {
          from { opacity: 0; transform: translateY(30px); filter: blur(10px); }
          to { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        .animate-content-entrance {
          animation: content-entrance 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </header>
  );
};
