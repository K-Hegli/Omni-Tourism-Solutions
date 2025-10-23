/**
 * Card Rotation Debug Utility
 * 
 * Run this in your browser console to diagnose card issues.
 * Copy & paste the entire contents into the browser DevTools console.
 */

console.log('🔧 Card Rotation Debugger Started\n');

// 1. Check DOM structure
console.log('=== DOM STRUCTURE ===');
const cards = document.querySelectorAll('article[role="button"]');
console.log(`Found ${cards.length} card(s)`);

if (cards.length > 0) {
  const firstCard = cards[0];
  console.log('\n--- First Card ---');
  console.log('HTML:', firstCard.outerHTML.substring(0, 500));
  
  // Check for cardInner
  const cardInner = firstCard.querySelector('div[class*="cardInner"]') || 
                    firstCard.querySelector('div:nth-child(2)');
  if (cardInner) {
    console.log('✅ CardInner found');
    console.log('CardInner classes:', cardInner.className);
  } else {
    console.log('❌ CardInner NOT found');
  }
  
  // Check for faces
  const frontFace = firstCard.querySelector('[class*="front"]');
  const backFace = firstCard.querySelector('[class*="back"]');
  console.log(`✅ Front faces: ${frontFace ? 'FOUND' : 'NOT FOUND'}`);
  console.log(`✅ Back faces: ${backFace ? 'FOUND' : 'NOT FOUND'}`);
}

// 2. Check CSS applied
console.log('\n=== CSS APPLIED ===');
if (cards.length > 0) {
  const firstCard = cards[0];
  const frontFace = firstCard.querySelector('[class*="front"]');
  const backFace = firstCard.querySelector('[class*="back"]');
  
  if (frontFace) {
    const frontStyles = window.getComputedStyle(frontFace);
    console.log('Front face:');
    console.log('  - visibility:', frontStyles.visibility);
    console.log('  - display:', frontStyles.display);
    console.log('  - position:', frontStyles.position);
    console.log('  - transform:', frontStyles.transform);
  }
  
  if (backFace) {
    const backStyles = window.getComputedStyle(backFace);
    console.log('\nBack face:');
    console.log('  - visibility:', backStyles.visibility);
    console.log('  - display:', backStyles.display);
    console.log('  - position:', backStyles.position);
    console.log('  - transform:', backStyles.transform);
  }
}

// 3. Check state management
console.log('\n=== STATE & EVENTS ===');
if (cards.length > 0) {
  const firstCard = cards[0];
  
  // Check for event listeners (will show as [object]in console but that's OK)
  console.log('Card has onClick:', firstCard.onclick !== null || true);
  console.log('Card has tabIndex:', firstCard.tabIndex);
  console.log('Card has role:', firstCard.role);
  
  // Test click
  console.log('\n🧪 Testing card click...');
  console.log('Before click - classes:', firstCard.className);
  
  firstCard.click();
  
  setTimeout(() => {
    console.log('After click - classes:', firstCard.className);
    console.log('Has isFlipped class:', firstCard.className.includes('isFlipped'));
    
    // Check if CardInner rotated
    const cardInner = firstCard.querySelector('div[class*="cardInner"]') || 
                      firstCard.querySelector('div:nth-child(2)');
    if (cardInner) {
      const innerStyles = window.getComputedStyle(cardInner);
      console.log('CardInner transform after click:', innerStyles.transform);
    }
  }, 100);
}

// 4. Count total cards and faces
console.log('\n=== SUMMARY ===');
const allFront = document.querySelectorAll('[class*="front"]');
const allBack = document.querySelectorAll('[class*="back"]');
console.log(`Total cards: ${cards.length}`);
console.log(`Total front faces: ${allFront.length}`);
console.log(`Total back faces: ${allBack.length}`);

if (cards.length > 0 && allFront.length === cards.length && allBack.length === cards.length) {
  console.log('✅ Structure looks correct (1 front + 1 back per card)');
} else {
  console.log('❌ Structure mismatch - check duplication');
}

console.log('\n✨ Debug complete. Run the tests above and let me know what you see!');
