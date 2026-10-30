#!/bin/bash
# PRD Generator Script
# Generates a Product Requirements Document with all required sections

set -e

PRD_SKILL_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${BLUE}PRD Skill Runner${NC}"
echo "==============================================="
echo "Skill Directory: $PRD_SKILL_DIR"
echo ""

# Check if we're in a Claude Code session
if [ -z "$CLAUDE_SESSION_ID" ]; then
    echo -e "${YELLOW}Note: This skill is best run from within Claude Code or claude CLI${NC}"
    echo "To use this skill:"
    echo "  1. Load the skill: /prd"
    echo "  2. Ask Claude to generate a PRD"
    echo ""
fi

# Display available resources
echo -e "${GREEN}Available Resources:${NC}"
echo "  • SKILL.md - Main skill definition"
echo "  • docs/SPEC.md - Detailed specification"
echo "  • docs/PLAN.md - Implementation plan"
echo "  • docs/QUICKSTART.md - Quick start guide"
echo "  • docs/AGENT.md - Agent documentation"
echo ""

echo "Running PRD skill checks..."

# Verify SKILL.md exists
if [ -f "$PRD_SKILL_DIR/SKILL.md" ]; then
    echo -e "${GREEN}✓${NC} SKILL.md found"
else
    echo -e "${YELLOW}✗${NC} SKILL.md not found"
    exit 1
fi

# Verify docs exist
if [ -d "$PRD_SKILL_DIR/docs" ]; then
    echo -e "${GREEN}✓${NC} Documentation directory found"
    ls -1 "$PRD_SKILL_DIR/docs" | sed 's/^/    /'
else
    echo -e "${YELLOW}✗${NC} Documentation directory not found"
fi

echo ""
echo -e "${GREEN}Skill ready to use!${NC}"
echo "Load the skill in Claude with: /prd"
