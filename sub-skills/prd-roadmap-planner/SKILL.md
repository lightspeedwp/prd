---
name: prd-roadmap-planner
description: |
  Create product roadmaps, release plans, and phased delivery strategies. Always use this skill when the user needs to plan releases, prioritize features, or think strategically about delivery — even if they don't explicitly ask for a "roadmap." Use for: "create a roadmap", "release plan", "quarterly planning", "prioritize features", "what should we build first?", "phases", "milestones", "roadmap", "product planning", "go/no-go criteria", "phased rollout", "release strategy", "Q1/Q2/Q3/Q4 plan", or any strategic product planning question. Create phased roadmaps with milestones, define release strategies (phased rollout, canary, big bang), allocate resources, prioritize across initiatives, and establish go/no-go decision gates.
compatibility: null
---

# PRD Roadmap Planner

Design product roadmaps, release plans, and phased delivery strategies.

## When to Use This Skill

Use this sub-skill when you need to:
- **Create a product roadmap** - Quarter/year planning, phases
- **Plan releases** - Which features ship when?
- **Prioritize initiatives** - What comes first?
- **Set milestones** - Key decision points and gates
- **Manage dependencies** - Cross-team coordination
- **Align with business goals** - How features support strategy
- **Plan resource allocation** - Who works on what?
- **Build release strategy** - Alpha, beta, full launch, rollout

## Workflow

### Step 1: Gather Business Context

Ask:
- **Strategic goals** - What are we trying to achieve? (next quarter/year)
- **Market context** - What's changing in our market?
- **Competitive landscape** - What are competitors doing?
- **User feedback** - What are users asking for?
- **Technical constraints** - What do we need to fix/improve?
- **Team capacity** - How many people for how long?
- **Customer commitments** - Any promised dates or features?

### Step 2: Define Phases

Break roadmap into logical phases:

**Phase 1 (Foundation)**: Address must-haves
- Problem: [What's blocking us?]
- Features: [Core capabilities]
- Timeline: [Weeks]
- Go/No-Go: [Success criteria]

**Phase 2 (Enhancement)**: Add should-haves
- Problem: [What's the next priority?]
- Features: [Secondary capabilities]
- Timeline: [Weeks]
- Go/No-Go: [Success criteria]

**Phase 3 (Optimization)**: Nice-to-haves and polish
- Problem: [What improves user experience?]
- Features: [Polish and refinement]
- Timeline: [Weeks]
- Go/No-Go: [Success criteria]

### Step 3: Map Features to Phases

For each feature:
- **Priority** - Must/Should/Could (MoSCoW)
- **Phase** - Which phase does it belong in?
- **Dependencies** - What must come first?
- **Effort** - How many weeks/points?
- **Owner** - Who's driving this?
- **Launch goal** - When should this be ready?

### Step 4: Define Milestones

Establish key moments:
- **Milestone 1**: [Date] - [Deliverable]
  - Go/No-Go criteria: [Specific, measurable criteria]
  - Decision: [What decision happens here?]
  - Stakeholders: [Who needs to sign off?]

### Step 5: Build Release Strategy

Plan how/when features ship:

**Early Access / Beta**
- Who has access? (internal, selected users, everyone?)
- Duration? (weeks)
- Success criteria? (adoption, bugs found, feedback)

**Phased Rollout**
- Start with percentage (10% → 25% → 50% → 100%)
- Metrics to monitor (performance, errors, adoption)
- Rollback criteria (if X metric drops below Y)

**Full Launch**
- All customers enabled
- Monitoring, support, docs in place
- Contingency plan ready

### Step 6: Plan Resource Allocation

Assign team capacity:

| Phase | Eng | Design | QA | PM | Notes |
|-------|-----|--------|-----|-----|-------|
| Phase 1 | 3 | 1 | 1 | 1 | Full focus |
| Phase 2 | 2 | 1 | 0.5 | 0.5 | Parallel work |
| Phase 3 | 1 | 0 | 0.5 | 0.5 | Maintenance mode |

## Output Format

```
# Product Roadmap: [Product/Initiative Name]

## Executive Summary

**Vision**: [What are we building and why?]

**Time horizon**: [Q2 2026 - Q4 2026]

**Key themes**:
1. [Theme 1]: [Description]
2. [Theme 2]: [Description]
3. [Theme 3]: [Description]

**Expected outcomes**:
- [Metric 1]: [Target]
- [Metric 2]: [Target]
- [Metric 3]: [Target]

---

## Strategic Alignment

| Business Goal | How This Roadmap Helps | Success Metric |
|---|---|---|
| [Goal 1] | [How this roadmap achieves it] | [Metric] |
| [Goal 2] | [How this roadmap achieves it] | [Metric] |
| [Goal 3] | [How this roadmap achieves it] | [Metric] |

---

## Roadmap by Phase

### Phase 1: [Phase Name] (Weeks 1-8, Q2 2026)
**Theme**: [Primary theme]
**Goal**: [What are we achieving?]
**Owner**: [PM name]

#### Features in this phase:
- **Feature A** (User story title)
  - Problem it solves: [Description]
  - User impact: [Who benefits, how]
  - Effort: 3 weeks
  - Dependencies: None
  - Go/No-Go criteria: [Specific, measurable]

- **Feature B**
  - Problem it solves: [Description]
  - User impact: [Who benefits, how]
  - Effort: 2 weeks
  - Dependencies: Feature A complete
  - Go/No-Go criteria: [Specific, measurable]

- **Feature C**
  - Problem it solves: [Description]
  - User impact: [Who benefits, how]
  - Effort: 2 weeks
  - Dependencies: Feature A complete
  - Go/No-Go criteria: [Specific, measurable]

**Phase 1 Milestones**:
- Week 2: [Deliverable] - [Who approves?]
- Week 4: [Deliverable] - [Who approves?]
- Week 8: [Deliverable] - [Who approves?]

**Phase 1 Go/No-Go Gates**:
- [ ] All features meet acceptance criteria
- [ ] Performance SLAs met
- [ ] No critical bugs open
- [ ] QA sign-off
- [ ] Stakeholder approval

---

### Phase 2: [Phase Name] (Weeks 9-16, Q3 2026)
**Theme**: [Primary theme]
**Goal**: [What are we achieving?]
**Owner**: [PM name]

#### Features in this phase:
[Same structure as Phase 1]

**Phase 2 Milestones**: [Same structure]
**Phase 2 Go/No-Go Gates**: [Same structure]

---

### Phase 3: [Phase Name] (Weeks 17-24, Q4 2026)
**Theme**: [Primary theme]
**Goal**: [What are we achieving?]
**Owner**: [PM name]

#### Features in this phase:
[Same structure as Phase 1]

**Phase 3 Milestones**: [Same structure]
**Phase 3 Go/No-Go Gates**: [Same structure]

---

## Timeline View

```
Phase 1         Phase 2           Phase 3
[========]      [===========]     [======]
  8 weeks      8 weeks            8 weeks
Q2 2026        Q3 2026            Q4 2026
```

| Feature | P1 | P2 | P3 | Notes |
|---------|----|----|-----|-------|
| Feature A | ✓ | | | Ships in Phase 1 |
| Feature B | ✓ | | | Ships in Phase 1 |
| Feature C | | ✓ | | Ships in Phase 2 |
| Feature D | | ✓ | ✓ | Spans P2-P3, iterative |
| Feature E | | | ✓ | Ships in Phase 3 |

---

## Release Strategy

### Deployment Model
**Type**: [Phased rollout / Big bang / Canary]

**Phased rollout** (Recommended):
- **Week 1**: 10% of users (internal + beta customers)
  - Success criteria: < 1% error rate, performance OK
  - Monitoring: [Metrics to watch]
  - Rollback criteria: [When to roll back]

- **Week 2**: 25% of users
  - Success criteria: < 0.5% error rate, adoption > 30%
  - Rollback criteria: [When to roll back]

- **Week 3**: 50% of users
  - Success criteria: < 0.3% error rate, adoption > 60%
  - Rollback criteria: [When to roll back]

- **Week 4**: 100% of users
  - Success criteria: Stable, < 0.1% error rate
  - Monitoring: Ongoing

### Launch Checklist
- [ ] All features QA approved
- [ ] Performance tested (under load)
- [ ] Security review complete
- [ ] Monitoring/alerting in place
- [ ] Documentation complete
- [ ] Support trained
- [ ] Rollback plan documented
- [ ] Communication to customers ready
- [ ] Post-launch support plan
- [ ] Analytics tracking configured

---

## Resource Allocation

### Team Capacity

| Role | Total Available | Phase 1 | Phase 2 | Phase 3 | Buffer |
|------|---|---|---|---|---|
| Engineers | 8 | 5 | 3 | 2 | 0 |
| Designers | 2 | 1.5 | 1 | 0.5 | 0 |
| QA | 2 | 1 | 1 | 0.5 | 0.5 |
| PM | 1 | 1 | 1 | 0.5 | 0 |

**Total eng capacity**: [X person-weeks]
**Planned roadmap**: [X person-weeks]
**Buffer**: [X person-weeks]
**Utilization**: [X%]

---

## Risk & Dependencies

### Critical Dependencies
| Feature | Depends On | Owner | Risk | Mitigation |
|---------|---|---|---|---|
| [Feature] | [External/Team] | [Owner] | [Risk] | [Plan] |

### High-Risk Items
| Risk | Impact | Phase | Mitigation |
|------|--------|-------|-----------|
| [Risk 1] | [High/Medium] | [Phase] | [Strategy] |
| [Risk 2] | [High/Medium] | [Phase] | [Strategy] |

---

## Success Metrics

### Business Metrics
- [Metric 1]: [Baseline] → [Target]
- [Metric 2]: [Baseline] → [Target]
- [Metric 3]: [Baseline] → [Target]

### User Metrics
- [Metric 1]: [Baseline] → [Target]
- [Metric 2]: [Baseline] → [Target]

### Operational Metrics
- Error rate: [Baseline] → [Target]
- Performance: [Baseline] → [Target]
- Uptime: [Baseline] → [Target]

---

## Review & Adjustment

**Roadmap review cadence**: [Weekly/Biweekly/Monthly]
**Stakeholder updates**: [Frequency and format]
**Adjustment criteria**: [When/how roadmap changes]
**Next major review**: [Date]
```

## Roadmap Patterns

### Pattern 1: Impact-Based (Recommended)
Prioritize by user impact and business value:
1. Phase 1: Solve biggest user pain point
2. Phase 2: Next highest impact features
3. Phase 3: Nice-to-haves and polish

### Pattern 2: Dependency-Driven
Start with foundations, build on top:
1. Phase 1: Core infrastructure
2. Phase 2: Main features
3. Phase 3: Advanced features

### Pattern 3: Risk-Reduction
Start with unknowns, validate assumptions:
1. Phase 1: Spike on unknowns
2. Phase 2: Build on learnings
3. Phase 3: Optimize and scale

### Pattern 4: Market-Driven
React to competitive or market pressures:
1. Phase 1: Match competitor feature
2. Phase 2: Differentiate further
3. Phase 3: Innovate beyond

## Tips for Great Roadmaps

1. **Connect to strategy** - How does each phase support business goals?
2. **Be realistic** - Include discovery, QA, iteration time
3. **Show dependencies** - What blocks what?
4. **Have go/no-go gates** - When do you reassess?
5. **Plan for learning** - Build in discovery/spike time
6. **Include buffer** - Things always take longer
7. **Keep it simple** - 3-5 features per phase is plenty
8. **Update regularly** - Roadmaps are living documents
9. **Involve the team** - Engineers catch risks early
10. **Align with business** - Does leadership agree?

## Questions to Answer

- What's our #1 user pain point?
- What's the riskiest thing we're building?
- What should we learn first?
- What blocks other features?
- What can we ship in 8 weeks?
- When should we revisit this roadmap?
- How will users react to each phase?
- What could derail us?
- How do we know each phase succeeded?
