
import React from 'react';
import { Language, ThemeMode } from '../shared/types';
import { HeroSection } from '../features/home/HeroSection';
import { PartnerMarquee } from '../PartnerMarquee';
import { ComparisonSection } from '../ComparisonSection';
import { WhyDebtProSection } from '../WhyDebtProSection';
import { WorkflowSection } from '../WorkflowSection';
import { InteractiveFlowSection } from '../InteractiveFlowSection';
import { SMSAutomationSection } from '../features/home/SMSAutomationSection';
import { DocumentAutomationSection } from '../features/home/DocumentAutomationSection';
import { ShowcaseSection } from '../ShowcaseSection';
import { PricingSection } from '../PricingSection';
import { ReviewsSection } from '../ReviewsSection';
import { ContactSection } from '../ContactSection';
import { FAQSection } from '../FAQSection';

interface PageProps {
  lang: Language;
  theme: ThemeMode;
}

export default function Page({ lang, theme }: PageProps) {
  return (
    <div className="flex flex-col">
      <div id="home"><HeroSection lang={lang} theme={theme} /></div>
      <PartnerMarquee lang={lang} theme={theme} />
      
      <div id="comparison"><ComparisonSection lang={lang} theme={theme} /></div>
      <div id="why"><WhyDebtProSection lang={lang} theme={theme} /></div>
      <div id="solutions"><WorkflowSection lang={lang} theme={theme} /></div>
      <div id="product"><InteractiveFlowSection lang={lang} theme={theme} /></div>
      <div id="sms"><SMSAutomationSection lang={lang} theme={theme} /></div>
      <div id="docs"><DocumentAutomationSection lang={lang} theme={theme} /></div>
      <div id="showcase"><ShowcaseSection lang={lang} theme={theme} /></div>
      <div id="pricing"><PricingSection lang={lang} theme={theme} /></div>
      <div id="customers"><ReviewsSection lang={lang} theme={theme} /></div>
      <div id="contact"><ContactSection lang={lang} theme={theme} /></div>
      <div id="faq"><FAQSection lang={lang} theme={theme} /></div>
    </div>
  );
}
