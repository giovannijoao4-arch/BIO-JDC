import React from 'react';
import { IconLock } from './Icons';

const APP_LOGOS = {
  youtube: '/images/youtube-white.png',
  spotify: '/images/spotify-white.png',
  blog: '/images/blog-white.png',
};

export function FreeContent({ sectionConfig, contents }) {
  if (!contents || contents.length === 0) return null;

  return (
    <section className="free-content-vtsd-wrapper" aria-label="Conteúdos Gratuitos">
      <div className="free-content-vtsd-header">
        <span className="home-section-kicker">CONTEÚDO</span>
        <h2 className="free-content-vtsd-title">
          {sectionConfig?.title || "Conteúdos Gratuitos"}
        </h2>
      </div>

      <div className="free-content-vtsd-grid">
        {contents.map((item) => {
          const isComingSoon = Boolean(item.comingSoon);
          const logoSrc = APP_LOGOS[item.id] || item.image;

          return (
            <a
              key={item.id || item.title}
              href="#"
              onClick={(e) => e.preventDefault()}
              className={`free-card-vtsd-item ${isComingSoon ? 'is-coming-soon' : ''}`}
            >
              <div className="free-card-vtsd-image-box">
                <img
                  src={logoSrc}
                  alt={`${item.platform} logo`}
                  className={`free-card-vtsd-app-logo free-card-vtsd-app-logo--${item.id}`}
                  loading="lazy"
                  decoding="async"
                />

                {isComingSoon && (
                  <div className="free-card-vtsd-coming-soon-badge">
                    <IconLock size={11} />
                    <span>EM BREVE</span>
                  </div>
                )}
              </div>

              <div className="free-card-vtsd-meta">
                <div className="free-card-vtsd-label-symbol">
                  <img
                    src={logoSrc}
                    alt=""
                    aria-hidden="true"
                    className="free-card-vtsd-meta-logo"
                  />
                </div>
                <div>
                  <span className="free-card-vtsd-platform">{item.platform}</span>
                  <h3 className="free-card-vtsd-title">{item.title}</h3>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
