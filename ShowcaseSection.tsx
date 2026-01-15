
import React, { useState, useEffect } from 'react';
import { 
  Users, 
  Send,
  Check,
  MoreHorizontal,
  Car,
  Home,
  Link,
  PhoneCall,
  Activity,
  Cpu,
  Zap
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
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        color: 'emerald'
      };
      setStream(prev => [newItem, ...prev.slice(0, 4)]);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`relative w-full h-[450px] flex flex-col p-0 rounded-[2.5rem] border overflow-hidden glass-card-pro ${isDark ? 'border-white/10' : 'border-slate-200'} shadow-2xl`}>
      <div className={`p-8 border-b relative z-20 backdrop-blur-md ${isDark ? 'bg-slate-900/60 border-white/5' : 'bg-white/60 border-slate-100'}`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-5">
            <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white">
              <Send size={18} />
            </div>
            <div>
              <h4 className={`text-[11px] font-black uppercase tracking-widest ${isDark ? 'text-white' : 'text-slate-900'}`}>GATEWAY_V4</h4>
              <span className="text-[10px] font-bold text-emerald-500 uppercase">Active Stream</span>
            </div>
          </div>
          <div className={`px-4 py-1.5 rounded-lg border text-[10px] font-black flex items-center gap-2 ${isDark ? 'border-blue-500/20 bg-blue-500/10' : 'border-blue-100 bg-blue-50'}`}>
            <Activity size={12} className="text-blue-500" />
            LIVE
          </div>
        </div>
      </div>

      <div className="flex-1 p-8 space-y-4 relative z-10 overflow-hidden">
        {stream.map((item, i) => (
          <div key={item.id} className={`flex items-center justify-between p-4 rounded-xl border transition-all duration-700 animate-content-entrance ${isDark ? 'border-white/5 bg-white/5' : 'border-slate-100 bg-slate-50'}`} style={{ opacity: 1 - (i * 0.2) }}>
            <div className="flex items-center gap-4">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-emerald-500 ${isDark ? 'bg-emerald-500/10' : 'bg-emerald-50'}`}>
                <Check size={14} strokeWidth={3} />
              </div>
              <span className={`text-sm font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>{item.name}</span>
            </div>
            <span className="text-[10px] font-bold text-slate-500 uppercase">{item.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export const ShowcaseSection: React.FC<ShowcaseSectionProps> = ({ lang, theme }) => {
  const t = i18n[lang];
  const isDark = theme === 'dark';

  return (
    <section className={`py-32 overflow-hidden transition-colors ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Borrower 360 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-48">
          <Reveal direction="right">
            <div>
              <div className={`inline-flex items-center gap-3 px-5 py-2 rounded-full border mb-10 ${isDark ? 'border-emerald-500/20 bg-emerald-500/5' : 'border-emerald-200 bg-emerald-50'}`}>
                <Users size={16} className="text-emerald-500"/>
                <span className={`text-[11px] font-black uppercase tracking-widest text-emerald-500`}>BORROWER 360°</span>
              </div>
              <h2 className={`text-4xl md:text-6xl font-black mb-8 tracking-tighter leading-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                {lang === 'mn' ? 'Харилцагч ба Барьцаа хөрөнгө' : 'Borrower & Assets 360°'}
              </h2>
              <p className={`text-lg md:text-xl mb-12 font-medium leading-relaxed ${isDark ? 'text-slate-500' : 'text-slate-600'}`}>
                {lang === 'mn' 
                  ? 'Зээлдэгч, хамтран зээлдэгч болон барьцаа хөрөнгийн мэдээллийг нэг дор төвлөрүүлж хянах боломж.' 
                  : 'Centralize main borrower, co-borrower, and collateral details. Access everything in one interface.'}
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: <Car className="text-blue-500" size={20}/>, title: lang === 'mn' ? 'Автомашин' : 'Automotive' },
                  { icon: <Home className="text-emerald-500" size={20}/>, title: lang === 'mn' ? 'Үл хөдлөх' : 'Real Estate' },
                  { icon: <Link className="text-purple-500" size={20}/>, title: lang === 'mn' ? 'Хамаарал' : 'Family Link' },
                  { icon: <PhoneCall className="text-orange-500" size={20}/>, title: lang === 'mn' ? 'Харилцаа' : 'History' }
                ].map((item, i) => (
                  <div key={i} className={`p-6 rounded-2xl border ${isDark ? 'border-white/5 bg-white/5' : 'border-slate-100 bg-slate-50'}`}>
                    <div className="mb-4">{item.icon}</div>
                    <h4 className={`text-sm font-black uppercase tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>{item.title}</h4>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal direction="left" delay={200}>
            <div className={`relative rounded-[3rem] border glass-card-pro overflow-hidden shadow-2xl ${isDark ? 'border-white/10' : 'border-slate-200'}`}>
              <div className={`p-10 border-b backdrop-blur-md ${isDark ? 'bg-slate-900/60 border-white/5' : 'bg-white/60 border-slate-100'}`}>
                <div className="flex items-center gap-6 mb-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl flex items-center justify-center font-black text-2xl text-white shadow-xl">B</div>
                  <div>
                    <h3 className={`text-2xl font-black tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>Bat-Erdene.G</h3>
                    <span className="text-[10px] font-black uppercase text-slate-500 tracking-widest">POL-802991-X</span>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {[ 
                    { l: 'Balance', v: '124M ₮', c: 'text-blue-500' }, 
                    { l: 'Overdue', v: '92 Days', c: 'text-red-500' }, 
                    { l: 'Category', v: 'Substandard', c: 'text-orange-500' } 
                  ].map((s, i) => (
                    <div key={i} className={`p-4 rounded-xl border ${isDark ? 'bg-white/5 border-white/5' : 'bg-slate-50 border-slate-100'}`}>
                       <div className="text-[9px] font-black text-slate-500 uppercase mb-2">{s.l}</div>
                       <div className={`text-sm font-black ${s.c}`}>{s.v}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-10">
                 <div className="flex justify-between items-center mb-8">
                    <h4 className="text-[10px] font-black uppercase text-slate-500">Activity Log</h4>
                    <MoreHorizontal size={16} className="text-slate-500" />
                 </div>
                 <div className="space-y-6">
                   {[
                     { icon: <PhoneCall size={14}/>, title: 'Call Successful', time: '14:20' },
                     { icon: <Home size={14}/>, title: 'Asset Inspection', time: 'Yesterday' },
                     { icon: <Link size={14}/>, title: 'Family Link Linked', time: '2d ago' }
                   ].map((log, i) => (
                     <div key={i} className="flex gap-5 items-center">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center border ${isDark ? 'bg-white/5 border-white/5' : 'bg-slate-100 border-slate-200'}`}>
                           {log.icon}
                        </div>
                        <div className="flex-1 flex justify-between">
                           <span className={`text-xs font-black ${isDark ? 'text-slate-300' : 'text-slate-800'}`}>{log.title}</span>
                           <span className="text-[10px] font-bold text-slate-500">{log.time}</span>
                        </div>
                     </div>
                   ))}
                 </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* SMS Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
           <Reveal direction="right" className="order-2 lg:order-1">
              <SMSAutomationAnimation isDark={isDark} />
           </Reveal>

           <Reveal direction="left" className="order-1 lg:order-2">
             <div>
               <div className={`inline-flex items-center gap-3 px-5 py-2 rounded-full border mb-10 ${isDark ? 'border-blue-500/20 bg-blue-500/5' : 'border-blue-200 bg-blue-50'}`}>
                 <Zap size={16} className="text-blue-500"/>
                 <span className={`text-[11px] font-black uppercase tracking-widest text-blue-500`}>AUTOMATION ENGINE</span>
               </div>
               <h2 className={`text-4xl md:text-6xl font-black mb-8 tracking-tighter leading-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                 {t.showcase.sms.title}
               </h2>
               <p className={`text-lg md:text-xl mb-12 font-medium leading-relaxed ${isDark ? 'text-slate-500' : 'text-slate-600'}`}>
                 {t.showcase.sms.benefit}
               </p>
               <div className="space-y-6">
                 {[
                   { label: 'Delivery Rate', value: '99.9%', width: '99.9%' },
                   { label: 'Latency', value: '14ms', width: '94%' },
                   { label: 'System Uptime', value: '100%', width: '100%' }
                 ].map((bar, i) => (
                   <div key={i}>
                      <div className="flex justify-between items-center mb-2.5">
                        <span className="text-[10px] font-black uppercase text-slate-500">{bar.label}</span>
                        <span className="text-xs font-black text-blue-500">{bar.value}</span>
                      </div>
                      <div className={`h-2 w-full rounded-full overflow-hidden ${isDark ? 'bg-white/5' : 'bg-slate-100'}`}>
                        <div className="h-full bg-blue-600 shadow-xl transition-all duration-1000" style={{ width: bar.width }}></div>
                      </div>
                   </div>
                 ))}
               </div>
             </div>
           </Reveal>
        </div>

      </div>
    </section>
  );
};
