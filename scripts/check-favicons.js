const fs = require('fs');
const path = require('path');

const faviconDir = path.join(__dirname, '..', 'public', 'favicons');
const requiredFiles = [
  'favicon.ico',
  'favicon-16x16.png',
  'favicon-32x32.png',
  'apple-touch-icon.png',
  'android-chrome-192x192.png',
  'android-chrome-512x512.png',
  'site.webmanifest'
];

const optionalFiles = [
  'mstile-150x150.png',
  'safari-pinned-tab.svg',
  'browserconfig.xml'
];

console.log('🔍 Checking favicon files...\n');

// Check if favicon directory exists
if (!fs.existsSync(faviconDir)) {
  console.log('❌ Favicon directory not found at:', faviconDir);
  console.log('📁 Please create the directory and add your favicon files.\n');
  process.exit(1);
}

// Check required files
let missingRequired = [];
let foundRequired = [];

requiredFiles.forEach(file => {
  const filePath = path.join(faviconDir, file);
  if (fs.existsSync(filePath)) {
    const stats = fs.statSync(filePath);
    foundRequired.push(`${file} (${Math.round(stats.size / 1024)}KB)`);
  } else {
    missingRequired.push(file);
  }
});

// Check optional files
let foundOptional = [];
optionalFiles.forEach(file => {
  const filePath = path.join(faviconDir, file);
  if (fs.existsSync(filePath)) {
    const stats = fs.statSync(filePath);
    foundOptional.push(`${file} (${Math.round(stats.size / 1024)}KB)`);
  }
});

// Report results
console.log('✅ Found required files:');
foundRequired.forEach(file => console.log(`   - ${file}`));

if (foundOptional.length > 0) {
  console.log('\n🎯 Found optional files:');
  foundOptional.forEach(file => console.log(`   - ${file}`));
}

if (missingRequired.length > 0) {
  console.log('\n❌ Missing required files:');
  missingRequired.forEach(file => console.log(`   - ${file}`));
  console.log('\n📝 Please add these files to complete the favicon setup.');
} else {
  console.log('\n🎉 All required favicon files are present!');
}

console.log(`\n📊 Status: ${foundRequired.length}/${requiredFiles.length} required files found`);