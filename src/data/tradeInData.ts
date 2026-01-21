// Trade-In values lookup data
export interface TradeInValueEntry {
  brand: string;
  model: string;
  tradeinValue: string;
}

// Phone-specific promotion values (based on selectedPhoneId)
export interface PhonePromotionEntry {
  phoneId: string;
  basePromotion: string;
}

// Promotions vary by the phone being purchased
export const phonePromotionsData: PhonePromotionEntry[] = [
  { phoneId: "apple-iphone-17", basePromotion: "$200" },
  { phoneId: "samsung-galaxy-s25-ultra", basePromotion: "$250" },
  { phoneId: "google-pixel-10-pro", basePromotion: "$150" },
];

// Trade-in values for different phone models (base values)
export const tradeInValuesData: TradeInValueEntry[] = [
  // Apple devices
  { brand: "Apple", model: "iPhone-15-Pro-Max", tradeinValue: "$830" },
  { brand: "Apple", model: "iPhone-15-Pro", tradeinValue: "$730" },
  { brand: "Apple", model: "iPhone-15", tradeinValue: "$530" },
  { brand: "Apple", model: "iPhone-14-Pro-Max", tradeinValue: "$630" },
  { brand: "Apple", model: "iPhone-14-Pro", tradeinValue: "$530" },
  { brand: "Apple", model: "iPhone-14", tradeinValue: "$430" },
  { brand: "Apple", model: "iPhone-13-Pro-Max", tradeinValue: "$500" },
  { brand: "Apple", model: "iPhone-13-Pro", tradeinValue: "$400" },
  { brand: "Apple", model: "iPhone-13", tradeinValue: "$350" },
  { brand: "Apple", model: "iPhone-12-Pro-Max", tradeinValue: "$380" },
  { brand: "Apple", model: "iPhone-12-Pro", tradeinValue: "$320" },
  { brand: "Apple", model: "iPhone-12", tradeinValue: "$280" },
  { brand: "Apple", model: "iPhone-11-Pro-Max", tradeinValue: "$300" },
  { brand: "Apple", model: "iPhone-11-Pro", tradeinValue: "$250" },
  { brand: "Apple", model: "iPhone-11", tradeinValue: "$300" },
  { brand: "Apple", model: "iPhone-XS-Max", tradeinValue: "$180" },
  { brand: "Apple", model: "iPhone-XS", tradeinValue: "$150" },
  { brand: "Apple", model: "iPhone-XR", tradeinValue: "$120" },
  { brand: "Apple", model: "iPhone-X", tradeinValue: "$100" },

  // Samsung devices
  { brand: "Samsung", model: "Galaxy-S24-Ultra", tradeinValue: "$800" },
  { brand: "Samsung", model: "Galaxy-S24-Plus", tradeinValue: "$600" },
  { brand: "Samsung", model: "Galaxy-S24", tradeinValue: "$450" },
  { brand: "Samsung", model: "Galaxy-S23-Ultra", tradeinValue: "$550" },
  { brand: "Samsung", model: "Galaxy-S23-Plus", tradeinValue: "$400" },
  { brand: "Samsung", model: "Galaxy-S23", tradeinValue: "$350" },
  { brand: "Samsung", model: "Galaxy-S22-Ultra", tradeinValue: "$400" },
  { brand: "Samsung", model: "Galaxy-S22-Plus", tradeinValue: "$300" },
  { brand: "Samsung", model: "Galaxy-S22", tradeinValue: "$250" },
  { brand: "Samsung", model: "Galaxy-S21-Ultra", tradeinValue: "$300" },
  { brand: "Samsung", model: "Galaxy-S21-Plus", tradeinValue: "$220" },
  { brand: "Samsung", model: "Galaxy-S21", tradeinValue: "$180" },

  // Google devices
  { brand: "Google", model: "Pixel-9-Pro", tradeinValue: "$600" },
  { brand: "Google", model: "Pixel-9", tradeinValue: "$450" },
  { brand: "Google", model: "Pixel-8-Pro", tradeinValue: "$400" },
  { brand: "Google", model: "Pixel-8", tradeinValue: "$300" },
  { brand: "Google", model: "Pixel-7-Pro", tradeinValue: "$280" },
  { brand: "Google", model: "Pixel-7", tradeinValue: "$200" },
  { brand: "Google", model: "Pixel-6-Pro", tradeinValue: "$180" },
  { brand: "Google", model: "Pixel-6", tradeinValue: "$120" },
];

/**
 * Find trade-in value for a specific device
 */
export function getTradeInValue(
  brand: string,
  model: string
): TradeInValueEntry | null {
  const entry = tradeInValuesData.find(
    (item) =>
      item.brand.toLowerCase() === brand.toLowerCase() &&
      item.model.toLowerCase() === model.toLowerCase()
  );
  return entry || null;
}

/**
 * Get promotion based on selected phone being purchased
 */
export function getPhonePromotion(
  selectedPhoneId: string
): PhonePromotionEntry {
  const promo = phonePromotionsData.find(
    (item) => item.phoneId.toLowerCase() === selectedPhoneId.toLowerCase()
  );
  // Default promotion if phone not found
  return promo || { phoneId: selectedPhoneId, basePromotion: "$100" };
}
