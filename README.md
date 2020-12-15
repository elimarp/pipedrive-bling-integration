# Pipedrive and Bling - Integration API

## Run instructions:
- Run `yarn` to download node_modules
- Copy `.env.example` file to `.env` and fill the variables
- Run `yarn dev` package.json command

## Routes
- `GET /api/v1/deals`: Get all deals from database

## Notes
Migrations runs at 2AM every day. You can also reduce interval in `server.ts` file (there's a 10 seconds interval sample commented) or using `POST /api/v1/migrate-deals` to run migrations (non-responding endpoint).