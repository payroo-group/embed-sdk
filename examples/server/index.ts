import Fastify from "fastify";
import Cors from "@fastify/cors";
import { createEmbedSession, createEmbedUrl } from "./embed-service.ts";

const app = Fastify({
  logger: true,
});
app.register(Cors);

app.post("/api/create-embed-url", async function(request, reply) {
  let { sessionId, component, params } = request.body as {
    sessionId?: string;
    component?: string;
    params?: Record<string, any>;
  };
  if (!component) {
    reply.status(400).send({ error: "component is required" });
    return;
  }
  if (!sessionId) {
    const session = await createEmbedSession({
      account: {
        id: "78cc8d2b-8cae-4cbe-ba00-1103a275e1a8",
        name: "X PTY.LTD.",
      },
      user: {
        id: "b99a803d-7bfe-4111-ac03-a71b15f77c9f",
        name: "Jon Doe",
        email: "jon@example.com",
      },
      allowOrigin: request.headers.origin as string,
    });
    sessionId = session.id;
  }

  const res = await createEmbedUrl(sessionId, component, params);
  reply.send({ ...res, sessionId });
});

// Run the server!
app.listen({ port: 5600 }, function(err, address) {
  if (err) {
    app.log.error(err);
    process.exit(1);
  }
  app.log.info(`Server listening at ${address}`);
});
