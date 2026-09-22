import React from 'react';

export function HeaderProfile({ profile }) {
  if (!profile) return null;

  const profileWebp = "/images/profile.webp";

  return (
    <header className="profile-section">
      <div className="profile-avatar-wrapper">
        <picture>
          <source srcSet={profileWebp} type="image/webp" />
          <img
            src={profile.avatarUrl}
            alt={profile.name}
            className="profile-avatar"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            width="180"
            height="220"
          />
        </picture>
      </div>

      <div className="profile-copy">
        <span className="profile-kicker">JOGO DE CINTURA</span>
        <h1 className="profile-name">{profile.name}</h1>

        <div className="profile-meta">
          <span className="profile-username">{profile.username}</span>
          <span className="profile-meta-label">conteúdo, produtos e formação</span>
        </div>

        {profile.slogan && (
          <p className="profile-slogan">
            {profile.slogan}
          </p>
        )}
      </div>
    </header>
  );
}
