FROM node:20-alpine AS base

# Install required tools
RUN apk add --no-cache bash make curl

# Set working directory
WORKDIR /app

# Copy project files
COPY . .

# Make scripts executable
RUN chmod +x frontend/install.sh frontend/run.sh

# Install dependencies
RUN make install-frontend

# Expose frontend port
EXPOSE 5173

# Start script
COPY docker-start.sh /app/
RUN chmod +x /app/docker-start.sh

CMD ["/app/docker-start.sh"]
