---
title: "Schedule E Expense Categories, Line by Line"
description: "Every Schedule E rental expense line explained, with a matching QuickBooks Online account for each, so your books line up with your tax return."
date: 2026-11-18
tags: ["taxes", "Schedule E", "QuickBooks", "rental properties", "bookkeeping"]
draft: false
---

If you own rental property personally or through a single-member LLC, your rental income and expenses usually end up on **Schedule E (Form 1040), Part I**. Your CPA fills out the form, but the numbers come from your books. When your chart of accounts lines up with Schedule E, year-end is mostly a matter of running a report. When it doesn't, someone spends hours re-sorting transactions.

Below is each income and expense line from the [2025 Schedule E](https://www.irs.gov/pub/irs-pdf/f1040se.pdf) (the current form as I write this), what usually goes there, and the QuickBooks Online account I set up to match it. Check the [IRS Schedule E instructions](https://www.irs.gov/instructions/i1040se) and your CPA for the details of your own return. This is about organizing your books, not tax advice.

## How Schedule E Is Organized

Part I lists each property in its own column (A, B, C) with its address, property type, and fair rental and personal use days. Property types on the form include single family, multi-family, vacation/short-term rental, commercial, land, royalties, self-rental, and other.

That per-property layout is the most important thing for your bookkeeping. **Every number on Schedule E is per property.** In QuickBooks Online, that means one set of expense accounts plus a **class (or location) for each property**, not a separate set of accounts for every address. My post on the [rental property chart of accounts](/blog/chart-of-accounts-rental-properties/) explains why.

## Income Lines

### Line 3: Rents received
**QuickBooks account:** Rental Income (Income).

All rent you receive goes here. Some landlords add sub-accounts for late fees, pet rent, or cleaning fees on short-term rentals so they can see each source separately. They all roll up into line 3. Security deposits you'll return **aren't** rent; they belong in a liability account (see [how to record security deposits](/blog/security-deposits-bookkeeping/)).

### Line 4: Royalties received
**QuickBooks account:** usually not needed for a rental portfolio. This line is for royalties like oil, gas, or mineral rights.

## Expense Lines

### Line 5: Advertising
**QuickBooks account:** Advertising (Expenses › Advertising/Promotional).

Listing fees, paid ads, signs, and marketing for vacancies.

### Line 6: Auto and travel
**QuickBooks account:** Auto and Travel (Expenses › Auto).

Driving to properties, showings, and supply runs. The IRS instructions explain the rules for standard mileage versus actual expenses, and the records you need either way. Keep a mileage log; a total with no log behind it is hard to defend.

### Line 7: Cleaning and maintenance
**QuickBooks account:** Cleaning and Maintenance (Expenses › Repair & Maintenance).

Routine upkeep: turnover cleaning, landscaping, snow removal, pest control. For short-term rentals, the cleaning between guests usually lands here.

### Line 8: Commissions
**QuickBooks account:** Commissions (Expenses).

Leasing commissions and finder's fees. Commissions paid when you buy or sell a property are generally added to basis or deducted from the sale, not expensed here. Ask your CPA.

### Line 9: Insurance
**QuickBooks account:** Insurance (Expenses › Insurance).

Landlord, hazard, flood, and liability policies for the rental. If your insurance is paid through mortgage escrow, the amount still belongs here. Record it when the lender pays it from escrow (more on escrow below).

### Line 10: Legal and other professional fees
**QuickBooks account:** Legal and Professional Fees (Expenses › Legal & Professional Fees).

Attorney fees for leases or evictions, bookkeeping, and tax prep for the rental activity.

### Line 11: Management fees
**QuickBooks account:** Management Fees (Expenses).

Fees paid to a property manager. If your PM sends owner statements net of fees, record the gross rent and the fee separately so both show up correctly. My post on [AppFolio and QuickBooks](/blog/appfolio-quickbooks-integration/) covers why owner statements and books drift apart.

### Line 12: Mortgage interest paid to banks, etc.
**QuickBooks account:** Mortgage Interest (Expenses › Interest Paid).

Only the **interest** portion of your mortgage payment. Principal reduces the loan balance (a liability), and escrow goes to an escrow asset account. Recording the full payment as an expense is one of the most common mistakes I see, and your lender's Form 1098 won't match your books if you do it.

### Line 13: Other interest
**QuickBooks account:** Other Interest (Expenses › Interest Paid).

Interest on loans that aren't from a bank, such as seller financing or a private lender.

### Line 14: Repairs
**QuickBooks account:** Repairs (Expenses › Repair & Maintenance).

Fixing what's broken: a leaking faucet, a patched roof, a replaced window pane. **Improvements** that add value, extend the property's life, or adapt it to a new use are capitalized and depreciated instead. That's the line between a repair and an improvement, and the IRS instructions and [Publication 527](https://www.irs.gov/publications/p527) go into detail. In QuickBooks, I put capital improvements in a fixed asset account so they never hit line 14.

### Line 15: Supplies
**QuickBooks account:** Supplies (Expenses › Supplies & Materials).

Light bulbs, filters, smoke detector batteries, and for short-term rentals, guest consumables.

### Line 16: Taxes
**QuickBooks account:** Property Taxes (Expenses › Taxes Paid).

Real estate property taxes on the rental. Like insurance, if escrow pays them, record them when the lender pays. Taxes you collect from guests on a short-term rental aren't an expense here; those are liabilities.

### Line 17: Utilities
**QuickBooks account:** Utilities (Expenses › Utilities).

Water, sewer, trash, gas, electric, and internet you pay as the landlord.

### Line 18: Depreciation expense or depletion
**QuickBooks account:** Depreciation Expense (Other Expense › Depreciation).

Depreciation is usually calculated by your CPA on a fixed asset schedule (Form 4562) and posted as a year-end journal entry. The bookkeeping job is making sure the purchase price, closing costs, and capital improvements are in fixed asset accounts so there's something accurate to depreciate.

### Line 19: Other (list)
**QuickBooks accounts:** HOA Dues, Bank Charges, Software and Subscriptions, Licenses and Permits, and similar.

Anything that doesn't fit lines 5–18. Keep these accounts specific rather than dumping everything into "Miscellaneous," since your CPA lists them by name.

## Three Things That Never Belong on Schedule E Expense Lines

1. **Mortgage principal.** It reduces your loan balance.
2. **Security deposits.** They're liabilities until kept or returned.
3. **Owner draws.** Moving money to your personal account isn't an expense (see [owner draws from a rental property LLC](/blog/owner-draw-rental-property-llc/)).

## Handling Mortgage Escrow

If your lender escrows taxes and insurance, set up an **Escrow** account (Other Current Asset). Split each mortgage payment into interest (line 12 expense), principal (loan liability), and escrow (asset). When the lender pays your property tax or insurance bill from escrow, move that amount from the escrow asset to the Taxes or Insurance expense. Your annual escrow statement shows those disbursements.

## Free Chart of Accounts Template

I put the accounts above into a CSV formatted for QuickBooks Online's chart of accounts import, with each expense mapped to its Schedule E line. Grab it from the [rental property chart of accounts post](/blog/chart-of-accounts-rental-properties/).

## FAQ

**Should I make separate expense accounts for each property?**
No. Use one set of accounts and a class or location per property. Then run Profit and Loss by Class to get each Schedule E column.

**Is a new water heater a repair or an improvement?**
It depends on the facts, and it's a common judgment call. Flag big-ticket items for your CPA rather than expensing them automatically.

**Where do short-term rental cleaning fees go?**
Cleaning fees you charge guests are income on line 3. What you pay your cleaners is usually line 7.

**Does every rental go on Schedule E?**
Not always. The Schedule E instructions note situations, like providing substantial services, where a different form may apply. Your CPA decides where the activity is reported.

## Books That Match the Form

When your accounts mirror Schedule E and every transaction is tagged to a property, your CPA gets numbers they can use as-is. That's the goal of my [rental property bookkeeping](/services/portfolio-bookkeeping/) and [tax prep support](/services/tax-prep-support/) work.

If your books don't line up with Schedule E today, [book a free call](/contact/) and we'll look at what it would take to get them there.
