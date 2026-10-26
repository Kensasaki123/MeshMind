import { getOllama } from './utils/getOllama.js';

export default async function ollamaRoutes(app, { ollamaUrl }) {
  // Installed models, including size, family, and quantization details.
  app.get('/models', getOllama.bind(null, ollamaUrl, '/api/tags'));

  // Models currently loaded in memory, including VRAM usage and expiry.
  app.get('/models/running', getOllama.bind(null, ollamaUrl, '/api/ps'));
}
