'use client';

import { useState, useRef, useEffect } from 'react';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      content: '您好！我是张律师的智能助手，很高兴为您服务。我可以为您提供基础的法律咨询和解答。请问有什么法律问题需要帮助吗？',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // 模拟智能回复逻辑
  const getAIResponse = (userMessage) => {
    const message = userMessage.toLowerCase();
    
    // 常见法律问题的自动回复
    const responses = {
      '合同': '关于合同问题，我需要了解更多详情。一般来说，合同纠纷主要涉及：\n\n1. 合同的有效性\n2. 合同条款的解释\n3. 违约责任的认定\n4. 损失的计算\n\n建议您详细描述具体情况，或直接预约张律师进行专业咨询。',
      
      '离婚': '离婚案件涉及的主要问题包括：\n\n1. 夫妻共同财产分割\n2. 子女抚养权归属\n3. 抚养费标准\n4. 债务承担\n\n每个案件情况不同，建议您带齐相关材料，预约张律师面谈，以获得最专业的法律建议。',
      
      '工伤': '工伤认定和赔偿流程：\n\n1. 及时申请工伤认定\n2. 进行劳动能力鉴定\n3. 确定赔偿标准\n4. 与用人单位协商或申请仲裁\n\n工伤案件时效性很重要，建议您尽快咨询专业律师。',
      
      '房产': '房产纠纷常见类型：\n\n1. 买卖合同纠纷\n2. 租赁纠纷\n3. 物业纠纷\n4. 征收拆迁\n\n房产问题涉及金额较大，建议您保留好相关证据材料，及时寻求专业法律帮助。',
      
      '收费': '律师收费标准：\n\n1. 咨询费：200-500元/小时\n2. 代理费：根据案件复杂程度和标的额确定\n3. 常年法律顾问：面议\n\n具体收费会根据案件的复杂程度、时间投入等因素确定，建议您直接咨询了解详细收费标准。',
      
      '预约': '预约咨询很简单：\n\n📞 电话预约：010-12345678\n📧 邮箱预约：lawyer@example.com\n📍 办公地址：北京市朝阳区某某大厦20层\n\n⏰ 工作时间：周一至周五 9:00-18:00\n\n为了更好地为您服务，预约时请简要说明案件性质和咨询需求。'
    };

    // 查找匹配的关键词
    for (const [keyword, response] of Object.entries(responses)) {
      if (message.includes(keyword)) {
        return response;
      }
    }

    // 默认回复
    return '感谢您的咨询。您的问题我已经记录，建议您：\n\n1. 准备相关材料和证据\n2. 预约张律师面谈\n3. 详细描述具体情况\n\n张律师会为您提供专业的法律分析和解决方案。您可以通过电话010-12345678或邮箱lawyer@example.com预约咨询。';
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    const currentMessage = inputMessage;
    setInputMessage('');
    setIsTyping(true);

    try {
      // 调用API获取智能回复
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: currentMessage }),
      });

      const data = await response.json();

      if (data.success) {
        const aiResponse = {
          id: Date.now() + 1,
          type: 'bot',
          content: data.response,
          timestamp: new Date()
        };
        setMessages(prev => [...prev, aiResponse]);
      } else {
        // 如果API失败，使用本地回复
        const aiResponse = {
          id: Date.now() + 1,
          type: 'bot',
          content: getAIResponse(currentMessage),
          timestamp: new Date()
        };
        setMessages(prev => [...prev, aiResponse]);
      }
    } catch (error) {
      // 网络错误时使用本地回复
      console.error('Chat API error:', error);
      const aiResponse = {
        id: Date.now() + 1,
        type: 'bot',
        content: getAIResponse(currentMessage),
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // 快捷问题
  const quickQuestions = [
    '合同纠纷怎么处理？',
    '离婚财产如何分割？',
    '工伤赔偿标准是什么？',
    '律师收费标准如何？',
    '如何预约咨询？'
  ];

  const handleQuickQuestion = (question) => {
    setInputMessage(question);
  };

  // SVG 图标组件
  const MessageIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const CloseIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="18" y1="6" x2="6" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <line x1="6" y1="6" x2="18" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const SendIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="22" y1="2" x2="11" y2="13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <polygon points="22,2 15,22 11,13 2,9 22,2" fill="currentColor"/>
    </svg>
  );

  const BotIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="11" width="18" height="10" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
      <circle cx="12" cy="5" r="2" stroke="currentColor" strokeWidth="2"/>
      <path d="M12 7v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <line x1="8" y1="16" x2="8" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <line x1="16" y1="16" x2="16" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const UserIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
    </svg>
  );

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        >
          <MessageIcon />
        </button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 w-96 h-[600px] bg-white rounded-lg shadow-2xl border border-gray-200 flex flex-col">
      {/* 头部 */}
      <div className="bg-blue-600 text-white p-4 rounded-t-lg flex justify-between items-center">
        <div className="flex items-center gap-2">
          <BotIcon />
          <div>
            <div className="font-semibold">智能法律助手</div>
            <div className="text-xs text-blue-100">张律师事务所</div>
          </div>
        </div>
        <button
          onClick={() => setIsOpen(false)}
          className="hover:bg-blue-700 p-1 rounded"
        >
          <CloseIcon />
        </button>
      </div>

      {/* 消息区域 */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] rounded-lg p-3 ${
                message.type === 'user'
                  ? 'bg-blue-600 text-white rounded-br-none'
                  : 'bg-gray-100 text-gray-800 rounded-bl-none'
              }`}
            >
              <div className="flex items-start gap-2">
                {message.type === 'bot' && <BotIcon />}
                {message.type === 'user' && <UserIcon />}
                <div className="whitespace-pre-line text-sm leading-relaxed">
                  {message.content}
                </div>
              </div>
              <div
                className={`text-xs mt-2 ${
                  message.type === 'user' ? 'text-blue-100' : 'text-gray-500'
                }`}
              >
                {message.timestamp.toLocaleTimeString()}
              </div>
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-gray-100 rounded-lg p-3 rounded-bl-none">
              <div className="flex items-center gap-2">
                <BotIcon />
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* 快捷问题 */}
      {messages.length === 1 && (
        <div className="p-4 border-t border-gray-200">
          <div className="text-sm text-gray-600 mb-2">常见问题：</div>
          <div className="space-y-2">
            {quickQuestions.slice(0, 3).map((question, index) => (
              <button
                key={index}
                onClick={() => handleQuickQuestion(question)}
                className="w-full text-left text-sm p-2 bg-gray-50 hover:bg-gray-100 rounded transition-colors"
              >
                {question}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* 输入区域 */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex gap-2">
          <textarea
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="请输入您的法律问题..."
            className="flex-1 border border-gray-300 rounded-lg p-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={2}
          />
          <button
            onClick={handleSendMessage}
            disabled={!inputMessage.trim() || isTyping}
            className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 text-white p-2 rounded-lg transition-colors"
          >
            <SendIcon />
          </button>
        </div>
        <div className="text-xs text-gray-500 mt-2">
          按 Enter 发送，Shift + Enter 换行
        </div>
      </div>
    </div>
  );
};

export default ChatBot; 