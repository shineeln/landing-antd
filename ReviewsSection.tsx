
import React from 'react';
import { Typography, Rate, Avatar } from 'antd';
import { UserOutlined, CheckCircleFilled } from '@ant-design/icons';
import { 
  Quote, 
  Shield, 
  CircleDollarSign, 
  Cpu, 
  Zap, 
  Activity, 
  Globe, 
  Building2, 
  Landmark 
} from 'lucide-react';
import { i18n, Language } from './i18n';
import { Reveal } from './CommonUI';

const { Text } = Typography;

interface ReviewsSectionProps {
  lang: Language;
  theme: 'light' | 'dark';
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ lang, theme }) => {
  const t = i18n[lang];
  const isDark = theme === 'dark';

  const partners = [
    { icon: <Landmark size={20}/>, name: "NATIONAL_BANK", color: "text-blue-500", bg: "bg-blue-500/10" },
    { icon: <CircleDollarSign size={20}/>, name: "CREDIT_UNION", color: "text-emerald-500", bg: "bg-emerald-500/10" },
    { icon: <Cpu size={20}/>, name: "TECH_FINANCE", color: "text-purple-500", bg: "bg-purple-500/10" },
    { icon: <Shield size={20}/>, name: "SECURE_LENDING", color: "text-red-500", bg: "bg-red-500/10" },
    { icon: <Activity size={20}/>, name: "PULSE_ASSETS", color: "text-cyan-500", bg: "bg-cyan-500/10" },
    { icon: <Zap size={20}/>, name: "FLASH_CAPITAL", color: "text-yellow-500", bg: "bg-yellow-500/10" },
    { icon: <Globe size={20}/>, name: "GLOBAL_TRUST", color: "text-indigo-500", bg: "bg-indigo-500/10" },
    { icon: <Building2 size={20}/>, name: "CORP_PARTNERS", color: "text-orange-500", bg: "bg-orange-500/10" },
  ];

  return (
    <section id="customers" className={`py-40 transition-colors duration-500 overflow-hidden ${isDark ? 'bg-slate-950' : 'bg-slate-50'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-32">
             <div className={`inline-flex items-center gap-3 px-6 py-2 rounded-full border mb-10 ${isDark ? 'border-emerald-500/20 bg-emerald-500/5' : 'border-emerald-200 bg-emerald-50'}`}>
                <Text className={`text-[10px] font-black tracking-[0.1em] uppercase ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`}>{t.reviews.tag}</Text>
             </div>
            <h2 className={`text-4xl md:text-7xl font-black mb-10 tracking-tighter ${isDark ? 'text-white' : 'text-slate-900'}`}>
              {t.reviews.title}
            </h2>
            <p className={`text-xl max-w-3xl mx-auto font-medium ${isDark ? 'text-slate-500' : 'text-slate-600'}`}>
              {t.reviews.subtitle}
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-40">
          {t.reviews.items.map((review, i) => (
            <Reveal key={i} delay={i * 200} direction="up">
              <div className={`glass-card-pro p-10 rounded-[3.5rem] h-full flex flex-col justify-between transition-all hover:scale-[1.02] border duration-500 ${isDark ? 'hover:border-blue-500/30' : 'hover:border-blue-300 shadow-xl'}`}>
                <div>
                  <div className="flex justify-between items-start mb-10">
                    <Quote size={48} className="text-blue-600 opacity-20" />
                    <Rate disabled defaultValue={review.rating} className="text-xs opacity-50" />
                  </div>
                  
                  <p className={`text-lg md:text-xl italic font-medium leading-relaxed mb-12 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    "{review.text}"
                  </p>
                </div>

                <div className={`flex items-center gap-5 pt-10 border-t ${isDark ? 'border-white/5' : 'border-slate-100'}`}>
                  <div className="relative">
                    <Avatar 
                      size={64} 
                      icon={<UserOutlined />} 
                      className="bg-blue-600 shadow-2xl shadow-blue-600/30 border-none"
                    />
                    <div className="absolute -bottom-1 -right-1 bg-blue-500 rounded-full w-5 h-5 flex items-center justify-center border-2 border-slate-900">
                      <CheckCircleFilled className="text-white" style={{ fontSize: 10 }} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className={`text-sm font-black tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>{review.name}</span>
                    </div>
                    <div className="text-[10px] font-black uppercase text-slate-500 tracking-[0.1em] mt-1.5">
                      {review.position} • {review.org}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* High-Fidelity Infinite Brand Marquee */}
        <Reveal delay={600}>
          <div className="relative w-full overflow-hidden py-10">
            {/* Faded edges */}
            <div className={`absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none bg-gradient-to-r ${isDark ? 'from-slate-950 to-transparent' : 'from-slate-50 to-transparent'}`}></div>
            <div className={`absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none bg-gradient-to-l ${isDark ? 'from-slate-950 to-transparent' : 'from-slate-50 to-transparent'}`}></div>
            
            <div className="flex animate-marquee hover:[animation-play-state:paused]">
              {/* First Set */}
              <div className="flex items-center gap-16 md:gap-24 px-12">
                {partners.map((p, i) => (
                  <div key={i} className="flex items-center gap-5 group shrink-0 transition-transform hover:scale-105">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border transition-all ${isDark ? 'bg-white/5 border-white/5 group-hover:bg-white/10' : 'bg-white border-slate-200 group-hover:border-blue-400 shadow-sm'} ${p.bg} ${p.color}`}>
                      {p.icon}
                    </div>
                    <span className={`text-[10px] font-black tracking-[0.1em] uppercase transition-colors ${isDark ? 'text-slate-500 group-hover:text-white' : 'text-slate-400 group-hover:text-slate-900'}`}>
                      {p.name}
                    </span>
                  </div>
                ))}
              </div>
              {/* Duplicated Set for Infinite Loop */}
              <div className="flex items-center gap-16 md:gap-24 px-12">
                {partners.map((p, i) => (
                  <div key={`dup-${i}`} className="flex items-center gap-5 group shrink-0 transition-transform hover:scale-105">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border transition-all ${isDark ? 'bg-white/5 border-white/5 group-hover:bg-white/10' : 'bg-white border-slate-200 group-hover:border-blue-400 shadow-sm'} ${p.bg} ${p.color}`}>
                      {p.icon}
                    </div>
                    <span className={`text-[10px] font-black tracking-[0.1em] uppercase transition-colors ${isDark ? 'text-slate-500 group-hover:text-white' : 'text-slate-400 group-hover:text-slate-900'}`}>
                      {p.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
