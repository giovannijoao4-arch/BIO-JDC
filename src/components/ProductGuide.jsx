import React from 'react';
import { IconArrowRight } from './Icons';
import { getUtmUrl } from '../utils/utm';

export function ProductGuide({ guide }) {
  if (!guide) return null;

  return (
    <section className="product-guide-vtsd-section" aria-label="Orientação de Escolha">
      <h3 className="guide-vtsd-title">{guide.title || "Não sabe por onde começar?"}</h3>
      
      {guide.text && <p className="guide-vtsd-text">{guide.text}</p>}

      <a
        href={guide.link && guide.link !== '#' ? getUtmUrl(guide.link) : '#'}
        target="_blank"
        rel="noopener noreferrer"
        className="guide-vtsd-btn"
      >
        <span>{guide.ctaText || "DESCOBRIR POR ONDE COMEÇAR"}</span>
        <IconArrowRight size={15} />
      </a>
    </section>
  );
}
