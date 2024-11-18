import { Router } from "express";
import { BlocksController  } from "./controller";

export class BlocksRoutes {

  static get routes() {
    const controller = new BlocksController();
    const router = Router();
    router.get("/:id", controller.getOne );
    return router;
  }
}
