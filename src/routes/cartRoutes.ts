import express from "express";
import { addToCart } from "../controllers/cartController";

const router = express.Router();

router.post("/cart", addToCart);

export default router;
