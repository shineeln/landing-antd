
import React, { useState, useRef, useEffect } from 'react';
import { Button, Input, List, Avatar, Card, Space, Typography, Tooltip, Badge } from 'antd';
import { 
  SendOutlined, 
  RobotOutlined, 
  UserOutlined, 
  CloseOutlined, 
  MessageFilled,
  MinusOutlined,
  ThunderboltFilled,
  LoadingOutlined
} from '@ant-design/icons';
import { GoogleGenAI } from "@google/genai";
import { i18n, Language } from './i18n';

const { Text } = Typography;

// Fix for JSX element type 'Card' does not have any construct or call signatures
const AntdCard = Card as any;

interface Message {
  role: 'user' | 'model';
  text: string;
}

interface ChatBotProps {
  lang: Language;
  theme: 'light' | 'dark';
}

export const ChatBot: React.FC<ChatBotProps> = ({ lang, theme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: lang === 'mn' ? 'Сайн байна уу! DebtPro системийн талаар асуух зүйл байна уу?' : 'Hello! How can I help you with TND DebtPro today?' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDark = theme === 'dark';

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage = inputValue;
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setInputValue('');
    setIsLoading(true);

    try {
      // Initialize GoogleGenAI using the apiKey named parameter from process.env.API_KEY
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const systemInstruction = `You are the TND DebtPro AI Assistant. Use the following context about the system to answer user queries professionally.
      
      Context from TND DebtPro Requirements:
      - Purpose: Simplified loan recovery and NPL management CRM for Banks and NBFIs.
      - Core Features: Data import from Polaris (core banking), CallPro integration (automated calls/SMS), smart loan allocation, and legal workflow automation.
      - User Roles:
        1. Supervisor/Manager: Full access, manual/auto allocation rights, report monitoring.
        2. Agent: Only sees assigned loans, logs actions (SMS, calls, visits), timeline tracking.
        3. Auditor/Legal: View-only access for monitoring.
      - Allocation Rules: Loans are split between "Recovery Specialists" (<60 days overdue) and "Special Asset Specialists" (60+ days overdue). System balances by count, balance, and product type (Auto, Online, Consumer, etc.).
      - Borrower 360: Includes detailed profile, family links, payment schedules, bank statements, and collateral info (cars, houses).
      - Timeline: CRM V2 launch June 2025; DebtPro TND V1 launch Nov 2025.
      - Language: Respond in the language the user is speaking (${lang}). Be concise and helpful.`;

      // Call generateContent with the model name and contents including history
      const response = await ai.models.generateContent({
        model: 'gemini-3-pro-preview',
        contents: messages.concat({ role: 'user', text: userMessage }).map(m => ({
          role: m.role,
          parts: [{ text: m.text }]
        })),
        config: {
          systemInstruction,
          temperature: 0.7,
        }
      });

      // Extract generated text directly using the .text property
      const modelText = response.text || (lang === 'mn' ? "Уучлаарай, хариулахад алдаа гарлаа." : "Sorry, I couldn't process that.");
      setMessages(prev => [...prev, { role: 'model', text: modelText }]);
    } catch (error) {
      console.error("Gemini Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: lang === 'mn' ? "Холболтын алдаа гарлаа." : "Connection error." }]);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-8 right-8 z-[1000] animate-bounce-slow">
        <Badge dot color="#2563eb" offset={[-5, 5]}>
          <Button 
            type="primary" 
            shape="circle" 
            size="large" 
            icon={<MessageFilled style={{ fontSize: 24 }} />}
            className="w-16 h-16 shadow-2xl flex items-center justify-center hover:scale-110 transition-transform"
            onClick={() => setIsOpen(true)}
          />
        </Badge>
      </div>
    );
  }

  return (
    <div 
      className={`fixed bottom-8 right-8 z-[1000] flex flex-col transition-all duration-300 transform origin-bottom-right
        ${isMinimized ? 'h-16 w-64' : 'h-[500px] w-[350px] md:w-[400px]'}`}
    >
      <AntdCard 
        className={`h-full flex flex-col overflow-hidden shadow-2xl border ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}
        styles={{ body: { padding: 0, height: '100%', display: 'flex', flexDirection: 'column' } }}
      >
        {/* Header */}
        <div className={`p-4 flex items-center justify-between border-b ${isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-blue-600 border-blue-500'}`}>
          <div className="flex items-center gap-3">
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${isDark ? 'bg-blue-500/20 text-blue-400' : 'bg-white/20 text-white'}`}>
              <RobotOutlined />
            </div>
            <div>
              <div className={`text-xs font-black uppercase tracking-widest ${isDark ? 'text-white' : 'text-white'}`}>DebtPro AI</div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className={`text-[8px] font-bold uppercase ${isDark ? 'text-slate-400' : 'text-blue-100'}`}>Online Support</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <Button 
              type="text" 
              size="small" 
              icon={isMinimized ? <ThunderboltFilled /> : <MinusOutlined />} 
              className="text-white hover:bg-white/10"
              onClick={() => setIsMinimized(!isMinimized)}
            />
            <Button 
              type="text" 
              size="small" 
              icon={<CloseOutlined />} 
              className="text-white hover:bg-white/10"
              onClick={() => setIsOpen(false)}
            />
          </div>
        </div>

        {!isMinimized && (
          <>
            {/* Chat Area */}
            <div 
              ref={scrollRef}
              className={`flex-1 p-4 overflow-y-auto no-scrollbar space-y-4 ${isDark ? 'bg-slate-900' : 'bg-slate-50'}`}
            >
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-content-entrance`}>
                  <div className={`flex gap-2 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                    <Avatar 
                      size="small" 
                      icon={msg.role === 'user' ? <UserOutlined /> : <RobotOutlined />} 
                      className={msg.role === 'user' ? 'bg-blue-600' : 'bg-slate-500'}
                    />
                    <div className={`p-3 rounded-2xl text-xs font-medium leading-relaxed shadow-sm
                      ${msg.role === 'user' 
                        ? 'bg-blue-600 text-white rounded-tr-none' 
                        : (isDark ? 'bg-slate-800 text-slate-200 rounded-tl-none border border-slate-700' : 'bg-white text-slate-800 rounded-tl-none border border-slate-100')
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start animate-pulse">
                  <div className="flex gap-2 items-center">
                    <Avatar size="small" icon={<RobotOutlined />} className="bg-slate-500" />
                    <div className={`p-3 rounded-2xl text-[10px] font-black uppercase tracking-widest ${isDark ? 'bg-slate-800 text-slate-400' : 'bg-white text-slate-400'}`}>
                      <LoadingOutlined className="mr-2" /> Thinking...
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input Area */}
            <div className={`p-4 border-t ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-100'}`}>
              <Space.Compact className="w-full">
                <Input 
                  placeholder={lang === 'mn' ? 'Асуултаа бичнэ үү...' : 'Type your question...'}
                  value={inputValue}
                  onChange={e => setInputValue(e.target.value)}
                  onPressEnter={handleSend}
                  className={`h-11 rounded-l-xl ${isDark ? 'bg-slate-800 border-slate-700 text-white' : 'bg-slate-50 border-slate-200'}`}
                />
                <Button 
                  type="primary" 
                  className="h-11 w-12 flex items-center justify-center rounded-r-xl"
                  onClick={handleSend}
                  disabled={isLoading}
                  icon={<SendOutlined />}
                />
              </Space.Compact>
              <div className="mt-2 text-center">
                <Text className="text-[8px] font-bold text-slate-500 uppercase tracking-tighter">
                  Powered by Gemini 3 Pro
                </Text>
              </div>
            </div>
          </>
        )}
      </AntdCard>
    </div>
  );
};
