---
title: "AppFolio and QuickBooks Don't Match: Why It Happens and How to Fix It"
seoTitle: "AppFolio and QuickBooks Not Matching? How to Fix It"
description: "Here's why AppFolio, Buildium, or Stessa never matches QuickBooks Online, and how to fix the sync instead of working around it every month."
date: 2026-06-11
tags: ["software", "QuickBooks", "property management", "real estate"]
draft: false
---

You run a report in AppFolio and it says one number. You run the same report in QuickBooks Online and it says another. Neither one matches your bank account. If you've been blaming yourself for this, stop. AppFolio QuickBooks integration problems are one of the most common reasons real estate investors and property managers reach out to me, and the root cause is almost never a typo. It's the plumbing between the two systems.

## Why the Numbers Never Match

Each platform handles the connection differently, and knowing which situation you're in is half the fix.

### AppFolio: there is no sync

AppFolio doesn't integrate with QuickBooks Online at all. It's a standalone accounting system with its own general ledger. If your numbers live in both places, someone is moving them by hand: exporting CSVs, retyping totals, or making summary journal entries from memory.

Every manual step is a chance for the two systems to drift. Miss one month's entry, categorize one export differently, and the gap compounds. Six months later, nobody can explain the difference without an archaeology project.

### Buildium: there is a sync, and it's often set up wrong

Buildium does offer a native QuickBooks Online connection. It can push trial balances, rent receipts, vendor bills, and journal entries on a schedule. When it's configured correctly, it works.

The catch is the account mapping. The sync asks you to map Buildium's categories to your QuickBooks Online chart of accounts, and most people accept defaults or guess. Rent income lands in the wrong account, security deposits get booked as income (they're not income, they're a liability), and the bank reconciliation stops tying out. The sync faithfully replicates a bad mapping every single day.

### Stessa: export only

Stessa is a portfolio tracking tool, not a full accounting system, and it doesn't sync with QuickBooks Online. Data gets out of Stessa through exports and into QuickBooks Online through imports. Same manual-step problem as AppFolio, with the added wrinkle that Stessa's categories don't line up one-to-one with a real estate chart of accounts.

## The Three Most Common Failure Points

**1. Summary entries that hide detail.** A single monthly journal entry that says "rent income: $14,500" can't be reconciled against individual deposits. When a tenant's payment bounces or a partial payment comes in, the summary is wrong and nobody knows which property caused it.

**The fix:** Post entries at the level you need to reconcile, usually by property and by deposit batch, not one blended number per month.

**2. Security deposits and owner funds treated as income.** Property management software tracks money that isn't yours: tenant deposits, owner reserves, trust funds. If the export or sync dumps those into income accounts in QuickBooks Online, your profit is overstated and your liability accounts are fiction. I covered the deposit side in detail in [my post on security deposits](/blog/security-deposits-bookkeeping/).

**The fix:** Map deposits and owner funds to liability accounts, then verify the mapping by reconciling the liability balance against your actual trust or deposit account.

**3. Timing differences nobody documents.** AppFolio might record rent when it's charged. Your bank records it when it clears. QuickBooks Online records it whenever the entry was made. Three dates for one payment. Without a consistent rule, month-end totals will disagree even when nothing is actually wrong.

**The fix:** Pick one convention, write it down, and apply it everywhere. Then your monthly close becomes a checklist instead of an investigation. My [month-end close checklist](/blog/month-end-close-checklist/) shows what that rhythm looks like.

---

## How to Actually Fix It

Here's the order of operations I use when a client brings me mismatched systems.

**Step 1: Pick the system of record.** One system owns the truth for each type of data. Usually the property management software owns tenant-level detail (who paid, when, for what unit) and QuickBooks Online owns the financial statements. Once that's decided, you stop maintaining duplicate detail in both.

**Step 2: Audit the mapping.** Trace ten real transactions from the property management side to QuickBooks Online. Where did each one land? This usually surfaces the broken account mappings within an hour.

**Step 3: Fix the chart of accounts first.** A clean sync into a messy chart of accounts is still a mess. Your QuickBooks Online file needs property-level tracking and proper liability accounts before any data flows in. My guide to [setting up a chart of accounts for rentals](/blog/chart-of-accounts-rental-properties/) covers the structure.

**Step 4: Rebuild the bridge.** For Buildium, that means redoing the sync mapping and setting a schedule. For AppFolio and Stessa, it means designing a repeatable export-and-import workflow with checks, not a copy-paste ritual that depends on someone's memory.

**Step 5: Reconcile both ends monthly.** The property management software reconciles against the rent roll. QuickBooks Online reconciles against the bank. When both ends tie out, the middle takes care of itself.

## When to Get Help

If the gap between your systems is a few transactions, you can probably fix it yourself in an afternoon with the steps above. If the systems have been drifting for a year, or the person who set up the original mapping is long gone, it's a bigger job: part bookkeeping cleanup, part data repair.

That second kind of problem is exactly why I built my [systems and integration service](/services/systems-integration/). Summit Ledger Books is run by a software engineer who became a bookkeeper, which means I don't just clean up the books, I fix the pipeline that keeps breaking them.

---

Your property management software and QuickBooks Online will never match by accident. They match when the account mapping is right, the workflow is documented, and both ends get reconciled every month.

If your AppFolio, Buildium, or Stessa numbers haven't matched QuickBooks Online in months and you're done playing referee, [book a free consultation](/contact/) and I'll trace where the pipeline is broken and what it will take to fix it.
