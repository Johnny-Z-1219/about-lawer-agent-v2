'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function LawyerProfile() {

  const lawyerInfo = {
    name: "董丽军",
    title: "专职律师",
    firm: "安徽修实律师事务所",
    experience: "4+年",
    cases: "500+",
    satisfaction: "98%",
    clients: "30+家企业顾问",
    education: [
      {
        period: "2018.9-2020.6",
        degree: "法律硕士",
        school: "安徽师范大学",
        note: "2020年11月通过国家法律职业资格考试"
      },
      {
        period: "2014.9-2018.7",
        degree: "法学学士",
        school: "安徽师范大学",
        note: "法学专业"
      }
    ],
    specialties: [
      "民商事纠纷处理",
      "公司法务及经营风险防范", 
      "合同纠纷",
      "婚姻家庭纠纷",
      "刑事辩护"
    ],
    qualifications: [
      "中华全国律师协会会员",
      "中级律师资格",
      "国家法律职业资格证书",
      "安徽省律师协会会员"
    ]
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
      {/* 左侧：律师信息 */}
      <div>
        <div className="mb-8">
          <h3 className="text-3xl font-bold text-gray-900 mb-2">{lawyerInfo.name}律师</h3>
          <p className="text-xl text-blue-600 font-semibold mb-4">{lawyerInfo.title} · {lawyerInfo.firm}</p>
          <p className="text-gray-700 mb-6 leading-relaxed">
            中华全国律师协会会员，中级律师，具有多年丰富的法律服务经验。毕业于安徽师范大学法学院，
            获得法学硕士学位。专注于民商事纠纷、公司法务、合同纠纷等领域，
            在业界享有良好声誉。
          </p>
        </div>

        {/* 教育背景 */}
        <div className="mb-8">
          <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
            <span className="mr-2">🎓</span>教育背景
          </h4>
          <div className="space-y-4">
            {lawyerInfo.education.map((edu, index) => (
              <div key={index} className="bg-white/70 backdrop-blur-sm p-4 rounded-lg border border-white/50">
                <div className="flex justify-between items-start mb-2">
                  <h5 className="font-semibold text-blue-600">{edu.degree}</h5>
                  <span className="text-sm text-gray-500">{edu.period}</span>
                </div>
                <p className="text-gray-700 font-medium">{edu.school}</p>
                <p className="text-sm text-gray-600 mt-1">{edu.note}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 专业领域 */}
        <div className="mb-8">
          <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
            <span className="mr-2">⚖️</span>专业领域
          </h4>
          <div className="grid grid-cols-1 gap-2">
            {lawyerInfo.specialties.map((specialty, index) => (
              <div key={index} className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                <span className="text-gray-700">{specialty}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 统计数据 */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white/70 backdrop-blur-sm p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-white/50">
            <div className="text-2xl font-bold text-blue-600">{lawyerInfo.experience}</div>
            <div className="text-gray-600">执业年限</div>
          </div>
          <div className="bg-white/70 backdrop-blur-sm p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-white/50">
            <div className="text-2xl font-bold text-blue-600">{lawyerInfo.cases}</div>
            <div className="text-gray-600">成功案例</div>
          </div>
          <div className="bg-white/70 backdrop-blur-sm p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-white/50">
            <div className="text-2xl font-bold text-blue-600">{lawyerInfo.satisfaction}</div>
            <div className="text-gray-600">客户满意度</div>
          </div>
          <div className="bg-white/70 backdrop-blur-sm p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-white/50">
            <div className="text-2xl font-bold text-blue-600">30+</div>
            <div className="text-gray-600">企业顾问</div>
          </div>
        </div>
      </div>

      {/* 右侧：照片和资质 */}
      <div className="space-y-6">
        {/* 律师照片 */}
        <div className="bg-white/60 backdrop-blur-sm rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50 overflow-hidden">
          <div className="relative">
            <Image
              src="/images/lawyer/dong-lijun-profile.jpg"
              alt="董丽军律师"
              width={400}
              height={500}
              className="w-full h-96 object-cover"
              priority
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4">
              <h4 className="text-white font-bold text-lg">董丽军律师</h4>
              <p className="text-white/90 text-sm">安徽修实律师事务所</p>
            </div>
          </div>
        </div>

        {/* 专业资质 */}
        <div className="bg-white/60 backdrop-blur-sm rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50 p-6">
          <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
            <span className="mr-2">📜</span>专业资质
          </h4>
          <div className="space-y-3">
            {lawyerInfo.qualifications.map((qual, index) => (
              <div key={index} className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                <span className="text-gray-700 text-sm">{qual}</span>
              </div>
            ))}
          </div>
          
          {/* 证书展示区域 */}
          <div className="mt-6">
            <h5 className="text-md font-semibold text-gray-900 mb-3 flex items-center">
              <span className="mr-2">🏆</span>执业证书
            </h5>
            <CertificateGallery />
          </div>
        </div>
      </div>
    </div>
  );
}

// 证书展示组件
function CertificateGallery() {
  const [certificates, setCertificates] = useState([]);
  const [selectedCert, setSelectedCert] = useState(null);

  // 预定义的证书信息
  const certificatesInfo = [
    {
      id: 1,
      name: "律师执业证书",
      filename: "lawyer-license.jpg",
      description: "中华人民共和国律师执业证书"
    },
    {
      id: 2,
      name: "法律职业资格证书",
      filename: "legal-qualification.jpg", 
      description: "国家统一法律职业资格证书"
    },
    {
      id: 3,
      name: "律师协会会员证书",
      filename: "bar-membership.jpg",
      description: "安徽省律师协会会员证书"
    }
  ];

  useEffect(() => {
    // 检查证书文件是否存在
    const checkCertificates = async () => {
      const availableCerts = [];
      for (const cert of certificatesInfo) {
        try {
          const response = await fetch(`/images/certificates/${cert.filename}`, { method: 'HEAD' });
          if (response.ok) {
            availableCerts.push(cert);
          }
        } catch (error) {
          // 文件不存在，跳过
        }
      }
      setCertificates(availableCerts);
    };

    checkCertificates();
  }, []);

  return (
    <div>
      {certificates.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="bg-white/50 rounded-lg p-3 border border-white/30 hover:bg-white/70 transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedCert(cert)}
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-blue-50 to-gray-50 rounded-lg mb-2 overflow-hidden">
                <Image
                  src={`/images/certificates/${cert.filename}`}
                  alt={cert.name}
                  width={200}
                  height={150}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h6 className="font-medium text-gray-900 text-sm">{cert.name}</h6>
              <p className="text-xs text-gray-600 mt-1">{cert.description}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="p-6 bg-gradient-to-br from-blue-50 to-gray-50 rounded-lg border-2 border-dashed border-blue-300">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📋</span>
            </div>
            <h6 className="font-semibold text-gray-900 mb-2">执业证书展示</h6>
            <p className="text-gray-600 text-sm mb-4">
              展示专业资质，提升客户信任度
            </p>
            <div className="text-xs text-gray-500 space-y-1">
              <p>📁 上传路径：/public/images/certificates/</p>
              <p>📄 建议文件名：</p>
              <div className="ml-4 space-y-1">
                <p>• lawyer-license.jpg (律师执业证书)</p>
                <p>• legal-qualification.jpg (法律职业资格证书)</p>
                <p>• bar-membership.jpg (律师协会会员证书)</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 证书详情弹窗 */}
      {selectedCert && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setSelectedCert(null)}>
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="p-4 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <h5 className="font-bold text-gray-900">{selectedCert.name}</h5>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="text-gray-400 hover:text-gray-600 text-xl"
                >
                  ×
                </button>
              </div>
              <p className="text-sm text-gray-600 mt-1">{selectedCert.description}</p>
            </div>
            <div className="p-4">
              <Image
                src={`/images/certificates/${selectedCert.filename}`}
                alt={selectedCert.name}
                width={800}
                height={600}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 