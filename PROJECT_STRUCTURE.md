# Omni Sales Funnel - Project Structure

## 📁 Architecture Overview

This is a modern React + TypeScript application built with Vite, featuring a clean 3-page sales funnel with print-friendly business assessment tools.

---

## 🎯 Core Pages (src/pages/)

### 1. **WhoWeAre.tsx** (`/`)
- **Purpose**: Homepage introducing the company
- **Components Used**: 
  - ValueCard (4 core values: Punctuality, Humbleness, Passion, Growth)
  - AnimatedButton
- **Features**: Hero section, core values showcase, strategic positioning

### 2. **ServicesAndPartners.tsx** (`/services`)
- **Purpose**: Service catalog and partner solutions
- **Components Used**:
  - ServiceAccordion (expandable service tiers)
  - PackageCard (3 engagement packages: Mini, Alpha, Omega)
  - PartnerFlipCard (4 partner solutions with flip interaction)
  - ServiceIcons (20+ SVG icons)
- **Features**: 
  - Accordion-based services (Web Dev, SEO, Social Media, Photo/Video)
  - 3D flip cards for partner solutions
  - Mobile-first responsive design

### 3. **AboutYou.tsx** (`/about-you`)
- **Purpose**: Business assessment and PDF export
- **Components Used**:
  - SwotAnalysis (interactive SWOT matrix)
  - BusinessCapabilities (strategic & operational toggles)
- **Features**: 
  - SWOT Analysis with add/remove items
  - Business capability checklist
  - Print-to-PDF functionality with page breaks and notes sections

---

## 🧩 Active Components (src/components/)

### Layout & Navigation
- **Navigation.tsx**: Main navigation bar with routing

### Cards & Display
- **PackageCard.tsx**: Metallic-styled engagement package cards
- **ValueCard.tsx**: Core company values display
- **PartnerFlipCard.tsx**: 3D flip cards for partner solutions
- **AnimatedButton.tsx**: Reusable animated CTA button

### Interactive Forms
- **SwotAnalysis.tsx**: SWOT matrix with dynamic input fields
- **BusinessCapabilities.tsx**: Toggle-based capability assessment
- **ToggleQuestion.tsx**: Yes/no toggle component
- **SliderQuestion.tsx**: Slider input component (if still needed)

### Service Display
- **ServiceAccordion.tsx**: Collapsible service tier display
- **ServiceIcons.tsx**: Centralized SVG icon library (20+ icons)

### Utilities
- **ROICalculator.tsx**: ROI calculation tool (if still in use)
- **GaugeChart.tsx**: Visual gauge chart component (if still in use)
- **PricingCard.tsx**: Generic pricing card (may be redundant with PackageCard)

---

## 📊 Data Files (src/data/)

### services.js
- 4 service categories with simplified tier structure
- Each service has: title, description, tiers[]
- Each tier has: name, description, price

### partners.js
- 4 partner solutions (flat array structure)
- Each partner has: name, icon, desc, details (with capabilities & synergies)

### content.js
- Legacy content (verify if still used)

---

## 🎨 Styling

### tailwind.css
- Global dark cinematic theme (`bg-gradient-to-br from-black via-[#0a0a0a] to-[#1a1a1a]`)
- Custom utilities:
  - `.icon-ring`: Animated gradient hover glow
  - `.card` & `.card-hover`: Metallic gradient card effects
  - `.perspective`, `.backface-hidden`, `.rotate-y-180`: 3D flip transforms
  - `.print-section`, `.notes-space`: Print-friendly PDF layout
  - `.animate-slideDown`: Accordion animation

### Font System
- **Headings**: Poppins (400, 500, 600, 700, 800)
- **Body**: Atkinson Hyperlegible (400, 700)
- Usage: `font-heading` and `font-body` classes

### Color Palette
- Primary gradient: `#ff5c33` to `#ff2a5f`
- Dark backgrounds: `#0a0a0a`, `#1a1a1a`
- Text: `#e0e0e0` (offWhite), `#gray-400`

---

## 🗂️ Routing Structure

```
/ → WhoWeAre (Homepage)
/services → ServicesAndPartners (Services, Packages, Partners)
/about-you → AboutYou (SWOT & Capabilities)
/what-we-do → Redirects to /services (legacy)
/next-stage → Redirects to /services (legacy)
```

---

## 🔧 Build Configuration

### Package.json Scripts
- `npm run dev` - Start Vite dev server
- `npm run build` - Production build
- `npm run preview` - Preview production build

### Key Dependencies
- React 18.2.0 + TypeScript
- Vite 4.5.14 (bundler)
- React Router 6.28.0 (routing)
- Framer Motion 10.18.0 (animations)
- Tailwind CSS 3.4.1 (styling)

---

## 📦 Current Build Stats
- **Modules**: 370 transformed
- **CSS**: ~35 kB gzipped (~6.26 kB)
- **JS**: ~324 kB gzipped (~102 kB)

---

## ✅ Scalability Features

### Component Architecture
- **Atomic Design**: Small reusable components (ToggleQuestion, ServiceIcons)
- **Separation of Concerns**: Data files separate from UI components
- **Type Safety**: Full TypeScript coverage

### Performance
- Code splitting via React Router
- Optimized SVG icons (inline, currentColor for theming)
- Lazy-loaded animations with Framer Motion

### Maintainability
- Centralized icon library
- Consistent naming conventions
- Utility-first CSS with Tailwind
- Print styles isolated in media queries

---

## 🚀 Future Enhancements

### Potential Additions
- **CMS Integration**: Connect to headless CMS for content management
- **Analytics**: Track user interactions and funnel progression
- **A/B Testing**: Test different service descriptions or pricing displays
- **Internationalization**: Multi-language support
- **Form Validation**: Enhanced validation for SWOT/capabilities forms
- **Data Persistence**: Save SWOT analysis to localStorage or backend
- **PDF Generation**: Server-side PDF generation with custom branding

### Cleanup Opportunities
- Verify if ROICalculator and GaugeChart are still needed
- Consider consolidating PricingCard with PackageCard if redundant
- Evaluate SliderQuestion usage after AboutYou simplification

---

## 📝 Development Notes

### Code Style
- Use functional components with hooks
- Prefer TypeScript interfaces over types
- Keep components under 200 lines when possible
- Extract repeated logic into custom hooks

### File Naming
- Components: PascalCase.tsx
- Pages: PascalCase.tsx
- Data: camelCase.js
- Utilities: camelCase.ts

### Git Workflow
- Main branch: production-ready code
- Feature branches for new components
- Build verification before commits

---

*Last Updated: October 3, 2025*
*Framework: React 18 + TypeScript + Vite*
*Styling: Tailwind CSS + Custom Utilities*
