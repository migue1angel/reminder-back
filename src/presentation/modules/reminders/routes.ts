import { Router } from "express";
import { RemindersController } from "./controller";

export class RemindersRoutes {

  static get routes() {
    const controller = new RemindersController();
    const router = Router();
    router.get("/", controller.getAll );
    router.get("/:id", controller.getOne );
    return router;
  }
}
