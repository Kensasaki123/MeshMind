export async function getOllama(ollamaUrl, path, request, reply) {
  try {
    const response = await fetch(new URL(path, ollamaUrl), {
      signal: AbortSignal.timeout(5000),
    });

    if (!response.ok) {
      request.log.warn({ status: response.status }, 'Ollama request failed');
      return reply.code(502).send({ error: 'Ollama returned an unsuccessful response.' });
    }

    return await response.json();
  } catch (error) {
    request.log.error(error, 'Could not fetch Ollama model information');
    return reply.code(503).send({
      error: 'Could not reach Ollama or read its response. Make sure Ollama is running locally.',
    });
  }
}
