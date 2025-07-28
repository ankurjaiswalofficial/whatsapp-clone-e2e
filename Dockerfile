# ----------- BUILD STAGE ----------- #
FROM node:18-alpine AS builder

WORKDIR /app

# Copy only package files first to leverage Docker cache
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy rest of the project files
COPY . .

# Build the Next.js app
RUN npm run build

# ----------- PRODUCTION STAGE ----------- #
FROM node:18-alpine AS runner

WORKDIR /app

# Only copy necessary files from build stage
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/next.config.js ./next.config.js

ENV NODE_ENV=production

# Expose Next.js server port
EXPOSE 3333

# Start the application
CMD ["npm", "start"]
