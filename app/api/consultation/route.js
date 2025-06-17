import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// 创建邮件传输器
const createTransporter = () => {
  // 使用QQ邮箱SMTP服务
  return nodemailer.createTransport({
    host: 'smtp.qq.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER || '2548365492@qq.com', // 董律师的QQ邮箱
      pass: process.env.EMAIL_PASS || '', // 需要设置QQ邮箱授权码
    },
  });
};

// 发送邮件通知
async function sendEmailNotification(consultationData) {
  const transporter = createTransporter();
  
  const { name, phone, consultationType, content, timestamp } = consultationData;
  
  // 发送给律师的邮件
  const lawyerMailOptions = {
    from: process.env.EMAIL_USER || '2548365492@qq.com',
    to: '2548365492@qq.com', // 董律师邮箱
    subject: `🔔 新的在线法律咨询 - ${consultationType}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 10px 10px 0 0;">
          <h2 style="margin: 0; text-align: center;">📋 新的在线法律咨询</h2>
          <p style="margin: 10px 0 0 0; text-align: center; opacity: 0.9;">安徽修实律师事务所官网</p>
        </div>
        
        <div style="background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #e9ecef;">
          <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="color: #495057; margin-top: 0;">👤 咨询人信息</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #6c757d; width: 80px;"><strong>姓名：</strong></td>
                <td style="padding: 8px 0; color: #495057;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6c757d;"><strong>电话：</strong></td>
                <td style="padding: 8px 0; color: #495057;">${phone}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6c757d;"><strong>类型：</strong></td>
                <td style="padding: 8px 0; color: #495057;">${consultationType}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6c757d;"><strong>时间：</strong></td>
                <td style="padding: 8px 0; color: #495057;">${new Date(timestamp).toLocaleString('zh-CN')}</td>
              </tr>
            </table>
          </div>
          
          <div style="background: white; padding: 20px; border-radius: 8px;">
            <h3 style="color: #495057; margin-top: 0;">💬 咨询内容</h3>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 5px; border-left: 4px solid #007bff;">
              <p style="margin: 0; line-height: 1.6; color: #495057; white-space: pre-wrap;">${content}</p>
            </div>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background: #e7f3ff; border-radius: 8px; border-left: 4px solid #007bff;">
            <p style="margin: 0; color: #0056b3;">
              <strong>💡 温馨提示：</strong>请及时回复客户咨询，建议24小时内联系。可直接拨打客户电话或发送回复邮件。
            </p>
          </div>
        </div>
        
        <div style="text-align: center; margin-top: 20px; color: #6c757d; font-size: 12px;">
          <p>此邮件由安徽修实律师事务所官网自动发送</p>
          <p>如有问题，请联系技术支持</p>
        </div>
      </div>
    `,
  };
  
  // 发送给客户的确认邮件（如果客户提供了邮箱）
  // 这里暂时不实现，因为表单中没有邮箱字段
  
  try {
    await transporter.sendMail(lawyerMailOptions);
    return { success: true };
  } catch (error) {
    console.error('邮件发送失败:', error);
    return { success: false, error: error.message };
  }
}

// 微信通知（可选 - 需要企业微信或第三方服务）
async function sendWeChatNotification(consultationData) {
  // 这里可以集成企业微信机器人或其他即时通讯工具
  // 暂时返回成功，实际项目中可以接入微信企业号API
  return { success: true };
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, phone, consultationType, content } = body;
    
    // 验证必填字段
    if (!name || !phone || !consultationType || !content) {
      return NextResponse.json(
        { 
          success: false, 
          error: '请填写所有必填信息',
          details: '姓名、电话、咨询类型和咨询内容都是必填项'
        },
        { status: 400 }
      );
    }
    
    // 验证电话格式
    const phoneRegex = /^1[3-9]\d{9}$/;
    if (!phoneRegex.test(phone)) {
      return NextResponse.json(
        { 
          success: false, 
          error: '请输入正确的手机号码',
          details: '手机号码格式不正确，请检查后重新输入'
        },
        { status: 400 }
      );
    }
    
    const consultationData = {
      name,
      phone,
      consultationType,
      content,
      timestamp: new Date().toISOString(),
      id: `CONSULT_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    };
    
    // 这里可以保存到数据库
    // await saveToDatabase(consultationData);
    console.log('新的咨询提交:', consultationData);
    
    // 发送邮件通知
    const emailResult = await sendEmailNotification(consultationData);
    
    // 发送微信通知（可选）
    const wechatResult = await sendWeChatNotification(consultationData);
    
    return NextResponse.json({
      success: true,
      message: '咨询已成功提交！',
      details: '董律师将在24小时内联系您，请保持电话畅通。',
      consultationId: consultationData.id,
      notifications: {
        email: emailResult.success,
        wechat: wechatResult.success,
      }
    });
    
  } catch (error) {
    console.error('咨询提交处理错误:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: '系统暂时繁忙，请稍后重试',
        details: '如果问题持续存在，请直接拨打电话 0566-5021766'
      },
      { status: 500 }
    );
  }
} 