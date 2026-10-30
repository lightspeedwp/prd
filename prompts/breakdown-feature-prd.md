# Breakdown Feature PRD

## Quick Prompt

```
Break down this feature into a comprehensive PRD using the Strict PRD Schema.
Feature: [feature name]
Problem: [what problem does it solve?]
Target Users: [who benefits?]
Success Metrics: [how will we measure success?]
```

## Full Workflow

Use this when you need a complete feature breakdown with all PRD components:

```
Create a comprehensive PRD for this feature using the Strict PRD Schema:

Feature Name: [name]

Business Context:
- Problem Statement: [what problem are we solving?]
- Target Users: [user personas and segments]
- Business Goals: [what does success look like for the business?]
- Success Metrics: [measurable KPIs]

Technical Context:
- Current State: [what exists today?]
- Constraints: [technical, timeline, resource constraints]
- Dependencies: [what needs to happen first?]
- Complexity: [why is this high/medium/low complexity?]

Requirements:
1. [Core requirement 1]
2. [Core requirement 2]
3. [Core requirement 3]

Non-Goals:
- [What are we explicitly NOT doing?]

Please structure this as:
1. Executive Summary
2. User Experience (with user journeys)
3. Technical Specifications
4. Risks & Roadmap
5. Non-Goals

Include acceptance criteria for each major requirement.
```

## Breaking Down by Phase

For phased rollouts:

```
Break this feature into phases for the following timeline: [timeline]

Feature: [feature name]
Team Size: [number of engineers]
Complexity: [low/medium/high]

For each phase, provide:
1. Phase Name & Duration
2. User Stories with Acceptance Criteria
3. Technical Work Required
4. Dependencies & Blockers
5. Success Metrics per Phase
6. Go/No-Go Criteria

Structure as:
- Phase 1: [MVP/Core]
- Phase 2: [Enhancement]
- Phase 3: [Polish/Advanced]
```

## User Story Breakdown

Extract user stories with acceptance criteria:

```
Generate user stories with acceptance criteria for this feature:

Feature: [feature name]
User Personas:
- [Persona 1]: [description]
- [Persona 2]: [description]

For each persona, provide:
- User Story: "As a [persona], I want [capability] so that [benefit]"
- Acceptance Criteria:
  * Given [context] when [action] then [result]
  * [Additional criteria]
- Technical Notes: [implementation considerations]
- Effort Estimate: [t-shirt size]
```

## Risk Assessment & Mitigation

Identify and plan for risks:

```
Perform risk assessment for this feature:

Feature: [feature name]
Scope: [brief description]

For each risk, identify:
1. Risk Description: [what could go wrong?]
2. Likelihood: [high/medium/low]
3. Impact: [high/medium/low] 
4. Mitigation Strategy: [how to prevent]
5. Contingency Plan: [what if it happens?]

Prioritize by likelihood × impact.
```

## Timeline Estimation

Estimate realistic delivery timeline:

```
Estimate timeline for this feature:

Team: [size and skills]
Feature Scope: [description]
Complexity: [low/medium/high]
Constraints: [known constraints]

Provide:
1. Optimistic Case: [best scenario]
2. Expected Case: [realistic scenario]
3. Pessimistic Case: [worst scenario]
4. Recommended Contingency Buffer: [%]
5. Critical Path: [longest dependency chain]
6. Key Milestones: [phase gates]

Include assumptions about team velocity and blockers.
```

## Tips for Better Breakdowns

1. **Be Specific**: Use real names, numbers, and concrete examples
2. **Define Success**: Include measurable success criteria
3. **Think Phases**: Break into logical, shippable phases
4. **Map Dependencies**: Identify what needs to happen first
5. **Plan for Risks**: Call out known unknowns early
6. **Include Trade-offs**: Explain why you chose this approach
7. **Iterate**: Review and refine based on feedback

---

Pro Tip: Use this workflow as part of a larger PRD creation → then iterate based on feedback from stakeholders and the team.
