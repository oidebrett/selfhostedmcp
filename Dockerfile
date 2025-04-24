FROM node:20-alpine AS base

# Install Python and required tools
RUN apk add --no-cache python3 py3-pip bash make

# Set working directory
WORKDIR /app

# Copy project files
COPY . .

# Make scripts executable
RUN chmod +x backend/install.sh backend/run.sh frontend/install.sh frontend/run.sh

# Install dependencies using the existing Makefile
RUN make install

# Expose ports
EXPOSE 5173 8000

# Start script
COPY docker-start.sh /app/
RUN chmod +x /app/docker-start.sh

CMD ["/app/docker-start.sh"]