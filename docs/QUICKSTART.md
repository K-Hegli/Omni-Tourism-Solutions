# Quick Start Guide

## 🎯 What You've Built

A complete interactive sales funnel web app with:
- 4 main pages (Who We Are, What We Do, Next Stage, About You)
- Dark theme with gradient accents
- Animated transitions
- Multi-step assessment form
- Pricing calculator

## 🚀 Next Steps

### 1. Start the Development Server

```bash
cd c:\Users\hegli\Documents\GitHub\Omni-Sales-Funnel\interactive-sales-funnel
npm run dev
```

Then open: http://localhost:5173

### 2. Customize Content

#### Update Team Information (WhoWeAre.tsx)
- Replace placeholder team members with real bios
- Update values section
- Add team photos to `src/assets`

#### Update Services (WhatWeDo.tsx)
- Edit the services array with your actual offerings
- Add real case studies and portfolio items
- Update client success metrics

#### Customize Pricing (NextStage.tsx)
- Adjust package prices and features
- Update ROI calculator logic
- Modify package descriptions

#### Configure Form (AboutYou.tsx)
- Customize assessment questions
- Add/remove form steps
- Update growth score calculation

### 3. Add Your Branding

#### Colors (tailwind.config.js)
```javascript
colors: {
  darkBg: '#0d0d1a',      // Change to your brand
  panelBg: '#1a1a2e',     // Change to your brand
  offWhite: '#e0e0e0',    // Change to your brand
},
backgroundImage: {
  'primary-gradient': 'linear-gradient(90deg, #ff2a5f, #ff5c33)',
}
```

#### Logo & Images
- Add your logo to `src/assets/`
- Update the logo in navigation
- Add team photos and portfolio images

### 4. Set Up Form Backend

#### Option A: Firebase
```bash
npm install firebase
```

Create `src/services/firebase.ts`:
```typescript
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  // Your config here
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
```

#### Option B: Supabase
```bash
npm install @supabase/supabase-js
```

Create `src/services/supabase.ts`:
```typescript
import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  'YOUR_SUPABASE_URL',
  'YOUR_SUPABASE_KEY'
);
```

### 5. Add Analytics

#### Google Analytics
```bash
npm install react-ga4
```

In `src/main.tsx`:
```typescript
import ReactGA from 'react-ga4';

ReactGA.initialize('YOUR_GA_ID');
```

### 6. Deploy

#### Vercel (Recommended)
```bash
npm install -g vercel
vercel login
vercel
```

#### Netlify
```bash
npm run build
# Deploy the 'dist' folder
```

## 🎨 Customization Tips

### Adding a New Page
1. Create file in `src/pages/NewPage.tsx`
2. Add route in `src/App.tsx`:
```typescript
<Route path="/new-page" element={<NewPage />} />
```

### Creating a New Component
1. Create file in `src/components/NewComponent.tsx`
2. Export from `src/components/index.ts`
3. Import where needed

### Styling Tips
- Use `card` class for panels
- Use `gradient-text` for headings
- Use `calculator-input` for form inputs
- Wrap in `motion.div` for animations

## 🐛 Troubleshooting

### TypeScript Errors
These are expected until you run `npm install` fully. Run:
```bash
npm install --legacy-peer-deps
```

### Tailwind Not Working
Make sure `tailwind.css` is imported in `main.tsx`:
```typescript
import './styles/tailwind.css';
```

### Animations Not Working
Check that Framer Motion is installed:
```bash
npm install framer-motion
```

### Router Not Working
Make sure you're using React Router v6 syntax with `element` prop.

## 📝 Content Checklist

- [ ] Update all page titles and descriptions
- [ ] Replace placeholder team members
- [ ] Add real case studies
- [ ] Update pricing and features
- [ ] Customize form questions
- [ ] Add your logo and branding
- [ ] Update colors to match brand
- [ ] Add real client testimonials
- [ ] Set up form submission backend
- [ ] Configure analytics
- [ ] Test on mobile devices
- [ ] Deploy to production

## 🔗 Useful Resources

- [React Router Docs](https://reactrouter.com/)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Tailwind CSS Docs](https://tailwindcss.com/)
- [React Hook Form Docs](https://react-hook-form.com/)

## 💡 Pro Tips

1. **Mobile First**: Always test on mobile first
2. **Performance**: Use lazy loading for images
3. **SEO**: Add meta tags and proper headings
4. **Accessibility**: Test with keyboard navigation
5. **Testing**: Test form submissions thoroughly

---

Need help? Check the main README.md or open an issue!
