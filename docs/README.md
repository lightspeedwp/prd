# Documentation

Comprehensive documentation for the PRD skill and its sub-skills.

## Contents

### Core Documentation
- **SPEC.md** - PRD skill specification and requirements
- **PLAN.md** - Implementation plan and development roadmap
- **QUICKSTART.md** - Quick reference guide for getting started
- **AGENT.md** - Agent capabilities and configuration
- **README-AGENT.md** - Agent-specific documentation

## Using This Skill

### Main PRD Skill
Use the main `prd` skill for:
- Writing comprehensive Product Requirements Documents
- Orchestrating specialized PRD sub-skills
- Full feature specification and planning

### Sub-Skills
The skill automatically routes to specialized sub-skills:

#### 📅 Timeline Estimator
For timeline and effort estimation, critical path analysis, and resource planning.

**When to use**: "How long will this take?", "Estimate effort", "Timeline estimation"

#### ⚠️ Risk Assessor
For identifying risks, assessing likelihood and impact, and planning mitigation.

**When to use**: "What could go wrong?", "Risk assessment", "Dependencies"

#### 📋 Requirements Breaker
For breaking requirements into user stories with acceptance criteria.

**When to use**: "User stories", "Acceptance criteria", "Story points"

#### 🗺️ Roadmap Planner
For creating product roadmaps, release plans, and phased delivery.

**When to use**: "Create a roadmap", "Release plan", "Quarterly planning"

## File Structure

```
docs/
├── README.md                 # This file
├── SPEC.md                   # Specification details
├── PLAN.md                   # Implementation plan
├── QUICKSTART.md             # Quick start guide
├── AGENT.md                  # Agent capabilities
└── README-AGENT.md           # Agent documentation
```

## Related Resources

- **prompts/** - Example prompts and workflows for using the skill
- **scripts/** - Executable scripts and tools
- **tests/** - Test suite and validation
- **sub-skills/** - Specialized sub-skills documentation

## For Developers

See **PLAN.md** for implementation details and **SPEC.md** for technical specifications.

## For Users

Start with **QUICKSTART.md** for a quick introduction, then explore sub-skills as needed.
