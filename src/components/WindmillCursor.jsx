import React, { useState, useEffect } from 'react';

const WindmillCursor = () => {
  // 自定义鼠标位置
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // 监听鼠标移动事件和创建自定义鼠标
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    // 添加自定义鼠标样式
    const customCursor = document.createElement('div');
    customCursor.className = 'custom-cursor';
    document.body.appendChild(customCursor);
    
    // 创建风机叶片
    const blades = document.createElement('div');
    blades.className = 'cursor-blades';
    customCursor.appendChild(blades);
    
    // 添加风机中心点
    const center = document.createElement('div');
    center.className = 'cursor-center';
    customCursor.appendChild(center);
    
    // 添加CSS样式
    const style = document.createElement('style');
    style.innerHTML = `
      body {
        cursor: none;
      }
      .custom-cursor {
        position: fixed;
        width: 40px;
        height: 40px;
        pointer-events: none;
        z-index: 9999;
        transform: translate(-50%, -50%);
      }
      .cursor-blades {
        position: absolute;
        width: 100%;
        height: 100%;
        background-image: url('/assets/images/windmill-blades.svg');
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        animation: rotate 8s linear infinite;
      }
      .cursor-center {
        position: absolute;
        width: 10px;
        height: 10px;
        background-color: #3A5F4B;
        border-radius: 50%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
      @keyframes rotate {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
      a, button, [role="button"], .cursor-pointer {
        cursor: none;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeChild(customCursor);
      document.head.removeChild(style);
    };
  }, []);
  
  // 更新自定义鼠标位置
  useEffect(() => {
    const cursor = document.querySelector('.custom-cursor');
    if (cursor) {
      cursor.style.left = `${mousePosition.x}px`;
      cursor.style.top = `${mousePosition.y}px`;
    }
  }, [mousePosition]);

  // 组件不需要渲染任何DOM元素
  return null;
};

export default WindmillCursor; 