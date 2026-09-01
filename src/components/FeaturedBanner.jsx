import React from 'react';

export function FeaturedBanner({ banner }) {
  if (!banner || !banner.show) return null;

  const desktopWebp = "/images/featured_banner.webp";
  const mobileWebp = "/images/featured_banner_mobile.webp";

  return (
    <section className="featured-banner-vtsd-wrapper" aria-label="Banner em Destaque">
      <div className="featured-banner-vtsd-pure-image">
        <picture>
          <source media="(max-width: 600px)" srcSet={mobileWebp} type="image/webp" />
          <source media="(min-width: 601px)" srcSet={desktopWebp} type="image/webp" />
          <img
            src={banner.bgImage}
            alt={banner.title || "Banner em Destaque"}
            className="banner-vtsd-pure-img"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            width="1200"
            height="400"
          />
        </picture>
      </div>
    </section>
  );
}
