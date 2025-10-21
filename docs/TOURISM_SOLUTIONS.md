# Tourism Solutions - Implementation Guide

## Overview
Interactive tourism solutions page with 4-facet revolving cards showcasing partner technology solutions.

## Components Created

### RevolvingCard.jsx
- **4 Facets:** Cover → Outcomes → ROI → Pilot
- **Navigation:** Click, keyboard (Enter/Space/Arrows), pager dots
- **Accessibility:** ARIA labels, keyboard support, focus management

### TourOpsIcon.jsx  
- **Full icon:** 48×48px with circular container
- **Compact:** 24×24px simplified version
- **Design:** Map pin + roster lines, monoline style

## TourOps Module Data

```javascript
{
  id: 'tourops',
  title: 'TourOps — Central Tour Operations Platform',
  oneLiner: 'Manage tours, bookings, guides and rostering from a single, reliable interface.',
  bullets: [
    'Reduce manual admin — centralise inventory and replace spreadsheets',
    'Faster confirmations — automated voucher and booking flows shorten time-to-confirmation',
    'Scalable rostering — schedule guides, manage shifts and reduce overtime'
  ],
  roiSnapshot: {
    netSaving: '€1,655',
    payback: '~222% first-month ROI'
  },
  details: '2‑week Booking Audit — map one tour flow, build a booking microflow and run a voucher test.',
  ctaText: 'Request TourOps scoping',
  slug: 'tourops'
}
```

## ROI Calculations
**Assumptions:** 5 staff; €30 hourly cost; 40 hours/week; 10% efficiency gain
- **Time saved:** 4.0 hours/week per staff
- **Monthly value:** €2,400
- **Monthly cost:** €745  
- **Net saving:** €1,655
- **ROI:** ~222%

## Required Assets
- `public/images/modules/tourops-dashboard.jpg` (320×160px)
- TourOps icon available as React component

## Usage
Cards auto-rotate through facets, CTA buttons scroll to form and prefill solution selection.

## Files Modified
- `src/pages/tourism-solutions.jsx` - Main page with module data
- `src/components/RevolvingCard.jsx` - 4-facet card component  
- `src/components/TourOpsIcon.jsx` - Professional icon system
- `src/styles/revolving-card.module.css` - Card animations and styling