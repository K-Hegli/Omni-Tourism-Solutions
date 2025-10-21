# Troubleshooting Guide

Common issues and solutions for the Interactive Sales Funnel app.

## TypeScript Errors

### "Cannot find module 'react'" or similar

**Cause**: Missing TypeScript type definitions

**Solution**:
```bash
npm install -D @types/react @types/react-dom @types/node --legacy-peer-deps
```

### "Property 'children' does not exist on type" (Framer Motion)

**Cause**: TypeScript strict mode with Framer Motion

**Solution**: These errors don't affect runtime. The app will work fine. To suppress:

Add to `tsconfig.json`:
```json
{
  "compilerOptions": {
    "skipLibCheck": true
  }
}
```

### "JSX element implicitly has type 'any'"

**Cause**: Missing React types

**Solution**: Install types (see above) and restart VS Code

## Build Errors

### "npm ERR! ERESOLVE unable to resolve dependency tree"

**Cause**: Peer dependency conflicts

**Solution**: Use legacy peer deps flag
```bash
npm install --legacy-peer-deps
```

### Vite build fails

**Cause**: Memory issues or incorrect config

**Solution**:
```bash
# Clear cache
rm -rf node_modules
rm package-lock.json
npm install --legacy-peer-deps

# Rebuild
npm run build
```

## Runtime Errors

### "React Router: Cannot read property 'pathname'"

**Cause**: Router not properly configured

**Solution**: Make sure `<Router>` wraps your entire app in `App.tsx`

### "Tailwind classes not working"

**Cause**: Tailwind not properly configured or imported

**Solution**:
1. Check `main.tsx` imports `./styles/tailwind.css`
2. Verify `tailwind.config.js` content array includes your files
3. Restart dev server

### Framer Motion animations not working

**Cause**: Framer Motion not installed or imported

**Solution**:
```bash
npm install framer-motion
```

## Styling Issues

### Custom Tailwind classes not working

**Cause**: Tailwind not processing custom CSS

**Solution**:
1. Make sure you're using `@apply` in `.css` files, not `.tsx`
2. Restart dev server after changing Tailwind config
3. Check `postcss.config.js` exists

### Gradient text not showing

**Cause**: Missing Tailwind utilities

**Solution**: Verify `tailwind.css` has:
```css
.gradient-text {
  @apply bg-primary-gradient bg-clip-text text-transparent;
}
```

## Form Issues

### React Hook Form not submitting

**Cause**: Missing form handler or validation

**Solution**:
```typescript
const { register, handleSubmit } = useForm();

const onSubmit = (data) => {
  console.log(data); // Add your logic
};

<form onSubmit={handleSubmit(onSubmit)}>
```

### Form validation not working

**Cause**: Missing validation rules

**Solution**:
```typescript
<input
  {...register('email', { 
    required: true,
    pattern: /^\S+@\S+$/i 
  })}
/>
```

## Navigation Issues

### Routes not working (404 errors)

**Cause**: Router not using correct syntax or missing routes

**Solution**: Make sure you're using React Router v6 syntax:
```typescript
<Route path="/" element={<Home />} />
// NOT: <Route path="/" component={Home} />
```

### Mobile menu not closing

**Cause**: Missing state update

**Solution**: Verify `onClick={() => setIsOpen(false)}` on menu items

## Performance Issues

### App loading slowly

**Solutions**:
1. Optimize images (use WebP, compress)
2. Lazy load components:
```typescript
const About = lazy(() => import('./pages/About'));
```
3. Check bundle size: `npm run build` and inspect `dist/`

### Animations stuttering

**Solutions**:
1. Use `will-change` CSS property sparingly
2. Reduce animation complexity
3. Use `transform` and `opacity` instead of other properties

## Development Server Issues

### Port already in use

**Solution**:
```bash
# Kill process on port 5173 (Windows PowerShell)
netstat -ano | findstr :5173
taskkill /PID <PID> /F

# Or use different port
npm run dev -- --port 3000
```

### Hot reload not working

**Solutions**:
1. Restart dev server
2. Clear browser cache
3. Check file watchers limit (Linux/Mac)

## Deployment Issues

### Build succeeds but site broken

**Causes & Solutions**:

1. **Missing environment variables**
   - Add to Vercel/Netlify dashboard

2. **Incorrect base path**
   - Add to `vite.config.js`:
   ```javascript
   export default {
     base: '/'
   }
   ```

3. **404 on refresh**
   - Add rewrites (see DEPLOYMENT.md)

### Images not loading in production

**Cause**: Wrong path

**Solution**: Use absolute paths from `public/`:
```typescript
<img src="/logo.png" alt="Logo" />
// NOT: <img src="./logo.png" />
```

## Browser Compatibility

### Animations not working in Safari

**Solution**: Add prefixes or use autoprefixer (already included)

### Styles broken in older browsers

**Solution**: Check browser support in `package.json` and adjust if needed

## Database/Backend Issues

### Form not submitting to backend

**Cause**: CORS or incorrect API endpoint

**Solution**:
```typescript
// In AboutYou.tsx
const onSubmit = async (data) => {
  try {
    const response = await axios.post('/api/submit', data);
    console.log(response);
  } catch (error) {
    console.error('Error:', error);
  }
};
```

### Firebase/Supabase connection failed

**Cause**: Missing credentials or incorrect config

**Solution**: Double-check API keys and project configuration

## Common Mistakes

### 1. Forgetting to import CSS
```typescript
// In main.tsx
import './styles/tailwind.css'; // Don't forget!
```

### 2. Using wrong Router version syntax
```typescript
// ✅ React Router v6
<Route path="/" element={<Home />} />

// ❌ Old syntax
<Route path="/" component={Home} />
```

### 3. Not handling async operations
```typescript
// ✅ Good
const onSubmit = async (data) => {
  try {
    await submitData(data);
  } catch (error) {
    console.error(error);
  }
};

// ❌ Bad
const onSubmit = (data) => {
  submitData(data); // Not awaited
};
```

### 4. Hardcoding values
```typescript
// ✅ Good
const API_URL = import.meta.env.VITE_API_URL;

// ❌ Bad
const API_URL = 'http://localhost:3000';
```

## Still Having Issues?

1. **Check the console** - Most errors show detailed messages
2. **Clear everything**:
   ```bash
   rm -rf node_modules package-lock.json
   npm install --legacy-peer-deps
   ```
3. **Restart VS Code** - Sometimes TypeScript needs a restart
4. **Check package versions** - Make sure they're compatible
5. **Google the error** - Someone likely had the same issue

## Useful Commands

```bash
# Clear cache
npm cache clean --force

# Reinstall everything
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps

# Check for updates
npm outdated

# Audit security
npm audit

# Fix vulnerabilities
npm audit fix
```

## Getting Help

- Check documentation files (README, QUICKSTART, DEPLOYMENT)
- Search issues on GitHub
- Ask in community forums (Stack Overflow, Reddit)
- Check official docs for each library

---

**Remember**: Most issues can be fixed by restarting the dev server or clearing the cache!
