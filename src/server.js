import http from "node:http";
import { routes } from "./routes.js";
import { json } from "./middlewares/json.js";

const server = http.createServer(async (req, res) => {
  const { method, url } = req;

  await json(req, res);

  const route = routes.find((route) => {
    return route.method === method;
  });
  console.log(route);

  if (route) {
    const routeParams = req.url.match(route.path);
    console.log(routeParams);
  }

  return res.writeHead(404).end();
});

server.listen(3333);
