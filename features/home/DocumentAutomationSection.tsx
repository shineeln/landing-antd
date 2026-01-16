
import React from 'react';
import { Typography, Progress } from 'antd';
import { FileText, Braces, Printer, History } from 'lucide-react';
import { SectionProps } from '../../shared/types';
import { i18n } from '../../shared/i18n';
import { Reveal } from '../../components/ui/Reveal';
import { PreviewDocAutomation } from '../../DashboardPreviews';

const { Text } = Typography;

export const DocumentAutomationSection: React.FC<SectionProps> = ({ lang, theme }) => {
  const t = i18n[lang].docSection;
  const isDark = theme === 'dark';

  const icons = [
    <Braces size={24}/>,
    <Printer size={24}/>,
    <History size={24}/>
  ];

  return (
    <section id="docs" className={`py-44 md:py-64 transition-colors ${isDark ? 'bg-slate-950' : 'bg-[#fcfdfe]'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <Reveal direction="right" className="lg:order-2">
            <div>
              <div className={`inline-flex items-center gap-3 px-6 py-2 rounded-full border mb-8 ${isDark ? 'border-emerald-500/20 bg-emerald-500/5' : 'border-emerald-200 bg-emerald-50'}`}>
                <FileText size={16} className="text-emerald-500"/>
                <Text className={`text-[10px] font-black tracking-[0.4em] uppercase ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`}>{t.tag}</Text>
              </div>
              <h2 className={`text-4xl md:text-5xl lg:text-7xl font-black mb-8 tracking-tighter leading-[0.9] ${isDark ? 'text-white' : 'text-slate-900'}`}>
                {t.title}
              </h2>
              <p className={`text-lg md:text-xl mb-12 font-medium leading-relaxed ${isDark ? 'text-slate-500' : 'text-slate-600'}`}>
                {t.subtitle}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mb-12">
                {t.features.map((f, i) => (
                  <div key={i} className={`p-8 rounded-[2.5rem] border transition-all duration-500 hover:-translate-y-1 flex items-start gap-6 ${isDark ? 'bg-white/5 border-white/5 hover:border-emerald-500/20' : 'bg-white border-slate-100 shadow-sm hover:border-emerald-200'}`}>
                    <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 shrink-0">
                      {icons[i]}
                    </div>
                    <div>
                      <h4 className={`text-base font-black mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>{f.title}</h4>
                      <p className={`text-sm font-medium ${isDark ? 'text-slate-500' : 'text-slate-600'}`}>{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className={`p-8 rounded-3xl border border-emerald-500/20 bg-emerald-500/5`}>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[10px] font-black uppercase tracking-widest text-emerald-500">Efficiency_Score</span>
                  <span className="text-xl font-black text-emerald-500">{t.impact}</span>
                </div>
                <Progress percent={100} showInfo={false} strokeColor="#10b981" trailColor={isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)"} />
              </div>
            </div>
          </Reveal>

          <Reveal direction="left" delay={200} className="lg:order-1">
            <div className="relative">
               <div className="absolute -inset-10 bg-emerald-500/10 blur-[100px] rounded-full opacity-30"></div>
               <PreviewDocAutomation lang={lang} theme={theme} />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
