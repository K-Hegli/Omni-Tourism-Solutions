# 🚀 Development Workflow

Quick reference guide for common development tasks.

## Starting Development

```bash
# Navigate to project
cd c:\Users\hegli\Documents\GitHub\Omni-Sales-Funnel\interactive-sales-funnel

# Start dev server
npm run dev

# Open browser
# Navigate to http://localhost:5173
```

## Making Changes

### 1. Editing Pages

**Who We Are** (`src/pages/WhoWeAre.tsx`)
- Team information
- Company values
- Mission statement

**What We Do** (`src/pages/WhatWeDo.tsx`)
- Services
- Portfolio
- Case studies

**Next Stage** (`src/pages/NextStage.tsx`)
- Pricing tiers
- ROI calculator
- Package features

**About You** (`src/pages/AboutYou.tsx`)
- Assessment questions
- Form fields
- Growth score logic

### 2. Editing Components

**Navigation** (`src/components/Navigation.tsx`)
- Menu items
- Company logo
- Navigation links

**PricingCard** (`src/components/PricingCard.tsx`)
- Pricing display
- Feature lists
- Call-to-action buttons

### 3. Editing Styles

**Tailwind Config** (`tailwind.config.js`)
```javascript
// Update colors
colors: {
  darkBg: '#YOUR_COLOR',
  panelBg: '#YOUR_COLOR',
  offWhite: '#YOUR_COLOR',
}

// Update gradient
backgroundImage: {
  'primary-gradient': 'linear-gradient(90deg, #COLOR1, #COLOR2)',
}
```

**Custom CSS** (`src/styles/tailwind.css`)
```css
/* Add custom classes */
.your-custom-class {
  @apply your-tailwind-classes;
}
```

## Common Tasks

### Adding a New Page

1. **Create file**: `src/pages/NewPage.tsx`
```typescript
import React from 'react';
import { motion } from 'framer-motion';

const NewPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-darkBg text-offWhite py-20 px-4">
      <h1 className="gradient-text text-5xl font-bold">New Page</h1>
      {/* Your content */}
    </div>
  );
};

export default NewPage;
```

2. **Add route**: `src/App.tsx`
```typescript
import NewPage from './pages/NewPage';

// In Routes:
<Route path="/new-page" element={<NewPage />} />
```

3. **Add to navigation**: `src/components/Navigation.tsx`
```typescript
const navItems = [
  // ... existing items
  { path: '/new-page', label: 'New Page' },
];
```

### Adding a New Component

1. **Create file**: `src/components/NewComponent.tsx`
```typescript
import React from 'react';

interface NewComponentProps {
  title: string;
  // other props
}

const NewComponent: React.FC<NewComponentProps> = ({ title }) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      {/* Your component */}
    </div>
  );
};

export default NewComponent;
```

2. **Export**: `src/components/index.ts`
```typescript
export { default as NewComponent } from './NewComponent';
```

3. **Use it**:
```typescript
import { NewComponent } from '../components';

<NewComponent title="Hello" />
```

### Updating Colors

**Quick color change**:
```javascript
// tailwind.config.js
colors: {
  darkBg: '#1a1a2e',     // Dark blue-purple
  panelBg: '#16213e',    // Slightly lighter
  offWhite: '#f5f5f5',   // Almost white
}
```

**Popular color schemes**:

**Blue Theme**:
```javascript
darkBg: '#0a1929',
panelBg: '#1e2a3a',
primary-gradient: 'linear-gradient(90deg, #2196f3, #21cbf3)',
```

**Purple Theme**:
```javascript
darkBg: '#1a0f2e',
panelBg: '#2d1b4e',
primary-gradient: 'linear-gradient(90deg, #9c27b0, #e91e63)',
```

**Green Theme**:
```javascript
darkBg: '#0d1f15',
panelBg: '#1a2f25',
primary-gradient: 'linear-gradient(90deg, #00c853, #00e676)',
```

### Adding Images

1. **Add to assets**: `src/assets/logo.png`

2. **Import and use**:
```typescript
import logo from '../assets/logo.png';

<img src={logo} alt="Logo" />
```

3. **Or use from public folder**:
```typescript
<img src="/logo.png" alt="Logo" />
```

### Updating Forms

**Add new field**:
```typescript
<div>
  <label className="block text-sm font-medium mb-2">
    New Field
  </label>
  <input
    {...register('newField', { required: true })}
    type="text"
    className="calculator-input w-full"
  />
</div>
```

**Add validation**:
```typescript
{...register('email', { 
  required: 'Email is required',
  pattern: {
    value: /^\S+@\S+$/i,
    message: 'Invalid email'
  }
})}
```

## Testing Workflow

### Before Committing

```bash
# Check for errors
npm run lint

# Fix auto-fixable errors
npm run lint:fix

# Format code
npm run format

# Type check
npm run type-check

# Build test
npm run build
```

### Testing Checklist

- [ ] All pages load without errors
- [ ] Navigation works
- [ ] Forms submit successfully
- [ ] Mobile responsive
- [ ] No console errors
- [ ] Images load
- [ ] Animations work

## Git Workflow

```bash
# Check status
git status

# Stage changes
git add .

# Commit
git commit -m "feat: add new feature"

# Push
git push origin main
```

**Commit message conventions**:
- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation
- `style:` Formatting
- `refactor:` Code restructuring
- `test:` Tests
- `chore:` Maintenance

## Building for Production

```bash
# Build
npm run build

# Preview locally
npm run serve

# Check build size
ls -lh dist/
```

## Debugging Tips

### Console Logging
```typescript
console.log('Debug:', data);
console.error('Error:', error);
console.table(arrayData);
```

### React DevTools
- Install React DevTools browser extension
- Inspect component props and state

### Network Tab
- Check API calls
- Verify request/response data

### VS Code Debugging
1. Add breakpoint (click line number)
2. Press F5 to start debugging
3. Inspect variables

## Performance Optimization

### Image Optimization
```bash
# Use WebP format
# Compress with tools like TinyPNG
# Use appropriate sizes
```

### Code Splitting
```typescript
// Lazy load pages
const About = lazy(() => import('./pages/About'));

<Suspense fallback={<Loading />}>
  <About />
</Suspense>
```

### Memoization
```typescript
const memoizedValue = useMemo(() => 
  computeExpensiveValue(a, b), 
  [a, b]
);
```

## Useful VS Code Shortcuts

**Windows/Linux**:
- `Ctrl + P` - Quick file open
- `Ctrl + Shift + P` - Command palette
- `Ctrl + /` - Toggle comment
- `Alt + Shift + F` - Format document
- `F12` - Go to definition
- `Ctrl + Space` - IntelliSense

**Mac**:
- `Cmd + P` - Quick file open
- `Cmd + Shift + P` - Command palette
- `Cmd + /` - Toggle comment
- `Opt + Shift + F` - Format document
- `F12` - Go to definition
- `Ctrl + Space` - IntelliSense

## Quick Reference

### Tailwind Classes
```css
/* Spacing */
p-4    /* padding: 1rem */
m-4    /* margin: 1rem */
space-y-4  /* vertical spacing */

/* Colors */
bg-darkBg    /* background */
text-offWhite    /* text color */

/* Layout */
flex items-center justify-center
grid grid-cols-3 gap-4

/* Responsive */
md:flex    /* flex on medium screens+ */
lg:grid-cols-4    /* 4 columns on large screens+ */
```

### Framer Motion
```typescript
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  Content
</motion.div>
```

### React Hook Form
```typescript
const { register, handleSubmit, watch, formState: { errors } } = useForm();

<input {...register('field', { required: true })} />
{errors.field && <span>This field is required</span>}
```

## Daily Workflow

1. **Start day**: `npm run dev`
2. **Make changes**: Edit files
3. **Test**: Check in browser
4. **Commit**: Save progress
5. **End day**: `git push`

---

**Pro Tip**: Keep dev server running and make incremental changes. Hot reload will update instantly!
