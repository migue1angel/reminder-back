import express, { Router } from "express";
import { envs } from "../config/envs";
interface ServerOptions {
  port: number;
  routes: Router;
}
export class Server {
  private readonly port: number;
  private readonly routes: Router;
  private readonly app = express();

  constructor(options: ServerOptions) {
    const { port, routes } = options;
    this.port = port;
    this.routes = routes;
  }
  
  async start() {
    this.app.use(this.routes);
    this.app.listen(envs.PORT, () => {
      console.log("hello world");
    });
  }
}
