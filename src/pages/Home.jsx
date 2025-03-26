import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  // 主要服务数据
  const mainServices = [
    {
      id: 1,
      title: '变桨系统维护',
      description: '提供专业的风力发电机变桨系统检测、维修和保养服务，确保设备稳定运行。',
      icon: (
        <svg className="w-10 h-10 text-[#3A5F4B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      id: 2,
      title: '偏航系统维护',
      description: '专注于风力发电机偏航系统的检修与维护，保障发电机组高效运转。',
      icon: (
        <svg className="w-10 h-10 text-[#3A5F4B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      id: 3,
      title: '轴承维护',
      description: '提供风力发电机轴承的检测、维修和更换服务，延长设备使用寿命。',
      icon: (
        <svg className="w-10 h-10 text-[#3A5F4B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
    },
  ];

  return (
    <div>
      {/* 英雄区域 - 修改为全屏显示 */}
      <div className="relative h-screen overflow-hidden">
        {/* 背景图片 - 使用您自己的图片 */}
        <div 
          className="absolute inset-0 z-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.1)), url('/assets/images/home-hero.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        
        {/* 内容 */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-5 drop-shadow-lg">继风前行，智享风能未来</h1>
              <p className="text-lg md:text-2xl text-white mb-8 drop-shadow-md">以专业守护风电，用科技赋能未来</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* 主要服务区域 */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">我们的服务</h2>
            <p className="mt-4 text-base text-gray-600 max-w-3xl mx-auto">
              提供专业的风力发电设备维护与技术支持，为您的风电场保驾护航
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-base text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#3A5F4B] hover:bg-[#2A4A3B] transition-colors duration-200"
            >
              查看更多服务
              <svg className="ml-2 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* 关于我们区域 */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">关于我们</h2>
              <p className="text-base text-gray-600 mb-6">
                上海继风新能源有限公司是一家专注于风力发电设备维护和技术服务的企业。我们拥有经验丰富的专业团队，致力于为客户提供全方位的风电设备维护解决方案。
              </p>
              <p className="text-base text-gray-600 mb-6">
                公司业务涵盖风力发电机组变桨系统、偏航系统、轴承系统的检测、维修与保养，以及风电场运维管理等服务，全面提升风电场的运行效率和安全性。
              </p>
              <Link
                to="/about"
                className="inline-flex items-center text-base text-[#3A5F4B] hover:text-[#2A4A3B] transition-colors duration-200"
              >
                了解更多
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="lg:w-1/2">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/assets/images/home-about.jpg" 
                  alt="风力发电场" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;