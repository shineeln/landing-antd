
import React, { useState, useEffect } from 'react';
import { Button, Segmented, Space, Typography, Dropdown, Tooltip } from 'antd';
import { 
  DownOutlined,
  ThunderboltOutlined,
  BarChartOutlined,
  SafetyCertificateOutlined,
  SunOutlined,
  MoonOutlined
} from '@ant-design/icons';
import { i18n, Language } from './i18n';

const { Text } = Typography;

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, setLang, theme, setTheme }) => {
  const t = i18n[lang];
  const [scrolled, setScrolled] = useState(false);
  const isDark = theme === 'dark';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const productMenuItems = [
    {
      key: 'product',
      label: (
        <Space direction="vertical" size={0} className="p-2">
          <Text strong className={`uppercase text-[10px] tracking-[0.1em] ${isDark ? 'text-white' : 'text-slate-900'}`}>{t.megaMenu.automation.title}</Text>
          <Text type="secondary" className="text-[11px] font-medium">{t.megaMenu.automation.desc}</Text>
        </Space>
      ),
      icon: <ThunderboltOutlined className="text-blue-500" />
    },
    {
      key: 'product-analytics', // Scrolls to the product section too
      label: (
        <Space direction="vertical" size={0} className="p-2">
          <Text strong className={`uppercase text-[10px] tracking-[0.1em] ${isDark ? 'text-white' : 'text-slate-900'}`}>{t.megaMenu.analytics.title}</Text>
          <Text type="secondary" className="text-[11px] font-medium">{t.megaMenu.analytics.desc}</Text>
        </Space>
      ),
      icon: <BarChartOutlined className="text-blue-500" />
    },
    {
      key: 'why',
      label: (
        <Space direction="vertical" size={0} className="p-2">
          <Text strong className={`uppercase text-[10px] tracking-[0.1em] ${isDark ? 'text-white' : 'text-slate-900'}`}>{t.megaMenu.security.title}</Text>
          <Text type="secondary" className="text-[11px] font-medium">{t.megaMenu.security.desc}</Text>
        </Space>
      ),
      icon: <SafetyCertificateOutlined className="text-blue-500" />
    }
  ];
  
  return (
    <div className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 px-6 ${scrolled ? 'pt-4' : 'pt-8'}`}>
      <nav className={`max-w-7xl mx-auto flex justify-between items-center transition-all duration-500 h-20 px-8 navbar-island ${scrolled ? 'shadow-[0_20px_40px_rgba(0,0,0,0.5)] scale-[0.98]' : ''} ${isDark ? 'navbar-island-dark' : 'navbar-island-light'}`}>
        <div className="flex items-center gap-4 cursor-pointer group" onClick={() => scrollTo('home')}>
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center font-black text-white shadow-xl shadow-blue-600/30 group-hover:scale-110 transition-transform">D</div>
          <span className={`text-xl font-black tracking-tighter uppercase ${isDark ? 'text-white' : 'text-slate-900'}`}>DEBTPRO</span>
        </div>
        
        <div className="hidden lg:flex items-center gap-6">
          <Dropdown 
            menu={{ 
              items: productMenuItems,
              onClick: ({ key }) => {
                const target = key === 'product-analytics' ? 'product' : key;
                scrollTo(target.toString());
              }
            }} 
            placement="bottomCenter" 
            overlayClassName="debtpro-nav-dropdown"
          >
            <Button type="text" className={`uppercase text-[10px] font-black tracking-[0.1em] ${isDark ? 'text-slate-300 hover:text-white' : 'text-slate-500 hover:text-blue-600'}`}>
              {t.nav.product} <DownOutlined style={{ fontSize: 9 }} />
            </Button>
          </Dropdown>
          {['solutions', 'why', 'pricing', 'customers'].map((key) => (
            <Button 
              key={key} 
              type="text" 
              onClick={() => scrollTo(key)}
              className={`uppercase text-[10px] font-black tracking-[0.1em] ${isDark ? 'text-slate-300 hover:text-white' : 'text-slate-500 hover:text-blue-600'}`}
            >
              {(t.nav as any)[key]}
            </Button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2 mr-2">
            <Tooltip title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}>
              <Button 
                type="text" 
                shape="circle"
                icon={isDark ? <SunOutlined /> : <MoonOutlined />}
                onClick={() => setTheme(isDark ? 'light' : 'dark')}
                className={isDark ? 'text-yellow-400 hover:bg-white/10' : 'text-slate-600 hover:bg-slate-100'}
              />
            </Tooltip>
            <Segmented
              options={['MN', 'EN', 'KO']}
              value={lang.toUpperCase()}
              onChange={(val) => setLang(val.toString().toLowerCase() as Language)}
              className={`font-black text-[9px] ${isDark ? 'bg-white/5 text-white' : 'bg-slate-100 text-slate-800'}`}
            />
          </div>

          <Button 
            type="primary" 
            className="h-12 px-8 uppercase text-[10px] font-black tracking-[0.1em]"
            onClick={() => scrollTo('contact')}
          >
            {t.nav.demo}
          </Button>
        </div>
      </nav>
      <style>{`
        .navbar-island-dark {
          background: rgba(8, 12, 24, 0.8) !important;
          border-color: rgba(255, 255, 255, 0.08) !important;
        }
        .navbar-island-light {
          background: rgba(255, 255, 255, 0.9) !important;
          border-color: rgba(0, 0, 0, 0.05) !important;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05) !important;
        }
        .debtpro-nav-dropdown .ant-dropdown-menu {
          background: ${isDark ? '#0f172a' : '#ffffff'} !important;
          border: 1px solid ${isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.05)'} !important;
          border-radius: 20px !important;
          padding: 8px !important;
          box-shadow: 0 20px 40px rgba(0,0,0,0.2) !important;
        }
        .debtpro-nav-dropdown .ant-dropdown-menu-item {
          border-radius: 12px !important;
          margin-bottom: 4px !important;
        }
        .debtpro-nav-dropdown .ant-dropdown-menu-item:hover {
          background: ${isDark ? 'rgba(255,255,255,0.05)' : 'rgba(37,99,235,0.05)'} !important;
        }
      `}</style>
    </div>
  );
};
