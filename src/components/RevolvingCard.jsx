import React, { useState, useRef } from 'react';
import styles from '../styles/revolving-card.module.css';

export default function RevolvingCard({ module }) {
  const [face, setFace] = useState(0); // 0..3
  const cardRef = useRef(null);

  const next = () => setFace((f) => (f + 1) % 4);
  const prev = () => setFace((f) => (f + 3) % 4);

  function onKey(e) {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); next(); }
    if (e.key === 'ArrowRight') next();
    if (e.key === 'ArrowLeft') prev();
  }

  return (
    <article
      className={`${styles.card} ${styles['face' + face]}`}
      tabIndex={0}
      role="button"
      aria-label={`${module.title} card. Press Enter to rotate.`}
      onClick={next}
      onKeyDown={onKey}
      ref={cardRef}
    >
      <div className={styles.inner}>
        <div className={styles.facet + ' ' + styles.cover}>
          <img src={module.image} alt={module.title} className={styles.image} />
          <h3 className={styles.title}>{module.title}</h3>
          <p className={styles.oneLiner}>{module.oneLiner}</p>
        </div>

        <div className={styles.facet + ' ' + styles.outcomes}>
          <h4>Outcomes</h4>
          <ul>
            {module.bullets.slice(0,3).map((b,i) => <li key={i}><strong>{b.split(' — ')[0]}</strong> {b.replace(/^[^—]+ — /, '')}</li>)}
          </ul>
        </div>

        <div className={styles.facet + ' ' + styles.roi}>
          <h4>ROI snapshot</h4>
          <p className={styles.impact}><strong>{module.impactMetric}</strong></p>
          <div className={styles.roiNumbers}>
            {module.roiSnapshot ? (
              <>
                <div><span className={styles.roiBig}>{module.roiSnapshot.netSaving}</span><span className={styles.roiLabel}>Net monthly saving</span></div>
                <div><span className={styles.roiBig}>{module.roiSnapshot.payback}</span><span className={styles.roiLabel}>First-month ROI</span></div>
              </>
            ) : (
              <>
                <div><span className={styles.roiBig}>€1,655</span><span className={styles.roiLabel}>Example monthly net</span></div>
                <div><span className={styles.roiBig}>222%</span><span className={styles.roiLabel}>Example payback</span></div>
              </>
            )}
          </div>
        </div>

        <div className={styles.facet + ' ' + styles.pilot}>
          <h4>Pilot</h4>
          <p>{module.details}</p>
          <button
            className={styles.cta}
            onClick={(e) => {
              e.stopPropagation();
              const form = document.getElementById('scoping-form');
              if (form) {
                const select = form.querySelector('select[name="solutionInterest"]');
                if (select) select.value = module.slug;
                form.scrollIntoView({ behavior: 'smooth', block: 'center' });
                const first = form.querySelector('input, select, textarea, button');
                if (first) first.focus();
              }
            }}
          >
            {module.ctaText}
          </button>
        </div>
      </div>

      <div className={styles.pager} aria-hidden="true">
        <button onClick={(e)=>{ e.stopPropagation(); prev(); }} className={styles.pagerBtn} aria-label="Previous facet">‹</button>
        <div className={styles.dots}>
          {[0,1,2,3].map(i => (
            <button
              key={i}
              className={`${styles.dot} ${i === face ? styles.active : ''}`}
              onClick={(e)=>{ e.stopPropagation(); setFace(i); }}
              aria-pressed={i===face}
            />
          ))}
        </div>
        <button onClick={(e)=>{ e.stopPropagation(); next(); }} className={styles.pagerBtn} aria-label="Next facet">›</button>
      </div>
    </article>
  );
}