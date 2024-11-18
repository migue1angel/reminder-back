import { Router } from "express";
import { UsersController } from "./controller";

export class UsersRoutes {

  static get routes() {
    const controller = new UsersController();
    const router = Router();
    router.get("/", controller.getAll );
    router.get("/:id", controller.getOne );
    router.post("/", controller.create );
    return router;
  }
}
