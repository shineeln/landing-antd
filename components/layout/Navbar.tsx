
import React, { useState, useEffect } from 'react';
import { Button, Segmented, Space, Typography, Dropdown, Tooltip } from 'antd';
import { 
  DownOutlined, SunOutlined, MoonOutlined, 
  ThunderboltOutlined, BarChartOutlined, MessageOutlined, FileTextOutlined 
} from '@ant-design/icons';
import { Language, ThemeMode } from '../../shared/types';
import { i18n } from '../../shared/i18n';

const { Text } = Typography;

interface NavbarProps {
  lang: Language;
  setLang: (l: Language) => void;
  theme: ThemeMode;
  setTheme: (t: ThemeMode) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, setLang, theme, setTheme }) => {
  const t = i18n[lang];
  const [scrolled, setScrolled] = useState(false);
  const isDark = theme === 'dark';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const productMenuItems = [
    {
      key: 'automation',
      label: (
        <Space direction="vertical" size={0} className="p-1 md:p-2">
          <Text strong className={`uppercase text-[9px] md:text-[10px] tracking-[0.1em] ${isDark ? 'text-white' : 'text-slate-900'}`}>{t.megaMenu.automation.title}</Text>
          <Text type="secondary" className="text-[10px] md:text-[11px] font-medium">{t.megaMenu.automation.desc}</Text>
        </Space>
      ),
      icon: <ThunderboltOutlined className="text-blue-500" />
    },
    {
      key: 'analytics',
      label: (
        <Space direction="vertical" size={0} className="p-1 md:p-2">
          <Text strong className={`uppercase text-[9px] md:text-[10px] tracking-[0.1em] ${isDark ? 'text-white' : 'text-slate-900'}`}>{t.megaMenu.analytics.title}</Text>
          <Text type="secondary" className="text-[10px] md:text-[11px] font-medium">{t.megaMenu.analytics.desc}</Text>
        </Space>
      ),
      icon: <BarChartOutlined className="text-blue-500" />
    }
  ];

  return (
    <div className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 px-4 md:px-6 ${scrolled ? 'pt-2 md:pt-4' : 'pt-4 md:pt-10'}`}>
      <nav className={`max-w-7xl mx-auto flex justify-between items-center transition-all duration-500 h-16 md:h-20 px-4 md:px-10 rounded-2xl md:rounded-[24px] backdrop-blur-xl border 
        ${scrolled ? 'shadow-2xl scale-[0.99] md:scale-[0.98]' : 'scale-100'} 
        ${isDark ? 'bg-slate-950/40 border-white/5' : 'bg-white/70 border-blue-500/10'}`}>
        
        <div className="flex items-center gap-3 md:gap-4 cursor-pointer group" onClick={() => scrollTo('home')}>
          <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-600 rounded-lg md:rounded-xl flex items-center justify-center font-black text-white shadow-lg shrink-0">D</div>
          <span className={`text-lg md:text-xl font-black tracking-tighter uppercase shrink-0 ${isDark ? 'text-white' : 'text-slate-900'}`}>DEBTPRO</span>
        </div>

        <div className="hidden xl:flex items-center gap-8">
          <Dropdown menu={{ items: productMenuItems }} placement="bottomCenter">
            <Button type="text" className={`uppercase text-[10px] font-black tracking-[0.2em] ${isDark ? 'text-slate-300' : 'text-slate-50'}`}>
              {t.nav.product} <DownOutlined style={{ fontSize: 9 }} />
            </Button>
          </Dropdown>
          {['solutions', 'why', 'pricing', 'customers'].map((key) => (
            <Button key={key} type="text" onClick={() => scrollTo(key)} className={`uppercase text-[10px] font-black tracking-[0.2em] ${isDark ? 'text-slate-300' : 'text-slate-50'}`}>
              {(t.nav as any)[key]}
            </Button>
          ))}
        </div>

        <div className="flex items-center gap-2 md:gap-6">
          <div className="flex items-center gap-2">
            <Button 
              shape="circle" 
              size="small"
              icon={isDark ? <SunOutlined /> : <MoonOutlined />} 
              onClick={() => setTheme(isDark ? 'light' : 'dark')} 
              className="md:scale-100"
            />
            <Segmented
              size="small"
              options={['MN', 'EN', 'KO']}
              value={lang.toUpperCase()}
              onChange={(val) => setLang(val.toString().toLowerCase() as Language)}
              className="font-black text-[8px] md:text-[9px] hidden sm:block"
            />
          </div>
          <Button 
            type="primary" 
            size={window.innerWidth < 768 ? "small" : "middle"}
            className="h-8 md:h-12 px-4 md:px-8 text-[9px] md:text-[11px] font-black uppercase tracking-wider"
            onClick={() => scrollTo('contact')}
          >
            {t.nav.demo}
          </Button>
        </div>
      </nav>
    </div>
  );
};
