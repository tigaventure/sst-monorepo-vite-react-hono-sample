import { Hono } from "hono";
import { Resource } from "sst";

const app = new Hono()
  .get("/", async (c) => {
    c.header("content-type", 'application/json');
    return c.json({
      message: "Hello World",
    });
  });

export default app;
