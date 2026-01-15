
import React from 'react';
import { Form, Input, Button, Card, Typography, Space, Row, Col, App } from 'antd';
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

const { Title, Paragraph, Text } = Typography;

// Fix: Ant Design Card component can sometimes have type issues in certain TS environments. 
// Casting it to any as a workaround for the "does not have any construct or call signatures" error.
const AntdCard = Card as any;

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

  const onFinish = (values: any) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      message.success(t.contactSection.success);
    }, 1500);
  };
  
  return (
    <section id="contact" className={`py-32 transition-colors duration-500 ${theme === 'dark' ? 'bg-slate-950' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <Row gutter={[64, 64]} align="middle">
          <Col xs={24} lg={12}>
            <Reveal direction="right">
              <Text className="text-xs font-black text-blue-500 uppercase tracking-widest mb-6 block">Partnership</Text>
              <Title level={2} className="text-4xl md:text-6xl font-black mb-10 leading-[1.1]">{t.contactSection.title}</Title>
              <Paragraph className="text-lg text-slate-500 mb-12 font-medium leading-relaxed">{t.contactSection.subtitle}</Paragraph>
              
              <Space direction="vertical" size="large">
                <Space size="large" className="p-6 rounded-3xl bg-blue-500/5 border border-blue-500/10 w-full">
                  <MailOutlined className="text-2xl text-blue-500" />
                  <div>
                    <Text className="text-[10px] font-black uppercase text-slate-400 block mb-1">Email us</Text>
                    <Text strong className="text-xl">contact@tnd.mn</Text>
                  </div>
                </Space>
                <Space size="large" className="p-6 rounded-3xl bg-blue-500/5 border border-blue-500/10 w-full">
                  <PhoneOutlined className="text-2xl text-blue-500" />
                  <div>
                    <Text className="text-[10px] font-black uppercase text-slate-400 block mb-1">Call sales</Text>
                    <Text strong className="text-xl">+976 7700-1122</Text>
                  </div>
                </Space>
              </Space>
            </Reveal>
          </Col>

          <Col xs={24} lg={12}>
            <Reveal direction="left">
               <AntdCard className="rounded-[4rem] p-8 md:p-12 shadow-2xl border-slate-200 dark:border-slate-800">
                 {submitted ? (
                   <div className="py-20 text-center animate-slide-up">
                     <CheckCircleFilled className="text-emerald-500 text-7xl mb-8" />
                     <Title level={3} className="font-black">{t.contactSection.success}</Title>
                     <Button type="link" onClick={() => setSubmitted(false)}>Send another message</Button>
                   </div>
                 ) : (
                   <Form 
                    form={form} 
                    layout="vertical" 
                    onFinish={onFinish} 
                    size="large"
                   >
                     <Row gutter={24}>
                        <Col span={24}>
                          <Form.Item 
                            label={<Text className="text-[10px] font-black uppercase tracking-widest text-slate-500">{t.contactSection.name}</Text>}
                            name="name" 
                            rules={[{ required: true, message: 'Required' }]}
                          >
                            <Input prefix={<UserOutlined />} placeholder={t.contactSection.placeholders.name} className="h-14 rounded-xl" />
                          </Form.Item>
                        </Col>
                        <Col span={24}>
                          <Form.Item 
                            label={<Text className="text-[10px] font-black uppercase tracking-widest text-slate-500">{t.contactSection.org}</Text>}
                            name="organization" 
                            rules={[{ required: true, message: 'Required' }]}
                          >
                            <Input prefix={<BankOutlined />} placeholder={t.contactSection.placeholders.org} className="h-14 rounded-xl" />
                          </Form.Item>
                        </Col>
                        <Col span={24}>
                          <Form.Item 
                            label={<Text className="text-[10px] font-black uppercase tracking-widest text-slate-500">Contact Details</Text>}
                            name="email" 
                            rules={[{ required: true, type: 'email' }]}
                          >
                            <Input prefix={<MailOutlined />} placeholder={t.contactSection.placeholders.email} className="h-14 rounded-xl" />
                          </Form.Item>
                        </Col>
                        <Col span={24}>
                          <Button 
                            type="primary" 
                            htmlType="submit" 
                            loading={loading}
                            block 
                            size="large"
                            icon={<SendOutlined />}
                            className="h-16 rounded-2xl uppercase font-black tracking-widest mt-4"
                          >
                            {t.contactSection.submit}
                          </Button>
                        </Col>
                     </Row>
                   </Form>
                 )}
               </AntdCard>
            </Reveal>
          </Col>
        </Row>
      </div>
    </section>
  );
};
