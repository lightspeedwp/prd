# GitHub Configuration

This directory contains GitHub-specific configuration for the PRD Skill repository, aligned with LightSpeed org-wide standards.

## Contents

### Configuration Files
- **branch-types.yml** - Org-wide branch type definitions and PR template routing
- **branch-labels.yml** - Automatic label application based on branch type
- **changelog-rules.yml** - Changelog entry rules and formatting
- **labels.yml** - Canonical label definitions for issues and PRs

### Templates
- **PULL_REQUEST_TEMPLATE/** - PR templates for different branch types
  - `pr_feature.md` - Feature and enhancement PRs
  - `pr_task.md` - Task-based work
  - `pr_chore.md` - Maintenance and housekeeping
  - `pr_docs.md` - Documentation updates
  - `pr_release.md` - Release PRs
  - `config.yml` - Template configuration

- **ISSUE_TEMPLATE/** - Issue templates for different issue types
  - `03-feature.md` - Feature requests
  - `02-bug.md` - Bug reports
  - `08-chore.md` - Chores and maintenance

## Branching Strategy

The PRD Skill repository follows the org-wide branching strategy documented in:
https://github.com/lightspeedwp/.github/blob/develop/docs/BRANCHING_STRATEGY.md

### Branch Naming
Use format: `{type}/{scope}-{title}`

Valid types include:
- `feat/` — New features
- `fix/` — Bug fixes
- `docs/` — Documentation
- `task/` — Scoped work
- `refactor/` — Code refactoring
- `chore/` — Maintenance
- `test/` — Testing
- `ci/` — CI/CD updates

Example: `feat/comprehensive-test-suite`

## PR Process

1. Create a branch following naming conventions
2. Make changes and write descriptive commit messages
3. Open a PR - the appropriate template will be suggested based on branch type
4. Ensure all checks pass
5. Request review from code owners
6. Once approved, squash-merge to `main` and delete the branch

## Labeling

Labels are automatically applied based on:
1. Branch type (from branch-types.yml)
2. File changes (from labeler.yml if present)
3. Manual assignment by maintainers

All labels must be defined in `labels.yml`.

## References

- [LightSpeed Branching Strategy](https://github.com/lightspeedwp/.github/blob/develop/docs/BRANCHING_STRATEGY.md)
- [Organization GitHub Configuration](https://github.com/lightspeedwp/.github)
- [PRD Skill Repository](https://github.com/lightspeedwp/prd)
