# Team Photos Setup Guide

## 📸 Adding Team Member Photos

All team member photos should be placed in the `public/team/` directory.

### Current Status:
🎉 **ALL 10 TEAM MEMBER PHOTOS CONFIGURED - 100% COMPLETE!** 🎉

- ✅ **Nastja's photo is configured** (`/team/nastja.jpg`)
- ✅ **Mirjam's photo is configured** (`/team/mirjam.jpg`)
- ✅ **Mariia's photo is configured** (`/team/mariia.jpg`)
- ✅ **Ahsan's photo is configured** (`/team/ahsan.jpg`)
- ✅ **Kaled's (Founder & COO) photo is configured** (`/team/kaled.jpg`)
- ✅ **Mattias's photo is configured** (`/team/mattias.jpg`)
- ✅ **Thomas's photo is configured** (`/team/thomas.jpg`)
- ✅ **Aaron's (Founder & CEO) photo is configured** (`/team/aaron.jpg`)
- ✅ **Sami's photo is configured** (`/team/sami.jpg`)
- ✅ **Tristan's photo is configured** (`/team/tristan.jpg`)

✅ **All team photos ready! Now just save them to `public/team/` folder**

---

## 🎯 Photo Requirements

### Technical Specs:
- **Format**: JPG or PNG
- **Recommended Size**: 500x500px (square)
- **Minimum Size**: 300x300px
- **File Size**: Under 500KB for optimal loading
- **Aspect Ratio**: 1:1 (square) for best display

### Quality Guidelines:
- Professional headshot
- Clean background (solid color preferred)
- Good lighting
- Face clearly visible
- Smiling/friendly expression

---

## 📝 File Naming Convention

Save photos with lowercase names matching the team member:

```
public/team/
  ├── nastja.jpg
  ├── mirjam.jpg
  ├── ahsan.jpg
  ├── mariia.jpg
  ├── kaled.jpg
  ├── aaron.jpg
  ├── thomas.jpg
  ├── mattias.jpg
  ├── tristan.jpg
  └── sami.jpg  ← Already configured
```

---

## 🔧 How to Add Photos

### Step 1: Save Sami's Photo
1. Save the attached photo as `sami.jpg`
2. Place it in `public/team/sami.jpg`

### Step 2: Add Other Photos (when ready)
Update `src/data/team.ts` for each team member:

```typescript
{
  name: "Nastja",
  punchline: "I hit my target in sports & marketing",
  bio: "...",
  image: "/team/nastja.jpg",  // Add this line
  imagePlaceholder: "N",
}
```

### Step 3: Test Locally
Run `npm run dev` and navigate to "Who We Are" page to verify photos display correctly.

---

## 🎨 Current Display Logic

- **If photo exists**: Shows the actual team member photo with orange border
- **If no photo**: Shows gradient circle with initials (fallback)

---

## ✅ Next Steps

1. **For Sami**: 
   - Save `sami.jpg` to `public/team/`
   - Photo will automatically display on the Who We Are page

2. **For other team members**:
   - Collect professional headshots
   - Resize to 500x500px (square)
   - Save to `public/team/` with correct names
   - Update `src/data/team.ts` to add `image: "/team/[name].jpg"`

3. **Optional Enhancement**:
   - Add a subtle hover effect on photos
   - Implement lazy loading for performance
   - Add a "Coming Soon" badge for incomplete bios

---

## 🐛 Troubleshooting

**Photo not showing?**
- Check file path is correct: `/team/sami.jpg` (starts with `/`)
- Verify file is in `public/team/` folder (not `src/`)
- Check file name matches exactly (case-sensitive)
- Clear browser cache and hard refresh (Ctrl+F5)

**Photo looks distorted?**
- Ensure photo is square (1:1 aspect ratio)
- The component uses `object-cover` to crop if needed
- Recommended: 500x500px or 1000x1000px

---

## 📊 Progress Tracker

- [x] Team section created (2 rows × 5 cards) ✅
- [x] Flip card animation working ✅
- [x] Image support added to component ✅
- [x] **ALL 10 TEAM MEMBERS CONFIGURED WITH PHOTOS** 🎉
  - [x] Nastja configured with photo
  - [x] Mirjam configured with photo
  - [x] Ahsan configured with photo
  - [x] Mariia configured with photo
  - [x] Kaled (COO) configured with photo
  - [x] Aaron (CEO) configured with photo
  - [x] Thomas configured with photo
  - [x] Mattias configured with photo
  - [x] Sami configured with photo
  - [x] Tristan configured with photo
- [ ] Save all 10 photos to `public/team/` folder
- [ ] Test on Who We Are page
- [ ] All bios completed (Tristan & Sami pending)
- [ ] Cool quote for Tristan added (current: "Numbers tell the story")

---

**Note**: Until photos are added, the cards will show gradient circles with initials. This looks professional as a placeholder!
