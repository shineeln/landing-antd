
import React from 'react';
import { Typography, Progress } from 'antd';
import { SectionProps } from './shared/types';
import { i18n } from './i18n';
import { Reveal, NumberTicker } from './CommonUI';
import { 
  TrendingUp, Clock, Heart, Sliders, CheckCircle, 
  MessageSquare, Gavel, Users, DollarSign, BarChart, 
  Search, Shield, Zap, ArrowUpRight, ArrowDownRight 
} from 'lucide-react';

const { Text } = Typography;

export const ImpactMetricsSection: React.FC<SectionProps> = ({ lang, theme }) => {
  const t = i18n[lang].impactMetrics;
  const isDark = theme === 'dark';

  const icons = [
    <Shield className="text-blue-500" size={24} />,      // 100% Transparency
    <Clock className="text-emerald-500" size={24} />,    // 40% Time saving
    <Users className="text-indigo-500" size={24} />,     // 25pt Staff Satisfaction
    <Sliders className="text-orange-500" size={24} />,   // -60% Manual
    <Zap className="text-yellow-500" size={24} />,       // +25% PTP
    <MessageSquare className="text-cyan-500" size={24} />, // -30% Complaints
    <Gavel className="text-slate-500" size={24} />,      // -25% Legal
    <Heart className="text-red-500" size={24} />,       // +20pt Customer Sat
    <DollarSign className="text-emerald-600" size={24} />, // -40% Op Cost
    <BarChart className="text-rose-600" size={24} />,    // -1-3pt NPL
    <Search className="text-purple-500" size={24} />     // 20%+ NPE
  ];

  // Bento grid placement rules (col-span, row-span)
  const gridClasses = [
    "lg:col-span-2 lg:row-span-2", // 100% Hero
    "lg:col-span-1 lg:row-span-1",
    "lg:col-span-1 lg:row-span-1",
    "lg:col-span-1 lg:row-span-1",
    "lg:col-span-1 lg:row-span-2", // PTP Vertical
    "lg:col-span-1 lg:row-span-1",
    "lg:col-span-1 lg:row-span-1",
    "lg:col-span-1 lg:row-span-1",
    "lg:col-span-2 lg:row-span-1", // Op Cost Horizontal
    "lg:col-span-1 lg:row-span-1",
    "lg:col-span-1 lg:row-span-1",
  ];

  return (
    <section id="metrics" className={`py-32 md:py-56 transition-colors relative overflow-hidden ${isDark ? 'bg-slate-950' : 'bg-slate-50'}`}>
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
         <div className={`absolute top-1/4 left-1/4 w-96 h-96 blur-[120px] rounded-full ${isDark ? 'bg-blue-600/20' : 'bg-blue-600/10'}`}></div>
         <div className={`absolute bottom-1/4 right-1/4 w-96 h-96 blur-[120px] rounded-full ${isDark ? 'bg-emerald-600/20' : 'bg-emerald-600/10'}`}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <Reveal>
          <div className="text-center mb-24 md:mb-32">
            <div className={`inline-flex items-center gap-3 px-6 py-2 rounded-full border mb-8 ${isDark ? 'border-blue-500/20 bg-blue-500/10' : 'border-blue-200 bg-blue-100'}`}>
              <Text className={`text-[11px] font-black tracking-[0.4em] uppercase ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>{t.tag}</Text>
            </div>
            <h2 className={`text-5xl md:text-6xl lg:text-8xl font-black mb-10 tracking-tighter leading-[0.85] ${isDark ? 'text-white' : 'text-slate-900'}`}>
               Бодит <span className="text-blue-600 italic">Үр Дүн</span>
            </h2>
            <p className={`text-lg md:text-2xl max-w-3xl mx-auto font-medium leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{t.subtitle}</p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {t.items.map((item, i) => {
            const isHero = i === 0;
            const isHorizontal = i === 8;
            const isPositive = item.prefix === '+' || !item.prefix;
            const isNegative = item.prefix === '-';

            return (
              <Reveal key={i} delay={i * 40} direction="up" className={gridClasses[i] || ""}>
                <div className={`
                  group relative h-full p-8 md:p-10 rounded-[2.5rem] border transition-all duration-700 
                  bento-glow-border overflow-hidden
                  ${isDark 
                    ? 'bg-slate-900/40 border-white/5 hover:bg-slate-900/60' 
                    : 'bg-white border-slate-200 shadow-xl shadow-slate-200/40 hover:border-blue-300'}
                  ${isHero && isDark ? 'bg-gradient-to-br from-blue-600/10 to-transparent' : ''}
                `}>
                  {/* Subtle Background Shimmer */}
                  <div className="absolute inset-0 animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity"></div>

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-start justify-between mb-8">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 ${isDark ? 'bg-white/5 border border-white/10' : 'bg-slate-50 border border-slate-100'}`}>
                        {icons[i]}
                      </div>
                      <div className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2 ${isPositive ? 'text-emerald-500 bg-emerald-500/10' : 'text-rose-500 bg-rose-500/10'}`}>
                        {isPositive ? <ArrowUpRight size={12}/> : <ArrowDownRight size={12}/>}
                        {isPositive ? 'Targeting' : 'Reducing'}
                      </div>
                    </div>

                    <div className="flex-1">
                      <div className="flex items-baseline gap-2 mb-4">
                        <span className={`font-black tracking-tighter leading-none ${isHero ? 'text-6xl md:text-8xl' : 'text-4xl md:text-5xl'} ${isDark ? 'text-white' : 'text-slate-900'}`}>
                          {item.prefix || ''}
                          <NumberTicker value={parseFloat(item.value) || 0} />
                          {item.value.includes('-') && !parseFloat(item.value) ? item.value : ''}
                        </span>
                        <span className={`font-black text-blue-600 uppercase tracking-widest ${isHero ? 'text-2xl' : 'text-sm'}`}>{item.suffix}</span>
                      </div>
                      
                      <h4 className={`font-black uppercase tracking-tight mb-3 ${isHero ? 'text-xl' : 'text-[13px]'} ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                        {item.label}
                      </h4>
                      <p className={`font-medium leading-relaxed ${isHero ? 'text-base opacity-70' : 'text-[11px] opacity-50'} ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                        {item.desc}
                      </p>
                    </div>

                    {/* Miniature visual indicator for some cards */}
                    {(isHero || isHorizontal) && (
                      <div className="mt-8 pt-8 border-t border-white/5 flex gap-2 overflow-hidden items-end h-12">
                        {[...Array(isHero ? 15 : 10)].map((_, idx) => (
                           <div 
                            key={idx} 
                            className={`flex-1 rounded-t-sm transition-all duration-1000 bg-blue-500/20 group-hover:bg-blue-500/40`} 
                            style={{ 
                              height: `${20 + Math.random() * 80}%`,
                              transitionDelay: `${idx * 50}ms`
                            }}
                           ></div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
