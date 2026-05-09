# AI Prompts Documentation

## Personalized Audit Summary Prompt

The platform uses an AI-style personalized summary section to explain potential AI tooling savings and optimization opportunities for the user.

---

# Prompt Used

```text
Generate a concise and professional 100-word summary explaining how a startup can optimize its AI tooling costs based on their selected tools, subscription plans, and estimated savings.

The tone should be:
- Professional
- Helpful
- Startup-focused
- Financially practical

The summary should explain:
- Potential overspending
- Opportunities to downgrade plans
- Ways to reduce unnecessary AI subscription costs
- Maintaining productivity while optimizing spend

Avoid sounding overly sales-oriented.
```

---

# Why This Prompt Was Designed This Way

The goal of the prompt was to create summaries that felt:
- Professional
- Actionable
- Financially credible
- Useful for startup founders and engineering managers

The wording intentionally avoids aggressive marketing language because trust is important when discussing financial optimization.

---

# What I Tried That Didn't Work

Initially, I experimented with highly promotional prompts focused on maximizing savings opportunities. However, the generated responses sounded unrealistic and overly sales-driven.

I also tested very generic prompts, but the summaries lacked specificity and practical value.

The final version balanced:
- Clear financial recommendations
- Realistic tone
- Concise explanations
- Professional SaaS-style communication

---

# Future Improvements

If expanded further, future prompt versions would:
- Personalize recommendations using team size
- Include benchmark comparisons
- Generate role-specific optimization advice
- Adapt recommendations based on API usage patterns
- Generate multiple summary styles dynamically



---

# Fallback Handling

If the AI summary generation fails due to API issues, timeout errors, or invalid responses, the application falls back to a predefined templated summary to ensure the audit experience remains uninterrupted.

Fallback summary example:

> “Your current AI tooling setup appears to include higher-tier plans that may not fully match your team size and usage requirements. Optimizing your subscriptions could reduce unnecessary monthly spending while maintaining similar productivity and workflow efficiency.”

---

# Why AI Was Used Only For Summaries

The audit calculations themselves were intentionally implemented using deterministic hardcoded business logic rather than AI-generated reasoning.

This decision improves:

* Pricing accuracy
* Explainability
* Consistency
* Predictable savings calculations

The LLM is used only for generating natural-language summaries and improving readability for non-technical users.
