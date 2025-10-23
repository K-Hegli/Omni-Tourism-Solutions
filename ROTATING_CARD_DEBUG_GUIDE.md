# 🔧 Rotating Card Debug Guide

## Current Status
✅ Build passes (3.48s, no errors)  
✅ Component renders 2 faces per card (verified in source)  
✅ Visibility logic added for bulletproof face control  

---

## What You Should See

### Before Flip
```
┌─────────────────────────┐
│  Card (perspective: 1200px)
│  ├─ cardInner (rotateY 0)
│  │  ├─ cardFace.front (rotateY 0)     ← VISIBLE
│  │  │  ├─ Icon (52×52)
│  │  │  ├─ Title (h3)
│  │  │  └─ Subtitle (p)
│  │  │
│  │  └─ cardFace.back (rotateY 180)    ← HIDDEN (visibility: hidden)
│  │     ├─ Outcomes
│  │     ├─ ROI
│  │     └─ Pilot
│  │
│  └─ aria-live (screen reader)
│
└─ Result: See front face only
```

### After Flip (Click or Enter)
```
cardInner transform: rotateY(180deg)  ← ROTATES

After rotation:
┌─────────────────────────┐
│  Card (perspective: 1200px)
│  ├─ cardInner (rotateY 180)
│  │  ├─ cardFace.front (rotateY 0)     ← NOW HIDDEN (visibility: hidden)
│  │  │
│  │  └─ cardFace.back (rotateY 180)    ← NOW VISIBLE (visibility: visible)
│  │     ├─ Outcomes      ◄ Active
│  │     ├─ ROI
│  │     ├─ Pilot
│  │     └─ Nav dots
│  │
│  └─ aria-live (screen reader)
│
└─ Result: See back face only
```

---

## DOM Structure (What's in Your Page)

### Per Card (4 modules = 4 cards)
```html
<article class="card">
  <div style="position: absolute; left: -9999px;">
    Cover, TourOps  ← aria-live (for screen readers)
  </div>
  
  <div class="cardInner">
    <!-- FACE 1: Front -->
    <div class="cardFace front">
      <div class="header">
        <div class="symbolWrap">
          <svg>...</svg>
        </div>
        <div class="coverText">
          <h3>TourOps — Central Tour Operations Platform</h3>
        </div>
      </div>
      <div class="body">
        <p>Manage tours, bookings...</p>
      </div>
      <div class="footer"></div>
    </div>
    
    <!-- FACE 2: Back -->
    <div class="cardFace back">
      <div class="backCarousel">
        <!-- Slide 1: Outcomes -->
        <div class="backSlide active">
          <div class="header"><h4>Outcomes</h4></div>
          <div class="body">
            <ul>
              <li>...</li>
              <li>...</li>
              <li>...</li>
            </ul>
          </div>
        </div>
        
        <!-- Slide 2: ROI -->
        <div class="backSlide">
          <div class="header"><h4>ROI snapshot</h4></div>
          <div class="body">
            <div class="roiSnapshot">...</div>
          </div>
        </div>
        
        <!-- Slide 3: Pilot -->
        <div class="backSlide">
          <div class="header"><h4>Pilot</h4></div>
          <div class="body"><p>...</p></div>
          <div class="footer">
            <button class="cta">Request TourOps scoping</button>
          </div>
        </div>
      </div>
      
      <div class="navDots">
        <button class="navDot active">•</button>
        <button class="navDot">•</button>
        <button class="navDot">•</button>
      </div>
    </div>
  </div>
</article>
```

✅ **This is correct!** Only 2 `.cardFace` elements per card.

---

## CSS Visibility Logic (Now Added)

### Initial State (not flipped)
```css
.card:not(.isFlipped) .cardFace.front {
  visibility: visible;     ← Front shows
  pointer-events: auto;
}

.card:not(.isFlipped) .cardFace.back {
  visibility: hidden;      ← Back is hidden (but still in DOM)
  pointer-events: none;
}
```

### Flipped State (className="card isFlipped")
```css
.card.isFlipped .cardFace.front {
  visibility: hidden;      ← Front is hidden
  pointer-events: none;
}

.card.isFlipped .cardFace.back {
  visibility: visible;     ← Back shows
  pointer-events: auto;
}
```

**Why both approaches?**
- `transform-style: preserve-3d` + `backface-visibility: hidden` = 3D behavior
- `visibility: visible/hidden` = Fallback visibility control
- Combined = bulletproof

---

## Testing Checklist

### Visual Test
- [ ] Load page → See 4 cards (TourOps, BookingFlow Pro, TravelConnect, YieldMax)
- [ ] Each card shows front face (icon + title + subtitle)
- [ ] Back face is hidden (check DevTools → Elements → cardFace.back should have `visibility: hidden`)
- [ ] Click any card → smooth 0.8s rotation → front disappears, back appears
- [ ] Back face shows Outcomes by default (first nav dot highlighted)
- [ ] Click nav dots → carousel slides switch instantly
- [ ] Hover front face → orange glow appears
- [ ] Click again → rotates back to front

### Keyboard Test
- [ ] Tab to a card → focus outline appears
- [ ] Press Enter → card flips
- [ ] Press Space → card flips again
- [ ] Press Right Arrow → flips
- [ ] Press Left Arrow → flips back

### Responsive Test
- [ ] Resize to 320px (mobile) → 1 column, cards still flip
- [ ] Resize to 768px (tablet) → 2 columns, all cards same height
- [ ] Resize to 1024px (desktop) → 3 columns, no crumbling

### DevTools Inspection
1. Open DevTools (F12)
2. Elements tab → find `<article class="card">`
3. Expand the tree → verify:
   - [ ] One `.cardInner` wrapper
   - [ ] One `.cardFace.front` child
   - [ ] One `.cardFace.back` child
   - [ ] Inside back: one `.backCarousel` with 3 `.backSlide` divs
   - [ ] Inside back: one `.navDots` with 3 buttons
4. Total: 1 article + 1 inner + 2 faces + 1 carousel + 3 slides + 1 dots + 3 buttons = 13 elements per card
5. For 4 cards: ~52 elements total (not 150+)

### Browser Console
1. Open DevTools → Console
2. Run this:
```javascript
// Count card faces
const cards = document.querySelectorAll('[class*="card"]');
const frontFaces = document.querySelectorAll('.cardFace.front');
const backFaces = document.querySelectorAll('.cardFace.back');

console.log('Total cards:', cards.length);
console.log('Front faces:', frontFaces.length);
console.log('Back faces:', backFaces.length);

// Should show: 4 cards, 4 front, 4 back
```

Expected output:
```
Total cards: (some number)
Front faces: 4
Back faces: 4
```

If you see more than 4 of each, there's duplication.

---

## What Was Fixed

### Before
```css
.cardFace {
  backface-visibility: hidden;
}
```
Problem: Only works when element is rotated away from viewer.

### After
```css
/* Explicit visibility control */
.card:not(.isFlipped) .cardFace.front {
  visibility: visible;
}

.card:not(.isFlipped) .cardFace.back {
  visibility: hidden;  ← EXPLICITLY HIDDEN
}

.card.isFlipped .cardFace.front {
  visibility: hidden;  ← EXPLICITLY HIDDEN
}

.card.isFlipped .cardFace.back {
  visibility: visible; ← EXPLICITLY VISIBLE
}

/* Also added z-index for safety */
.cardFace.front { z-index: 10; }  /* In front initially */
.cardFace.back { z-index: 5; }    /* Behind initially */
```

---

## If It's Still Not Working

### Symptom: Both faces visible at same time
**Fix**: Check that `visibility: hidden` is being applied to the hidden face.
1. DevTools → Elements → find `.cardFace`
2. Check Styles panel → does it have `visibility: hidden`?
3. If not: CSS selector isn't matching. Check class name: is it `isFlipped` or `is-flipped`?

### Symptom: Flip doesn't work
**Fix**: Check that `isFlipped` state is toggling.
1. Add this to console:
```javascript
// Find the card component in React DevTools
// Check if isFlipped state changes on click
```
2. Or: Look at the class on the card element:
   - Before flip: `class="card"`
   - After flip: `class="card isFlipped"` or `class="card is-flipped"`

### Symptom: Carousel doesn't show
**Fix**: Check that `.backSlide.active` has `display: flex`.
1. DevTools → Elements → find `.backSlide`
2. Check Styles → should have `.backSlide.active { display: flex; }`
3. If back face is visible, one slide should show, others hidden

### Symptom: Grid crumbling (different heights)
**Fix**: Check `.sectionGrid` has `align-items: stretch`.
1. DevTools → Elements → find `.sectionGrid`
2. Check Styles → should have `align-items: stretch`
3. Check each card has `min-height: 440px`

---

## Quick Debug Commands

Run these in the browser console to verify structure:

```javascript
// 1. Count elements
console.log('Cards:', document.querySelectorAll('[class*="card"]:not([class*="Inner"])').length);
console.log('Front faces:', document.querySelectorAll('.cardFace.front').length);
console.log('Back faces:', document.querySelectorAll('.cardFace.back').length);

// 2. Check first card's state
const firstCard = document.querySelector('article[class*="card"]');
console.log('First card classes:', firstCard.className);
console.log('Is flipped:', firstCard.classList.contains('isFlipped'));

// 3. Check visibility
const front = document.querySelector('.cardFace.front');
const back = document.querySelector('.cardFace.back');
console.log('Front computed style:', window.getComputedStyle(front).visibility);
console.log('Back computed style:', window.getComputedStyle(back).visibility);

// 4. Check transform
const inner = document.querySelector('.cardInner');
console.log('CardInner transform:', window.getComputedStyle(inner).transform);
```

---

## Next Steps

1. **Open the page in your browser**
2. **Run the debug commands above** in the browser console
3. **Share the output** so I can see what's actually rendering
4. **Try clicking a card** and tell me:
   - Does it rotate?
   - Do you see the back content?
   - Are both faces visible?
   - Is the grid aligned?

This will help me pinpoint exactly what's happening on your end.

---

**Key File Changes:**
- `src/styles/revolving-card.module.css`: Added explicit `visibility: visible/hidden` logic
- `src/components/RevolvingCard.jsx`: No changes (already correct)
- `src/styles/tourism-solutions.module.css`: No changes (already correct)

**Build**: ✅ PASS (3.48s)
