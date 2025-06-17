'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { TypeAnimation } from 'react-type-animation';
import Image from 'next/image';

const ModernHero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    setIsClient(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // 生成固定的粒子位置，避免hydration错误
  const generateParticles = () => {
    const particles = [];
    for (let i = 0; i < 50; i++) {
      // 使用索引作为种子生成固定位置
      const x = (i * 37) % 100; // 使用质数37避免规律性
      const y = (i * 23) % 100; // 使用质数23避免规律性
      particles.push({
        id: i,
        x: x,
        y: y,
        duration: 3 + (i % 3),
        delay: (i % 5) * 0.4
      });
    }
    return particles;
  };

  // 生成固定的装饰元素位置
  const generateDecorations = () => {
    const decorations = [];
    for (let i = 0; i < 6; i++) {
      const angle = i * 60; // 60度间隔
      const x = 30 + Math.cos(angle * Math.PI / 180) * 180;
      const y = 30 + Math.sin(angle * Math.PI / 180) * 180;
      decorations.push({
        id: i,
        x: x,
        y: y,
        delay: i * 0.3
      });
    }
    return decorations;
  };

  const particles = generateParticles();
  const decorations = generateDecorations();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section 
      ref={ref}
      className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden"
    >
      {/* 动态背景粒子效果 - 只在客户端渲染 */}
      {isClient && (
        <div className="absolute inset-0">
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-20"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                delay: particle.delay,
              }}
            />
          ))}
        </div>
      )}

      {/* 鼠标跟随光效 */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x * 50 + 50}% ${mousePosition.y * 50 + 50}%, rgba(59, 130, 246, 0.15), transparent 70%)`
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full"
        >
          {/* 左侧内容 */}
          <div className="space-y-8">
            <motion.div variants={itemVariants}>
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                专业法律服务
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  值得信赖
                </span>
              </h1>
            </motion.div>

            <motion.div variants={itemVariants} className="text-xl lg:text-2xl text-blue-100">
              <TypeAnimation
                sequence={[
                  '4年执业经验，专注民商事纠纷',
                  2000,
                  '专业公司法务，保驾护航',
                  2000,
                  '合同纠纷处理，维护权益',
                  2000,
                  '值得信赖的法律伙伴',
                  2000,
                ]}
                wrapper="div"
                speed={50}
                repeat={Infinity}
              />
            </motion.div>

            <motion.div variants={itemVariants} className="flex justify-center sm:justify-start">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  if (typeof window !== 'undefined') {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }
                }}
                className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg"
              >
                立即咨询
              </motion.button>
            </motion.div>

            {/* 统计数据 */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-3 gap-6 pt-8"
            >
              {[
                { number: "4+", label: "执业年限" },
                { number: "500+", label: "成功案例" },
                { number: "98%", label: "胜诉率" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <motion.div
                    className="text-3xl font-bold text-blue-400 mb-2"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.5
                    }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-blue-100">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* 右侧CSS动画律师头像 */}
          <motion.div
            variants={floatingVariants}
            animate="animate"
            className="flex justify-center relative"
          >
            <div className="relative">
              {/* 外圈光环效果 */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 blur-lg opacity-30"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                style={{ width: '120%', height: '120%', left: '-10%', top: '-10%' }}
              />
              
              {/* 律师头像容器 */}
              <motion.div
                className="relative w-80 h-80 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full shadow-2xl flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-72 h-72 rounded-full overflow-hidden shadow-inner relative">
                  <Image
                    src="/images/lawyer/dong-lijun-profile.jpg"
                    alt="董丽军律师专业形象"
                    fill
                    className="object-cover"
                    priority
                  />
                  {/* 渐变遮罩 */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                </div>
              </motion.div>

              {/* 装饰性浮动元素 - 只在客户端渲染 */}
              {isClient && decorations.map((decoration) => (
                <motion.div
                  key={decoration.id}
                  className="absolute w-4 h-4 bg-blue-400 rounded-full opacity-60"
                  style={{
                    left: `${decoration.x}px`,
                    top: `${decoration.y}px`,
                  }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: decoration.delay,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* 滚动指示器 */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-blue-400 rounded-full mt-2"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default ModernHero; 