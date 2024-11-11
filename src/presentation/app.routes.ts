import { Request, Response, Router } from "express";

export class AppRoutes {
  static get routes() {
    return Router()
      .use("/", (req: Request, res: Response) => {
        res.json("hello world");
        
      })
      .use("/test", (req: Request, res: Response) => {
        console.log("hello world");
      });
  }
}
