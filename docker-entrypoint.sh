#!/bin/sh
set -e

export __VITE_ADDITIONAL_SERVER_ALLOWED_HOSTS=verifik.app

cd /usr/src/app/frontend

# Clean Angular's persistent disk cache on every start.
# This prevents EACCES/unlink errors on .angular/cache/.../vite/deps_ssr/_metadata.json
# and similar Vite cache issues that commonly occur with bind mounts on Docker Desktop (macOS/Windows).
# The cache can easily end up with stale files or ownership mismatches from previous container runs or host builds.
rm -rf .angular/cache 2>/dev/null || true
mkdir -p .angular/cache
# Ensure the cache dir is fully writable in the current container context (root).
# On some Docker Desktop FS layers (virtiofs), explicit chmod helps avoid transient EACCES on unlink/rename during Vite dep optimization.
chmod -R 777 .angular 2>/dev/null || true

if [ ! -d node_modules/@angular/cli ]; then
    echo "Installing frontend dependencies (Linux)..."
    npm install --force
fi

exec npm run start:docker
