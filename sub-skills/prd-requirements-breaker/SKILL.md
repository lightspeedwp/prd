---
name: prd-requirements-breaker
description: |
  Break requirements into user stories with acceptance criteria and effort estimates. Always use this skill when the user needs to decompose features, create user stories, write acceptance criteria, define "done," or scope work — even if they don't explicitly say "user stories." Use for: "break this down", "user stories", "acceptance criteria", "story points", "scope this", "how big is this?", "test cases", "definition of done", "story cards", "effort estimation", "split this feature", "what needs to be tested?", or any task involving turning requirements into actionable work units. Create user story cards with acceptance criteria, scope boundaries, effort estimates, and dependency maps.
compatibility: null
---

# PRD Requirements Breaker

Transform requirements into user stories with acceptance criteria and effort estimates.

## When to Use This Skill

Use this sub-skill when you need to:
- **Break down requirements** - Turn a feature into stories
- **Write user stories** - "As a [user], I want [capability] so that [benefit]"
- **Define acceptance criteria** - What makes a story "done"?
- **Scope story boundaries** - How big should each story be?
- **Estimate effort** - T-shirt sizing, story points, hours
- **Create test cases** - Scenarios and edge cases
- **Define deliverables** - What does done look like?
- **Map dependencies** - Story order and blockers

## Workflow

### Step 1: Understand the Requirement

Ask:
- **What problem does this solve?** - User need, business value
- **Who benefits?** - Personas, roles, segments
- **What's in scope?** - What are we building?
- **What's out of scope?** - What are we explicitly NOT building?
- **Success metrics** - How will we measure success?
- **Technical constraints** - Architecture, integrations, performance

### Step 2: Identify User Personas

Define who uses this feature:

```
Persona: [Name/Role]
- Goal: [What are they trying to accomplish?]
- Context: [When/where do they use this?]
- Frustration: [Current pain point]
- Success: [What would delight them?]
```

### Step 3: Write User Stories

Use this format:

```
[Story #]: [Title]

As a [persona]
I want [capability]
So that [business value]

Type: Feature / Bug / Technical Debt
Complexity: Small / Medium / Large
Estimate: [T-shirt size or points]

### Acceptance Criteria

#### Scenario 1: [Title]
Given [context/precondition]
When [action/trigger]
Then [expected result]

#### Scenario 2: [Title]
Given [context]
When [action]
Then [expected result]

### Edge Cases & Error Handling
- What if [edge case]?
- What if [error condition]?
- What if [boundary condition]?

### Technical Notes
- [Implementation consideration 1]
- [Implementation consideration 2]
- Architecture: [If specific approach required]

### Testing Strategy
- Unit tests: [Coverage]
- Integration tests: [Coverage]
- Manual tests: [Coverage]
- Performance: [SLAs]

### Definition of Done
- [ ] Code complete and reviewed
- [ ] Unit tests pass (80%+ coverage)
- [ ] Acceptance criteria met
- [ ] No console errors
- [ ] Accessibility check passed
- [ ] Documentation complete
- [ ] QA sign-off

### Dependencies
- Blocks: [Other stories this unblocks]
- Blocked by: [Stories that must come first]
- Related: [Stories this connects to]

### Notes
[Additional context, examples, references]
```

### Step 4: Group into Milestones

Organize stories into:
- **MVP** (Minimum Viable Product) - Essential features only
- **Complete** - All planned features
- **Polish** - Nice-to-haves and refinements

### Step 5: Estimate & Prioritize

For each story:
- **Priority** - Must/Should/Could/Won't
- **Complexity** - Small/Medium/Large
- **Estimate** - T-shirt size or story points
- **Dependencies** - What blocks this?

## Story Breakdown Patterns

### Pattern 1: User Journey Stories

Break feature by user steps:

```
Story 1: User can view product catalog
Story 2: User can search/filter products
Story 3: User can add products to cart
Story 4: User can checkout
Story 5: User can view order confirmation
```

### Pattern 2: Technical Breakdown

Break by technical layers:

```
Story 1: Design data model and API
Story 2: Implement backend endpoints
Story 3: Build UI components
Story 4: Integrate frontend with backend
Story 5: Performance optimization
```

### Pattern 3: Risk-Reduced Breakdown

Start with unknowns:

```
Story 1: Spike - Evaluate third-party library
Story 2: Implement core functionality
Story 3: Add advanced features
Story 4: Optimize and polish
```

### Pattern 4: Incremental Value Breakdown

Deliver value at each step:

```
Story 1: Basic feature (MVP)
Story 2: Add user preferences
Story 3: Add analytics
Story 4: Add admin features
```

## Acceptance Criteria Examples

### Example 1: Search Feature
```
Scenario: User searches for products
Given I'm on the product page
When I enter "shoes" in the search box and press Enter
Then I see only products matching "shoes"
And results show product count

Scenario: Search with no results
Given I'm on the product page
When I enter "xyzabc" (non-existent term)
Then I see "No results found" message
And I see suggested searches

Scenario: Autocomplete appears
Given I'm in the search box
When I type at least 3 characters
Then I see autocomplete suggestions
And suggestions narrow as I type more
```

### Example 2: Payment Processing
```
Scenario: Valid payment
Given I'm on the checkout page
When I enter valid card details and click Pay
Then payment processes successfully
And I see confirmation page with order number
And confirmation email is sent

Scenario: Card declined
Given I'm on the checkout page
When I enter a declined card and click Pay
Then payment fails with "Card declined" message
And I can retry with different card
And cart items remain unchanged

Scenario: Network error
Given I'm processing payment
When the payment gateway is unavailable
Then I see "Service unavailable" message
And payment is not retried automatically
And I can try again later
```

## Story Sizing Guide

| Size | T-Shirt | Points | Duration | Examples |
|------|---------|--------|----------|----------|
| XS | Tiny | 1 | 1-2 hours | Fix typo, update label, simple config |
| S | Small | 2-3 | 1-2 days | Single UI component, simple endpoint, bug fix |
| M | Medium | 5-8 | 3-5 days | Feature with 2-3 parts, moderate complexity |
| L | Large | 13-20 | 1-2 weeks | Complex feature, multiple integrations |
| XL | Extra Large | 40+ | 2+ weeks | Major feature, should be broken down |

**Pro tip**: If a story is XL, break it down into smaller stories.

## Output Format

```
# Requirements Breakdown: [Feature Name]

## User Personas
[Personas affected by this feature]

## Feature Summary
- **Problem**: [What are we solving?]
- **Users**: [Who benefits?]
- **Success Metric**: [How we'll measure success]
- **Complexity**: [Low/Medium/High]
- **Total Stories**: [X]
- **Estimated Effort**: [Total points/hours]

## User Stories

### Sprint 1 (MVP)

#### Story 1: [Title]
**Complexity**: Small | **Estimate**: 3 points

As a [persona]
I want [capability]
So that [value]

**Acceptance Criteria**:
- Scenario 1: Given X, When Y, Then Z
- Scenario 2: Given X, When Y, Then Z

**Dependencies**: None
**Blockers**: None

---

#### Story 2: [Title]
[Same format]

---

### Sprint 2 (Complete)

#### Story 3: [Title]
[Same format]

---

## Epic Map

| Epic | Stories | Total Points | MVP | Notes |
|------|---------|--------------|-----|-------|
| Search | Stories 1-3 | 13 | ✓ | Essential for MVP |
| Checkout | Stories 4-6 | 21 | ✓ | Must complete for launch |
| Analytics | Stories 7-9 | 16 | ✗ | Phase 2 feature |

## Dependencies & Milestones

| Milestone | Stories | Duration | Blockers | Go/No-Go Criteria |
|-----------|---------|----------|----------|-------------------|
| MVP | 1-6 | 4 weeks | [List] | All stories done, no P1 bugs |
| Complete | 7-12 | 6 weeks | MVP done | Feature complete, performance OK |
| Launch | - | 1 week | Complete done | Staging sign-off |

## Estimation Summary

| Phase | Stories | Total Points | Estimated Days | Team Velocity |
|-------|---------|--------------|-----------------|----------------|
| MVP | 1-6 | 34 | 17 | 2 points/day |
| Complete | 7-12 | 24 | 12 | 2 points/day |
| Polish | 13-15 | 13 | 7 | 2 points/day |
| **Total** | 15 | **71** | **36** | **2 points/day** |

---

## Testing Strategy per Story

[For each story or epic, define testing approach]

## Ready for Dev Checklist

- [ ] All stories written
- [ ] Acceptance criteria clear
- [ ] Team reviewed and estimated
- [ ] Dependencies mapped
- [ ] Acceptance criteria testable/verifiable
- [ ] Examples/mockups attached
- [ ] Edge cases identified
- [ ] Performance requirements defined
- [ ] Accessibility requirements checked
- [ ] Team confident in estimates
```

## Tips for Great User Stories

1. **Focus on the user** - Not "implement X", but "user can do Y"
2. **Keep stories small** - Fits in 1 sprint, completable by 1-2 people
3. **Make criteria testable** - Can QA verify this is done?
4. **Include edge cases** - Don't assume the happy path
5. **Call out unknowns** - "Spike on X" for uncertain items
6. **Link to business value** - Why does this matter?
7. **Estimate with the team** - Devs know better than PMs
8. **Break it down** - If a story won't fit in a sprint, split it
9. **Add examples** - Screenshots, data samples, mock-ups
10. **Update as you learn** - Estimates change as you code

## Red Flags in Stories

- ⚠️ Story takes > 1 sprint → Break it down
- ⚠️ Acceptance criteria unclear → Rewrite with specific examples
- ⚠️ No test scenario → Add "Scenario: X"
- ⚠️ "Make X better" (vague) → Define specific measurable outcome
- ⚠️ Depends on 3+ other stories → Risk! Reorder or spike first
- ⚠️ Performance not mentioned → Add SLA ("Load in < 2s")
- ⚠️ No Definition of Done → Add testing/docs requirements

## Questions to Ask

- What's the smallest piece we can ship that delivers value?
- What's the riskiest part of this feature?
- What can we learn earliest?
- What blocks other stories?
- What are we uncertain about?
- What should we spike on first?
