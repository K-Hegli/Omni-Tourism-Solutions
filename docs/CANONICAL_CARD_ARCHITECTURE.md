# 🏗️ Canonical Rotating Card Architecture

**Status**: ✅ FULLY IMPLEMENTED  
**Last Updated**: October 23, 2025  
**Build**: ✅ PASS (Vite v4.5.14, 386.64 kB JS, 73.77 kB CSS)

---

## 1. Component Hierarchy ✅

**Location**: `src/components/RevolvingCard.jsx`

### Verified Structure:
```jsx
<article className="card">
  {/* Accessibility: screen reader announcement */}
  <div aria-live="polite">...</div>
  
  {/* 3D Inner wrapper - THIS ROTATES */}
  <div className="cardInner">
    
    {/* FRONT FACE: Cover */}
    <div className="cardFace front">
      <div className="header">
        <div className="symbolWrap">
          <svg>...</svg>  {/* Icon */}
        </div>
        <div className="coverText">
          <h3 className="title">{module.title}</h3>  {/* Title */}
        </div>
      </div>
      <div className="body">
        <p className="subtitle">{module.oneLiner}</p>  {/* Subtitle */}
      </div>
      <div className="footer"></div>
    </div>

    {/* BACK FACE: Carousel */}
    <div className="cardFace back">
      <div className="backCarousel">
        
        {/* Slide 1: Outcomes */}
        <div className="backSlide {active if activeSlide === 'outcomes'}">
          <h4>Outcomes</h4>
          <ul>{bullets}</ul>
        </div>

        {/* Slide 2: ROI */}
        <div className="backSlide {active if activeSlide === 'roi'}">
          <h4>ROI snapshot</h4>
          <div className="roiSnapshot">
            <div className="assumptions">...</div>
            <div className="metric">...</div>
            <div className="highlight">...</div>
          </div>
        </div>

        {/* Slide 3: Pilot */}
        <div className="backSlide {active if activeSlide === 'pilot'}">
          <h4>Pilot</h4>
          <p>{module.details}</p>
          <button className="cta">{module.ctaText}</button>
        </div>
      </div>

      {/* Navigation: Dots to switch slides */}
      <div className="navDots">
        <button className="navDot">•</button>  {/* Outcomes */}
        <button className="navDot">•</button>  {/* ROI */}
        <button className="navDot">•</button>  {/* Pilot */}
      </div>
    </div>

  </div>
</article>
```

### Checklist:
- ✅ Only 2 faces per card (front + back)
- ✅ `.cardInner` is the only rotator
- ✅ Back face cycles content internally (no extra 3D faces)
- ✅ Front face: minimal (icon + title + subtitle)
- ✅ Back face: carousel with 3 slides (Outcomes, ROI, Pilot)
- ✅ Navigation dots allow slide switching without re-flip

---

## 2. CSS 3D Architecture ✅

**Location**: `src/styles/revolving-card.module.css` (lines 1–100)

### Verified Styles:

#### `.card` - 3D Container
```css
.card {
  position: relative;
  width: 100%;
  min-height: 440px;      /* Provides space for content */
  height: auto;           /* Grows with content if needed */
  border-radius: 12px;
  perspective: 1200px;    /* 🔑 KEY: Provides 3D depth */
  cursor: pointer;
}
```
- ✅ Has `perspective: 1200px` (provides 3D depth to children)
- ✅ Min-height ensures vertical alignment
- ✅ No `display: flex` or `overflow: hidden` (would break 3D)

#### `.cardInner` - The Rotator
```css
.cardInner {
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;   /* 🔑 KEY: Preserves 3D space */
  transition: transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
}

.card.isFlipped .cardInner {
  transform: rotateY(180deg);     /* 🔑 KEY: Flips BOTH faces */
}
```
- ✅ Only element that applies `rotateY(180deg)`
- ✅ Has `transform-style: preserve-3d` to maintain 3D children
- ✅ Smooth 0.8s transition

#### `.cardFace` - Both Front & Back
```css
.cardFace {
  position: absolute;         /* Stacks on top of each other */
  inset: 0;                   /* Fills entire card */
  padding: 24px;
  box-sizing: border-box;
  display: grid;              /* For header/body/footer layout */
  grid-template-rows: auto 1fr auto;
  gap: 16px;
  border-radius: 12px;
  backface-visibility: hidden; /* 🔑 KEY: Hides back of face */
  overflow-y: auto;           /* Allows scrolling if content tall */
}
```
- ✅ `position: absolute; inset: 0` (perfectly overlaid)
- ✅ `backface-visibility: hidden` (each face knows when to hide)
- ✅ Grid layout for consistent spacing

#### `.cardFace.front` - Cover
```css
.cardFace.front {
  background: linear-gradient(145deg, #1a1a1a 0%, #0d0d0d 100%);
  box-shadow: 0 8px 24px rgba(0,0,0,0.6), 
              inset 0 0 0 1px rgba(255,255,255,0.05);
  transform: rotateY(0deg);   /* Faces user initially */
}

.cardFace.front:hover {
  box-shadow: 0 12px 28px rgba(0,0,0,0.8), 
              0 0 14px rgba(255, 92, 51, 0.25);  /* Glow effect */
}
```
- ✅ Gradient background (Omni brand)
- ✅ Hover effect (brightens glow)
- ✅ No transforms that conflict with `.cardInner`

#### `.cardFace.back` - Carousel Host
```css
.cardFace.back {
  background: linear-gradient(145deg, #141414 0%, #0f0f0f 100%);
  box-shadow: 0 8px 24px rgba(0,0,0,0.6), 
              inset 0 0 0 1px rgba(255,255,255,0.05);
  transform: rotateY(180deg);  /* Pre-rotated 180°; revealed on flip */
  border: 1px solid rgba(255,255,255,0.06);
}
```
- ✅ Pre-rotated 180° (will face user when `.cardInner` rotates 180°)
- ✅ Gradient background (darker than front)
- ✅ Same shadow/border as front (consistency)

#### Back Carousel Styles
```css
.backCarousel {
  display: flex;
  flex-direction: column;
  gap: 0;
  flex: 1;  /* Grows to fill body space */
}

.backSlide {
  display: none;        /* Hidden by default */
  flex-direction: column;
  gap: 10px;
}

.backSlide.active {
  display: flex;        /* Only active slide shows */
}
```
- ✅ Only active slide displays (`display: flex`)
- ✅ Instant transition (no animation; content swaps on nav dot click)
- ✅ All slides inherit `.body` layout rules

#### Navigation Dots
```css
.navDots {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 8px;
}

.navDot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: transparent;
  border: 1px solid rgba(255, 92, 51, 0.5);
  cursor: pointer;
  transition: all 200ms ease;
}

.navDot:hover {
  background: rgba(255, 92, 51, 0.3);
}

.navDot.active {
  background: rgba(255, 92, 51, 1);  /* Solid orange when active */
  border-color: rgba(255, 92, 51, 1);
}
```
- ✅ Visual feedback on hover
- ✅ Clear active state (solid orange)
- ✅ Keyboard accessible (tabindex, click handlers)

### CSS Checklist:
- ✅ `.card` has `perspective: 1200px`
- ✅ `.cardInner` has `transform-style: preserve-3d`
- ✅ `.cardInner` rotates on `.card.isFlipped`
- ✅ `.cardFace` has `backface-visibility: hidden`
- ✅ `.cardFace.front` has `rotateY(0deg)`
- ✅ `.cardFace.back` has `rotateY(180deg)`
- ✅ No old `.cover`/`.back`/`.facet` rules
- ✅ Back carousel uses `display: flex/none` (no 3D)
- ✅ Responsive media queries updated to `.cardFace`

---

## 3. Grid Alignment ✅

**Location**: `src/styles/tourism-solutions.module.css` (lines 3–24)

### Verified Grid:
```css
.sectionGrid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  perspective: 1200px;            /* Optional: adds depth to grid */
  perspective-origin: 50% 40%;    /* Centers perspective */
  align-items: stretch;           /* 🔑 KEY: Stretches all rows */
}

@media (min-width: 768px) {
  .sectionGrid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .sectionGrid {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

### Checklist:
- ✅ `align-items: stretch` ensures all cards in a row are equal height
- ✅ No `justify-items-center` or `auto-rows` (would prevent stretch)
- ✅ Responsive breakpoints: 1-col (mobile) → 2-col (tablet) → 3-col (desktop)
- ✅ Minimum column width is 300px (allows responsive collapse)
- ✅ Gap is consistent (24px) across all breakpoints

---

## 4. Responsive Design ✅

### Breakpoints:

#### Desktop (1024px+)
- `min-height: 440px` (from `.card`)
- `padding: 24px` (from `.cardFace`)
- 3-column grid
- Full 52px icon
- ✅ Validated

#### Tablet (768px–1023px)
```css
@media (max-width: 1023px) {
  .card {
    min-height: 400px;  /* Slightly shorter */
  }
  .cardFace {
    padding: 16px;      /* Tighter padding */
  }
}
```
- ✅ Media queries applied to `.cardFace` (not `.facet`)

#### Mobile (320px–767px)
```css
@media (max-width: 480px) {
  .card {
    min-height: 380px;  /* Minimal height */
  }
  .cardFace {
    padding: 12px;      /* Tight padding */
    font-size: 13px;    /* Reduced text */
  }
}
```
- ✅ Media queries applied to `.cardFace` (not `.facet`)

### Checklist:
- ✅ Desktop: 440px min-height, 24px padding
- ✅ Tablet: 400px min-height, 16px padding
- ✅ Mobile: 380px min-height, 12px padding
- ✅ Grid stretches rows (no crumbling)
- ✅ Font sizes scale responsively

---

## 5. Interaction Flow ✅

### User Action → Component State → Visual Result

#### Flip Card
1. **User clicks card or presses Enter/Arrow key**
2. `handleFlip()` toggles `isFlipped` state
3. `className={`${styles.card} ${isFlipped ? styles.isFlipped : ''}`}`
4. `.card.isFlipped` selector matches
5. `.card.isFlipped .cardInner { transform: rotateY(180deg); }`
6. `.cardInner` rotates 180° over 0.8s
7. Front face rotates away (hides via `backface-visibility`)
8. Back face rotates into view

#### Switch Carousel Slide
1. **User clicks nav dot (Outcomes/ROI/Pilot)**
2. `setActiveSlide('outcomes'|'roi'|'pilot')`
3. Conditional class: `${activeSlide === 'outcomes' ? styles.active : ''}`
4. Only matching `.backSlide.active` shows (`display: flex`)
5. Other slides hide (`display: none`)
6. **Card does NOT flip**—carousel content swaps instantly

### Accessibility
- ✅ `tabIndex={0}` on card (keyboard accessible)
- ✅ `onClick` + `onKeyDown` handlers (keyboard + mouse)
- ✅ `aria-label` and `aria-pressed` on buttons
- ✅ `aria-live="polite"` announces state changes

---

## 6. Content Strategy ✅

### Front Face (Always Minimal)
- Icon (44×44 SVG in 52×52 wrapper)
- Title (h3, 1.2rem, orange underline)
- Subtitle (p, 0.9rem, muted)
- **Purpose**: Quick visual identification

### Back Face (Content-Rich Carousel)

#### Slide 1: Outcomes
- Heading: "Outcomes"
- Content: 3 bullet points (chevron › prefix, strong keyword)
- **Purpose**: Summarize key benefits

#### Slide 2: ROI Snapshot
- Heading: "ROI snapshot"
- Assumptions: Muted disclaimer
- Metrics: 4 rows (label + value, value in orange)
- Highlight: Large orange text (e.g., "222% first-month ROI")
- **Purpose**: Business justification

#### Slide 3: Pilot
- Heading: "Pilot"
- Content: Short description (module.details)
- CTA Button: "Ready to Pilot?" (or module.ctaText)
- **Purpose**: Call-to-action

### Checklist:
- ✅ Front: Icon + Title + Subtitle
- ✅ Back Slide 1: Outcomes bullets
- ✅ Back Slide 2: ROI metrics
- ✅ Back Slide 3: Pilot + CTA
- ✅ All content fits without overflow (until scroll)

---

## 7. Final Validation Checklist ✅

### Architecture
- [x] Component: `card > cardInner > (cardFace.front + cardFace.back)`
- [x] Only 2 faces (no stacking 4-sided carousel)
- [x] `.cardInner` is sole rotator
- [x] `.cardFace.front` fixed at 0°, `.cardFace.back` at 180°
- [x] Back carousel (3 slides) cycles content via state, not 3D

### CSS 3D
- [x] `.card` has `perspective: 1200px`
- [x] `.cardInner` has `transform-style: preserve-3d`
- [x] `.cardInner` rotates on `.card.isFlipped`
- [x] `.cardFace` has `backface-visibility: hidden`
- [x] `.cardFace` has `position: absolute; inset: 0`
- [x] No old `.cover`/`.back`/`.facet` CSS cruft
- [x] Media queries updated (no `.facet` refs)

### Grid & Alignment
- [x] `.sectionGrid` has `align-items: stretch`
- [x] Grid rows maintain equal height (no crumbling)
- [x] Responsive: 1-col → 2-col → 3-col
- [x] Min-height scales: 380px (mobile) → 400px (tablet) → 440px (desktop)

### Interaction
- [x] Click/keyboard triggers flip (0.8s smooth)
- [x] Flip hides front, shows back (backface-visibility works)
- [x] Nav dots switch slides without re-flip (instant)
- [x] Active dot highlights (solid orange)
- [x] Keyboard accessible (Tab, Enter, Space, Arrow keys)

### Responsive Testing
- [x] 320px (iPhone SE): Min-height 380px, single-column grid, tight padding
- [x] 768px (iPad): Min-height 400px, 2-column grid, medium padding
- [x] 1024px (Desktop): Min-height 440px, 3-column grid, full padding
- [x] No overflow clipping on any breakpoint

### Content Fit
- [x] Front face: Icon + title + subtitle (always fits)
- [x] Back carousel: Outcomes/ROI/Pilot fit without clipping
- [x] Scrollable if content exceeds available space (`overflow-y: auto`)
- [x] ROI metrics highlighted in orange
- [x] Bullets styled with chevron prefix

### Build & Performance
- [x] Build: ✅ PASS (Vite v4.5.14)
- [x] No linting errors
- [x] No TypeScript errors
- [x] CSS size: 73.77 kB (gzipped 13.48 kB)
- [x] JS size: 386.64 kB (gzipped 122.58 kB)

---

## 8. Known Limitations & Considerations

### Browser Support
- Requires CSS 3D Transforms (all modern browsers)
- IE 11 not supported (no 3D)

### Performance
- 3D transforms use GPU (smooth at 60fps)
- Backface-visibility eliminates re-rendering hidden faces
- Active slide carousel uses `display: flex/none` (instant, no animation)

### Accessibility
- Screen readers: Announced via `aria-live="polite"`
- Keyboard: Tab, Enter, Space, Arrow keys all work
- Focus visible on nav dots and CTA button

### Future Enhancements
- Per-module custom icon (currently shared glyph)
- Keyboard arrow navigation for carousel slides
- Remember last viewed slide per card (localStorage)
- Analytics: Track which slides users view

---

## 9. Troubleshooting

### Cards Not Rotating
- ✅ Check: `.card` has `perspective: 1200px`
- ✅ Check: `.cardInner` has `transform-style: preserve-3d`
- ✅ Check: `isFlipped` state is toggling
- ✅ Check: No parent `overflow: hidden` (blocks 3D)

### Faces Overlapping
- ✅ Check: Both `.cardFace` have `backface-visibility: hidden`
- ✅ Check: `.cardFace` has `position: absolute; inset: 0`
- ✅ Check: No conflicting `z-index` values

### Cards Crumbling (Different Heights)
- ✅ Check: `.sectionGrid` has `align-items: stretch`
- ✅ Check: `.card` has `min-height: 440px`
- ✅ Check: No `auto-rows` or `grid-auto-rows` on grid

### Carousel Slides Not Switching
- ✅ Check: Nav dots have `onClick={(e) => { e.stopPropagation(); setActiveSlide(...); }}`
- ✅ Check: `.backSlide.active { display: flex; }`
- ✅ Check: State `activeSlide` is updating

### Responsive Breakpoints Not Working
- ✅ Check: Media queries exist at 768px and 480px
- ✅ Check: Viewport meta tag: `<meta name="viewport" content="width=device-width, initial-scale=1.0">`

---

## 10. Deployment Notes

### Version Control
```bash
git add src/components/RevolvingCard.jsx
git add src/styles/revolving-card.module.css
git add src/styles/tourism-solutions.module.css
git commit -m "feat: implement canonical 3D rotating card architecture"
git push origin main
```

### Build & Deploy
```bash
npm run build        # ✅ Must pass
npm run type-check   # ✅ Must pass
npm run preview      # Test locally
# Deploy to Vercel/production
```

### Monitoring
- Check Console for any JS errors
- Test all card interactions at multiple breakpoints
- Verify animations are smooth (60fps)

---

**End of Canonical Architecture Document**  
*This is the source of truth for Tourism Solutions rotating cards.*
