
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
    <div className={`relative w-full h-[400px] flex flex-col p-0 rounded-[2.5rem] border overflow-hidden glass-card-pro ${isDark ? 'border-white/10' : 'border-slate-200'} shadow-2xl`}>
      <div className={`p-6 border-b relative z-20 backdrop-blur-md ${isDark ? 'bg-slate-900/60 border-white/5' : 'bg-white/60 border-slate-100'}`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white">
              <Send size={16} />
            </div>
            <div>
              <h4 className={`text-[10px] font-black uppercase tracking-widest ${isDark ? 'text-white' : 'text-slate-900'}`}>GATEWAY_V4</h4>
              <span className="text-[9px] font-bold text-emerald-500 uppercase">Active Stream</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 p-6 space-y-3 relative z-10 overflow-hidden">
        {stream.map((item, i) => (
          <div key={item.id} className={`flex items-center justify-between p-3 rounded-xl border transition-all duration-700 animate-content-entrance ${isDark ? 'border-white/5 bg-white/5' : 'border-slate-100 bg-slate-50'}`} style={{ opacity: 1 - (i * 0.2) }}>
            <div className="flex items-center gap-3">
              <div className={`w-7 h-7 rounded-full flex items-center justify-center text-emerald-500 ${isDark ? 'bg-emerald-500/10' : 'bg-emerald-50'}`}>
                <Check size={12} strokeWidth={3} />
              </div>
              <span className={`text-xs font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>{item.name}</span>
            </div>
            <span className="text-[9px] font-bold text-slate-500 uppercase">{item.time}</span>
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
    <section id="showcase" className={`section-fullscreen transition-colors ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <Reveal direction="right">
            <div>
              <div className={`inline-flex items-center gap-3 px-5 py-2 rounded-full border mb-8 ${isDark ? 'border-emerald-500/20 bg-emerald-500/5' : 'border-emerald-200 bg-emerald-50'}`}>
                <Users size={16} className="text-emerald-500"/>
                <span className={`text-[11px] font-black uppercase tracking-widest text-emerald-500`}>BORROWER 360°</span>
              </div>
              <h2 className={`text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tighter leading-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                {lang === 'mn' ? 'Харилцагч ба Барьцаа хөрөнгө' : 'Borrower & Assets 360°'}
              </h2>
              <p className={`text-base md:text-lg mb-10 font-medium leading-relaxed ${isDark ? 'text-slate-500' : 'text-slate-600'}`}>
                {lang === 'mn' 
                  ? 'Зээлдэгч, хамтран зээлдэгч болон барьцаа хөрөнгийн мэдээллийг нэг дор төвлөрүүлж хянах боломж.' 
                  : 'Centralize main borrower, co-borrower, and collateral details. Access everything in one interface.'}
              </p>
              
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                {[
                  { icon: <Car className="text-blue-500" size={18}/>, title: lang === 'mn' ? 'Автомашин' : 'Automotive' },
                  { icon: <Home className="text-emerald-500" size={18}/>, title: lang === 'mn' ? 'Үл хөдлөх' : 'Real Estate' },
                  { icon: <Link className="text-purple-500" size={18}/>, title: lang === 'mn' ? 'Хамаарал' : 'Family Link' },
                  { icon: <PhoneCall className="text-orange-500" size={18}/>, title: lang === 'mn' ? 'Харилцаа' : 'History' }
                ].map((item, i) => (
                  <div key={i} className={`p-4 md:p-6 rounded-2xl border ${isDark ? 'border-white/5 bg-white/5' : 'border-slate-100 bg-slate-50'}`}>
                    <div className="mb-3">{item.icon}</div>
                    <h4 className={`text-xs md:text-sm font-black uppercase tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>{item.title}</h4>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal direction="left" delay={200}>
            <div className={`relative rounded-[2.5rem] border glass-card-pro overflow-hidden shadow-2xl ${isDark ? 'border-white/10' : 'border-slate-200'}`}>
              <div className={`p-8 md:p-10 border-b backdrop-blur-md ${isDark ? 'bg-slate-900/60 border-white/5' : 'bg-white/60 border-slate-100'}`}>
                <div className="flex items-center gap-5 mb-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl flex items-center justify-center font-black text-xl text-white shadow-xl">B</div>
                  <div>
                    <h3 className={`text-xl md:text-2xl font-black tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>Bat-Erdene.G</h3>
                    <span className="text-[9px] font-black uppercase text-slate-500 tracking-widest">POL-802991-X</span>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3 md:gap-4">
                  {[ 
                    { l: 'Balance', v: '124M ₮', c: 'text-blue-500' }, 
                    { l: 'Overdue', v: '92 Days', c: 'text-red-500' }, 
                    { l: 'Category', v: 'Substandard', c: 'text-orange-500' } 
                  ].map((s, i) => (
                    <div key={i} className={`p-3 md:p-4 rounded-xl border ${isDark ? 'bg-white/5 border-white/5' : 'bg-slate-50 border-slate-100'}`}>
                       <div className="text-[8px] md:text-[9px] font-black text-slate-500 uppercase mb-1">{s.l}</div>
                       <div className={`text-xs md:text-sm font-black ${s.c}`}>{s.v}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-8 md:p-10">
                 <div className="flex justify-between items-center mb-6">
                    <h4 className="text-[9px] md:text-[10px] font-black uppercase text-slate-500">Activity Log</h4>
                 </div>
                 <div className="space-y-4 md:space-y-5">
                   {[
                     { icon: <PhoneCall size={12}/>, title: 'Call Successful', time: '14:20' },
                     { icon: <Home size={12}/>, title: 'Asset Inspection', time: 'Yesterday' },
                     { icon: <Link size={12}/>, title: 'Family Link Linked', time: '2d ago' }
                   ].map((log, i) => (
                     <div key={i} className="flex gap-4 items-center">
                        <div className={`w-7 h-7 rounded-full flex items-center justify-center border ${isDark ? 'bg-white/5 border-white/5' : 'bg-slate-100 border-slate-200'}`}>
                           {log.icon}
                        </div>
                        <div className="flex-1 flex justify-between">
                           <span className={`text-[11px] font-black ${isDark ? 'text-slate-300' : 'text-slate-800'}`}>{log.title}</span>
                           <span className="text-[9px] font-bold text-slate-500">{log.time}</span>
                        </div>
                     </div>
                   ))}
                 </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
