import { Request, Response } from "express";

export class TodosController {
  constructor() {}

  getAll(req: Request, res: Response) {
    res.json({ message: "Should return all todos" });
  }

  getOne(req: Request, res: Response) {
    res.json({ message: "Should return a todo" });
  }
}
