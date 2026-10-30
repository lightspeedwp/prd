# Claude Code Configuration

This document provides configuration and best practices for working with the PRD skill in Claude Code.

## 🎯 Project Overview

**PRD Skill** is a comprehensive Product Requirements Document generator for creating production-grade specifications, feature plans, timelines, and roadmaps.

- **Repository**: LightSpeed marketplace skill
- **Install path**: `~/.claude/skills/prd/`
- **Type**: Claude Code Skill
- **Format**: Markdown (SKILL.md) + Documentation + Scripts + Tests
- **Language**: Bash (scripts) + JavaScript (tests)
- **Testing**: Jest (100% coverage target)
- **Version**: 2.0.1

## 🚀 Getting Started

### 1. First Time Setup

The skill is self-contained and requires no additional setup. It works out of the box:

```bash
# Verify installation
~/.claude/skills/prd/scripts/prd-generator.sh

# Run tests
cd ~/.claude/skills/prd/tests
npm install
npm test
```

### 2. Enable the Skill in Claude Code

```
/prd
```

Or ask Claude directly:
```
"I need a PRD for [your feature]"
```

### 3. Use the Skill

The skill guides you through:

1. **Discovery Phase** - Questions about goals, constraints, success metrics
2. **Analysis Phase** - Identify scope, dependencies, and risks
3. **Drafting Phase** - Generate complete PRD using Strict Schema
4. **Review Phase** - Refine and iterate with feedback

## 📚 Documentation

Complete documentation is included:

| File | Purpose |
|------|---------|
| `SKILL.md` | Main skill definition with Strict PRD Schema |
| `README.md` | User guide and examples |
| `docs/SPEC.md` | Detailed PRD specification |
| `docs/PLAN.md` | Implementation plan |
| `docs/QUICKSTART.md` | Quick reference |
| `docs/AGENT.md` | Agent capabilities |
| `CHANGELOG.md` | Version history |

## 🛠️ Project Structure

```
~/.claude/skills/prd/
├── SKILL.md              # Main skill definition
├── README.md             # User guide
├── AGENTS.md             # Agent documentation
├── CLAUDE.md             # This file
├── CHANGELOG.md          # Version history
├── LICENSE               # MIT license
├── jest.config.js        # Test configuration
├── docs/
│   ├── SPEC.md          # PRD specification
│   ├── PLAN.md          # Implementation plan
│   ├── QUICKSTART.md    # Quick reference
│   ├── AGENT.md         # Agent capabilities
│   └── README-AGENT.md  # Additional reference
├── scripts/
│   └── prd-generator.sh # Skill management script
├── tests/
│   ├── test-prd-skill.js # Comprehensive test suite
│   ├── package.json      # Test dependencies
│   └── jest.config.js    # Jest configuration
└── sub-skills/          # Directory for sub-skills
```

## 🧪 Testing

### Running Tests

```bash
cd ~/.claude/skills/prd/tests

# All tests with coverage
npm test

# Watch mode (auto-rerun on changes)
npm run test:watch

# Verbose output
npm run test:verbose

# Coverage report
npm run test:coverage
```

### Test Coverage

The test suite covers:

✅ **Skill Structure** - File existence and format  
✅ **Documentation** - Content and cross-references  
✅ **PRD Schema** - Strict schema validation  
✅ **Scripts** - Executable functionality  
✅ **Project Agnostic** - No project-specific references  
✅ **Integration Ready** - Claude Code compatibility  

**Target:** 100% coverage

### Test Files

- `tests/test-prd-skill.js` - Main test suite (Jest)
- `jest.config.js` - Jest configuration
- `tests/package.json` - Test dependencies

## 🔧 Common Tasks

### Generate a PRD

```
/prd
"Write a PRD for a new user authentication feature"
```

### View Examples

See `docs/QUICKSTART.md` for practical examples:
```bash
cat ~/.claude/skills/prd/docs/QUICKSTART.md
```

### Run Preflight Checks

```bash
~/.claude/skills/prd/scripts/prd-generator.sh
```

### Review Specification

```bash
cat ~/.claude/skills/prd/docs/SPEC.md
```

### Check Version

```bash
head -10 ~/.claude/skills/prd/SKILL.md
```

## 📋 Workflow Integration

### GitHub Integration

Convert PRD output to GitHub issues:

1. Generate PRD with `/prd`
2. Use the GitHub Issue Drafter to create issues from requirements
3. Link issues to project board

### Sprint Planning

Use PRD timeline data for:

1. Sprint planning and estimation
2. Milestone tracking
3. Release coordination

### Design Handoff

Share PRD specifications with design:

1. Export PRD as Markdown
2. Share technical specifications
3. Link to Figma mockups

## 🚨 Troubleshooting

### Skill Not Loading

```bash
# Verify installation
ls -la ~/.claude/skills/prd/SKILL.md

# Check syntax
cat ~/.claude/skills/prd/SKILL.md | head -20
```

### Tests Failing

```bash
# Reinstall dependencies
cd ~/.claude/skills/prd/tests
rm -rf node_modules
npm install

# Run with verbose output
npm run test:verbose
```

### Script Issues

```bash
# Test the generator script
bash ~/.claude/skills/prd/scripts/prd-generator.sh

# Check for syntax errors
bash -n ~/.claude/skills/prd/scripts/prd-generator.sh
```

## 📝 Configuration

### Skill Metadata

Edit `SKILL.md` frontmatter to customize:

```yaml
---
name: prd
description: "Generate PRDs..."
---
```

### Test Configuration

Edit `jest.config.js` to adjust:
- Test timeout
- Coverage thresholds
- Test patterns

## 🔄 Updates & Maintenance

### Check for Updates

```bash
cd ~/.claude/skills/prd
git status
git log --oneline -5
```

### Update the Skill

```bash
cd ~/.claude/skills/prd
git pull origin main
```

### Run Tests After Update

```bash
cd ~/.claude/skills/prd/tests
npm test
```

## 🌐 Project Agnostic Design

The PRD skill is designed to work in **any project context**:

✅ No project-specific code paths  
✅ No hard-coded file locations  
✅ Portable script structure  
✅ Universal documentation  
✅ Framework-independent examples  

This means:
- Works in any Claude Code session
- Portable across different projects
- No dependencies on local project structure
- Can be used by any team or organization

## 📚 Additional Resources

- **README.md** - Complete user guide
- **docs/SPEC.md** - Technical specification
- **docs/QUICKSTART.md** - Quick reference
- **CHANGELOG.md** - Version history
- **LICENSE** - MIT license
- **Repository** - https://github.com/lightspeedwp/prd

## 🤝 Contributing

To improve the PRD skill:

1. Run tests to ensure all pass
2. Add tests for new features
3. Update documentation
4. Submit a pull request

Maintain 100% test coverage.

## 📞 Support

For issues or questions:
- Check the documentation in `docs/`
- Review test suite for examples
- See QUICKSTART.md for common scenarios

---

**Skill Version:** 2.0.1  
**Last Updated:** 2026-10-30  
**Maintained by:** LightSpeed  
**License:** MIT
