// import { Application } from "https://deno.land/x/oak/mod.ts";
// import { config } from "https://deno.land/x/dotenv/mod.ts";
// import router from "./routes/routes.ts";
// import { oakCors } from "https://deno.land/x/cors/mod.ts";

// const HOST = config().HOST ?? "127.0.0.1";
// const PORT = config().PORT ?? 8080;

// const app = new Application();

// // Logger
// app.use(async (ctx, next) => {
//   await next();
//   const rt = ctx.response.headers.get("X-Response-Time");
//   console.log(`${ctx.request.method} ${ctx.request.url} - ${rt}`);
// });

// app.use(router.routes());
// app.use(router.allowedMethods());

// console.log(`Deno is running: ${HOST}:${PORT}`);
// await app.listen(`${HOST}:${PORT}`);

import { Application, Router } from "https://deno.land/x/oak/mod.ts";

const router = new Router();
router.get("/", (ctx) => {
  ctx.response.body = "Hello world!";
});

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

app.addEventListener("listen", (e) =>
  console.log("Listening on http://localhost:8080")
);
await app.listen({ port: 8080 });
