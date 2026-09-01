import React from 'react';
import { Link } from 'react-router-dom';
import { getUtmUrl } from '../utils/utm';
import { IconArrowRight, IconLock } from './Icons';

export function ProductCard({ product, isOpen, onToggle }) {
  const handleCtaClick = (e) => {
    if (!product.link || product.link === '#') {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  const isInternalRoute = product.link && product.link.startsWith('/');

  return (
    <div className={`vtsd-accordion-item ${isOpen ? 'is-open' : ''}`}>
      {/* ACCORDION HEADER BUTTON */}
      <button
        type="button"
        className="vtsd-accordion-header"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <div className="vtsd-accordion-header-left">
          <span className="vtsd-accordion-title">{product.name}</span>
          {product.launchBadge ? (
            <span className="vtsd-accordion-badge-coming-soon" style={{ background: 'rgba(212, 167, 44, 0.12)', color: '#D4A72C', border: '1px solid rgba(212, 167, 44, 0.3)' }}>
              <IconLock size={12} />
              <span>{product.launchBadge}</span>
            </span>
          ) : product.comingSoon ? (
            <span className="vtsd-accordion-badge-coming-soon">
              <IconLock size={12} />
              <span>EM BREVE</span>
            </span>
          ) : null}
        </div>

        <span className="vtsd-accordion-arrow" aria-hidden="true">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="vtsd-chevron-svg"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </span>
      </button>

      {/* ACCORDION EXPANDABLE BODY */}
      {isOpen && (
        <div className="vtsd-accordion-content">
          <div className="vtsd-accordion-inner">
            {/* SUMMARY */}
            {product.summary && (
              <p className="vtsd-product-summary">{product.summary}</p>
            )}

            {/* LEARN ITEMS */}
            {product.learnItems && product.learnItems.length > 0 && (
              <div className="vtsd-product-section">
                <h4 className="vtsd-product-section-title">
                  {product.learnTitle || `No ${product.name}, você vai aprender:`}
                </h4>
                <ul className="vtsd-product-list">
                  {product.learnItems.map((item, idx) => (
                    <li key={idx} className="vtsd-product-list-item">
                      <span className="vtsd-bullet-icon">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* RECOMMENDED ITEMS */}
            {product.recommendedItems && product.recommendedItems.length > 0 && (
              <div className="vtsd-product-section">
                <h4 className="vtsd-product-section-title">
                  {product.recommendedTitle || `Para quem o ${product.name} é recomendado:`}
                </h4>
                <ul className="vtsd-product-list">
                  {product.recommendedItems.map((item, idx) => (
                    <li key={idx} className="vtsd-product-list-item">
                      <span className="vtsd-bullet-icon">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* CTA BUTTON */}
            {product.cta && (
              <div className="vtsd-accordion-cta-wrapper">
                {isInternalRoute ? (
                  <Link
                    to={product.link}
                    className="vtsd-accordion-cta-btn"
                  >
                    <span>{product.cta}</span>
                    <IconArrowRight size={18} />
                  </Link>
                ) : (
                  <a
                    href={product.link && product.link !== '#' ? getUtmUrl(product.link) : '#'}
                    onClick={handleCtaClick}
                    target={product.link && product.link !== '#' ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    className={`vtsd-accordion-cta-btn ${product.comingSoon ? 'is-coming-soon-btn' : ''}`}
                  >
                    <span>{product.cta}</span>
                    {!product.comingSoon && <IconArrowRight size={18} />}
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
