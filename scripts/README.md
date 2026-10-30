# Scripts

Executable scripts and tools for the PRD skill.

## Contents

### Main Scripts
- **prd-generator.sh** - Main PRD skill generator and validator

## prd-generator.sh

The main executable script for the PRD skill.

### Usage
```bash
bash prd-generator.sh
```

### What It Does
- Verifies skill structure and dependencies
- Validates SKILL.md and documentation files
- Confirms scripts directory is properly configured
- Reports status of skill readiness

### Output
```
✓ PRD Skill Runner
✓ SKILL.md found
✓ Documentation directory ready to use
```

### Exit Codes
- `0` - Success, skill is ready
- `1` - Error, check output for details

## Testing Scripts

Scripts in this directory are tested by:
- **Jest** - Unit tests in `__tests__/`
- **BATS** - Integration tests in `tests/`

Run tests from the `tests/` folder:
```bash
cd ../tests
npm test              # Jest
npm run test:bats     # BATS
npm run test:all      # Both
```

## Shell Script Guidelines

All scripts should:
1. Have a valid shebang (`#!/bin/bash`)
2. Include error handling (`set -e`, `trap`, `exit`)
3. Use relative paths, not absolute
4. Avoid `eval` for security
5. Be POSIX-compatible where possible
6. Include brief documentation

## Adding New Scripts

To add a new script:
1. Create `your-script.sh` in this directory
2. Add shebang and error handling
3. Make it executable: `chmod +x your-script.sh`
4. Add tests in `__tests__/` (Jest) and `tests/` (BATS)
5. Update this README with usage info

## Related

- **__tests__/** - Unit tests for scripts (Jest)
- **../tests/** - Integration tests (BATS)
- **../SKILL.md** - Skill definition and configuration
