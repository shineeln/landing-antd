
import React, { useState, useEffect } from 'react';
import { ConfigProvider, Layout, App as AntdApp } from 'antd';
import { Language, ThemeMode } from './shared/types';
import { getThemeConfig } from './shared/theme';
import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './features/home/HeroSection';
import { PartnerMarquee } from './PartnerMarquee';
import { ComparisonSection } from './ComparisonSection';
import { WhyDebtProSection } from './WhyDebtProSection';
import { RecoveryStagesSection } from './RecoveryStagesSection';
import { WorkflowSection } from './WorkflowSection';
import { InteractiveFlowSection } from './InteractiveFlowSection';
import { SMSAutomationSection } from './features/home/SMSAutomationSection';
import { DocumentAutomationSection } from './features/home/DocumentAutomationSection';
import { ShowcaseSection } from './ShowcaseSection';
import { PricingSection } from './PricingSection';
import { ReviewsSection } from './ReviewsSection';
import { ContactSection } from './ContactSection';
import { FAQSection } from './FAQSection';
import { Footer } from './Footer';
import { ChatBot } from './ChatBot';
import { ScrollTracker } from './ScrollTracker';

const { Content } = Layout;

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('mn');
  const [themeMode, setThemeMode] = useState<ThemeMode>('dark');

  useEffect(() => {
    document.documentElement.className = themeMode;
    document.body.className = `antialiased ${themeMode}`;
  }, [themeMode]);

  const themeConfig = getThemeConfig(themeMode);

  return (
    <ConfigProvider theme={themeConfig}>
      <AntdApp>
        <Layout className={`min-h-screen transition-colors duration-700 ${themeMode === 'dark' ? 'bg-slate-950' : 'bg-[#fdfdfe]'}`}>
          <Navbar 
            lang={lang} 
            setLang={setLang} 
            theme={themeMode} 
            setTheme={setThemeMode} 
          />
          <ScrollTracker lang={lang} theme={themeMode} />
          
          <Content className="relative">
            <div id="home"><HeroSection lang={lang} theme={themeMode} /></div>
            <PartnerMarquee lang={lang} theme={themeMode} />
            
            <div id="lifecycle"><RecoveryStagesSection lang={lang} theme={themeMode} /></div>
            <div id="comparison"><ComparisonSection lang={lang} theme={themeMode} /></div>
            <div id="why"><WhyDebtProSection lang={lang} theme={themeMode} /></div>
            <div id="solutions"><WorkflowSection lang={lang} theme={themeMode} /></div>
            <div id="product"><InteractiveFlowSection lang={lang} theme={themeMode} /></div>
            <div id="sms"><SMSAutomationSection lang={lang} theme={themeMode} /></div>
            <div id="docs"><DocumentAutomationSection lang={lang} theme={themeMode} /></div>
            <div id="showcase"><ShowcaseSection lang={lang} theme={themeMode} /></div>
            <div id="pricing"><PricingSection lang={lang} theme={themeMode} /></div>
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
