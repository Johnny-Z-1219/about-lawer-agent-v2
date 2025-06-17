'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const activities = [
  {
    id: 1,
    title: "安徽修实律师事务所",
    subtitle: "专业法律服务机构",
    description: "安徽修实律师事务所成立于2010年，位于安徽省池州市青阳县九华西路194号文化馆二楼。事务所秉承'修身立德，实事求是'的理念，致力于为客户提供专业、高效的法律服务。",
    details: [
      "成立时间：2010年",
      "执业律师：12名专业律师",
      "服务领域：民商事、刑事、行政等全方位法律服务",
      "服务理念：专业、诚信、高效、贴心"
    ],
    tag: "律所背景",
    tagColor: "bg-blue-500"
  },
  {
    id: 2,
    title: "青阳县社区法律服务",
    subtitle: "深入社区，服务民生",
    description: "董丽军律师积极参与青阳县各社区的法律服务工作，为居民提供免费法律咨询，重点解决房产纠纷、邻里纠纷、婚姻家庭等民生法律问题，受到社区居民的一致好评。",
    details: [
      "服务区域：青阳县蓉城镇各社区",
      "服务内容：免费法律咨询、纠纷调解",
      "主要领域：房产、婚姻、劳动、消费者权益",
      "服务方式：定期坐诊、上门服务、电话咨询"
    ],
    tag: "社区服务",
    tagColor: "bg-green-500"
  },
  {
    id: 3,
    title: "企业法律风险防控",
    subtitle: "助力企业健康发展",
    description: "为青阳县中小企业提供专业的法律风险防控服务，包括合同审查、劳动用工指导、知识产权保护等，帮助企业规避法律风险，促进健康发展。",
    details: [
      "服务对象：青阳县中小企业、个体工商户",
      "服务内容：合同管理、用工规范、风险评估",
      "服务形式：法律讲座、专项咨询、常年顾问",
      "服务成果：帮助多家企业完善法律制度"
    ],
    tag: "企业服务",
    tagColor: "bg-purple-500"
  },
  {
    id: 4,
    title: "青少年法制教育",
    subtitle: "关爱青少年健康成长",
    description: "深入青阳县各中小学校，开展法制教育宣传活动，提高学生法律意识和自我保护能力。重点宣传《未成年人保护法》、预防校园欺凌、网络安全等内容。",
    details: [
      "服务对象：青阳县中小学生",
      "宣传内容：未成年人保护、校园安全、网络安全",
      "活动形式：法制讲座、案例分析、互动问答",
      "社会效果：提高学生法律意识，预防青少年犯罪"
    ],
    tag: "校园普法",
    tagColor: "bg-orange-500"
  },
  {
    id: 5,
    title: "法律知识普及宣传",
    subtitle: "提高全民法律素养",
    description: "通过多种渠道开展法律知识普及工作，包括法律咨询、法制宣传、案例解析等，提高青阳县居民的法律意识和维权能力，营造良好的法治环境。",
    details: [
      "宣传方式：现场咨询、网络宣传、媒体普法",
      "重点内容：民法典、婚姻法、劳动法、消费者权益",
      "服务时间：工作日及周末均可提供服务",
      "普法效果：提升全民法律素养，促进社会和谐"
    ],
    tag: "普法宣传",
    tagColor: "bg-cyan-500"
  }
];

export default function ModernCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % activities.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? activities.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % activities.length);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
      <div className="relative h-96">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 p-8 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className={`px-3 py-1 rounded-full text-white text-sm font-medium ${activities[currentIndex].tagColor}`}>
                  {activities[currentIndex].tag}
                </span>
                <div className="text-right text-sm text-gray-500">
                  {currentIndex + 1} / {activities.length}
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {activities[currentIndex].title}
              </h3>
              
              <p className="text-lg text-blue-600 mb-4">
                {activities[currentIndex].subtitle}
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                {activities[currentIndex].description}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {activities[currentIndex].details.map((detail, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-2"
                >
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">{detail}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 导航按钮 */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
      >
        <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
      >
        <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* 指示器 */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {activities.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentIndex
                ? 'bg-blue-500 w-8'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
} 