# 高德地图API配置指南

## 📍 当前状态

网站已经集成了高德地图功能，但需要配置API密钥才能正常显示地图。

**当前配置位置**: `app/components/GaodeMap.js` 第25行
```javascript
script.src = 'https://webapi.amap.com/maps?v=1.4.15&key=YOUR_GAODE_API_KEY&callback=initAMap';
```

## 🔑 如何申请高德地图API密钥

### 步骤1：注册高德开放平台账号
1. 访问 [高德开放平台](https://lbs.amap.com/)
2. 点击右上角"注册"或"登录"
3. 使用手机号或邮箱完成注册
4. 完成实名认证（个人认证即可）

### 步骤2：创建应用
1. 登录后进入"控制台"
2. 点击"创建新应用"
3. 填写应用信息：
   - **应用名称**: 董丽军律师网站
   - **应用类型**: Web端（JS API）
   - **应用描述**: 律师事务所官方网站地图服务

### 步骤3：添加Key
1. 在应用管理页面，点击"添加Key"
2. 填写Key信息：
   - **Key名称**: 网站地图服务
   - **服务平台**: Web端（JS API）
   - **域名白名单**: 
     - `localhost` (开发环境)
     - 您的域名 (生产环境，如 `www.donglawyer.com`)

### 步骤4：获取API Key
1. 创建成功后，复制生成的API Key
2. API Key格式类似：`a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6`

## ⚙️ 配置API密钥

### 方法一：直接替换（推荐用于测试）
1. 打开 `app/components/GaodeMap.js` 文件
2. 找到第25行的 `YOUR_GAODE_API_KEY`
3. 替换为您申请的真实API Key：
```javascript
script.src = 'https://webapi.amap.com/maps?v=1.4.15&key=您的真实API密钥&callback=initAMap';
```

### 方法二：使用环境变量（推荐用于生产）
1. 在项目根目录创建 `.env.local` 文件
2. 添加以下内容：
```
NEXT_PUBLIC_GAODE_API_KEY=您的真实API密钥
```
3. 修改 `GaodeMap.js` 文件：
```javascript
script.src = `https://webapi.amap.com/maps?v=1.4.15&key=${process.env.NEXT_PUBLIC_GAODE_API_KEY}&callback=initAMap`;
```

## 🗺️ 配置完成后的效果

配置成功后，网站地图将显示：
- ✅ 交互式高德地图
- ✅ 律师事务所精确位置标记
- ✅ 地址信息弹窗
- ✅ 一键导航功能
- ✅ 路线规划功能

## 🔧 当前状态说明

**即使不配置API密钥，网站依然完美运行：**
- 🛡️ 显示地址信息和联系方式
- 🛡️ 提供导航和电话功能
- 🛡️ 展示交通信息
- 🛡️ 所有其他功能正常

## 📞 配置支持

如果在配置过程中遇到问题：
1. 检查API密钥是否正确复制
2. 确认域名白名单设置
3. 检查网络连接
4. 查看浏览器控制台错误信息

**注意**: 高德地图API个人开发者每日有免费调用次数限制，对于律师网站的访问量来说完全够用。

## 💰 费用说明

- **个人开发者**: 每日免费调用次数充足
- **商业使用**: 根据调用量收费，但律师网站访问量通常在免费范围内
- **申请过程**: 完全免费

配置完成后，您的律师网站将拥有专业的地图导航功能！ 