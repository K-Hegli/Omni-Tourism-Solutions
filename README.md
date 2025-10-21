# Interactive Sales Funnel Web App

A sleek, interactive sales funnel application built with React, TypeScript, Tailwind CSS, and Framer Motion to engage SME clients and showcase your agency's value.

> **📚 Complete Documentation:** See the [`docs/`](./docs/) folder for setup, deployment, and development guides.  
> **🚀 Quick Start:** Check [`docs/SETUP_GUIDE.md`](./docs/SETUP_GUIDE.md) for everything you need!

## 🚀 Features

- **Dark-themed UI** with custom gradient accents (#ff2a5f to #ff5c33)
- **Four main pages**:
  - **Who We Are**: Team bios, values, mission, and culture
  - **What We Do**: Services, portfolio, and case studies
  - **Next Stage**: Three-tier pricing (Omni Mini, Alpha, Omega) with ROI calculator
  - **About You**: Interactive multi-step assessment form
- **Smooth animations** with Framer Motion
- **Responsive design** with Tailwind CSS
- **Form handling** with React Hook Form
- **Type-safe** with TypeScript

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Routing**: React Router DOM v6
- **Styling**: Tailwind CSS with custom theme
- **Animations**: Framer Motion
- **Forms**: React Hook Form
- **Build Tool**: Vite
- **Code Quality**: ESLint + Prettier

## Project Structure

```
interactive-sales-funnel
├── public
│   └── index.html
├── src
│   ├── assets
│   ├── components
│   │   ├── FunnelStep.tsx
│   │   ├── AnimatedButton.tsx
│   │   ├── PricingCard.tsx
│   │   └── index.ts
│   ├── hooks
│   │   └── useFunnel.ts
│   ├── pages
│   │   ├── WhoWeAre.tsx
│   │   ├── WhatWeDo.tsx
│   │   ├── NextStage.tsx
│   │   ├── AboutYou.tsx
│   │   ├── Home.tsx
│   │   ├── Funnel.tsx
│   │   └── Summary.tsx
│   ├── styles
│   │   └── tailwind.css
│   ├── App.tsx
│   ├── main.tsx
│   └── index.tsx
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
└── README.md
```

## Getting Started

To get started with the project, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd interactive-sales-funnel
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:5173` to view the application.

5. **Build for production:**
   ```bash
   npm run build
   ```

## 🎨 Design System

### Colors
- **Dark Background**: `#0d0d1a` (darkBg)
- **Panel Background**: `#1a1a2e` (panelBg)
- **Off White**: `#e0e0e0` (offWhite)
- **Primary Gradient**: `linear-gradient(90deg, #ff2a5f, #ff5c33)`

### Typography
- **Font Family**: Inter (loaded from Google Fonts)
- **Gradient Text**: Use `.gradient-text` class for gradient headings

### Components

#### Custom CSS Classes
- `.card`: Dark panel with hover effect (lifts up with shadow)
- `.calculator-input`: Styled input with focus effects
- `.gradient-text`: Text with primary gradient

## 🎯 Package Tiers

1. **Omni Mini** (€1,500)
   - Brand discovery workshop
   - Landing page & launch assets
   - 30-day campaign plan

2. **Omni Alpha** (€5,000) - Most Popular
   - Multi-channel funnel build
   - Quarterly sales training
   - Customer analytics dashboard
   - Everything in Omni Mini

3. **Omni Omega** (Custom)
   - Dedicated product pod
   - Always-on creative studio
   - 24/7 strategic hotline
   - Everything in Omni Alpha

## Features

- Interactive sales funnel guiding users through a series of questions
- Animated buttons and page transitions for smooth user experience
- Responsive design using Tailwind CSS
- Custom hooks for managing state and logic
- Multi-step assessment form with progress tracking
- ROI calculator for growth projections
- Three-tier pricing cards with hover effects

## Technologies Used

- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- React Router v6
- React Hook Form
- Axios
- Vite

## 🔧 Development

### Run ESLint
```bash
npm run lint
```

### Format with Prettier
```bash
npx prettier --write src/
```

### Type Check
```bash
npx tsc --noEmit
```

## 🚢 Deployment

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm run build
# Drag and drop the 'dist' folder to Netlify
```

---

## 📚 Documentation

All project documentation is organized in the [`docs/`](./docs/) folder:

- **[SETUP_GUIDE.md](./docs/SETUP_GUIDE.md)** - Complete setup, deployment & troubleshooting (START HERE!)
- **[QUICKSTART.md](./docs/QUICKSTART.md)** - Quick reference for common tasks
- **[WORKFLOW.md](./docs/WORKFLOW.md)** - Development workflow guide
- **[TROUBLESHOOTING.md](./docs/TROUBLESHOOTING.md)** - Issue resolution
- **[CHECKLIST.md](./docs/CHECKLIST.md)** - Project checklist
- **[SUMMARY.md](./docs/SUMMARY.md)** - Project overview
- **[DOCS_INDEX.md](./docs/DOCS_INDEX.md)** - Documentation navigation

**Need help?** Start with **[`docs/SETUP_GUIDE.md`](./docs/SETUP_GUIDE.md)** - it covers everything!

---

## 📊 Future Enhancements

- Add Firebase/Supabase backend for form submissions
- Integrate CRM (HubSpot/Salesforce)
- Add analytics (Google Analytics, Mixpanel)
- Implement A/B testing
- Add gamification (badges, progress tracking)
- Embed external tools (Brand Grader, SEO Checker)
- Add blog/resources section
- Implement dark/light mode toggle

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License. See the LICENSE file for details.

---

Built with ❤️ for SME growth