
import React from 'react';
import { Typography } from 'antd';
import { MessageSquare, Layout, Send, History } from 'lucide-react';
import { SectionProps } from '../../shared/types';
import { i18n } from '../../shared/i18n';
import { Reveal } from '../../components/ui/Reveal';
import { PreviewSMSTemplate } from '../../DashboardPreviews';

const { Text } = Typography;

export const SMSAutomationSection: React.FC<SectionProps> = ({ lang, theme }) => {
  const t = i18n[lang].smsSection;
  const isDark = theme === 'dark';

  const icons = [
    <Layout size={20}/>,
    <Send size={20}/>,
    <History size={20}/>
  ];

  return (
    <section id="sms" className={`py-44 md:py-64 transition-colors ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <Reveal direction="right">
            <div>
              <div className={`inline-flex items-center gap-3 px-6 py-2 rounded-full border mb-8 ${isDark ? 'border-blue-500/20 bg-blue-500/5' : 'border-blue-200 bg-blue-50'}`}>
                <MessageSquare size={16} className="text-blue-500"/>
                <Text className={`text-[10px] font-black tracking-[0.4em] uppercase ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>{t.tag}</Text>
              </div>
              <h2 className={`text-4xl md:text-5xl lg:text-7xl font-black mb-8 tracking-tighter leading-[0.9] ${isDark ? 'text-white' : 'text-slate-900'}`}>
                {t.title}
              </h2>
              <p className={`text-lg md:text-xl mb-12 font-medium leading-relaxed ${isDark ? 'text-slate-500' : 'text-slate-600'}`}>
                {t.subtitle}
              </p>

              <div className="space-y-8 mb-12">
                {t.features.map((f, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 border transition-all duration-500 group-hover:scale-110 ${isDark ? 'bg-white/5 border-white/5 text-blue-400' : 'bg-blue-50 border-blue-100 text-blue-600'}`}>
                      {icons[i]}
                    </div>
                    <div>
                      <h4 className={`text-lg font-black mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>{f.title}</h4>
                      <p className={`text-sm font-medium ${isDark ? 'text-slate-500' : 'text-slate-600'}`}>{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-12">
                {Object.entries(t.stats).map(([k, v]) => (
                  <div key={k}>
                    <div className="text-2xl font-black text-blue-500">{v}</div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-slate-500">{k}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal direction="left" delay={200}>
            <div className={`relative p-1 md:p-8 rounded-[3.5rem] border overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.1)] ${isDark ? 'bg-slate-900/20 border-white/5' : 'bg-slate-50 border-slate-200'}`}>
               <div className="absolute inset-0 grid-bg opacity-10"></div>
               <div className="relative z-10 scale-95 md:scale-100">
                  <PreviewSMSTemplate lang={lang} theme={theme} />
               </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
