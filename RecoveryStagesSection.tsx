
import React from 'react';
import { Typography } from 'antd';
import { SectionProps } from './shared/types';
import { i18n } from './i18n';
import { Reveal } from './CommonUI';

const { Text } = Typography;

export const RecoveryStagesSection: React.FC<SectionProps> = ({ lang, theme }) => {
  const t = i18n[lang].recoveryStages;
  const isDark = theme === 'dark';

  // FinTech Palette: Orange, Brown, Steel, Deep Blue, Royal Blue, Navy
  const stageStyles = [
    { bg: 'from-[#f97316] to-[#ea580c]', shadow: 'shadow-orange-500/40' }, // Portfolio Onboarding
    { bg: 'from-[#92400e] to-[#78350f]', shadow: 'shadow-amber-900/40' },  // Pre-delinquent
    { bg: 'from-[#64748b] to-[#475569]', shadow: 'shadow-slate-500/40' },  // Early Collections
    { bg: 'from-[#2563eb] to-[#1d4ed8]', shadow: 'shadow-blue-600/40' },   // Late Collections
    { bg: 'from-[#1d4ed8] to-[#1e40af]', shadow: 'shadow-blue-700/40' },   // Recoveries
    { bg: 'from-[#0f172a] to-[#020617]', shadow: 'shadow-slate-900/50' }   // Sales/Write-off
  ];

  return (
    <section id="lifecycle" className={`py-32 transition-colors duration-500 overflow-hidden ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-6 w-full text-center">
        <Reveal>
          <div className="mb-24">
            <div className={`inline-flex items-center gap-3 px-6 py-2 rounded-full border mb-8 ${isDark ? 'border-blue-500/20 bg-blue-500/5' : 'border-blue-200 bg-blue-50'}`}>
              <Text className={`text-[10px] font-black tracking-[0.4em] uppercase ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>{t.tag}</Text>
            </div>
            <h2 className={`text-4xl md:text-5xl lg:text-7xl font-black mb-8 tracking-tighter leading-[0.9] ${isDark ? 'text-white' : 'text-slate-900'}`}>{t.title}</h2>
            <p className={`text-base md:text-xl max-w-3xl mx-auto font-medium ${isDark ? 'text-slate-500' : 'text-slate-600'}`}>{t.subtitle}</p>
          </div>
        </Reveal>

        {/* Desktop Overlapping View */}
        <div className="hidden xl:flex items-start justify-center pt-20 pb-40 px-10">
          <div className="flex -space-x-12">
            {t.stages.map((stage, i) => (
              <Reveal key={stage.id} delay={i * 100} direction="up" className="relative group z-10 hover:z-50 transition-all duration-500">
                <div className="flex flex-col items-center">
                  {/* The Main Circle */}
                  <div className={`
                    w-56 h-56 rounded-full flex flex-col items-center justify-center p-8 text-center 
                    bg-gradient-to-br ${stageStyles[i].bg} ${stageStyles[i].shadow}
                    border-4 border-white/10 group-hover:scale-110 group-hover:-translate-y-4 transition-all duration-700 cursor-help relative
                  `}>
                    <div className="absolute inset-0 rounded-full bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* SVG Progress Arcs */}
                    <div className="absolute inset-0 pointer-events-none opacity-40">
                      <svg width="100%" height="100%" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="46" fill="none" stroke="white" strokeWidth="0.5" strokeDasharray="4 4" />
                        {i % 2 === 0 ? (
                          <path d="M 50 4 Q 96 4 96 50" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" />
                        ) : (
                          <path d="M 50 96 Q 4 96 4 50" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" />
                        )}
                        <circle cx={i % 2 === 0 ? "96" : "4"} cy="50" r="2" fill="white" />
                      </svg>
                    </div>

                    <span className="text-white text-[10px] font-black uppercase tracking-[0.1em] mb-3 opacity-80 leading-tight">
                      {stage.title}
                    </span>
                    <span className="text-white text-base font-black leading-tight">
                      {stage.label}
                    </span>
                  </div>

                  {/* Connecting Nodes */}
                  {i < t.stages.length - 1 && (
                    <div className="absolute right-0 top-28 translate-x-1/2 w-4 h-4 rounded-full bg-white border-4 border-blue-600 z-50"></div>
                  )}

                  {/* Descriptive text positioned below */}
                  <div className="absolute top-[110%] w-64 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 pointer-events-none">
                    <div className={`p-6 rounded-2xl border glass-card-pro backdrop-blur-xl ${isDark ? 'bg-slate-900/80 border-white/10' : 'bg-white/95 border-slate-200'} shadow-2xl`}>
                      <p className={`text-xs font-bold leading-relaxed text-left ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                        {stage.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Mobile/Tablet Stack View */}
        <div className="xl:hidden flex flex-col gap-10 mt-10">
          {t.stages.map((stage, i) => (
            <Reveal key={stage.id} delay={i * 100} direction="up" className="w-full">
              <div className={`flex items-center gap-6 p-6 rounded-[2.5rem] border ${isDark ? 'bg-white/5 border-white/5' : 'bg-slate-50 border-slate-200'}`}>
                <div className={`w-24 h-24 rounded-full flex-shrink-0 bg-gradient-to-br ${stageStyles[i].bg} flex items-center justify-center text-center p-3`}>
                  <span className="text-white text-[9px] font-black uppercase leading-tight">{stage.label}</span>
                </div>
                <div className="text-left">
                  <h4 className={`text-xs font-black uppercase tracking-widest mb-1 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>{stage.title}</h4>
                  <p className={`text-sm font-bold ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>{stage.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
