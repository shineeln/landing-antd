
import React from 'react';
import { Form, Input, Button, Typography, Space, Row, Col, App } from 'antd';
import { 
  UserOutlined, 
  BankOutlined, 
  MailOutlined, 
  PhoneOutlined, 
  SendOutlined,
  CheckCircleFilled
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
      message.success(t.contactSection.success);
    }, 1500);
  };
  
  return (
    <section id="contact" className={`py-40 transition-colors duration-500 ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <Row gutter={[80, 80]} align="middle">
          <Col xs={24} lg={11}>
            <Reveal direction="right">
              <div className={`inline-flex items-center gap-3 px-6 py-2 rounded-full border mb-10 ${isDark ? 'border-blue-500/20 bg-blue-500/5' : 'border-blue-100 bg-blue-50'}`}>
                 <Text className={`text-[10px] font-black tracking-[0.4em] uppercase ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>PARTNERSHIP_RECORDS</Text>
              </div>
              <h2 className={`text-4xl md:text-7xl font-black mb-12 tracking-tighter leading-[0.9] ${isDark ? 'text-white' : 'text-slate-900'}`}>
                {t.contactSection.title}
              </h2>
              <p className={`text-xl mb-16 font-medium leading-relaxed max-w-xl ${isDark ? 'text-slate-500' : 'text-slate-600'}`}>
                {t.contactSection.subtitle}
              </p>
              
              <div className="space-y-8">
                <div className={`p-8 rounded-[2.5rem] border flex items-center gap-8 group transition-all ${isDark ? 'bg-white/5 border-white/5 hover:border-blue-500/30' : 'bg-slate-50 border-slate-100 hover:border-blue-200 shadow-sm'}`}>
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center border transition-all ${isDark ? 'bg-blue-600/10 text-blue-500 border-blue-500/20 group-hover:bg-blue-600 group-hover:text-white' : 'bg-blue-50 text-blue-600 border-blue-100 group-hover:bg-blue-600 group-hover:text-white'}`}>
                    <MailOutlined className="text-2xl" />
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase text-slate-500 block mb-1 tracking-[0.2em]">DIRECT_CHANNEL</span>
                    <span className={`text-2xl font-black tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>contact@tnd.mn</span>
                  </div>
                </div>
                <div className={`p-8 rounded-[2.5rem] border flex items-center gap-8 group transition-all ${isDark ? 'bg-white/5 border-white/5 hover:border-emerald-500/30' : 'bg-slate-50 border-slate-100 hover:border-emerald-200 shadow-sm'}`}>
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center border transition-all ${isDark ? 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20 group-hover:bg-emerald-600 group-hover:text-white' : 'bg-emerald-50 text-emerald-600 border-emerald-100 group-hover:bg-emerald-600 group-hover:text-white'}`}>
                    <PhoneOutlined className="text-2xl" />
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase text-slate-500 block mb-1 tracking-[0.2em]">VOICE_LINE</span>
                    <span className={`text-2xl font-black tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>+976 7700-1122</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </Col>

          <Col xs={24} lg={13}>
            <Reveal direction="left">
               <div className={`glass-card-pro rounded-[4.5rem] p-10 md:p-16 shadow-[0_60px_120px_rgba(0,0,0,0.6)] border ${isDark ? 'border-white/5' : 'border-slate-100'}`}>
                 {submitted ? (
                   <div className="py-24 text-center animate-slide-up">
                     <CheckCircleFilled className="text-emerald-500 text-[100px] mb-12 opacity-80" />
                     <h3 className={`text-3xl font-black tracking-tighter mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>{t.contactSection.success}</h3>
                     <p className={`font-medium mb-12 ${isDark ? 'text-slate-500' : 'text-slate-600'}`}>Transmission confirmed. Our specialists will respond shortly.</p>
                     <button 
                        onClick={() => setSubmitted(false)}
                        className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500 hover:text-blue-400 transition-colors"
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
                    className="space-y-6"
                   >
                     <Form.Item 
                        label={<Text className={`text-[10px] font-black uppercase tracking-[0.3em] ${isDark ? 'text-slate-500' : 'text-slate-600'}`}>{t.contactSection.name}</Text>}
                        name="name" 
                        rules={[{ required: true, message: 'Required' }]}
                      >
                        <Input 
                          prefix={<UserOutlined className="opacity-50" />} 
                          placeholder={t.contactSection.placeholders.name}
                          className={isDark ? 'bg-white/5 border-white/10 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'}
                        />
                      </Form.Item>
                      
                      <Form.Item 
                        label={<Text className={`text-[10px] font-black uppercase tracking-[0.3em] ${isDark ? 'text-slate-500' : 'text-slate-600'}`}>{t.contactSection.org}</Text>}
                        name="organization" 
                        rules={[{ required: true, message: 'Required' }]}
                      >
                        <Input 
                          prefix={<BankOutlined className="opacity-50" />} 
                          placeholder={t.contactSection.placeholders.org}
                          className={isDark ? 'bg-white/5 border-white/10 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'}
                        />
                      </Form.Item>
                      
                      <Form.Item 
                        label={<Text className={`text-[10px] font-black uppercase tracking-[0.3em] ${isDark ? 'text-slate-500' : 'text-slate-600'}`}>Contact Details</Text>}
                        name="email" 
                        rules={[{ required: true, type: 'email' }]}
                      >
                        <Input 
                          prefix={<MailOutlined className="opacity-50" />} 
                          placeholder={t.contactSection.placeholders.email}
                          className={isDark ? 'bg-white/5 border-white/10 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'}
                        />
                      </Form.Item>

                      <Button 
                        type="primary" 
                        htmlType="submit" 
                        loading={loading}
                        block 
                        icon={<SendOutlined />}
                        className="mt-8 shadow-xl"
                      >
                        {t.contactSection.submit}
                      </Button>
                      
                      <div className="text-center mt-6">
                        <span className={`text-[9px] font-black uppercase tracking-[0.3em] ${isDark ? 'text-slate-600' : 'text-slate-400'}`}>ENCRYPTED_SUBMISSION_V4</span>
                      </div>
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
