import { Request, Response } from "express";

export class NotesController {
  constructor() {}

  getAll(req: Request, res: Response) {
    res.json({ message: "Should return all notes" });
  }

  getOne(req: Request, res: Response) {
    res.json({ message: "Should return a notes" });
  }
}
