# MeshMind Fastify server

Requires Node.js 22 or newer.

```bash
npm install
cp .env.example .env
npm run dev
```

Run `npm start` without file watching.

Endpoints:

- `GET /` — API welcome message
- `GET /health` — returns `{ "status": "ok" }`

The server defaults to http://127.0.0.1:3000. Configure `PORT` and `HOST`
in `.env` as needed. The React application runs separately.
