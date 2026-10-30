---
name: prd-timeline-estimator
description: |
  Estimate delivery timelines, effort, and critical paths for any feature, project, or initiative. Always use this skill when the user mentions timing, deadlines, how long something will take, shipping dates, velocity, capacity, resources, or delivery schedules — even if they don't explicitly ask for an "estimate." Use for: "when can we ship?", "how long will this take?", "estimate effort", "timeline", "critical path analysis", "resource planning", "capacity planning", "when will this be done?", "team velocity", "sprint planning", "delivery schedule", or any question about WHEN something will be complete. Include three-scenario planning (optimistic/expected/pessimistic), contingency buffers, critical path analysis, and resource allocation.
compatibility: null
---

# PRD Timeline Estimator

Estimate realistic timelines, effort, and critical paths for features and initiatives.

## When to Use This Skill

Use this sub-skill when you need to:
- **Estimate delivery timelines** - How long will this feature take?
- **Size effort** - Story points, t-shirt sizing, hour estimates
- **Analyze critical path** - What's blocking progress?
- **Plan capacity** - Resource allocation and team velocity
- **Adjust for risks** - Build in contingency buffers
- **Validate feasibility** - Can we ship by the deadline?

## Workflow

### Step 1: Gather Context

Ask for:
- **Feature scope** - What are we building? Any open questions?
- **Team composition** - Engineers, designers, QA, who's involved?
- **Team velocity** - Historical completion rates (if available)
- **Complexity factors** - Technical unknowns, dependencies, integrations
- **Constraints** - Hard deadlines, resource limits, blocking factors
- **Reference points** - Similar features built before?

### Step 2: Estimate Using Three Scenarios

Provide estimates for each scenario:

**Optimistic Case (Best scenario)**
- Assume everything goes smoothly
- No blockers or surprises
- Team works at peak velocity
- Result: "fastest possible timeline"

**Expected Case (Realistic scenario)**
- Account for normal discoveries
- Include time for review, QA, iteration
- Use historical team velocity
- Result: "most likely timeline"

**Pessimistic Case (Worst scenario)**
- Account for unknowns
- Include scope creep
- Factor in blockers
- Result: "worst-case timeline"

### Step 3: Calculate Contingency Buffer

Add buffer to the expected case:

- **Low complexity**: 10-15% buffer
- **Medium complexity**: 20-30% buffer
- **High complexity**: 40-50% buffer

**Recommended delivery date** = Expected Case + Contingency Buffer

### Step 4: Identify Critical Path

Map dependencies and blocking factors:

1. **Longest dependency chain** - What takes the most time?
2. **Parallel vs sequential work** - What can happen at the same time?
3. **Milestones** - Key decision points
4. **Risk items** - What could delay us?
5. **Slack** - Where do we have flexibility?

### Step 5: Break Into Phases

Organize timeline into manageable phases:

**Phase 1: Discovery & Design**
- User research, spec writing, technical design
- Duration: [estimate]
- Go/no-go gate: [criteria]

**Phase 2: Development (MVP)**
- Core features only
- Duration: [estimate]
- Deliverable: MVP ready for QA

**Phase 3: Development (Complete)**
- Secondary features, polish
- Duration: [estimate]
- Deliverable: Feature-complete

**Phase 4: QA & Launch**
- Testing, bug fixes, documentation
- Duration: [estimate]
- Deliverable: Production-ready

## Output Format

Deliver timeline estimates in this format:

```
# Timeline Estimate: [Feature Name]

## Estimates by Scenario

### Optimistic Case (Best scenario)
- Duration: [X weeks]
- Assumptions: [List key assumptions]
- Risk: Low

### Expected Case (Most likely)
- Duration: [X weeks]
- Assumptions: [List key assumptions]
- Risk: Medium

### Pessimistic Case (Worst scenario)
- Duration: [X weeks]
- Assumptions: [List key assumptions]
- Risk: High

## Recommended Timeline
- Base duration: [Expected Case duration]
- Contingency buffer: [% or weeks]
- **Recommended delivery date: [Date]**
- Confidence level: [High/Medium/Low]

## Critical Path Analysis
1. Longest dependency chain: [description]
   - Duration: [X weeks]
   - Items: [list]

2. Parallel work opportunities: [description]
   - Potential savings: [X weeks]

3. Key milestones and gates:
   - Milestone 1: [Date] - [Criteria for success]
   - Milestone 2: [Date] - [Criteria for success]

## Phase Breakdown

| Phase | Duration | Start | End | Dependencies | Deliverable |
|-------|----------|-------|-----|--------------|-------------|
| Discovery & Design | X weeks | [Date] | [Date] | [List] | [Deliverable] |
| MVP Development | X weeks | [Date] | [Date] | [List] | [Deliverable] |
| Full Development | X weeks | [Date] | [Date] | [List] | [Deliverable] |
| QA & Launch | X weeks | [Date] | [Date] | [List] | [Deliverable] |

## Risk Factors & Contingencies

| Risk | Likelihood | Impact | Mitigation | Contingency |
|------|-----------|--------|-----------|-------------|
| [Risk 1] | H/M/L | H/M/L | [Strategy] | [Plan B] |
| [Risk 2] | H/M/L | H/M/L | [Strategy] | [Plan B] |

## Team Velocity Assumptions
- Team size: [X engineers]
- Historical velocity: [X points/week or X stories/week]
- Utilization rate: [X%]
- Overhead (meetings, interrupts): [X hours/week]

## Key Assumptions
1. [Assumption 1]
2. [Assumption 2]
3. [Assumption 3]

## Confidence & Next Steps
- Overall confidence in this estimate: [High/Medium/Low]
- Highest risk to accuracy: [Description]
- Recommended review date: [When to reassess]
- Action items: [What needs validation]
```

## Examples

### Example: Medium Complexity Feature
```
Feature: Real-time notifications
Team: 3 engineers, 1 designer, QA team

Optimistic: 6 weeks (everything smooth, familiar tech)
Expected: 8 weeks (normal discoveries, some integration work)
Pessimistic: 12 weeks (new platform, significant unknowns)

Contingency: 8 weeks × 25% = 2 weeks buffer
Recommended: 10 weeks (late August)

Critical path: Backend infrastructure → Client integration → QA
```

### Example: High Complexity Project
```
Feature: Mobile app launch
Team: 6 engineers, 2 designers, QA team, DevOps

Optimistic: 16 weeks (no surprises, familiar patterns)
Expected: 24 weeks (platform differences, app store reviews)
Pessimistic: 36 weeks (major blockers, regulatory issues)

Contingency: 24 weeks × 40% = 9.6 weeks buffer
Recommended: 33 weeks (mid-Q3 next year)

Critical path: App architecture → Platform-specific work → Store submission
```

## Tips for Accurate Estimates

1. **Include all phases** - Design, dev, QA, deployment, learning
2. **Account for interruptions** - Meetings, support, incident response
3. **Use historical data** - What's your actual velocity?
4. **Talk to the team** - Developers often catch risks you'd miss
5. **Build in slack** - Time for discovery, iteration, fixes
6. **Update regularly** - Revise as you learn more
7. **Document assumptions** - Why does this estimate assume X?
8. **Plan for the hard part** - Unknown tech, integrations, compliance

## Questions to Ask

- What's new or uncertain about this feature?
- Have we built something similar before?
- What integrations are required?
- What's the review/approval process?
- What happens after launch? (monitoring, support, iteration)
- Are there external dependencies? (vendors, third parties, regulations)
