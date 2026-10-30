# Tests

Comprehensive test suite for the PRD skill with 100% coverage requirement.

## Test Coverage

- **Jest Tests** - 38 unit and integration tests for skill structure
- **BATS Tests** - 23 shell script validation tests
- **Total** - 61 tests with 100% pass rate

## Running Tests

### All Tests
```bash
npm run test:all
```

### Jest Only (Unit Tests)
```bash
npm test                # Run with coverage
npm run test:watch     # Watch mode for development
npm run test:verbose   # Verbose output
```

### BATS Only (Integration Tests)
```bash
npm run test:bats           # Run tests
npm run test:bats:verbose   # Verbose output
```

## Test Structure

### Jest Tests (`scripts/__tests__/`)
Located in `../scripts/__tests__/prd-skill.test.js`

Tests cover:
- ✅ Skill files (SKILL.md, README.md, LICENSE, etc.)
- ✅ Documentation (docs/ folder structure)
- ✅ PRD schema validation
- ✅ Scripts and tools (prd-generator.sh)
- ✅ Project agnostic design
- ✅ Integration readiness
- ✅ Test suite structure

**Coverage**: 100% with zero tolerance for untested code

### BATS Tests (`scripts.bats`)
Located in `scripts.bats`

Tests cover:
- ✅ Script existence and executability
- ✅ Shebang validation
- ✅ Syntax checking
- ✅ Error handling
- ✅ Output quality
- ✅ Portability and POSIX compatibility
- ✅ Performance (lines, execution time)

**23 tests** verifying shell script quality

## Coverage Requirements

All code must maintain:
- **100% line coverage** - Every line executed
- **100% function coverage** - Every function tested
- **100% branch coverage** - Every code path tested
- **100% statement coverage** - Every statement reached

No exceptions. Coverage is verified by Jest.

## Configuration

### Jest Configuration (`jest.config.js`)
Located in `../jest.config.js`

- **Test match**: `**/scripts/__tests__/**/*.test.js`
- **Coverage from**: `scripts/*.sh`
- **Coverage threshold**: 100% global
- **Test timeout**: 120 seconds
- **Environment**: Node.js

### Package.json
```json
{
  "name": "prd-skill",
  "version": "2.0.1",
  "scripts": {
    "test": "jest --coverage",
    "test:watch": "jest --watch",
    "test:verbose": "jest --verbose --coverage",
    "test:bats": "bats ../tests/scripts.bats",
    "test:bats:verbose": "bats --verbose ../tests/scripts.bats",
    "test:all": "npm test && npm run test:bats"
  }
}
```

## Writing New Tests

### Jest Tests
Create file: `../scripts/__tests__/new-test.test.js`

```javascript
describe('Feature name', () => {
  it('should do something', () => {
    expect(result).toBe(expected);
  });
});
```

Run: `npm test`

### BATS Tests
Add to: `scripts.bats`

```bash
@test "description of test" {
  run some_command
  [ "$status" -eq 0 ]
  [[ "$output" =~ pattern ]]
}
```

Run: `npm run test:bats`

## Continuous Integration

Tests run on:
- **Pre-commit** - Via lefthook (linting)
- **Pre-push** - Via lefthook (full test suite)
- **CI/CD** - On GitHub Actions

## Troubleshooting

### Test Failures
1. Run with verbose output: `npm run test:verbose`
2. Check recent changes: `git diff`
3. Run specific test: `npm test -- --testNamePattern="test name"`
4. Clear cache: `npm test -- --clearCache`

### Coverage Issues
- Use `npm test` (with coverage enabled)
- Check uncovered lines in output
- Add tests for new code

### BATS Issues
- Run verbose: `npm run test:bats:verbose`
- Check script syntax: `bash -n ../scripts/script.sh`
- Verify paths are correct

## Best Practices

1. **Keep tests focused** - One assertion per test when possible
2. **Use descriptive names** - Test name should describe what's tested
3. **Test edge cases** - Empty inputs, errors, boundaries
4. **Avoid test interdependence** - Tests should run independently
5. **Mock external calls** - Don't call real APIs/files unless integration test
6. **Maintain coverage** - Don't merge code without 100% coverage

## Related

- **../scripts/** - Scripts being tested
- **../jest.config.js** - Jest configuration
- **../package.json** - Dependencies and scripts
- **../SKILL.md** - Skill definition
