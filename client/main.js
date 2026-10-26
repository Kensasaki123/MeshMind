import Fastify from 'fastify';
import ollamaRoutes from './routes.js';

const app = Fastify({ logger: true });

await app.register(ollamaRoutes, {
  prefix: '/ollamacall',
  ollamaUrl: 'http://127.0.0.1:11434',
});

try {
  await app.listen({ port: 3001, host: '127.0.0.1' });
} catch (error) {
  app.log.error(error);
  throw error;
}
