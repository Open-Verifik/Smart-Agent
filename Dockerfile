FROM node:24.5.0-slim

WORKDIR /usr/src/app/frontend

COPY frontend/package*.json ./

RUN npm install -g @angular/cli@19.2.18 \
    && npm install --force

WORKDIR /usr/src/app

# NOTE: Source code is expected to be bind-mounted at runtime, e.g.
# docker run -v "$(pwd):/usr/src/app" ...
# Do not rely on VOLUME here; it can interfere with host bind mounts on Docker Desktop.

EXPOSE 5555

ENV NODE_OPTIONS="--max-old-space-size=4096"

COPY docker-entrypoint.sh /usr/local/bin/docker-entrypoint.sh
RUN chmod +x /usr/local/bin/docker-entrypoint.sh

CMD ["/usr/local/bin/docker-entrypoint.sh"]
