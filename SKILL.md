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
- Planning timelines, estimating effort, or assessing risk
- Breaking down features into user stories
- Creating roadmaps or release plans
- User asks to "write a PRD", "document requirements", "plan a feature", or any related product work

---

## How to Use This Skill

1. **Describe Your Idea or Challenge**: Share what you're building, what's unclear, or what decision you need to make
2. **Answer Discovery Questions**: This skill will ask clarifying questions to fill knowledge gaps
3. **Choose Your Path**: The skill routes you to the best sub-skill based on your needs:
   - Need a full PRD? → Main PRD skill
   - Need timeline/effort estimates? → Timeline Estimator
   - Need risk analysis? → Risk Assessor
   - Need user stories? → Requirements Breaker
   - Need a roadmap? → Roadmap Planner
4. **Review and Iterate**: The skill provides structured output — ask for revisions, additional detail, or different approaches

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

- **The Core Problem**: Why are we building this now? What pain point does it solve?
- **Success Metrics**: How do we know it worked? What does success look like (adoption, revenue, performance)?
- **Constraints**: Budget, timeline, tech stack, regulatory requirements, or platform limitations?
- **Users & Personas**: Who is this for? Which user segments matter most?
- **Competitive Context**: Why now? What's changing in the market or user behavior?
- **Technical Unknowns**: Any new technologies, integrations, or complex dependencies?
- **Phasing Strategy**: Is this MVP → v1.1 → v2.0, or something else?

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
- **Vague Success Criteria**: "Good user experience" is not a success criterion. Use measurable metrics (adoption %, performance thresholds, error rates).
- **Ignore Non-Goals**: Define what you're NOT building to protect scope and timeline.

---

## Testing & Validation Strategy

A strong PRD includes a plan for validating that the feature works as intended:

**For Product/Feature Work**:
- Define acceptance criteria tests (manual QA checklist)
- Specify metrics to track post-launch (adoption, engagement, retention)
- Plan A/B testing if applicable (phased rollout, percentage-based)

**For AI/ML Features**:
- Benchmark against human performance or baseline
- Define evaluation metrics (accuracy, precision, recall, latency)
- Plan for adversarial testing (edge cases, bad inputs)
- Set up monitoring for drift or degradation

**Include in Your PRD**:
- How success will be measured
- Who owns validation (QA, data team, PM)
- Timeline for validation gates (before full launch)
- Rollback criteria (when to pause or cancel launch)

---

## Example: Intelligent Search System

### 1. Executive Summary

**Problem**: Developers spend 20-30 minutes daily searching through documentation to find code examples and configuration patterns. Manual keyword searches often surface irrelevant results.

**Solution**: An intelligent search system powered by semantic understanding that provides direct answers with source citations and code examples.

**Success Criteria**:
- Reduce average search time from 25 minutes to 10 minutes
- Citation accuracy >= 95% (correct source for recommended code)
- User adoption: 60% of developers actively using within 3 months
- Feature adoption: 40% of searches include follow-up questions

### 2. User Experience & Functionality

**User Personas**:
- Backend engineers building APIs
- Frontend developers implementing UI patterns
- DevOps engineers configuring infrastructure

**User Stories**:
- As a developer, I want to ask natural language questions instead of guessing keywords, so I find answers faster
- As a developer, I want multi-turn clarification so I can refine my search if the first answer doesn't match my use case
- As a developer, I want direct code examples with a "Copy" button, so I can quickly apply solutions

**Acceptance Criteria**:
- Search supports natural language queries (multi-word sentences)
- System provides up to 3 relevant results per query
- Each result includes source file path and line numbers
- Code blocks have copy-to-clipboard functionality
- Follow-up questions are supported (e.g., "Make it work with TypeScript")

**Non-Goals**:
- Real-time updates to documentation (searches against current snapshot)
- AI-generated code (only returns existing documentation)
- Custom syntax highlighting for languages beyond top 10 (generic highlighting)

### 3. Technical Specifications

**Architecture**: Vector embeddings of documentation → semantic similarity search → ranking by relevance

**Integration Points**:
- Code repository API (GitHub, GitLab)
- Vector database for embeddings
- Authentication via OAuth for repository access

**Evaluation Strategy**:
- Benchmark: Test with 50 real developer questions from support channel
- Success metric: 90% of results match developer's expected answer or better
- Weekly ranking evaluation using developer feedback (thumbs up/down)

### 4. Phased Rollout

**Phase 1 (MVP)**: Basic semantic search over documentation
- Timeline: 6 weeks
- Team: 2 engineers, 1 product lead

**Phase 2 (v1.1)**: Multi-turn conversation and ranking improvements
- Timeline: 4 weeks
- Dependent on: Phase 1 user feedback

**Phase 3 (v2.0)**: Advanced features (personalized rankings, team-specific documentation)
- Timeline: 8 weeks
- Dependent on: Phase 2 adoption metrics

### 5. Key Risks

- **Latency**: Vector search could be slow for large code bases (Mitigation: pre-compute embeddings, use indexes)
- **Hallucination**: AI might suggest code that doesn't exist in docs (Mitigation: strict retrieval-based approach, validate sources)
- **Adoption**: Developers might default to old search habits (Mitigation: prominent UI placement, in-app education)
