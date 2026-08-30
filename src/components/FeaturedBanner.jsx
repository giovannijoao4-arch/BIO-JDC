import React from 'react';

export function FeaturedBanner({ banner }) {
  if (!banner || !banner.show) return null;

  const mobileImage = banner.mobileBgImage || banner.bgImage;

  return (
    <section className="featured-banner-vtsd-wrapper" aria-label="Banner em Destaque">
      <div className="featured-banner-vtsd-pure-image">
        <picture>
          <source media="(max-width: 600px)" srcSet={mobileImage} />
          <img
            src={banner.bgImage}
            alt={banner.title || "Banner em Destaque"}
            className="banner-vtsd-pure-img"
            loading="eager"
          />
        </picture>
      </div>
    </section>
  );
}
