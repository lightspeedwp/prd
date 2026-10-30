/**
 * PRD Skill Test Suite
 * Comprehensive tests for PRD skill structure and functionality
 * Target: 100% code coverage
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const SKILL_DIR = path.join(__dirname, '..');
const DOCS_DIR = path.join(SKILL_DIR, 'docs');
const SCRIPTS_DIR = path.join(SKILL_DIR, 'scripts');

describe('PRD Skill - Core Structure', () => {
  describe('Skill Files', () => {
    it('should have SKILL.md as the main skill definition', () => {
      const skillPath = path.join(SKILL_DIR, 'SKILL.md');
      expect(fs.existsSync(skillPath)).toBe(true);

      const content = fs.readFileSync(skillPath, 'utf8');
      expect(content).toContain('Product Requirements Document');
      expect(content).toContain('Strict PRD Schema');
    });

    it('should have README.md with user guide', () => {
      const readmePath = path.join(SKILL_DIR, 'README.md');
      expect(fs.existsSync(readmePath)).toBe(true);

      const content = fs.readFileSync(readmePath, 'utf8');
      expect(content).toContain('Quick Start');
      expect(content).toContain('When to Use');
    });

    it('should have CHANGELOG.md documenting versions', () => {
      const changelogPath = path.join(SKILL_DIR, 'CHANGELOG.md');
      expect(fs.existsSync(changelogPath)).toBe(true);

      const content = fs.readFileSync(changelogPath, 'utf8');
      expect(content).toContain('2.0.1');
      expect(content).toContain('Added');
    });

    it('should have LICENSE file', () => {
      const licensePath = path.join(SKILL_DIR, 'LICENSE');
      expect(fs.existsSync(licensePath)).toBe(true);

      const content = fs.readFileSync(licensePath, 'utf8');
      expect(content).toContain('MIT License');
    });

    it('should have AGENTS.md for agent documentation', () => {
      const agentsPath = path.join(SKILL_DIR, 'AGENTS.md');
      expect(fs.existsSync(agentsPath)).toBe(true);

      const content = fs.readFileSync(agentsPath, 'utf8');
      expect(content).toMatch(/Agent|Capability|Skill/i);
    });

    it('should have CLAUDE.md for configuration guidance', () => {
      const claudePath = path.join(SKILL_DIR, 'CLAUDE.md');
      expect(fs.existsSync(claudePath)).toBe(true);

      const content = fs.readFileSync(claudePath, 'utf8');
      expect(content).toMatch(/Configuration|Getting Started|Testing/i);
    });
  });

  describe('Documentation Structure', () => {
    it('should have all required documentation files', () => {
      const requiredDocs = [
        'SPEC.md',
        'PLAN.md',
        'QUICKSTART.md',
        'AGENT.md',
        'README-AGENT.md'
      ];

      requiredDocs.forEach(doc => {
        const docPath = path.join(DOCS_DIR, doc);
        expect(fs.existsSync(docPath)).toBe(true);
      });
    });

    it('SPEC.md should document PRD structure and standards', () => {
      const specPath = path.join(DOCS_DIR, 'SPEC.md');
      const content = fs.readFileSync(specPath, 'utf8');

      // Should be substantial documentation
      expect(content.length).toBeGreaterThan(1000);
      expect(content).toMatch(/PRD|specification|requirement|schema/i);
    });

    it('PLAN.md should document implementation and phases', () => {
      const planPath = path.join(DOCS_DIR, 'PLAN.md');
      const content = fs.readFileSync(planPath, 'utf8');

      // Should have substantial content
      expect(content.length).toBeGreaterThan(500);
      expect(content).toMatch(/Phase|plan|implementation|roadmap|milestone/i);
    });

    it('QUICKSTART.md should provide quick reference guide', () => {
      const quickstartPath = path.join(DOCS_DIR, 'QUICKSTART.md');
      const content = fs.readFileSync(quickstartPath, 'utf8');

      // Should have reference content
      expect(content.length).toBeGreaterThan(300);
      expect(content).toMatch(/quick|guide|example|reference|start|how/i);
    });

    it('AGENT.md should document agent capabilities', () => {
      const agentPath = path.join(DOCS_DIR, 'AGENT.md');
      const content = fs.readFileSync(agentPath, 'utf8');

      expect(content).toContain('Capabilities');
      expect(content).toMatch(/PRD|Planning|Feature/i);
    });
  });

  describe('PRD Schema Validation', () => {
    it('should define Strict PRD Schema in SKILL.md', () => {
      const skillPath = path.join(SKILL_DIR, 'SKILL.md');
      const content = fs.readFileSync(skillPath, 'utf8');

      const requiredSections = [
        'Executive Summary',
        'User Experience',
        'Technical Specifications',
        'Risks & Roadmap',
        'Non-Goals'
      ];

      requiredSections.forEach(section => {
        expect(content).toContain(section);
      });
    });

    it('should specify quality standards', () => {
      const skillPath = path.join(SKILL_DIR, 'SKILL.md');
      const content = fs.readFileSync(skillPath, 'utf8');

      expect(content).toContain('Quality Standards');
      expect(content).toContain('concrete');
      expect(content).toContain('measurable');
    });

    it('should include discovery phase guidance', () => {
      const skillPath = path.join(SKILL_DIR, 'SKILL.md');
      const content = fs.readFileSync(skillPath, 'utf8');

      expect(content).toContain('Phase 1');
      expect(content).toContain('Discovery');
    });
  });
});

describe('PRD Skill - Scripts & Tools', () => {
  describe('prd-generator.sh script', () => {
    it('should exist and be executable', () => {
      const scriptPath = path.join(SCRIPTS_DIR, 'prd-generator.sh');
      expect(fs.existsSync(scriptPath)).toBe(true);

      const stats = fs.statSync(scriptPath);
      expect(stats.mode & 0o111).toBeTruthy(); // Check if executable
    });

    it('should run without errors', (done) => {
      try {
        const output = execSync(`bash ${path.join(SCRIPTS_DIR, 'prd-generator.sh')}`, {
          encoding: 'utf8',
          timeout: 10000
        });

        expect(output).toContain('PRD Skill Runner');
        expect(output).toContain('SKILL.md found');
        expect(output).toContain('ready to use');
        done();
      } catch (error) {
        done(error);
      }
    });

    it('should verify SKILL.md exists', (done) => {
      try {
        const output = execSync(`bash ${path.join(SCRIPTS_DIR, 'prd-generator.sh')}`, {
          encoding: 'utf8'
        });

        expect(output).toContain('✓');
        expect(output).toContain('SKILL.md');
        done();
      } catch (error) {
        done(error);
      }
    });

    it('should verify documentation directory', (done) => {
      try {
        const output = execSync(`bash ${path.join(SCRIPTS_DIR, 'prd-generator.sh')}`, {
          encoding: 'utf8'
        });

        expect(output).toContain('Documentation directory');
        done();
      } catch (error) {
        done(error);
      }
    });
  });

  describe('Scripts directory', () => {
    it('should exist', () => {
      expect(fs.existsSync(SCRIPTS_DIR)).toBe(true);
    });

    it('should have at least one executable script', () => {
      const files = fs.readdirSync(SCRIPTS_DIR);
      expect(files.length).toBeGreaterThan(0);
    });

    it('all shell scripts should have shebang line', () => {
      const files = fs.readdirSync(SCRIPTS_DIR);

      files.forEach(file => {
        if (file.endsWith('.sh')) {
          const content = fs.readFileSync(path.join(SCRIPTS_DIR, file), 'utf8');
          expect(content).toMatch(/^#!/);
        }
      });
    });
  });
});

describe('PRD Skill - Testing', () => {
  describe('Test suite structure', () => {
    it('should have tests directory', () => {
      const testsPath = path.join(SKILL_DIR, 'tests');
      expect(fs.existsSync(testsPath)).toBe(true);
    });

    it('should have package.json with test scripts', () => {
      const packagePath = path.join(SKILL_DIR, 'tests', 'package.json');
      expect(fs.existsSync(packagePath)).toBe(true);

      const content = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
      expect(content.name).toBe('prd-skill-tests');
      expect(content.scripts.test).toBeDefined();
    });

    it('should have test JavaScript file', () => {
      const testsDir = path.join(SKILL_DIR, 'tests');
      const testFiles = fs.readdirSync(testsDir).filter(f => f.endsWith('.test.js'));
      expect(testFiles.length).toBeGreaterThan(0);

      const content = fs.readFileSync(path.join(testsDir, testFiles[0]), 'utf8');
      expect(content).toContain('describe');
    });

    it('should have jest configuration', () => {
      const jestConfigPath = path.join(SKILL_DIR, 'jest.config.js');
      expect(fs.existsSync(jestConfigPath)).toBe(true);

      const content = fs.readFileSync(jestConfigPath, 'utf8');
      expect(content).toContain('module.exports');
    });
  });

  describe('Test coverage targets', () => {
    it('should have tests for skill structure', () => {
      const testsDir = path.join(SKILL_DIR, 'tests');
      const testFiles = fs.readdirSync(testsDir).filter(f => f.endsWith('.test.js'));
      const content = fs.readFileSync(path.join(testsDir, testFiles[0]), 'utf8');

      expect(content).toContain('Skill Files');
      expect(content).toContain('Documentation');
    });

    it('should have tests for PRD schema', () => {
      const testsDir = path.join(SKILL_DIR, 'tests');
      const testFiles = fs.readdirSync(testsDir).filter(f => f.endsWith('.test.js'));
      const content = fs.readFileSync(path.join(testsDir, testFiles[0]), 'utf8');

      expect(content).toContain('Schema');
      expect(content).toContain('Quality Standards');
    });

    it('should have tests for scripts', () => {
      const testsDir = path.join(SKILL_DIR, 'tests');
      const testFiles = fs.readdirSync(testsDir).filter(f => f.endsWith('.test.js'));
      const content = fs.readFileSync(path.join(testsDir, testFiles[0]), 'utf8');

      expect(content).toContain('script');
      expect(content).toContain('executable');
    });
  });
});

describe('PRD Skill - Project Agnostic', () => {
  describe('No project-specific references', () => {
    it('SKILL.md should not reference specific projects', () => {
      const skillPath = path.join(SKILL_DIR, 'SKILL.md');
      const content = fs.readFileSync(skillPath, 'utf8');

      // Should not contain specific company/project names (beyond LightSpeed)
      expect(content).not.toContain('ThisOneTime');
      expect(content).not.toContain('specific client');
    });

    it('README.md should be generic and reusable', () => {
      const readmePath = path.join(SKILL_DIR, 'README.md');
      const content = fs.readFileSync(readmePath, 'utf8');

      // Should explain what it does, not where
      expect(content).toContain('When to Use');
      expect(content).toContain('Quick Start');

      // Should not reference specific projects
      expect(content).not.toContain('ThisOneTime');
    });

    it('Documentation should be universally applicable', () => {
      const specPath = path.join(DOCS_DIR, 'SPEC.md');
      const content = fs.readFileSync(specPath, 'utf8');

      // PRD examples should be generic
      expect(content).toMatch(/user|feature|requirement/i);
    });

    it('Scripts should work in any environment', () => {
      const scriptPath = path.join(SCRIPTS_DIR, 'prd-generator.sh');
      const content = fs.readFileSync(scriptPath, 'utf8');

      // Should use relative paths, not absolute project paths
      expect(content).toContain('$(dirname "${BASH_SOURCE[0]}")');
      expect(content).not.toContain('/Users/');
      expect(content).not.toContain('/home/');
    });
  });

  describe('Portable installation', () => {
    it('skill should work from any ~/.claude/skills/ location', () => {
      const skillPath = path.join(SKILL_DIR, 'SKILL.md');
      const content = fs.readFileSync(skillPath, 'utf8');

      // Should load without project dependencies
      expect(content).toMatch(/PRD|requirements|feature/i);
    });

    it('documentation should not assume local file structure', () => {
      const readmePath = path.join(SKILL_DIR, 'README.md');
      const content = fs.readFileSync(readmePath, 'utf8');

      // Links should be relative or standard
      const links = content.match(/\[.*?\]\((.*?)\)/g) || [];
      links.forEach(link => {
        const url = link.match(/\((.*?)\)/)[1];
        expect(url).not.toMatch(/^\/Users\//);
        expect(url).not.toMatch(/^\/home\//);
      });
    });
  });
});

describe('PRD Skill - Integration Ready', () => {
  describe('Skill metadata', () => {
    it('SKILL.md should have proper frontmatter', () => {
      const skillPath = path.join(SKILL_DIR, 'SKILL.md');
      const content = fs.readFileSync(skillPath, 'utf8');

      // Should have frontmatter with name and description
      expect(content).toMatch(/^---\n/);
      expect(content).toContain('name:');
      expect(content).toContain('description:');
    });

    it('should be loadable by Claude Code', () => {
      const skillPath = path.join(SKILL_DIR, 'SKILL.md');
      const content = fs.readFileSync(skillPath, 'utf8');

      // Must have proper Markdown format
      expect(content).toContain('#');
      expect(content).not.toContain('<?php');
      expect(content).not.toContain('<?=');
    });
  });

  describe('Documentation cross-references', () => {
    it('README should reference docs', () => {
      const readmePath = path.join(SKILL_DIR, 'README.md');
      const content = fs.readFileSync(readmePath, 'utf8');

      expect(content).toContain('docs/');
      expect(content).toContain('SPEC.md');
      expect(content).toContain('QUICKSTART.md');
    });

    it('docs should cross-reference each other', () => {
      const specPath = path.join(DOCS_DIR, 'SPEC.md');
      const content = fs.readFileSync(specPath, 'utf8');

      // Should link to related docs
      expect(content).toMatch(/\.md/);
    });
  });
});
