# Build stage
FROM node:18 AS builder
WORKDIR /app

COPY package*.json ./
RUN npm ci --ignore-scripts

COPY . .
RUN npm run build

# Run stage
FROM node:18
WORKDIR /app

COPY --from=builder /app ./
EXPOSE 3000
CMD ["npm", "start"]
