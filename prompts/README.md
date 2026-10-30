# PRD Skill Prompts

Example prompts for using the PRD skill in Claude Code. Copy and adapt these for your projects.

## Quick Triggers

Use these to quickly invoke the PRD skill:

### PRD Writing
```
Write a PRD for a notification system
```

```
Create a product specification for [feature name]
```

```
Generate a comprehensive PRD with the following details:
- Problem: [description]
- Target users: [description]
- Success metrics: [description]
```

### Feature Planning
```
Break down this feature into user stories:
[feature description]
```

```
Generate user stories with acceptance criteria for [feature]
```

```
Prioritize these features using impact/effort analysis:
1. [feature 1]
2. [feature 2]
3. [feature 3]
```

### Timeline Estimation
```
Estimate the timeline for this project:
- Features: [list]
- Team size: [number]
- Complexity: [low/medium/high]
```

```
Create a realistic delivery schedule for [project]
with contingency buffers
```

```
Identify the critical path for this initiative:
[description of project phases]
```

### Roadmap Creation
```
Create a 12-month product roadmap for [product]
with quarterly phases
```

```
Build a release plan for the following features:
[list of features with descriptions]
```

```
Plan the phased rollout for [feature]:
- Phase 1: [description]
- Phase 2: [description]
- Phase 3: [description]
```

### Risk Assessment
```
Identify risks in this initiative:
[project description]
```

```
Perform a risk assessment for [project] with:
- Likelihood and impact scoring
- Mitigation strategies
- Contingency plans
```

```
Pre-mortem: We shipped this feature and it failed.
What went wrong? [feature description]
```

## Full Workflow Examples

### Example 1: New SaaS Feature

```
I need help planning a new notification system for our SaaS app.

Requirements:
- Real-time email and push notifications
- User preference management
- Digest options (daily/weekly)
- Integrations with Slack and Teams

Please:
1. Write a comprehensive PRD with Strict PRD Schema
2. Break it down into user stories with acceptance criteria
3. Identify technical and timeline risks
4. Estimate a realistic timeline
5. Create a phased rollout plan
```

### Example 2: Mobile App Launch

```
We're launching a mobile app in 3 months. Help me plan this:

Team: 4 engineers, 1 designer, 1 QA
Target: iOS + Android
Complexity: Medium (complex features, new codebase)

Please:
1. Create a 12-week roadmap with milestones
2. Break down each phase into features
3. Estimate effort and timeline
4. Identify key risks and contingencies
5. Plan the phased rollout (beta → public)
```

### Example 3: Product Initiative

```
Planning our Q1-Q4 roadmap for [product].

Business goals:
1. [Goal 1 with metric]
2. [Goal 2 with metric]
3. [Goal 3 with metric]

Please:
1. Create quarterly phases aligned to these goals
2. Define features for each quarter
3. Map dependencies
4. Estimate timeline with buffers
5. Plan quarterly milestones and releases
```

## Context Examples

### Feature Description Template

```
Feature: [Name]
Problem: [What problem does this solve?]
Target Users: [Who benefits?]
Success Metric: [How will we measure success?]
Constraints: [Technical, timeline, or resource constraints]
Dependencies: [What needs to happen first?]
Complexity: [Low/Medium/High - why?]
Timeline Preference: [Desired delivery date]
```

### Project Overview Template

```
Project: [Name]
Scope: [Brief description]
Team: [Members and roles]
Timeline: [Target date or duration]
Budget: [Constraints, if any]
Risks: [Known challenges]
Success Criteria: [How will we know it succeeded?]
Stakeholders: [Key decision makers]
```

### Initiative Template

```
Initiative: [Name]
Theme: [Strategic theme]
Objectives: [What are we trying to achieve?]
Key Results: [Measurable outcomes]
Features: [Features included in this initiative]
Timeline: [Phases and milestones]
Dependencies: [External dependencies]
Resources: [Team and budget needed]
Risks: [Key risks and mitigations]
```

## Tips for Better Results

1. **Be Specific**: Include real names, numbers, and context
2. **Provide Context**: Explain business drivers and constraints
3. **Ask for Phases**: Request specific outputs (PRD, roadmap, timeline)
4. **Include Examples**: Share examples of what success looks like
5. **Iterate**: Follow up with feedback and refinements
6. **Use Templates**: Adapt these templates for your projects

## Combining Prompts

You can combine multiple requests:

```
Write a PRD for [feature], then:
1. Break it into user stories
2. Estimate the timeline
3. Identify technical risks
4. Create a phased implementation plan
```

## Advanced Prompts

### For Estimation

```
Estimate this with:
- Optimistic case (best scenario)
- Expected case (realistic scenario)
- Pessimistic case (worst scenario)
- Recommended contingency buffer
```

### For Risk Management

```
Risk assessment with:
1. Identification (what could go wrong?)
2. Scoring (likelihood × impact)
3. Mitigation (how to prevent)
4. Contingency (what if it happens?)
```

### For Strategic Planning

```
Create a strategic roadmap that:
- Aligns with [business goals]
- Phases work over [timeframe]
- Includes resource planning
- Shows critical dependencies
- Identifies success metrics per phase
```

---

**Pro Tip**: Copy a prompt, fill in your details, and paste into Claude Code. The PRD skill will intelligently route to the right sub-skill for your request!
