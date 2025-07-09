#!/bin/bash

# Script to switch between Tailwind CSS v3 and v4 configurations

case "$1" in
  "v3")
    echo "Switching to Tailwind CSS v3..."
    cp package.v3.json package.json
    cp postcss.config.v3.mjs postcss.config.mjs
    echo "✅ Switched to Tailwind CSS v3"
    echo "Run 'npm install' to update dependencies"
    ;;
  "v4")
    echo "Switching to Tailwind CSS v4..."
    # Backup current package.json if it's not v4
    if ! grep -q "@tailwindcss/postcss" package.json; then
      cp package.json package.v3.json.backup
    fi
    # Restore v4 configs (assuming they are the current main ones)
    git checkout package.json postcss.config.mjs 2>/dev/null || echo "Using current v4 configs"
    echo "✅ Switched to Tailwind CSS v4"
    echo "Run 'npm install' to update dependencies"
    ;;
  *)
    echo "Usage: $0 {v3|v4}"
    echo "  v3: Switch to Tailwind CSS v3 (better Docker compatibility)"
    echo "  v4: Switch to Tailwind CSS v4 (newer features, requires better Docker setup)"
    exit 1
    ;;
esac
