import React from 'react';
import { Link } from 'react-router-dom';

// 页脚组件
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 公司信息 */}
          <div>
            <h3 className="text-xl font-bold mb-4">上海继风新能源有限公司</h3>
            <p className="text-gray-400 mb-2">以专业守护风电，用科技赋能未来</p>
            <div className="mt-4 flex space-x-4">
              {/* 社交媒体图标可以根据需要添加 */}
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">WeChat</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.69,11.52c-0.4,0-0.72-0.32-0.72-0.72s0.32-0.72,0.72-0.72s0.72,0.32,0.72,0.72S9.09,11.52,8.69,11.52z M13.46,11.52c-0.4,0-0.72-0.32-0.72-0.72s0.32-0.72,0.72-0.72s0.72,0.32,0.72,0.72S13.86,11.52,13.46,11.52z M10.21,7.37c0.34,0,0.68,0.03,1.01,0.09c-0.2-2.46-2.06-4.35-4.57-4.35c-2.57,0-4.66,1.95-4.66,4.36c0,1.19,0.56,2.28,1.48,3.05l-0.37,1.15l1.28-0.68c0.46,0.13,0.93,0.21,1.42,0.21c0.13,0,0.25-0.01,0.38-0.02c-0.08-0.29-0.12-0.59-0.12-0.91C6.05,8.75,7.96,7.37,10.21,7.37z M21.95,13.72c0-2.01-1.83-3.65-4.08-3.65c-2.29,0-4.08,1.63-4.08,3.65c0,2.01,1.79,3.65,4.08,3.65c0.48,0,0.94-0.07,1.37-0.19l1.23,0.67l-0.34-1.14c0.9-0.74,1.82-1.87,1.82-2.99z M15.99,12.36c-0.28,0-0.5-0.23-0.5-0.5c0-0.28,0.23-0.5,0.5-0.5s0.5,0.23,0.5,0.5C16.49,12.13,16.26,12.36,15.99,12.36z M19.6,12.36c-0.28,0-0.5-0.23-0.5-0.5c0-0.28,0.23-0.5,0.5-0.5s0.5,0.23,0.5,0.5C20.1,12.13,19.88,12.36,19.6,12.36z" />
                </svg>
              </a>
            </div>
          </div>

          {/* 快速链接 */}
          <div>
            <h3 className="text-xl font-bold mb-4">快速链接</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors duration-200">
                  首页
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors duration-200">
                  关于我们
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors duration-200">
                  业务范围
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors duration-200">
                  联系我们
                </Link>
              </li>
            </ul>
          </div>

          {/* 联系信息 */}
          <div>
            <h3 className="text-xl font-bold mb-4">联系我们</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <svg className="h-5 w-5 mr-2 mt-0.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-400">上海市松江区卖新公路1399号</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 mr-2 mt-0.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-gray-400">李经理：13764190602</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 mr-2 mt-0.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-400">shjfenergy@163.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* 版权信息 */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} 上海继风新能源有限公司. 版权所有.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 