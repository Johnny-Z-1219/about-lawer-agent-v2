import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "董丽军律师 - 安徽修实律师事务所 | 专业法律服务",
  description: "董丽军律师，安徽修实律师事务所执业律师，专业提供公司法务、合同纠纷、劳动争议、婚姻家庭、刑事辩护等法律服务。位于安徽省池州市青阳县，提供专业、高效的法律咨询和代理服务。",
  keywords: "董丽军律师,安徽修实律师事务所,青阳县律师,池州律师,法律咨询,公司法务,合同纠纷,劳动争议,婚姻家庭,刑事辩护",
  author: "董丽军律师",
  viewport: "width=device-width, initial-scale=1",
  icons: {
    icon: "/lawyer-icon.svg",
    shortcut: "/lawyer-icon.svg",
    apple: "/lawyer-icon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <head>
        <link rel="icon" href="/lawyer-icon.svg" type="image/svg+xml" />
        <link rel="shortcut icon" href="/lawyer-icon.svg" />
        <link rel="apple-touch-icon" href="/lawyer-icon.svg" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="董丽军律师 - 安徽修实律师事务所" />
        <meta property="og:description" content="专业法律服务，提供公司法务、合同纠纷、劳动争议等法律咨询" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/lawyer-icon.svg" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
