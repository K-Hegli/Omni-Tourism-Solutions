// DevTools Console Snippet for Cube Card Debugging
// Copy-paste this into Chrome DevTools Console to validate cube layout

(() => {
  const q = s => document.querySelector(s);
  const rect = el => el ? el.getBoundingClientRect() : null;
  
  console.log('=== CUBE CARD VALIDATION ===');
  console.log('CARD', rect(q('.card')));
  console.log('CARDINNER', rect(q('.cardInner')));
  console.log('FACE', rect(q('.face')));
  console.log('BODYINNER', rect(q('.bodyInner')));
  
  const el = q('.bodyInner');
  if (!el) {
    console.log('BODYINNER_COMPUTED: null');
    return;
  }
  
  const s = getComputedStyle(el);
  console.log('BODYINNER_COMPUTED', 
    'height:', s.height + ';',
    'max-height:', s.maxHeight + ';',
    'padding:', s.padding + ';',
    'box-sizing:', s.boxSizing + ';',
    'overflow-y:', s.overflowY + ';',
    'min-height:', s.minHeight + ';'
  );
  
  // Additional helpful checks
  console.log('\n=== OVERFLOW CHECK ===');
  const bodyInner = q('.bodyInner');
  if (bodyInner) {
    const scrollable = bodyInner.scrollHeight > bodyInner.clientHeight;
    console.log('ScrollHeight:', bodyInner.scrollHeight);
    console.log('ClientHeight:', bodyInner.clientHeight);
    console.log('Has Overflow?', scrollable);
    console.log('Can Scroll?', scrollable && s.overflowY === 'auto');
  }
  
  console.log('\n=== FACE GEOMETRY ===');
  const face = q('.face');
  if (face) {
    const faceStyle = getComputedStyle(face);
    console.log('Face display:', faceStyle.display);
    console.log('Face grid-template-rows:', faceStyle.gridTemplateRows);
    console.log('Face padding:', faceStyle.padding);
    console.log('Face box-sizing:', faceStyle.boxSizing);
  }
  
  console.log('\n=== ALL FACES COUNT ===');
  const faces = document.querySelectorAll('.face');
  console.log('Total faces rendered:', faces.length);
  faces.forEach((f, i) => {
    const classes = Array.from(f.classList).join(' ');
    console.log(`Face ${i}:`, classes, rect(f));
  });
})();
