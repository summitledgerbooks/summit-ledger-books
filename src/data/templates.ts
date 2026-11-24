import type { ImageMetadata } from "astro";
import landlord from "../assets/templates/landlord-rental-bookkeeping.webp";
import brrrr from "../assets/templates/rental-brrrr-analyzer.webp";
import flip from "../assets/templates/house-flip-tracker.webp";
import partner from "../assets/templates/partner-profit-split.webp";
import contractor from "../assets/templates/contractor-job-costing.webp";
import yearEnd from "../assets/templates/year-end-checklist.webp";
import investorBundle from "../assets/templates/investor-bundle.webp";
import agentCommission from "../assets/templates/agent-commission-expense-tracker.webp";

export const ETSY_SHOP_URL = "https://www.etsy.com/shop/SummitLedgerShop";

export const YEAR_END_LISTING_URL = "https://www.etsy.com/listing/4621269996";

export interface TemplateProduct {
  name: string;
  price: string;
  priceLabel: string;
  description?: string;
  url: string;
  image?: ImageMetadata;
  imageAlt?: string;
  badge?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}

export const templateProducts: TemplateProduct[] = [
  {
    name: "Investor Bundle",
    price: "27.99",
    priceLabel: "$27.99",
    description:
      "Five tools, one bundle: the landlord tracker, deal analyzer, flip tracker, partner split tracker, and year-end checklist, with quick-start guides. $52.95 if bought separately.",
    url: "https://www.etsy.com/listing/4621188747",
    image: investorBundle,
    imageAlt: "Investor bundle of real estate spreadsheet templates",
    badge: "Best value",
  },
  {
    name: "Year-End Bookkeeping & Tax Prep Checklist",
    price: "5.99",
    priceLabel: "$5.99",
    description:
      "A printable PDF checklist plus an Excel tracker with a 1099 vendor tracker, for small businesses, landlords, and contractors.",
    url: YEAR_END_LISTING_URL,
    image: yearEnd,
    imageAlt: "Year-end bookkeeping and tax prep checklist",
  },
  {
    name: "Landlord Rental Bookkeeping Tracker",
    price: "12.99",
    priceLabel: "$12.99",
    description: "Rent, expenses, and Schedule E totals.",
    url: "https://www.etsy.com/listing/4621189882",
    image: landlord,
    imageAlt: "Landlord Rental Bookkeeping Tracker spreadsheet",
  },
  {
    name: "Rental & BRRRR Deal Analyzer",
    price: "11.99",
    priceLabel: "$11.99",
    description: "Cash flow, CoC return, and refi math.",
    url: "https://www.etsy.com/listing/4621191878",
    image: brrrr,
    imageAlt: "Rental and BRRRR deal analyzer spreadsheet",
  },
  {
    name: "House Flip Budget & Profit Tracker",
    price: "11.99",
    priceLabel: "$11.99",
    description: "Rehab budget to final profit.",
    url: "https://www.etsy.com/listing/4621192438",
    image: flip,
    imageAlt: "House flip budget and profit tracker spreadsheet",
  },
  {
    name: "Partner Profit Split Tracker",
    price: "9.99",
    priceLabel: "$9.99",
    description: "Fair, clear splits for every deal.",
    url: "https://www.etsy.com/listing/4621193018",
    image: partner,
    imageAlt: "Partner profit split tracker spreadsheet",
  },
  {
    name: "Agent Commission & Expense Tracker",
    price: "9.99",
    priceLabel: "$9.99",
    description:
      "Track commissions, business expenses, and quarterly tax set-asides in one simple spreadsheet.",
    url: "https://www.etsy.com/listing/4621193656",
    image: agentCommission,
    imageAlt: "Agent commission and expense tracker spreadsheet",
  },
  {
    name: "Contractor Job Costing Workbook",
    price: "14.99",
    priceLabel: "$14.99",
    description: "Know your profit on every job.",
    url: "https://www.etsy.com/listing/4621180917",
    image: contractor,
    imageAlt: "Contractor job costing workbook spreadsheet",
    secondaryHref: "/services/construction-bookkeeping/",
    secondaryLabel: "Want it done for you? → Construction bookkeeping",
  },
];

export const freeTemplatePosts = new Set([
  "1099-contractors-rental-property-2026-threshold",
  "utah-property-management-trust-account-rules",
  "utah-short-term-rental-taxes-bookkeeping",
  "schedule-e-expense-categories-quickbooks",
  "1031-exchange-bookkeeping-journal-entries",
  "catch-up-bookkeeping-cost-landlords",
  "owner-draw-rental-property-llc",
]);
