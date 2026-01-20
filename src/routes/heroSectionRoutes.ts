import { Router, Request, Response } from "express";

const router = Router();

const AEM_PUBLISH_URL = "http://localhost:4503";
const AEM_GRAPHQL_PATH =
  "/graphql/execute.json/ransmobile/heroSection;path=/content/dam/ransmobile/cfs/mobilehomeherosection";

// Fallback data when AEM is unavailable
const FALLBACK_HERO_DATA = {
  data: {
    herosectionmodelByPath: {
      item: {
        badge: "NEW",
        title: "Welcome to Our Mobile Store",
        subtitle:
          "Discover the latest smartphones with amazing deals and offers",
        ctaLabel: "Shop Now",
        ctaLink: "/mobile/phones",
      },
    },
  },
};

// GraphQL-style endpoint for hero section
router.get(
  "/graphql/execute.json/ransmobile/heroSection",
  async (_req: Request, res: Response) => {
    try {
      console.log("Hero section endpoint hit - fetching from AEM Publish...");

      // Fetch data from AEM Publish
      const aemUrl = `${AEM_PUBLISH_URL}${AEM_GRAPHQL_PATH}`;
      console.log("Fetching from:", aemUrl);

      const response = await fetch(aemUrl);

      if (!response.ok) {
        throw new Error(`AEM returned status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Successfully fetched data from AEM Publish");
      res.json(data);
    } catch (error) {
      console.error("Error fetching from AEM Publish:", error);
      console.log("Returning fallback data instead of error");

      // Return fallback data with 200 status to prevent frontend errors
      res.json(FALLBACK_HERO_DATA);
    }
  },
);

export default router;
