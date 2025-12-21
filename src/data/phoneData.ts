import { Phone } from "../models/Phone";

// Mock phone data - duplicated from frontend phoneService.ts
export const phoneData: Phone[] = [
  {
    id: "iphone-17-pro",
    brand: "APPLE",
    model: "iPhone 17 Pro",
    image: "/images/iphone-17-pro.jpg",
    monthlyPrice: "$7.50/mo",
    originalMonthlyPrice: "$30.55/mo",
    fullPrice: "$1,099.99",
    financing: "For 36 months, 0% APR",
    promotion: "Up to $830 savings with trade in promotions",
    colors: ["#ff8c42", "#4a5568", "#e2e8f0"],
    is5G: true,
  },
  {
    id: "samsung-galaxy-s24",
    brand: "SAMSUNG",
    model: "Galaxy S24 Ultra",
    image: "/images/samsung-s24.jpg",
    monthlyPrice: "$8.99/mo",
    fullPrice: "$1,199.99",
    financing: "For 36 months, 0% APR",
    colors: ["#000000", "#8b5cf6", "#f1f5f9"],
    is5G: true,
  },
  {
    id: "google-pixel-8",
    brand: "GOOGLE",
    model: "Pixel 8 Pro",
    image: "/images/pixel-8.jpg",
    monthlyPrice: "$6.25/mo",
    fullPrice: "$999.99",
    financing: "For 36 months, 0% APR",
    promotion: "Free Pixel Buds with purchase",
    colors: ["#1f2937", "#3b82f6", "#f8fafc"],
    is5G: true,
  },
];
