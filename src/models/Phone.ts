// Storage option interface
export interface StorageOption {
  capacity: string;
  price: string;
  monthlyPrice: string;
}

// Color option interface
export interface ColorOption {
  name: string;
  hexCode: string;
  image: string;
}

// Trade-in option interface
export interface TradeInOption {
  condition: string;
  savings: string;
}

// Feature interface
export interface Feature {
  title: string;
  description: string;
}

// Accessory interface
export interface Accessory {
  id: string;
  name: string;
  brand: string;
  price: string;
  image: string;
}

// Phone data model interface
export interface Phone {
  id: string;
  brand: string;
  model: string;
  tagline?: string;
  images: {
    main: string;
    gallery: string[];
  };
  colors: ColorOption[];
  selectedColor?: string;
  storageOptions: StorageOption[];
  selectedStorage?: string;
  pricing: {
    fullPrice: string;
    monthlyPrice: string;
    originalMonthlyPrice?: string;
    financingText: string;
    promoText?: string;
  };
  availability: {
    status: "In Stock" | "Out of Stock" | "Backorder" | "Pre-order";
    estimatedShipDate?: string;
  };
  purchaseOptions: {
    addNewLine: boolean;
    upgradeExistingLine: boolean;
    tradeInAvailable: boolean;
    tradeInOptions?: TradeInOption[];
  };
  features: {
    keyFeatures: Feature[];
    specs: {
      chip?: string;
      display?: string;
      camera?: string;
      battery?: string;
      connectivity?: string;
      dimensions?: string;
      weight?: string;
      network?: string;
      sensors?: string;
      security?: string;
      accessibility?: string;
    };
  };
  accessories: Accessory[];
  badges?: string[];
  is5G: boolean;
  freeShipping: boolean;
}

// API Response types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PhoneListResponse extends ApiResponse<Phone[]> {}
export interface PhoneResponse extends ApiResponse<Phone> {}

// Trade-In Offer interfaces
export interface TradeInOfferRequest {
  selectedPhoneId: string;
  tradeinPhoneBrand: string;
  tradeinModel: string;
}

export interface TradeInOfferData {
  selectedPhoneId: string;
  tradeinPhoneBrand: string;
  tradeinModel: string;
  tradeinValue: string;
  tradeinPromotion: string;
}

export interface TradeInOfferResponse extends ApiResponse<TradeInOfferData> {}
