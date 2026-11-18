import { personSchema } from "./author";

const siteUrl = "https://summitledgerbooks.com/";

/** One local accounting business, reused on the home and county pages. */
export const businessSchema = {
  "@context": "https://schema.org",
  "@type": ["AccountingService", "LocalBusiness"],
  "@id": "https://summitledgerbooks.com/#business",
  name: "Summit Ledger Books",
  description:
    "Real estate bookkeeping for investors, landlords, and property managers in Davis County and Salt Lake County, Utah. Based in Kaysville.",
  url: siteUrl,
  logo: "https://summitledgerbooks.com/images/logos/logo.png",
  image: "https://summitledgerbooks.com/images/og-images/og-image.jpg",
  telephone: "+13854502276",
  email: "austin@summitledgerbooks.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kaysville",
    addressRegion: "UT",
    postalCode: "84037",
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "State", name: "Utah" },
    { "@type": "AdministrativeArea", name: "Davis County" },
    { "@type": "AdministrativeArea", name: "Salt Lake County" },
  ],
  knowsAbout: [
    "rental property bookkeeping",
    "property management trust accounting",
    "short-term rental bookkeeping",
    "QuickBooks Online",
  ],
  priceRange: "$$",
  founder: personSchema,
  sameAs: ["https://www.linkedin.com/in/summitledgerbooks/"],
};
