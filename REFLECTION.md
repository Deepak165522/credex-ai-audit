# Reflection

## 1. The hardest bug I hit this week, and how I debugged it

The hardest issue I faced was integrating Supabase for email storage. Initially, every insert request failed with a Row Level Security (RLS) error. At first, I thought the issue was related to incorrect API keys or frontend request formatting. I verified the environment variables multiple times and tested the Supabase connection manually.

After investigating the Supabase dashboard and reviewing error logs, I realized the issue was caused by RLS policies blocking public inserts into the leads table. I explored Supabase documentation and experimented with SQL policies before temporarily disabling RLS during development. Once the issue was resolved, I successfully connected the frontend form submission flow with the backend database.

This bug taught me the importance of understanding backend security layers instead of assuming the frontend integration is always the issue.

---

## 2. A decision I reversed mid-week, and what made me reverse it

Initially, I planned to build a very minimal interface focused only on functionality. After reviewing the assignment requirements more carefully, I realized the product was expected to feel launch-ready and visually polished.

Because of that, I redesigned the entire UI using gradients, glassmorphism effects, larger typography, improved spacing, and responsive layouts. I also added a demo section and improved the overall SaaS presentation style.

The decision to prioritize design significantly improved the final product quality and made the application feel more realistic and professional.

---

## 3. What I would build in week 2 if I had more time

If I had another week, I would focus on expanding the intelligence and scalability of the platform.

The first improvement would be integrating a real LLM API for personalized optimization reports instead of using a static AI summary template. I would also build shareable audit URLs, PDF report exports, analytics dashboards, and user authentication.

I would improve the recommendation engine using more detailed pricing logic, team-size calculations, and API usage estimation. In addition, I would implement automated testing, rate limiting, and monitoring tools to improve production readiness.

Finally, I would add benchmark comparisons so startups could compare their AI spending against similar companies.

---

## 4. How I used AI tools during development

I used AI tools primarily for brainstorming UI improvements, improving wording for recommendations, debugging frontend issues, and accelerating repetitive coding tasks.

However, I did not fully trust AI-generated code without reviewing it carefully. One example was when AI-generated recommendation logic created incorrect savings calculations for unsupported plan combinations. I manually reviewed and rewrote the logic to ensure the calculations were more realistic.

I also avoided relying entirely on AI for architecture decisions and backend debugging. Instead, I used official documentation and manual testing to validate important integrations like Supabase and deployment workflows.

This process helped me balance AI-assisted development with critical thinking and manual verification.

---

## 5. Self-rating

### Discipline — 8/10
I maintained steady progress throughout development and documented major implementation decisions carefully.

### Code Quality — 7/10
The codebase is clean and organized, although testing coverage and advanced abstraction layers could still be improved.

### Design Sense — 8/10
I invested significant effort into creating a premium SaaS-style interface with strong responsiveness and visual hierarchy.

### Problem Solving — 8/10
I successfully debugged deployment, backend integration, and recommendation engine issues through experimentation and documentation research.

### Entrepreneurial Thinking — 7/10
I focused on building a realistic lead-generation product instead of treating the assignment like a simple coding exercise.