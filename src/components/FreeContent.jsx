import React from 'react';
import { IconYoutube, IconSpotify, IconBlog, IconLock, IconCompass } from './Icons';

export function FreeContent({ sectionConfig, contents }) {
  if (!contents || contents.length === 0) return null;

  const renderIcon = (iconName) => {
    switch (iconName?.toLowerCase()) {
      case 'youtube':
        return <IconYoutube size={26} />;
      case 'spotify':
        return <IconSpotify size={26} />;
      case 'blog':
        return <IconBlog size={26} />;
      default:
        return <IconCompass size={26} />;
    }
  };

  return (
    <section className="free-content-vtsd-wrapper" aria-label="Conteúdos Gratuitos">
      <h2 className="free-content-vtsd-title">
        {sectionConfig?.title || "Conteúdos Gratuitos"}
      </h2>

      <div className="free-content-vtsd-grid">
        {contents.map((item) => {
          const isComingSoon = Boolean(item.comingSoon);

          return (
            <a
              key={item.id || item.title}
              href="#"
              onClick={(e) => e.preventDefault()}
              className={`free-card-vtsd-item ${isComingSoon ? 'is-coming-soon' : ''}`}
            >
              <div className="free-card-vtsd-image-box">
                <img
                  src={item.image}
                  alt={item.title}
                  className="free-card-vtsd-img"
                  loading="lazy"
                />

                {isComingSoon && (
                  <div className="free-card-vtsd-coming-soon-badge">
                    <IconLock size={12} />
                    <span>EM BREVE</span>
                  </div>
                )}
              </div>

              {/* Display ONLY the symbol/icon below each card (no text name) */}
              <div className="free-card-vtsd-label-symbol">
                {renderIcon(item.icon)}
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
