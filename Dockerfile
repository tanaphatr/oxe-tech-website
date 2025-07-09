# Build stage
FROM node:18 AS builder
WORKDIR /app

COPY package*.json ./
RUN npm cache clean --force
RUN npm install --legacy-peer-deps

COPY . .
RUN npm run build

# Run stage
FROM node:18
WORKDIR /app

COPY --from=builder /app ./
EXPOSE 3000
CMD ["npm", "start"]
