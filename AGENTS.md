# Agents & Skills

This project includes built-in support for Claude agents and skills to assist with Product Requirements Document (PRD) generation and product planning workflows.

## 🤖 Available Agents

### PRD Skill
The main skill for this project, located at `~/.claude/skills/prd/`

**What it does:**
- Generates comprehensive Product Requirements Documents (PRDs)
- Creates feature plans and technical specifications
- Guides requirements gathering and analysis
- Produces timelines and roadmaps
- Assesses risks and dependencies
- Facilitates stakeholder alignment

**How to use:**
```bash
# Enable in Claude Code
/prd

# Or ask Claude directly
"Write a PRD for [feature/product]"
```

## 📚 Capabilities

### PRD & Documentation
- Executive summaries with problem statements and success criteria
- Functional and non-functional requirements
- User personas and user stories
- Acceptance criteria with clear "Done" definitions

### Feature Planning
- Feature breakdown and prioritization
- Impact/effort matrices
- Edge cases and failure mode analysis
- Dependencies and risk assessment

### Timeline & Roadmap
- Release planning with phased rollouts
- Milestone definition and sequencing
- Sprint coordination and capacity planning
- Timeline estimation with realistic buffers
- Dependency and risk timeline projection

### Stakeholder Management
- Requirements gathering frameworks
- Approval workflow documentation
- Change management templates
- Communication readiness materials
- Feedback incorporation processes

## 🔗 Integration with Other Agents

### Related LightSpeed Skills
The PRD skill works well with:

- **GitHub Issue Drafter** — Convert PRD requirements into actionable GitHub issues
- **Task Manager** — Break down PRD user stories into sprint tasks
- **Release Agent** — Plan releases based on PRD roadmaps
- **PR Agent** — Validate implementation against PRD specifications

### Ecosystem Integration
Works within:
- Claude Code skill ecosystem
- GitHub Projects and automation
- Linear/Asana for task management
- Design tools (Figma) for specification alignment
- CI/CD systems for requirement validation

## 📖 Project Type

- **Type**: Claude Code Skill
- **Install path**: `~/.claude/skills/prd/`
- **Format**: Markdown (SKILL.md) + Documentation + Scripts
- **Language**: Bash (scripts) + Markdown (skill)
- **Testing**: Jest (100% coverage target)

## 🚀 Getting Started

1. **Load the skill in Claude Code:**
   ```
   /prd
   ```

2. **Ask for a PRD:**
   ```
   "Write a PRD for [your feature/product]"
   ```

3. **Follow the discovery process:**
   - Claude asks clarifying questions
   - Define scope and constraints
   - Generate complete PRD
   - Iterate based on feedback

## 📋 Typical Workflow

```
1. Discovery Phase
   ↓
2. Analysis Phase (scope, constraints, dependencies)
   ↓
3. Drafting Phase (generate PRD using Strict Schema)
   ↓
4. Review Phase (refine with feedback)
   ↓
5. Action Phase (convert to issues, roadmap, timeline)
```

## Quality Assurance

All PRDs generated meet strict quality standards:

✅ **Concrete, Measurable** — No vague language  
✅ **Clear Acceptance Criteria** — Testable "Done" definitions  
✅ **Risk Analysis** — Technical, timeline, and dependency risks identified  
✅ **Stakeholder Ready** — Executive-level documentation  

## Testing

The skill includes comprehensive tests:

```bash
cd ~/.claude/skills/prd/tests
npm install
npm test                 # Run all tests with coverage
npm run test:watch      # Watch mode for development
npm run test:verbose    # Detailed output
```

**Coverage Target:** 100%  
**Test Framework:** Jest  
**Test Files:** Multiple test suites covering structure, functionality, and schema

---

**Skill Version:** 2.0.1  
**Maintained by:** LightSpeed  
**License:** MIT  
**Repository:** https://github.com/lightspeedwp/prd
