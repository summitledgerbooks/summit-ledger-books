---
title: "1031 Exchange Bookkeeping: Journal Entries and Basis"
description: "How to record a 1031 exchange in your books: sale entries, qualified intermediary funds, replacement property, and carrying over basis."
date: 2026-11-18
tags: ["1031 exchange", "real estate", "bookkeeping", "taxes", "QuickBooks"]
draft: false
---

A 1031 exchange lets you sell an investment property and roll the proceeds into a replacement property without recognizing the gain right away. The tax side gets a lot of attention. The bookkeeping side often gets none, until the CPA asks for the basis of the new property and nobody can produce it.

This post covers how a deferred exchange typically flows through the books: what to record when you sell, while a qualified intermediary holds the money, and when you buy the replacement. It's general guidance for keeping clean records. **A 1031 exchange has strict rules, and your CPA and qualified intermediary (QI) should be involved before you close.** Your CPA computes the actual deferred gain and basis on Form 8824. The books just need to give them clean inputs.

## The 1031 Basics That Affect Your Books

According to the IRS ([Like-kind exchanges: real estate tax tips](https://www.irs.gov/businesses/small-businesses-self-employed/like-kind-exchanges-real-estate-tax-tips)):

- Since January 1, 2018, Section 1031 applies only to **real property** held for business or investment. Equipment, vehicles, and other personal property no longer qualify.
- Real property held **primarily for sale**, like a flip, doesn't qualify.
- If you receive cash or other non-like-kind property in the exchange (often called "boot"), you recognize gain up to that amount.
- You can't recognize a loss on a like-kind exchange.
- The exchange is reported on **Form 8824**.

The [Form 8824 instructions](https://www.irs.gov/pub/irs-pdf/i8824.pdf) set the two deadlines in a deferred exchange. You must identify replacement property within **45 days** after transferring the property you give up. You must receive it within **180 days**, or by the due date of your tax return including extensions, whichever is earlier.

For the books, that means three phases: the sale, the holding period, and the purchase.

## Before You Start: Get Your Starting Numbers Right

The deferred gain depends on the **adjusted basis** of the property you're selling. In bookkeeping terms, that's roughly:

- original purchase price and capitalized closing costs,
- **plus** capital improvements,
- **minus** accumulated depreciation.

If your fixed asset accounts are a mess, with improvements expensed as repairs or depreciation never booked, fix that first. Your CPA's depreciation schedule is the source of truth for accumulated depreciation. Match your books to it.

### Accounts to set up in QuickBooks Online

- **1031 Exchange Funds Held by QI** (Other Current Asset)
- **Deferred 1031 Gain**, a temporary holding account. Some CPAs prefer to handle this as a basis adjustment only; ask yours.
- **Gain on Sale of Property** (Other Income), for any recognized gain from boot
- A fixed asset account (and accumulated depreciation account) for the replacement property

## Phase 1: Recording the Sale (Relinquished Property)

At closing, the buyer's money pays off your loan and closing costs, and the rest goes **to the QI, not to you**. That last part matters. Taking control of the proceeds can disqualify the exchange.

Use the settlement statement to build the entry. A simplified example with made-up numbers:

- Original property cost on the books: $300,000
- Accumulated depreciation: $60,000
- Sale price: $450,000
- Selling costs: $25,000
- Mortgage paid off at closing: $180,000
- Net proceeds to QI: $245,000

**Journal entry at closing:**

| Account | Debit | Credit |
| --- | --- | --- |
| 1031 Exchange Funds Held by QI | 245,000 | |
| Mortgage Payable | 180,000 | |
| Accumulated Depreciation | 60,000 | |
| Rental Property (cost) | | 300,000 |
| Deferred 1031 Gain | | 185,000 |

In this example, the $185,000 to Deferred 1031 Gain is the sale price ($450,000) minus selling costs ($25,000) minus adjusted basis ($240,000). Selling costs are folded into the gain calculation here rather than expensed. Prorated rent, property tax credits, and security deposits transferred to the buyer also show up on the settlement statement and need their own lines. Don't plug them into the gain.

## Phase 2: While the QI Holds the Funds

During the 45- and 180-day windows, the money sits with the QI. On your balance sheet, it's an asset: **1031 Exchange Funds Held by QI**.

Bookkeeping tasks during this phase:

- Get statements from the QI and reconcile the balance like any other account.
- Record any interest the QI pays you per the exchange agreement. Ask your CPA how it's treated.
- Keep the identification letter and QI agreement with your closing documents.

## Phase 3: Buying the Replacement Property

At the replacement closing, the QI sends the funds, you probably take on a new loan, and you may add cash.

Continuing the example:

- Replacement price: $600,000
- Buying costs: $10,000
- QI funds applied: $245,000
- New mortgage: $365,000

**Journal entry at purchase:**

| Account | Debit | Credit |
| --- | --- | --- |
| Replacement Property (cost) | 610,000 | |
| 1031 Exchange Funds Held by QI | | 245,000 |
| Mortgage Payable – New Loan | | 365,000 |

**Carry over the deferred gain.** The basis of the replacement property is generally its cost reduced by the deferred gain. Many bookkeepers record this so the books match the tax basis:

| Account | Debit | Credit |
| --- | --- | --- |
| Deferred 1031 Gain | 185,000 | |
| Replacement Property (cost) | | 185,000 |

That leaves the replacement property on the books at $425,000 in this example. Your CPA's Form 8824 calculation decides the real number, so treat my figures as an illustration and adjust to match the return. Your CPA will also allocate basis between land and building for depreciation.

### If you received boot

If some proceeds came back to you in cash, or you took on less debt than you paid off, part of the gain may be taxable. Record the recognized portion in **Gain on Sale of Property** and only defer the rest. Your CPA should tell you the split.

## Documents to Keep

- Settlement statements for both closings
- QI exchange agreement and identification notice
- QI account statements
- Depreciation schedule for the relinquished property
- Form 8824 from your return

Keep these with the replacement property's records. When you eventually sell the replacement, the carried-over basis comes from this paperwork.

## FAQ

**Can I record the sale proceeds in my operating bank account?**
In a standard deferred exchange, the proceeds go to the QI, not your account. If money touches your account, talk to your CPA and QI right away.

**Do I keep depreciating the old property after I sell it?**
No. Depreciation stops at the sale. The replacement property starts its own depreciation, often with part carried over from the old property. Your CPA sets the schedule.

**What if my LLC owns the property?**
The same entity that sells generally needs to be the one that buys. Record both sides in that entity's books. See [bookkeeping across multiple LLCs](/blog/bookkeeping-multiple-llcs/).

**Is a flip eligible for a 1031?**
The IRS says property held primarily for sale doesn't qualify.

## Clean Basis, Calm Tax Season

A 1031 exchange is a good time to make sure your fixed asset records are accurate, because the numbers carry forward for as long as you own the replacement. That's part of my [tax prep support](/services/tax-prep-support/) and [financial reporting](/services/financial-reporting/) work, and it ties into [what lenders want to see](/blog/books-for-cash-out-refinance/) when you refinance the new property later.

If you've got an exchange coming up or just finished one and the books haven't caught up, [book a free call](/contact/) and we'll walk through it.
