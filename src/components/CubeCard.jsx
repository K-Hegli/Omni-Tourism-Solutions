import React, { useState, useEffect, useRef } from 'react';
import styles from '../styles/cube-card.module.css';
import { useLanguage } from '../hooks/useLanguage';

export default function CubeCard({ module }) {
  const [currentFace, setCurrentFace] = useState(0); // 0: front, 1: outcomes, 2: roi, 3: pilot
  const cardRef = useRef(null);
  const innerRef = useRef(null);
  const { t } = useLanguage();

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

  // Face 0: Front/Cover - Two-layer system
  const frontFace = (
    <div className={`${styles.face} ${styles.front}`}>
      <div className={styles.faceContent}>
        <header className={styles.header}>
          <h3 className={styles.title}>{module.title}</h3>
          <p className={styles.subtitle}>{module.oneLiner}</p>
        </header>

        <div className={styles.body}>
          <div className={styles.bodyInner}>
            <section className={styles.section}>
              <h4 className={styles.sectionTitle}>{t('cube.overview.title')}</h4>
              <ul className={styles.bulletList}>
                <li><strong>{t('cube.overview.focus')}:</strong> {module.category || t('cube.overview.focusValue')}</li>
                <li><strong>{t('cube.overview.timeline')}:</strong> {t('cube.overview.timelineValue')}</li>
                <li><strong>{t('cube.overview.support')}:</strong> {t('cube.overview.supportValue')}</li>
              </ul>
            </section>
            
            <section className={styles.section}>
              <h4 className={styles.sectionTitle}>{t('cube.explore.title')}</h4>
              <ul className={styles.bulletList}>
                <li><strong>{t('cube.outcomes.title')}:</strong> {t('cube.explore.outcomes')}</li>
                <li><strong>ROI:</strong> {t('cube.explore.roi')}</li>
                <li><strong>{t('cube.pilot.title')}:</strong> {t('cube.explore.pilot')}</li>
              </ul>
            </section>
            
            <div className={styles.highlight}>{t('cube.explore.cta')}</div>
          </div>
        </div>


      </div>
    </div>
  );

  // Face 1: Outcomes - Two-layer system
  const outcomesFace = (
    <div className={`${styles.face} ${styles.right}`}>
      <div className={styles.faceContent}>
        <header className={styles.header}>
          <h3 className={styles.title}>{t('cube.outcomes.title')}</h3>
          <p className={styles.subtitle}>{t('cube.outcomes.subtitle')}</p>
        </header>

        <div className={styles.body}>
          <div className={styles.bodyInner}>
            <section className={styles.section}>
              <h4 className={styles.sectionTitle}>{t('cube.outcomes.sectionTitle')}</h4>
              <ul className={styles.bulletList}>
                {module.bullets.slice(0, 3).map((bullet, i) => (
                  <li key={i}>
                    <strong className={styles.bulletStrong}>
                      {bullet.split(' — ')[0]}:
                    </strong> {bullet.replace(/^[^—]+ — /, '')}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>

        <footer className={styles.footer}>
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
        </footer>
      </div>
    </div>
  );

  // Face 2: ROI - Two-layer system
  const roiFace = (
    <div className={`${styles.face} ${styles.back}`}>
      <div className={styles.faceContent}>
        <header className={styles.header}>
          <h3 className={styles.title}>{t('cube.roi.title')}</h3>
          <p className={styles.subtitle}>{t('cube.roi.subtitle')}</p>
        </header>

        <div className={styles.body}>
          <div className={styles.bodyInner}>
            {module.roiSnapshot ? (
              <>
                <section className={styles.section}>
                  <h4 className={styles.sectionTitle}>{t('cube.roi.assumptions')}</h4>
                  <p style={{ fontSize: '0.85rem', lineHeight: '1.3', color: 'var(--text-muted)' }}>
                    {module.roiSnapshot.assumptions}
                  </p>
                </section>
                
                <section className={styles.section}>
                  <h4 className={styles.sectionTitle}>{t('cube.roi.monthlyImpact')}</h4>
                  <div className={styles.metricsGrid}>
                    <div className={styles.metricLabel}>{t('cube.roi.timeSaved')}</div>
                    <div className={styles.metricValue}>{module.roiSnapshot.timeSaved}</div>
                    <div className={styles.metricLabel}>{t('cube.roi.monthlyValue')}</div>
                    <div className={styles.metricValue}>{module.roiSnapshot.monthlyValue}</div>
                    <div className={styles.metricLabel}>{t('cube.roi.monthlyCost')}</div>
                    <div className={styles.metricValue}>{module.roiSnapshot.monthlyCost}</div>
                    <div className={styles.metricLabel}>{t('cube.roi.netSaving')}</div>
                    <div className={styles.metricValue}>{module.roiSnapshot.netSaving}</div>
                  </div>
                  <div className={styles.highlight}>{module.roiSnapshot.payback}</div>
                </section>
              </>
            ) : (
              <>
                <section className={styles.section}>
                  <h4 className={styles.sectionTitle}>Assumptions</h4>
                  <p style={{ fontSize: '0.85rem', lineHeight: '1.3', color: 'var(--text-muted)' }}>
                    Example calculation based on average use
                  </p>
                </section>
                
                <section className={styles.section}>
                  <h4 className={styles.sectionTitle}>Estimated Return</h4>
                  <div className={styles.metricsGrid}>
                    <div className={styles.metricLabel}>Net monthly saving</div>
                    <div className={styles.metricValue}>€1,655</div>
                  </div>
                  <div className={styles.highlight}>222% first-month ROI</div>
                </section>
              </>
            )}
          </div>
        </div>

        <footer className={styles.footer}>
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
        </footer>
      </div>
    </div>
  );

  // Face 3: Pilot - Two-layer system
  const pilotFace = (
    <div className={`${styles.face} ${styles.left}`}>
      <div className={styles.faceContent}>
        <header className={styles.header}>
          <h3 className={styles.title}>{t('cube.pilot.title')}</h3>
          <p className={styles.subtitle}>{t('cube.pilot.subtitle')}</p>
        </header>

        <div className={styles.body}>
          <div className={styles.bodyInner}>
            <section className={styles.section}>
              <h4 className={styles.sectionTitle}>{t('cube.pilot.quickStart')}</h4>
              <ul className={styles.bulletList}>
                <li><strong>{t('cube.pilot.setup')}:</strong> {t('cube.pilot.setupValue')}</li>
                <li><strong>{t('cube.pilot.training')}:</strong> {t('cube.pilot.trainingValue')}</li>
                <li><strong>{t('cube.pilot.support')}:</strong> {t('cube.pilot.supportValue')}</li>
              </ul>
            </section>
            
            <div className={styles.highlight}>{t('cube.pilot.ready')}</div>
          </div>
        </div>

        <footer className={styles.footer}>
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
        </footer>
      </div>
    </div>
  );

  const rotateY = `rotateY(${-currentFace * 90}deg)`;

  return (
    <div
      ref={cardRef}
      className={styles.cubeCard}
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
        {frontFace}
        {outcomesFace}
        {roiFace}
        {pilotFace}
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