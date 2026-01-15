
import React, { useState, useEffect, useRef } from 'react';
import { Typography } from 'antd';

const { Text } = Typography;

export const Reveal: React.FC<{ 
  children: React.ReactNode; 
  delay?: number; 
  direction?: 'up' | 'left' | 'right';
  className?: string;
}> = ({ children, delay = 0, direction = 'up', className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    if (domRef.current) observer.observe(domRef.current);
    return () => observer.disconnect();
  }, []);
  const directionClasses = { 
    up: 'translate-y-12', 
    left: 'translate-x-12', 
    right: '-translate-x-12' 
  };
  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 cubic-bezier(0.16, 1, 0.3, 1) transform ${className} ${isVisible ? 'opacity-100 translate-y-0 translate-x-0' : `opacity-0 ${directionClasses[direction]}`}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export const GlowOrb: React.FC<{ color?: string; className?: string }> = ({ color = "bg-blue-600", className = "" }) => (
  <div className={`floating-orb ${color} ${className}`} style={{ width: '400px', height: '400px' }} />
);

export const NumberTicker: React.FC<{ value: number; prefix?: string; suffix?: string; duration?: number }> = ({ value, prefix = "", suffix = "", duration = 2000 }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const end = value;
    if (start === end) return;
    const increment = end / (duration / 20);
    let timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 20);
    return () => clearInterval(timer);
  }, [value, duration]);
  return <Text strong>{prefix}{count.toLocaleString()}{suffix}</Text>;
};

export const ExcelChaosAnimation: React.FC = () => {
  return (
    <div className="h-64 w-full relative overflow-hidden bg-red-950/20 rounded-[2rem] flex items-center justify-center border border-red-500/10">
      <div className="absolute inset-0 grid-bg opacity-5"></div>
      <div className="flex flex-wrap gap-3 p-8 justify-center max-w-sm">
        {[...Array(12)].map((_, i) => (
          <div 
            key={i} 
            className="h-12 w-24 bg-slate-900/80 border border-red-500/20 rounded-xl shadow-lg animate-pulse"
            style={{ 
              animationDelay: `${i * 150}ms`, 
              transform: `rotate(${Math.sin(i) * 15}deg)` 
            }}
          >
            <div className="h-1.5 w-14 bg-red-500/10 m-4 rounded"></div>
          </div>
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="bg-red-500/10 backdrop-blur-xl border border-red-500/30 text-red-500 px-6 py-3 rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] shadow-2xl">
          Manual Bottleneck
        </div>
      </div>
    </div>
  );
};

export const DebtProOrderAnimation: React.FC = () => {
  return (
    <div className="h-64 w-full relative overflow-hidden bg-blue-950/10 rounded-[2rem] flex items-center justify-center border border-blue-500/20">
      <div className="absolute inset-0 grid-bg opacity-20"></div>
      <div className="flex flex-col gap-4 w-full px-16 max-w-md relative z-10">
        {[...Array(4)].map((_, i) => (
          <div 
            key={i} 
            className="h-10 w-full bg-slate-900 border border-blue-500/30 rounded-2xl shadow-2xl flex items-center px-6 gap-5 overflow-hidden transition-all duration-700 hover:translate-x-4 hover:border-blue-400 group"
          >
            <div className="w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.8)] group-hover:scale-125 transition-transform"></div>
            <div className="h-2 flex-1 bg-blue-500/20 rounded-full">
              <div className="h-full bg-blue-500 w-1/2 animate-shimmer"></div>
            </div>
            <div className="w-16 h-2 bg-emerald-500/40 rounded-full"></div>
          </div>
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="bg-blue-600/20 backdrop-blur-xl border border-blue-500/40 text-blue-400 px-6 py-3 rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
          Real-time Engine
        </div>
      </div>
    </div>
  );
};
