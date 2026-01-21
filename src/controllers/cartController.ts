import { Request, Response } from "express";
import { createCart } from "../services/cartService";
import { CartPayload } from "../models/Cart";

export const addToCart = (req: Request, res: Response): void => {
  console.log("Cart endpoint hit! Payload:", JSON.stringify(req.body, null, 2));
  try {
    const payload: CartPayload = req.body;

    // Validate payload
    if (!payload || !payload.items || payload.items.length === 0) {
      res.status(400).json({
        error: "Invalid payload",
        message: "Cart payload must contain at least one item",
      });
      return;
    }

    // Create cart response
    const cartResponse = createCart(payload);

    console.log("✅ Cart response generated successfully");

    res.status(200).json(cartResponse);
  } catch (error) {
    console.error("Error creating cart:", error);
    res.status(500).json({
      error: "Internal server error",
      message: "Failed to create cart",
    });
  }
};
