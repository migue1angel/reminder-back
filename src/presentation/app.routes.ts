import { Router } from "express";
import { UsersRoutes } from "./modules/users/routes";
import { AuthRoutes } from "./modules/auth/routes";
import { PagesRoutes } from "./modules/pages/routes";
import { BlocksRoutes } from "./modules/blocks/routes";

export class AppRoutes {
  static get routes() {
    const router = Router();
    router.use("/auth", AuthRoutes.routes);
    router.use("/users", UsersRoutes.routes);
    router.use("/pages", PagesRoutes.routes);
    router.use("/blocks", BlocksRoutes.routes);

    return router;
  }
}
