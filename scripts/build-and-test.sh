#!/bin/bash

# Build and test script for local development
set -e

echo "🏗️  Building the application..."
npm run build

echo "🚀 Starting preview server..."
npm run preview &
SERVER_PID=$!

# Wait for server to start
sleep 5

echo "📸 Running screenshot tests..."
npm run test:screenshots

echo "🧹 Cleaning up..."
kill $SERVER_PID 2>/dev/null || true

echo "✅ Build and test completed successfully!"