
import React from 'react';
import { Card, Table, Typography, Row, Col, Badge, Space } from 'antd';
import { 
  CloseCircleOutlined, 
  CheckCircleOutlined, 
  WarningOutlined, 
  RocketOutlined, 
  FileExcelOutlined 
} from '@ant-design/icons';
import { i18n, Language } from './i18n';
import { Reveal, ExcelChaosAnimation, DebtProOrderAnimation } from './CommonUI';

const { Title, Text, Paragraph } = Typography;

// Fix: Ant Design Card component can sometimes have type issues in certain TS environments. 
// Casting it to any as a workaround for the "does not have any construct or call signatures" error.
const AntdCard = Card as any;

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
    { title: 'Feature', dataIndex: 'feature', key: 'feature', className: 'uppercase text-[10px] font-black' },
    { 
      title: 'Legacy Excel', 
      dataIndex: 'excel', 
      key: 'excel',
      render: (val: string) => <Text type="danger" className="font-bold">{val}</Text>
    },
    { 
      title: 'DebtPro OS', 
      dataIndex: 'debtpro', 
      key: 'debtpro',
      render: (val: string) => <Space><CheckCircleOutlined className="text-emerald-500" /> <Text strong className="text-blue-600">{val}</Text></Space>
    },
  ];
  
  return (
    <section className={`py-32 relative overflow-hidden transition-colors duration-500 ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
       <div className="max-w-7xl mx-auto px-6 relative">
          <Reveal>
             <div className="text-center mb-24">
                <Badge 
                  count={t.excelSection.tag} 
                  style={{ backgroundColor: '#2563eb10', color: '#2563eb', border: '1px solid #2563eb20' }} 
                  className="mb-8 font-black uppercase tracking-widest"
                />
                <Title level={2} className="text-4xl md:text-5xl font-black mb-8 tracking-tight">{t.excelSection.title}</Title>
                <Paragraph className={`text-lg max-w-2xl mx-auto font-medium ${isDark ? 'text-slate-500' : 'text-slate-600'}`}>{t.excelSection.subtitle}</Paragraph>
             </div>
          </Reveal>
          
          <Row gutter={[48, 48]} className="mb-24 relative">
             <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden lg:flex w-16 h-16 rounded-full bg-blue-600 text-white text-sm font-black items-center justify-center shadow-2xl border-4 ${isDark ? 'border-slate-950' : 'border-slate-50'}`}>VS</div>
             
             <Col xs={24} lg={12}>
                <Reveal direction="right">
                   <AntdCard className={`h-full transition-all duration-500 hover:border-red-500/50 ${isDark ? 'bg-slate-900/30' : 'bg-white'}`}>
                      <ExcelChaosAnimation />
                      <div className="mt-8">
                         <Title level={4} className="flex items-center gap-3"><FileExcelOutlined className="text-red-500" /> {t.excelSection.excel.title}</Title>
                         <Paragraph className={`mb-8 font-medium ${isDark ? 'text-slate-500' : 'text-slate-600'}`}>{t.excelSection.excel.description}</Paragraph>
                         <ul className="space-y-4">
                            {t.excelSection.excel.items.map((item, idx) => (
                               <li key={idx} className="flex items-start gap-3">
                                  <CloseCircleOutlined className="text-red-500 mt-1" />
                                  <Text strong className={isDark ? 'text-slate-400' : 'text-slate-700'}>{item}</Text>
                               </li>
                            ))}
                         </ul>
                      </div>
                   </AntdCard>
                </Reveal>
             </Col>
             
             <Col xs={24} lg={12}>
                <Reveal direction="left">
                   <AntdCard className={`h-full border-blue-500/20 hover:border-blue-500 transition-all duration-500 ${isDark ? 'bg-blue-600/5' : 'bg-blue-50/30'}`}>
                      <DebtProOrderAnimation />
                      <div className="mt-8">
                         <Title level={4} className="flex items-center gap-3"><RocketOutlined className="text-blue-500" /> {t.excelSection.debtpro.title}</Title>
                         <Paragraph className={`mb-8 font-medium ${isDark ? 'text-slate-500' : 'text-slate-600'}`}>{t.excelSection.debtpro.description}</Paragraph>
                         <ul className="space-y-4">
                            {t.excelSection.debtpro.items.map((item, idx) => (
                               <li key={idx} className="flex items-start gap-3">
                                  <CheckCircleOutlined className="text-emerald-500 mt-1" />
                                  <Text strong>{item}</Text>
                               </li>
                            ))}
                         </ul>
                      </div>
                   </AntdCard>
                </Reveal>
             </Col>
          </Row>
          
          <Reveal>
             <AntdCard className="shadow-2xl overflow-hidden">
                <Table 
                  dataSource={tableData} 
                  columns={columns} 
                  pagination={false} 
                  className="rounded-3xl"
                  rowClassName={() => isDark ? 'bg-slate-900/50' : 'bg-white'}
                />
             </AntdCard>
          </Reveal>
       </div>
    </section>
  );
};
