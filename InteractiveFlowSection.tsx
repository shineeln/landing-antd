
import React, { useState, useRef, useEffect } from 'react';
import { 
  FileUp, 
  Workflow, 
  MessageSquare, 
  FileText, 
  BarChart3,
  ChevronRight,
  Database,
  ArrowRight
} from 'lucide-react';
import { i18n, Language } from './i18n';
import { Reveal } from './CommonUI';
import { 
  PreviewCommandCenter, 
  PreviewBorrower360, 
  PreviewLegalPipeline, 
  PreviewSMSDashboard, 
  PreviewPerformance 
} from './DashboardPreviews';

interface InteractiveFlowSectionProps {
  lang: Language;
  theme: 'light' | 'dark';
}

export const InteractiveFlowSection: React.FC<InteractiveFlowSectionProps> = ({ lang, theme }) => {
  const t = i18n[lang];
  const isDark = theme === 'dark';
  const [activeStep, setActiveStep] = useState(0);

  const flowIcons = [
    <FileUp size={24} />,
    <Workflow size={24} />,
    <MessageSquare size={24} />,
    <FileText size={24} />,
    <BarChart3 size={24} />
  ];

  const flowPreviews = [
    <PreviewCommandCenter lang={lang} theme={theme} />,
    <div className="flex flex-col items-center justify-center h-full p-6 md:p-8">
      <div className={`w-full max-w-sm p-6 md:p-8 rounded-[2rem] border ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'} shadow-2xl`}>
        <div className="flex items-center gap-4 mb-6 md:mb-8">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-blue-600 flex items-center justify-center text-white"><Workflow size={20}/></div>
          <h4 className="font-black uppercase tracking-widest text-[10px] md:text-xs">Auto-Allocation Engine</h4>
        </div>
        <div className="space-y-4 md:space-y-6">
          {[
            { n: 'Agent Bayaraa', l: 124, b: '1.2B' },
            { n: 'Agent Sarnai', l: 124, b: '1.2B' },
            { n: 'Agent Enkh', l: 124, b: '1.2B' }
          ].map((a, i) => (
            <div key={i} className={`flex justify-between items-center pb-3 md:pb-4 border-b ${isDark ? 'border-slate-800' : 'border-slate-100'} last:border-0`}>
               <span className="text-xs font-bold">{a.n}</span>
               <div className="flex gap-4">
                 <span className="text-[9px] md:text-[10px] font-black text-slate-500">{a.l} L</span>
                 <span className="text-[9px] md:text-[10px] font-black text-blue-500">{a.b}</span>
               </div>
            </div>
          ))}
        </div>
        <div className="mt-6 md:mt-8 pt-4">
           <div className={`h-1.5 w-full ${isDark ? 'bg-slate-800' : 'bg-slate-100'} rounded-full overflow-hidden`}>
             <div className="h-full bg-blue-600 animate-pulse w-full"></div>
           </div>
           <p className="text-[8px] font-black text-slate-500 mt-2 text-center uppercase tracking-tighter">Automated Load Balancing Active</p>
        </div>
      </div>
    </div>,
    <PreviewBorrower360 lang={lang} theme={theme} />,
    <PreviewLegalPipeline lang={lang} theme={theme} />,
    <PreviewPerformance lang={lang} theme={theme} />
  ];

  return (
    <section id="product" className={`section-fullscreen transition-colors ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-6 w-full">
        <Reveal>
          <div className="mb-12 md:mb-16 text-center">
            <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] font-black text-blue-500 uppercase tracking-widest mb-6">
              {t.flow.tag}
            </div>
            <h2 className={`text-3xl md:text-4xl lg:text-5xl font-black mb-6 tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
              {t.flow.title}
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
          <div className="lg:col-span-5 space-y-4 md:space-y-5 relative">
            {t.flow.steps.map((step, i) => (
              <div 
                key={i} 
                onClick={() => setActiveStep(i)}
                className={`relative z-10 p-5 md:p-6 rounded-[2rem] border cursor-pointer transition-all duration-500 group
                  ${activeStep === i 
                    ? (isDark ? 'bg-slate-900/50 border-blue-500/30 shadow-2xl scale-[1.01]' : 'bg-white border-blue-500/30 shadow-xl scale-[1.01]') 
                    : (isDark ? 'bg-transparent border-slate-900/50 grayscale opacity-40 hover:opacity-70 hover:grayscale-0' : 'bg-transparent border-slate-100 grayscale opacity-40 hover:opacity-70 hover:grayscale-0')
                  }`}
              >
                <div className="flex items-start gap-4 md:gap-5">
                  <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center transition-all duration-500 shrink-0
                    ${activeStep === i 
                      ? 'bg-blue-600 text-white shadow-xl shadow-blue-600/20' 
                      : (isDark ? 'bg-slate-900 text-slate-500' : 'bg-slate-100 text-slate-400')}`}>
                    {React.cloneElement(flowIcons[i] as React.ReactElement<{ size?: number }>, { size: 18 })}
                  </div>
                  <div className="flex-1 overflow-hidden">
                    <h3 className={`text-base md:text-lg font-black mb-1.5 transition-colors ${activeStep === i ? (isDark ? 'text-white' : 'text-slate-900') : 'text-slate-500'}`}>
                      {step.title}
                    </h3>
                    <p className={`text-xs md:text-sm font-medium leading-relaxed transition-opacity duration-300 ${activeStep === i ? (isDark ? 'text-slate-400' : 'text-slate-600') : 'hidden'}`}>
                      {step.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-7 hidden lg:block h-full">
            <div className={`relative rounded-[2.5rem] md:rounded-[3rem] border p-8 md:p-10 overflow-hidden transition-all duration-700 min-h-[450px] md:min-h-[500px] flex items-center h-full
              ${isDark ? 'bg-slate-900/20 border-slate-800' : 'bg-white border-slate-100 shadow-2xl shadow-blue-900/5'}`}>
              
              <div className="absolute inset-0 grid-bg opacity-10"></div>
              <div key={activeStep} className="relative z-10 w-full animate-content-entrance">
                {flowPreviews[activeStep]}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
