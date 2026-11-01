# PRD Skill Description Optimization Analysis

## Current Description Strengths
✅ Clear sub-skill routing with trigger phrases  
✅ Aggressive "Always use" language to avoid under-triggering  
✅ Handles implicit requests ("even if they don't explicitly ask")  
✅ Covers core product planning domains  

## Eval Set Coverage Analysis

### Strong Triggers (Current description handles well)
- "write a PRD" - ✅ explicit
- "timeline estimate" - ✅ sub-skill routing
- "risk assessment" - ✅ sub-skill routing
- "user stories" - ✅ sub-skill routing
- "roadmap" - ✅ sub-skill routing

### Moderate/Weak Triggers (Could improve)
- "vague idea into concrete spec" - Could be stronger: needs "transform vague ideas" language
- "strategic planning" - Not explicitly mentioned; add strategic/vision language
- "board presentation/business case" - Not covered; add "justification" or "business case"
- "phased launch strategy" - Covered via "roadmap" but could be more explicit
- "project scoping/definition" - Implicit but could be more direct

### False Positive Risk (Correctly avoided)
- Calendar/resource scheduling - ✅ Not mentioned, safe
- CI/CD infrastructure - ✅ Not mentioned, safe
- Architecture decisions - ✅ Not mentioned, safe
- Research methodology - ✅ Not mentioned, safe

## Recommended Improvements

1. **Add strategic/vision language**: Include "strategic planning" and "business strategy"
2. **Add business justification language**: Include "business case," "go/no-go decision," "stakeholder alignment"
3. **Expand on vague-to-concrete**: Add "clarifying ambiguous requirements" or "turning ideas into specs"
4. **Emphasize phased delivery**: Explicitly mention "release strategies" and "phased rollout"
5. **Keep aggressive triggering**: Maintain current "even if they don't explicitly ask" approach

## Optimized Description (Proposed)

Create and plan product requirements, features, timelines, and releases with the PRD skill orchestrator. Use this skill whenever the user needs to write a PRD, plan a feature, estimate effort, assess risks, break down requirements, create a roadmap, or make strategic product decisions — **even if they don't explicitly ask for a "PRD" or "roadmap."** This skill automatically routes to specialized sub-skills:

- **prd-timeline-estimator**: When user mentions timeline, effort, estimate, how long, deadline, velocity, capacity, or delivery schedule
- **prd-risk-assessor**: When user mentions risk, blocker, dependency, what could go wrong, mitigation, contingency, or pre-mortem
- **prd-requirements-breaker**: When user mentions user stories, acceptance criteria, story points, scope, breaking it down, or defining done
- **prd-roadmap-planner**: When user mentions roadmap, release plan, quarterly plan, phases, prioritization, phased rollout, or go/no-go gates

**Always use this skill for**: Product planning, feature definition, requirements documentation, timeline estimation, risk assessment, user story creation, roadmap planning, release strategy, project scoping, phased delivery, business case development, strategic product decisions, stakeholder alignment, initiative planning, transforming vague ideas into concrete specs, or any product management task involving planning, defining, or delivering a product. Use it even when the user doesn't explicitly mention "PRD," "roadmap," or "stories" — any work related to defining, scoping, justifying, or planning a product should trigger this skill.

## Changes Summary
- Added: "strategic product decisions", "release strategy", "phased delivery", "business case", "stakeholder alignment", "transforming vague ideas"
- Expanded sub-skill triggers with additional phrases for each (schedule, pre-mortem, phased rollout, go/no-go gates)
- Emphasized "even if they don't explicitly ask" with stronger language
- Clearer separation of explicit asks vs. implicit product work
