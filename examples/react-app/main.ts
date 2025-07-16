import { Application } from "https://deno.land/x/oak@v11.1.0/mod.ts";
const app = new Application();
app.use(async (ctx) => {
  const currentWorkingDirectory = Deno.cwd();
  try {
    await ctx.send({
      root: currentWorkingDirectory,
      index: "index.html",
    });
  } catch {
    await ctx.send({
      root: currentWorkingDirectory,
      path: "index.html",
    });
  }
});
await app.listen({ port: 8000 });
