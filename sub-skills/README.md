# PRD Skill Sub-Skills

Specialized sub-skills that extend the main PRD skill with focused capabilities for different aspects of product planning.

## Sub-Skills Directory

### 1. **PRD Writing** (`prd-writing/`)
Create comprehensive Product Requirement Documents following Strict PRD Schema.

**When to use:**
- Writing a new PRD from scratch
- Creating a product specification document
- Drafting requirements for stakeholders
- Documenting a feature for implementation

**Outputs:**
- Complete PRD with all required sections
- Executive summary, UX, technical specs, risks, non-goals
- Detailed acceptance criteria
- Stakeholder-ready documentation

**Key phases:**
1. Discovery (clarifying questions)
2. Analysis (scope definition)
3. Drafting (PRD generation)
4. Review (refinement)

---

### 2. **Feature Planning** (`feature-planning/`)
Break down features into user stories with acceptance criteria and prioritization.

**When to use:**
- Converting a feature into user stories
- Prioritizing a backlog
- Planning a sprint
- Creating an epic breakdown
- Estimating relative effort

**Outputs:**
- User stories with acceptance criteria
- Prioritization matrix (quick wins, strategic, nice-to-haves)
- Dependency mapping
- Effort estimates (story points, T-shirt sizing)

**Key activities:**
1. Break down features into stories
2. Define acceptance criteria
3. Estimate effort (1, 2, 3, 5, 8, 13 points)
4. Prioritize using impact/effort
5. Map dependencies

---

### 3. **Timeline Estimation** (`timeline-estimation/`)
Estimate project timelines with realistic phasing and contingency buffers.

**When to use:**
- Estimating delivery date for a PRD
- Planning delivery milestones
- Forecasting project completion
- Allocating team resources
- Managing tight deadlines

**Outputs:**
- Realistic timeline with phases
- Critical path analysis
- Milestone schedule
- Contingency buffers (20-30%)
- Risk-adjusted estimates

**Key approach:**
1. Break down into phases
2. Estimate each component
3. Identify critical path
4. Add contingency buffers
5. Map to calendar dates

---

### 4. **Roadmap Creation** (`roadmap-creation/`)
Create product roadmaps with phased implementation and strategic alignment.

**When to use:**
- Creating a product roadmap (6-12 months)
- Planning quarterly deliverables
- Sequencing features for multi-phase releases
- Communicating product strategy
- Managing cross-product dependencies

**Outputs:**
- Phase-based roadmap
- Release schedule (quarterly/monthly)
- Dependency visualization
- Risk and mitigation notes
- Outcome-focused planning

**Key formats:**
- Timeline-based (sequential phases)
- Feature-based (features by theme)
- Strategic (outcomes and initiatives)
- Risk-based (dependencies and critical path)

---

### 5. **Risk Assessment** (`risk-assessment/`)
Identify, assess, and mitigate technical, timeline, and dependency risks.

**When to use:**
- Planning a major initiative
- Dealing with tight deadlines
- Working with new technologies
- Managing external dependencies
- Pre-mortem analysis

**Outputs:**
- Risk register with scoring
- Mitigation strategies
- Contingency plans
- Risk tracking framework
- Contingency budgets

**Key categories:**
- Technical risks
- Timeline risks
- Resource risks
- Dependency risks
- Organizational risks

---

## How Sub-Skills Work Together

```
START: Feature Planning
  ↓
  Generate user stories with estimates
  ↓
PARALLEL:
├─→ Risk Assessment: Identify risks & mitigations
├─→ Timeline Estimation: Create realistic schedule
└─→ Feature Planning: Refine stories and dependencies
  ↓
Roadmap Creation: Sequence features into phases
  ↓
PRD Writing: Document complete requirements
  ↓
END: Production-ready PRD with roadmap and risk mitigation
```

## Typical Workflow

### Scenario 1: New Feature PRD

1. **PRD Writing** – Create initial PRD with stakeholder input
2. **Feature Planning** – Break PRD into user stories
3. **Risk Assessment** – Identify technical and timeline risks
4. **Timeline Estimation** – Create realistic delivery estimate
5. **Roadmap Creation** – Place in product roadmap (if part of larger initiative)

### Scenario 2: Major Product Initiative

1. **Roadmap Creation** – Plan phases and timeline
2. **Feature Planning** – Define features for each phase
3. **Risk Assessment** – Identify risks per phase
4. **Timeline Estimation** – Estimate each phase duration
5. **PRD Writing** – Document each phase in detail

### Scenario 3: Quarterly Planning

1. **Roadmap Creation** – Define quarterly outcomes
2. **Feature Planning** – List features for quarter
3. **Feature Planning** – Prioritize and estimate
4. **Timeline Estimation** – Build sprint/milestone schedule
5. **Risk Assessment** – Identify quarterly risks
6. **PRD Writing** – Document top priorities

## Loading Sub-Skills

In Claude Code, sub-skills can be invoked:

```
# Explicitly load a sub-skill
/prd-writing
/feature-planning
/timeline-estimation
/roadmap-creation
/risk-assessment

# Or reference naturally
"Create a roadmap for [product]"
"Break down this feature into user stories"
"Estimate the timeline for [project]"
"Identify risks in [initiative]"
"Write a PRD for [feature]"
```

## Integration with Main Skill

The main PRD skill (`/SKILL.md`) orchestrates the workflow:

1. **Discovery Phase** → PRD Writing asks questions
2. **Analysis Phase** → Risk Assessment identifies issues
3. **Drafting Phase** → All sub-skills contribute
4. **Review Phase** → Refinement across all areas

Sub-skills can be used:
- **Independently**: Solve one specific problem
- **Sequentially**: Chain together for complete workflow
- **In parallel**: Multiple people work different aspects
- **Iteratively**: Refine across multiple passes

## Best Practices

1. **Start with PRD Writing** – Get requirements clear first
2. **Feature Planning early** – Break down before committing timeline
3. **Risk Assessment before timeline** – Know risks before promising dates
4. **Timeline with contingency** – Add 20-30% for unknowns
5. **Roadmap for communication** – Use to align stakeholders
6. **Iterate regularly** – Update as you learn more

## File Organization

```
prd/
├── SKILL.md                    # Main skill (orchestration)
├── sub-skills/
│   ├── prd-writing/
│   │   └── SKILL.md
│   ├── feature-planning/
│   │   └── SKILL.md
│   ├── timeline-estimation/
│   │   └── SKILL.md
│   ├── roadmap-creation/
│   │   └── SKILL.md
│   ├── risk-assessment/
│   │   └── SKILL.md
│   └── README.md              # This file
├── docs/
│   ├── SPEC.md                # Detailed specifications
│   ├── PLAN.md                # Implementation planning
│   ├── QUICKSTART.md          # Quick reference
│   └── ...
├── tests/                     # Test suite
└── scripts/                   # Utility scripts
```

## Testing Sub-Skills

Run the main test suite to verify all sub-skills:

```bash
cd ~/.claude/skills/prd/tests
npm install
npm test
```

The test suite includes:
- ✅ Sub-skill file structure verification
- ✅ Frontmatter validation (name, description)
- ✅ Content completeness checks
- ✅ Cross-references validation
- ✅ Project agnostic verification

## Documentation References

- **Main Skill**: `../SKILL.md` – Complete skill reference
- **Specification**: `../docs/SPEC.md` – Detailed PRD spec
- **Planning Guide**: `../docs/PLAN.md` – Implementation planning
- **Quick Reference**: `../docs/QUICKSTART.md` – Examples and templates

---

**Total Sub-Skills**: 5  
**Coverage**: Discovery, Analysis, Drafting, Review phases  
**Documentation**: 5 SKILL.md files (1000+ lines)  
**Status**: Production-ready ✅
