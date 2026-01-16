
import React from 'react';
import { Typography } from 'antd';
import { SectionProps } from './shared/types';
import { i18n } from './i18n';
import { Reveal, NumberTicker } from './CommonUI';
import { 
  Shield, Clock, Heart, Sliders, Zap, 
  MessageSquare, Gavel, Users, DollarSign, 
  BarChart, Search, TrendingUp, TrendingDown 
} from 'lucide-react';
import { ResponsiveContainer, LineChart, Line } from 'recharts';

const { Text } = Typography;

// Mock data for sparklines to make them look "live"
const generateSparklineData = () => 
  Array.from({ length: 10 }, (_, i) => ({ value: Math.random() * 100 }));

export const ImpactMetricsSection: React.FC<SectionProps> = ({ lang, theme }) => {
  const t = i18n[lang].impactMetrics;
  const isDark = theme === 'dark';

  const icons = [
    <Shield className="text-blue-500" size={20} />,
    <Clock className="text-emerald-500" size={20} />,
    <Users className="text-indigo-500" size={20} />,
    <Sliders className="text-orange-500" size={20} />,
    <Zap className="text-yellow-500" size={20} />,
    <MessageSquare className="text-cyan-500" size={20} />,
    <Gavel className="text-slate-400" size={20} />,
    <Heart className="text-rose-500" size={20} />,
    <DollarSign className="text-emerald-600" size={20} />,
    <BarChart className="text-rose-600" size={20} />,
    <Search className="text-purple-500" size={20} />
  ];

  return (
    <section id="metrics" className={`py-32 md:py-48 transition-colors relative overflow-hidden ${isDark ? 'bg-[#020617]' : 'bg-[#f8fafc]'}`}>
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden">
        <div className={`absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full blur-[150px] opacity-20 ${isDark ? 'bg-blue-600/30' : 'bg-blue-400/20'}`}></div>
        <div className={`absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full blur-[150px] opacity-10 ${isDark ? 'bg-emerald-600/30' : 'bg-emerald-400/20'}`}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <Reveal>
          <div className="text-center mb-24">
            <div className={`inline-flex items-center gap-3 px-5 py-1.5 rounded-full border mb-8 ${isDark ? 'border-blue-500/20 bg-blue-500/5' : 'border-blue-200 bg-blue-50'}`}>
              <Text className={`text-[9px] font-black tracking-[0.4em] uppercase ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>{t.tag}</Text>
            </div>
            <h2 className={`text-4xl md:text-5xl lg:text-7xl font-black mb-8 tracking-tighter leading-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
               Байгууллагын <span className="text-blue-600">Үсрэлт</span>
            </h2>
            <p className={`text-base md:text-xl max-w-2xl mx-auto font-medium leading-relaxed ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>{t.subtitle}</p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {t.items.map((item, i) => {
            const isPositive = item.prefix === '+' || !item.prefix;
            const sparklineData = generateSparklineData();
            
            return (
              <Reveal key={i} delay={i * 30} direction="up">
                <div className={`
                  group relative h-full p-6 rounded-3xl border transition-all duration-500 
                  ${isDark 
                    ? 'bg-slate-900/40 border-white/5 hover:border-blue-500/30 hover:bg-slate-900/80 shadow-[0_20px_50px_rgba(0,0,0,0.3)]' 
                    : 'bg-white border-slate-200 hover:border-blue-300 hover:shadow-2xl shadow-slate-200/50 shadow-lg'}
                `}>
                  {/* Metric Top Part */}
                  <div className="flex items-center justify-between mb-8">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${isDark ? 'bg-white/5' : 'bg-slate-50'}`}>
                      {icons[i]}
                    </div>
                    <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[9px] font-black uppercase tracking-wider ${isPositive ? 'text-emerald-500 bg-emerald-500/5' : 'text-rose-500 bg-rose-500/5'}`}>
                      {isPositive ? <TrendingUp size={12}/> : <TrendingDown size={12}/>}
                      {isPositive ? 'Optimized' : 'Reduced'}
                    </div>
                  </div>

                  {/* The Big Number */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-1.5 mb-1">
                      <span className={`text-4xl font-black tracking-tighter leading-none ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        {item.prefix || ''}
                        <NumberTicker value={parseFloat(item.value) || 0} />
                        {item.value.includes('-') && !parseFloat(item.value) ? item.value : ''}
                      </span>
                      <span className="text-blue-600 font-black text-xs uppercase tracking-widest">{item.suffix}</span>
                    </div>
                    <h4 className={`text-[12px] font-black uppercase tracking-tight ${isDark ? 'text-slate-300' : 'text-slate-800'}`}>
                      {item.label}
                    </h4>
                  </div>

                  {/* Tiny Sparkline Visualization */}
                  <div className="h-12 w-full opacity-40 group-hover:opacity-100 transition-opacity duration-700">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={sparklineData}>
                        <Line 
                          type="monotone" 
                          dataKey="value" 
                          stroke={isPositive ? '#10b981' : '#f43f5e'} 
                          strokeWidth={2} 
                          dot={false} 
                          animationDuration={2000}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>

                  <p className={`text-[10px] font-medium leading-relaxed mt-4 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                    {item.desc}
                  </p>

                  {/* Corner Accent */}
                  <div className={`absolute bottom-3 right-3 w-1.5 h-1.5 rounded-full ${isDark ? 'bg-white/5' : 'bg-slate-100'}`}></div>
                </div>
              </Reveal>
            );
          })}
          
          {/* A special CTA or Note box to complete the grid if needed */}
          <Reveal delay={400} direction="up">
            <div className={`
              h-full p-6 rounded-3xl border border-dashed flex flex-col items-center justify-center text-center
              ${isDark ? 'border-white/10 bg-blue-600/5' : 'border-blue-200 bg-blue-50/30'}
            `}>
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white mb-4 shadow-lg shadow-blue-600/40">
                <Zap size={20} fill="currentColor"/>
              </div>
              <span className={`text-[10px] font-black uppercase tracking-[0.2em] mb-2 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>Ready to scale?</span>
              <p className={`text-[11px] font-medium leading-relaxed ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
                Эдгээр үзүүлэлтүүд нь манай харилцагчдын дундаж статистик юм.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
