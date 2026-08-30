import React from 'react';
import { getUtmUrl } from '../utils/utm';

export function Ecosystem({ config }) {
  if (!config || !config.enabled || !config.items || config.items.length === 0) {
    return null;
  }

  const partner = config.items[0];

  return (
    <section className="partnerships-vtsd-section" aria-label="Parcerias">
      <h2 className="partnerships-vtsd-title">{config.title || "Parcerias"}</h2>

      <div className="partnership-vtsd-container">
        {partner?.image && (
          <a
            href={partner?.link && partner.link !== '#' ? getUtmUrl(partner.link) : '#'}
            onClick={(e) => {
              if (!partner?.link || partner.link === '#') e.preventDefault();
            }}
            target={partner?.link && partner.link !== '#' ? '_blank' : '_self'}
            rel="noopener noreferrer"
            className="partnership-banner-box"
          >
            <img
              src={partner.image}
              alt={partner.name || "Banner Parceiro"}
              className="partnership-banner-img"
              loading="lazy"
            />
          </a>
        )}

        {/* Button removed per user instructions */}
      </div>
    </section>
  );
}
