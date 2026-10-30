---
name: prd-risk-assessor
description: |
  Identify, assess, and plan mitigation for project and feature risks. Always use this skill when the user mentions risks, blockers, dependencies, failures, concerns, or asks "what could go wrong?" Use for: risk assessment, pre-mortem analysis, blocker identification, dependency mapping, contingency planning, mitigation strategy, failure scenarios, "what could derail us?", "what should we watch for?", "what's the biggest concern?", "failure analysis", or any question about potential problems. Score risks by likelihood × impact, develop prevention and mitigation strategies, plan contingencies, and identify leading indicators.
compatibility: null
---

# PRD Risk Assessor

Identify, assess, and plan mitigation strategies for project and feature risks.

## When to Use This Skill

Use this sub-skill when you need to:
- **Identify risks** - What could go wrong?
- **Assess risk severity** - Likelihood × Impact scoring
- **Develop mitigation** - How to prevent or reduce impact
- **Plan contingencies** - What if the risk happens?
- **Prioritize risks** - Focus on highest-impact items first
- **Pre-mortem analysis** - "We shipped this and it failed. Why?"
- **Dependency mapping** - External blockers and critical path risks

## Workflow

### Step 1: Identify Risks

Ask: "What could go wrong with this feature/project?"

Categories to explore:
- **Technical risks** - Unknown tech, integration complexity, performance
- **Resource risks** - Team availability, skill gaps, turnover
- **Timeline risks** - Underestimation, scope creep, delays
- **Dependency risks** - External APIs, third parties, approvals
- **Market/Business risks** - User adoption, competition, requirements changes
- **Operational risks** - Deployment, monitoring, support
- **External risks** - Regulatory changes, vendor issues, supply chain

### Step 2: Score Each Risk

Rate each risk on:
- **Likelihood** - How likely is this to happen? (1-5 or H/M/L)
- **Impact** - How bad would it be? (1-5 or H/M/L)
- **Criticality** - Likelihood × Impact = Risk Score

Focus on high-criticality risks (score 8+).

### Step 3: Develop Mitigation Strategies

For each high-risk item:

**Prevention** - How to avoid the risk entirely
- Specific actions to take before/during development
- Risks eliminated by this strategy: [list]

**Reduction** - How to decrease likelihood or impact
- Specific actions to reduce exposure
- Residual risk after mitigation: [reduced score]

**Contingency** - What to do if the risk materializes
- Detection: How will we know it happened?
- Response: Immediate actions to take
- Rollback/workaround: How to recover
- Timeline: How long to recover?

### Step 4: Track & Monitor

Identify:
- **Leading indicators** - Early warning signs
- **Decision points** - When to activate contingency?
- **Escalation path** - Who needs to know?
- **Review schedule** - When to reassess?

### Step 5: Validate Dependencies

Map external dependencies:
- **Who controls this?** - Vendor, team, external party
- **What's required?** - Timeline, approval, data
- **What if they miss SLA?** - Contingency plan
- **How to de-risk?** - Fallback options

## Output Format

Deliver risk assessment in this format:

```
# Risk Assessment: [Feature/Project Name]

## Summary
- Total risks identified: [X]
- High-risk items: [X]
- Total mitigation effort: [X weeks/points]
- Overall risk level: [Low/Medium/High]

## Risk Matrix

| # | Risk Description | Category | L | I | Score | Priority | Mitigation | Contingency |
|---|------------------|----------|---|---|-------|----------|-----------|-------------|
| 1 | [Risk] | [Tech/Resource/etc] | H | H | 9 | 🔴 Critical | [Plan] | [Plan B] |
| 2 | [Risk] | [Tech/Resource/etc] | M | H | 6 | 🟠 High | [Plan] | [Plan B] |

Legend: L = Likelihood (L/M/H), I = Impact (L/M/H)

## High-Risk Items (Score 8+)

### Risk #1: [Description]
- **Category**: [Technical/Resource/Timeline/Dependency/Market/Operational/External]
- **Likelihood**: [H/M/L] - [Reasoning]
- **Impact**: [H/M/L] - [What would happen]
- **Current Risk Score**: [Score]

**Prevention Strategy**:
- Action 1: [Specific step]
- Action 2: [Specific step]
- Risks eliminated: [What this prevents]

**Reduction Strategy**:
- Action 1: [Reduces likelihood to: M]
- Action 2: [Reduces impact to: M]
- **Residual Risk Score**: [Reduced score]

**Contingency Plan**:
- Detection trigger: [How we'll know it's happening]
- Immediate response: [First steps]
- Workaround/Rollback: [How to recover]
- Recovery time: [Estimated hours/days]
- Owner: [Who leads response]
- Escalation: [Who to notify]

**Leading Indicators** (watch for these):
- Indicator 1: [What to monitor]
- Indicator 2: [What to monitor]

**Review Schedule**: [When to reassess this risk]

---

### Risk #2: [Description]
[Same structure as Risk #1]

---

## Dependency Risks

### Critical External Dependency #1: [Description]
- **Owner**: [Team/Vendor/External party]
- **Requirement**: [What we need]
- **Timeline**: [When we need it]
- **Risk**: [What could go wrong]
- **Fallback**: [What's our Plan B?]
- **De-risking strategy**: [How to reduce exposure]

---

## Pre-Mortem Analysis

**Imagine we shipped this and it failed. What went wrong?**

| Root Cause | Why It Happened | How To Prevent | Action Item |
|-----------|-----------------|----------------|------------|
| [Cause] | [Root reason] | [Prevention] | [Owner/Timeline] |

---

## Risk Monitoring Dashboard

| Risk | Current Status | Last Updated | Trend | Next Review |
|------|---|---|---|---|
| [Risk 1] | 🟡 On track | [Date] | → | [Date] |
| [Risk 2] | 🔴 Escalating | [Date] | ↑ | [Date] |

---

## Mitigation Roadmap

| Phase | Duration | Focus | Milestones | Owner |
|-------|----------|-------|-----------|-------|
| Pre-Dev | [X weeks] | De-risking, dependencies | Vendor approval, design spike | [Owner] |
| Dev | [X weeks] | Early validation, monitoring | Beta release, performance test | [Owner] |
| QA | [X weeks] | Edge case testing, load testing | Production simulation | [Owner] |
| Post-Launch | [X weeks] | Monitoring, quick fixes | SLA achievement, zero P0 bugs | [Owner] |

---

## Governance

**Risk Owner**: [Name/Role]
**Review Cadence**: [Weekly/Biweekly/At milestones]
**Escalation Threshold**: Risk score reaches [X]
**Stakeholders**: [Who needs updates]
```

## Examples

### Example: Technical Risk
```
Risk: Integration with third-party payment API
- Likelihood: Medium (known vendor, but new integration)
- Impact: High (payment failure blocks feature)
- Score: 6

Prevention:
- Start integration early (Week 2, not Week 6)
- Get dedicated vendor support
- Set up test environment immediately

Contingency:
- Detection: Payment API response time > 5s or error rate > 1%
- Response: Switch to fallback payment provider
- Recovery time: 2-4 hours

Leading indicators:
- Vendor API performance degradation
- Integration test failures
```

### Example: Resource Risk
```
Risk: Key engineer unavailable mid-project
- Likelihood: Medium (vacation, illness, departure)
- Impact: High (they're the only one who knows the architecture)
- Score: 6

Prevention:
- Pair-programming from week 1
- Document architecture decisions
- Build in knowledge sharing sessions

Contingency:
- Cross-train backup engineer now
- Keep detailed runbooks
- Plan sprint to be self-contained (minimal handoff)

Detection trigger:
- Engineer gives notice
- Engineer takes unexpected leave
```

## Tips for Effective Risk Management

1. **Start early** - Identify risks in discovery, not after coding
2. **Involve the team** - Engineers often spot risks you'll miss
3. **Be specific** - "Might fail" is not a risk; "Payment API latency causes timeouts" is
4. **Score honestly** - Don't minimize risks to look confident
5. **Update regularly** - Risks change as you learn more
6. **Focus on the high ones** - Don't waste energy on low-probability/low-impact risks
7. **Have a Plan B** - Contingencies separate panic from action
8. **Monitor continuously** - Detection is as important as prevention

## Pre-Mortem Template

Use this when planning high-stakes features:

"It's 6 months from now. We shipped this feature and it was a disaster. What went wrong?"

Then work backward:
- What customer problem didn't we anticipate?
- What technical debt did it create?
- What dependencies blindsided us?
- What did the team struggle with?
- What did we underestimate?

Then build mitigation for each root cause.
