#!/bin/bash
set -e

# Start frontend
yarn dev

# Keep container running
exec "$@"
