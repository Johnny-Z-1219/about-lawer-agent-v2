'use client';

import Image from "next/image";
import Link from "next/link";
import ModernHero from "./components/ModernHero";
import ModernCarousel from "./components/ModernCarousel";
import LawyerProfile from "./components/LawyerProfile";
import GaodeMap from "./components/GaodeMap";
import WeChatQR from "./components/WeChatQR";
import ConsultationForm from "./components/ConsultationForm";
import StructuredData from "./components/StructuredData";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 导航栏 */}
      <nav className="bg-white/80 backdrop-blur-md shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">董律师</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">关于我</Link>
              <Link href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">业务领域</Link>
              <Link href="#public-welfare" className="text-gray-700 hover:text-blue-600 transition-colors">公益普法</Link>
              <Link href="#experience" className="text-gray-700 hover:text-blue-600 transition-colors">专业经验</Link>
              <Link href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">联系方式</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* 现代化英雄区域 */}
      <ModernHero />

      {/* 关于我 */}
      <section id="about" className="relative py-20 bg-gradient-to-br from-gray-50 via-slate-100 to-blue-50 overflow-hidden">
        {/* 背景装饰 */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-cyan-200 rounded-full mix-blend-multiply filter blur-2xl animate-pulse" style={{animationDelay: '3s'}}></div>
          <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-slate-200 rounded-full mix-blend-multiply filter blur-2xl animate-pulse" style={{animationDelay: '5s'}}></div>
        </div>
        {/* 几何装饰线条 */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23334155' fill-opacity='0.1'%3E%3Cpath d='M0 0h80v80H0V0zm20 20v40h40V20H20zm20 35a15 15 0 1 1 0-30 15 15 0 0 1 0 30z' opacity='0.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">关于我</h2>
            <p className="text-xl text-gray-600">专业执业，诚信服务</p>
          </div>
          
          <LawyerProfile />
        </div>
      </section>

      {/* 业务领域 */}
      <section id="services" className="relative py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 overflow-hidden">
        {/* 背景装饰 */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-20 right-10 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-10 left-1/2 w-80 h-80 bg-slate-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{animationDelay: '4s'}}></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">业务领域</h2>
            <p className="text-xl text-gray-600">专业覆盖多个法律领域</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "民商事纠纷",
                description: "合同纠纷、债权债务、侵权责任等民商事案件代理",
                icon: "⚖️"
              },
              {
                title: "公司法务",
                description: "公司设立、股权转让、公司治理、合规咨询",
                icon: "🏢"
              },
              {
                title: "房地产法",
                description: "房屋买卖、租赁纠纷、征收拆迁、物业纠纷",
                icon: "🏠"
              },
              {
                title: "劳动争议",
                description: "劳动合同、工伤赔偿、社保争议、竞业限制",
                icon: "👥"
              },
              {
                title: "刑事辩护",
                description: "刑事案件辩护、取保候审、减刑假释申请",
                icon: "🛡️"
              },
              {
                title: "婚姻家庭",
                description: "离婚纠纷、财产分割、子女抚养、继承纠纷",
                icon: "👨‍👩‍👧‍👦"
              }
            ].map((service, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white/90 border border-white/50">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 律所介绍与公益普法 */}
      <section className="relative py-20 bg-gradient-to-r from-slate-800 via-blue-900 to-slate-700 overflow-hidden">
        {/* 几何背景图案 */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">律所介绍与公益普法</h2>
            <p className="text-xl text-blue-100">专业服务 · 回馈社会 · 普法惠民</p>
          </div>
          <ModernCarousel />
        </div>
      </section>

      {/* 专业经验 */}
      <section id="experience" className="relative py-20 bg-gradient-to-br from-blue-50 via-slate-50 to-cyan-50 overflow-hidden">
        {/* 波浪背景 */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21.184 20c.357-.13.72-.264 1.088-.402l1.768-.661C33.64 15.347 39.647 14 50 14c10.271 0 15.362 1.222 24.629 4.928.955.383 1.869.74 2.75 1.072h6.225c-2.51-.73-5.139-1.691-8.233-2.928C65.888 13.278 60.562 12 50 12c-10.626 0-16.855 1.397-26.66 5.063l-1.767.662c-2.475.923-4.66 1.674-6.724 2.275h6.335zm0-20C13.258 2.892 8.077 4 0 4V2c5.744 0 9.951-.574 14.85-2h6.334zM77.38 0C85.239 2.966 90.502 4 100 4V2c-6.842 0-11.386-.542-16.396-2h-6.225zM0 14c8.44 0 13.718-1.21 22.272-4.402l1.768-.661C33.64 5.347 39.647 4 50 4c10.271 0 15.362 1.222 24.629 4.928C84.112 12.722 89.438 14 100 14v-2c-10.271 0-15.362-1.222-24.629-4.928C65.888 3.278 60.562 2 50 2 39.374 2 33.145 3.397 23.34 7.063l-1.767.662C13.223 10.84 8.163 12 0 12v2z' fill='%236366f1' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`
          }}></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">专业经验</h2>
            <p className="text-xl text-gray-600">丰富的实战经验和专业背景</p>
          </div>
          
          <div className="space-y-8">
            {[
              {
                year: "2020.5-至今",
                title: "专职律师",
                company: "安徽修实律师事务所",
                description: "主要办理民商事案件（精通公司法务及经营风险防范、合同纠纷、婚姻家庭纠纷）、刑事辩护。"
              },
              {
                year: "2018.9-2020.6",
                title: "法律硕士",
                company: "安徽师范大学",
                description: "攻读法律硕士期间2020年11月份通过国家法律职业资格考试"
              },
              {
                year: "2014.9-2018.7",
                title: "法学学士",
                company: "安徽师范大学",
                description: "法学专业，获得法学学位"
              }
            ].map((exp, index) => (
              <div key={index} className="flex flex-col lg:flex-row gap-8 items-start">
                <div className="lg:w-1/4">
                  <div className="bg-blue-600 text-white px-4 py-2 rounded-lg inline-block">
                    {exp.year}
                  </div>
                </div>
                <div className="lg:w-3/4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                  <p className="text-blue-600 font-semibold mb-2">{exp.company}</p>
                  <p className="text-gray-600">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 公益普法展示 */}
      <section id="public-welfare" className="relative py-20 bg-gradient-to-r from-slate-800 via-blue-900 to-slate-700 overflow-hidden">
        {/* 几何背景图案 */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">公益普法活动</h2>
            <p className="text-xl text-blue-100">服务社会 · 普法惠民 · 法治宣传</p>
          </div>
          
          {/* 公益普法图片展示 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                id: 1,
                title: "社区法律讲座",
                description: "深入社区为居民讲解法律知识，提供免费法律咨询服务",
                image: "/images/public-welfare/community-lecture.jpg"
              },
              {
                id: 2,
                title: "企业法律培训",
                description: "为企业员工提供法律风险防控培训，助力企业合规经营",
                image: "/images/public-welfare/enterprise-training.jpg"
              },
              {
                id: 3,
                title: "普法宣传活动",
                description: "参与各类普法宣传活动，传播法治理念，建设法治社会",
                image: "/images/public-welfare/law-promotion.jpg"
              },
              {
                id: 4,
                title: "法律咨询服务",
                description: "定期开展免费法律咨询活动，解答群众法律疑问",
                image: "/images/public-welfare/legal-consultation.jpg"
              }
            ].map((activity) => (
              <div key={activity.id} className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden hover:bg-white/20 transition-all duration-300 border border-white/20">
                <div className="relative h-56 bg-gradient-to-br from-blue-100 to-cyan-100 overflow-hidden">
        <Image
                    src={activity.image}
                    alt={activity.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{activity.title}</h3>
                  <p className="text-blue-100 text-sm leading-relaxed">{activity.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* 公益普法活动简介 */}
          <div className="mt-12 text-center">
            <div className="bg-blue-600/20 backdrop-blur-sm rounded-lg p-6 border border-blue-400/30">
              <h3 className="text-lg font-bold text-white mb-3">🏛️ 公益普法服务</h3>
              <p className="text-blue-100 leading-relaxed max-w-3xl mx-auto">
                董丽军律师积极履行社会责任，长期致力于公益普法事业。通过深入社区、企业开展法律讲座，
                为群众提供免费法律咨询服务，参与各类普法宣传活动，用专业知识服务社会，
                传播法治理念，为建设法治社会贡献力量。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 联系方式 */}
      <section id="contact" className="relative py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
        {/* 动态背景粒子 */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 bg-blue-400 rounded-full mix-blend-overlay filter blur-xl animate-bounce" style={{animationDuration: '3s'}}></div>
          <div className="absolute top-40 right-32 w-24 h-24 bg-cyan-400 rounded-full mix-blend-overlay filter blur-lg animate-bounce" style={{animationDuration: '4s', animationDelay: '1s'}}></div>
          <div className="absolute bottom-40 left-1/3 w-40 h-40 bg-blue-500 rounded-full mix-blend-overlay filter blur-xl animate-bounce" style={{animationDuration: '5s', animationDelay: '2s'}}></div>
          <div className="absolute bottom-20 right-20 w-28 h-28 bg-slate-400 rounded-full mix-blend-overlay filter blur-lg animate-bounce" style={{animationDuration: '3.5s', animationDelay: '0.5s'}}></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">联系方式</h2>
            <p className="text-xl text-blue-100">随时为您提供专业法律服务</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* 联系信息与地图 */}
            <div className="space-y-6">
              {/* 基本联系信息 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <span className="mr-2">📞</span>联系信息
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">📞</span>
                    </div>
                    <div>
                      <p className="text-white font-medium">电话咨询</p>
                      <a href="tel:0566-5021766" className="text-blue-200 hover:text-white transition-colors">0566-5021766</a>
                      <br />
                      <a href="tel:18905665832" className="text-blue-200 hover:text-white transition-colors">18905665832</a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">✉️</span>
                    </div>
                    <div>
                      <p className="text-white font-medium">邮箱联系</p>
                      <a href="mailto:2548365492@qq.com" className="text-blue-200 hover:text-white transition-colors">2548365492@qq.com</a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">⏰</span>
                    </div>
                    <div>
                      <p className="text-white font-medium">工作时间</p>
                      <p className="text-blue-200 text-sm">周一至周五 9:00-18:00</p>
                      <p className="text-blue-200 text-sm">紧急情况可24小时联系</p>
                    </div>
                  </div>
                </div>
                
                {/* 快速咨询按钮 */}
                <div className="mt-6">
                  <button 
                    onClick={() => {
                      if (typeof window !== 'undefined') {
                        const consultForm = document.querySelector('form');
                        if (consultForm) {
                          consultForm.scrollIntoView({ behavior: 'smooth', block: 'center' });
                          setTimeout(() => {
                            const firstInput = consultForm.querySelector('input[type="text"]');
                            if (firstInput) firstInput.focus();
                          }, 500);
                        }
                      }
                    }}
                    className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center space-x-2"
                  >
                    <span>📝</span>
                    <span>在线咨询表单</span>
                  </button>
                </div>
              </div>
              
              {/* 高德地图 */}
              <GaodeMap />
            </div>
            
            {/* 微信二维码 */}
            <WeChatQR />
            
            {/* 在线咨询表单 */}
            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-white/30">
              <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center">
                <span className="mr-2">📝</span>在线咨询
              </h3>
              <p className="text-gray-600 text-sm mb-6">填写表单，获得专业法律建议</p>
              
              <ConsultationForm />
            </div>
          </div>
        </div>
      </section>

      {/* 底部版权 */}
      <footer className="relative bg-gradient-to-r from-slate-900 via-blue-900 to-slate-800 text-white py-8 overflow-hidden">
        {/* 微妙的网格背景 */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2024 董律师法律服务. 版权所有.</p>
          <p className="mt-2 text-blue-200">安徽修实律师事务所 | 专业 · 诚信 · 高效</p>
        </div>
      </footer>

      {/* 结构化数据 */}
      <StructuredData />
    </div>
  );
}
