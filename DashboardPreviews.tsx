
import React from 'react';
import { 
  BarChart3, 
  History, 
  Target, 
  Gavel, 
  ChevronRight, 
  Zap, 
  MessageCircle, 
  Award,
  TrendingUp,
  Activity,
  Info
} from 'lucide-react';
import { 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip as RechartsTooltip, 
  ResponsiveContainer, 
  BarChart,
  Bar,
  Cell
} from 'recharts';
import { Tooltip as AntdTooltip } from 'antd';
import { i18n, Language } from './i18n';

interface PreviewProps {
  lang: Language;
  theme: 'light' | 'dark';
}

export const PreviewCommandCenter: React.FC<PreviewProps> = ({ lang, theme }) => {
  const t = i18n[lang];
  const chartData = [
    { name: 'Normal', value: 8500 }, { name: 'Caution', value: 1200 },
    { name: 'Substandard', value: 800 }, { name: 'Doubtful', value: 400 },
    { name: 'Bad', value: 200 },
  ];

  const statTooltips: Record<string, string> = {
    [t.stats.npl]: lang === 'mn' ? 'Нийт найдваргүй зээлийн үлдэгдэл дүн' : 'Total principal balance of loans in non-performing status.',
    [t.stats.today]: lang === 'mn' ? 'Өнөөдрийн байдлаар амжилттай төлүүлсэн дүн' : 'Total cash successfully recovered from delinquent accounts today.',
    [t.stats.rate]: lang === 'mn' ? 'Ангилал ахисан зээлүүдийн эзлэх хувь' : 'Percentage of portfolio that has moved to a healthier credit classification.',
    [t.stats.risk]: lang === 'mn' ? 'Зээлийн эрсдэлээс хамгаалж нөөцөлсөн сан' : 'Regulatory capital provisioned to cover potential credit losses.'
  };

  const healthTooltips: Record<string, string> = {
    'Data_Ingress': lang === 'mn' ? 'Үндсэн банкны системээс дата уншиж буй төлөв' : 'Real-time synchronization status with core banking systems (Polaris).',
    'Notice_Gen': lang === 'mn' ? 'Хуулийн мэдэгдэх хуудас автоматаар үүссэн амжилт' : 'Success rate of automated legal notice and document generation.',
    'Latency': lang === 'mn' ? 'Системийн боловсруулалт хийх хугацаа (миллисекунд)' : 'End-to-end processing time for automated recovery workflows.'
  };

  return (
    <div className="w-full h-full p-2">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          { label: t.stats.npl, value: 124, suffix: 'M', prefix: '$', color: 'text-red-500', icon: <Target size={14}/> },
          { label: t.stats.today, value: 1.2, suffix: 'M', prefix: '$', color: 'text-emerald-500', icon: <TrendingUp size={14}/> },
          { label: t.stats.rate, value: 42, suffix: '%', color: 'text-blue-500', icon: <Activity size={14}/> },
          { label: t.stats.risk, value: 8.2, suffix: 'M', prefix: '$', color: 'text-white', icon: <Zap size={14}/> },
        ].map((stat, i) => (
          <AntdTooltip key={i} title={statTooltips[stat.label]} placement="top">
            <div className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all group overflow-hidden relative cursor-help">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                {stat.icon}
              </div>
              <div className="font-mono text-[9px] font-black uppercase tracking-[0.1em] mb-4 text-slate-500 flex items-center gap-2">
                {stat.label}
              </div>
              <div className={`text-3xl font-black tracking-tighter ${stat.color}`}>
                {stat.prefix}{stat.value}{stat.suffix}
              </div>
            </div>
          </AntdTooltip>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8 p-8 rounded-[2.5rem] bg-white/5 border border-white/10 relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-transparent opacity-50"></div>
          <div className="flex items-center justify-between mb-8">
            <AntdTooltip title={lang === 'mn' ? 'Зээлийн ангиллын шилжилт' : 'Tracking how loans migrate between risk categories over time.'}>
              <h4 className="font-mono text-[10px] font-black uppercase tracking-[0.1em] flex items-center gap-3 text-slate-400 cursor-help">
                <BarChart3 size={16} className="text-blue-500"/> PORTFOLIO_MIGRATION_V4 <Info size={12} className="opacity-40" />
              </h4>
            </AntdTooltip>
            <div className="flex gap-2">
               <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
               <div className="w-2 h-2 rounded-full bg-slate-700"></div>
            </div>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.03)" />
                <XAxis dataKey="name" stroke="#475569" fontSize={10} tickLine={false} axisLine={false} />
                <YAxis hide />
                <RechartsTooltip 
                   cursor={{ fill: 'rgba(59, 130, 246, 0.05)' }}
                   contentStyle={{ backgroundColor: '#020617', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', fontSize: '11px', boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }}
                />
                <Bar dataKey="value" radius={[10, 10, 0, 0]}>
                   {chartData.map((entry, index) => (
                      <Cell key={index} fill={index === 0 ? '#10b981' : index > 2 ? '#ef4444' : '#3b82f6'} fillOpacity={0.8} />
                   ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="lg:col-span-4 flex flex-col gap-6">
           <div className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 h-full relative group">
              <h4 className="font-mono text-[10px] font-black uppercase tracking-[0.1em] mb-8 text-slate-400">CORE_ENGINE_HEALTH</h4>
              <div className="space-y-8">
                 {[ 
                   { l: 'Data_Ingress', v: 84, c: 'bg-blue-500' }, 
                   { l: 'Notice_Gen', v: 92, c: 'bg-cyan-500' }, 
                   { l: 'Latency', v: 14, c: 'bg-emerald-500' } 
                 ].map((a, i) => (
                   <AntdTooltip key={i} title={healthTooltips[a.l]} placement="left">
                     <div className="cursor-help">
                        <div className="flex justify-between font-mono text-[10px] font-bold uppercase mb-3 text-slate-500">
                          <span>{a.l}</span>
                          <span>{a.v}{a.l === 'Latency' ? 'ms' : '%'}</span>
                        </div>
                        <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                          <div className={`h-full ${a.c} shadow-[0_0_10px_rgba(37,99,235,0.3)] transition-all duration-1000`} style={{ width: `${a.v}%` }}></div>
                        </div>
                     </div>
                   </AntdTooltip>
                 ))}
              </div>
              <div className="mt-12 flex justify-center">
                 <div className="w-16 h-1 bg-white/5 rounded-full"></div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export const PreviewBorrower360: React.FC<PreviewProps> = ({ lang }) => {
  return (
    <div className="flex flex-col gap-6 w-full p-2">
      <div className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-8 relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 blur-[60px] group-hover:bg-blue-600/10 transition-colors"></div>
        <div className="flex items-center gap-6">
           <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl flex items-center justify-center font-black text-3xl text-white shadow-2xl shadow-blue-600/40 relative">
              B
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-emerald-500 rounded-full border-4 border-slate-900 flex items-center justify-center">
                 <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
           </div>
           <div>
              <div className="text-3xl font-black text-white tracking-tight mb-1">Bat-Erdene.G</div>
              <div className="font-mono text-[10px] text-slate-500 font-bold uppercase tracking-[0.1em]">ID_REF: POL-802991-X</div>
           </div>
        </div>
        <div className="flex gap-4">
           <div className="px-6 py-2.5 bg-red-500/10 text-red-500 text-[10px] font-black rounded-xl border border-red-500/20 uppercase tracking-[0.1em]">HIGH_RISK</div>
           <div className="px-6 py-2.5 bg-emerald-500/10 text-emerald-500 text-[10px] font-black rounded-xl border border-emerald-500/20 uppercase tracking-[0.1em]">CONNECTED</div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
         <div className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 relative group">
            <h4 className="font-mono text-[10px] font-black uppercase tracking-[0.1em] mb-8 flex items-center gap-3 text-slate-400"><History size={16}/> AUDIT_TRACE_LOG</h4>
            <div className="space-y-6">
               {[
                 { act: 'Outbound_Call', res: 'CONN_04:22s', time: '2h_ago', c: 'text-blue-500' },
                 { act: 'SMS_Trigger', res: 'DELIVERED', time: '1d_ago', c: 'text-emerald-500' },
                 { act: 'Asset_Sync', res: 'ASSET_8022_UBA', time: '3d_ago', c: 'text-white' }
               ].map((log, i) => (
                 <div key={i} className="flex justify-between items-center border-b border-white/5 pb-5 last:border-0 last:pb-0">
                    <div>
                       <div className="font-mono text-xs font-bold text-slate-200">{log.act}</div>
                       <div className={`text-[10px] font-black uppercase tracking-widest mt-2 ${log.c}`}>{log.res}</div>
                    </div>
                    <div className="font-mono text-[10px] font-bold text-slate-600">{log.time}</div>
                 </div>
               ))}
            </div>
         </div>
         <div className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 flex flex-col justify-center items-center group">
            <h4 className="font-mono text-[10px] font-black uppercase tracking-[0.1em] mb-8 flex items-center gap-3 text-slate-400 self-start"><Target size={16}/> RISK_METRIC</h4>
            <AntdTooltip title={lang === 'mn' ? 'Зээлдэгчийн эрсдэлийн индекс' : 'Proprietary risk score based on repayment behavior and asset coverage.'}>
              <div className="relative w-48 h-48 flex items-center justify-center cursor-help">
                 <svg className="w-full h-full -rotate-90">
                    <circle cx="50%" cy="50%" r="42%" stroke="#1e293b" strokeWidth="12" fill="transparent" />
                    <circle cx="50%" cy="50%" r="42%" stroke="#ef4444" strokeWidth="12" fill="transparent" strokeDasharray="264" strokeDashoffset="198" strokeLinecap="round" className="drop-shadow-[0_0_12px_rgba(239,68,68,0.5)]" />
                 </svg>
                 <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-5xl font-black text-white tracking-tighter">25%</span>
                    <span className="font-mono text-[9px] font-bold text-slate-500 uppercase tracking-[0.1em] mt-2">INDEX_V2</span>
                 </div>
              </div>
            </AntdTooltip>
         </div>
      </div>
    </div>
  );
};

export const PreviewLegalPipeline: React.FC<PreviewProps> = ({ lang }) => {
  return (
    <div className="w-full h-full p-2">
      <div className="flex items-center justify-between mb-12">
         <h4 className="font-mono text-[10px] font-black uppercase tracking-[0.1em] flex items-center gap-3 text-slate-400"><Gavel size={18} className="text-blue-500"/> LEGAL_ENGINE_V1</h4>
         <button className="h-10 px-6 bg-white/5 border border-white/10 text-blue-500 text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-blue-600 hover:text-white transition-all flex items-center gap-3">
            QUEUE_BATCH <ChevronRight size={14}/>
         </button>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
         {[
           { stage: 'Notices', count: 124, color: 'bg-blue-400', desc: lang === 'mn' ? 'Илгээсэн мэдэгдэх хуудас' : 'Sent repayment reminders.' },
           { stage: 'Invoices', count: 82, color: 'bg-blue-600', desc: lang === 'mn' ? 'Үүсгэсэн нэхэмжлэхүүд' : 'Generated billing documents.' },
           { stage: 'Filings', count: 45, color: 'bg-red-500', desc: lang === 'mn' ? 'Шүүхэд шилжсэн хэргүүд' : 'Active court submissions.' },
           { stage: 'Closed', count: 312, color: 'bg-emerald-500', desc: lang === 'mn' ? 'Шийдвэрлэгдсэн' : 'Successfully settled cases.' }
         ].map((s, i) => (
           <AntdTooltip key={i} title={s.desc}>
             <div className="p-8 rounded-[2rem] bg-white/5 border border-white/10 text-center transition-all hover:scale-105 hover:border-blue-500/40 relative overflow-hidden group cursor-help">
                <div className={`absolute top-0 left-0 w-full h-1 ${s.color} opacity-40`}></div>
                <div className={`w-3 h-3 rounded-full mx-auto mb-6 ${s.color} shadow-lg shadow-white/10`}></div>
                <div className="text-4xl font-black text-white tracking-tighter">{s.count}</div>
                <div className="font-mono text-[9px] font-bold text-slate-500 uppercase tracking-[0.1em] mt-4">{s.stage}</div>
             </div>
           </AntdTooltip>
         ))}
      </div>
    </div>
  );
};

export const PreviewSMSDashboard: React.FC<PreviewProps> = ({ lang }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 w-full p-2">
       <div className="lg:col-span-4 space-y-6">
          <AntdTooltip title={lang === 'mn' ? 'Сүлжээний холболтын төлөв' : 'Active connection with SMS/Voice gateway providers.'}>
            <div className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 relative group cursor-help">
               <h4 className="font-mono text-[10px] font-black uppercase tracking-[0.1em] mb-8 text-slate-400">CARRIER_NODE</h4>
               <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-blue-600/10 text-blue-500 rounded-3xl flex items-center justify-center border border-blue-500/20">
                     <Zap size={28} className="animate-pulse" />
                  </div>
                  <div>
                     <div className="text-xl font-black text-white">READY</div>
                     <div className="font-mono text-[10px] font-bold text-emerald-500 uppercase tracking-widest mt-1">LAT: 142ms</div>
                  </div>
               </div>
            </div>
          </AntdTooltip>
       </div>
       <div className="lg:col-span-8 p-8 rounded-[2.5rem] bg-white/5 border border-white/10 relative overflow-hidden group">
          <h4 className="font-mono text-[10px] font-black uppercase tracking-[0.1em] mb-8 flex items-center gap-3 text-slate-400"><MessageCircle size={18} className="text-blue-500"/> QUEUE_V2</h4>
          <div className="space-y-6">
             {[
               { ch: 'Voice', to: 'Batch_A', msg: 'Collection_Notice_01...', stat: 'SENT' },
               { ch: 'SMS', to: 'Batch_B', msg: 'Urgency_Trigger_Batch...', stat: 'PENDING' }
             ].map((log, i) => (
                <div key={i} className="flex gap-6 border-b border-white/5 pb-6 last:border-0 last:pb-0">
                   <div className="font-mono text-[10px] font-black px-4 py-1.5 bg-blue-500/10 text-blue-500 rounded-xl h-fit border border-blue-500/20">{log.ch}</div>
                   <div className="flex-1">
                      <div className="font-mono text-xs font-bold text-slate-300">{log.to}</div>
                      <p className="text-[11px] font-medium text-slate-600 italic mt-2">"{log.msg}"</p>
                   </div>
                   <div className="text-[10px] font-black text-slate-500 self-center">{log.stat}</div>
                </div>
             ))}
          </div>
       </div>
    </div>
  );
};

export const PreviewPerformance: React.FC<PreviewProps> = ({ lang }) => {
  const data = [
    { name: 'Bayaraa', rec: 82000, target: 90000 },
    { name: 'Sarnai', rec: 95000, target: 90000 },
    { name: 'Enkh', rec: 64000, target: 90000 },
    { name: 'Nomin', rec: 112000, target: 90000 },
  ];
  return (
    <div className="w-full h-full p-2">
      <div className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10 relative overflow-hidden group">
         <h4 className="font-mono text-[10px] font-black uppercase tracking-[0.1em] mb-12 flex items-center gap-3 text-slate-400"><Award size={18} className="text-blue-500"/> KPI_ENGINE_ACTIVE</h4>
         <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
               <BarChart data={data} layout="vertical" margin={{ left: 0 }}>
                  <XAxis type="number" hide />
                  <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} fontSize={11} stroke="#475569" width={80} />
                  <Bar dataKey="rec" radius={[0, 10, 10, 0]}>
                     {data.map((entry, index) => (
                        <AntdTooltip key={index} title={`${entry.name}: ${entry.rec.toLocaleString()} recovered out of ${entry.target.toLocaleString()} target`}>
                          <Cell fill={entry.rec >= entry.target ? '#10b981' : '#3b82f6'} fillOpacity={0.8} style={{ cursor: 'help' }} />
                        </AntdTooltip>
                     ))}
                  </Bar>
               </BarChart>
            </ResponsiveContainer>
         </div>
      </div>
    </div>
  );
};
