import React, { useState } from 'react';
import { motion } from 'framer-motion';

const About = () => {
  // 选中的优势项
  const [selectedAdvantage, setSelectedAdvantage] = useState(0);
  
  // 选中的历史项
  const [selectedHistory, setSelectedHistory] = useState(null);

  // 公司优势
  const advantages = [
    {
      id: 1,
      title: '专业团队',
      shortDesc: '拥有经验丰富的工程师团队',
      icon: (
        <svg className="w-9 h-9 text-[#3A5F4B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      fullDesc: '我们拥有一支经验丰富的专业工程师团队，每位工程师都具备深厚的风电技术知识和丰富的实践经验。团队成员定期参加专业培训和技术研讨，掌握最新的风电技术和行业标准，能够为客户提供最专业的技术服务和解决方案。'
    },
    {
      id: 2,
      title: '优质服务',
      shortDesc: '提供全天候的技术支持和服务',
      icon: (
        <svg className="w-9 h-9 text-[#3A5F4B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      fullDesc: '我们致力于为客户提供优质的服务体验，建立了完善的服务流程和质量管理体系。公司提供全天候的技术支持和应急响应服务，确保客户的设备问题能够得到及时解决。我们注重与客户的沟通，深入了解客户需求，提供个性化的服务方案，让客户满意度始终保持在高水平。'
    },
    {
      id: 3,
      title: '技术创新',
      shortDesc: '持续研发创新技术和解决方案',
      icon: (
        <svg className="w-9 h-9 text-[#3A5F4B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      fullDesc: '技术创新是我们保持竞争力的核心。公司设立了专门的研发团队，持续研发风电设备维护的新技术和解决方案。我们与国内外风电技术机构保持紧密合作，引进先进的检测设备和维修工艺，不断提升服务能力和技术水平，为客户提供更高效、更可靠的风电设备维护服务。'
    }
  ];

  // 发展历程
  const history = [
    {
      year: 2020,
      title: '公司成立',
      description: '上海继风新能源有限公司正式成立，开始专注于风力发电设备的维护与技术服务。'
    },
    {
      year: 2021,
      title: '业务拓展',
      description: '公司业务范围扩展至全国多个省份，服务的风电场数量显著增加，建立了良好的市场口碑。'
    },
    {
      year: 2022,
      title: '技术突破',
      description: '成功研发多项风电设备维护新技术，提高了维修效率和质量，获得客户广泛认可。'
    },
    {
      year: 2023,
      title: '服务升级',
      description: '推出"全生命周期"风电设备维护服务方案，为客户提供更全面、更专业的技术支持。'
    },
    {
      year: 2024,
      title: '品牌升级',
      description: '完成品牌升级，确立"继风前行，智享风能未来"的品牌理念，进一步提升公司的市场影响力。'
    }
  ];

  return (
    <div>
      {/* 英雄区域 - 修改为全屏 */}
      <div className="relative h-screen overflow-hidden">
        {/* 背景图片 */}
        <div 
          className="absolute inset-0 z-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2)), url('/assets/images/about-hero.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        
        {/* 内容 */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center px-4 sm:px-6 lg:px-8"
          >
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-5 drop-shadow-lg">关于我们</h1>
            <p className="text-lg md:text-2xl text-white max-w-4xl mx-auto drop-shadow-md">
              专注于风力发电设备维护，以专业技术和优质服务助力客户实现可持续发展
            </p>
          </motion.div>
        </div>
      </div>

      {/* 公司介绍 */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-[#3A5F4B] font-semibold tracking-wide uppercase">公司简介</h2>
            <p className="mt-2 text-3xl leading-8 font-bold text-gray-900 sm:text-4xl">
              上海继风新能源有限公司
            </p>
            <p className="mt-4 max-w-3xl text-xl text-gray-500 lg:mx-auto">
              专注于风力发电设备的维护与技术服务
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-6 text-base text-gray-600">
              <p>
                上海继风新能源有限公司成立于2020年，是一家专注于风力发电设备维护和技术服务的高新技术企业。公司总部位于上海市松江区，业务范围覆盖全国多个省份的风电场。
              </p>
              <p>
                公司拥有一支经验丰富、技术过硬的工程师团队，具备风力发电机组各系统的检测、维修和保养能力。我们提供的服务包括变桨系统维护、偏航系统维护、轴承系统维护以及风电场运维管理等，全面满足客户的多样化需求。
              </p>
              <p>
                我们秉承"专业、创新、诚信、共赢"的企业理念，致力于为客户提供高效、可靠的风电设备维护解决方案，助力风电产业的可持续发展，为推动清洁能源利用贡献力量。
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 公司优势 */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-12">
            <h2 className="text-base text-[#3A5F4B] font-semibold tracking-wide uppercase">我们的优势</h2>
            <p className="mt-2 text-3xl leading-8 font-bold text-gray-900 sm:text-4xl">
              为什么选择继风新能源
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            {advantages.map((advantage, index) => (
              <motion.div
                key={advantage.id}
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`bg-white p-6 rounded-lg shadow-md cursor-pointer ${selectedAdvantage === index ? 'ring-2 ring-[#3A5F4B]' : ''}`}
                onClick={() => setSelectedAdvantage(index)}
              >
                <div className="flex items-center mb-3">
                  <div className="flex-shrink-0 mr-3">
                    {advantage.icon}
                  </div>
                  <h3 className="text-lg font-medium text-gray-900">{advantage.title}</h3>
                </div>
                <p className="text-base text-gray-600">{advantage.shortDesc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <p className="text-base text-gray-700">{advantages[selectedAdvantage].fullDesc}</p>
          </motion.div>
        </div>
      </div>

      {/* 发展历程 - 增加交互效果 */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-12">
            <h2 className="text-base text-[#3A5F4B] font-semibold tracking-wide uppercase">发展历程</h2>
            <p className="mt-2 text-3xl leading-8 font-bold text-gray-900 sm:text-4xl">
              我们的成长足迹
            </p>
          </div>

          <div className="relative">
            {/* 时间线 */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200"></div>
            
            <div className="space-y-16">
              {history.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className={`relative flex md:items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  onClick={() => setSelectedHistory(selectedHistory === index ? null : index)}
                >
                  <div className="md:w-1/2 py-4 px-6">
                    <motion.div 
                      className={`md:${index % 2 === 0 ? 'text-right' : 'text-left'} cursor-pointer`}
                      whileHover={{ scale: 1.05 }}
                    >
                      <motion.div 
                        className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#3A5F4B] text-white font-medium text-lg mb-3"
                        whileHover={{ scale: 1.1, backgroundColor: '#2A4A3B' }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {item.year}
                      </motion.div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-base text-gray-600">{item.description}</p>
                    </motion.div>
                  </div>
                  
                  <motion.div 
                    className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-[#3A5F4B] cursor-pointer"
                    whileHover={{ scale: 1.5, backgroundColor: '#2A4A3B' }}
                    animate={{ scale: selectedHistory === index ? 1.5 : 1 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => setSelectedHistory(selectedHistory === index ? null : index)}
                  />
                  
                  <div className="md:w-1/2">
                    {selectedHistory === index && (
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`bg-[#E8F0EC] p-4 rounded-lg shadow-md mt-4 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}
                      >
                        <p className="text-[#3A5F4B] font-medium">
                          {item.year}年的重要成就：
                        </p>
                        <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
                          {index === 0 && (
                            <>
                              <li>完成公司注册与团队组建</li>
                              <li>建立首个风电场服务合作关系</li>
                              <li>完成第一批设备维护项目</li>
                            </>
                          )}
                          {index === 1 && (
                            <>
                              <li>业务拓展至华东、华北区域</li>
                              <li>服务风电场数量达到15个</li>
                              <li>建立设备维护标准操作流程</li>
                            </>
                          )}
                          {index === 2 && (
                            <>
                              <li>研发首个自主变桨系统维护解决方案</li>
                              <li>成立技术研发中心</li>
                              <li>获得行业技术创新奖项</li>
                            </>
                          )}
                          {index === 3 && (
                            <>
                              <li>推出全生命周期维护服务体系</li>
                              <li>开发智能远程监控系统</li>
                              <li>服务项目扩展至全国25个省份</li>
                            </>
                          )}
                          {index === 4 && (
                            <>
                              <li>完成品牌重塑和企业文化升级</li>
                              <li>建立国际合作伙伴关系</li>
                              <li>推出行业培训与认证项目</li>
                            </>
                          )}
                        </ul>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 