
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
import { PricingSection } from './PricingSection';
import { ReviewsSection } from './ReviewsSection';
import { ContactSection } from './ContactSection';
import { FAQSection } from './FAQSection';
import { Footer } from './Footer';
import { ChatBot } from './ChatBot';

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
          borderRadius: 14,
          fontFamily: 'Inter, Plus Jakarta Sans, sans-serif',
          colorBgContainer: themeMode === 'dark' ? '#0f172a' : '#ffffff',
          colorText: themeMode === 'dark' ? '#f8fafc' : '#0f172a',
          colorBgLayout: themeMode === 'dark' ? '#020617' : '#ffffff',
          colorBorder: 'rgba(255, 255, 255, 0.08)',
        },
        components: {
          Button: {
            fontWeight: 800,
            controlHeight: 52,
            borderRadius: 14,
          },
          Card: {
            borderRadiusLG: 32,
            colorBgContainer: themeMode === 'dark' ? 'rgba(15, 23, 42, 0.4)' : '#ffffff',
            colorBorderSecondary: 'rgba(255, 255, 255, 0.05)',
          },
          Segmented: {
            borderRadius: 12,
            fontWeightStrong: 900,
          },
          Input: {
            controlHeight: 52,
            borderRadius: 12,
            colorBgContainer: 'rgba(255, 255, 255, 0.02)',
          }
        }
      }}
    >
      <AntdApp>
        <Layout className={`min-h-screen transition-all duration-700 ${themeMode === 'dark' ? 'bg-slate-950 text-slate-100' : 'bg-white text-slate-900'}`}>
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
            <ShowcaseSection lang={lang} theme={themeMode} />
            <PricingSection lang={lang} theme={themeMode} />
            <div id="customers"><ReviewsSection lang={lang} theme={themeMode} /></div>
            <div id="contact"><ContactSection lang={lang} theme={themeMode} /></div>
            <div id="faq"><FAQSection lang={lang} theme={themeMode} /></div>
          </Content>
          <Footer lang={lang} theme={themeMode} />
          <ChatBot lang={lang} theme={themeMode} />
        </Layout>
      </AntdApp>
    </ConfigProvider>
  );
};

export default App;
