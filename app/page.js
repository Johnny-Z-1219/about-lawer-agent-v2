import Image from "next/image";
import Link from "next/link";
import ChatBot from "./components/ChatBot";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 导航栏 */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-gray-900">张律师</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#about" className="text-gray-700 hover:text-blue-600">关于我</Link>
              <Link href="#services" className="text-gray-700 hover:text-blue-600">业务领域</Link>
              <Link href="#experience" className="text-gray-700 hover:text-blue-600">专业经验</Link>
              <Link href="#contact" className="text-gray-700 hover:text-blue-600">联系方式</Link>
              <Link href="#chat" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">智能咨询</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* 英雄区域 */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                专业法律服务
                <br />
                <span className="text-blue-200">值得信赖</span>
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                20年执业经验，专注民商事纠纷、公司法务、合同纠纷等领域。
                为您提供专业、高效的法律解决方案。
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                  立即咨询
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition">
                  查看案例
                </button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-80 h-80 bg-white rounded-full shadow-2xl flex items-center justify-center">
                <div className="w-72 h-72 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-gray-600 text-lg">律师照片</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 关于我 */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">关于我</h2>
            <p className="text-xl text-gray-600">专业执业，诚信服务</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">张明华律师</h3>
              <p className="text-gray-700 mb-4">
                中华全国律师协会会员，具有20年丰富的法律服务经验。毕业于中国政法大学法学院，
                获得法学硕士学位。专注于民商事纠纷、公司法务、合同纠纷等领域。
              </p>
              <p className="text-gray-700 mb-6">
                曾为多家知名企业提供法律顾问服务，处理各类复杂法律案件1000余起，
                在业界享有良好声誉。
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">20+</div>
                  <div className="text-gray-600">执业年限</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">1000+</div>
                  <div className="text-gray-600">成功案例</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">98%</div>
                  <div className="text-gray-600">客户满意度</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">50+</div>
                  <div className="text-gray-600">企业顾问</div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-gray-100 h-96 rounded-lg flex items-center justify-center">
                <span className="text-gray-600">专业资质证书展示</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 业务领域 */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 专业经验 */}
      <section id="experience" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">专业经验</h2>
            <p className="text-xl text-gray-600">丰富的实战经验和专业背景</p>
          </div>
          
          <div className="space-y-8">
            {[
              {
                year: "2004-至今",
                title: "高级合伙人律师",
                company: "北京某知名律师事务所",
                description: "主要负责重大民商事案件、公司法务等业务"
              },
              {
                year: "2000-2004",
                title: "执业律师",
                company: "上海某律师事务所",
                description: "从事各类民事、刑事案件代理工作"
              },
              {
                year: "1998-2000",
                title: "法学硕士",
                company: "中国政法大学",
                description: "民商法学专业，获得法学硕士学位"
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

      {/* 联系方式 */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">联系方式</h2>
            <p className="text-xl text-gray-300">随时为您提供专业法律服务</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="text-xl font-bold mb-2">电话咨询</h3>
              <p className="text-gray-300">010-12345678</p>
              <p className="text-gray-300">138-0000-0000</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">✉️</div>
              <h3 className="text-xl font-bold mb-2">邮箱联系</h3>
              <p className="text-gray-300">lawyer@example.com</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">📍</div>
              <h3 className="text-xl font-bold mb-2">办公地址</h3>
              <p className="text-gray-300">北京市朝阳区</p>
              <p className="text-gray-300">某某大厦20层</p>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
              预约咨询
            </button>
          </div>
        </div>
      </section>

      {/* 页脚 */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2024 张明华律师事务所. 保留所有权利.</p>
        </div>
      </footer>

      {/* 聊天机器人 */}
      <ChatBot />
    </div>
  );
}
