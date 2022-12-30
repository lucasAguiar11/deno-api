import { Router } from "https://deno.land/x/oak/mod.ts";
import { getData } from "../controllers/main-controller.ts";

const router = new Router();

router.get("/api/v1/teste", getData);

export default router;
