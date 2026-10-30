# Feature Breakdown PRD

## Quick Start

For rapid feature definition:

```
I need a feature breakdown for [feature name].

Requirements:
- [Requirement 1]
- [Requirement 2]
- [Requirement 3]

Please provide:
1. Problem Statement
2. User Stories (3-5)
3. Acceptance Criteria
4. Technical Approach
5. Effort Estimate
6. Key Risks
```

## Complete Feature Breakdown Template

Use this for comprehensive feature analysis:

```
Analyze and break down this feature:

Feature Name: [name]
Epic/Initiative: [which larger initiative is this part of?]

BUSINESS CONTEXT
- Problem: [What problem does this solve?]
- Opportunity: [Market or user opportunity]
- Business Value: [Why does this matter?]
- Success Definition: [How will we know it succeeded?]

USER CONTEXT
- Primary Users: [Who are they?]
- User Jobs to Be Done: [What are they trying to accomplish?]
- Current Workflow: [How do they do this today?]
- Desired Workflow: [How should they do it after this feature?]
- User Needs: [What are the top 3 needs?]

REQUIREMENTS BREAKDOWN
Core Requirements:
- [Requirement 1]: [Why is this critical?]
- [Requirement 2]: [Why is this critical?]
- [Requirement 3]: [Why is this critical?]

Secondary Requirements (nice-to-have):
- [Enhancement 1]: [Value add]
- [Enhancement 2]: [Value add]

TECHNICAL BREAKDOWN
- Architecture Impact: [How does this change our system?]
- Technology Choices: [What technologies will we use?]
- Integration Points: [What systems need to integrate?]
- Data Considerations: [Data structures, storage, migrations]
- Performance Requirements: [SLAs, load expectations]
- Security Considerations: [Auth, permissions, compliance]

IMPLEMENTATION STRATEGY
Phase 1 - MVP (Week 1-2):
- Core Features: [List MVP features]
- User Stories: [3-5 stories]
- Testing Strategy: [How will we validate?]

Phase 2 - Enhancement (Week 3-4):
- Additional Features: [List enhancements]
- User Stories: [Additional stories]

Phase 3 - Polish (Week 5+):
- Refinements: [UX improvements]
- Performance: [Optimization work]

RISK & MITIGATION
Top 3 Risks:
1. [Risk]: Likelihood [H/M/L], Impact [H/M/L]
   - Mitigation: [How to prevent]
   - Contingency: [What if it happens?]
   
2. [Risk]: ...
3. [Risk]: ...

ACCEPTANCE CRITERIA
For this feature to be "Done":
- [ ] All user stories completed and tested
- [ ] Performance meets SLAs
- [ ] Security review complete
- [ ] Documentation complete
- [ ] No critical bugs in QA
- [ ] Stakeholder acceptance

EFFORT ESTIMATE
- Design: [T-shirt size]
- Development: [T-shirt size]
- QA: [T-shirt size]
- Deployment: [T-shirt size]
- Total: [Timeline estimate]

METRICS & MONITORING
Success Metrics:
- [Metric 1]: [Target value]
- [Metric 2]: [Target value]
- [Metric 3]: [Target value]

Monitoring & Alerting:
- [Alert 1]: [Threshold]
- [Alert 2]: [Threshold]
```

## User Story Card Template

For detailed user story creation:

```
Generate user story cards for this feature:

Feature: [feature name]

User Stories:

Story 1: [Title]
As a [user persona]
I want [capability]
So that [business value]

Acceptance Criteria:
- Scenario 1: Given [context] When [action] Then [result]
- Scenario 2: Given [context] When [action] Then [result]
- Scenario 3: Given [context] When [action] Then [result]

Effort: [T-shirt size]
Priority: [Must/Should/Could]
Dependencies: [List any dependencies]

Technical Notes:
- [Implementation note 1]
- [Implementation note 2]

[Repeat for other stories]
```

## Roadmap Integration

Fit this feature into the product roadmap:

```
This feature is part of the [product name] roadmap.

Q[X] Roadmap Position:
- Initiative: [Larger initiative this belongs to]
- Priority: [Relative priority vs other features]
- Dependencies: [What needs to happen first?]
- Enablers: [What features enable this?]
- Blockers: [What could block this?]

Timeline:
- Discovery & Design: [Dates]
- Development: [Dates]
- QA & Launch: [Dates]
- Monitoring & Iteration: [Dates]

Success Criteria for Q[X]:
- Launch Target: [Date]
- Adoption Target: [Metric]
- Revenue Impact: [Expected impact]
- User Satisfaction: [NPS target or similar]
```

## Implementation Checklist

Before development starts:

```
Feature: [name]

Pre-Development Checklist:
- [ ] PRD signed off by stakeholders
- [ ] Design mocks/wireframes complete
- [ ] API specifications defined
- [ ] Database schema reviewed
- [ ] Security review complete
- [ ] Performance requirements defined
- [ ] Monitoring & logging plan defined
- [ ] Rollback strategy documented

Development Ready:
- [ ] Acceptance criteria clear to dev team
- [ ] Technical approach agreed
- [ ] Risk mitigation plan in place
- [ ] Effort estimates validated
- [ ] Resource allocation confirmed
- [ ] Development environment ready

Testing Ready:
- [ ] Test plan complete
- [ ] Test data prepared
- [ ] Staging environment ready
- [ ] Rollout plan documented
```

## Tips & Best Practices

1. **Be User-Centric**: Always frame requirements in terms of user needs
2. **Define Done**: Make acceptance criteria specific and measurable
3. **Plan for Phases**: Ship the MVP first, then iterate
4. **Call Out Risks**: Identify blockers and dependencies early
5. **Estimate Realistically**: Include time for discovery, QA, and deployment
6. **Document Decisions**: Explain why you chose this approach
7. **Gather Feedback**: Iterate based on stakeholder and user input

---

**Pro Tip**: Use this as the foundation for a full PRD, breaking user stories into tasks during sprint planning.
