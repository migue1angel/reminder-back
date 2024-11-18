import { Request, Response } from "express";
import { UserModel } from "../../../database/mongo/models/user.model";

export class UsersController {
  constructor() {}

  getAll(req: Request, res: Response) {
    res.json({ message: "Should return all users" });
  }

  getOne(req: Request, res: Response) {
    res.json({ message: "Should return a user" });
  }
  create(req: Request, res: Response) {
    const user = new UserModel(req.body);
    user.save();
    res.json(user);
  }
}
