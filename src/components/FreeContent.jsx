import React from 'react';
import { IconLock } from './Icons';

const APP_LOGOS = {
  youtube: '/images/youtube-white.png',
  spotify: '/images/spotify-white.png',
  blog: '/images/blog-white.png',
};

export function FreeContent({ sectionConfig, contents }) {
  if (!contents || contents.length === 0) return null;

  const getWebpUrl = (jpgUrl) => {
    if (!jpgUrl) return '';
    return jpgUrl.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  };

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
          const webpUrl = getWebpUrl(item.image);
          const logoSrc = APP_LOGOS[item.id];

          return (
            <a
              key={item.id || item.title}
              href="#"
              onClick={(e) => e.preventDefault()}
              className={`free-card-vtsd-item ${isComingSoon ? 'is-coming-soon' : ''}`}
            >
              <div className="free-card-vtsd-image-box">
                <picture>
                  {webpUrl && <source srcSet={webpUrl} type="image/webp" />}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="free-card-vtsd-img"
                    loading="lazy"
                    decoding="async"
                    width="480"
                    height="320"
                  />
                </picture>

                {isComingSoon && (
                  <div className="free-card-vtsd-coming-soon-badge">
                    <IconLock size={11} />
                    <span>EM BREVE</span>
                  </div>
                )}
              </div>

              <div className="free-card-vtsd-meta">
                <div className="free-card-vtsd-label-symbol">
                  {logoSrc && (
                    <img
                      src={logoSrc}
                      alt=""
                      aria-hidden="true"
                      className={`free-card-vtsd-meta-logo free-card-vtsd-meta-logo--${item.id}`}
                    />
                  )}
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
