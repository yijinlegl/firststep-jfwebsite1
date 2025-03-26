@echo off
echo ======================================================
echo       上海继风新能源网站 - 安装和启动向导
echo ======================================================
echo.
echo 正在安装所需依赖，这可能需要几分钟时间...
echo.
call npm install

if %ERRORLEVEL% NEQ 0 (
  echo.
  echo 安装依赖时出现错误。请检查您的网络连接或Node.js安装。
  echo 按任意键退出...
  pause > nul
  exit /b 1
)

echo.
echo 依赖安装完成！
echo.
echo 正在启动上海继风新能源网站...
echo 网站将在默认浏览器中自动打开...
echo.
echo (如果网站没有自动打开，请手动访问 http://localhost:3000)
echo.
echo 按Ctrl+C可以停止服务器
echo.

call npm start

pause 