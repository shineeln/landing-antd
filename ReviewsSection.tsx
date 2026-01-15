
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
    { icon: <Landmark size={18}/>, name: "NATIONAL_BANK", color: "text-blue-500", bg: "bg-blue-500/10" },
    { icon: <CircleDollarSign size={18}/>, name: "CREDIT_UNION", color: "text-emerald-500", bg: "bg-emerald-500/10" },
    { icon: <Cpu size={18}/>, name: "TECH_FINANCE", color: "text-purple-500", bg: "bg-purple-500/10" },
    { icon: <Shield size={18}/>, name: "SECURE_LENDING", color: "text-red-500", bg: "bg-red-500/10" },
    { icon: <Activity size={18}/>, name: "PULSE_ASSETS", color: "text-cyan-500", bg: "bg-cyan-500/10" },
    { icon: <Zap size={18}/>, name: "FLASH_CAPITAL", color: "text-yellow-500", bg: "bg-yellow-500/10" },
    { icon: <Globe size={18}/>, name: "GLOBAL_TRUST", color: "text-indigo-500", bg: "bg-indigo-500/10" },
    { icon: <Building2 size={18}/>, name: "CORP_PARTNERS", color: "text-orange-500", bg: "bg-orange-500/10" },
  ];

  return (
    <section id="customers" className={`section-fullscreen transition-colors duration-500 overflow-hidden ${isDark ? 'bg-slate-950' : 'bg-slate-50'}`}>
      <div className="max-w-7xl mx-auto px-6 w-full">
        <Reveal>
          <div className="text-center mb-16 md:mb-20">
             <div className={`inline-flex items-center gap-3 px-6 py-2 rounded-full border mb-8 ${isDark ? 'border-emerald-500/20 bg-emerald-500/5' : 'border-emerald-200 bg-emerald-50'}`}>
                <Text className={`text-[10px] font-black tracking-[0.1em] uppercase ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`}>{t.reviews.tag}</Text>
             </div>
            <h2 className={`text-4xl md:text-5xl lg:text-6xl font-black mb-8 tracking-tighter ${isDark ? 'text-white' : 'text-slate-900'}`}>
              {t.reviews.title}
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mb-20">
          {t.reviews.items.map((review, i) => (
            <Reveal key={i} delay={i * 200} direction="up">
              <div className={`glass-card-pro p-8 md:p-10 rounded-[3rem] h-full flex flex-col justify-between transition-all hover:scale-[1.02] border duration-500 ${isDark ? 'hover:border-blue-500/30' : 'hover:border-blue-300 shadow-xl'}`}>
                <div>
                  <div className="flex justify-between items-start mb-8">
                    <Quote size={40} className="text-blue-600 opacity-20" />
                    <Rate disabled defaultValue={review.rating} className="text-[10px] opacity-50" />
                  </div>
                  
                  <p className={`text-base md:text-lg italic font-medium leading-relaxed mb-10 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    "{review.text}"
                  </p>
                </div>

                <div className={`flex items-center gap-4 pt-8 border-t ${isDark ? 'border-white/5' : 'border-slate-100'}`}>
                  <div className="relative">
                    <Avatar 
                      size={52} 
                      icon={<UserOutlined />} 
                      className="bg-blue-600 shadow-2xl shadow-blue-600/30 border-none"
                    />
                    <div className="absolute -bottom-1 -right-1 bg-blue-500 rounded-full w-4 h-4 flex items-center justify-center border-2 border-slate-900">
                      <CheckCircleFilled className="text-white" style={{ fontSize: 8 }} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <span className={`text-xs md:text-sm font-black tracking-tight block ${isDark ? 'text-white' : 'text-slate-900'}`}>{review.name}</span>
                    <div className="text-[9px] font-black uppercase text-slate-500 tracking-[0.1em] mt-1">
                      {review.org}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
