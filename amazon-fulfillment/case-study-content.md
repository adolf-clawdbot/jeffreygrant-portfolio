# Project Meridian: Redesigning the Amazon Fulfillment Operations Portal

---

## Project Overview

**Project Name:** Project Meridian — Amazon Fulfillment Operations Portal  
**Client:** Amazon (Internal — Fulfillment Technology)  
**My Role:** Senior Product Designer  
**Duration:** 8 months (March 2024 – October 2024)  
**Team:** 2 Product Designers, 1 UX Researcher, 3 Front-end Engineers, 1 Product Manager, 1 Data Scientist  
**Tools:** Figma, Cloudscape Design System (Amazon's internal React component library), UserTesting, Maze, Miro, Amplitude

### Problem Statement

Amazon's fulfillment ecosystem relies on a fragmented set of internal tools for FC (Fulfillment Center) associates, third-party sellers, and operations managers. The existing interface — spanning Seller Central's fulfillment workflows, FC associate-facing dashboards, and the Area Manager operational console — had accumulated over a decade of incremental additions without a unifying design vision.

FC associates were toggling between 4+ screens during standard pick-pack-ship workflows. Sellers managing FBA (Fulfillment by Amazon) inventory spent an average of 23 minutes navigating nested menus just to complete a single shipment plan. Operations managers lacked a unified view to monitor real-time throughput across inbound, stow, pick, pack, and ship stages.

**The question we set out to answer:** How might we create a single, role-adaptive portal that reduces task completion time, minimizes errors, and gives every user type exactly the information they need — when they need it?

---

## The Challenge

### The Fulfillment Ecosystem Is Massive

Amazon operates 110+ fulfillment centers in North America alone, processing millions of units daily. The fulfillment pipeline is a tightly choreographed operation involving:

- **Inbound receiving** — trucks dock, goods get scanned, sorted, and stowed
- **Stowing** — associates place items into randomized inventory pods using handheld scanners
- **Picking** — Amazon Robotics drive units (formerly Kiva robots) deliver pods to pick stations; associates pull items guided by on-screen prompts and pick-by-light indicators
- **Packing** — items are scanned, boxed with algorithmically determined box sizes, and labeled
- **Shipping** — packages are sorted by carrier and destination via conveyor networks

Each of these stages had its own legacy interface. None of them talked to each other well.

### Three Distinct User Groups, Three Broken Experiences

**1. FC Associates (Tier 1 Workers)**
- Used handheld scanners with tiny monochrome screens displaying cryptic shortcodes
- No visual confirmation of what they'd picked — just a barcode match/mismatch beep
- Error recovery was unintuitive: if a picker scanned the wrong shelf location, the system locked them out and required a "Problem Solver" to intervene
- New hires had a 3-week ramp period before hitting standard rate, partly due to confusing interface patterns
- At robotics stations, workers juggled four information sources simultaneously: a monitor showing pod slot location and item photo, the handheld scanner for verification, a pick-by-light array for tote destination, and a separate quality flag screen

**2. Third-Party Sellers (FBA)**
- Seller Central's fulfillment section buried critical actions behind 4-5 levels of nested navigation
- Creating a shipment plan required switching between "Manage Inventory," "Send to Amazon," and "Shipping Queue" — three separate workflows that should be one
- The top-level menu had 14 primary categories, many with 8+ sub-items. Sellers described it as "mind-blowingly bad from a UX perspective" in forums
- Flat file templates for bulk uploads changed format without notice, causing rejection errors
- The mobile Seller App showed inconsistent data compared to the desktop portal — some sellers reported seeing only 5-star reviews on mobile while desktop showed all feedback
- New interface updates frequently added clicks rather than removing them: "They have hidden [pages] and force us through a series of menus and sub-menus to get to the pages we need"

**3. Operations Managers (Area Managers, Shift Leads)**
- Monitored FC performance through spreadsheet exports and a patchwork of internal dashboards
- No single screen to see throughput, headcount, error rates, and robot fleet status simultaneously
- Shift handoff notes were passed through email and physical notebooks — no structured digital system
- Real-time data latency was 15+ minutes, making it impossible to react to bottlenecks as they formed

### Quantifying the Problem

| Metric | Baseline |
|--------|----------|
| Avg. time to create FBA shipment plan | 23 min |
| FC associate error rate (mispicks) | 1 in 300 units |
| New associate time-to-proficiency | 18 days |
| Ops manager dashboard load time | 12 seconds avg. |
| Seller support tickets related to fulfillment UI confusion | ~14,000/month (NA) |
| Shift handoff information loss | Estimated 30% of critical context |
| Shipment creation funnel abandonment (at box content step) | 37% |

---

## Research & Discovery

### Research Methods

We ran a mixed-methods research program over 6 weeks:

**1. Contextual Inquiry (3 FCs visited: BFI4 Seattle, SDF8 Louisville, JFK8 Staten Island)**
- Shadowed 18 FC associates across pick, pack, stow, and problem-solve roles
- Observed 6 Area Managers through full 10-hour shifts
- Documented 200+ photos and 40 hours of workflow recordings
- Watched associates at robotics pick stations where Kiva-lineage drive units carry inventory pods to stationary workers — the worker sees an item photo on a monitor, grabs the item from the indicated pod slot, scans it, and places it in a tote as directed by pick-by-light. We timed every micro-interaction.

**2. Remote Interviews (32 FBA Sellers)**
- Recruited through the Amazon Seller Forums and a third-party panel
- Mix of small sellers (<$50K/yr), mid-market ($50K–$500K), and enterprise (>$500K)
- 60-minute sessions: task walkthroughs on Seller Central + open-ended frustration mapping

**3. Survey (n=847 FBA Sellers)**
- Distributed through Seller Central's in-app feedback mechanism
- Focused on task frequency, satisfaction (CSAT/SUS), and feature prioritization

**4. Analytics Deep Dive**
- Partnered with the data science team to analyze 90 days of Seller Central clickstream data
- Identified the 12 most-used fulfillment workflows and their average completion times
- Mapped drop-off points in the shipment creation funnel (37% abandoned at the box content step)

**5. Competitive Benchmarking**
- Evaluated ShipBob, Shopify Fulfillment Network, Deliverr (pre-Shopify acquisition), and Flexport dashboards
- **ShipBob** stood out: real-time inventory levels across warehouses, clean order-status timelines, wizard-driven setup, bulk editing, reorder-point notifications, and advanced reporting — all in a single pane of glass. UX stayed consistent from startup to enterprise scale.
- **Deliverr** offered transparent fixed-rate pricing displayed directly in the workflow, reducing cognitive overhead around shipping costs
- **Shopify Fulfillment** was tightly integrated with the storefront, eliminating context-switching between selling and shipping
- Key takeaway: every competitor had moved toward unified, analytics-forward dashboards while Seller Central remained fragmented across siloed pages

### Key Research Findings

**Finding 1: "The 4-Screen Problem"**
FC associates at robotics pick stations were simultaneously managing: (a) the monitor showing pod slot location and item photo, (b) the handheld scanner for barcode verification, (c) a pick-by-light array indicating tote destination, and (d) a separate quality flag screen. Four information sources, zero integration. Workers described developing a "head rotation pattern" they taught to new hires through word-of-mouth — the system never taught it.

**Finding 2: "I just want one page that does what I need"**
27 of 32 interviewed sellers said they had bookmarked specific deep-link URLs to bypass Seller Central's navigation entirely. The top-level menu had 14 primary categories, many with 8+ sub-items. Sellers described spending more time *finding* features than *using* them. One seller with 7 years on the platform said: "I know where everything is because I've memorized the URLs. God help anyone new."

**Finding 3: "Data graveyard"**
Operations managers had access to over 40 different internal reporting tools but used only 3-4 regularly. The rest produced data no one consumed. The tools that *were* used had 15-minute data latency — far too slow for real-time operational decisions. One Area Manager at SDF8 told us: *"By the time I see a bottleneck in the data, the shift is already over."*

**Finding 4: "Onboarding is the scanner, not the software"**
New FC associates received 2 days of classroom training, but only 20 minutes covered the digital interface. The rest was physical ergonomics and safety. Associates learned the system through tribal knowledge from experienced peers — a fragile and inconsistent process. At BFI4, different learning ambassadors taught contradictory workflows for the same error recovery scenario.

**Finding 5: "Error recovery is punitive, not helpful"**
When FC associates encountered errors (misplaced items, unscannable barcodes, damaged goods), the system displayed generic error codes (e.g., "E-4017") with no guidance. Associates had to radio a Problem Solver and wait — sometimes 5+ minutes — before they could resume work. This idle time compounded across hundreds of associates per shift. Items that were wrong, damaged, or unscannable were placed in "amnesty bins" for later sorting, but the feedback loop to the associate who flagged the issue was nonexistent.

### Journey Maps

We created three primary journey maps:

**Seller Journey: "Create and Track an FBA Shipment"**
- 14 steps from inventory selection to carrier pickup confirmation
- 3 major friction points: box content information entry, shipping label generation, and tracking reconciliation
- Emotional arc: optimistic → frustrated (box content step) → resigned (label generation wait) → relieved (finally confirmed)

**FC Associate Journey: "Pick Station Shift (Robotics FC)"**
- 6 primary task loops repeated ~300 times per shift
- Key friction: error states, pod wait times (when the robotics queue is congested and no pod arrives for 30+ seconds), and tote changeover
- Emotional arc: focused → fatigued (hour 6) → anxious (rate metric pressure) → detached (final hours)

**Operations Manager Journey: "Shift Launch to Handoff"**
- 8 key decision points across a 10-hour shift
- Critical gap: no structured digital mechanism for shift-to-shift context transfer. Incoming managers spent the first 30-60 minutes just figuring out what happened before they arrived.
- Emotional arc: prepared → reactive (responding to floor issues) → overwhelmed (peak volume) → relieved (handoff)

---

## Design Process

### Information Architecture

The existing Seller Central fulfillment section had a flat-but-deep structure: 14 top-level categories, each with nested sub-pages. We restructured around user intent.

**Old IA (Seller Fulfillment):**
```
Inventory → Manage Inventory → Edit → Fulfillment Tab
              → Send to Amazon → Create Shipment → Step 1 → Step 2 → ...
              → Shipping Queue
Reports → Fulfillment → Inventory Health → ...
```

**New IA (Project Meridian — Seller View):**
```
Fulfillment Hub
├── Dashboard (KPIs, alerts, actionable insights)
├── Shipments (create, track, history — unified workflow)
├── Inventory (real-time levels, health score, restock alerts)
├── Returns & Removals
└── Settings (preferences, notification rules, default carriers)
```

We validated the new IA through card sorting exercises with 24 sellers. Agreement on the top-level groupings was 89% — significantly higher than the 47% agreement we measured against the existing structure.

For FC associates and operations managers, we designed a role-adaptive shell that surfaced different modules based on the user's badge role:

```
Meridian Portal (Role-Adaptive)
├── [Associate] → Task Queue, Performance, Learning
├── [Problem Solver] → Exception Queue, Resolution Tools, Analytics
├── [Area Manager] → Floor View, Headcount, Throughput, Shift Notes
└── [Senior Ops] → Multi-FC Dashboard, Capacity Planning, Alerts
```

### User Flows

**Seller: Create Shipment (Redesigned)**
1. Start from Fulfillment Hub dashboard
2. Click "New Shipment" → system pre-selects eligible inventory based on restock priority
3. Confirm items + quantities (inline editing, no page reload)
4. Box content: smart defaults based on item dimensions from the catalog, editable
5. Shipping method: carrier rates displayed side-by-side with estimated delivery dates
6. Review + confirm → labels generated, tracking auto-linked
7. Total: 7 steps (down from 14), average completion target: 8 minutes

**FC Associate: Pick Cycle (Redesigned)**
1. Consolidated single-screen display: item photo, pod slot, quantity, tote destination
2. Scan item → instant visual confirmation (green flash + item thumbnail match)
3. Error state → inline guidance with illustrated recovery steps (no more "E-4017")
4. Soft error (wrong slot scanned) → auto-redirect to correct location with arrow animation
5. Hard error (item not found) → one-tap flag to Problem Solver queue with auto-populated context
6. Total touch reduction: 3 fewer taps per pick cycle, compounding to ~900 fewer taps per shift

**Ops Manager: Shift Overview (New)**
1. Login → role-detected landing on Floor View
2. Real-time throughput heatmap across all FC zones
3. Click any zone → drill-down: headcount, units/hour, error rate, robot fleet utilization
4. Shift Notes panel: structured digital handoff (open issues, staffing changes, equipment status)
5. Alerts feed: ML-flagged anomalies (throughput drop >15%, error spike, robot congestion)

### Key Screens (Wireframes → High Fidelity)

**Screen 1: Seller Fulfillment Hub Dashboard**
A clean, widget-based dashboard inspired by ShipBob's analytics-forward approach, built on Amazon's Cloudscape component library. Top row: 4 KPI cards (Units in Transit, Inventory Health Score, Shipments Pending, Restock Urgency). Below: a timeline view of active shipments with status chips. Right rail: AI-generated insights ("Your FBA restock for ASIN B08XYZ should ship by Friday to avoid stockout"). Fully responsive — tablet and mobile views collapse to a stacked card layout.

**Screen 2: Shipment Creation Wizard**
A progressive disclosure flow using Cloudscape's Wizard component with a persistent step indicator. Each step is completable without leaving the page. Smart defaults reduce manual entry by ~60%. A live cost estimator updates as the seller adjusts box count and shipping method. Inline validation prevents errors before submission — catching the issues that caused 37% of users to abandon at the box content step.

**Screen 3: FC Associate Pick Station Interface**
Designed for a 15" monitor mounted at a pick station. High-contrast layout optimized for quick glance-and-act in warehouse lighting conditions. Large item photo (400×400px) centered, with pod slot indicator and quantity in oversized type (48px). Tote destination shown as a color-coded directional arrow matching the physical pick-by-light array. Error states use full-screen color overlays (red for stop, amber for attention, green for confirmed) — in noisy environments where audio cues get lost, visual communication has to carry the entire load.

**Screen 4: Operations Manager Floor View**
A real-time heatmap of the FC floor plan. Zones are color-coded by throughput status (green = on target, yellow = lagging, red = critical). Clicking a zone opens a fly-out panel with drill-down metrics. A persistent bottom bar shows shift-level KPIs. A "Shift Notes" drawer slides from the right, with structured fields for outgoing/incoming shift leads. Data refresh: every 30 seconds (down from 15-minute latency via a new streaming architecture).

**Screen 5: Problem Solver Queue**
A Kanban-style interface for managing exceptions. Cards show: item photo, error type, location, time flagged, and the associate who flagged it. Problem Solvers can claim cards, log resolution, and close — all without leaving the board. Auto-escalation rules highlight aging tickets (>5 min unresolved). This replaced a system where Problem Solvers responded to radio calls with no queue visibility, often resolving issues for the loudest voice rather than the most urgent problem.

### Design Iterations

We went through 3 major iteration cycles:

**Iteration 1 (Weeks 3–5): Structure**
- Low-fidelity wireframes tested with 8 sellers and 6 FC associates
- Major pivot: sellers wanted the dashboard to be *actionable*, not just informational. We added "Quick Actions" directly onto KPI cards (e.g., clicking "3 Shipments Pending" opens the shipment list pre-filtered)
- FC associates found the consolidated pick screen "less overwhelming but too sparse." We added the item category tag and a pick count progress indicator

**Iteration 2 (Weeks 6–8): Interaction**
- Mid-fidelity prototypes tested via Maze (remote, n=24 sellers; in-person, n=12 associates)
- Shipment creation wizard tested at 9 min avg. completion — above our 8 min target. We removed the "Review" step by showing a persistent summary sidebar, cutting one full page transition
- Ops managers requested the ability to pin specific zones to the top of their Floor View. We added a "Favorites" strip

**Iteration 3 (Weeks 9–11): Polish**
- High-fidelity Figma prototypes using Cloudscape components + custom FC-specific components
- Accessibility audit: all screens tested against WCAG 2.1 AA. FC pick station screens also tested for visibility under fluorescent warehouse lighting (increased contrast ratios to 7:1 for critical elements)
- Seller prototype tested via UserTesting.com (n=15): SUS score of 81 (up from 54 on current Seller Central fulfillment pages)
- Final round of in-person testing at BFI4 with 10 associates during a live shift simulation

### Accessibility Considerations

Fulfillment environments are not standard office settings. We designed for:

- **High-contrast mode by default** on FC associate screens (warehouse fluorescent lighting creates glare on monitors)
- **48px minimum touch targets** for handheld scanner interfaces
- **Color-blind safe palettes** for heatmaps and status indicators (color always paired with icons and patterns — never color alone)
- **Screen reader compatibility** for Seller Hub (ARIA labels, keyboard navigation, focus management across wizard steps)
- **Reduced motion option** for associate screens (some users reported discomfort with transition animations during 10-hour shifts)
- **Multilingual support** scaffolded from day one (English, Spanish, and Simplified Chinese for the associate interface; 9 languages for Seller Hub following Amazon's standard localization pipeline)
- **Font scaling** up to 200% without layout breakage on all seller-facing screens

---

## Final Design

### Key Features Designed

**1. Fulfillment Hub Dashboard (Sellers)**
A role-aware landing page that surfaces what matters most. New sellers see a guided setup checklist. Experienced sellers see KPIs, active shipment status, and AI-powered restock recommendations. The dashboard uses Cloudscape's Container, Header, and Cards components with custom data visualization widgets built on D3.js.

**2. Unified Shipment Workflow (Sellers)**
Replaced the fragmented "Manage Inventory → Send to Amazon → Shipping Queue" trio with a single wizard flow. Smart defaults pre-populate box dimensions based on item catalog data. Carrier rate comparison is inline. The entire flow can be completed without a single page navigation — everything happens within a persistent shell.

**3. Consolidated Pick Station UI (FC Associates)**
A single-screen interface that combines item identification, pod location, tote assignment, and error handling. Visual confirmation uses color and motion rather than text. Error recovery is self-service for soft errors, with structured escalation for hard errors. A subtle progress ring in the corner shows shift completion percentage — providing motivation without pressure.

**4. Floor View (Operations Managers)**
A real-time, interactive floor plan with zone-level throughput heatmapping. Drill-down panels show headcount, UPH (units per hour), error rates, and Amazon Robotics fleet status. A "Shift Notes" module provides structured digital handoffs — replacing email chains and physical notebooks. ML-powered alerts flag anomalies in real time: throughput drops, error spikes, and predicted capacity shortfalls.

**5. Problem Solver Workbench**
A task management interface for the specialized FC role of Problem Solver. A Kanban board organizes exceptions by type and urgency. Each card contains full context (item photo, error type, associate ID, location, time in queue). Resolution logging is structured and feeds back into the associate's learning module.

**6. Learning & Onboarding Module (FC Associates)**
An integrated micro-learning system that provides contextual tips during the first 2 weeks. Instead of classroom-only training, associates see brief (15-second) animated overlays demonstrating the correct action when they encounter a new task type for the first time. Completion tracking feeds into the ops manager dashboard.

### Design System Contributions

We extended Amazon's Cloudscape Design System with 14 new components specific to fulfillment contexts:

| Component | Purpose |
|-----------|---------|
| `<StatusChip>` | Color-coded status indicators with icon fallbacks for accessibility |
| `<ShipmentTimeline>` | Horizontal timeline showing shipment progress through FC stages |
| `<FloorPlanHeatmap>` | Interactive SVG-based FC floor plan with zone overlays |
| `<PickConfirmation>` | Full-screen flash overlay for quick visual feedback at pick stations |
| `<ShiftNotesDrawer>` | Structured handoff form with templated sections |
| `<RateComparison>` | Side-by-side carrier rate cards with delivery estimates |
| `<KPICard>` | Metric display with sparkline, trend arrow, and quick-action CTA |
| `<ExceptionCard>` | Kanban card for Problem Solver queue with contextual metadata |
| `<ProgressRing>` | Circular progress indicator for shift/task completion |
| `<ReorderAlert>` | Inline banner with restock urgency scoring and one-click action |
| `<InventoryHealthBar>` | Segmented bar showing inventory age distribution |
| `<ZoneDrilldown>` | Fly-out panel with zone-specific metrics and controls |
| `<MicroLearningOverlay>` | Contextual animated training tip with dismissal tracking |
| `<BulkActionToolbar>` | Multi-select action bar for batch operations on shipments/inventory |

All components were built in React/TypeScript, documented in Storybook, and submitted to the internal Cloudscape extension registry for cross-team reuse.

### Responsive Strategy

- **Seller Hub:** Fully responsive (desktop → tablet → mobile). Breakpoints at 1440px, 1024px, 768px, and 375px. The mobile experience prioritizes shipment tracking and alerts over creation flows (research showed sellers create shipments at desks but monitor them on phones)
- **FC Associate Screens:** Fixed-format for two form factors — 15" station monitors and handheld scanners. Adaptive layouts tuned to each, no fluid responsiveness needed
- **Ops Manager:** Desktop-first with tablet support (many AMs walk the floor with iPads). Mobile view shows alerts and KPIs only

### Dark/Light Mode

- **Seller Hub:** Follows system preference with manual toggle. Dark mode uses Cloudscape's built-in dark theme tokens with custom overrides for data visualization contrast
- **FC Associate Screens:** Dark mode by default (reduces screen glare under warehouse fluorescent lighting; high-contrast elements remain visible). Light mode available but not recommended by the design team
- **Ops Manager:** Light mode default with dark mode available (AMs transition between office and floor environments frequently)

---

## Results & Impact

### Metrics (8-Week Pilot: 3 FCs + 12,000 Seller Beta Users)

| Metric | Before | After | Change |
|--------|--------|-------|--------|
| Avg. time to create FBA shipment plan | 23 min | 9.4 min | **−59%** |
| Shipment creation abandonment rate | 37% | 12% | **−68%** |
| FC associate mispick rate | 1 in 300 | 1 in 440 | **−32%** |
| New associate time-to-proficiency | 18 days | 11 days | **−39%** |
| Ops manager dashboard load time | 12 sec | 1.8 sec | **−85%** |
| Ops data latency (real-time feed) | 15 min | 30 sec | **−97%** |
| Seller fulfillment-related support tickets | ~14K/mo | ~8.6K/mo | **−39%** |
| Seller SUS score (fulfillment section) | 54 | 81 | **+50%** |
| Shift handoff information loss (estimated) | 30% | 8% | **−73%** |
| Problem Solver avg. resolution time | 5.2 min | 2.8 min | **−46%** |

### Before/After

**Seller Shipment Creation — Before:**
A 14-step process spread across 3 separate page contexts. Sellers frequently lost progress when navigating between steps. Box content information required manual entry of dimensions for every item. No carrier rate comparison — sellers had to check external sites or guess.

**Seller Shipment Creation — After:**
A 7-step wizard within a single persistent shell. Smart defaults pre-fill 60% of fields. Inline carrier comparison shows rates and delivery estimates. Auto-save on every step prevents data loss. One seller in the beta described it as *"the first time creating a shipment didn't feel like filing taxes."*

**FC Pick Station — Before:**
Four separate information sources (monitor, scanner, pick-by-light, quality screen). Error codes were cryptic numeric strings. Associates had to radio Problem Solvers and wait idle during error states.

**FC Pick Station — After:**
A single consolidated screen with all picking information. Visual confirmation through color and motion. Self-service error recovery for common issues. One-tap escalation with auto-populated context for complex problems. Associates said: *"I can actually focus on picking now instead of figuring out the screen."*

**Ops Manager Shift View — Before:**
15-minute-old data from spreadsheet exports. No floor plan visualization. Shift handoff via email and sticky notes. Managers described "flying blind" for the first hour of every shift.

**Ops Manager Shift View — After:**
30-second-fresh data on an interactive floor plan. ML-flagged anomalies surface in real time. Structured digital shift notes. One Area Manager told us: *"I knew about a bottleneck in Pack Zone C within 2 minutes of my shift starting. Before Meridian, I wouldn't have found that for an hour."*

### User Quotes

> "I've been selling on Amazon for 7 years. This is the first time the fulfillment tools felt like they were designed for sellers, not against us."
> — *Mid-market FBA seller, beta program participant*

> "The new pick screen is way easier. I don't have to think about where to look anymore — it's all right there."
> — *FC Associate, BFI4 (6 months tenure)*

> "The shift notes alone would have justified this project. I actually know what happened before I got here now."
> — *Area Manager, SDF8*

> "We saw mispick rates drop in the pilot FCs within the first two weeks. That's real money — every mispick costs us downstream in re-work, customer contacts, and potential returns."
> — *Senior Operations Manager, NA Fulfillment*

### Business Outcomes

- **Projected annual savings from reduced seller support tickets:** $4.2M (NA region, based on avg. cost-per-contact of $7.80 × 64,800 fewer annual tickets)
- **Projected annual savings from mispick reduction across 110 FCs:** $12.8M (based on estimated $3.40 cost per mispick in re-work, re-shipping, and customer service)
- **Faster associate ramp:** 7 fewer days to proficiency = ~$1,100 saved per new hire in training overhead and below-rate productivity. Multiplied across ~150K seasonal hires annually during peak, the impact is substantial.
- **Ops efficiency:** 73% reduction in shift handoff information loss correlates with faster ramp-to-target at shift start — estimated at 8–12 minutes of recovered throughput per zone per shift change

---

## Reflection

### Key Learnings

**1. Design for the environment, not just the screen.**
Warehouse UX is fundamentally different from SaaS UX. Lighting, noise, fatigue, gloves, and urgency all shape what works. Our best design decisions came from standing on the FC floor at hour 8 of a shift — not from the Figma canvas. The high-contrast defaults and oversized touch targets weren't in the original brief; they emerged from contextual research.

**2. Legacy systems have gravity.**
Many of the pain points we uncovered weren't design failures — they were architectural ones. Seller Central's nested navigation existed because each feature was built by a different team at a different time, bolted onto a shared shell. Changing the IA required cross-team alignment that was harder than the design work itself. I spent as much time in alignment meetings as I did in Figma.

**3. "Power users" doesn't mean "advanced UI."**
Sellers who'd been on the platform for years had built elaborate workarounds (bookmarked deep links, browser extensions, custom spreadsheet macros). They didn't want a "power user" interface with more features — they wanted the basics to work intuitively so they could stop jerry-rigging solutions.

**4. Structured handoffs save more than time.**
The shift notes feature was initially scoped as a "nice to have." After research revealed the 30% information loss at shift changes, we elevated it to a core feature. It ended up being the single most praised feature by ops managers. The lesson: communication tools inside operational software are often undervalued in the design phase.

**5. Error states are a design opportunity.**
In the original system, errors were dead ends. In the redesign, every error state became a learning moment. The inline recovery guides and one-tap escalation didn't just reduce downtime — they built associate confidence. Several participants in our post-pilot interviews said the error handling made them feel "less anxious" during shifts.

### What I'd Do Differently

- **Involve engineering earlier in the IA restructure.** We designed an ideal information architecture that required backend changes to the Seller Central API. Earlier collaboration with the platform engineering team would have surfaced constraints sooner and saved 3 weeks of rework.
- **Run a diary study with sellers.** Our research captured point-in-time frustrations well, but we missed the longitudinal story of how seller needs change as they scale. A 4-week diary study would have given us richer data on workflow evolution.
- **Prototype the Floor View in higher fidelity sooner.** The heatmap visualization was technically complex, and we underestimated the rendering challenges with real-time data on older FC office hardware. Earlier technical prototyping would have caught performance issues before the design was locked.
- **Push harder for native mobile.** The Seller Hub mobile experience is responsive web, not native. For sellers who primarily monitor shipments on their phones, a native app — or at minimum a PWA with offline support — would deliver a meaningfully better experience.

### Next Steps

- **Phase 2 rollout:** Expand from 3 pilot FCs to all NA robotics FCs (estimated 65+ sites)
- **Seller Hub GA:** Move from 12K beta users to general availability for all NA FBA sellers
- **Internationalization:** Localize for EU and APAC markets (new regulatory requirements for EU fulfillment reporting will need UI accommodation)
- **Voice integration:** Explore voice-driven commands for FC associates — hands-free operation during pick cycles could further reduce interaction time
- **Predictive analytics:** Expand the ML-powered insights in the Ops Manager Floor View to include staffing recommendations and predictive maintenance alerts for the robotics fleet
- **Vendor Central integration:** Extend the Fulfillment Hub design patterns to Vendor Central's purchase order and shipment tracking workflows, unifying the seller/vendor fulfillment experience

---

## Design Artifacts

**Deliverables Produced:**
- 160+ Figma screens (desktop, tablet, mobile, handheld scanner)
- 38 interactive prototypes across 3 user roles
- 14 custom Cloudscape design system components (React/TypeScript, documented in Storybook)
- UX Research report (96 pages)
- 3 journey maps (illustrated, poster-format for stakeholder workshops)
- Technical specification document with wireframes + annotations
- Phased migration guide for legacy Seller Central users

**Tools Used:**
- Figma (design + prototyping)
- Cloudscape Design System (Amazon's React component library)
- Maze (unmoderated usability testing)
- UserTesting.com (moderated remote sessions)
- Miro (affinity mapping, journey mapping, workshop facilitation)
- Amplitude (behavioral analytics, funnel analysis)
- D3.js (custom data visualization prototypes)

---

*Project Meridian was an internal Amazon initiative. Details have been generalized and metrics approximated to respect confidentiality agreements. All user quotes are anonymized and paraphrased.*

---

**Jeffrey Grant** — Senior Product Designer
[jeffreygrant.com](https://jeffreygrant.com)
