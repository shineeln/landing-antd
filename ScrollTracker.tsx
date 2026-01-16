
import React, { useState, useEffect } from 'react';
import { Tooltip } from 'antd';
import { i18n, Language } from './i18n';

interface ScrollTrackerProps {
  lang: Language;
  theme: 'light' | 'dark';
}

export const ScrollTracker: React.FC<ScrollTrackerProps> = ({ lang, theme }) => {
  const t = i18n[lang];
  const [activeSection, setActiveSection] = useState('home');
  const isDark = theme === 'dark';

  const sections = [
    { id: 'home', label: t.nav.product },
    { id: 'lifecycle', label: lang === 'mn' ? 'Үе шатууд' : 'Lifecycle' },
    { id: 'metrics', label: lang === 'mn' ? 'Үр дүн' : 'Impact' },
    { id: 'comparison', label: lang === 'mn' ? 'Харьцуулалт' : 'Comparison' },
    { id: 'why', label: t.nav.why },
    { id: 'solutions', label: t.nav.solutions },
    { id: 'product', label: lang === 'mn' ? 'Процесс' : 'Interactive' },
    { id: 'sms', label: t.nav.sms },
    { id: 'docs', label: t.nav.docs },
    { id: 'showcase', label: lang === 'mn' ? 'Үзүүлэн' : 'Showcase' },
    { id: 'pricing', label: t.nav.pricing },
    { id: 'customers', label: t.nav.customers },
    { id: 'contact', label: lang === 'mn' ? 'Холбоо барих' : 'Contact' },
    { id: 'faq', label: t.nav.faq },
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -40% 0px',
      threshold: 0,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sections]);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed left-4 lg:left-8 top-1/2 -translate-y-1/2 z-[100] hidden lg:flex flex-col items-center pointer-events-none">
      <div className={`w-[1px] h-8 bg-gradient-to-b from-transparent ${isDark ? 'via-white/10' : 'via-slate-200'} to-blue-500/20 opacity-40 mb-4`}></div>
      
      <div className="flex flex-col gap-4 pointer-events-auto">
        {sections.map((section) => (
          <Tooltip 
            key={section.id} 
            title={<span className="text-[9px] font-black uppercase tracking-[0.2em]">{section.label}</span>} 
            placement="right"
            color={isDark ? '#020617' : '#2563eb'}
            overlayInnerStyle={{ borderRadius: '8px', border: isDark ? '1px solid rgba(255,255,255,0.1)' : 'none' }}
          >
            <button
              onClick={() => scrollTo(section.id)}
              className="group relative flex items-center justify-center w-6 h-6 outline-none transition-all"
            >
              <div 
                className={`
                  rounded-full transition-all duration-500 z-10
                  ${activeSection === section.id 
                    ? 'w-2.5 h-2.5 bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.8)]' 
                    : `w-1.5 h-1.5 ${isDark ? 'bg-white/20 group-hover:bg-blue-400 group-hover:w-2' : 'bg-slate-300 group-hover:bg-blue-400 group-hover:w-2'}`
                  }
                `}
              />
            </button>
          </Tooltip>
        ))}
      </div>

      <div className={`w-[1px] h-8 bg-gradient-to-t from-transparent ${isDark ? 'via-white/10' : 'via-slate-200'} to-blue-500/20 opacity-40 mt-4`}></div>
    </div>
  );
};
