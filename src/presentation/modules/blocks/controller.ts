import { Request, Response } from "express";

export class BlocksController {
  constructor() {}


  getOne(req: Request, res: Response) {
    res.json({ message: "Should return a block" });
  }
}
