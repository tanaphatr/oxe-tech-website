# Portfolio Images

This directory contains images for portfolio projects.

## Image Requirements

### For each portfolio project, you need:

1. **Main Image** (`{project-slug}-main.jpg`)

   - Size: 1200x675px (16:9 aspect ratio)
   - High quality project showcase image
   - Used in project detail page hero section

2. **Thumbnail** (`{project-slug}-thumb.jpg`)

   - Size: 400x225px (16:9 aspect ratio)
   - Used in portfolio grid and cards

3. **Gallery Images** (`{project-slug}-1.jpg`, `{project-slug}-2.jpg`, etc.)
   - Size: 800x450px (16:9 aspect ratio)
   - Multiple images showing different aspects of the project
   - Screenshots, mockups, features, etc.

## Current Portfolio Projects

### 1. Lotus Backend System (`lotus-backend-system`)

- lotus-main.jpg
- lotus-thumb.jpg
- lotus-1.jpg (Architecture diagram)
- lotus-2.jpg (Dashboard screenshot)
- lotus-3.jpg (API documentation)
- lotus-4.jpg (Performance metrics)

### 2. E-commerce Platform (`ecommerce-platform`)

- ecommerce-main.jpg
- ecommerce-thumb.jpg
- ecommerce-1.jpg (Homepage)
- ecommerce-2.jpg (Product page)
- ecommerce-3.jpg (Admin dashboard)
- ecommerce-4.jpg (Mobile app)
- ecommerce-5.jpg (Payment system)

### 3. Mobile Banking App (`mobile-banking-app`)

- banking-main.jpg
- banking-thumb.jpg
- banking-1.jpg (Login screen)
- banking-2.jpg (Dashboard)
- banking-3.jpg (Transfer feature)
- banking-4.jpg (Security features)

## Adding New Portfolio Projects

1. Add project data to `/src/data/portfolio.ts`
2. Add corresponding images to this directory
3. Follow the naming convention: `{slug}-{type}.jpg`
4. Ensure all images are optimized for web (WebP format recommended)

## Image Optimization Tips

- Use WebP format for better compression
- Compress images to reduce file size
- Maintain consistent aspect ratios
- Use descriptive file names
- Add alt text in the portfolio data
