import React, { useState } from 'react';
import { ProductCard } from './ProductCard';

export function ProductShowcase({ sectionConfig, products }) {
  if (!products || products.length === 0) return null;

  // Manage single open accordion item so opening one closes any previously open item
  const [openProductId, setOpenProductId] = useState(null);

  const handleToggle = (id) => {
    setOpenProductId((prevId) => (prevId === id ? null : id));
  };

  return (
    <section className="products-showcase-vtsd-section" aria-label="Vitrine de Produtos">
      <div className="section-header" style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h2 className="section-title" style={{ fontSize: '1.75rem', fontWeight: 800, color: '#ffffff' }}>
          {sectionConfig?.title || "Conheça os produtos que eu criei para te ajudar:"}
        </h2>
        {sectionConfig?.subtitle && (
          <p className="section-subtitle" style={{ fontSize: '1rem', marginTop: '0.4rem', color: 'var(--text-secondary)' }}>
            {sectionConfig.subtitle}
          </p>
        )}
      </div>

      <div className="vtsd-accordion-list">
        {products.map((product) => (
          <ProductCard
            key={product.id || product.name}
            product={product}
            isOpen={openProductId === product.id}
            onToggle={() => handleToggle(product.id)}
          />
        ))}
      </div>
    </section>
  );
}
