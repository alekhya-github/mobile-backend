import { Phone, TradeInOfferRequest, TradeInOfferData } from "../models/Phone";
import { phoneData } from "../data/phoneData";
import { getTradeInValue, getPhonePromotion } from "../data/tradeInData";

export class PhoneService {
  /**
   * Get all phones with simulated network delay from dummy data
   * @returns Promise<Phone[]>
   */
  static async getPhones(): Promise<Phone[]> {
    return new Promise((resolve) => {
      // Simulate network delay (same as frontend service)
      setTimeout(() => {
        resolve([...phoneData]); // Return copy to prevent mutations
      }, 500);
    });
  }

  /**
   * Get phone by ID with simulated network delay
   * @param id - Phone ID to search for
   * @returns Promise<Phone | null>
   */
  static async getPhoneById(id: string): Promise<Phone | null> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const phone = phoneData.find((p) => p.id === id);
        resolve(phone ? { ...phone } : null); // Return copy to prevent mutations
      }, 300);
    });
  }

  /**
   * Filter phones by brand with simulated network delay
   * @param brand - Brand name to filter by (case-insensitive)
   * @returns Promise<Phone[]>
   */
  static async getPhonesByBrand(brand: string): Promise<Phone[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const phones = phoneData.filter(
          (p) => p.brand.toLowerCase() === brand.toLowerCase()
        );
        resolve(phones.map((phone) => ({ ...phone }))); // Return copies to prevent mutations
      }, 400);
    });
  }

  /**
   * Get available phone brands
   * @returns Promise<string[]>
   */
  static async getAvailableBrands(): Promise<string[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const brands = [...new Set(phoneData.map((phone) => phone.brand))];
        resolve(brands);
      }, 200);
    });
  }

  /**
   * Get trade-in offer based on request
   * @param request - Trade-in offer request with phone and trade-in device details
   * @returns Promise<TradeInOfferData>
   */
  static async getTradeInOffer(
    request: TradeInOfferRequest
  ): Promise<TradeInOfferData> {
    return new Promise((resolve) => {
      setTimeout(() => {
        // Look up trade-in value based on brand and model
        const tradeInEntry = getTradeInValue(
          request.tradeinPhoneBrand,
          request.tradeinModel
        );

        // Get promotion based on selected phone being purchased
        const phonePromotion = getPhonePromotion(request.selectedPhoneId);

        const response: TradeInOfferData = {
          selectedPhoneId: request.selectedPhoneId,
          tradeinPhoneBrand: request.tradeinPhoneBrand,
          tradeinModel: request.tradeinModel,
          tradeinValue: tradeInEntry ? tradeInEntry.tradeinValue : "$0",
          tradeinPromotion: phonePromotion.basePromotion,
        };

        resolve(response);
      }, 300);
    });
  }
}
