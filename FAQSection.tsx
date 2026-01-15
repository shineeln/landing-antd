
import React from 'react';
import { Collapse, Typography, Badge } from 'antd';
import { i18n, Language } from './i18n';
import { Reveal } from './CommonUI';

const { Title, Paragraph } = Typography;

interface FAQSectionProps {
  lang: Language;
  theme: 'light' | 'dark';
}

export const FAQSection: React.FC<FAQSectionProps> = ({ lang, theme }) => {
  const t = i18n[lang];
  const isDark = theme === 'dark';
  
  return (
    <section id="faq" className={`py-32 transition-colors duration-500 ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
      <div className="max-w-4xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-20">
            <Title level={2} className="text-3xl md:text-5xl font-black">{t.faq.title}</Title>
            <Paragraph className={isDark ? 'text-slate-500' : 'text-slate-600'}>Solutions for high-performance loan management.</Paragraph>
          </div>
        </Reveal>
        
        <Collapse 
          accordion 
          ghost 
          size="large"
          expandIconPosition="end"
          className="debtpro-faq"
          items={t.faq.items.map((item, i) => ({
            key: i,
            label: <span className={`text-lg font-black tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>{item.q}</span>,
            children: <Paragraph className={`font-medium leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-700'}`}>{item.a}</Paragraph>,
          }))}
        />
      </div>

      <style>{`
        .debtpro-faq .ant-collapse-item {
          margin-bottom: 24px;
          border-radius: 24px !important;
          border: 1px solid ${isDark ? '#1e293b' : '#e2e8f0'} !important;
          background: ${isDark ? 'rgba(15, 23, 42, 0.5)' : '#fff'} !important;
          overflow: hidden;
          transition: all 0.3s ease;
          box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.05);
        }
        .debtpro-faq .ant-collapse-item-active {
          border-color: #2563eb !important;
          box-shadow: 0 10px 30px rgba(37, 99, 235, 0.1);
        }
        .debtpro-faq .ant-collapse-header {
          padding: 24px 32px !important;
        }
        .debtpro-faq .ant-collapse-content-box {
          padding: 0 32px 32px 32px !important;
        }
      `}</style>
    </section>
  );
};
