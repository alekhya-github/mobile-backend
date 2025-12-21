import express from "express";
import { PhoneController } from "../controllers/phoneController";

const router = express.Router();

// Phone routes
router.get("/phones", PhoneController.getAllPhones);
router.get("/phones/:id", PhoneController.getPhoneById);
router.get("/phones/brand/:brand", PhoneController.getPhonesByBrand);
router.get("/brands", PhoneController.getAvailableBrands);

export default router;
