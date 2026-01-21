import { CartPayload, CartResponse } from "../models/Cart";
import { v4 as uuidv4 } from "uuid";

export const createCart = (payload: CartPayload): CartResponse => {
  // Mock response based on the provided cart-response.json
  const cartId = uuidv4();
  const orderId = Math.floor(Math.random() * 90000000000000) + 10000000000000;
  const itemId = uuidv4();
  const phoneNumberId = uuidv4();

  // Extract data from payload
  const item = payload.items[0];
  const nickname = item.productDetail.nickname;
  const sku = item.sku;
  const simType = item.simType;

  // Find selected plans
  const servicePlans = item.productDetail.servicePlans;
  const ratePlanId =
    servicePlans.find((sp) => sp.planType === "RatePlan")?.selectedPlanId || "";
  const insurancePlanId =
    servicePlans.find((sp) => sp.planType === "InsurancePlan")
      ?.selectedPlanId || "";
  const paymentPlanId =
    servicePlans.find((sp) => sp.planType === "PaymentPlan")?.selectedPlanId ||
    "";

  // Get phone name from SKU (simplified mapping)
  const phoneNameMap: { [key: string]: { name: string; brand: string } } = {
    "195949035005": { name: "iPhone 15", brand: "Apple" },
    "195949034909": { name: "iPhone 15", brand: "Apple" },
    "195949034701": { name: "iPhone 15", brand: "Apple" },
  };

  const phoneInfo = phoneNameMap[sku] || { name: "iPhone 15", brand: "Apple" };

  // Calculate prices based on selected plans
  const deviceMonthlyCharge = paymentPlanId === "RECURRING" ? 17.49 : 0;
  const deviceOneTimeCharge = paymentPlanId === "ONETIME" ? 629.99 : 17.49;

  const insuranceMonthlyCharge =
    insurancePlanId === "94333561"
      ? 10
      : insurancePlanId === "94333563"
        ? 6
        : 0;

  let ratePlanMonthlyCharge = 50; // Default for Unlimited Plus

  if (ratePlanId === "88465835") {
    ratePlanMonthlyCharge = 14;
  } else if (ratePlanId === "88480735") {
    ratePlanMonthlyCharge = 29.99;
  }

  // Apply promotions (simplified)
  const monthlyRecurringCharge =
    deviceMonthlyCharge + insuranceMonthlyCharge + 10; // After all discounts
  const oneTimeTax = 52.07;

  const response: CartResponse = {
    id: cartId,
    contactEmail: "customer@example.com",
    contactNumber: "9999999999",
    shippingAddress: {
      firstName: "John",
      lastName: "Doe",
      address: {
        address1: "123 Main St",
        address2: "",
        city: "Reno",
        state: "NV",
        zip: "89521",
      },
    },
    shippingMethod: {},
    price: {
      monthlyRecurringCharge: monthlyRecurringCharge,
      monthlyRecurringTax: 0,
      oneTimeCharge: deviceOneTimeCharge,
      oneTimeTax: oneTimeTax,
      monthlyRecurringTotal: monthlyRecurringCharge,
      oneTimeTotal: deviceOneTimeCharge + oneTimeTax,
    },
    items: [
      {
        itemType: "DEVICE",
        type: "SALES",
        id: itemId,
        oldLineId: null,
        oldImei: null,
        firstDevice: false,
        name: phoneInfo.name,
        brand: phoneInfo.brand,
        sku: sku,
        fulfillmentMethod: "SHIP_TO_HOME",
        isTaxCalculated: true,
        isProrated: false,
        dcaRequired: false,
        equipmentSubType: "SMTPH",
        variants: [
          {
            skuCode: sku,
            images: {
              primary: {
                alt: `${phoneInfo.brand} ${phoneInfo.name} Black`,
                url: "https://res.cloudinary.com/spectrumobile/image/upload/Specturm%20Mobile%20Buy%20Flow/Apple/Apple%2015/iPhone-15-Black-PRI.png",
                type: "PRIMARY",
              },
              hero: {
                alt: `${phoneInfo.brand} ${phoneInfo.name} Black`,
                url: "https://res.cloudinary.com/spectrumobile/image/upload/Specturm%20Mobile%20Buy%20Flow/Apple/Apple%2015/iPhone-15-Black-HERO.png",
                type: "HERO",
              },
              alternate: [],
            },
            color: {
              name: "Black",
              hex: "#000000",
            },
            capacity: "128GB",
            currency: "USD",
            currencyString: "$",
            prices: [
              {
                id: "ONETIME",
                originalPrice: 629.99,
                promotionalType: null,
                promotionalValue: null,
                promotionPrice: 0,
                promotionStartDate: null,
                promotionEndDate: null,
                term: 1,
                promotionId: null,
                promotions: [],
                downPayment: 0,
                payOffAmount: 0,
                discountPrice: null,
              },
              {
                id: "RECURRING",
                originalPrice: 17.49,
                promotionalType: null,
                promotionalValue: null,
                promotionPrice: 0,
                promotionStartDate: null,
                promotionEndDate: null,
                term: 36,
                promotionId: null,
                promotions: [],
                downPayment: 0,
                payOffAmount: 0,
                discountPrice: null,
              },
            ],
            status: "AVAILABLE",
            dateAdded: "2023-09-12T00:00:00.000Z",
            availabilityDate: "0001-01-01T00:00:00.000Z",
            catalogItemId: "94732992",
            releaseDate: null,
            shipDate: null,
            promotions: null,
            promotionList: [],
            priceDiff: null,
            minHostDevModel: null,
            phoneSeries: "15",
            watchSeries: null,
            maxHostDevModel: null,
            smppTier: "",
            cdmaLess: null,
            modelNumber: "A2846",
            equipmentSubType: "SMTPH",
            is5g: true,
            isEsimCapable: true,
          },
        ],
        relatedItem: null,
        productDetail: {
          iccid: null,
          imei: null,
          skuType: "AVAILABLE",
          lineId: null,
          itemId: itemId,
          nickname: nickname,
          portInfo: {
            phoneNumberId: phoneNumberId,
            portingFlag: "N",
          },
          servicePlans: [
            {
              requiredCount: 0,
              type: "PaymentPlan",
              price: {
                monthlyRecurringCharge: deviceMonthlyCharge,
                monthlyRecurringTax: 0,
                oneTimeCharge: deviceMonthlyCharge,
                oneTimeTax: oneTimeTax,
                monthlyRecurringTotal: deviceMonthlyCharge,
                oneTimeTotal: deviceMonthlyCharge,
              },
              selectedPlanId: paymentPlanId,
              options: [
                {
                  id: "RECURRING",
                  name: "Monthly",
                  type: "RECURRING",
                  price: {
                    monthlyRecurringCharge: 17.49,
                    monthlyRecurringTax: 0,
                    oneTimeCharge: 17.49,
                    oneTimeTax: oneTimeTax,
                    monthlyRecurringTotal: 17.49,
                    oneTimeTotal: 17.49,
                  },
                  category: "DEVICE",
                  term: 36,
                  description: "Monthly",
                  dataIncluded: 0,
                  throttleLimit: 0,
                  dpfoLimit: 0,
                  dataUnlimited: false,
                  details: [],
                  variants: [],
                  auSubscription: false,
                  dataUnlimitedPlus: false,
                },
                {
                  id: "ONETIME",
                  name: "Pay in Full",
                  type: "ONETIME",
                  price: {
                    monthlyRecurringCharge: 0,
                    monthlyRecurringTax: 0,
                    oneTimeCharge: 629.99,
                    oneTimeTax: oneTimeTax,
                    monthlyRecurringTotal: 0,
                    oneTimeTotal: 629.99,
                  },
                  category: "DEVICE",
                  term: 1,
                  description: "Pay in Full",
                  dataIncluded: 0,
                  throttleLimit: 0,
                  dpfoLimit: 0,
                  dataUnlimited: false,
                  details: [],
                  variants: [],
                  auSubscription: false,
                  dataUnlimitedPlus: false,
                },
              ],
              serviceId: uuidv4(),
            },
            {
              requiredCount: 0,
              type: "InsurancePlan",
              price: {
                monthlyRecurringCharge: insuranceMonthlyCharge,
                monthlyRecurringTax: insuranceMonthlyCharge * 0.048,
                oneTimeCharge: insuranceMonthlyCharge,
                oneTimeTax: insuranceMonthlyCharge * 0.048,
                monthlyRecurringTotal: 0,
                oneTimeTotal: 0,
              },
              selectedPlanId: insurancePlanId,
              options:
                insurancePlanId === "94333561"
                  ? [
                      {
                        id: "94333561",
                        name: "Repair and Replacement Premium",
                        type: "RECURRING",
                        price: {
                          monthlyRecurringCharge: 10,
                          monthlyRecurringTax: 0.48,
                          oneTimeCharge: 10,
                          oneTimeTax: 0.48,
                          monthlyRecurringTotal: 0,
                          oneTimeTotal: 0,
                        },
                        category: "DEVICE",
                        term: 36,
                        description: "Repair and Replacement Premium",
                        dataIncluded: 0,
                        throttleLimit: 0,
                        dpfoLimit: 0,
                        dataUnlimited: false,
                        details: [],
                        variants: [],
                        planShortName: "RRP",
                        smppTier: "RRP",
                        auSubscription: false,
                        dataUnlimitedPlus: false,
                      },
                    ]
                  : [],
              serviceId: uuidv4(),
            },
            {
              requiredCount: 0,
              type: "RatePlan",
              price: {
                monthlyRecurringCharge: ratePlanMonthlyCharge,
                monthlyRecurringTax: ratePlanMonthlyCharge * 0.0354,
                oneTimeCharge: ratePlanMonthlyCharge,
                oneTimeTax: ratePlanMonthlyCharge * 0.0354,
                monthlyRecurringTotal: 0,
                oneTimeTotal: 0,
              },
              selectedPlanId: ratePlanId,
              options: [
                {
                  id: "88465835",
                  name: "By The Gig",
                  type: "RECURRING",
                  price: {
                    monthlyRecurringCharge: 14,
                    monthlyRecurringTax: 0,
                    oneTimeCharge: 14,
                    oneTimeTax: 0,
                    monthlyRecurringTotal: 0,
                    oneTimeTotal: 0,
                  },
                  category: "DEVICE",
                  term: 36,
                  description:
                    "Pay only $5 for each additional GB of shared data you use each month",
                  dataIncluded: 100,
                  throttleLimit: 5120,
                  dpfoLimit: 5120,
                  dataUnlimited: false,
                  details: [],
                  planGroup: "BY_THE_GIG",
                  variants: [],
                  auSubscription: false,
                  dataUnlimitedPlus: false,
                  customerType: "Residential",
                },
                {
                  id: "88480735",
                  name: "Unlimited",
                  type: "RECURRING",
                  price: {
                    monthlyRecurringCharge: 29.99,
                    monthlyRecurringTax: 0,
                    oneTimeCharge: 29.99,
                    oneTimeTax: 0,
                    monthlyRecurringTotal: 0,
                    oneTimeTotal: 0,
                  },
                  category: "DEVICE",
                  term: 36,
                  description:
                    "No monthly data usage limits (Full speeds up to 30GB)",
                  dataIncluded: 0,
                  throttleLimit: 30720,
                  dpfoLimit: 30720,
                  dataUnlimited: true,
                  details: [],
                  planGroup: "UNLIMITED",
                  variants: [],
                  auSubscription: false,
                  dataUnlimitedPlus: false,
                  customerType: "Residential",
                },
                {
                  id: "92711031",
                  name: "Unlimited Plus",
                  type: "RECURRING",
                  price: {
                    monthlyRecurringCharge: 50,
                    monthlyRecurringTax: 0,
                    oneTimeCharge: 50,
                    oneTimeTax: 0,
                    monthlyRecurringTotal: 0,
                    oneTimeTotal: 0,
                  },
                  category: "DEVICE",
                  term: 36,
                  description:
                    "No monthly data usage limits (Full speeds up to 50GB)",
                  dataIncluded: 0,
                  throttleLimit: 51200,
                  dpfoLimit: 51200,
                  dataUnlimited: false,
                  details: [],
                  planGroup: "UNLIMITED_PLUS",
                  variants: [],
                  auSubscription: true,
                  dataUnlimitedPlus: true,
                  customerType: "Residential",
                },
              ],
              serviceId: uuidv4(),
            },
            {
              requiredCount: 0,
              type: "ActivationFee",
              price: {
                monthlyRecurringCharge: 0,
                monthlyRecurringTax: 0,
                oneTimeCharge: 20,
                oneTimeTax: 0,
                monthlyRecurringTotal: 0,
                oneTimeTotal: 20,
              },
              selectedPlanId: "ACTIVATIONFEE",
              serviceId: uuidv4(),
            },
            {
              requiredCount: 0,
              type: "WaiveActivationFee",
              price: {
                monthlyRecurringCharge: 0,
                monthlyRecurringTax: 0,
                oneTimeCharge: -20,
                oneTimeTax: 0,
                monthlyRecurringTotal: 0,
                oneTimeTotal: -20,
              },
              selectedPlanId: "WAIVEACTIVATIONFEE",
              serviceId: uuidv4(),
            },
            {
              requiredCount: 0,
              type: "DownPayment",
              price: {
                monthlyRecurringCharge: 0,
                monthlyRecurringTax: 0,
                oneTimeCharge: 0,
                oneTimeTax: 0,
                monthlyRecurringTotal: 0,
                oneTimeTotal: 0,
              },
              selectedPlanId: "DOWNPAYMENT",
              serviceId: uuidv4(),
            },
          ],
          promotion: null,
          agentOverride: false,
          promotions: [
            {
              promoCode: "monthlyServiceDiscount",
              promotionID: "F12R048A",
              promoName: "Internet Promotional Discount",
              promoDescription:
                "Get one line of Unlimited Mobile for a full year included with your existing Internet service",
              promoType: "SERVICE",
              offerDiscountType: "AMOUNT",
              offerDiscount: "30",
              geoPromo: false,
              promoTermsAndConditions: "",
              price: {
                monthlyRecurringCharge: -30,
                monthlyRecurringTax: -0.2,
                oneTimeCharge: -30,
                oneTimeTax: -0.2,
                monthlyRecurringTotal: 0,
                oneTimeTotal: 0,
              },
              promoExpirationDate: "1800421199000",
              durationOfServicePromotion: 12,
              promoId: "F12R048A",
              metadata: {
                firstDevice: false,
                waiveActivationFee: false,
                outDatedOS: false,
                tradeInStarted: false,
                agentOverride: false,
                retroAddPromo: false,
                removePromo: false,
                proRatePromo: false,
              },
              rules: {
                showPromoBeforeAuth: true,
                geoPromo: false,
                predefinedList: false,
                criteria: [],
              },
              status: "Eligible",
              promoDisplayable: true,
              waiveActivationFee: true,
            },
            {
              promoCode: "monthlyServiceDiscount",
              promotionID: "D12R001A",
              promoName: "Internet Promotional Discount",
              promoDescription: "Get 1 Unlimited Mobile line free x 12 months",
              promoType: "SERVICE",
              offerDiscountType: "AMOUNT",
              offerDiscount: "10",
              geoPromo: false,
              price: {
                monthlyRecurringCharge: -10,
                monthlyRecurringTax: -0.06,
                oneTimeCharge: -10,
                oneTimeTax: -0.06,
                monthlyRecurringTotal: 0,
                oneTimeTotal: 0,
              },
              promoExpirationDate: "1800421199000",
              durationOfServicePromotion: 12,
              promoId: "D12R001A",
              metadata: {
                firstDevice: false,
                waiveActivationFee: false,
                outDatedOS: false,
                tradeInStarted: false,
                agentOverride: false,
                retroAddPromo: false,
                removePromo: false,
                proRatePromo: false,
              },
              rules: {
                showPromoBeforeAuth: false,
                geoPromo: false,
                predefinedList: false,
                criteria: [],
              },
              status: "Eligible",
              promoDisplayable: true,
              waiveActivationFee: false,
            },
          ],
          promoOptions: null,
          simType: simType,
          equipmentSubType: "SMTPH",
        },
        byod: false,
        byodCarrier: null,
        exchangeDetails: null,
        additionalCharges: null,
        price: {
          monthlyRecurringCharge: monthlyRecurringCharge,
          monthlyRecurringTax: 0,
          oneTimeCharge: monthlyRecurringCharge,
          oneTimeTax: 0,
          monthlyRecurringTotal: 0,
          oneTimeTotal: 0,
        },
        iphoneExists: true,
        earlyUpgradeOffer: null,
        waiveRestockingFee: false,
        isTradeInStarted: false,
      },
    ],
    orderId: {
      key: orderId.toString(),
      value: orderId.toString(),
    },
    messages: null,
    watchInCart: false,
    taxSummary: {
      inclusiveTaxes: {
        taxes: [
          {
            name: "E911 Surcharge",
            monthly: 1,
            oneTime: 1,
            category: "TAX",
            code: "MB.29032",
          },
          {
            name: "State Universal Service Fund",
            monthly: 0,
            oneTime: 0,
            category: "TAX",
            code: "MB.29401",
          },
          {
            name: "DEAF Surcharge",
            monthly: 0.07,
            oneTime: 0.07,
            category: "TAX",
            code: "MB.29421",
          },
          {
            name: "State 988 Fee",
            monthly: 0.35,
            oneTime: 0.35,
            category: "TAX",
            code: "MB.29531",
          },
          {
            name: "Local Gross Receipts Tax",
            monthly: 0.49,
            oneTime: 0.49,
            category: "TAX",
            code: "MB.29062",
          },
          {
            name: "Federal Universal Service Fund",
            monthly: 0.05,
            oneTime: 0.05,
            category: "TAX",
            code: "MB.29400",
          },
        ],
        monthlyTotal: 1.96,
        oneTimeTotal: 1.96,
      },
      exclusiveTaxes: {
        taxes: [
          {
            name: "State And Local Sales Tax",
            monthly: 0,
            oneTime: oneTimeTax,
            category: "TAX",
            code: "MB.29999",
          },
        ],
        monthlyTotal: 0,
        oneTimeTotal: oneTimeTax,
      },
    },
    cartMinDownPayment: 0,
    customerEnterdDownPayment: 0,
    addaline: false,
    pbbInfo: null,
  };

  return response;
};
