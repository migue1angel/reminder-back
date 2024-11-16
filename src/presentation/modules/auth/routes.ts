import { Router } from "express";
import { AuthController } from "./controller";

export class AuthRoutes {

  static get routes() {
    const controller = new AuthController();
    const router = Router();
    router.get("/", controller.login );
    return router;
  }
}
