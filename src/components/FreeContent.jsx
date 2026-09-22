import React from 'react';
import { IconYoutube, IconSpotify, IconBlog, IconLock, IconCompass } from './Icons';

export function FreeContent({ sectionConfig, contents }) {
  if (!contents || contents.length === 0) return null;

  const renderIcon = (iconName) => {
    switch (iconName?.toLowerCase()) {
      case 'youtube':
        return <IconYoutube size={21} />;
      case 'spotify':
        return <IconSpotify size={21} />;
      case 'blog':
        return <IconBlog size={21} />;
      default:
        return <IconCompass size={21} />;
    }
  };

  const getWebpUrl = (jpgUrl) => {
    if (!jpgUrl) return '';
    return jpgUrl.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  };

  return (
    <section className="free-content-vtsd-wrapper" aria-label="Conteúdos Gratuitos">
      <div className="free-content-vtsd-header">
        <span className="home-section-kicker">04 / CONTEÚDO</span>
        <h2 className="free-content-vtsd-title">
          {sectionConfig?.title || "Conteúdos Gratuitos"}
        </h2>
      </div>

      <div className="free-content-vtsd-grid">
        {contents.map((item, index) => {
          const isComingSoon = Boolean(item.comingSoon);
          const webpUrl = getWebpUrl(item.image);

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

                <span className="free-card-vtsd-number">{String(index + 1).padStart(2, '0')}</span>

                {isComingSoon && (
                  <div className="free-card-vtsd-coming-soon-badge">
                    <IconLock size={11} />
                    <span>EM BREVE</span>
                  </div>
                )}
              </div>

              <div className="free-card-vtsd-meta">
                <div className="free-card-vtsd-label-symbol">
                  {renderIcon(item.icon)}
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
