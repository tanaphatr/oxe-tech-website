@echo off
REM Test script to verify Docker build fixes

echo 🔧 Testing Docker build fixes for OXE Tech Website
echo ==================================================

REM Test main Dockerfile (Debian-based)
echo.
echo 📦 Testing build with Debian-based Dockerfile...
docker build -t oxe-tech-test-debian . --no-cache
if %ERRORLEVEL% EQU 0 (
    echo ✅ Build with Debian-based Dockerfile succeeded!
    docker rmi oxe-tech-test-debian 2>nul
) else (
    echo ❌ Build with Debian-based Dockerfile failed!
)

REM Test Alpine fixed version if it exists
if exist "Dockerfile.alpine-fixed" (
    echo.
    echo 📦 Testing build with Alpine-fixed Dockerfile...
    docker build -f Dockerfile.alpine-fixed -t oxe-tech-test-alpine . --no-cache
    if %ERRORLEVEL% EQU 0 (
        echo ✅ Build with Alpine-fixed Dockerfile succeeded!
        docker rmi oxe-tech-test-alpine 2>nul
    ) else (
        echo ❌ Build with Alpine-fixed Dockerfile failed!
    )
)

REM Test with Tailwind v3
if exist "package.v3.json" (
    echo.
    echo 📦 Testing with Tailwind CSS v3...
    
    REM Backup current configs
    copy package.json package.json.backup >nul
    copy postcss.config.mjs postcss.config.mjs.backup >nul
    
    REM Switch to v3
    copy package.v3.json package.json >nul
    copy postcss.config.v3.mjs postcss.config.mjs >nul
    
    docker build -t oxe-tech-test-v3 . --no-cache
    if %ERRORLEVEL% EQU 0 (
        echo ✅ Build with Tailwind v3 succeeded!
        docker rmi oxe-tech-test-v3 2>nul
    ) else (
        echo ❌ Build with Tailwind v3 failed!
    )
    
    REM Restore configs
    move package.json.backup package.json >nul
    move postcss.config.mjs.backup postcss.config.mjs >nul
) else (
    echo ⚠️  package.v3.json not found, skipping Tailwind v3 test
)

echo.
echo 🎉 All tests completed!
echo Recommended: Use the main Dockerfile (Debian-based) for best compatibility
pause
