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
      <div aria-live="polite" className={styles.srAnnounce} style={{position:'absolute', left:'-9999px', top:'auto', width:'1px', height:'1px', overflow:'hidden'}}>
        {['Cover','Outcomes','ROI','Pilot'][face]} facet, showing {module.title}
      </div>
      <div className={styles.inner}>
        <div className={styles.facet + ' ' + styles.cover}>
          <div className={styles.symbolWrap} aria-hidden="true">
            <svg width="44" height="44" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.symbol}>
              <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="2" />
              <path d="M20 14c0-2.2 1.8-4 4-4s4 1.8 4 4c0 2.2-3.1 6.2-4 7.5-.9-1.3-4-5.3-4-7.5z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="round" />
              <circle cx="24" cy="14" r="1.5" fill="currentColor" />
              <g strokeWidth="2" stroke="currentColor" strokeLinecap="round">
                <line x1="14" y1="28" x2="34" y2="28" />
                <line x1="14" y1="32" x2="30" y2="32" />
                <line x1="14" y1="36" x2="32" y2="36" />
              </g>
            </svg>
          </div>

          <div className={styles.coverText}>
            <h3 className={styles.title}>{module.title}</h3>
            <p className={styles.oneLiner}>{module.oneLiner}</p>
          </div>
        </div>

        <div className={styles.facet + ' ' + styles.outcomes}>
          <h4>Outcomes</h4>
          <ul>
            {module.bullets.slice(0,3).map((b,i) => <li key={i}><strong>{b.split(' — ')[0]}</strong> {b.replace(/^[^—]+ — /, '')}</li>)}
          </ul>
        </div>

        <div className={styles.facet + ' ' + styles.roi}>
          <h4 className={styles.roiHeading}>ROI snapshot</h4>
          {module.roiSnapshot ? (
            <div className={styles.roiDetails}>
              <div className={styles.roiAssumptions}>
                <small><strong>Assumptions:</strong> {module.roiSnapshot.assumptions}</small>
              </div>
              <div className={styles.roiGrid}>
                <div className={styles.roiItem}>
                  <div className={styles.roiBig}>{module.roiSnapshot.timeSaved}</div>
                  <div className={styles.roiLabel}>Time saved per staff</div>
                </div>
                <div className={styles.roiItem}>
                  <div className={styles.roiBig}>{module.roiSnapshot.monthlyValue}</div>
                  <div className={styles.roiLabel}>Monthly value</div>
                </div>
                <div className={styles.roiItem}>
                  <div className={styles.roiBig}>{module.roiSnapshot.monthlyCost}</div>
                  <div className={styles.roiLabel}>Monthly cost</div>
                </div>
                <div className={styles.roiItem}>
                  <div className={styles.roiBig}>{module.roiSnapshot.netSaving}</div>
                  <div className={styles.roiLabel}>Net monthly saving</div>
                </div>
                <div className={styles.roiItem}>
                  <div className={styles.roiBig}>{module.roiSnapshot.payback}</div>
                  <div className={styles.roiLabel}>First-month ROI</div>
                </div>
              </div>
            </div>
          ) : (
            <div className={styles.roiGrid}>
              <div className={styles.roiItem}>
                <div className={styles.roiBig}>€1,655</div>
                <div className={styles.roiLabel}>Example monthly net</div>
              </div>
              <div className={styles.roiItem}>
                <div className={styles.roiBig}>222%</div>
                <div className={styles.roiLabel}>Example payback</div>
              </div>
            </div>
          )}
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