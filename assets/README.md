# Assets

Static assets, templates, and resources for the PRD skill.

## Contents

This folder contains:
- **Templates** - Reusable document templates and frameworks
- **Examples** - Example PRDs and output samples
- **Resources** - Tools, references, and supporting materials
- **Graphics** - Icons, diagrams, or visual aids
- **Media** - Images, videos, or other multimedia

## File Organization

```
assets/
├── templates/        # Document and form templates
├── examples/         # Example outputs and reference PRDs
├── resources/        # Tools and supporting resources
└── graphics/         # Visual assets and diagrams
```

## Using Assets

### In Skills
Reference assets from SKILL.md or sub-skill documentation using relative paths:
```markdown
[View Example PRD](../assets/examples/notification-system-prd.md)
```

### In Documentation
Include assets in docs to illustrate concepts:
```markdown
See the timeline estimation example: [Timeline Example](../assets/examples/timeline-estimation.png)
```

### In Tests
Use test assets for validation and example data:
```javascript
const examplePRD = require('../assets/examples/sample-prd.json');
```

## Adding Assets

When adding new assets:
1. Create appropriate subfolder if needed
2. Add descriptive filename
3. Include metadata or README in subfolder
4. Update this README with location and description
5. Reference in relevant skill documentation
6. Test that paths work from all locations

## Best Practices

1. **Descriptive names** - `notification-system-prd.md` not `prd1.md`
2. **Organized structure** - Related assets in subfolders
3. **Size matters** - Keep assets reasonably sized
4. **Portable paths** - Use relative paths, not absolute
5. **Document assets** - Add README in subfolders
6. **Versioning** - Update version in metadata if needed

## Common Asset Types

### Templates
- PRD templates
- Story card templates
- Timeline estimation templates
- Risk assessment templates
- Roadmap templates

### Examples
- Sample completed PRDs
- Timeline estimates
- Risk assessments
- User story sets
- Roadmaps and release plans

### Resources
- Checklists
- Decision matrices
- Estimation guides
- Risk frameworks
- Tools and utilities

## Related

- **docs/** - Documentation and specifications
- **prompts/** - Example prompts and workflows
- **references/** - External links and standards
- **scripts/** - Scripts and tools

## Maintenance

This folder should be kept:
- **Organized** - Clear structure and naming
- **Updated** - Remove obsolete assets
- **Referenced** - Linked from documentation
- **Tested** - Verify paths and links work

Use this folder to provide concrete examples and tools that support the PRD skill and its sub-skills.
