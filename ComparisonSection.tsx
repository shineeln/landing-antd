
import React from 'react';
import { Card, Table, Typography, Row, Col, Badge, Space } from 'antd';
import { 
  CloseCircleOutlined, 
  CheckCircleOutlined, 
  RocketOutlined, 
  FileExcelOutlined 
} from '@ant-design/icons';
import { i18n, Language } from './i18n';
import { Reveal, ExcelChaosAnimation, DebtProOrderAnimation } from './CommonUI';

const { Title, Text, Paragraph } = Typography;

interface ComparisonSectionProps {
  lang: Language;
  theme: 'light' | 'dark';
}

export const ComparisonSection: React.FC<ComparisonSectionProps> = ({ lang, theme }) => {
  const t = i18n[lang];
  const isDark = theme === 'dark';

  const tableData = t.excelSection.table.features.map((feature, i) => ({
    key: i,
    feature,
    excel: t.excelSection.table.excelValues[i],
    debtpro: t.excelSection.table.debtproValues[i],
  }));

  const columns = [
    { 
      title: 'Infrastructure Component', 
      dataIndex: 'feature', 
      key: 'feature', 
      className: 'uppercase text-[10px] font-black',
      render: (val: string) => (
        <Text strong className={`uppercase text-[11px] tracking-tight ${isDark ? 'text-slate-400' : 'text-slate-900'}`}>
          {val}
        </Text>
      )
    },
    { 
      title: 'Legacy (Static Excel)', 
      dataIndex: 'excel', 
      key: 'excel',
      render: (val: string) => <Text className={`font-bold ${isDark ? 'text-red-400/70' : 'text-red-600'}`}>{val}</Text>
    },
    { 
      title: 'DebtPro Advanced OS', 
      dataIndex: 'debtpro', 
      key: 'debtpro',
      render: (val: string) => (
        <Space>
          <CheckCircleOutlined className="text-blue-500" />
          <Text strong className={isDark ? 'text-white' : 'text-slate-900'}>{val}</Text>
        </Space>
      )
    },
  ];
  
  return (
    <section className={`py-40 relative overflow-hidden transition-colors duration-500 ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
       <div className="max-w-7xl mx-auto px-6 relative">
          <Reveal>
             <div className="text-center mb-32">
                <div className={`inline-flex items-center gap-3 px-6 py-2 rounded-full border mb-10 ${isDark ? 'border-blue-500/20 bg-blue-500/5' : 'border-blue-200 bg-blue-50'}`}>
                   <Text className={`text-[10px] font-black tracking-[0.4em] uppercase ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>{t.excelSection.tag}</Text>
                </div>
                <h2 className={`text-4xl md:text-6xl font-black mb-10 tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>{t.excelSection.title}</h2>
                <p className={`text-xl max-w-3xl mx-auto font-medium ${isDark ? 'text-slate-500' : 'text-slate-600'}`}>{t.excelSection.subtitle}</p>
             </div>
          </Reveal>
          
          <Row gutter={[64, 64]} className="mb-32 relative">
             <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden lg:flex w-20 h-20 rounded-full text-xs font-black items-center justify-center shadow-2xl border ${isDark ? 'bg-slate-950 text-white border-white/10' : 'bg-white text-slate-900 border-slate-200'}`}>VS</div>
             
             <Col xs={24} lg={12}>
                <Reveal direction="right">
                   <div className={`glass-card-pro h-full rounded-[3.5rem] p-12 transition-all duration-500 border border-transparent hover:border-red-500/30 group`}>
                      <ExcelChaosAnimation />
                      <div className="mt-12">
                         <h3 className={`text-2xl font-black mb-6 flex items-center gap-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                           <FileExcelOutlined className="text-red-500" /> {t.excelSection.excel.title}
                         </h3>
                         <p className={`mb-10 font-medium leading-relaxed ${isDark ? 'text-slate-500' : 'text-slate-600'}`}>{t.excelSection.excel.description}</p>
                         <ul className="space-y-6">
                            {t.excelSection.excel.items.map((item, idx) => (
                               <li key={idx} className="flex items-start gap-4">
                                  <CloseCircleOutlined className="text-red-500/40 mt-1" />
                                  <Text className={`font-medium ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{item}</Text>
                               </li>
                            ))}
                         </ul>
                      </div>
                   </div>
                </Reveal>
             </Col>
             
             <Col xs={24} lg={12}>
                <Reveal direction="left">
                   <div className={`glass-card-pro h-full rounded-[3.5rem] p-12 border transition-all duration-500 ${isDark ? 'border-blue-500/20 hover:border-blue-500' : 'border-blue-100 hover:border-blue-400'}`}>
                      <DebtProOrderAnimation />
                      <div className="mt-12">
                         <h3 className={`text-2xl font-black mb-6 flex items-center gap-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                           <RocketOutlined className="text-blue-500" /> {t.excelSection.debtpro.title}
                         </h3>
                         <p className={`mb-10 font-medium leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{t.excelSection.debtpro.description}</p>
                         <ul className="space-y-6">
                            {t.excelSection.debtpro.items.map((item, idx) => (
                               <li key={idx} className="flex items-start gap-4">
                                  <CheckCircleOutlined className="text-blue-500 mt-1" />
                                  <Text className={`font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{item}</Text>
                               </li>
                            ))}
                         </ul>
                      </div>
                   </div>
                </Reveal>
             </Col>
          </Row>
          
          <Reveal>
             <div className="glass-card-pro rounded-[3rem] overflow-hidden p-2">
                <Table 
                  dataSource={tableData} 
                  columns={columns} 
                  pagination={false} 
                  className={`rounded-[2.5rem] overflow-hidden ${isDark ? 'dark-table' : 'light-table'}`}
                  rowClassName={() => 'bg-transparent'}
                />
             </div>
          </Reveal>
       </div>
       <style>{`
         .dark-table .ant-table { background: transparent !important; color: white !important; }
         .dark-table .ant-table-thead > tr > th { background: rgba(255,255,255,0.02) !important; color: rgba(255,255,255,0.5) !important; border-bottom: 1px solid rgba(255,255,255,0.05) !important; }
         .dark-table .ant-table-tbody > tr > td { border-bottom: 1px solid rgba(255,255,255,0.03) !important; }
         
         .light-table .ant-table { background: transparent !important; color: #0f172a !important; }
         .light-table .ant-table-thead > tr > th { background: rgba(0,0,0,0.02) !important; color: #64748b !important; border-bottom: 1px solid rgba(0,0,0,0.05) !important; }
       `}</style>
    </section>
  );
};
