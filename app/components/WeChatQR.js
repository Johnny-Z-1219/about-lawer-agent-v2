'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function WeChatQR() {
  const [imageError, setImageError] = useState(false);

  const wechatInfo = {
    wechatId: "dlj960322",
    description: "添加微信，免费法律咨询",
    tips: [
      "专业法律问题解答",
      "案件初步评估",
      "法律风险提示",
      "7x24小时在线回复"
    ]
  };

  return (
    <div className="bg-white/70 backdrop-blur-sm rounded-lg shadow-lg border border-white/50 p-6">
      <h4 className="font-bold text-gray-900 mb-4 flex items-center">
        <span className="mr-2">💬</span>微信咨询
      </h4>
      
      {/* 二维码区域 */}
      <div className="text-center mb-6">
        <div className="inline-block bg-white p-4 rounded-lg shadow-sm">
          {!imageError ? (
            <Image
              src="/images/qr-codes/wechat-qr.jpg"
              alt="董丽军律师微信二维码"
              width={200}
              height={200}
              className="mx-auto"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-48 h-48 bg-gradient-to-br from-green-50 to-green-100 flex flex-col items-center justify-center border-2 border-dashed border-green-300 rounded-lg">
              <div className="w-16 h-16 bg-green-200 rounded-full flex items-center justify-center mb-3">
                <span className="text-2xl">📱</span>
              </div>
              <p className="text-green-700 text-sm text-center px-2">
                微信二维码
                <br />
                <span className="text-xs text-green-600">
                  请上传至 /public/images/qr-codes/wechat-qr.jpg
                </span>
              </p>
            </div>
          )}
        </div>
        
        {/* 微信号显示 */}
        <div className="mt-4 bg-gray-50 rounded-lg p-3 inline-block">
          <p className="text-sm text-gray-600 mb-1">微信号</p>
          <div className="flex items-center justify-center space-x-2">
            <span className="font-mono font-bold text-gray-900">{wechatInfo.wechatId}</span>
            <button
              onClick={() => {
                navigator.clipboard.writeText(wechatInfo.wechatId);
                // 这里可以添加复制成功提示
              }}
              className="text-blue-600 hover:text-blue-700 text-sm"
              title="复制微信号"
            >
              📋
            </button>
          </div>
        </div>
      </div>

      {/* 使用说明 */}
      <div className="space-y-3">
        <p className="text-center text-gray-700 font-medium">{wechatInfo.description}</p>
        
        <div className="bg-blue-50/50 rounded-lg p-4">
          <h5 className="font-semibold text-blue-900 mb-3 flex items-center">
            <span className="mr-2">✨</span>免费提供
          </h5>
          <div className="space-y-2">
            {wechatInfo.tips.map((tip, index) => (
              <div key={index} className="flex items-center text-sm">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                <span className="text-blue-800">{tip}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 扫码步骤 */}
        <div className="bg-green-50/50 rounded-lg p-4">
          <h5 className="font-semibold text-green-900 mb-3 flex items-center">
            <span className="mr-2">📲</span>扫码步骤
          </h5>
          <div className="grid grid-cols-1 gap-2 text-sm">
            <div className="flex items-start">
              <span className="bg-green-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">1</span>
              <span className="text-green-800">打开微信扫一扫</span>
            </div>
            <div className="flex items-start">
              <span className="bg-green-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">2</span>
              <span className="text-green-800">扫描上方二维码</span>
            </div>
            <div className="flex items-start">
              <span className="bg-green-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">3</span>
              <span className="text-green-800">添加好友并说明来意</span>
            </div>
          </div>
        </div>
      </div>

      {/* 工作时间提示 */}
      <div className="mt-4 p-3 bg-yellow-50/50 border border-yellow-200 rounded-lg">
        <div className="flex items-center">
          <span className="text-yellow-600 mr-2">⏰</span>
          <div className="flex-1">
            <p className="text-yellow-800 text-sm font-medium">工作时间</p>
            <p className="text-yellow-700 text-xs">周一至周五 9:00-18:00 | 周末及节假日 10:00-16:00</p>
          </div>
        </div>
      </div>
    </div>
  );
} 