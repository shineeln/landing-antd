
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
  const directionClasses = { up: 'translate-y-6', left: 'translate-x-6', right: '-translate-x-6' };
  return (
    <div
      ref={domRef}
      className={`transition-all duration-700 ease-out transform ${className} ${isVisible ? 'opacity-100 translate-y-0 translate-x-0' : `opacity-0 ${directionClasses[direction]}`}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

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

// Fix: Added missing ExcelChaosAnimation component
/**
 * Visual representation of the disorganized nature of traditional manual data management.
 */
export const ExcelChaosAnimation: React.FC = () => {
  return (
    <div className="h-48 w-full relative overflow-hidden bg-red-50/30 dark:bg-red-900/5 rounded-3xl flex items-center justify-center border border-red-100 dark:border-red-900/10">
      <div className="absolute inset-0 grid-bg opacity-5"></div>
      <div className="flex flex-wrap gap-2 p-6 justify-center max-w-sm">
        {[...Array(10)].map((_, i) => (
          <div 
            key={i} 
            className="h-10 w-20 bg-white dark:bg-slate-800 border border-red-200 dark:border-red-900/20 rounded-lg shadow-sm animate-pulse"
            style={{ 
              animationDelay: `${i * 200}ms`, 
              transform: `rotate(${Math.sin(i) * 10}deg)` 
            }}
          >
            <div className="h-1 w-12 bg-red-100 dark:bg-red-900/10 m-3 rounded"></div>
          </div>
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-red-500/10 backdrop-blur-sm border border-red-500/20 text-red-500 px-4 py-2 rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-xl">
          Information Silos
        </div>
      </div>
    </div>
  );
};

// Fix: Added missing DebtProOrderAnimation component
/**
 * Visual representation of the streamlined and automated workflow of DebtPro.
 */
export const DebtProOrderAnimation: React.FC = () => {
  return (
    <div className="h-48 w-full relative overflow-hidden bg-blue-50/30 dark:bg-blue-900/5 rounded-3xl flex items-center justify-center border border-blue-100 dark:border-blue-900/10">
      <div className="absolute inset-0 grid-bg opacity-10"></div>
      <div className="flex flex-col gap-3 w-full px-12 max-w-md">
        {[...Array(4)].map((_, i) => (
          <div 
            key={i} 
            className="h-8 w-full bg-white dark:bg-slate-800 border border-blue-200 dark:border-blue-900/20 rounded-xl shadow-sm flex items-center px-4 gap-4 overflow-hidden transition-all duration-500 hover:translate-x-2"
          >
            <div className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]"></div>
            <div className="h-1.5 flex-1 bg-blue-100 dark:bg-blue-900/20 rounded"></div>
            <div className="w-12 h-1.5 bg-emerald-400/30 rounded"></div>
          </div>
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="bg-blue-600/10 backdrop-blur-sm border border-blue-600/20 text-blue-600 px-4 py-2 rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-xl animate-pulse">
          System Synchronized
        </div>
      </div>
    </div>
  );
};
