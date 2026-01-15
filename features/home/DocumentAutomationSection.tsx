
import React from 'react';
import { Typography, Progress } from 'antd';
import { FileText, Printer, FileCheck, Archive } from 'lucide-react';
import { SectionProps } from '../../shared/types';
import { i18n } from '../../shared/i18n';
import { Reveal } from '../../components/ui/Reveal';
import { PreviewLegalPipeline } from '../../DashboardPreviews';

const { Text } = Typography;

export const DocumentAutomationSection: React.FC<SectionProps> = ({ lang, theme }) => {
  const t = i18n[lang].docSection;
  const isDark = theme === 'dark';

  return (
    <section id="docs" className={`py-32 md:py-48 transition-colors ${isDark ? 'bg-slate-950' : 'bg-[#fcfdfe]'}`}>
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {t.features.map((f, i) => (
                  <div key={i} className={`p-8 rounded-[2rem] border transition-all hover:scale-105 ${isDark ? 'bg-white/5 border-white/5' : 'bg-white border-slate-100 shadow-sm'}`}>
                    <div className="mb-6 text-emerald-500">
                      {i === 0 ? <Printer size={24}/> : i === 1 ? <FileCheck size={24}/> : <Archive size={24}/>}
                    </div>
                    <h4 className={`text-base font-black mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>{f.title}</h4>
                    <p className={`text-sm font-medium ${isDark ? 'text-slate-500' : 'text-slate-600'}`}>{f.desc}</p>
                  </div>
                ))}
              </div>

              <div className={`p-8 rounded-3xl border border-emerald-500/20 bg-emerald-500/5`}>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[10px] font-black uppercase tracking-widest text-emerald-500">Efficiency Boost</span>
                  <span className="text-xl font-black text-emerald-500">{t.impact}</span>
                </div>
                <Progress percent={80} showInfo={false} strokeColor="#10b981" trailColor={isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)"} />
              </div>
            </div>
          </Reveal>

          <Reveal direction="left" delay={200} className="lg:order-1">
            <div className={`relative p-8 rounded-[3rem] border overflow-hidden shadow-2xl ${isDark ? 'bg-slate-900/40 border-white/5' : 'bg-white border-slate-200'}`}>
               <div className="absolute inset-0 grid-bg opacity-10"></div>
               <PreviewLegalPipeline lang={lang} theme={theme} />
               <div className="mt-12 p-6 rounded-2xl bg-blue-600/10 border border-blue-500/20">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-black text-xs">PDF</div>
                    <div>
                      <div className={`text-[11px] font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>Мэдэгдэх_хуудас_V2.pdf</div>
                      <div className="text-[9px] font-bold text-slate-500 uppercase">Generated Successfully • 1.2MB</div>
                    </div>
                  </div>
               </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
