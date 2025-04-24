#!/bin/bash
set -e

# Start frontend
make run-frontend

# Keep container running
exec "$@"
