
import React, { useState, useEffect } from 'react';
import { ConfigProvider, theme as antdTheme, Layout, App as AntdApp } from 'antd';
import { Language } from './i18n';
import { Navbar } from './Navbar';
import { Hero } from './Hero';
import { ComparisonSection } from './ComparisonSection';
import { WhyDebtProSection } from './WhyDebtProSection';
import { WorkflowSection } from './WorkflowSection';
import { InteractiveFlowSection } from './InteractiveFlowSection';
import { ShowcaseSection } from './ShowcaseSection';
import { ContactSection } from './ContactSection';
import { FAQSection } from './FAQSection';
import { Footer } from './Footer';

const { Content } = Layout;

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('mn');
  const [themeMode, setThemeMode] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    document.documentElement.className = themeMode;
    document.body.className = `antialiased ${themeMode}`;
  }, [themeMode]);

  return (
    <ConfigProvider
      theme={{
        algorithm: themeMode === 'dark' ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm,
        token: {
          colorPrimary: '#2563eb',
          borderRadius: 16,
          fontFamily: 'Inter, sans-serif',
          colorBgContainer: themeMode === 'dark' ? '#0f172a' : '#ffffff',
          colorText: themeMode === 'dark' ? 'rgba(255, 255, 255, 0.85)' : 'rgba(0, 0, 0, 0.88)',
          colorBgLayout: themeMode === 'dark' ? '#020617' : '#ffffff',
        },
        components: {
          Button: {
            fontWeight: 700,
            controlHeight: 40,
          },
          Card: {
            borderRadiusLG: 32,
          }
        }
      }}
    >
      <AntdApp>
        <Layout className={`min-h-screen transition-colors duration-500 ${themeMode === 'dark' ? 'bg-slate-950 text-slate-200' : 'bg-white text-slate-900'}`}>
          <Navbar 
            lang={lang} 
            setLang={setLang} 
            theme={themeMode} 
            setTheme={setThemeMode} 
          />
          <Content>
            <div id="home"><Hero lang={lang} theme={themeMode} /></div>
            <ComparisonSection lang={lang} theme={themeMode} />
            <div id="why"><WhyDebtProSection lang={lang} theme={themeMode} /></div>
            <div id="solutions"><WorkflowSection lang={lang} theme={themeMode} /></div>
            <div id="product"><InteractiveFlowSection lang={lang} theme={themeMode} /></div>
            <div id="customers"><ShowcaseSection lang={lang} theme={themeMode} /></div>
            <div id="contact"><ContactSection lang={lang} theme={themeMode} /></div>
            <div id="faq"><FAQSection lang={lang} theme={themeMode} /></div>
          </Content>
          <Footer lang={lang} theme={themeMode} />
        </Layout>
      </AntdApp>
    </ConfigProvider>
  );
};

export default App;
