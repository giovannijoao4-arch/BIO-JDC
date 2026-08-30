import React, { useState } from 'react';

export function Footer({ footer }) {
  const [modalType, setModalType] = useState(null);

  if (!footer) return null;

  return (
    <>
      <footer className="site-footer-vtsd">
        <p className="footer-vtsd-copyright">{footer.copyright}</p>

        <div className="footer-vtsd-links">
          <button
            onClick={() => setModalType('privacy')}
            className="footer-vtsd-link"
          >
            Política de Privacidade
          </button>
          <button
            onClick={() => setModalType('terms')}
            className="footer-vtsd-link"
          >
            Termos de Uso
          </button>
        </div>
      </footer>

      {/* Modal for Privacy Policy & Terms of Use */}
      {modalType && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0,0,0,0.85)',
            backdropFilter: 'blur(6px)',
            zIndex: 100,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1rem',
          }}
          onClick={() => setModalType(null)}
        >
          <div
            style={{
              background: 'var(--bg-surface)',
              border: '1px solid var(--border-medium)',
              borderRadius: 'var(--radius-lg)',
              maxWidth: '540px',
              width: '100%',
              maxHeight: '80vh',
              overflowY: 'auto',
              padding: '1.5rem',
              color: 'var(--text-primary)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700 }}>
                {modalType === 'privacy' ? 'Política de Privacidade' : 'Termos de Uso'}
              </h3>
              <button
                onClick={() => setModalType(null)}
                style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', padding: '0.2rem 0.5rem' }}
              >
                ✕
              </button>
            </div>

            <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              {modalType === 'privacy' ? (
                <>
                  <p>Este site respeita a sua privacidade. Todas as informações eventualmente coletadas através de formulários de contato ou pixels de navegação são utilizadas estritamente para personalizar sua experiência e apresentar nossos treinamentos e serviços.</p>
                  <br />
                  <p>Nenhum dado é compartilhado com terceiros não autorizados. Para solicitar a exclusão de qualquer informação, entre em contato através de nossa equipe oficial de suporte.</p>
                </>
              ) : (
                <>
                  <p>Ao acessar esta página e adquirir nossos conteúdos ou formações, você concorda com os termos de uso e condições estabelecidas por Closy Company.</p>
                  <br />
                  <p>Todo o material disponibilizado (vídeos, textos, metodologias) é protegido por direitos autorais e de propriedade intelectual. O compartilhamento não autorizado de acessos ou conteúdos sujeita o infrator às medidas legais cabíveis.</p>
                </>
              )}
            </div>

            <button
              onClick={() => setModalType(null)}
              style={{
                marginTop: '1.5rem',
                width: '100%',
                padding: '0.65rem',
                borderRadius: 'var(--radius-md)',
                background: 'var(--text-primary)',
                color: 'var(--bg-main)',
                fontWeight: 700,
                fontSize: '0.8125rem'
              }}
            >
              FECHAR
            </button>
          </div>
        </div>
      )}
    </>
  );
}
