import React, { useState } from 'react';
import { ProductCard } from './ProductCard';

export function ProductShowcase({ sectionConfig, products }) {
  if (!products || products.length === 0) return null;

  const [openProductId, setOpenProductId] = useState(null);

  const handleToggle = (id) => {
    setOpenProductId((prevId) => (prevId === id ? null : id));
  };

  return (
    <section className="products-showcase-vtsd-section" aria-label="Vitrine de Produtos">
      <div className="products-showcase-header">
        <div>
          <span className="home-section-kicker">CATÁLOGO JDC</span>
          <h2 className="products-showcase-title">
            {sectionConfig?.title || "Produtos e formações"}
          </h2>
        </div>

        {sectionConfig?.subtitle && (
          <p className="products-showcase-subtitle">
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
