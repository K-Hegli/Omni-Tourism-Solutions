import React, { useState, useEffect, useRef } from 'react';
import styles from '../styles/cube-card.module.css';

export default function CubeCard({ module }) {
  const [currentFace, setCurrentFace] = useState(0); // 0: front, 1: outcomes, 2: roi, 3: pilot
  const cardRef = useRef(null);
  const innerRef = useRef(null);

  const nextFace = () => setCurrentFace((prev) => (prev + 1) % 4);
  const prevFace = () => setCurrentFace((prev) => (prev + 3) % 4);
  const goToFace = (faceIndex) => setCurrentFace(faceIndex);

  useEffect(() => {
    const handleKeyDown = (e) => {
      // Only respond to keyboard if this card is focused
      if (cardRef.current && cardRef.current.contains(document.activeElement)) {
        if (e.key === 'ArrowLeft') {
          e.preventDefault();
          prevFace();
        } else if (e.key === 'ArrowRight') {
          e.preventDefault();
          nextFace();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Face 0: Front/Cover
  const frontFace = (
    <div className={styles.faceContent}>
      <div className={styles.header}>
        <div className={styles.iconWrapper}>
          <svg width="44" height="44" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.icon}>
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
        <div className={styles.titleSection}>
          <h3 className={styles.title}>{module.title}</h3>
        </div>
      </div>
      <div className={styles.body}>
        <p className={styles.subtitle}>{module.oneLiner}</p>
      </div>
      <div className={styles.footer}>
        <p className={styles.hint}>Click or use arrow keys to explore</p>
      </div>
    </div>
  );

  // Face 1: Outcomes
  const outcomesFace = (
    <div className={styles.faceContent}>
      <div className={styles.header}>
        <h3 className={styles.faceTitle}>Outcomes</h3>
      </div>
      <div className={styles.body}>
        <ul className={styles.bullets}>
          {module.bullets.slice(0, 3).map((bullet, i) => (
            <li key={i} className={styles.bullet}>
              <strong className={styles.bulletStrong}>
                {bullet.split(' — ')[0]}
              </strong> {bullet.replace(/^[^—]+ — /, '')}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.footer}>
        <div className={styles.navDots}>
          <button
            className={`${styles.navDot} ${currentFace === 1 ? styles.active : ''}`}
            onClick={() => goToFace(1)}
            aria-label="Outcomes"
          />
          <button
            className={`${styles.navDot}`}
            onClick={() => goToFace(2)}
            aria-label="ROI"
          />
          <button
            className={`${styles.navDot}`}
            onClick={() => goToFace(3)}
            aria-label="Pilot"
          />
        </div>
      </div>
    </div>
  );

  // Face 2: ROI
  const roiFace = (
    <div className={styles.faceContent}>
      <div className={styles.header}>
        <h3 className={styles.faceTitle}>ROI Snapshot</h3>
      </div>
      <div className={styles.body}>
        {module.roiSnapshot ? (
          <div className={styles.roiContent}>
            <div className={styles.roiAssumptions}>
              <strong>Assumptions:</strong> {module.roiSnapshot.assumptions}
            </div>
            <div className={styles.roiMetrics}>
              <div className={styles.roiMetric}>
                <span className={styles.metricLabel}>Time saved / staff</span>
                <span className={styles.metricValue}>{module.roiSnapshot.timeSaved}</span>
              </div>
              <div className={styles.roiMetric}>
                <span className={styles.metricLabel}>Monthly value</span>
                <span className={styles.metricValue}>{module.roiSnapshot.monthlyValue}</span>
              </div>
              <div className={styles.roiMetric}>
                <span className={styles.metricLabel}>Monthly cost</span>
                <span className={styles.metricValue}>{module.roiSnapshot.monthlyCost}</span>
              </div>
              <div className={styles.roiMetric}>
                <span className={styles.metricLabel}>Net monthly saving</span>
                <span className={styles.metricValue}>{module.roiSnapshot.netSaving}</span>
              </div>
            </div>
            <div className={styles.roiHighlight}>{module.roiSnapshot.payback}</div>
          </div>
        ) : (
          <div className={styles.roiContent}>
            <div className={styles.roiAssumptions}>
              <strong>Assumptions:</strong> Example calculation
            </div>
            <div className={styles.roiMetrics}>
              <div className={styles.roiMetric}>
                <span className={styles.metricLabel}>Net monthly saving</span>
                <span className={styles.metricValue}>€1,655</span>
              </div>
            </div>
            <div className={styles.roiHighlight}>222% first-month ROI</div>
          </div>
        )}
      </div>
      <div className={styles.footer}>
        <div className={styles.navDots}>
          <button
            className={`${styles.navDot}`}
            onClick={() => goToFace(1)}
            aria-label="Outcomes"
          />
          <button
            className={`${styles.navDot} ${currentFace === 2 ? styles.active : ''}`}
            onClick={() => goToFace(2)}
            aria-label="ROI"
          />
          <button
            className={`${styles.navDot}`}
            onClick={() => goToFace(3)}
            aria-label="Pilot"
          />
        </div>
      </div>
    </div>
  );

  // Face 3: Pilot/CTA
  const pilotFace = (
    <div className={styles.faceContent}>
      <div className={styles.header}>
        <h3 className={styles.faceTitle}>Pilot Program</h3>
      </div>
      <div className={styles.body}>
        <p className={styles.pilotText}>{module.details}</p>
      </div>
      <div className={styles.footer}>
        <button
          className={styles.ctaButton}
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
        <div className={styles.navDots}>
          <button
            className={`${styles.navDot}`}
            onClick={() => goToFace(1)}
            aria-label="Outcomes"
          />
          <button
            className={`${styles.navDot}`}
            onClick={() => goToFace(2)}
            aria-label="ROI"
          />
          <button
            className={`${styles.navDot} ${currentFace === 3 ? styles.active : ''}`}
            onClick={() => goToFace(3)}
            aria-label="Pilot"
          />
        </div>
      </div>
    </div>
  );

  const faces = [frontFace, outcomesFace, roiFace, pilotFace];

  return (
    <div
      ref={cardRef}
      className={styles.card}
      role="group"
      aria-roledescription="3D cube card"
      aria-label={`${module.title} - Face ${currentFace + 1} of 4`}
      tabIndex={0}
      onClick={(e) => {
        // Don't rotate if clicking on control buttons
        if (e.target.closest(`.${styles.controls}`)) return;
        nextFace();
      }}
    >
      <div
        ref={innerRef}
        className={styles.cardInner}
        style={{ transform: rotateY }}
        aria-live="polite"
        aria-atomic="true"
      >
        <div className={`${styles.face} ${styles.front}`} aria-hidden={currentFace !== 0}>
          {faces[0]}
        </div>
        <div className={`${styles.face} ${styles.right}`} aria-hidden={currentFace !== 1}>
          {faces[1]}
        </div>
        <div className={`${styles.face} ${styles.back}`} aria-hidden={currentFace !== 2}>
          {faces[2]}
        </div>
        <div className={`${styles.face} ${styles.left}`} aria-hidden={currentFace !== 3}>
          {faces[3]}
        </div>
      </div>

      <div className={styles.controls}>
        <button
          className={styles.controlBtn}
          onClick={prevFace}
          aria-label="Previous face"
        >
          ◀
        </button>
        <div className={styles.dots}>
          {[0, 1, 2, 3].map((i) => (
            <button
              key={i}
              className={`${styles.dot} ${currentFace === i ? styles.active : ''}`}
              onClick={() => goToFace(i)}
              aria-current={currentFace === i}
              aria-label={`Show face ${i + 1}`}
            />
          ))}
        </div>
        <button
          className={styles.controlBtn}
          onClick={nextFace}
          aria-label="Next face"
        >
          ▶
        </button>
      </div>
    </div>
  );
}