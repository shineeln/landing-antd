
import React from 'react';
import { Collapse, Typography } from 'antd';
import { i18n, Language } from './i18n';
import { Reveal } from './CommonUI';

const { Text } = Typography;

interface FAQSectionProps {
  lang: Language;
  theme: 'light' | 'dark';
}

export const FAQSection: React.FC<FAQSectionProps> = ({ lang, theme }) => {
  const t = i18n[lang];
  const isDark = theme === 'dark';
  
  return (
    <section id="faq" className={`py-40 transition-colors duration-500 ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
      <div className="max-w-4xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-32">
             <div className={`inline-flex items-center gap-3 px-6 py-2 rounded-full border mb-10 ${isDark ? 'border-blue-500/20 bg-blue-500/5' : 'border-blue-200 bg-blue-50'}`}>
                <Text className={`text-[10px] font-black tracking-[0.4em] uppercase ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>OPERATIONAL_FAQ</Text>
             </div>
            <h2 className={`text-4xl md:text-7xl font-black tracking-tighter mb-8 ${isDark ? 'text-white' : 'text-slate-900'}`}>{t.faq.title}</h2>
            <p className="text-slate-500 font-medium">Enterprise solutions for high-performance loan management.</p>
          </div>
        </Reveal>
        
        <Collapse 
          accordion 
          ghost 
          size="large"
          expandIconPosition="end"
          className={`debtpro-faq ${isDark ? 'dark-faq' : 'light-faq'}`}
          items={t.faq.items.map((item, i) => ({
            key: i,
            label: <span className={`text-xl font-black tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>{item.q}</span>,
            children: <p className={`text-base font-medium leading-relaxed pb-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{item.a}</p>,
          }))}
        />
      </div>

      <style>{`
        .debtpro-faq .ant-collapse-item {
          margin-bottom: 24px;
          border-radius: 32px !important;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .dark-faq .ant-collapse-item {
          border: 1px solid rgba(255, 255, 255, 0.05) !important;
          background: rgba(255, 255, 255, 0.02) !important;
        }
        .dark-faq .ant-collapse-item-active {
          border-color: rgba(37, 99, 235, 0.3) !important;
          background: rgba(255, 255, 255, 0.05) !important;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
        }
        
        .light-faq .ant-collapse-item {
          border: 1px solid rgba(0, 0, 0, 0.05) !important;
          background: rgba(0, 0, 0, 0.01) !important;
        }
        .light-faq .ant-collapse-item-active {
          border-color: rgba(37, 99, 235, 0.2) !important;
          background: #ffffff !important;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.05);
        }

        .debtpro-faq .ant-collapse-header { padding: 32px 40px !important; }
        .debtpro-faq .ant-collapse-content-box { padding: 0 40px 32px 40px !important; }
        .debtpro-faq .ant-collapse-expand-icon { color: #2563eb !important; font-weight: 900 !important; }
      `}</style>
    </section>
  );
};
