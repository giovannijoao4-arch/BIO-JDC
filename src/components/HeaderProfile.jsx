import React from 'react';

export function HeaderProfile({ profile }) {
  if (!profile) return null;

  return (
    <header className="profile-section">
      <div className="profile-avatar-wrapper">
        <img
          src={profile.avatarUrl}
          alt={profile.name}
          className="profile-avatar"
          loading="eager"
        />
      </div>

      <h1 className="profile-name">{profile.name}</h1>
      <span className="profile-username">{profile.username}</span>

      {profile.slogan && (
        <p className="profile-slogan">
          "{profile.slogan}"
        </p>
      )}

      {/* Social buttons removed per user instructions */}
    </header>
  );
}
