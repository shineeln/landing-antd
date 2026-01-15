
import React from 'react';
import { Steps, Typography, Card, Badge } from 'antd';
import { 
  PhoneOutlined, 
  MessageOutlined, 
  EnvironmentOutlined, 
  SafetyOutlined, 
  FileDoneOutlined,
  CheckCircleOutlined,
  DollarCircleOutlined
} from '@ant-design/icons';
import { i18n, Language } from './i18n';
import { Reveal } from './CommonUI';

const { Title, Paragraph } = Typography;

// Fix: Ant Design Card component can sometimes have type issues in certain TS environments. 
// Casting it to any as a workaround for the "does not have any construct or call signatures" error.
const AntdCard = Card as any;

interface WorkflowSectionProps {
  lang: Language;
  theme: 'light' | 'dark';
}

export const WorkflowSection: React.FC<WorkflowSectionProps> = ({ lang, theme }) => {
  const t = i18n[lang];
  const isDark = theme === 'dark';

  const steps = [
    { title: t.workflow.stages.call, icon: <PhoneOutlined /> },
    { title: t.workflow.stages.sms, icon: <MessageOutlined /> },
    { title: t.workflow.stages.visit, icon: <EnvironmentOutlined /> },
    { title: t.workflow.stages.legal, icon: <SafetyOutlined /> },
    { title: t.workflow.stages.court, icon: <FileDoneOutlined /> },
    { title: t.workflow.stages.bailiff, icon: <CheckCircleOutlined /> },
    { title: t.workflow.stages.recovery, icon: <DollarCircleOutlined /> },
  ];

  return (
    <section className={`py-32 relative overflow-hidden transition-colors duration-500 ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-24">
            <Badge 
              count={t.workflow.tag} 
              style={{ backgroundColor: '#2563eb10', color: '#2563eb', border: '1px solid #2563eb20' }} 
              className="mb-8 font-black uppercase tracking-widest"
            />
            <Title level={2} className="text-4xl md:text-5xl font-black mb-8 tracking-tight">{t.workflow.title}</Title>
            <Paragraph className={`text-lg max-w-2xl mx-auto font-medium ${isDark ? 'text-slate-500' : 'text-slate-600'}`}>{t.workflow.subtitle}</Paragraph>
          </div>
        </Reveal>

        <AntdCard className={`rounded-[4rem] p-10 shadow-xl border-slate-200 dark:border-slate-800 ${isDark ? 'bg-slate-900/30' : 'bg-white'}`}>
          <Steps
            current={6}
            labelPlacement="vertical"
            items={steps.map(s => ({
              title: <span className={`uppercase text-[10px] font-black tracking-widest ${isDark ? 'text-slate-300' : 'text-slate-900'}`}>{s.title}</span>,
              icon: <div className={`p-3 rounded-xl text-blue-500 ${isDark ? 'bg-blue-500/10' : 'bg-blue-50'}`}>{s.icon}</div>,
            }))}
            className="loan-recovery-steps"
          />
        </AntdCard>

        <Reveal delay={500}>
          <div className={`mt-24 flex flex-wrap justify-center gap-12 p-8 rounded-[3rem] ${isDark ? 'bg-slate-900/30' : 'bg-slate-100/50'}`}>
            {Object.entries(t.workflow.status).map(([key, label]) => (
              <div key={key} className="flex items-center gap-3">
                <Badge status={key === 'success' ? 'success' : key === 'failed' ? 'error' : 'processing'} />
                <span className={`text-[11px] font-black uppercase tracking-widest ${isDark ? 'text-slate-500' : 'text-slate-600'}`}>{label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};
