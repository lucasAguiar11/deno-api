import { Application } from "https://deno.land/x/oak/mod.ts";
import router from "./routes/routes.ts";
import { oakCors } from "https://deno.land/x/cors/mod.ts";
import "https://deno.land/x/dotenv/load.ts";

const PORT = Deno.env.get("PORT") ?? 666;

const app = new Application();

// Logger
app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.headers.get("X-Response-Time");
  console.log(`${ctx.request.method} ${ctx.request.url} - ${rt}`);
});

app.use(router.routes());
app.use(router.allowedMethods());

app.addEventListener("listen", (e) =>
  console.log(`Listening on http://{URL}:${PORT}`)
);

await app.listen({ port: PORT });
