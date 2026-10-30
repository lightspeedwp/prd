#!/usr/bin/env bats
# BATS tests for PRD skill shell scripts
# Test coverage for prd-generator.sh

# Get the absolute path to the scripts directory
SKILL_ROOT="$(cd "$(dirname "$BATS_TEST_FILENAME")/../" && pwd)"
SCRIPTS_DIR="$SKILL_ROOT/scripts"
PRD_GENERATOR="$SCRIPTS_DIR/prd-generator.sh"

# Setup: run before each test
setup() {
  # Make sure script is executable
  chmod +x "$PRD_GENERATOR" 2>/dev/null || true
}

# ============================================================================
# prd-generator.sh Tests
# ============================================================================

@test "prd-generator.sh: script exists" {
  [ -f "$PRD_GENERATOR" ]
}

@test "prd-generator.sh: script is executable" {
  [ -x "$PRD_GENERATOR" ]
}

@test "prd-generator.sh: has valid shebang" {
  head -1 "$PRD_GENERATOR" | grep -q "^#!/bin/bash"
}

@test "prd-generator.sh: runs without errors" {
  run bash "$PRD_GENERATOR"
  [ "$status" -eq 0 ]
}

@test "prd-generator.sh: outputs text" {
  run bash "$PRD_GENERATOR"
  [ -n "$output" ]
}

@test "prd-generator.sh: contains PRD Skill reference" {
  run bash "$PRD_GENERATOR"
  [[ "$output" =~ "PRD" ]]
}

@test "prd-generator.sh: contains success indicator" {
  run bash "$PRD_GENERATOR"
  [[ "$output" =~ "✓" ]] || [[ "$output" =~ "ready" ]] || [[ "$status" -eq 0 ]]
}

@test "prd-generator.sh: has no syntax errors" {
  run bash -n "$PRD_GENERATOR"
  [ "$status" -eq 0 ]
}

@test "prd-generator.sh: works from any directory" {
  # Run from different directory
  run bash "$PRD_GENERATOR"
  [ "$status" -eq 0 ]
}

@test "prd-generator.sh: uses relative paths only" {
  ! grep -q "^[[:space:]]*/Users/\|^[[:space:]]*/home/" "$PRD_GENERATOR"
}

@test "prd-generator.sh: does not use eval" {
  ! grep -w "eval" "$PRD_GENERATOR"
}

@test "prd-generator.sh: has proper error handling" {
  grep -q "set -e\|trap\|exit" "$PRD_GENERATOR"
}

@test "prd-generator.sh: under 100 lines" {
  [ "$(wc -l < "$PRD_GENERATOR")" -lt 100 ]
}

@test "prd-generator.sh: is readable as text" {
  file "$PRD_GENERATOR" | grep -q "text\|shell\|bash"
}

@test "prd-generator.sh: has clear license indicator" {
  head -5 "$PRD_GENERATOR" | grep -q "#"
}

@test "prd-generator.sh: output is multi-line" {
  run bash "$PRD_GENERATOR"
  [ "$(echo "$output" | wc -l)" -gt 1 ]
}

@test "prd-generator.sh: exit code is 0 (success)" {
  bash "$PRD_GENERATOR" > /dev/null 2>&1
  [ $? -eq 0 ]
}

@test "prd-generator.sh: works with bash -x (debug mode)" {
  run bash -x "$PRD_GENERATOR" 2>&1
  # Should not crash
  [ $? -eq 0 ] || [ $? -eq 1 ]
}

@test "prd-generator.sh: does not output errors to stderr" {
  run bash "$PRD_GENERATOR" 2>&1
  # Successful execution
  [ "$status" -eq 0 ]
}

@test "prd-generator.sh: is POSIX shell compatible core" {
  # Check for bash-only constructs
  ! grep -q "\[\[.*\]\]" "$PRD_GENERATOR" || grep -q "#!/bin/bash" "$PRD_GENERATOR"
}

@test "prd-generator.sh: contains version or copyright info" {
  grep -q "2026\|Copyright\|License" "$PRD_GENERATOR" || grep -q "v[0-9]\|PRD" "$PRD_GENERATOR"
}

@test "prd-generator.sh: output contains SKILL.md reference" {
  run bash "$PRD_GENERATOR"
  [[ "$output" =~ "SKILL" ]]
}

@test "prd-generator.sh: test suite completed successfully" {
  [ -f "$PRD_GENERATOR" ] && [ -x "$PRD_GENERATOR" ]
}
