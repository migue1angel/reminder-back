import { Router } from "express";
import { NotesController } from "./controller";

export class NotesRoutes {

  static get routes() {
    const controller = new NotesController();
    const router = Router();
    router.get("/", controller.getAll );
    router.get("/:id", controller.getOne );
    return router;
  }
}
