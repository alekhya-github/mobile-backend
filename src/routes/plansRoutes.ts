import { Router, Request, Response } from "express";
import plansData from "../data/plansData";

const router = Router();

// GET /plans endpoint
router.get("/plans", (_req: Request, res: Response) => {
  res.json(plansData);
});

export default router;
