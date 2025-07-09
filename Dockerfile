# Use node base image
FROM node:18

# Create app directory
WORKDIR /app

# Copy source
COPY . .

# Install dependencies
RUN npm install

# Build (optional for production)
RUN npm run build

# Serve (depends on your framework)
EXPOSE 3000
CMD ["npm", "run", "start"]
