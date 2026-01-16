
import React from 'react';
import { Form, Input, Button, Typography, Space, Row, Col, App } from 'antd';
import { 
  UserOutlined, 
  BankOutlined, 
  MailOutlined, 
  PhoneOutlined, 
  SendOutlined,
  CheckCircleFilled,
  EnvironmentOutlined
} from '@ant-design/icons';
import { i18n, Language } from './i18n';
import { Reveal } from './CommonUI';

const { Text } = Typography;

interface ContactSectionProps {
  lang: Language;
  theme: 'light' | 'dark';
}

export const ContactSection: React.FC<ContactSectionProps> = ({ lang, theme }) => {
  const t = i18n[lang];
  const ct = t.contactSection;
  const { message } = App.useApp();
  const [form] = Form.useForm();
  const [submitted, setSubmitted] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const isDark = theme === 'dark';

  const onFinish = (values: any) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      message.success(ct.success);
    }, 1500);
  };
  
  return (
    <section id="contact" className={`section-fullscreen transition-colors duration-500 ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-6 w-full">
        <Row gutter={[60, 60]} align="top">
          <Col xs={24} lg={11}>
            <Reveal direction="right">
              <div className={`inline-flex items-center gap-3 px-6 py-2 rounded-full border mb-8 ${isDark ? 'border-blue-500/20 bg-blue-500/5' : 'border-blue-100 bg-blue-50'}`}>
                 <Text className={`text-[10px] font-black tracking-[0.4em] uppercase ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>CONTACT_CHANNELS</Text>
              </div>
              <h2 className={`text-4xl md:text-5xl lg:text-6xl font-black mb-8 tracking-tighter leading-[0.95] ${isDark ? 'text-white' : 'text-slate-900'}`}>
                {ct.title}
              </h2>
              <p className={`text-lg mb-12 font-medium leading-relaxed max-w-xl ${isDark ? 'text-slate-500' : 'text-slate-600'}`}>
                {ct.subtitle}
              </p>
              
              <div className="space-y-6">
                {/* Company Block */}
                <div className={`p-8 rounded-[2.5rem] border ${isDark ? 'bg-white/5 border-white/5' : 'bg-slate-50 border-slate-100'} shadow-sm`}>
                   <h3 className={`text-xl font-black mb-6 uppercase tracking-widest ${isDark ? 'text-white' : 'text-slate-900'}`}>{ct.companyInfo.name}</h3>
                   
                   <div className="space-y-4">
                      <div className="flex items-center gap-4 group">
                        <div className="w-10 h-10 rounded-xl bg-blue-600/10 flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all">
                          <PhoneOutlined />
                        </div>
                        <span className={`text-lg font-black tracking-tight ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{ct.companyInfo.phone}</span>
                      </div>

                      <div className="flex items-center gap-4 group">
                        <div className="w-10 h-10 rounded-xl bg-blue-600/10 flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all">
                          <MailOutlined />
                        </div>
                        <span className={`text-lg font-black tracking-tight ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{ct.companyInfo.email}</span>
                      </div>

                      <div className="flex items-center gap-4 group">
                        <div className="w-10 h-10 rounded-xl bg-blue-600/10 flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all">
                          <EnvironmentOutlined />
                        </div>
                        <div className="flex flex-col">
                           <span className={`text-sm font-bold tracking-tight ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{ct.companyInfo.address}</span>
                           <a 
                            href="https://share.google/kwC3NBy0lnHErvoJ2" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-[10px] font-black uppercase text-blue-500 hover:text-blue-400 tracking-widest mt-1"
                           >
                              {ct.companyInfo.map}
                           </a>
                        </div>
                      </div>
                   </div>
                </div>
              </div>
            </Reveal>
          </Col>

          <Col xs={24} lg={13}>
            <Reveal direction="left">
               <div className={`glass-card-pro rounded-[3rem] p-8 md:p-12 shadow-[0_60px_120px_rgba(0,0,0,0.6)] border ${isDark ? 'border-white/5' : 'border-slate-100'}`}>
                 {submitted ? (
                   <div className="py-16 text-center animate-slide-up">
                     <CheckCircleFilled className="text-emerald-500 text-[80px] mb-10 opacity-80" />
                     <h3 className={`text-2xl font-black tracking-tighter mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>{ct.success}</h3>
                     <button 
                        onClick={() => setSubmitted(false)}
                        className="text-[9px] font-black uppercase tracking-[0.3em] text-blue-500 hover:text-blue-400 transition-colors"
                     >
                       OPEN_NEW_REQUEST_SESSION
                     </button>
                   </div>
                 ) : (
                   <Form 
                    form={form} 
                    layout="vertical" 
                    onFinish={onFinish} 
                    size="large"
                    className="space-y-4"
                   >
                     <Form.Item 
                        label={<Text className={`text-[9px] font-black uppercase tracking-[0.3em] ${isDark ? 'text-slate-500' : 'text-slate-600'}`}>{ct.name}</Text>}
                        name="name" 
                        rules={[{ required: true, message: 'Required' }]}
                      >
                        <Input 
                          prefix={<UserOutlined className="opacity-50" />} 
                          placeholder={ct.placeholders.name}
                          className={`h-12 ${isDark ? 'bg-white/5 border-white/10 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'}`}
                        />
                      </Form.Item>
                      
                      <Form.Item 
                        label={<Text className={`text-[9px] font-black uppercase tracking-[0.3em] ${isDark ? 'text-slate-500' : 'text-slate-600'}`}>{ct.org}</Text>}
                        name="organization" 
                        rules={[{ required: true, message: 'Required' }]}
                      >
                        <Input 
                          prefix={<BankOutlined className="opacity-50" />} 
                          placeholder={ct.placeholders.org}
                          className={`h-12 ${isDark ? 'bg-white/5 border-white/10 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'}`}
                        />
                      </Form.Item>
                      
                      <Form.Item 
                        label={<Text className={`text-[9px] font-black uppercase tracking-[0.3em] ${isDark ? 'text-slate-500' : 'text-slate-600'}`}>Contact Details</Text>}
                        name="email" 
                        rules={[{ required: true, type: 'email' }]}
                      >
                        <Input 
                          prefix={<MailOutlined className="opacity-50" />} 
                          placeholder={ct.placeholders.email}
                          className={`h-12 ${isDark ? 'bg-white/5 border-white/10 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'}`}
                        />
                      </Form.Item>

                      <Button 
                        type="primary" 
                        htmlType="submit" 
                        loading={loading}
                        block 
                        icon={<SendOutlined />}
                        className="mt-6 shadow-xl h-14"
                      >
                        {ct.submit}
                      </Button>
                   </Form>
                 )}
               </div>
            </Reveal>
          </Col>
        </Row>
      </div>
    </section>
  );
};
