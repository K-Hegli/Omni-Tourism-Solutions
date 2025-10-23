// Card Rotation Debug Script
// Run this in browser console on the Tourism Solutions page

console.log('🔧 Card Rotation Debug Started');

// Find all cards
const cards = document.querySelectorAll('[class*="card"]');
console.log(`📊 Found ${cards.length} card elements`);

cards.forEach((card, index) => {
  console.log(`\n--- Card ${index + 1} ---`);

  // Check class names
  console.log('Classes:', card.className);

  // Check if has isFlipped class
  const hasFlippedClass = card.className.includes('isFlipped');
  console.log('Has isFlipped class:', hasFlippedClass);

  // Find cardInner
  const cardInner = card.querySelector('[class*="cardInner"]');
  if (cardInner) {
    console.log('✅ Found cardInner');
    console.log('cardInner classes:', cardInner.className);

    // Check transform
    const computedStyle = window.getComputedStyle(cardInner);
    console.log('cardInner transform:', computedStyle.transform);
  } else {
    console.log('❌ No cardInner found');
  }

  // Find faces
  const frontFace = card.querySelector('[class*="cardFace"][class*="front"]');
  const backFace = card.querySelector('[class*="cardFace"][class*="back"]');

  if (frontFace) {
    console.log('✅ Found front face');
    const frontStyle = window.getComputedStyle(frontFace);
    console.log('Front visibility:', frontStyle.visibility);
    console.log('Front transform:', frontStyle.transform);
  } else {
    console.log('❌ No front face found');
  }

  if (backFace) {
    console.log('✅ Found back face');
    const backStyle = window.getComputedStyle(backFace);
    console.log('Back visibility:', backStyle.visibility);
    console.log('Back transform:', backStyle.transform);
  } else {
    console.log('❌ No back face found');
  }

  // Test click
  console.log('Testing click...');
  card.click();

  setTimeout(() => {
    console.log('After click:');
    console.log('Classes:', card.className);
    const hasFlippedAfter = card.className.includes('isFlipped');
    console.log('Has isFlipped after click:', hasFlippedAfter);

    if (cardInner) {
      const computedStyle = window.getComputedStyle(cardInner);
      console.log('cardInner transform after click:', computedStyle.transform);
    }
  }, 100);
});

console.log('\n💡 If cards aren\'t flipping, check:');
console.log('1. CSS module classes are applied');
console.log('2. transform-style: preserve-3d is working');
console.log('3. perspective is set on parent');
console.log('4. backface-visibility is hidden');