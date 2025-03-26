import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Services = () => {
  // 服务数据 - 已更新为新的业务范围
  const services = [
    {
      id: 1,
      title: '变桨系统维护',
      description: '变桨系统是风力发电机组的关键部件，我们提供全面的检测、维修和保养服务，包括变桨电机检修、变桨轴承更换、控制系统故障诊断等。',
      category: '变桨系统'
    },
    {
      id: 2,
      title: '变桨轴承更换',
      description: '专业更换风力发电机组的变桨轴承，恢复设备正常运行。我们拥有专业的更换工具和经验丰富的技术人员，确保更换过程的安全和效率。',
      category: '变桨系统'
    },
    {
      id: 3,
      title: '变桨控制系统检修',
      description: '对风力发电机组的变桨控制系统进行全面检测和维修，排除系统故障，优化控制参数，提高系统的可靠性和响应速度。',
      category: '变桨系统'
    },
    {
      id: 4,
      title: '变桨电机和变桨齿轮箱双平键改造',
      description: '针对风力发电机组变桨电机和齿轮箱连接处的平键进行双平键改造，提高连接强度和稳定性，有效降低故障率，延长设备寿命。',
      category: '变桨系统'
    },
    {
      id: 5,
      title: '变桨轴承清洗',
      description: '采用专业设备和技术对风力发电机组的变桨轴承进行深度清洗，去除污垢和杂质，保障轴承的正常运转和使用寿命。',
      category: '变桨系统'
    },
    {
      id: 6,
      title: 'MOOG变桨电机维护&维修',
      description: '专业提供MOOG品牌变桨电机的维护与维修服务，包括电机拆解、检测、零部件更换与维修、性能测试等全套服务。',
      category: '变桨系统'
    },
    {
      id: 7,
      title: '偏航系统维护',
      description: '偏航系统负责调整风轮朝向，我们提供偏航制动器检修、偏航驱动电机维护、偏航轴承检测等服务，确保偏航系统的正常运行。',
      category: '偏航系统'
    },
    {
      id: 8,
      title: '偏航制动器维修',
      description: '专业维修风力发电机组的偏航制动器，调整制动力矩，更换制动片，确保制动系统可靠工作，防止偏航系统失控。',
      category: '偏航系统'
    },
    {
      id: 9,
      title: '偏航齿轮检测与更换',
      description: '对风力发电机组的偏航齿轮进行磨损检测、润滑状态评估和必要的更换，保障偏航系统的平稳运行。',
      category: '偏航系统'
    },
    {
      id: 10,
      title: '偏航系统热继整改',
      description: '针对风力发电机组偏航系统热继电器存在的问题进行整改，提高系统的稳定性和安全性，减少因热继电器故障导致的停机时间。',
      category: '偏航系统'
    },
    {
      id: 11,
      title: '偏航系统滑移整改',
      description: '对风力发电机组偏航系统滑移问题进行专业整改，消除滑移隐患，提高系统定位精度，确保风机高效运行。',
      category: '偏航系统'
    },
    {
      id: 12,
      title: '偏航变桨大齿轮焊接修复',
      description: '采用专业的焊接技术对偏航和变桨系统的大齿轮进行修复，恢复齿轮的工作性能，延长使用寿命，降低更换成本。',
      category: '偏航系统'
    },
    {
      id: 13,
      title: '偏航/变桨齿轮箱更换',
      description: '提供风力发电机组偏航和变桨齿轮箱的专业更换服务，包括拆卸、安装、调试等全过程服务，确保更换后系统运行稳定。',
      category: '偏航系统'
    },
    {
      id: 14,
      title: 'JHS铜杯式摩擦片国产化',
      description: '提供JHS铜杯式摩擦片的国产化替代方案，保证品质的同时降低成本，为客户提供更经济的选择。',
      category: '偏航系统'
    },
    {
      id: 15,
      title: '偏航刹车盘修复',
      description: '专业对风力发电机组偏航系统的刹车盘进行修复，包括平面度校正、表面加工和性能测试，恢复刹车盘性能，提高制动效果。',
      category: '偏航系统'
    },
    {
      id: 16,
      title: '主轴承维护',
      description: '主轴承是风力发电机组的核心部件，我们提供专业的检测、维修和更换服务，延长轴承使用寿命，提高设备的可靠性。',
      category: '轴承维护'
    },
    {
      id: 17,
      title: '轴承润滑系统维护',
      description: '为风力发电机组的各类轴承提供润滑系统的检测、清洗和维护，确保润滑充分，减少轴承磨损，延长设备使用寿命。',
      category: '轴承维护'
    },
    {
      id: 18,
      title: '主轴承清洗',
      description: '采用专业设备和工艺对风力发电机组的主轴承进行清洗，去除积累的污垢和异物，恢复轴承的正常工作状态，延长使用寿命。',
      category: '轴承维护'
    },
    {
      id: 19,
      title: '发电机轴承过温整改',
      description: '针对风力发电机轴承过温问题进行专业整改，包括散热系统优化、润滑系统改进等，有效降低轴承工作温度，提高安全性。',
      category: '轴承维护'
    },
    {
      id: 20,
      title: '主轴承加装低成本单点自动润滑',
      description: '为风力发电机组主轴承加装低成本、高效率的单点自动润滑系统，实现润滑过程自动化，降低维护成本，提高润滑效果。',
      category: '轴承维护'
    },
    {
      id: 21,
      title: '风电场运维管理',
      description: '提供风电场的整体运行维护管理服务，包括设备定期检测、故障诊断、性能评估和维护计划制定，确保风电场的高效运行。',
      category: '维修服务'
    },
    {
      id: 22,
      title: '螺栓智能监控系统整改',
      description: '对风力发电机组螺栓智能监控系统进行整改，提高监控精度和可靠性，实时监测螺栓松动情况，及时发现安全隐患。',
      category: '维修服务'
    },
    {
      id: 23,
      title: '叶片螺栓更换',
      description: '专业提供风力发电机组叶片螺栓的检测、更换服务，确保螺栓连接牢固，消除安全隐患，保障设备安全运行。',
      category: '维修服务'
    },
    {
      id: 24,
      title: '运维用零配件及油脂类供应',
      description: '提供风力发电机组运维所需的各类零配件和专用油脂产品，包括轴承、齿轮、电机、传感器以及专业润滑油脂等，确保配件质量和供应及时性。',
      category: '维修服务'
    }
  ];

  // 服务类别
  const categories = ['变桨系统', '偏航系统', '轴承维护', '维修服务'];
  
  // 当前展开的类别
  const [expandedCategory, setExpandedCategory] = useState(null);
  // 视差滚动效果
  const [scrollY, setScrollY] = useState(0);
  
  // 监听滚动事件
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 切换类别的展开状态
  const toggleCategory = (category) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  // 按类别分组服务
  const servicesByCategory = categories.reduce((groups, category) => {
    groups[category] = services.filter(service => service.category === category);
    return groups;
  }, {});

  // 类别图标
  const categoryIcons = {
    '变桨系统': (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#3A5F4B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    '偏航系统': (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#3A5F4B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    '轴承维护': (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#3A5F4B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
    '维修服务': (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#3A5F4B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
      </svg>
    )
  };

  return (
    <div className="overflow-x-hidden">
      {/* 英雄区域 - 带视差效果 */}
      <div className="relative h-screen overflow-hidden">
        {/* 背景图片 - 视差效果 */}
        <div 
          className="absolute inset-0 z-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url('/assets/images/services-hero.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: `translateY(${scrollY * 0.4}px)`
          }}
        ></div>
        
        {/* 悬浮云朵效果 */}
        <div 
          className="absolute top-20 left-10 w-64 h-64 opacity-30 bg-contain bg-no-repeat"
          style={{
            backgroundImage: `url('/assets/images/cloud1.png')`,
            transform: `translateX(${scrollY * 0.2}px)`,
            display: 'none' // 如果没有云朵图片，可以隐藏
          }}
        ></div>

        <div 
          className="absolute bottom-40 right-10 w-48 h-48 opacity-30 bg-contain bg-no-repeat"
          style={{
            backgroundImage: `url('/assets/images/cloud2.png')`,
            transform: `translateX(-${scrollY * 0.15}px)`,
            display: 'none' // 如果没有云朵图片，可以隐藏
          }}
        ></div>
        
        {/* 内容 */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center px-4 sm:px-6 lg:px-8"
            style={{
              transform: `translateY(-${scrollY * 0.2}px)`
            }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">业务范围</h1>
            <p className="text-lg md:text-2xl text-white max-w-4xl mx-auto drop-shadow-md">
              提供全方位的风力发电设备维护解决方案，助力风电场高效安全运行
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8"
            >
              <a 
                href="#services" 
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#3A5F4B] hover:bg-[#2A4F3B] transition-colors duration-300"
              >
                了解更多服务
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* 服务类别卡片 - 添加ID以便锚点导航 */}
      <div id="services" className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 标题 */}
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              我们的服务类别
            </motion.h2>
            <motion.div 
              className="h-1 w-20 bg-[#3A5F4B] mx-auto"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            ></motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <motion.div 
                key={category} 
                className="flex flex-col"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div 
                  className={`bg-white rounded-xl shadow-md overflow-hidden cursor-pointer flex-grow transition-all duration-300
                    ${expandedCategory === category ? 'ring-2 ring-[#3A5F4B] shadow-lg' : 'hover:shadow-xl hover:translate-y-[-5px]'}`}
                  onClick={() => toggleCategory(category)}
                >
                  <div className="p-8">
                    <div className="flex flex-col items-center mb-4">
                      {categoryIcons[category]}
                      <h2 className="text-xl font-bold text-gray-900 mt-4">{category}</h2>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-sm text-gray-500">
                        {servicesByCategory[category]?.length || 0} 项专业服务
                      </p>
                      <span className={`text-[#3A5F4B] transition-transform duration-300 ${expandedCategory === category ? 'rotate-180' : ''}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* 展开的服务列表 */}
                <AnimatePresence>
                  {expandedCategory === category && (
                    <motion.div
                      initial={{ opacity: 0, height: 0, y: -10 }}
                      animate={{ opacity: 1, height: 'auto', y: 0 }}
                      exit={{ opacity: 0, height: 0, y: -10 }}
                      transition={{ duration: 0.4 }}
                      className="bg-white mt-4 rounded-xl shadow-md p-6 border-t-4 border-[#3A5F4B]"
                    >
                      <ul className="space-y-4">
                        {servicesByCategory[category].map((service, serviceIndex) => (
                          <motion.li 
                            key={service.id} 
                            className="border-b border-gray-100 pb-4 last:border-0 last:pb-0"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: serviceIndex * 0.05 }}
                          >
                            <h3 className="text-md font-semibold text-gray-900 mb-2">{service.title}</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">{service.description}</p>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* 服务流程 - 视差背景 */}
      <div 
        className="relative py-24 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url('/assets/images/process-bg.jpg')`,
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              服务流程
            </motion.h2>
            <motion.div 
              className="h-1 w-20 bg-[#3A5F4B] mx-auto mb-6"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            ></motion.div>
            <p className="mt-4 text-base text-gray-600 max-w-3xl mx-auto">
              我们的标准服务流程，确保每个项目都得到高质量的执行
            </p>
          </div>

          <div className="relative">
            {/* 流程线 */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-[#3A5F4B]/20 transform -translate-y-1/2 rounded-full"></div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: 1, title: '需求评估', description: '深入了解客户需求，对设备进行初步评估' },
                { step: 2, title: '方案制定', description: '根据评估结果，制定个性化的维护方案' },
                { step: 3, title: '实施维护', description: '专业团队按照方案进行设备维护工作' },
                { step: 4, title: '效果验证', description: '维护完成后，对设备进行测试，确保性能达标' }
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative"
                  style={{
                    transform: `translateY(${scrollY * 0.02 * (index % 2 === 0 ? 1 : -1)}px)`
                  }}
                >
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-[#3A5F4B] text-white flex items-center justify-center text-xl font-bold mb-5 shadow-lg">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-center text-base text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 联系我们 - 带渐变背景 */}
      <div className="py-16 bg-gradient-to-br from-[#3A5F4B]/90 to-[#2A4F3B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">需要专业风电维护服务？</h2>
            <p className="text-lg text-white/80 mb-8 max-w-3xl mx-auto">
              立即联系我们，获取专业的风电设备维护解决方案
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-[#3A5F4B] bg-white hover:bg-gray-100 transition-colors duration-300"
            >
              联系我们
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Services;