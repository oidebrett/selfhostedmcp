# SelfHostedMcp Website

This project consists of a React + TypeScript frontend application providing the SelfhostedMcp website

## Stack

- React+Typescript frontend with `yarn` as package manager.

## Quickstart

1. Install dependencies:

```bash
cd frontend
yarn install
```

2. Start the frontend server:

```bash
yarn dev
```

## Docker Deployment

You can run the application using Docker:

```bash
# Set your Docker Hub username
export DOCKER_USERNAME=yourusername

# Run with docker-compose
docker-compose up -d
```

## Creating a Release

To build and publish a new Docker image:

1. Create a new release on GitHub:
   - Go to the repository on GitHub
   - Click on "Releases" in the right sidebar
   - Click "Create a new release"
   - Enter a tag version (e.g., `v1.0.0`)
   - Enter a release title (e.g., "Version 1.0.0")
   - Add release notes describing the changes
   - Click "Publish release"

2. The GitHub Actions workflow will automatically:
   - Build the Docker image
   - Tag it with the version number and "latest"
   - Push it to Docker Hub

3. After the workflow completes, you can pull and run the new image:
   ```bash
   docker pull yourusername/selfhostedmcp:latest
   ```

## Gotchas

The frontend development server runs on port 5173. When deployed with Docker, this port is mapped to port 80 on the host.

Visit <http://localhost:5173> to view the application in development, or <http://localhost> when running with Docker.
