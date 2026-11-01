# Sub-Skill Routing Validation Report for ls-prd

## Executive Summary

Testing the routing accuracy of the ls-prd skill across 38 comprehensive test cases covering:
- **8 Timeline Estimator tests** — Timeline, effort, velocity, deadline requests
- **8 Risk Assessor tests** — Risk, blocker, dependency, mitigation requests  
- **8 Requirements Breaker tests** — User stories, acceptance criteria, scope requests
- **8 Roadmap Planner tests** — Roadmap, release plan, prioritization requests
- **6 Routing Conflict tests** — Multi-domain requests requiring main skill vs sub-skill decision

## Test Case Categories

### Category 1: Timeline Estimator (8 cases)
These test whether the skill routes to prd-timeline-estimator for timeline/effort/velocity requests.

Expected Routes:
- timeline-01: ✓ Direct timeline request
- timeline-02: ✓ Effort estimation
- timeline-03: ✓ Velocity analysis
- timeline-04: ✓ Deadline feasibility
- timeline-05: ✗ Calendar (should NOT route)
- timeline-06: ✓ Resource allocation
- timeline-07: ✓ Velocity planning
- timeline-08: ✓ Milestone planning

### Category 2: Risk Assessor (8 cases)
These test whether the skill routes to prd-risk-assessor for risk/blocker/dependency requests.

Expected Routes:
- risk-01: ✓ Failure scenarios
- risk-02: ✓ Pre-mortem analysis
- risk-03: ✓ Dependency risk
- risk-04: ✓ Risk mitigation
- risk-05: ✗ Calendar (should NOT route)
- risk-06: ✓ Blocker identification
- risk-07: ✓ Technical risk
- risk-08: ✓ Compliance risk

### Category 3: Requirements Breaker (8 cases)
These test whether the skill routes to prd-requirements-breaker for user story/acceptance criteria requests.

Expected Routes:
- req-01: ✓ User stories + acceptance criteria
- req-02: ✓ Definition of done + test cases
- req-03: ✓ Story point estimation
- req-04: ✓ User journey + edge cases
- req-05: ✓ User story creation
- req-06: ✗ Calendar (should NOT route)
- req-07: ✓ Persona-based criteria
- req-08: ✓ Requirement breakdown

### Category 4: Roadmap Planner (8 cases)
These test whether the skill routes to prd-roadmap-planner for roadmap/release/prioritization requests.

Expected Routes:
- roadmap-01: ✓ Quarterly roadmap
- roadmap-02: ✓ Release strategy (canary/phased)
- roadmap-03: ✓ Initiative prioritization
- roadmap-04: ✓ Go/no-go criteria
- roadmap-05: ✓ Long-term roadmap
- roadmap-06: ✓ Progressive rollout
- roadmap-07: ✗ Calendar (should NOT route)
- roadmap-08: ✓ Roadmap prioritization

### Category 5: Routing Conflicts (6 cases)
These test routing accuracy when multiple sub-skills could apply.

Expected Routes:
- conflict-01: ✓ Main skill (multi-domain: timeline + risk)
- conflict-02: ✓ Main skill (multi-domain: requirements + timeline + roadmap)
- conflict-03: ✓ Main skill (multi-domain: roadmap + risk + timeline)
- conflict-04: ✓ Roadmap planner (primary intent)
- conflict-05: ✓ Timeline estimator (primary intent)
- conflict-06: ✓ Risk assessor (primary intent)

## Validation Criteria

Each test case will be evaluated on:

1. **Correct Routing** — Does the skill route to the expected sub-skill or main skill?
2. **Trigger Accuracy** — Does the request appropriately trigger the skill (not mis-trigger on calendar requests)?
3. **Conflict Resolution** — When multiple sub-skills could apply, does it choose correctly?
4. **False Negatives** — Are legitimate requests incorrectly rejected?
5. **False Positives** — Are off-topic requests incorrectly accepted?

## Success Criteria

- **Pass Rate Target**: ≥ 95% (37/38 cases)
- **Sub-skill routing**: 100% accuracy on direct trigger phrases
- **Conflict resolution**: 100% accuracy on multi-domain requests
- **Negative cases**: 100% rejection of off-topic (calendar scheduling) requests

## Test Execution Plan

1. Evaluate each test case manually to determine routing accuracy
2. Document any misroutes or edge cases
3. Generate per-category pass/fail analysis
4. Identify patterns in routing accuracy
5. Recommend description improvements if needed

---
*Generated: 2026-11-01*
*Repository: https://github.com/lightspeedwp/ls-prd*
