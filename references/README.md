# References

Reference documentation and external links for the PRD skill.

## LightSpeed Standards

### Branch & Hooks Standards
- [HOOKS_STANDARDS.md](https://github.com/lightspeedwp/.github/blob/develop/docs/HOOKS_STANDARDS.md) - Git hooks standards and best practices
- [HUSKY_PRECOMMITS.md](https://github.com/lightspeedwp/.github/blob/develop/docs/HUSKY_PRECOMMITS.md) - Pre-commit hook examples (legacy Husky reference)

### Hooks Configuration
- [hooks/ directory](https://github.com/lightspeedwp/.github/tree/develop/hooks) - LightSpeed hook implementations and patterns

## Testing Standards

### Jest Testing
- [Jest Configuration Guide](https://jestjs.io/docs/getting-started)
- [Jest Coverage Configuration](https://jestjs.io/docs/configuration#collectcoveragefrom-array)
- Coverage threshold: 100% across all metrics

### BATS Testing
- [BATS Documentation](https://github.com/bats-core/bats-core)
- [BATS Best Practices](https://github.com/bats-core/bats-core#usage)
- Shell script integration testing

## Git Hooks & CI/CD

### Lefthook
- [Lefthook Official Documentation](https://lefthook.dev/)
- [Lefthook Installation Guide](https://lefthook.dev/install/)
- [Lefthook Configuration](https://lefthook.dev/docs/configuration)

### GitHub Actions
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [LightSpeed CI/CD Workflows](https://github.com/lightspeedwp/.github/tree/develop/.github/workflows)

## Product Documentation

### PRD Specifications
- [Strict PRD Schema](../docs/SPEC.md) - Detailed PRD structure and requirements
- [PRD Quality Standards](../SKILL.md#prd-quality-standards) - Concrete, measurable criteria

### User Stories & Acceptance Criteria
- [Story Writing Guide](../sub-skills/prd-requirements-breaker/SKILL.md) - How to write effective user stories
- [Acceptance Criteria Examples](../sub-skills/prd-requirements-breaker/SKILL.md#acceptance-criteria-examples)

### Timeline & Estimation
- [Estimation Guide](../sub-skills/prd-timeline-estimator/SKILL.md) - Realistic timeline estimation
- [Three-Scenario Planning](../sub-skills/prd-timeline-estimator/SKILL.md#step-2-estimate-using-three-scenarios)

### Risk Management
- [Risk Assessment](../sub-skills/prd-risk-assessor/SKILL.md) - Identifying and mitigating risks
- [Pre-Mortem Analysis](../sub-skills/prd-risk-assessor/SKILL.md#pre-mortem-template)

### Roadmapping
- [Roadmap Planning](../sub-skills/prd-roadmap-planner/SKILL.md) - Creating product roadmaps
- [Release Strategy](../sub-skills/prd-roadmap-planner/SKILL.md#release-strategy)

## External Resources

### Project Management
- [Agile Methodology](https://www.agilealliance.org/)
- [Scrum Guide](https://scrumguides.org/)
- [Lean Principles](https://www.lean.org/)

### Writing & Communication
- [Technical Writing](https://developers.google.com/tech-writing)
- [Clear Communication](https://www.sitepoint.com/technical-documentation/)

## How to Use This Folder

This folder contains:
1. **Links to external standards** - Best practices and guidelines
2. **LightSpeed-specific patterns** - Our conventions and tools
3. **Tool documentation** - References for Jest, BATS, Lefthook
4. **Related skill documentation** - Links to other sub-skills

When in doubt, check these references for:
- How should this be done?
- What's the standard pattern?
- Where's the documentation?

## Contributing

To add a reference:
1. Create a file in this folder (or link in this README)
2. Include a brief description
3. Categorize it appropriately
4. Update the index above
5. Commit and push

## Related Folders

- **docs/** - Internal documentation and specifications
- **prompts/** - Example prompts and workflows
- **scripts/** - Executable scripts and tools
- **tests/** - Test suite and validation
