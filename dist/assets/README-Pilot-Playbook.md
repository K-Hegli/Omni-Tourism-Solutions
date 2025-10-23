# Pilot Playbook PDF Placeholder

This directory should contain the `Omni-Pilot-Playbook.pdf` file that users will download after submitting the scoping form.

## File Requirements:
- **Filename:** `Omni-Pilot-Playbook.pdf`
- **Purpose:** Comprehensive guide for tourism operators to prepare for Omni module implementation
- **Content should include:**
  - Overview of Omni tourism solutions
  - Preparation checklist for scoping calls
  - Integration timeline and milestones
  - Success metrics and KPIs
  - Sample connector documentation (high-level, non-NDA content)
  - Contact information for technical support

## API Integration:
The scoping form API (`/api/scoping.js`) returns this file path in the success response:
```javascript
playbookUrl: '/assets/Omni-Pilot-Playbook.pdf'
```

## Note for Content Team:
Please ensure this PDF is created and placed in this directory before the tourism solutions page goes live. The form will fail to provide downloads without this file in place.