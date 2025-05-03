# SST + Monorepo + Vite + React + Hono Template

## Overview
This template provides a ready-to-use setup for building applications with SST in a monorepo structure, using Vite, React, and Hono.

## Requirements

- Cloudflare account
- Supabase account
- An `.env` file in each package root directory containing:
  - `CLOUDFLARE_DEFAULT_ACCOUNT_ID=your_account_id`
  - `CLOUDFLARE_API_TOKEN=your_api_token`

## Getting Started
Detailed setup and usage instructions.

### Local dev
```
npm i
npm start
```

### Staging dev
```
npm i
SST_ENV=staging npm run deploy
```

### Production dev
```
npm i
SST_ENV=production npm run deploy
```
