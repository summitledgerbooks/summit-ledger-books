---
title: "How to Job-Cost a House Flip in QuickBooks (Without Keeping a Second Spreadsheet)"
seoTitle: "How to Job-Cost a House Flip in QuickBooks Online"
description: "Set up QuickBooks Online so each flip has its own cost ledger, a budget check, and a real profit number at sale, without a separate job spreadsheet."
date: 2026-11-27
tags: ["house flipping", "job costing", "QuickBooks", "real estate investors", "bookkeeping"]
draft: false
---

A lot of flippers run two sets of numbers. QuickBooks holds whatever the tax preparer needs. A spreadsheet holds the real job: the rehab budget, what's been spent, and what the deal will make. The two never quite match, and by closing day nobody trusts either one.

You can see the confusion in a [BiggerPockets thread on flip journal entries in QuickBooks](https://www.biggerpockets.com/forums/51/topics/146072-flipping-houses---journal-entries-in-quick-books). An investor halfway through his first rehab asked whether to book costs to work in progress or straight to cost of goods sold, and how to tag each property for reports. Those are the right questions.

I'm in the middle of a flip in Salt Lake City myself, so this is on my mind. Here's how I'd set up QuickBooks Online so one system shows cost by property, budget vs. actual, and profit at sale. This is bookkeeping education, not tax advice. Your CPA decides how your flips are treated on the return.

## Why a Flip Isn't a Rental in Your Books

A rental is something you hold and use. You depreciate the building over time. A flip is something you buy to sell.

[IRS Publication 946](https://www.irs.gov/publications/p946) says you can't depreciate inventory, and it defines inventory as "any property you hold primarily for sale to customers in the ordinary course of your business." BiggerPockets' guide to [house flipping taxes](https://www.biggerpockets.com/blog/house-flipping-taxes) explains that people who buy and remodel houses for profit on a regular basis are often classified as dealers, with the properties treated as inventory and the profit as ordinary income.

Whether you're a dealer is a facts-and-circumstances call for your CPA. For the books, the point is simpler. Flip costs pile up on the property until it sells. They don't belong in your rental expense accounts, and the house doesn't go on a depreciation schedule.

## Step 1: Give Each Flip Its Own Tag

QuickBooks has two ways to tag a property: classes and projects. Both need QuickBooks Online Plus or Advanced. Simple Start and Essentials don't have either.

**Classes** are what I'd use for most flippers. Per Intuit's [class setup guide](https://quickbooks.intuit.com/learn-support/en-us/help-article/class-list/create-manage-classes-quickbooks-online/L1QzEOUxM_US_en_US), you turn on class tracking under Settings, Account and settings, Advanced, Categories. Then create one class per address, like "Flip - 123 Main St." Turn on the setting that warns you when a transaction has no class. That warning catches a missed tag before it turns into a month of cleanup.

**Projects** are built for jobs. Intuit's [projects article](https://quickbooks.intuit.com/learn-support/en-us/help-article/manage-projects/set-create-projects-quickbooks-online/L9GAdLMyT_US_en_US) even uses remodeling a home as its example. A project has to be tied to a customer, which is awkward when you don't have a buyer yet. If you're on Advanced, projects add estimates vs. actuals, which can be worth the workaround.

Pick one and use it on every transaction for that house.

## Step 2: Set Up the Accounts

Create an asset account for flips in progress. Under it, add sub-accounts for the cost buckets you care about:

- Purchase price and closing costs
- Rehab materials
- Rehab labor and contractors
- Permits and inspections
- Holding costs (loan interest, property taxes, utilities, insurance)

The class tells you which house. The sub-account tells you what kind of cost. Together they replace most of the columns in your job spreadsheet.

BiggerPockets lists renovation materials and labor, interest on acquisition loans, property taxes during ownership, permits and inspections, and utilities needed for the work as costs that are often capitalized into the property. Which holding costs get added to the property and which get deducted is a question for your CPA. Set up the sub-accounts either way, so the totals are ready whatever your CPA decides.

If you're borrowing, set up the loan as a liability. Rehab draws from a hard money lender add to the loan balance. They aren't income. Each draw should hit the loan account and get tagged with the property's class.

If your chart of accounts is mostly built for rentals, my post on a [chart of accounts for rental properties](/blog/chart-of-accounts-rental-properties/) covers the rental side. Keep the two groups visibly separate.

## Step 3: Tag Every Transaction When It Happens

Job costing only works if every dollar lands on the right house the day it's spent. In practice that means:

- Every bank feed transaction gets a class before you accept it.
- Store receipts that cover two properties get split by line.
- Contractor bills get entered as bills against the vendor, with the class and the right sub-account.
- Draws, deposits, and progress payments all get the same class.

That last group is where flips get messy. Money moves fast during a rehab. If you also need to track contractors for year-end forms, I covered that setup in [the 2026 1099 threshold change for landlords and flippers](/blog/1099-contractors-rental-property-2026-threshold/).

## Step 4: Budget vs. Actual (What QuickBooks Can and Can't Do)

Here's the honest part. QuickBooks' [budget tool](https://quickbooks.intuit.com/learn-support/en-us/help-article/budget-planning/create-budgets-quickbooks-online/L5aV769SV_US_en_US) is available in Plus and Advanced, and Intuit shows how to [set budget targets for each class](https://quickbooks.intuit.com/learn-support/en-us/help-article/class-list/set-budget-targets-class/L9IHc4ite_US_en_US) and run a Budget vs. Actuals report. That works well for income and expense accounts.

Flip costs that sit in an asset account don't show up on a profit and loss budget. So you have three realistic options:

1. Run a transaction detail report for the flips-in-progress accounts, filtered to the property's class, and compare the sub-account totals to your rehab bid.
2. If you're on Advanced, use project estimates and track estimate vs. actual on the project dashboard.
3. Book flip costs to cost of goods sold accounts during the year so the regular budget report works, then capitalize any unsold flips at year-end (more on that below).

None of these needs a second spreadsheet. The bid can live in a budget, a project estimate, or a single line in the property's notes.

## Step 5: Close Out the Flip at Sale

When the house sells, record the sale from the closing statement. The sale price goes to an income account for property sales. The loan payoff clears the liability. Commissions, title fees, and other selling costs get recorded and tagged to the class. Ask your CPA how they want selling costs shown.

Then make one journal entry that moves that property's accumulated costs out of flips in progress and into cost of goods sold, with the same class. Now Profit and Loss by Class shows the real profit on that house: sale price, minus everything it took to get there.

There's a second method you'll see on BiggerPockets. One accountant in that thread said they expense everything on a flip as it happens, and if a property carries into the next year they make a journal entry to capitalize the cost, then reverse it the next year. Another poster described the asset method above: accumulate costs until the sale, then move them to cost of goods sold.

Both can work. The asset method keeps your balance sheet right all year. The expense method makes the budget report easier. Pick one with your CPA and stick with it. [IRS Publication 334](https://www.irs.gov/publications/p334) says inventory practices must be consistent from year to year.

## Keep Flips Separate From Rentals

If you flip and hold rentals, consider separate entities and separate QuickBooks files. It keeps dealer activity from muddying your rental records, and it makes each set of reports easier to read. I wrote about that in [bookkeeping for multiple LLCs](/blog/bookkeeping-multiple-llcs/). Entity choice itself is a question for your CPA and attorney.

Whatever the structure, a monthly habit keeps job costing honest. My [month-end close checklist](/blog/month-end-close-checklist/) is a good place to start.

## FAQ

**Can I job-cost a flip in QuickBooks Online Essentials?**
Not with classes or projects. Intuit lists both as Plus and Advanced features. On Essentials you'd need a separate file or account structure per property.

**Should I use classes or projects for flips?**
Classes work for most flippers and apply to any transaction. Projects make sense if you're on Advanced and want estimate vs. actual tracking, but they have to be tied to a customer.

**Do I depreciate a flip?**
Generally no. IRS Publication 946 says inventory, meaning property held primarily for sale to customers, can't be depreciated. Your CPA confirms how your flips are classified.

**Are hard money draws income?**
No. A draw increases your loan balance. Record it to the loan liability and tag it with the property's class.

**What if the flip doesn't sell by December 31?**
Under the asset method, the costs stay on the balance sheet until it sells. Under the expense method, your CPA will usually want a year-end entry to capitalize the costs. Either way, talk to them before year-end.

## Want Help Setting This Up?

Job costing setup for flippers is part of the [bookkeeping services](/services/) I offer for Utah investors, flippers, and contractors. You can see how pricing works on my [pricing page](/pricing/).

If your flip numbers live in three places right now, [book a free call](/contact/) and we'll look at what it would take to get them into one.

