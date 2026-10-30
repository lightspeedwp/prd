/**
 * PRD Skill Test Suite
 * Validates PRD generation and quality
 */

const assert = require('assert');

describe('PRD Skill Tests', () => {
  describe('PRD Structure', () => {
    it('should have required sections in SKILL.md', () => {
      const skillContent = require('fs').readFileSync(`${__dirname}/../SKILL.md`, 'utf8');
      
      assert(skillContent.includes('Executive Summary'), 'Missing Executive Summary');
      assert(skillContent.includes('User Stories'), 'Missing User Stories section');
      assert(skillContent.includes('Technical Specifications'), 'Missing Technical Specifications');
      assert(skillContent.includes('Risks & Roadmap'), 'Missing Risks & Roadmap');
    });

    it('should have comprehensive schema documentation', () => {
      const skillContent = require('fs').readFileSync(`${__dirname}/../SKILL.md`, 'utf8');
      assert(skillContent.includes('Strict PRD Schema'), 'Missing schema definition');
    });
  });

  describe('Documentation', () => {
    it('should have required documentation files', () => {
      const fs = require('fs');
      const docsDir = `${__dirname}/../docs`;
      
      assert(fs.existsSync(`${docsDir}/SPEC.md`), 'Missing SPEC.md');
      assert(fs.existsSync(`${docsDir}/PLAN.md`), 'Missing PLAN.md');
      assert(fs.existsSync(`${docsDir}/QUICKSTART.md`), 'Missing QUICKSTART.md');
    });
  });

  describe('Scripts', () => {
    it('should have executable scripts', () => {
      const fs = require('fs');
      const scriptsDir = `${__dirname}/../scripts`;
      
      assert(fs.existsSync(`${scriptsDir}/prd-generator.sh`), 'Missing prd-generator.sh');
    });
  });
});
