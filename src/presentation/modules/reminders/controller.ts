import { Request, Response } from "express";

export class RemindersController {
  constructor() {}

  getAll(req: Request, res: Response) {
    res.json({ message: "Should return all reminders" });
  }

  getOne(req: Request, res: Response) {
    res.json({ message: "Should return a reminder" });
  }
}
