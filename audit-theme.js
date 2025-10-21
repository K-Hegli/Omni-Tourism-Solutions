/**
 * CSS THEME AUDIT SCRIPT
 * =====================
 * 
 * Verifies theme consistency and component class usage across the Omni Sales Funnel.
 * Uses the Services page (/services) as the canonical reference implementation.
 * 
 * Usage: node audit-theme.js
 * 
 * Requirements: npm install jsdom glob
 */

const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');
const glob = require('glob');

// Configuration
const CONFIG = {
  srcPath: './src',
  themePath: './src/styles/theme.css',
  referencePage: './src/pages/ServicesAndPartners.tsx',
  outputPath: './theme-audit-report.json'
};

// Required shared classes that should be used consistently
const REQUIRED_CLASSES = [
  'container',
  'section',
  'card',
  'accordion',
  'package-card',
  'package-footer',
  'upgrades',
  'btn-primary',
  'btn-secondary',
  'grid-2',
  'grid-3'
];

// Colors that should use CSS custom properties
const DEPRECATED_COLORS = [
  '#ff5c33',
  '#ff2a5f',
  '#1a1a1a',
  '#0a0a0a',
  '#e0e0e0',
  'rgb(255, 92, 51)',
  'rgba(255, 92, 51'
];

// Font declarations that should use custom properties
const DEPRECATED_FONTS = [
  'Poppins',
  'Inter',
  'Atkinson Hyperlegible'
];

class ThemeAuditor {
  constructor() {
    this.report = {
      timestamp: new Date().toISOString(),
      summary: {
        filesScanned: 0,
        issuesFound: 0,
        complianceScore: 0
      },
      issues: [],
      recommendations: []
    };
  }

  // Check if theme file exists and is imported
  checkThemeFile() {
    if (!fs.existsSync(CONFIG.themePath)) {
      this.addIssue('critical', 'Theme file not found', {
        file: CONFIG.themePath,
        message: 'Central theme file does not exist'
      });
      return false;
    }

    const themeContent = fs.readFileSync(CONFIG.themePath, 'utf8');
    
    // Check for required CSS custom properties
    const requiredProps = [
      '--brand-primary',
      '--font-heading',
      '--font-body',
      '--container-max',
      '--space-4',
      '--radius-lg'
    ];

    requiredProps.forEach(prop => {
      if (!themeContent.includes(prop)) {
        this.addIssue('medium', 'Missing CSS custom property', {
          file: CONFIG.themePath,
          property: prop,
          message: `Required custom property ${prop} not found in theme file`
        });
      }
    });

    return true;
  }

  // Scan React/TypeScript files for theme compliance
  scanComponentFiles() {
    const files = glob.sync(`${CONFIG.srcPath}/**/*.{tsx,ts,jsx,js}`, {
      ignore: ['**/node_modules/**', '**/build/**']
    });

    files.forEach(file => {
      this.scanFile(file);
    });
  }

  scanFile(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    this.report.summary.filesScanned++;

    // Check for hardcoded colors
    DEPRECATED_COLORS.forEach(color => {
      if (content.includes(color)) {
        this.addIssue('medium', 'Hardcoded color usage', {
          file: filePath,
          color: color,
          message: `Replace hardcoded color ${color} with CSS custom property`,
          line: this.findLineNumber(content, color)
        });
      }
    });

    // Check for hardcoded fonts
    DEPRECATED_FONTS.forEach(font => {
      if (content.includes(font) && !content.includes('--font')) {
        this.addIssue('low', 'Hardcoded font usage', {
          file: filePath,
          font: font,
          message: `Replace hardcoded font ${font} with CSS custom property`,
          line: this.findLineNumber(content, font)
        });
      }
    });

    // Check for missing theme import in CSS files
    if (filePath.endsWith('.css') && !filePath.includes('theme.css')) {
      if (!content.includes('@import') && !content.includes('theme.css')) {
        this.addIssue('medium', 'Missing theme import', {
          file: filePath,
          message: 'CSS file should import theme.css for consistency'
        });
      }
    }

    // Check for inline styles that should use classes
    const inlineStyleRegex = /style=\{[^}]*\}/g;
    const inlineMatches = content.match(inlineStyleRegex);
    if (inlineMatches && inlineMatches.length > 5) {
      this.addIssue('low', 'Excessive inline styles', {
        file: filePath,
        count: inlineMatches.length,
        message: 'Consider extracting inline styles to shared classes'
      });
    }

    // Check for component-specific classes that could be shared
    this.checkForSharedClassOpportunities(filePath, content);
  }

  checkForSharedClassOpportunities(filePath, content) {
    // Look for repeated Tailwind patterns that could be shared classes
    const patterns = [
      /className="[^"]*flex flex-col[^"]*"/g,
      /className="[^"]*bg-gradient-to-[^"]*"/g,
      /className="[^"]*border border-\[#ff5c33\][^"]*"/g,
      /className="[^"]*text-\[#ff5c33\][^"]*"/g
    ];

    patterns.forEach(pattern => {
      const matches = content.match(pattern);
      if (matches && matches.length > 2) {
        this.addIssue('low', 'Repeated utility pattern', {
          file: filePath,
          pattern: matches[0],
          count: matches.length,
          message: 'Consider extracting repeated utility pattern to shared class'
        });
      }
    });
  }

  // Check if components use required shared classes
  checkSharedClassUsage() {
    const files = glob.sync(`${CONFIG.srcPath}/**/*.{tsx,jsx}`, {
      ignore: ['**/node_modules/**']
    });

    files.forEach(file => {
      const content = fs.readFileSync(file, 'utf8');
      
      // Check if components that should use shared classes actually do
      if (content.includes('accordion') || content.includes('Accordion')) {
        if (!content.includes('className="accordion"')) {
          this.addIssue('medium', 'Missing shared class usage', {
            file: file,
            class: 'accordion',
            message: 'Accordion component should use .accordion shared class'
          });
        }
      }

      if (content.includes('PackageCard') || content.includes('package')) {
        if (!content.includes('package-card')) {
          this.addIssue('medium', 'Missing shared class usage', {
            file: file,
            class: 'package-card',
            message: 'Package component should use .package-card shared class'
          });
        }
      }
    });
  }

  // Validate accessibility compliance
  checkAccessibility() {
    const files = glob.sync(`${CONFIG.srcPath}/**/*.{tsx,jsx}`, {
      ignore: ['**/node_modules/**']
    });

    files.forEach(file => {
      const content = fs.readFileSync(file, 'utf8');

      // Check for missing focus styles
      if (content.includes('button') && !content.includes('focus:')) {
        this.addIssue('high', 'Missing focus styles', {
          file: file,
          message: 'Interactive elements should have focus styles for keyboard navigation'
        });
      }

      // Check for missing aria attributes on accordions
      if (content.includes('accordion') && !content.includes('aria-expanded')) {
        this.addIssue('high', 'Missing ARIA attributes', {
          file: file,
          message: 'Accordion should include aria-expanded for screen readers'
        });
      }

      // Check for missing alt text on images
      if (content.includes('<img') && !content.includes('alt=')) {
        this.addIssue('high', 'Missing alt text', {
          file: file,
          message: 'Images should include alt text for accessibility'
        });
      }
    });
  }

  // Calculate compliance score
  calculateComplianceScore() {
    const totalIssues = this.report.issues.length;
    const criticalIssues = this.report.issues.filter(i => i.severity === 'critical').length;
    const highIssues = this.report.issues.filter(i => i.severity === 'high').length;
    const mediumIssues = this.report.issues.filter(i => i.severity === 'medium').length;
    
    // Weighted scoring (critical = -20, high = -10, medium = -5, low = -1)
    const penalty = (criticalIssues * 20) + (highIssues * 10) + (mediumIssues * 5) + totalIssues;
    const score = Math.max(0, 100 - penalty);
    
    this.report.summary.complianceScore = Math.round(score);
    this.report.summary.issuesFound = totalIssues;
  }

  // Generate recommendations
  generateRecommendations() {
    const issues = this.report.issues;
    
    // Group issues by type
    const groupedIssues = issues.reduce((acc, issue) => {
      if (!acc[issue.type]) acc[issue.type] = [];
      acc[issue.type].push(issue);
      return acc;
    }, {});

    // Generate specific recommendations
    Object.entries(groupedIssues).forEach(([type, issueList]) => {
      let recommendation = '';
      
      switch (type) {
        case 'Hardcoded color usage':
          recommendation = `Replace ${issueList.length} hardcoded colors with CSS custom properties from theme.css. Use var(--brand-primary) instead of #ff5c33, etc.`;
          break;
        case 'Missing shared class usage':
          recommendation = `Update ${issueList.length} components to use shared classes from theme.css for consistency.`;
          break;
        case 'Missing theme import':
          recommendation = `Add @import './theme.css' to ${issueList.length} CSS files for proper theming.`;
          break;
        case 'Missing focus styles':
          recommendation = `Add focus-visible styles to ${issueList.length} interactive elements for keyboard accessibility.`;
          break;
        default:
          recommendation = `Address ${issueList.length} instances of ${type.toLowerCase()}.`;
      }
      
      this.report.recommendations.push({
        type,
        priority: this.getPriority(issueList),
        count: issueList.length,
        description: recommendation,
        files: [...new Set(issueList.map(i => i.details.file))]
      });
    });
  }

  getPriority(issues) {
    const severities = issues.map(i => i.severity);
    if (severities.includes('critical')) return 'critical';
    if (severities.includes('high')) return 'high';
    if (severities.includes('medium')) return 'medium';
    return 'low';
  }

  addIssue(severity, type, details) {
    this.report.issues.push({
      severity,
      type,
      details,
      timestamp: new Date().toISOString()
    });
  }

  findLineNumber(content, searchString) {
    const lines = content.split('\\n');
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].includes(searchString)) {
        return i + 1;
      }
    }
    return null;
  }

  // Main audit function
  async runAudit() {
    console.log('🎨 Starting theme audit...');
    
    // Check theme file
    console.log('📋 Checking theme file...');
    this.checkThemeFile();
    
    // Scan component files
    console.log('🔍 Scanning component files...');
    this.scanComponentFiles();
    
    // Check shared class usage
    console.log('🎯 Checking shared class usage...');
    this.checkSharedClassUsage();
    
    // Check accessibility
    console.log('♿ Checking accessibility...');
    this.checkAccessibility();
    
    // Calculate score and recommendations
    console.log('📊 Calculating compliance score...');
    this.calculateComplianceScore();
    this.generateRecommendations();
    
    // Generate report
    this.generateReport();
    
    console.log('✅ Audit complete!');
    return this.report;
  }

  generateReport() {
    // Write JSON report
    fs.writeFileSync(CONFIG.outputPath, JSON.stringify(this.report, null, 2));
    
    // Generate console summary
    console.log('\\n📈 THEME AUDIT SUMMARY');
    console.log('======================');
    console.log(`Files scanned: ${this.report.summary.filesScanned}`);
    console.log(`Issues found: ${this.report.summary.issuesFound}`);
    console.log(`Compliance score: ${this.report.summary.complianceScore}/100`);
    
    if (this.report.summary.complianceScore >= 90) {
      console.log('🟢 Excellent theme compliance!');
    } else if (this.report.summary.complianceScore >= 75) {
      console.log('🟡 Good theme compliance with room for improvement');
    } else {
      console.log('🔴 Theme compliance needs attention');
    }
    
    console.log('\\n🎯 TOP RECOMMENDATIONS:');
    this.report.recommendations
      .sort((a, b) => a.priority === 'critical' ? -1 : b.priority === 'critical' ? 1 : 0)
      .slice(0, 5)
      .forEach((rec, i) => {
        console.log(`${i + 1}. [${rec.priority.toUpperCase()}] ${rec.description}`);
      });
    
    console.log(`\\n📄 Full report saved to: ${CONFIG.outputPath}`);
  }
}

// Run audit if this file is executed directly
if (require.main === module) {
  const auditor = new ThemeAuditor();
  auditor.runAudit().catch(console.error);
}

module.exports = ThemeAuditor;