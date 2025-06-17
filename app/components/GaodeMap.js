'use client';

import { useEffect, useState } from 'react';

export default function GaodeMap() {
  const [mapLoaded, setMapLoaded] = useState(false);
  const [map, setMap] = useState(null);
  const [isClient, setIsClient] = useState(false);

  // 律所地址信息
  const officeInfo = {
    name: "安徽修实律师事务所",
    address: "安徽省池州市青阳县蓉城镇九华西路194号文化馆二楼",
    phone: "0566-5021766",
    coordinates: [117.852778, 30.639722], // 青阳县精确坐标 (来源：维基数据)
  };

  useEffect(() => {
    // 设置客户端标记
    setIsClient(true);
    
    // 动态加载高德地图 API
    const loadGaodeMap = () => {
      if (window.AMap) {
        initMap();
        return;
      }

      // 由于需要有效的API密钥，这里提供静态地图展示
      // 在生产环境中，请替换为有效的高德地图API密钥
      console.log('高德地图API需要有效密钥，当前显示静态地图');
      setMapLoaded(true);
    };

    const initMap = () => {
      if (!window.AMap) return;

      const mapInstance = new window.AMap.Map('gaode-map-container', {
        zoom: 16,
        center: officeInfo.coordinates,
        mapStyle: 'amap://styles/whitesmoke',
      });

      // 添加标记
      const marker = new window.AMap.Marker({
        position: officeInfo.coordinates,
        title: officeInfo.name,
        map: mapInstance,
      });

      // 添加信息窗体
      const infoWindow = new window.AMap.InfoWindow({
        content: `
          <div style="padding: 10px; font-family: Arial;">
            <h4 style="margin: 0 0 8px 0; color: #1f2937;">${officeInfo.name}</h4>
            <p style="margin: 4px 0; color: #6b7280; font-size: 13px;">📍 ${officeInfo.address}</p>
            <p style="margin: 4px 0; color: #6b7280; font-size: 13px;">📞 ${officeInfo.phone}</p>
            <div style="margin-top: 8px;">
              <button onclick="window.open('https://uri.amap.com/navigation?to=${officeInfo.coordinates[0]},${officeInfo.coordinates[1]}&toname=${encodeURIComponent(officeInfo.name)}&coordinate=gaode')" 
                style="background: #2563eb; color: white; border: none; padding: 4px 8px; border-radius: 4px; font-size: 12px; cursor: pointer;">
                导航到这里
              </button>
            </div>
          </div>
        `,
        offset: new window.AMap.Pixel(0, -30)
      });

      // 点击标记显示信息窗体
      marker.on('click', () => {
        infoWindow.open(mapInstance, marker.getPosition());
      });

      setMap(mapInstance);
      setMapLoaded(true);
    };

    loadGaodeMap();

    return () => {
      if (map) {
        map.destroy();
      }
    };
  }, []);

  // 移除导航功能

  return (
    <div className="bg-white/70 backdrop-blur-sm rounded-lg shadow-lg border border-white/50 overflow-hidden">
      {/* 地图头部信息 */}
      <div className="p-4 bg-gradient-to-r from-blue-50 to-slate-50 border-b border-white/50">
        <h4 className="font-bold text-gray-900 mb-2 flex items-center">
          <span className="mr-2">📍</span>办公地址
        </h4>
        <div className="space-y-1">
          <p className="text-gray-700 font-medium">{officeInfo.name}</p>
          <p className="text-gray-600 text-sm">{officeInfo.address}</p>
          <div className="flex items-center mt-3">
            <a 
              href={`tel:${officeInfo.phone}`}
              className="bg-green-600 text-white px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors flex items-center"
            >
              <span className="mr-1">📞</span>拨打电话
            </a>
          </div>
        </div>
      </div>

      {/* 地图容器 */}
      <div className="relative">
        <div 
          id="gaode-map-container" 
          className="w-full h-64 bg-gray-100"
          style={{ minHeight: '256px' }}
        >
          {!isClient && (
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-50 to-slate-50">
              <div className="text-center">
                <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-gray-600">正在初始化地图...</p>
              </div>
            </div>
          )}
          
          {isClient && mapLoaded && (
            <div className="absolute inset-0 bg-gray-50">
              {/* 高德地图风格的静态地图 */}
              <div className="relative w-full h-full overflow-hidden">
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300">
                  {/* 地图背景 - 高德地图浅色风格 */}
                  <rect width="400" height="300" fill="#f5f5f5"/>
                  
                  {/* 道路系统 */}
                  {/* 九华西路 - 主干道 (东西向) */}
                  <rect x="0" y="140" width="400" height="20" fill="#fbbf24" rx="2"/>
                  <rect x="0" y="148" width="400" height="4" fill="#ffffff" opacity="0.8"/>
                  <text x="20" y="135" fontSize="11" fill="#374151" fontWeight="bold">九华西路</text>
                  
                  {/* 蓉城大道 - 次干道 (南北向) */}
                  <rect x="280" y="0" width="15" height="300" fill="#9ca3af" rx="2"/>
                  <rect x="286" y="0" width="3" height="300" fill="#ffffff" opacity="0.8"/>
                  <text x="300" y="50" fontSize="10" fill="#374151" fontWeight="bold" transform="rotate(90, 300, 50)">蓉城大道</text>
                  
                  {/* 文化路 - 支路 */}
                  <rect x="0" y="80" width="400" height="12" fill="#d1d5db" rx="1"/>
                  <rect x="0" y="84" width="400" height="4" fill="#ffffff" opacity="0.6"/>
                  <text x="320" y="76" fontSize="9" fill="#4b5563">文化路</text>
                  
                  {/* 建设路 - 支路 */}
                  <rect x="120" y="0" width="10" height="300" fill="#d1d5db" rx="1"/>
                  <rect x="123" y="0" width="4" height="300" fill="#ffffff" opacity="0.6"/>
                  <text x="135" y="30" fontSize="9" fill="#4b5563" transform="rotate(90, 135, 30)">建设路</text>
                  
                  {/* 重要建筑物 */}
                  {/* 文化馆 - 律所所在地 */}
                  <rect x="180" y="120" width="60" height="40" fill="#3b82f6" rx="3"/>
                  <rect x="185" y="125" width="50" height="30" fill="#60a5fa" rx="2"/>
                  <text x="210" y="140" textAnchor="middle" fontSize="10" fill="#ffffff" fontWeight="bold">文化馆</text>
                  <text x="210" y="152" textAnchor="middle" fontSize="8" fill="#ffffff">二楼</text>
                  
                  {/* 青阳县政府 */}
                  <rect x="50" y="100" width="50" height="35" fill="#dc2626" rx="3"/>
                  <text x="75" y="118" textAnchor="middle" fontSize="9" fill="#ffffff" fontWeight="bold">县政府</text>
                  
                  {/* 青阳县人民医院 */}
                  <rect x="300" y="180" width="45" height="30" fill="#059669" rx="3"/>
                  <text x="322" y="196" textAnchor="middle" fontSize="9" fill="#ffffff" fontWeight="bold">医院</text>
                  
                  {/* 青阳县第一中学 */}
                  <rect x="320" y="60" width="40" height="30" fill="#7c3aed" rx="3"/>
                  <text x="340" y="76" textAnchor="middle" fontSize="9" fill="#ffffff" fontWeight="bold">一中</text>
                  
                  {/* 商业区 */}
                  <rect x="150" y="200" width="35" height="25" fill="#f59e0b" rx="2"/>
                  <text x="167" y="214" textAnchor="middle" fontSize="8" fill="#ffffff">商业区</text>
                  
                  {/* 住宅小区 */}
                  <rect x="220" y="220" width="40" height="30" fill="#6b7280" rx="2"/>
                  <text x="240" y="236" textAnchor="middle" fontSize="8" fill="#ffffff">住宅区</text>
                  
                  {/* 律所精确位置标记 */}
                  <g transform="translate(210, 140)">
                    {/* 外圈动画效果 */}
                    <circle r="15" fill="#dc2626" opacity="0.2">
                      <animate attributeName="r" values="10;20;10" dur="2s" repeatCount="indefinite"/>
                      <animate attributeName="opacity" values="0.3;0.1;0.3" dur="2s" repeatCount="indefinite"/>
                    </circle>
                    <circle r="10" fill="#dc2626" opacity="0.4">
                      <animate attributeName="r" values="8;12;8" dur="1.5s" repeatCount="indefinite"/>
                    </circle>
                    {/* 主标记 */}
                    <circle r="6" fill="#dc2626"/>
                    <circle r="3" fill="#ffffff"/>
                  </g>
                  
                  {/* 律所名称标签 */}
                  <g transform="translate(210, 170)">
                    <rect x="-55" y="-8" width="110" height="16" fill="#dc2626" rx="8"/>
                    <polygon points="-5,8 0,13 5,8" fill="#dc2626"/>
                    <text x="0" y="2" textAnchor="middle" fontSize="10" fill="#ffffff" fontWeight="bold">
                      安徽修实律师事务所
                    </text>
                  </g>
                  
                  {/* 高德地图风格指南针 */}
                  <g transform="translate(350, 40)">
                    <circle r="18" fill="#ffffff" stroke="#d1d5db" strokeWidth="1.5"/>
                    <circle r="12" fill="#f3f4f6"/>
                    <path d="M 0 -10 L 4 0 L 0 10 L -4 0 Z" fill="#dc2626"/>
                    <text y="4" textAnchor="middle" fontSize="8" fill="#374151" fontWeight="bold">N</text>
                  </g>
                  
                  {/* 比例尺 */}
                  <g transform="translate(20, 250)">
                    <rect x="0" y="0" width="60" height="20" fill="#ffffff" stroke="#d1d5db" strokeWidth="1" rx="2"/>
                    <line x1="5" y1="10" x2="25" y2="10" stroke="#374151" strokeWidth="2"/>
                    <text x="30" y="14" fontSize="9" fill="#374151">100m</text>
                  </g>
                  
                  {/* 地区标识 */}
                  <text x="20" y="30" fontSize="12" fill="#374151" fontWeight="bold">青阳县蓉城镇</text>
                  <text x="20" y="45" fontSize="10" fill="#6b7280">池州市</text>
                </svg>
                
                {/* 信息栏 - 高德地图风格 */}
                <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-gray-200">
                  <div className="p-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-3 h-3 bg-red-600 rounded-full mt-1 flex-shrink-0"></div>
                      <div className="flex-1">
                        <div className="text-sm font-bold text-gray-900">{officeInfo.name}</div>
                        <div className="text-xs text-gray-600 mt-0.5">{officeInfo.address}</div>
                        <div className="flex items-center flex-wrap gap-x-4 gap-y-1 mt-2 text-xs text-gray-500">
                          <span>📍 {officeInfo.coordinates[0]}, {officeInfo.coordinates[1]}</span>
                          <span>🏛️ 文化馆二楼</span>
                          <span>🚗 九华西路194号</span>
                          <span>📞 {officeInfo.phone}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

      </div>

      {/* 交通信息 */}
      <div className="p-4 bg-gray-50/50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">🚗 自驾路线</h5>
            <p className="text-gray-600">从市区出发，沿九华西路行驶至194号文化馆</p>
          </div>
          <div>
            <h5 className="font-semibold text-gray-900 mb-2">🚌 公共交通</h5>
            <p className="text-gray-600">可乘坐公交车至文化馆站下车</p>
          </div>
        </div>
      </div>
    </div>
  );
} 