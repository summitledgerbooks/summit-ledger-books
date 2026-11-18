// Single source of truth for the site's author (solo practice).
export const AUTHOR = {
  name: "Austin Adams",
  jobTitle: "Founder & Bookkeeper, Summit Ledger Books",
  url: "https://summitledgerbooks.com/about/",
  sameAs: ["https://www.linkedin.com/company/summit-ledger-books/"],
};

export const personSchema = {
  "@type": "Person",
  name: AUTHOR.name,
  url: AUTHOR.url,
  jobTitle: AUTHOR.jobTitle,
  sameAs: AUTHOR.sameAs,
};
