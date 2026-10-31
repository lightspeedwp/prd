# Using Claude Code with PRD Skill

## Project Context

**PRD Skill** — A production-grade skill for creating Product Requirements Documents, managing timelines, assessing risks, breaking down requirements, and planning roadmaps.

**Type**: Claude Code Skill (not a regular project)  
**Repository**: https://github.com/lightspeedwp/prd  
**Org**: LightSpeed WP (https://github.com/lightspeedwp)  

## What to Know

### This is a Skill, Not a Regular Project

- **SKILL.md** is the main artifact — it defines the skill and how it works
- **Sub-skills** are specialized routing destinations (timeline, risk, requirements, roadmap)
- **Tests** validate the skill structure (not traditional app tests)
- **Docs** explain how to use the skill and its features

### Test Coverage is Mandatory

- **100% coverage required** — no exceptions
- Jest tests: `tests/prd-skill.test.js` (38 tests)
- BATS tests: `tests/scripts.bats` (23 tests)
- Run before pushing: `npm test`

### Git Workflow

1. Use LightSpeed branch naming: `feat/`, `fix/`, `docs/`, `chore/`, `release/`
2. Write clear commit messages explaining the why
3. Run tests and verify coverage before pushing
4. Lefthook hooks will validate your branch name and run tests pre-push

### Documentation is Code

Changes to SKILL.md, docs/, or README are code changes. They:
- Must be tested (verification that files exist and are readable)
- Must be reviewed for clarity and completeness
- Must maintain cross-references and consistency

## Quick Commands

```bash
# Verify skill loads
./scripts/prd-generator.sh

# Run all tests (100% coverage)
npm test

# Run tests in watch mode
npm run test:watch

# Check coverage gaps
npm run test:coverage

# View what changed
git diff origin/main..HEAD
```

## Common Tasks

**I want to update SKILL.md**
→ Make the changes, run `npm test`, verify all tests pass, commit

**I want to add a new sub-skill**
→ Create folder structure, add SKILL.md, update main routing, add tests, document

**I want to improve documentation**
→ Edit docs/*.md files, update README cross-references, verify links work, commit

**Tests are failing**
→ Run `npm run test:verbose` to see what's breaking, fix the issue, re-run tests

## Key Files

| File | Purpose |
|------|---------|
| SKILL.md | Main skill definition — THE skill |
| README.md | Overview and getting started |
| CLAUDE.md | Project configuration (this file) |
| AGENTS.md | Agent capabilities and integration |
| docs/SPEC.md | Detailed PRD structure and standards |
| docs/QUICKSTART.md | 5-minute user guide |
| tests/ | Test suite (Jest + BATS, 100% coverage) |
| sub-skills/ | Specialized routing destinations |

## Need Help?

- **Getting started?** → Read [README.md](../README.md)
- **Understanding the skill?** → Check [SKILL.md](../SKILL.md)
- **How to use it?** → See [docs/QUICKSTART.md](../docs/QUICKSTART.md)
- **Development setup?** → Review [instructions/DEVELOPMENT.md](.instructions/DEVELOPMENT.md)
- **Detailed standards?** → Read [docs/SPEC.md](../docs/SPEC.md)
