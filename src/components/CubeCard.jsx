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

  // Face 0: Front/Cover - Unified Architecture
  const frontFace = (
    <div className={`${styles.face} ${styles.front}`}>
      <header className={styles.header}>
        <h3 className={styles.title}>{module.title}</h3>
        <p className={styles.subtitle}>{module.oneLiner}</p>
      </header>

      <div className={styles.body}>
        <div className={styles.bodyInner}>
          <section className={styles.section}>
            <h4 className={styles.sectionTitle}>Solution Overview</h4>
            <ul className={styles.bulletList}>
              <li><strong>Focus:</strong> {module.category || 'Tourism operations'}</li>
              <li><strong>Timeline:</strong> 2-6 week implementation</li>
              <li><strong>Support:</strong> Full setup and training included</li>
            </ul>
          </section>
          
          <section className={styles.section}>
            <h4 className={styles.sectionTitle}>Explore This Module</h4>
            <ul className={styles.bulletList}>
              <li><strong>Outcomes:</strong> Key benefits and results</li>
              <li><strong>ROI:</strong> Financial impact snapshot</li>
              <li><strong>Pilot:</strong> Implementation roadmap</li>
            </ul>
          </section>
        </div>
      </div>

      <footer className={styles.footer}>
        <p className={styles.hint}>Click or use arrow keys to explore</p>
      </footer>
    </div>
  );

  // Face 1: Outcomes - Unified Architecture
  const outcomesFace = (
    <div className={`${styles.face} ${styles.right}`}>
      <header className={styles.header}>
        <h3 className={styles.title}>Outcomes</h3>
        <p className={styles.subtitle}>Key benefits and results</p>
      </header>

      <div className={styles.body}>
        <div className={styles.bodyInner}>
          <section className={styles.section}>
            <h4 className={styles.sectionTitle}>Key Benefits</h4>
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
          
          {module.bullets.length > 3 && (
            <section className={styles.section}>
              <h4 className={styles.sectionTitle}>Additional Value</h4>
              <ul className={styles.bulletList}>
                {module.bullets.slice(3, 5).map((bullet, i) => (
                  <li key={i}>
                    <strong className={styles.bulletStrong}>
                      {bullet.split(' — ')[0]}:
                    </strong> {bullet.replace(/^[^—]+ — /, '')}
                  </li>
                ))}
              </ul>
            </section>
          )}
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
  );

  // Face 2: ROI - Unified Architecture
  const roiFace = (
    <div className={`${styles.face} ${styles.back}`}>
      <header className={styles.header}>
        <h3 className={styles.title}>ROI Snapshot</h3>
        <p className={styles.subtitle}>Time & value per staff</p>
      </header>

      <div className={styles.body}>
        <div className={styles.bodyInner}>
          {module.roiSnapshot ? (
            <>
              <section className={styles.section}>
                <h4 className={styles.sectionTitle}>Assumptions</h4>
                <p style={{ fontSize: '0.85rem', lineHeight: '1.3', color: 'var(--text-muted)' }}>
                  {module.roiSnapshot.assumptions}
                </p>
              </section>
              
              <section className={styles.section}>
                <h4 className={styles.sectionTitle}>Monthly Impact</h4>
                <div className={styles.metricsGrid}>
                  <div className={styles.metricLabel}>Time saved / staff</div>
                  <div className={styles.metricValue}>{module.roiSnapshot.timeSaved}</div>
                  <div className={styles.metricLabel}>Monthly value</div>
                  <div className={styles.metricValue}>{module.roiSnapshot.monthlyValue}</div>
                  <div className={styles.metricLabel}>Monthly cost</div>
                  <div className={styles.metricValue}>{module.roiSnapshot.monthlyCost}</div>
                  <div className={styles.metricLabel}>Net saving</div>
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
  );

  // Face 3: Pilot - Unified Architecture
  const pilotFace = (
    <div className={`${styles.face} ${styles.left}`}>
      <header className={styles.header}>
        <h3 className={styles.title}>Pilot Program</h3>
        <p className={styles.subtitle}>Start your implementation journey</p>
      </header>

      <div className={styles.body}>
        <div className={styles.bodyInner}>
          <section className={styles.section}>
            <h4 className={styles.sectionTitle}>Implementation Path</h4>
            <ul className={styles.bulletList}>
              <li><strong>Week 1-2:</strong> Setup and configuration</li>
              <li><strong>Week 3-4:</strong> Staff training and testing</li>
              <li><strong>Week 5-6:</strong> Go-live and optimization</li>
            </ul>
          </section>
          
          <section className={styles.section}>
            <h4 className={styles.sectionTitle}>What's Included</h4>
            <ul className={styles.bulletList}>
              <li><strong>Full setup:</strong> Complete system configuration</li>
              <li><strong>Training:</strong> Staff onboarding and support</li>
              <li><strong>Support:</strong> 30-day implementation assistance</li>
            </ul>
            <div className={styles.highlight}>Ready to start in 2 weeks</div>
          </section>
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
  );

  const rotateY = `rotateY(${-currentFace * 90}deg)`;

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