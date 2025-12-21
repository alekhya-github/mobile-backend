import { Phone } from "../models/Phone";
import { phoneData } from "../data/phoneData";

export class PhoneService {
  /**
   * Get all phones with simulated network delay
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
}
