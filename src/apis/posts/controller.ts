import { Hono } from "hono";
import { z } from "zod";
import { zValidator } from "@hono/zod-validator";
import { PostService } from "./service";
import getPostDto from "./dto/getPost.dto";

const _app = new Hono();
const postService = new PostService();

_app.get("/", (c) => {
  const posts = postService.getPosts();
  return c.json({
    posts,
  });
});

_app.get("/:id", zValidator("param", getPostDto), (c) => {
  const { id } = c.req.valid("param");
  const post = postService.getPost(+id);
  return c.json({
    post,
  });
});

export default _app;
