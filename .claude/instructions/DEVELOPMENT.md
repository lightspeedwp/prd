# PRD Skill Development Guide

## Quick Start

This is the **PRD Skill** repository — a comprehensive Claude Code skill for product planning, requirements documentation, and roadmap creation.

### Key Directories

- **SKILL.md** — Main skill definition (the skill itself)
- **docs/** — Documentation (specs, quick start, agent guides)
- **sub-skills/** — Specialized sub-skills (timeline, risk, requirements, roadmap)
- **tests/** — Jest test suite (100% coverage target)
- **scripts/** — Executable scripts and utilities
- **prompts/** — Example prompts and workflows

## Common Tasks

### Run Tests
```bash
cd tests
npm install
npm test          # Run all tests with coverage
npm run test:bats # Run BATS shell script tests
npm run test:all  # Run Jest + BATS
```

### Test Coverage
- **Target**: 100% coverage (Jest + BATS)
- **Jest**: Unit tests for skill structure and schema
- **BATS**: Shell script validation
- **Current**: 61/61 tests passing ✅

### Git Workflow (LightSpeed Standard)

1. **Branch naming** — Follow LightSpeed conventions:
   - `feat/` — New features
   - `fix/` — Bug fixes
   - `docs/` — Documentation
   - `chore/` — Maintenance
   - `release/` — Release commits

2. **Commit messages** — Include:
   - Clear description of what and why
   - Reference to issue/ticket if applicable
   - Attribution line: `Co-Authored-By: Claude Haiku 4.5 <noreply@anthropic.com>`

3. **Before pushing**:
   ```bash
   npm test          # Verify all tests pass
   git log origin/main..HEAD  # Review commits
   ```

4. **Lefthook git hooks** — Automatically validates:
   - Branch naming (pre-push)
   - Tests pass (pre-push)
   - Code quality (pre-commit)

## Making Changes

### Adding a New Sub-Skill

1. Create folder: `sub-skills/prd-skill-name/SKILL.md`
2. Define frontmatter with name, description, trigger phrases
3. Add comprehensive instructions and examples
4. Update sub-skills routing in main SKILL.md
5. Create tests for the sub-skill
6. Document in docs/QUICKSTART.md

### Updating Documentation

1. Update relevant .md file in root or docs/
2. Update cross-references in README.md if needed
3. Run: `npm test` to verify all references work
4. Commit with message: `docs: description of changes`

### Improving Tests

- Jest tests: `tests/prd-skill.test.js`
- BATS tests: `tests/scripts.bats`
- Coverage requirement: 100% (no exceptions)
- Run: `npm run test:coverage` to see gaps

## LightSpeed WP Standards

This repository follows:

- **Branching**: feat/, fix/, docs/, chore/, release/ prefixes
- **Labels**: Aligned with [org-wide labels.yml](https://github.com/lightspeedwp/.github/blob/develop/.github/labels.yml)
- **Changelog**: Keep a Changelog 1.1.0 format
- **Testing**: 100% coverage required
- **Documentation**: All features documented

See: https://github.com/lightspeedwp/.github/blob/develop/docs/BRANCHING_STRATEGY.md

## Useful Commands

```bash
# Verify skill structure
./scripts/prd-generator.sh

# Run full test suite
npm test

# Check test coverage
npm run test:coverage

# Watch tests during development
npm run test:watch

# Lint code
npm run lint

# View recent commits
git log --oneline -10

# Preview changes before push
git diff origin/main..HEAD
```

## Resources

- **Main docs**: [README.md](../../README.md)
- **Detailed spec**: [docs/SPEC.md](../../docs/SPEC.md)
- **Quick start**: [docs/QUICKSTART.md](../../docs/QUICKSTART.md)
- **GitHub**: https://github.com/lightspeedwp/prd
