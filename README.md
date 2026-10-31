# PRD Skill - Product Requirements Document Generator

A comprehensive Claude Code skill for creating production-grade Product Requirements Documents (PRDs), feature plans, technical specifications, and product roadmaps.

This skill consolidates years of product planning expertise into a unified tool that intelligently routes to specialized sub-skills based on your needs.

## What This Skill Does

**Main Capabilities:**
- ✅ Write comprehensive Product Requirements Documents (PRDs)
- ✅ Estimate timelines and effort with three-scenario planning
- ✅ Assess and mitigate project risks
- ✅ Break requirements into user stories with acceptance criteria
- ✅ Create product roadmaps and release plans
- ✅ Align stakeholders and define success criteria

## Quick Start

### Load the Skill

In Claude Code, use:
```
/prd
```

Or reference it in your prompt:
```
Help me write a PRD for [feature/product name]
```

### Basic Workflow

1. **Discovery Phase**: Claude asks clarifying questions about your product
2. **Analysis Phase**: Identify scope, constraints, and dependencies  
3. **Drafting Phase**: Generate a complete PRD using the Strict Schema
4. **Review Phase**: Refine with feedback and stakeholder input

## Key Features

### ✅ Comprehensive PRD Structure

Following industry best practices:

- **Executive Summary**: Problem, solution, success criteria
- **User Experience**: Personas, user stories, acceptance criteria
- **Technical Specs**: Architecture, integrations, security
- **Risks & Roadmap**: Phased rollout, technical risks, timeline
- **Non-Goals**: Clear scope boundaries

### ✅ Quality Standards

All generated content meets strict criteria:

- **Concrete, Measurable Requirements**: No vague language like "fast" or "intuitive"
- **Detailed Acceptance Criteria**: Clear definition of "done" for each requirement
- **Risk Analysis**: Technical, timeline, and dependency risks identified
- **Stakeholder Communication**: Executive-ready documentation

### ✅ AI-Ready Content

When building AI systems:

- Tool requirements and API specifications
- Evaluation strategies and success metrics
- Privacy and compliance considerations
- Integration patterns and fallback strategies

## Get Started

### First Time Here?
1. Start with [**Quick Start**](docs/QUICKSTART.md) — 5 minutes to your first PRD
2. Check out [**SKILL.md**](SKILL.md) — The complete skill definition with discovery workflow
3. Explore [**Sub-Skill Routing**](#sub-skills-reference) below to understand automated routing

### Need Help?
- **[Detailed Spec](docs/SPEC.md)** — PRD structure, quality standards, and schema
- **[Implementation Plan](docs/PLAN.md)** — How this skill was built
- **[Agent Guide](docs/AGENT.md)** — For advanced agent configuration
- **[Configuration](CLAUDE.md)** — Setup and environment options

## Examples

### Example 1: Basic Feature PRD

```
User: Write a PRD for a notification system in our SaaS app

Claude: 
1. Asks about notification types, channels, and success metrics
2. Identifies constraints and dependencies
3. Generates complete PRD with user stories and acceptance criteria
4. Includes technical specs and risk analysis
```

### Example 2: AI Feature Planning

```
User: Create a PRD for an AI-powered search feature

Claude:
1. Explores current search limitations and goals
2. Defines evaluation metrics for relevance and accuracy
3. Documents AI model requirements and integration points
4. Plans phased rollout with fallback strategies
```

## Sub-Skills Reference

This skill automatically routes to specialized sub-skills based on your request:

| Sub-Skill | When to Use | Key Features |
|-----------|-------------|--------------|
| **Timeline Estimator** | "How long will this take?", "Estimate effort", "Timeline" | 3-scenario planning, critical path, contingency buffers |
| **Risk Assessor** | "What could go wrong?", "Risk assessment", "Pre-mortem" | Likelihood × Impact scoring, mitigation strategies |
| **Requirements Breaker** | "User stories", "Acceptance criteria", "Break it down" | Story cards, definition of done, test cases |
| **Roadmap Planner** | "Create a roadmap", "Release plan", "Quarterly planning" | Phased delivery, milestones, go/no-go gates |

👉 **Don't explicitly choose a sub-skill** — just describe what you need, and the skill routes automatically.

## File Structure

```
~/.claude/skills/prd/
├── 📄 Root Documentation
│   ├── SKILL.md              # Main skill definition & workflow
│   ├── README.md             # This file
│   ├── AGENTS.md             # Agent capabilities
│   ├── CLAUDE.md             # Configuration & setup
│   └── CHANGELOG.md          # Release notes
├── 📚 docs/
│   ├── README.md             # Documentation index
│   ├── SPEC.md               # PRD structure & standards
│   ├── QUICKSTART.md         # 5-minute guide
│   ├── PLAN.md               # Implementation details
│   ├── AGENT.md              # Agent configuration
│   └── README-AGENT.md       # Agent reference
├── 🧪 tests/
│   ├── prd-skill.test.js     # 100% test coverage
│   ├── package.json          # Jest configuration
│   └── jest.config.js        # Test setup
├── 🛠️ scripts/
│   ├── prd-generator.sh      # Skill verification
│   └── prompts/              # Example prompts
└── 🎯 sub-skills/            # Specialized sub-skills
    ├── prd-timeline-estimator/
    ├── prd-risk-assessor/
    ├── prd-requirements-breaker/
    └── prd-roadmap-planner/
```

## When to Use

Use this skill when:

- ✅ Starting a new feature or product development cycle
- ✅ Translating business ideas into technical specifications
- ✅ Defining requirements for AI-powered features
- ✅ Creating stakeholder alignment documents
- ✅ Planning feature roadmaps and timelines
- ✅ Breaking down complex features into user stories
- ✅ Identifying risks and dependencies early

## Best Practices

1. **Be Specific**: Provide as much context as possible about your product
2. **Define Success**: Articulate measurable success criteria upfront
3. **Ask Questions**: Claude will ask clarifying questions—answer thoroughly
4. **Iterate**: PRDs are living documents—refine as you learn more
5. **Share Feedback**: Use this skill collaboratively with your team

## Testing & Verification

### Run Tests

```bash
cd ~/.claude/skills/prd/tests
npm install
npm test                    # All tests with coverage
npm run test:watch        # Watch mode (auto-rerun)
npm run test:verbose      # Detailed output
npm run test:coverage     # Coverage report
```

### Test Coverage

The skill includes comprehensive tests covering:

✅ **Skill Structure** - File existence, format, and organization  
✅ **Documentation** - Content quality and cross-references  
✅ **PRD Schema** - Strict PRD schema validation  
✅ **Scripts** - Executable functionality and portability  
✅ **Project Agnostic** - No project-specific dependencies  
✅ **Integration Ready** - Claude Code compatibility  

**Target:** 100% coverage

### Verify Installation

```bash
~/.claude/skills/prd/scripts/prd-generator.sh
```

Expected output:
```
✓ SKILL.md found
✓ Documentation directory found
Skill ready to use!
```

## Integration

The PRD Skill integrates with:

- **Claude Code** - Interactive skill loading and invocation
- **GitHub** - Storing, versioning, and collaborating on PRDs
- **GitHub Issues** - Converting requirements into actionable issues
- **GitHub Projects** - Tracking feature development by PRD
- **Linear/Asana** - Breaking down requirements into tasks
- **Design Tools** (Figma) - Linking specs to visual mockups
- **CI/CD Pipelines** - Validating implementation against requirements
- **Slack/Teams** - Sharing PRD updates and stakeholder communication

## Project Agnostic

This skill is designed to work in **any context**:

- ✅ No project-specific code or references
- ✅ Portable across different projects and teams
- ✅ Works standalone or within larger ecosystems
- ✅ Reusable in multiple organizations
- ✅ Independent test suite with 100% coverage

## Troubleshooting & Support

**Setup Issues?**
→ See [CLAUDE.md](CLAUDE.md) for configuration and environment setup

**Want to Customize?**
→ Review [SPEC.md](docs/SPEC.md) for PRD structure and quality standards

**Need Examples?**
→ Check [QUICKSTART.md](docs/QUICKSTART.md) for real-world scenarios

**Advanced Usage?**
→ Read [AGENT.md](docs/AGENT.md) for agent configuration and integration

**Verify Installation:**
```bash
cd ~/.claude/skills/prd
./scripts/prd-generator.sh
npm test  # Run full test suite (100% coverage)
```

## Contributing

This skill follows [LightSpeed WP standards](https://github.com/lightspeedwp/.github):
- **Branching**: feat/, fix/, docs/, chore/, release/ prefixes
- **Labeling**: Aligned with org-wide labels.yml
- **Testing**: 100% test coverage required
- **Documentation**: All features documented in docs/

## License

MIT License — See LICENSE file

## Version

**v2.0.1** - Production-ready  
Consolidated from: prd-agent + prd-factory-planner-agent  
Maintained by: LightSpeed Community  
Repository: [lightspeedwp/prd](https://github.com/lightspeedwp/prd)

---

**Created with:** Claude Haiku 4.5  
**Repository:** https://github.com/lightspeedwp/prd  
**Maintained by:** LightSpeed Community
