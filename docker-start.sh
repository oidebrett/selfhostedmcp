#!/bin/bash
set -e

# Start backend in background
make run-backend &

# Start frontend in background
make run-frontend &

# Wait for any process to exit
wait -n

# Exit with status of process that exited first
exit $?