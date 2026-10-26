import Fastify from 'fastify'

export function buildApp(options = {}) {
  const app = Fastify({ logger: true, ...options })

  app.get('/', async () => ({ message: 'MeshMind API' }))
  app.get('/health', async () => ({ status: 'ok' }))

  return app
}
