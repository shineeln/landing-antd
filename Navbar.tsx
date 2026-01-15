
import React from 'react';
import { Button, Segmented, Tooltip, Dropdown, Space, Typography } from 'antd';
import { 
  GlobalOutlined, 
  SunOutlined, 
  MoonOutlined, 
  DownOutlined,
  ThunderboltOutlined,
  BarChartOutlined,
  SafetyCertificateOutlined
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
  const isDark = theme === 'dark';

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const productMenu = {
    items: [
      {
        key: 'automation',
        label: (
          <Space direction="vertical" size={0} className="p-2" onClick={() => scrollTo('product')}>
            <Text strong className="uppercase text-[10px] tracking-widest">{t.megaMenu.automation.title}</Text>
            <Text type="secondary" className="text-xs">{t.megaMenu.automation.desc}</Text>
          </Space>
        ),
        icon: <ThunderboltOutlined className="text-blue-500" />
      },
      {
        key: 'analytics',
        label: (
          <Space direction="vertical" size={0} className="p-2" onClick={() => scrollTo('product')}>
            <Text strong className="uppercase text-[10px] tracking-widest">{t.megaMenu.analytics.title}</Text>
            <Text type="secondary" className="text-xs">{t.megaMenu.analytics.desc}</Text>
          </Space>
        ),
        icon: <BarChartOutlined className="text-blue-500" />
      },
      {
        key: 'security',
        label: (
          <Space direction="vertical" size={0} className="p-2" onClick={() => scrollTo('why')}>
            <Text strong className="uppercase text-[10px] tracking-widest">{t.megaMenu.security.title}</Text>
            <Text type="secondary" className="text-xs">{t.megaMenu.security.desc}</Text>
          </Space>
        ),
        icon: <SafetyCertificateOutlined className="text-blue-500" />
      }
    ]
  };
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] py-4 px-6 backdrop-blur-md bg-opacity-80 border-b transition-all border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950/80">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollTo('home')}>
          <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center font-black text-white shadow-lg">D</div>
          <span className="text-xl font-black tracking-tight uppercase text-slate-900 dark:text-white">DEBTPRO</span>
        </div>
        
        <div className="hidden lg:flex items-center gap-8">
          <Dropdown menu={productMenu} placement="bottomCenter">
            <Button type="text" className="uppercase text-[10px] font-black tracking-widest text-slate-600 dark:text-slate-400">
              {t.nav.product} <DownOutlined style={{ fontSize: 10 }} />
            </Button>
          </Dropdown>
          {['solutions', 'why', 'customers', 'faq'].map((key) => (
            <Button 
              key={key} 
              type="text" 
              onClick={() => scrollTo(key)}
              className="uppercase text-[10px] font-black tracking-widest text-slate-600 dark:text-slate-400"
            >
              {(t.nav as any)[key]}
            </Button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Segmented
            options={['MN', 'EN', 'KO']}
            value={lang.toUpperCase()}
            onChange={(val) => setLang(val.toString().toLowerCase() as Language)}
            className="font-black text-[10px]"
          />

          <Tooltip title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}>
            <Button 
              shape="circle" 
              icon={isDark ? <SunOutlined /> : <MoonOutlined />} 
              onClick={() => setTheme(isDark ? 'light' : 'dark')}
              className="bg-slate-100 dark:bg-slate-800 border-none"
            />
          </Tooltip>

          <Button 
            type="primary" 
            size="large"
            className="hidden sm:flex uppercase text-[10px] font-black tracking-widest px-6"
            onClick={() => scrollTo('contact')}
          >
            {t.nav.demo}
          </Button>
        </div>
      </div>
    </nav>
  );
};
