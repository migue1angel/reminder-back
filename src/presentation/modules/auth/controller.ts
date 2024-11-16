import { Request, Response } from "express";

export class AuthController {
  constructor() {}

  login(req: Request, res: Response) {
    res.json({ message: "Should login a user" });
  }

  register(req: Request, res: Response) {
    res.json({ message: "Should register a user" });
  }
}
