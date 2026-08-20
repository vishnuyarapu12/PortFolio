# ──────────────────────────────────────────────
# Stage 1: Build the Vite React app
# ──────────────────────────────────────────────
FROM node:20-alpine AS builder

WORKDIR /app

# Copy dependency manifests first (better layer caching)
COPY package.json package-lock.json* ./

# Install all dependencies
RUN npm ci

# Copy the rest of the source code
COPY . .

# Build production bundle → dist/
RUN npm run build

# ──────────────────────────────────────────────
# Stage 2: Serve with Nginx (lightweight)
# ──────────────────────────────────────────────
FROM nginx:1.27-alpine AS production

# Remove default nginx html
RUN rm -rf /usr/share/nginx/html/*

# Copy built assets from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy custom nginx config for SPA routing
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start nginx in foreground
CMD ["nginx", "-g", "daemon off;"]
