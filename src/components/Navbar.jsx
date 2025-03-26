import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

// 导航栏组件
const Navbar = () => {
  // 控制移动端菜单的显示状态
  const [isOpen, setIsOpen] = useState(false);
  // 控制导航栏透明度，默认设置为不透明
  const [isTransparent, setIsTransparent] = useState(false);
  // 获取当前路径
  const location = useLocation();

  // 监听滚动事件以控制导航栏透明度
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsTransparent(false);
      } else {
        // 即使在顶部也保持不透明
        setIsTransparent(false);
      }
    };
    
    // 初始加载时执行一次，确保顶部导航栏也能正确显示
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // 导航链接配置
  const navLinks = [
    { name: '首页', path: '/' },
    { name: '关于我们', path: '/about' },
    { name: '业务范围', path: '/services' },
    { name: '联系我们', path: '/contact' },
  ];

  return (
    <motion.nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isTransparent ? 'bg-transparent' : 'bg-white shadow-lg'
      }`}
      initial={{ y: 0, opacity: 1 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo区域 */}
          <div className="flex-shrink-0 flex items-center">
            <Link 
              to="/" 
              className={`text-lg md:text-xl font-bold transition-colors duration-300 ${
                isTransparent ? 'text-white' : 'text-[#3A5F4B]'
              }`}
            >
              上海继风新能源有限公司
            </Link>
          </div>

          {/* 桌面端导航菜单 */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <motion.div
                  key={link.path}
                  className="relative px-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to={link.path}
                    className={`py-2 px-3 rounded-md text-base font-medium inline-block transition-colors duration-300 ${
                      isTransparent 
                        ? 'text-white hover:bg-white/20' 
                        : isActive
                          ? 'text-white'
                          : 'text-gray-700 hover:text-[#3A5F4B] hover:bg-[#E8F0EC]'
                    }`}
                  >
                    {link.name}
                  </Link>
                  {isActive && !isTransparent && (
                    <motion.div 
                      className="absolute bottom-0 left-0 right-0 h-full bg-[#3A5F4B] rounded-md -z-10"
                      layoutId="activeNav"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* 移动端菜单按钮 */}
          <div className="md:hidden flex items-center">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none ${
                isTransparent ? 'text-white' : 'text-gray-700'
              }`}
              whileTap={{ scale: 0.9 }}
            >
              <span className="sr-only">打开主菜单</span>
              {/* 汉堡菜单图标 */}
              <svg
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* 关闭图标 */}
              <svg
                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>

      {/* 移动端菜单 */}
      <motion.div
        className={`md:hidden bg-white shadow-lg rounded-b-lg overflow-hidden`}
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0
        }}
        transition={{ 
          duration: 0.3,
          ease: "easeInOut"
        }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <motion.div
                key={link.path}
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={link.path}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    isActive 
                      ? 'text-white bg-[#3A5F4B]' 
                      : 'text-gray-700 hover:text-[#3A5F4B] hover:bg-[#E8F0EC]'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar; 