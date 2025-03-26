@echo off
echo 正在创建新的React项目...
npx create-react-app . --use-npm

echo 正在安装必要的依赖...
npm install tailwindcss postcss autoprefixer framer-motion react-router-dom

echo 正在初始化Tailwind CSS...
npx tailwindcss init -p

echo 项目初始化完成！
pause 