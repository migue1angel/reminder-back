import { Router } from "express";
import { TodosController } from "./controller";

export class TodosRoutes {

  static get routes() {
    const controller = new TodosController();
    const router = Router();
    router.get("/", controller.getAll );
    router.get("/:id", controller.getOne );
    return router;
  }
}
