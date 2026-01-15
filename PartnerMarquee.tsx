
import React from 'react';
import { 
  Landmark, 
  CircleDollarSign, 
  Cpu, 
  Zap, 
  Activity, 
  Globe, 
  Building2, 
  ShieldCheck 
} from 'lucide-react';
import { i18n, Language } from './i18n';

interface PartnerMarqueeProps {
  lang: Language;
  theme: 'light' | 'dark';
}

export const PartnerMarquee: React.FC<PartnerMarqueeProps> = ({ lang, theme }) => {
  const isDark = theme === 'dark';
  const t = i18n[lang];

  const partners = [
    { icon: <Landmark size={24}/>, name: "GOLOMT_BANK" },
    { icon: <CircleDollarSign size={24}/>, name: "KHAN_BANK" },
    { icon: <Cpu size={24}/>, name: "UNITEL_GRP" },
    { icon: <Zap size={24}/>, name: "MOBICOM_CORP" },
    { icon: <ShieldCheck size={24}/>, name: "TDB_MONGOLIA" },
    { icon: <Activity size={24}/>, name: "ARD_FINANCIAL" },
    { icon: <Globe size={24}/>, name: "CAPITAL_CORP" },
    { icon: <Building2 size={24}/>, name: "INVESCO_LLC" },
  ];

  // Double the array for seamless infinite scroll
  const marqueeItems = [...partners, ...partners];

  return (
    <div className={`py-20 overflow-hidden relative border-y ${isDark ? 'bg-slate-950/50 border-white/5' : 'bg-slate-50/50 border-slate-100'}`}>
      <div className="max-w-7xl mx-auto px-6 mb-12 flex items-center justify-between">
         <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
         <span className={`px-8 text-[10px] font-black uppercase tracking-[0.4em] ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
           {lang === 'mn' ? 'ИТГЭЛТЭЙ ХАРИЛЦАГЧИД' : 'TRUSTED BY LEADERS'}
         </span>
         <div className="h-px flex-1 bg-gradient-to-l from-transparent via-blue-500/20 to-transparent"></div>
      </div>

      <div className="relative flex overflow-hidden">
        <div className="animate-marquee flex gap-12 md:gap-24 whitespace-nowrap items-center">
          {marqueeItems.map((partner, i) => (
            <div 
              key={i} 
              className="flex items-center gap-4 group cursor-pointer transition-all duration-500"
            >
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 
                ${isDark ? 'bg-white/5 text-slate-500 group-hover:bg-blue-600/20 group-hover:text-blue-400 group-hover:shadow-[0_0_20px_rgba(37,99,235,0.2)]' 
                         : 'bg-white text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-600 shadow-sm border border-slate-100'}`}>
                {partner.icon}
              </div>
              <span className={`text-sm md:text-lg font-black tracking-tighter uppercase transition-colors 
                ${isDark ? 'text-slate-600 group-hover:text-white' : 'text-slate-300 group-hover:text-slate-900'}`}>
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Side gradients to fade out the marquee edges */}
      <div className={`absolute top-0 bottom-0 left-0 w-32 md:w-64 z-10 pointer-events-none bg-gradient-to-r ${isDark ? 'from-slate-950 to-transparent' : 'from-[#f8fafc] to-transparent'}`}></div>
      <div className={`absolute top-0 bottom-0 right-0 w-32 md:w-64 z-10 pointer-events-none bg-gradient-to-l ${isDark ? 'from-slate-950 to-transparent' : 'from-[#f8fafc] to-transparent'}`}></div>
    </div>
  );
};
