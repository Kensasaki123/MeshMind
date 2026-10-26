# Local Ollama client server

Requires Node.js 22+ and the parent project's dependencies (`npm install` from
`MeshMind` if needed). Run this server on the machine where Ollama is installed.

Start Ollama with `ollama serve` if it is not already running, then start Fastify:

```sh
cd /home/kavi/Documents/Project_1/MeshMind/client
node main.js
```

- `GET http://127.0.0.1:3001/ollamacall/models` returns installed models.
- `GET http://127.0.0.1:3001/ollamacall/models/running` returns loaded models.

Responses preserve Ollama's JSON model information. Upstream errors return HTTP
502; connection, timeout, or unreadable-response errors return HTTP 503.

The server uses port `3001` and Ollama at `http://127.0.0.1:11434`.
You can change these values directly in `main.js`; no environment file is needed.

`main.js` bootstraps Fastify and registers the route plugin with `/ollamacall`.
`routes.js` defines the GET endpoints and calls Ollama using Node's built-in fetch.
The listener binds to `127.0.0.1`.
