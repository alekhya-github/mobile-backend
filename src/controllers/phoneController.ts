import { Request, Response } from "express";
import { PhoneService } from "../services/phoneService";
import {
  PhoneListResponse,
  PhoneResponse,
  TradeInOfferResponse,
} from "../models/Phone";

export class PhoneController {
  /**
   * Get all phones
   * GET /api/phones
   */
  static async getAllPhones(_req: Request, res: Response): Promise<void> {
    try {
      const phones = await PhoneService.getPhones();

      const response: PhoneListResponse = {
        success: true,
        data: phones,
        message: `Found ${phones.length} phones`,
      };

      res.status(200).json(response);
    } catch (error) {
      const errorResponse: PhoneListResponse = {
        success: false,
        error: "Failed to fetch phones",
        message:
          error instanceof Error ? error.message : "Unknown error occurred",
      };

      res.status(500).json(errorResponse);
    }
  }

  /**
   * Get phone by ID
   * GET /api/phones/:id
   */
  static async getPhoneById(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;

      if (!id) {
        const errorResponse: PhoneResponse = {
          success: false,
          error: "Phone ID is required",
        };
        res.status(400).json(errorResponse);
        return;
      }

      const phone = await PhoneService.getPhoneById(id);

      if (!phone) {
        const notFoundResponse: PhoneResponse = {
          success: false,
          error: "Phone not found",
          message: `No phone found with ID: ${id}`,
        };
        res.status(404).json(notFoundResponse);
        return;
      }

      const response: PhoneResponse = {
        success: true,
        data: phone,
        message: `Phone found: ${phone.brand} ${phone.model}`,
      };

      res.status(200).json(response);
    } catch (error) {
      const errorResponse: PhoneResponse = {
        success: false,
        error: "Failed to fetch phone",
        message:
          error instanceof Error ? error.message : "Unknown error occurred",
      };

      res.status(500).json(errorResponse);
    }
  }

  /**
   * Get phones by brand
   * GET /api/phones/brand/:brand
   */
  static async getPhonesByBrand(req: Request, res: Response): Promise<void> {
    try {
      const { brand } = req.params;

      if (!brand) {
        const errorResponse: PhoneListResponse = {
          success: false,
          error: "Brand name is required",
        };
        res.status(400).json(errorResponse);
        return;
      }

      const phones = await PhoneService.getPhonesByBrand(brand);

      const response: PhoneListResponse = {
        success: true,
        data: phones,
        message: `Found ${
          phones.length
        } phones for brand: ${brand.toUpperCase()}`,
      };

      res.status(200).json(response);
    } catch (error) {
      const errorResponse: PhoneListResponse = {
        success: false,
        error: "Failed to fetch phones by brand",
        message:
          error instanceof Error ? error.message : "Unknown error occurred",
      };

      res.status(500).json(errorResponse);
    }
  }

  /**
   * Get available brands
   * GET /api/phones/brands
   */
  static async getAvailableBrands(_req: Request, res: Response): Promise<void> {
    try {
      const brands = await PhoneService.getAvailableBrands();

      const response = {
        success: true,
        data: brands,
        message: `Found ${brands.length} available brands`,
      };

      res.status(200).json(response);
    } catch (error) {
      const errorResponse = {
        success: false,
        error: "Failed to fetch available brands",
        message:
          error instanceof Error ? error.message : "Unknown error occurred",
      };

      res.status(500).json(errorResponse);
    }
  }

  /**
   * Get trade-in offer details
   * POST /api/trade-in-offer
   */
  static async getTradeInOffer(req: Request, res: Response): Promise<void> {
    try {
      const { selectedPhoneId, tradeinPhoneBrand, tradeinModel } = req.body;

      // Validate required fields
      if (!selectedPhoneId || !tradeinPhoneBrand || !tradeinModel) {
        const errorResponse: TradeInOfferResponse = {
          success: false,
          error: "Missing required fields",
          message:
            "selectedPhoneId, tradeinPhoneBrand, and tradeinModel are required",
        };
        res.status(400).json(errorResponse);
        return;
      }

      const tradeInOffer = await PhoneService.getTradeInOffer({
        selectedPhoneId,
        tradeinPhoneBrand,
        tradeinModel,
      });

      const response: TradeInOfferResponse = {
        success: true,
        data: tradeInOffer,
        message: "Trade-in offer details retrieved successfully",
      };

      res.status(200).json(response);
    } catch (error) {
      const errorResponse: TradeInOfferResponse = {
        success: false,
        error: "Failed to fetch trade-in offer",
        message:
          error instanceof Error ? error.message : "Unknown error occurred",
      };

      res.status(500).json(errorResponse);
    }
  }
}
