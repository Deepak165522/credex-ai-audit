# DEVLOG.md

# Development Log

## Day 1 — 2026-05-06

**Hours worked:** 3

### What I did:

* Planned the overall product structure and audit flow
* Researched pricing models for ChatGPT, Claude, Cursor, Gemini, and GitHub Copilot
* Set up the Next.js + TypeScript project
* Configured Tailwind CSS and initial project structure
* Initialized GitHub repository and deployment workflow planning

### What I learned:

* AI SaaS pricing structures vary significantly across vendors
* Most AI tools position enterprise plans aggressively even for small teams
* Modern SaaS landing pages rely heavily on visual hierarchy and trust-building

### Blockers / what I'm stuck on:

* Designing financially realistic audit recommendation logic
* Determining how aggressive optimization suggestions should be

### Plan for tomorrow:

* Build the landing page UI
* Create the audit form flow
* Implement initial recommendation calculations

---

## Day 2 — 2026-05-07

**Hours worked:** 5

### What I did:

* Designed responsive landing page
* Added gradients and glassmorphism styling
* Built audit form UI
* Added localStorage persistence for form state
* Improved responsive layout behavior

### What I learned:

* Improved responsive UI techniques using Tailwind CSS
* Learned better layout structuring for SaaS interfaces
* Improved understanding of mobile-first frontend design

### Blockers / what I'm stuck on:

* Recommendation engine logic still needed improvement
* Needed more realistic savings calculations

### Plan for tomorrow:

* Build results dashboard
* Implement savings calculations
* Add recommendation engine

---

## Day 3 — 2026-05-08

**Hours worked:** 6

### What I did:

* Built results dashboard
* Implemented deterministic recommendation engine
* Added monthly and yearly savings calculations
* Added AI-generated summary section
* Integrated Supabase backend for lead storage
* Fixed Supabase Row Level Security configuration issues

### What I learned:

* Better understanding of recommendation logic structure
* Learned Supabase integration and RLS handling
* Improved React state management techniques

### Blockers / what I'm stuck on:

* Needed stronger testing coverage
* Wanted more advanced dashboard visualization

### Plan for tomorrow:

* Add charts and PDF export
* Improve dashboard polish
* Add toast notifications and loading states

---

## Day 4 — 2026-05-09

**Hours worked:** 7

### What I did:

* Added charts using Recharts
* Implemented PDF export functionality using jsPDF
* Added toast notifications for user feedback
* Improved premium SaaS dashboard styling
* Added GitHub Actions CI pipeline
* Wrote automated Jest tests for audit engine logic
* Fixed ESLint and TypeScript issues
* Completed architecture and documentation files
* Conducted user interviews and finalized submission files
* Reviewed deployment and production behavior
* Finalized README, DEVLOG, REFLECTION, and testing documentation

### What I learned:

* Automated testing and CI workflows significantly improve code reliability
* Simpler PDF generation approaches are often more stable
* Product strategy and documentation matter as much as implementation quality
* Real user feedback changes product assumptions quickly

### Blockers / what I'm stuck on:

* Shareable public audit URLs still need deeper backend implementation
* Advanced production-level recommendation logic would require more time

### Plan for tomorrow:

* Submit the assignment
* Continue improving the platform independently
