# Docker Build Fix for Tailwind CSS v4 + Alpine Linux

## Problem

The Docker build fails with the error:

```
Error: Cannot find module '../lightningcss.linux-x64-musl.node'
```

This happens because Tailwind CSS v4 uses `lightningcss` which has native dependencies that are not properly built for Alpine Linux (musl libc).

## Solutions

### Solution 1: Use Debian-based Docker Image (Recommended)

The main `Dockerfile` has been updated to use `node:18-bullseye-slim` instead of `node:18-alpine`. This provides better compatibility with native modules.

**Pros:**

- Better compatibility with native modules
- More stable builds
- Works with Tailwind CSS v4

**Cons:**

- Slightly larger image size

### Solution 2: Use Alpine with Native Module Rebuild

Use `Dockerfile.alpine-fixed` which forces rebuilding of native modules for Alpine:

```bash
docker build -f Dockerfile.alpine-fixed -t oxe-tech-web .
```

**Pros:**

- Smaller image size
- Keeps Alpine benefits

**Cons:**

- Longer build times
- May still have compatibility issues

### Solution 3: Downgrade to Tailwind CSS v3

Switch to Tailwind CSS v3 which doesn't have native dependencies:

```bash
# On Windows
switch-tailwind.bat v3
npm install

# On Linux/Mac
./switch-tailwind.sh v3
npm install
```

**Pros:**

- No native dependencies issues
- Faster builds
- Better Docker compatibility

**Cons:**

- Missing Tailwind CSS v4 features
- Older syntax

## Jenkins Build Script Update

Update your Jenkins build script to use the fixed Dockerfile:

```bash
echo "👉 Build Docker image"
docker build -t oxe-tech-web .
```

Or if you want to use Tailwind v3:

```bash
echo "👉 Switching to Tailwind v3"
cp package.v3.json package.json
cp postcss.config.v3.mjs postcss.config.mjs

echo "👉 Build Docker image"
docker build -t oxe-tech-web .
```

## Testing the Fix

1. **Local test:**

   ```bash
   docker build -t oxe-tech-web .
   docker run -p 3000:3000 oxe-tech-web
   ```

2. **With Tailwind v3:**
   ```bash
   ./switch-tailwind.sh v3  # or switch-tailwind.bat v3 on Windows
   npm install
   docker build -t oxe-tech-web .
   ```

## Recommendations

For production deployment, I recommend **Solution 1** (Debian-based image) as it provides the best balance of compatibility and features while still maintaining reasonable image sizes.
