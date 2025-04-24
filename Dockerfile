FROM node:20-alpine AS base

# Install required tools
RUN apk add --no-cache bash yarn

# Set working directory
WORKDIR /app

# Copy project files
COPY . .

# Shange to directory
RUN cd frontend

# Install dependencies
RUN yarn install

# Expose frontend port
EXPOSE 5173

# Start script
COPY docker-start.sh /app/
RUN chmod +x /app/docker-start.sh

CMD ["/app/docker-start.sh"]
