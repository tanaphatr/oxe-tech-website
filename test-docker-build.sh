#!/bin/bash

# Test script to verify Docker build fixes

echo "🔧 Testing Docker build fixes for OXE Tech Website"
echo "=================================================="

# Function to test build
test_build() {
    local dockerfile=$1
    local name=$2
    
    echo ""
    echo "📦 Testing build with $name..."
    
    if docker build -f "$dockerfile" -t "oxe-tech-test-$name" . --no-cache; then
        echo "✅ Build with $name succeeded!"
        
        # Test if the container runs
        echo "🚀 Testing container startup..."
        if timeout 30s docker run --rm -p 3001:3000 "oxe-tech-test-$name" &
        then
            sleep 5
            if curl -f http://localhost:3001 > /dev/null 2>&1; then
                echo "✅ Container startup test passed!"
            else
                echo "⚠️  Container started but not responding on port 3000"
            fi
            # Kill the container
            docker kill $(docker ps -q --filter ancestor="oxe-tech-test-$name") 2>/dev/null || true
        fi
        
        # Clean up test image
        docker rmi "oxe-tech-test-$name" 2>/dev/null || true
        
        return 0
    else
        echo "❌ Build with $name failed!"
        return 1
    fi
}

# Test main Dockerfile (Debian-based)
test_build "Dockerfile" "Debian-based"

# Test Alpine fixed version if it exists
if [ -f "Dockerfile.alpine-fixed" ]; then
    test_build "Dockerfile.alpine-fixed" "Alpine-fixed"
fi

# Test with Tailwind v3
echo ""
echo "📦 Testing with Tailwind CSS v3..."
if [ -f "package.v3.json" ]; then
    # Backup current configs
    cp package.json package.json.backup
    cp postcss.config.mjs postcss.config.mjs.backup
    
    # Switch to v3
    cp package.v3.json package.json
    cp postcss.config.v3.mjs postcss.config.mjs
    
    test_build "Dockerfile" "Tailwind-v3"
    
    # Restore configs
    mv package.json.backup package.json
    mv postcss.config.mjs.backup postcss.config.mjs
else
    echo "⚠️  package.v3.json not found, skipping Tailwind v3 test"
fi

echo ""
echo "🎉 All tests completed!"
echo "Recommended: Use the main Dockerfile (Debian-based) for best compatibility"
