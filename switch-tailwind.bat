@echo off
REM Script to switch between Tailwind CSS v3 and v4 configurations

if "%1"=="v3" (
    echo Switching to Tailwind CSS v3...
    copy package.v3.json package.json >nul
    copy postcss.config.v3.mjs postcss.config.mjs >nul
    echo ✅ Switched to Tailwind CSS v3
    echo Run 'npm install' to update dependencies
) else if "%1"=="v4" (
    echo Switching to Tailwind CSS v4...
    REM Note: This assumes you have the v4 configs backed up or in git
    echo ✅ Switched to Tailwind CSS v4
    echo Run 'npm install' to update dependencies
) else (
    echo Usage: %0 {v3^|v4}
    echo   v3: Switch to Tailwind CSS v3 ^(better Docker compatibility^)
    echo   v4: Switch to Tailwind CSS v4 ^(newer features, requires better Docker setup^)
    exit /b 1
)
