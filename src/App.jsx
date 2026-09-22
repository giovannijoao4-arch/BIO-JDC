import React from 'react';
import './index.css';

export default function App() {
  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'grid',
        placeItems: 'center',
        padding: '2rem',
        background: '#050607',
        color: '#f1ede4',
        fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
        textAlign: 'center'
      }}
    >
      <div style={{ maxWidth: '560px' }}>
        <p
          style={{
            marginBottom: '1rem',
            color: '#b99a5a',
            fontSize: '0.72rem',
            fontWeight: 800,
            letterSpacing: '0.16em'
          }}
        >
          JOGO DE CINTURA
        </p>

        <h1
          style={{
            fontSize: 'clamp(2rem, 6vw, 4rem)',
            lineHeight: 1,
            letterSpacing: '-0.05em',
            marginBottom: '1rem'
          }}
        >
          Site temporariamente indisponível.
        </h1>

        <p
          style={{
            color: '#aaa79f',
            fontSize: '1rem',
            lineHeight: 1.65
          }}
        >
          Estamos fazendo ajustes. Volte em breve.
        </p>
      </div>
    </main>
  );
}
