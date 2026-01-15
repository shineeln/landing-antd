
import React, { useState, useEffect } from 'react';
import { 
  Users, 
  Workflow, 
  ShieldCheck, 
  ChevronRight, 
  PieChart, 
  UserCheck, 
  History, 
  Target,
  Layers,
  Zap,
  Network,
  MessageSquare,
  Smartphone,
  CheckCircle2,
  Send,
  Bell,
  Check,
  MoreHorizontal,
  Car,
  Home,
  Link,
  PhoneCall,
  Activity,
  Cpu
} from 'lucide-react';
import { i18n, Language } from './i18n';
import { Reveal } from './CommonUI';

interface ShowcaseSectionProps {
  lang: Language;
  theme: 'light' | 'dark';
}

const SMSAutomationAnimation: React.FC<{ isDark: boolean }> = ({ isDark }) => {
  const [stream, setStream] = useState<any[]>([]);
  
  useEffect(() => {
    const names = ['Damdin.B', 'Suren.D', 'Bolor.E', 'Anar.M', 'Tsetseg.B', 'Gantuya.P', 'Batzorig.S'];
    const interval = setInterval(() => {
      const newItem = {
        id: Date.now(),
        name: names[Math.floor(Math.random() * names.length)],
        status: 'Delivered',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
        color: 'emerald'
      };
      setStream(prev => [newItem, ...prev.slice(0, 4)]);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`relative w-full h-[450px] flex flex-col p-0 rounded-[3rem] border overflow-hidden ${isDark ? 'bg-slate-900/40 border-slate-800' : 'bg-white border-slate-100 shadow-2xl shadow-blue-900/5'}`}>
      <div className="absolute inset-0 grid-bg opacity-10"></div>
      
      {/* Header */}
      <div className={`p-6 border-b relative z-20 ${isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-100'} backdrop-blur-md`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-600/30">
              <Send size={18} />
            </div>
            <div>
              <h4 className={`text-xs font-black uppercase tracking-widest ${isDark ? 'text-white' : 'text-slate-900'}`}>High-Speed SMS Gateway</h4>
              <div className="flex items-center gap-2 mt-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-[10px] font-bold text-slate-500 uppercase">9,420 msgs / min</span>
              </div>
            </div>
          </div>
          <div className={`px-4 py-2 rounded-xl border flex items-center gap-2 ${isDark ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
            <Activity size={14} className="text-blue-500" />
            <span className="text-[10px] font-black text-blue-500">REALTIME</span>
          </div>
        </div>
      </div>

      {/* Message Stream */}
      <div className="flex-1 p-6 space-y-4 relative z-10 overflow-hidden">
        {stream.map((item, i) => (
          <div 
            key={item.id} 
            className={`flex items-center justify-between p-4 rounded-2xl border transition-all duration-500 transform animate-content-entrance
              ${isDark ? 'bg-slate-950/40 border-slate-800' : 'bg-white border-slate-100 shadow-sm'}`}
            style={{ opacity: 1 - (i * 0.15), scale: 1 - (i * 0.02) }}
          >
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 border border-emerald-500/20">
                <Check size={14} strokeWidth={3} />
              </div>
              <div>
                <div className={`text-xs font-black ${isDark ? 'text-slate-200' : 'text-slate-900'}`}>{item.name}</div>
                <div className="text-[9px] font-bold text-slate-500 uppercase tracking-tight">Delivery Confirmed • {item.time}</div>
              </div>
            </div>
            <div className="text-[9px] font-black text-blue-500 uppercase tracking-widest px-2 py-1 bg-blue-500/10 rounded-lg border border-blue-500/20">MT-P2P</div>
          </div>
        ))}
        {stream.length === 0 && (
          <div className="h-full flex items-center justify-center">
            <div className="text-center">
              <Cpu size={40} className="mx-auto text-slate-400 animate-spin-slow mb-4" />
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Warming up engines...</p>
            </div>
          </div>
        )}
      </div>

      {/* Footer Metrics */}
      <div className={`p-6 border-t relative z-20 ${isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-100'} backdrop-blur-md`}>
         <div className="grid grid-cols-3 gap-4">
            {[ { l: 'Queue', v: '0' }, { l: 'Dropped', v: '0.01%' }, { l: 'Latency', v: '142ms' } ].map((m, i) => (
              <div key={i} className="text-center">
                <div className="text-[8px] font-black text-slate-500 uppercase tracking-tighter mb-1">{m.l}</div>
                <div className={`text-xs font-black ${isDark ? 'text-slate-300' : 'text-slate-800'}`}>{m.v}</div>
              </div>
            ))}
         </div>
      </div>
    </div>
  );
};

export const ShowcaseSection: React.FC<ShowcaseSectionProps> = ({ lang, theme }) => {
  const t = i18n[lang];
  const isDark = theme === 'dark';

  const colorMap: Record<string, string> = {
    blue: 'bg-blue-500',
    emerald: 'bg-emerald-500',
    purple: 'bg-purple-500',
    orange: 'bg-orange-500',
    'blue-text': 'text-blue-500',
    'emerald-text': 'text-emerald-500',
    'purple-text': 'text-purple-500',
    'orange-text': 'text-orange-500',
    'blue-bg-soft': 'bg-blue-500/10 dark:bg-blue-500/20',
    'emerald-bg-soft': 'bg-emerald-500/10 dark:bg-emerald-500/20',
    'purple-bg-soft': 'bg-purple-500/10 dark:bg-purple-500/20',
    'orange-bg-soft': 'bg-orange-500/10 dark:bg-orange-500/20',
  };

  return (
    <section className={`py-32 overflow-hidden transition-colors ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Borrower 360 Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-48">
          <Reveal direction="right">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 mb-8">
                <Users size={16} className="text-emerald-500"/>
                <span className="text-xs font-black tracking-widest uppercase text-emerald-500">INTELLIGENT BORROWER PROFILE</span>
              </div>
              <h2 className={`text-4xl md:text-5xl font-black mb-8 tracking-tight leading-[1.1] ${isDark ? 'text-white' : 'text-slate-900'}`}>
                {lang === 'mn' ? 'Харилцагч ба Барьцаа хөрөнгө' : 'Borrower & Collateral 360°'}
              </h2>
              <p className={`text-lg mb-12 font-medium leading-relaxed ${isDark ? 'text-slate-500' : 'text-slate-600'}`}>
                {lang === 'mn' 
                  ? 'Зээлдэгч, хамтран зээлдэгч болон барьцаа хөрөнгийн мэдээллийг нэг дор төвлөрүүлж, CallPro-оор холбогдох боломж.' 
                  : 'Centralize main borrower, co-borrower, and collateral details. Access family links and work info instantly via one interface.'}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: <Car className="text-blue-500"/>, title: lang === 'mn' ? 'Автомашин' : 'Automotive', desc: 'Real-time asset tracking' },
                  { icon: <Home className="text-emerald-500"/>, title: lang === 'mn' ? 'Үл хөдлөх' : 'Real Estate', desc: 'Mortgage & Valuation logs' },
                  { icon: <Link className="text-purple-500"/>, title: lang === 'mn' ? 'Хамаарал' : 'Family Linkage', desc: 'Co-borrower associations' },
                  { icon: <PhoneCall className="text-orange-500"/>, title: lang === 'mn' ? 'CallPro' : 'Interaction', desc: 'One-click outbound call' }
                ].map((item, i) => (
                  <div key={i} className={`p-6 rounded-2xl border transition-all hover:scale-105 duration-300 ${isDark ? 'bg-slate-900/40 border-slate-800' : 'bg-white border-slate-100 shadow-sm'}`}>
                    <div className="mb-4">{item.icon}</div>
                    <h4 className={`text-sm font-black uppercase tracking-tight mb-1 ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>{item.title}</h4>
                    <p className="text-[11px] text-slate-500 font-medium">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal direction="left" delay={200}>
            <div className={`relative p-0 rounded-[3.5rem] border overflow-hidden ${isDark ? 'bg-slate-900/30 border-slate-800' : 'bg-white border-slate-200 shadow-2xl shadow-blue-900/5'}`}>
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-[100px] -z-10"></div>
              
              {/* Profile Card UI */}
              <div className={`p-8 border-b ${isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-50 border-slate-100'}`}>
                <div className="flex items-center gap-6 mb-8">
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl flex items-center justify-center text-4xl font-black text-white shadow-xl">B</div>
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-emerald-500 rounded-full border-4 border-white dark:border-slate-900 flex items-center justify-center">
                      <Check size={10} className="text-white" strokeWidth={4} />
                    </div>
                  </div>
                  <div>
                    <h3 className={`text-2xl font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>Bat-Erdene.G</h3>
                    <div className="flex items-center gap-3 mt-1.5">
                      <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest px-2 py-0.5 bg-slate-200 dark:bg-slate-500/20 rounded">ID: 802991</span>
                      <span className="text-[10px] font-black text-blue-500 uppercase tracking-widest px-2 py-0.5 bg-blue-50 dark:bg-blue-500/20 rounded">PREMIUM</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  {[ 
                    { l: 'Balance', v: '124M ₮', c: 'text-blue-500' }, 
                    { l: 'Days Past', v: '92d', c: 'text-red-500' }, 
                    { l: 'Category', v: 'Substandard', c: 'text-orange-500 font-bold' } 
                  ].map((s, i) => (
                    <div key={i} className="text-center">
                       <div className="text-[8px] font-black text-slate-500 uppercase mb-1">{s.l}</div>
                       <div className={`text-xs font-black ${s.c}`}>{s.v}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Log UI */}
              <div className="p-8">
                 <div className="flex items-center justify-between mb-6">
                    <h4 className={`text-[10px] font-black uppercase tracking-widest ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>ACTION TIMELINE</h4>
                    <MoreHorizontal size={14} className="text-slate-400" />
                 </div>
                 <div className="space-y-6">
                   {[
                     { icon: <PhoneCall size={14}/>, color: 'blue', title: 'Outbound Call Successful', meta: 'Duration: 04:22s • Recording Attached', time: '14:20' },
                     { icon: <Home size={14}/>, color: 'emerald', title: 'Asset Inspection Logged', meta: 'Vehicle: Toyota Prius 30 (8022 UBA)', time: 'Yesterday' },
                     { icon: <Link size={14}/>, color: 'purple', title: 'Family Link Linked', meta: 'Assigned: Bolormaa.E (Wife)', time: '2d ago' }
                   ].map((log, i) => (
                     <div key={i} className="flex gap-6 relative">
                        {i < 2 && <div className={`absolute left-[7px] top-6 bottom-[-24px] w-px ${isDark ? 'bg-slate-800' : 'bg-slate-200'}`}></div>}
                        <div className={`w-4 h-4 rounded-full ${colorMap[log.color + '-bg-soft']} ${colorMap[log.color + '-text']} flex items-center justify-center relative z-10 border border-slate-200 dark:border-transparent shadow-sm`}>
                           {log.icon}
                        </div>
                        <div className="flex-1">
                           <div className="flex justify-between items-center mb-1">
                              <h5 className={`text-xs font-black ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>{log.title}</h5>
                              <span className="text-[9px] font-bold text-slate-500">{log.time}</span>
                           </div>
                           <p className="text-[10px] text-slate-500 font-medium">{log.meta}</p>
                        </div>
                     </div>
                   ))}
                 </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* SMS Automation Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-48">
           <Reveal direction="right" className="order-2 lg:order-1">
              <SMSAutomationAnimation isDark={isDark} />
           </Reveal>

           <Reveal direction="left" className="order-1 lg:order-2">
             <div>
               <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/10 mb-8">
                 <Zap size={16} className="text-blue-500"/>
                 <span className="text-xs font-black tracking-widest uppercase text-blue-500">ENGINE CAPACITY</span>
               </div>
               <h2 className={`text-4xl md:text-5xl font-black mb-8 tracking-tight leading-[1.1] ${isDark ? 'text-white' : 'text-slate-900'}`}>
                 {t.showcase.sms.title}
               </h2>
               <p className={`text-lg mb-12 font-medium leading-relaxed ${isDark ? 'text-slate-500' : 'text-slate-600'}`}>
                 {t.showcase.sms.benefit}
               </p>
               <div className="space-y-6">
                 {[
                   { label: 'Mass SMS Campaign Success', value: '99.9%', width: '99%' },
                   { label: 'Carrier Response Latency', value: '< 200ms', width: '92%' },
                   { label: 'Auto-Trigger Efficiency', value: '100%', width: '100%' }
                 ].map((bar, i) => (
                   <div key={i}>
                      <div className="flex justify-between items-center mb-2">
                        <span className={`text-[11px] font-black uppercase tracking-tight ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{bar.label}</span>
                        <span className={`text-xs font-black ${isDark ? 'text-white' : 'text-blue-600'}`}>{bar.value}</span>
                      </div>
                      <div className={`h-2 w-full rounded-full overflow-hidden ${isDark ? 'bg-slate-900' : 'bg-slate-100'}`}>
                        <div className="h-full bg-blue-600 rounded-full" style={{ width: bar.width }}></div>
                      </div>
                   </div>
                 ))}
               </div>
             </div>
           </Reveal>
        </div>

        {/* Smart Allocation Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <Reveal direction="right" delay={200} className="order-2 lg:order-1">
            <div className={`relative p-8 rounded-[3.5rem] border overflow-hidden ${isDark ? 'bg-slate-900/40 border-slate-800' : 'bg-white border-slate-200 shadow-2xl shadow-blue-900/5'}`}>
              <div className="absolute inset-0 grid-bg opacity-20"></div>
              <div className="absolute -top-32 -left-32 w-64 h-64 bg-blue-600/10 rounded-full blur-[100px]"></div>

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-10">
                   <div>
                      <h4 className={`text-xs font-black uppercase tracking-widest ${isDark ? 'text-white' : 'text-slate-900'}`}>PORTFOLIO LOAD BALANCER</h4>
                      <p className="text-[10px] text-slate-500 font-bold mt-1 uppercase">Automated Agent Routing</p>
                   </div>
                   <div className="w-10 h-10 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-500 border border-blue-500/20 shadow-sm">
                      <Cpu size={20} className="animate-spin-slow" />
                   </div>
                </div>

                <div className="space-y-8">
                  {[
                    { agent: 'Collection Team A', total: '1,420 Loans', load: 82, color: 'emerald' },
                    { agent: 'Collection Team B', total: '1,380 Loans', load: 78, color: 'blue' },
                    { agent: 'Legal & Court Team', total: '420 Cases', load: 45, color: 'purple' },
                    { agent: 'Bailiff / Execution', total: '180 Cases', load: 24, color: 'orange' }
                  ].map((item, i) => (
                    <div key={i}>
                       <div className="flex justify-between items-center mb-3">
                          <div className="flex items-center gap-3">
                            <div className={`w-2 h-2 rounded-full ${colorMap[item.color]} shadow-sm`}></div>
                            <span className={`text-xs font-black ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>{item.agent}</span>
                          </div>
                          <span className="text-[10px] font-black text-slate-500">{item.total}</span>
                       </div>
                       <div className="flex items-center gap-4">
                          <div className={`flex-1 h-3 rounded-xl overflow-hidden ${isDark ? 'bg-slate-950' : 'bg-slate-100'}`}>
                             <div className={`h-full ${colorMap[item.color]} rounded-xl transition-all duration-1000`} style={{ width: `${item.load}%` }}></div>
                          </div>
                          <span className={`text-[10px] font-black ${colorMap[item.color + '-text']}`}>{item.load}%</span>
                       </div>
                    </div>
                  ))}
                </div>

                <div className={`mt-10 p-5 rounded-2xl border flex items-center justify-between ${isDark ? 'bg-slate-950/50 border-slate-800' : 'bg-slate-50 border-slate-100'}`}>
                   <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500 border border-emerald-500/20">
                        <CheckCircle2 size={16} />
                      </div>
                      <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Optimized Load Balance</span>
                   </div>
                   <button className="text-[10px] font-black text-blue-500 uppercase tracking-widest hover:underline">Re-balance Now</button>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal direction="left" className="order-1 lg:order-2">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/10 mb-8">
                <Network size={16} className="text-blue-500"/>
                <span className="text-xs font-black tracking-widest uppercase text-blue-500">{t.showcase.allocation.impact}</span>
              </div>
              <h2 className={`text-4xl md:text-5xl font-black mb-8 tracking-tight leading-[1.1] ${isDark ? 'text-white' : 'text-slate-900'}`}>
                {t.showcase.allocation.title}
              </h2>
              <p className={`text-lg mb-12 font-medium leading-relaxed ${isDark ? 'text-slate-500' : 'text-slate-600'}`}>
                {t.showcase.allocation.benefit}
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className={`p-8 rounded-[2rem] border ${isDark ? 'bg-slate-900/50 border-slate-800' : 'bg-white border-slate-100 shadow-sm'}`}>
                  <div className="text-3xl font-black text-blue-500 mb-2">35%</div>
                  <div className="text-[11px] font-black text-slate-500 uppercase tracking-widest">Efficiency Boost</div>
                </div>
                <div className={`p-8 rounded-[2rem] border ${isDark ? 'bg-slate-900/50 border-slate-800' : 'bg-white border-slate-100 shadow-sm'}`}>
                  <div className="text-3xl font-black text-emerald-500 mb-2">0.5s</div>
                  <div className="text-[11px] font-black text-slate-500 uppercase tracking-widest">Allocation Latency</div>
                </div>
              </div>

              <div className="mt-10 flex items-center gap-6">
                 <div className="flex -space-x-3">
                   {[1, 2, 3, 4].map(i => (
                     <div key={i} className={`w-10 h-10 rounded-full border-2 border-white dark:border-slate-950 bg-slate-800 flex items-center justify-center text-[10px] font-black text-white shadow-sm`}>A{i}</div>
                   ))}
                 </div>
                 <p className="text-xs font-medium text-slate-500">Trusted by over <span className="text-blue-500 font-black">200+</span> recovery agents daily.</p>
              </div>
            </div>
          </Reveal>
        </div>

      </div>
    </section>
  );
};
