import { Hono } from "hono";
import { handle } from "hono/nextjs";
import { logger } from "hono/logger";

import _app from "@/apis/posts/controller";

export const config = {
  runtime: "edge",
};
const app = new Hono();

app.use("*", logger());

app.route("/posts", _app);

export default handle(app, "/api");
