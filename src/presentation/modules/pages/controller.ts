import { Request, Response } from "express";

export class PagesController {
  constructor() {}

  getAll(req: Request, res: Response) {
    res.json({ message: "Should return all pages" });
  }

  getOne(req: Request, res: Response) {
    res.json({ message: "Should return a page" });
  }
}
