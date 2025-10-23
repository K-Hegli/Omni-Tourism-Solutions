import React, { useState } from 'react';

export default function TestRevolvingCard({ module }) {
  const [isFlipped, setIsFlipped] = useState(false);

  function handleFlip() {
    console.log('Flip clicked, current state:', isFlipped);
    setIsFlipped(!isFlipped);
  }

  return (
    <article
      className={`test-card ${isFlipped ? 'flipped' : ''}`}
      onClick={handleFlip}
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '440px',
        borderRadius: '12px',
        perspective: '1200px',
        cursor: 'pointer',
        border: '1px solid rgba(255, 92, 51, 0.25)',
        background: 'linear-gradient(145deg, #1a1a1a 0%, #0d0d0d 100%)',
        color: '#e0e0e0'
      }}
    >
      <div
        className="test-card-inner"
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          transformStyle: 'preserve-3d',
          transition: 'transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
        }}
      >
        {/* Front face */}
        <div
          className="test-card-face front"
          style={{
            position: 'absolute',
            inset: 0,
            padding: '24px',
            display: 'grid',
            gridTemplateRows: 'auto 1fr auto',
            gap: '16px',
            borderRadius: '12px',
            backfaceVisibility: 'hidden',
            visibility: isFlipped ? 'hidden' : 'visible',
            pointerEvents: isFlipped ? 'none' : 'auto',
            zIndex: isFlipped ? 5 : 10
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              width: '52px',
              height: '52px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ff5c33',
              background: 'linear-gradient(145deg, #1e1e1e 0%, #121212 100%)',
              borderRadius: '10px',
              border: '1px solid rgba(255,255,255,0.08)'
            }}>
              <svg width="44" height="44" viewBox="0 0 48 48" fill="none">
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
            <div>
              <h3 style={{
                margin: 0,
                fontSize: '1.2rem',
                color: '#e0e0e0',
                borderBottom: '1px solid #ff5c33',
                paddingBottom: '6px'
              }}>
                {module.title}
              </h3>
            </div>
          </div>
          <div>
            <p style={{
              fontSize: '0.9rem',
              color: '#888888',
              lineHeight: '1.4'
            }}>
              {module.oneLiner}
            </p>
          </div>
          <div></div>
        </div>

        {/* Back face */}
        <div
          className="test-card-face back"
          style={{
            position: 'absolute',
            inset: 0,
            padding: '24px',
            display: 'grid',
            gridTemplateRows: 'auto 1fr auto',
            gap: '16px',
            borderRadius: '12px',
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            visibility: isFlipped ? 'visible' : 'hidden',
            pointerEvents: isFlipped ? 'auto' : 'none',
            zIndex: isFlipped ? 10 : 5,
            background: 'linear-gradient(145deg, #141414 0%, #0f0f0f 100%)'
          }}
        >
          <div>
            <h4 style={{ margin: '0 0 16px 0', fontSize: '1rem', color: '#e0e0e0' }}>
              Outcomes
            </h4>
          </div>
          <div>
            <ul style={{ margin: '8px 0 0', padding: 0, color: '#b0b0b0', listStyle: 'none' }}>
              {module.bullets.slice(0, 3).map((b, i) => (
                <li key={i} style={{ marginBottom: '8px', lineHeight: '1.4', fontSize: '0.9rem' }}>
                  <strong style={{ color: '#ff5c33' }}>
                    {b.split(' — ')[0]}
                  </strong> {b.replace(/^[^—]+ — /, '')}
                </li>
              ))}
            </ul>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: 'auto', paddingTop: '12px' }}>
            <button
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#ff5c33',
                border: 'none',
                cursor: 'pointer'
              }}
            />
            <button
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.15)',
                border: 'none',
                cursor: 'pointer'
              }}
            />
            <button
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.15)',
                border: 'none',
                cursor: 'pointer'
              }}
            />
          </div>
        </div>
      </div>

      {/* Debug info */}
      <div style={{
        position: 'absolute',
        top: '10px',
        right: '10px',
        background: 'rgba(0,0,0,0.8)',
        color: '#ff5c33',
        padding: '4px 8px',
        borderRadius: '4px',
        fontSize: '12px',
        fontFamily: 'monospace'
      }}>
        {isFlipped ? 'BACK' : 'FRONT'}
      </div>
    </article>
  );
}