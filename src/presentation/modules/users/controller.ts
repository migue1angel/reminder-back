import { Request, Response } from "express";

export class UsersController {
  constructor() {}

  getAll(req: Request, res: Response) {
    res.json({ message: "Should return all users" });
  }

  getOne(req: Request, res: Response) {
    res.json({ message: "Should return a user" });
  }
}
