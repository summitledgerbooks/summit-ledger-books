export const SITE_NAME = "Summit Ledger Books";
const TITLE_MAX = 60;
const BRAND_SUFFIX = ` | ${SITE_NAME}`;

/**
 * Search title. Uses `seoTitle` when a page's nav label or H1 should stay
 * different, and skips the brand suffix when adding it would pass 60 characters.
 */
export function buildPageTitle(title?: string, seoTitle?: string): string {
  const base = (seoTitle ?? title)?.trim();
  if (!base) return SITE_NAME;
  if (base.includes(SITE_NAME)) return base;
  const branded = `${base}${BRAND_SUFFIX}`;
  return branded.length <= TITLE_MAX ? branded : base;
}
