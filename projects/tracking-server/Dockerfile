# ---------- Base ----------
FROM artifacts.corp.xperi.com/docker/node:12-alpine AS base

RUN apk add --no-cache \
  bash \
  curl

WORKDIR /app

ENV PORT 3000
EXPOSE 3000

ENV NODE_ENV example
COPY templates templates

# ---------- Builder ----------
# Creates:
# - node_modules: production dependencies (no dev dependencies)
# - dist: A production build compiled with Babel
# - docs: Documentation
FROM base AS builder

COPY apidoc.json \
  lint.sh \
  package*.json \
  .babelrc \
  .env-cmdrc \
  .env.* \
  .eslint* \
  ./

RUN npm install

COPY src src
COPY tests tests

RUN npm run build

# Run tests inside docker as these are not retained in final image
RUN npm run test:unit

# Build docs
RUN npm run apidoc && \
    npm run openapi

# Remove dev dependencies
RUN npm prune --production

# ---------- Release ----------
FROM base AS release

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/docs ./docs
COPY --from=builder /app/dist/src ./dist
COPY --from=builder /app/templates ./templates
COPY --from=builder /app/package*.json \
  /app/.env-cmdrc \
  /app/.env.example \
  ./

COPY src/package.alias.json /app/dist/

CMD ["npm", "run", "docker:api:start"]
