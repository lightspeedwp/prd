#!/bin/bash
# Lefthook setup script for PRD Skill
# Installs lefthook and initializes git hooks

set -e

echo "🔧 Setting up Lefthook for PRD Skill..."
echo ""

# Check if lefthook is installed
if ! command -v lefthook &> /dev/null; then
    echo "📦 Installing lefthook..."
    npm install -D lefthook
fi

# Install lefthook git hooks
echo "🪝 Installing git hooks..."
lefthook install

echo ""
echo "✅ Lefthook setup complete!"
echo ""
echo "Git hooks installed:"
echo "  • Branch validation (post-checkout, pre-push)"
echo "  • Linting (pre-commit)"
echo "  • Tests (pre-push)"
echo ""
echo "Your commits and pushes will now validate against:"
echo "  ✓ Branch naming convention (feat/, fix/, docs/, chore/, release/)"
echo "  ✓ Code quality standards"
echo "  ✓ Test coverage (100% pass rate)"
echo ""
