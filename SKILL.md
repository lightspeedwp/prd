---
name: prd
description: |
  Create and plan product requirements, features, timelines, and releases with the PRD skill orchestrator. Use this skill whenever the user needs to write a PRD, plan a feature, estimate effort, assess risks, break down requirements, create a roadmap, or make strategic product decisions — **even if they don't explicitly ask for a "PRD" or "roadmap."** This skill automatically routes to specialized sub-skills:
  
  - **prd-timeline-estimator**: When user mentions timeline, effort, estimate, how long, deadline, velocity, capacity, delivery schedule, or shipping date
  - **prd-risk-assessor**: When user mentions risk, blocker, dependency, what could go wrong, mitigation, contingency, pre-mortem, or failure scenarios
  - **prd-requirements-breaker**: When user mentions user stories, acceptance criteria, story points, scope, breaking it down, definition of done, or test cases
  - **prd-roadmap-planner**: When user mentions roadmap, release plan, quarterly plan, phases, prioritization, phased rollout, go/no-go gates, or release strategy
  
  **Always use this skill for**: Product planning, feature definition, requirements documentation, timeline estimation, risk assessment, user story creation, roadmap planning, release strategy, project scoping, phased delivery, business case development, strategic product decisions, stakeholder alignment, initiative planning, transforming vague ideas into concrete specs, or any product management task involving planning, defining, scoping, justifying, or delivering a product. Use it even when the user doesn't explicitly mention "PRD," "roadmap," or "stories" — any work related to defining, scoping, planning, or justifying a product should trigger this skill.
license: MIT
---

# Product Requirements Document (PRD)

## Overview

Design comprehensive, production-grade Product Requirements Documents (PRDs) that bridge the gap between business vision and technical execution. This skill works for modern software systems, ensuring that requirements are clearly defined.

## When to Use

Use this skill when:

- Starting a new product or feature development cycle
- Translating a vague idea into a concrete technical specification
- Defining requirements for AI-powered features
- Stakeholders need a unified "source of truth" for project scope
- User asks to "write a PRD", "document requirements", or "plan a feature"

---

## Sub-Skill Routing Guide

This skill automatically routes to specialized sub-skills based on what you need:

### 🎯 Need to Write a Full PRD?
**→ Use this main skill (PRD)**
- Comprehensive product requirements document
- Executive summary, user stories, technical specs
- Includes discovery interview and quality validation
- Result: Complete, production-ready PRD

### ⏱️ Need to Estimate Timeline or Effort?
**→ Use `prd-timeline-estimator` sub-skill**
- Estimate delivery dates and effort sizing
- Three-scenario planning (optimistic/expected/pessimistic)
- Critical path analysis and resource planning
- Contingency buffer calculation
- Milestone planning

**Trigger phrases**: "how long will this take?", "estimate effort", "timeline", "can we ship by...", "critical path", "velocity", "capacity planning"

### ⚠️ Need Risk Assessment?
**→ Use `prd-risk-assessor` sub-skill**
- Identify potential blockers and failures
- Likelihood × Impact scoring
- Mitigation and contingency strategies
- Pre-mortem analysis
- Dependency mapping

**Trigger phrases**: "what could go wrong?", "risk", "dependencies", "blockers", "what should we watch for?", "pre-mortem", "failure scenarios"

### 📋 Need to Break Requirements into Stories?
**→ Use `prd-requirements-breaker` sub-skill**
- Convert features into user stories
- Write acceptance criteria and test cases
- Estimate story size and scope
- Create definition of done
- Map story dependencies

**Trigger phrases**: "user stories", "acceptance criteria", "break it down", "user story cards", "story points", "test cases", "done criteria", "scope the story"

### 🗺️ Need a Roadmap or Release Plan?
**→ Use `prd-roadmap-planner` sub-skill**
- Create quarterly/yearly roadmaps
- Plan feature phases and milestones
- Define release strategy (canary, phased, big bang)
- Prioritize across initiatives
- Resource allocation planning

**Trigger phrases**: "roadmap", "release plan", "quarterly plan", "milestones", "phases", "prioritize", "go/no-go", "release strategy", "phased rollout"

---

## Operational Workflow

### Phase 1: Discovery (The Interview)

Before writing a single line of the PRD, you **MUST** interrogate the user to fill knowledge gaps. Do not assume context.

**Ask about:**

- **The Core Problem**: Why are we building this now?
- **Success Metrics**: How do we know it worked?
- **Constraints**: Budget, tech stack, or deadline?

### Phase 2: Analysis & Scoping

Synthesize the user's input. Identify dependencies and hidden complexities.

- Map out the **User Flow**.
- Define **Non-Goals** to protect the timeline.

### Phase 3: Technical Drafting

Generate the document using the **Strict PRD Schema** below.

---

## PRD Quality Standards

### Requirements Quality

Use concrete, measurable criteria. Avoid "fast", "easy", or "intuitive".

```diff
# Vague (BAD)
- The search should be fast and return relevant results.
- The UI must look modern and be easy to use.

# Concrete (GOOD)
+ The search must return results within 200ms for a 10k record dataset.
+ The search algorithm must achieve >= 85% Precision@10 in benchmark evals.
+ The UI must follow the 'Vercel/Next.js' design system and achieve 100% Lighthouse Accessibility score.
```

---

## Strict PRD Schema

You **MUST** follow this exact structure for the output:

### 1. Executive Summary

- **Problem Statement**: 1-2 sentences on the pain point.
- **Proposed Solution**: 1-2 sentences on the fix.
- **Success Criteria**: 3-5 measurable KPIs.

### 2. User Experience & Functionality

- **User Personas**: Who is this for?
- **User Stories**: `As a [user], I want to [action] so that [benefit].`
- **Acceptance Criteria**: Bulleted list of "Done" definitions for each story.
- **Non-Goals**: What are we NOT building?

### 3. AI System Requirements (If Applicable)

- **Tool Requirements**: What tools and APIs are needed?
- **Evaluation Strategy**: How to measure output quality and accuracy.

### 4. Technical Specifications

- **Architecture Overview**: Data flow and component interaction.
- **Integration Points**: APIs, DBs, and Auth.
- **Security & Privacy**: Data handling and compliance.

### 5. Risks & Roadmap

- **Phased Rollout**: MVP -> v1.1 -> v2.0.
- **Technical Risks**: Latency, cost, or dependency failures.

---

## Implementation Guidelines

### DO (Always)

- **Define Testing**: For AI systems, specify how to test and validate output quality.
- **Iterate**: Present a draft and ask for feedback on specific sections.

### DON'T (Avoid)

- **Skip Discovery**: Never write a PRD without asking at least 2 clarifying questions first.
- **Hallucinate Constraints**: If the user didn't specify a tech stack, ask or label it as `TBD`.

---

## Example: Intelligent Search System

### 1. Executive Summary

**Problem**: Users struggle to find specific documentation snippets in massive repositories.
**Solution**: An intelligent search system that provides direct answers with source citations.
**Success**:

- Reduce search time by 50%.
- Citation accuracy >= 95%.

### 2. User Stories

- **Story**: As a developer, I want to ask natural language questions so I don't have to guess keywords.
- **AC**:
  - Supports multi-turn clarification.
  - Returns code blocks with "Copy" button.

### 3. AI System Architecture

- **Tools Required**: `codesearch`, `grep`, `webfetch`.

### 4. Evaluation

- **Benchmark**: Test with 50 common developer questions.
- **Pass Rate**: 90% must match expected citations.

_This page brought to you by the 🦄 Magic Automation Unicorns of LightSpeedWP._
[Automation Docs](https://github.com/lightspeedwp/.github/tree/main/instructions)
