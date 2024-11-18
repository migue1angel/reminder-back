import { Router } from "express";
import { PagesController } from "./controller";

export class PagesRoutes {

  static get routes() {
    const controller = new PagesController();
    const router = Router();
    router.get("/", controller.getAll );
    router.get("/:id", controller.getOne );
    return router;
  }
}
