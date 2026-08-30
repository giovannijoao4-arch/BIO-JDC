import React from 'react';
import { IconArrowRight } from './Icons';
import { getUtmUrl } from '../utils/utm';

export function ContactSection({ contact }) {
  if (!contact) return null;

  return (
    <section className="contact-vtsd-section" aria-label="Atendimento Comercial e Suporte">
      <h2 className="contact-vtsd-title">
        {contact.title || "Quer falar comigo ou com minha equipe?"}
      </h2>

      {contact.subtitle && (
        <p className="contact-vtsd-subtitle">{contact.subtitle}</p>
      )}

      <a
        href={contact.link && contact.link !== '#' ? getUtmUrl(contact.link) : '#'}
        target="_blank"
        rel="noopener noreferrer"
        className="contact-vtsd-green-button"
      >
        <span>{contact.ctaText || "FALAR COM A EQUIPE COMERCIAL"}</span>
        <IconArrowRight size={18} />
      </a>
    </section>
  );
}
