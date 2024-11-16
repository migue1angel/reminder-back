import { Router } from "express";
import { UsersRoutes } from "./modules/users/routes";
import { AuthRoutes } from "./modules/auth/routes";
import { NotesRoutes } from "./modules/notes/routes";
import { RemindersRoutes } from "./modules/reminders/routes";
import { TodosRoutes } from "./modules/todos/routes";

export class AppRoutes {
  static get routes() {
    const router = Router();
    router.use("/auth", AuthRoutes.routes);
    router.use("/users", UsersRoutes.routes);
    router.use("/notes", NotesRoutes.routes);
    router.use("/reminders", RemindersRoutes.routes);
    router.use("/todos", TodosRoutes.routes);

    return router;
  }
}
