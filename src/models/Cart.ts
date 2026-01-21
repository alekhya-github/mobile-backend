export interface CartPayload {
  fulfillmentMethod: string;
  items: CartItemPayload[];
}

export interface CartItemPayload {
  itemType: string;
  type: string;
  sku: string;
  productDetail: {
    nickname: string;
    portInfo: {
      portingFlag: string;
    };
    servicePlans: ServicePlanPayload[];
  };
  simType: string;
}

export interface ServicePlanPayload {
  planType: string;
  selectedPlanId: string;
}

export interface CartResponse {
  id: string;
  contactEmail: string;
  contactNumber: string;
  shippingAddress: ShippingAddress;
  shippingMethod: any;
  price: PriceDetails;
  items: CartItem[];
  orderId: {
    key: string;
    value: string;
  };
  messages: any;
  watchInCart: boolean;
  taxSummary: TaxSummary;
  cartMinDownPayment: number;
  customerEnterdDownPayment: number;
  addaline: boolean;
  pbbInfo: any;
}

export interface ShippingAddress {
  firstName: string;
  lastName: string;
  address: {
    address1: string;
    address2: string;
    city: string;
    state: string;
    zip: string;
  };
}

export interface PriceDetails {
  monthlyRecurringCharge: number;
  monthlyRecurringTax: number;
  oneTimeCharge: number;
  oneTimeTax: number;
  monthlyRecurringTotal: number;
  oneTimeTotal: number;
}

export interface CartItem {
  itemType: string;
  type: string;
  id: string;
  oldLineId: any;
  oldImei: any;
  firstDevice: boolean;
  name: string;
  brand: string;
  sku: string;
  fulfillmentMethod: string;
  isTaxCalculated: boolean;
  isProrated: boolean;
  dcaRequired: boolean;
  equipmentSubType: string;
  variants: Variant[];
  relatedItem: any;
  productDetail: ProductDetail;
  byod: boolean;
  byodCarrier: any;
  exchangeDetails: any;
  additionalCharges: any;
  price: PriceDetails;
  iphoneExists: boolean;
  earlyUpgradeOffer: any;
  waiveRestockingFee: boolean;
  isTradeInStarted: boolean;
}

export interface Variant {
  skuCode: string;
  images: {
    primary: ImageDetail;
    hero: ImageDetail;
    alternate: any[];
  };
  color: {
    name: string;
    hex: string;
  };
  capacity: string;
  currency: string;
  currencyString: string;
  prices: Price[];
  status: string;
  dateAdded: string;
  availabilityDate: string;
  catalogItemId: string;
  releaseDate: any;
  shipDate: any;
  promotions: any;
  promotionList: any[];
  priceDiff: any;
  minHostDevModel: any;
  phoneSeries: string;
  watchSeries: any;
  maxHostDevModel: any;
  smppTier: string;
  cdmaLess: any;
  modelNumber: string;
  equipmentSubType: string;
  is5g: boolean;
  isEsimCapable: boolean;
}

export interface ImageDetail {
  alt: string;
  url: string;
  type: string;
}

export interface Price {
  id: string;
  originalPrice: number;
  promotionalType: any;
  promotionalValue: any;
  promotionPrice: number;
  promotionStartDate: any;
  promotionEndDate: any;
  term: number;
  promotionId: any;
  promotions: any[];
  downPayment: number;
  payOffAmount: number;
  discountPrice: any;
}

export interface ProductDetail {
  iccid: any;
  imei: any;
  skuType: string;
  lineId: any;
  itemId: string;
  nickname: string;
  portInfo: {
    phoneNumberId: string;
    portingFlag: string;
  };
  servicePlans: ServicePlan[];
  promotion: any;
  agentOverride: boolean;
  promotions: Promotion[];
  promoOptions: any;
  simType: string;
  equipmentSubType: string;
}

export interface ServicePlan {
  requiredCount: number;
  type: string;
  price: PriceDetails;
  selectedPlanId: string;
  options?: PlanOption[];
  serviceId: string;
}

export interface PlanOption {
  id: string;
  name: string;
  type: string;
  price: PriceDetails;
  category: string;
  term: number;
  description: string;
  dataIncluded: number;
  throttleLimit: number;
  dpfoLimit: number;
  dataUnlimited: boolean;
  details: any[];
  variants: any[];
  auSubscription: boolean;
  dataUnlimitedPlus: boolean;
  planShortName?: string;
  smppTier?: string;
  planGroup?: string;
  services?: any;
  customerType?: string;
}

export interface Promotion {
  promoCode: string;
  promotionID: string;
  promoName: string;
  promoDescription: string;
  promoType: string;
  offerDiscountType: string;
  offerDiscount: string;
  geoPromo: boolean;
  promoTermsAndConditions?: string;
  price: PriceDetails;
  promoExpirationDate: string;
  durationOfServicePromotion: number;
  promoId: string;
  metadata: {
    firstDevice: boolean;
    waiveActivationFee: boolean;
    outDatedOS: boolean;
    tradeInStarted: boolean;
    agentOverride: boolean;
    retroAddPromo: boolean;
    removePromo: boolean;
    proRatePromo: boolean;
    forfeitUnrealizedCredit?: string;
    taxCalculationPostOffer?: string;
  };
  rules: {
    showPromoBeforeAuth: boolean;
    geoPromo: boolean;
    predefinedList: boolean;
    criteria: any[];
  };
  status: string;
  promoDisplayable: boolean;
  waiveActivationFee: boolean;
}

export interface TaxSummary {
  inclusiveTaxes: {
    taxes: Tax[];
    monthlyTotal: number;
    oneTimeTotal: number;
  };
  exclusiveTaxes: {
    taxes: Tax[];
    monthlyTotal: number;
    oneTimeTotal: number;
  };
}

export interface Tax {
  name: string;
  monthly: number;
  oneTime: number;
  category: string;
  code: string;
}
