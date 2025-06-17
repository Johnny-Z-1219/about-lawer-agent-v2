#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { DOMParser } = require('xmldom');

// 验证 sitemap.xml 文件
function validateSitemap() {
  const sitemapPath = path.join(__dirname, '../public/sitemap.xml');
  
  try {
    // 检查文件是否存在
    if (!fs.existsSync(sitemapPath)) {
      console.error('❌ sitemap.xml 文件不存在');
      return false;
    }

    // 读取文件内容
    const content = fs.readFileSync(sitemapPath, 'utf8');
    
    // 解析 XML
    const parser = new DOMParser();
    const doc = parser.parseFromString(content, 'text/xml');
    
    // 检查是否有解析错误
    const errors = doc.getElementsByTagName('parsererror');
    if (errors.length > 0) {
      console.error('❌ sitemap.xml 格式错误:', errors[0].textContent);
      return false;
    }

    // 验证根元素
    const urlset = doc.getElementsByTagName('urlset')[0];
    if (!urlset) {
      console.error('❌ 缺少 urlset 根元素');
      return false;
    }

    // 验证命名空间
    const xmlns = urlset.getAttribute('xmlns');
    if (xmlns !== 'http://www.sitemaps.org/schemas/sitemap/0.9') {
      console.error('❌ 命名空间不正确');
      return false;
    }

    // 验证 URL 元素
    const urls = doc.getElementsByTagName('url');
    if (urls.length === 0) {
      console.error('❌ 没有找到 URL 元素');
      return false;
    }

    console.log('✅ sitemap.xml 验证通过');
    console.log(`📊 共包含 ${urls.length} 个 URL:`);
    
    // 列出所有 URL
    for (let i = 0; i < urls.length; i++) {
      const url = urls[i];
      const loc = url.getElementsByTagName('loc')[0];
      const lastmod = url.getElementsByTagName('lastmod')[0];
      const changefreq = url.getElementsByTagName('changefreq')[0];
      const priority = url.getElementsByTagName('priority')[0];
      
      if (loc) {
        console.log(`  📍 ${loc.textContent}`);
        if (lastmod) console.log(`     📅 最后修改: ${lastmod.textContent}`);
        if (changefreq) console.log(`     🔄 更新频率: ${changefreq.textContent}`);
        if (priority) console.log(`     ⭐ 优先级: ${priority.textContent}`);
      }
    }

    return true;
  } catch (error) {
    console.error('❌ 验证 sitemap.xml 时出错:', error.message);
    return false;
  }
}

// 验证 robots.txt 文件
function validateRobots() {
  const robotsPath = path.join(__dirname, '../public/robots.txt');
  
  try {
    if (!fs.existsSync(robotsPath)) {
      console.error('❌ robots.txt 文件不存在');
      return false;
    }

    const content = fs.readFileSync(robotsPath, 'utf8');
    
    // 检查是否包含 sitemap 引用
    if (!content.includes('Sitemap:')) {
      console.warn('⚠️  robots.txt 中没有 Sitemap 引用');
    }

    console.log('✅ robots.txt 验证通过');
    console.log('📄 robots.txt 内容:');
    console.log(content);

    return true;
  } catch (error) {
    console.error('❌ 验证 robots.txt 时出错:', error.message);
    return false;
  }
}

// 主函数
function main() {
  console.log('🔍 开始验证 SEO 文件...\n');
  
  const sitemapValid = validateSitemap();
  console.log('');
  const robotsValid = validateRobots();
  
  console.log('\n📋 验证结果:');
  console.log(`sitemap.xml: ${sitemapValid ? '✅ 通过' : '❌ 失败'}`);
  console.log(`robots.txt: ${robotsValid ? '✅ 通过' : '❌ 失败'}`);
  
  if (sitemapValid && robotsValid) {
    console.log('\n🎉 所有 SEO 文件验证通过！');
    console.log('💡 建议：');
    console.log('  1. 将网站部署后，在 Google Search Console 中提交 sitemap');
    console.log('  2. 定期更新 sitemap 中的 lastmod 时间');
    console.log('  3. 监控网站在搜索引擎中的索引状态');
  } else {
    console.log('\n❌ 部分文件验证失败，请检查并修复');
    process.exit(1);
  }
}

// 如果直接运行此脚本
if (require.main === module) {
  main();
}

module.exports = { validateSitemap, validateRobots }; 