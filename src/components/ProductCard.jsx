import React from 'react';
import { Link } from 'react-router-dom';
import { getUtmUrl } from '../utils/utm';
import { IconArrowRight, IconLock } from './Icons';

export function ProductCard({ product, index = 0, isOpen, onToggle }) {
  const handleCtaClick = (e) => {
    if (!product.link || product.link === '#') {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  const isInternalRoute = product.link && product.link.startsWith('/');
  const productNumber = String(index + 1).padStart(2, '0');

  return (
    <article className={`vtsd-accordion-item ${isOpen ? 'is-open' : ''}`}>
      <button
        type="button"
        className="vtsd-accordion-header"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <div className="vtsd-accordion-header-main">
          <span className="vtsd-product-index">{productNumber}</span>

          <div className="vtsd-accordion-header-left">
            <span className="vtsd-accordion-title">{product.name}</span>

            {product.launchBadge ? (
              <span className="vtsd-accordion-badge-coming-soon is-launch">
                <IconLock size={11} />
                <span>{product.launchBadge}</span>
              </span>
            ) : product.comingSoon ? (
              <span className="vtsd-accordion-badge-coming-soon">
                <span>EM BREVE</span>
              </span>
            ) : (
              <span className="vtsd-accordion-badge-available">DISPONÍVEL</span>
            )}
          </div>
        </div>

        <span className="vtsd-accordion-arrow" aria-hidden="true">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="vtsd-chevron-svg"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </span>
      </button>

      {isOpen && (
        <div className="vtsd-accordion-content">
          <div className="vtsd-accordion-inner">
            {product.summary && (
              <div className="vtsd-product-intro">
                <span className="vtsd-product-intro-label">VISÃO GERAL</span>
                <p className="vtsd-product-summary">{product.summary}</p>
              </div>
            )}

            <div className="vtsd-product-columns">
              {product.learnItems && product.learnItems.length > 0 && (
                <div className="vtsd-product-section">
                  <h4 className="vtsd-product-section-title">
                    {product.learnTitle || `No ${product.name}, você vai aprender:`}
                  </h4>
                  <ul className="vtsd-product-list">
                    {product.learnItems.map((item, idx) => (
                      <li key={idx} className="vtsd-product-list-item">
                        <span className="vtsd-bullet-icon">{String(idx + 1).padStart(2, '0')}</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {product.recommendedItems && product.recommendedItems.length > 0 && (
                <div className="vtsd-product-section">
                  <h4 className="vtsd-product-section-title">
                    {product.recommendedTitle || `Para quem o ${product.name} é recomendado:`}
                  </h4>
                  <ul className="vtsd-product-list">
                    {product.recommendedItems.map((item, idx) => (
                      <li key={idx} className="vtsd-product-list-item">
                        <span className="vtsd-bullet-icon">{String(idx + 1).padStart(2, '0')}</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {product.cta && (
              <div className="vtsd-accordion-cta-wrapper">
                {isInternalRoute ? (
                  <Link
                    to={product.link}
                    className="vtsd-accordion-cta-btn"
                  >
                    <span>{product.cta}</span>
                    <IconArrowRight size={17} />
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
                    {!product.comingSoon && <IconArrowRight size={17} />}
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </article>
  );
}
