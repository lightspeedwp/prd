# PRD Skill - Product Requirements Document Generator

A comprehensive Claude Code skill for creating production-grade Product Requirements Documents (PRDs), feature plans, technical specifications, and product roadmaps.

## Overview

The PRD Skill consolidates years of product planning expertise into a unified tool that guides you through:

- **PRD Creation**: Executive summaries, requirements, acceptance criteria
- **Feature Planning**: Breakdown, prioritization, user story generation  
- **Timeline & Roadmap**: Release planning, milestones, sprint coordination
- **Risk Assessment**: Technical risks, dependencies, blocker identification
- **Stakeholder Alignment**: Requirements gathering, approval workflows

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

## Documentation

- **[SPEC.md](docs/SPEC.md)** - Detailed specification of PRD structure and standards
- **[PLAN.md](docs/PLAN.md)** - Implementation and consolidation plan
- **[QUICKSTART.md](docs/QUICKSTART.md)** - Quick reference guide
- **[AGENT.md](docs/AGENT.md)** - Agent capabilities and integration

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

## Files & Structure

```
~/.claude/skills/prd/
├── SKILL.md                  # Main skill definition
├── README.md                # This file
├── AGENTS.md                # Agent documentation
├── CLAUDE.md                # Claude Code configuration
├── CHANGELOG.md             # Version history
├── LICENSE                  # MIT license
├── jest.config.js           # Jest test configuration
├── docs/
│   ├── SPEC.md             # Detailed PRD specification
│   ├── PLAN.md             # Implementation plan
│   ├── QUICKSTART.md       # Quick reference guide
│   ├── AGENT.md            # Agent capabilities
│   └── README-AGENT.md     # Additional reference
├── scripts/
│   └── prd-generator.sh    # Skill management script
├── tests/
│   ├── test-prd-skill.js   # Comprehensive test suite (100% coverage)
│   ├── package.json        # Jest and test dependencies
│   └── jest.config.js      # Jest configuration
└── sub-skills/             # Directory for future sub-skills
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

## Support

For issues, questions, or contributions:

- Check [CLAUDE.md](CLAUDE.md) for configuration help
- Review [SPEC.md](docs/SPEC.md) for detailed standards
- See [QUICKSTART.md](docs/QUICKSTART.md) for common scenarios
- Read [AGENT.md](docs/AGENT.md) for advanced capabilities
- Run tests: `cd tests && npm test`

## License

MIT - See LICENSE file in parent repository

## Version

v2.0.1 (Consolidated from prd-agent + prd-factory-planner-agent)

---

**Created with:** Claude Haiku 4.5  
**Repository:** https://github.com/lightspeedwp/prd  
**Maintained by:** LightSpeed Community
