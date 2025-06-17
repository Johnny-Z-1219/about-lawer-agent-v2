'use client';

import { useState } from 'react';

const ConsultationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    consultationType: '',
    content: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitResult(null);

    try {
      const response = await fetch('/api/consultation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitResult({
          type: 'success',
          message: result.message,
          details: result.details,
          consultationId: result.consultationId
        });
        // 清空表单
        setFormData({
          name: '',
          phone: '',
          consultationType: '',
          content: ''
        });
      } else {
        setSubmitResult({
          type: 'error',
          message: result.error,
          details: result.details
        });
      }
    } catch (error) {
      console.error('提交错误:', error);
      setSubmitResult({
        type: 'error',
        message: '网络错误，请稍后重试',
        details: '如果问题持续存在，请直接拨打电话 0566-5021766'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {submitResult && (
        <div className={`mb-6 p-4 rounded-lg border ${
          submitResult.type === 'success' 
            ? 'bg-green-50 border-green-200 text-green-800' 
            : 'bg-red-50 border-red-200 text-red-800'
        }`}>
          <div className="flex items-start">
            <span className="mr-2 text-lg">
              {submitResult.type === 'success' ? '✅' : '❌'}
            </span>
            <div>
              <p className="font-semibold">{submitResult.message}</p>
              {submitResult.details && (
                <p className="text-sm mt-1 opacity-90">{submitResult.details}</p>
              )}
              {submitResult.consultationId && (
                <p className="text-xs mt-2 opacity-75">
                  咨询编号：{submitResult.consultationId}
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
              <span className="mr-1">👤</span>姓名 <span className="text-red-500 ml-1">*</span>
            </label>
            <input 
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="请输入您的姓名"
              required
              disabled={isSubmitting}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all hover:border-gray-400 disabled:bg-gray-100" 
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
              <span className="mr-1">📱</span>联系电话 <span className="text-red-500 ml-1">*</span>
            </label>
            <input 
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="请输入您的手机号"
              required
              disabled={isSubmitting}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all hover:border-gray-400 disabled:bg-gray-100" 
            />
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
            <span className="mr-1">📂</span>咨询类型 <span className="text-red-500 ml-1">*</span>
          </label>
          <select 
            name="consultationType"
            value={formData.consultationType}
            onChange={handleInputChange}
            required
            disabled={isSubmitting}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all hover:border-gray-400 bg-white disabled:bg-gray-100"
          >
            <option value="">请选择咨询类型</option>
            <option value="民商事纠纷">📋 民商事纠纷</option>
            <option value="公司法务">🏢 公司法务</option>
            <option value="房地产法">🏠 房地产法</option>
            <option value="劳动争议">👥 劳动争议</option>
            <option value="刑事辩护">🛡️ 刑事辩护</option>
            <option value="婚姻家庭">👨‍👩‍👧‍👦 婚姻家庭</option>
            <option value="其他">🔍 其他法律问题</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
            <span className="mr-1">💬</span>咨询内容 <span className="text-red-500 ml-1">*</span>
          </label>
          <textarea 
            rows="4"
            name="content"
            value={formData.content}
            onChange={handleInputChange}
            placeholder="请详细描述您的法律问题，包括具体情况、时间、涉及金额等，以便律师更好地为您提供建议..."
            required
            disabled={isSubmitting}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none hover:border-gray-400 disabled:bg-gray-100"
          ></textarea>
          <p className="text-xs text-gray-500 mt-1">* 您的信息将严格保密</p>
        </div>
        
        <div className="bg-blue-50 p-4 rounded-lg">
          <h5 className="font-medium text-blue-900 mb-2 flex items-center">
            <span className="mr-1">✨</span>服务承诺
          </h5>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-blue-800">
            <div className="flex items-center">
              <span className="mr-1">⚡</span>24小时内回复
            </div>
            <div className="flex items-center">
              <span className="mr-1">🔒</span>信息严格保密
            </div>
            <div className="flex items-center">
              <span className="mr-1">💰</span>首次咨询免费
            </div>
            <div className="flex items-center">
              <span className="mr-1">👨‍💼</span>专业律师解答
            </div>
          </div>
        </div>
        
        <button 
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-4 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center space-x-2 disabled:from-gray-400 disabled:to-gray-500 disabled:transform-none disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span>提交中...</span>
            </>
          ) : (
            <>
              <span>📤</span>
              <span>立即提交咨询</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default ConsultationForm; 