import React, { useState } from 'react';
import '../styles/xeque-social.css';

export function XequeSocial() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaqIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const faqs = [
    {
      q: "O Xeque Social é um curso?",
      a: "Não. É um guia prático criado para ser consumido de forma direta e aplicado às situações do dia a dia."
    },
    {
      q: "Preciso ser extrovertido?",
      a: "Não. O objetivo não é ensinar você a falar mais. É ajudar você a entender melhor o que está acontecendo antes de responder."
    },
    {
      q: "Isso ensina manipulação?",
      a: "Não. O Xeque Social é sobre leitura, autocontrole, comunicação e posicionamento. Não é sobre controlar outras pessoas."
    },
    {
      q: "Quando recebo acesso?",
      a: "Após a confirmação do pagamento, o acesso é liberado conforme o processo de entrega configurado no checkout."
    },
    {
      q: "O acesso expira?",
      a: "Não. O acesso ao Xeque Social é vitalício."
    },
    {
      q: "Existe garantia?",
      a: "Sim. Você tem 7 dias de garantia para avaliar o material."
    }
  ];

  const HOTMART_CHECKOUT_URL = "https://pay.hotmart.com/D107390083H?checkoutMode=10";

  return (
    <div className="xeque-social-page">
      
      {/* ==================================================================
          1. HERO DESKTOP (PREENCHE 100% DA PRIMEIRA TELA - 100SVH)
          ================================================================== */}
      <section className="xeque-hero-desktop">
        <img
          className="xeque-hero-desktop-image"
          src="/images/xeque_hero_desktop.jpg"
          alt="Xeque Social Guia Prático - Livro, Celular e Peças de Xadrez"
          loading="eager"
        />

        <div className="xeque-hero-copy">
          <div className="xeque-hero-brand-tag">
            <span>♟ XEQUE SOCIAL</span>
          </div>

          <h1 className="xeque-hero-left-headline">
            <span className="xeque-headline-highlight">Pare de reagir no automático.</span>
            Aprenda a <span className="xeque-gold-highlight">ler a intenção</span> antes de decidir o próximo movimento.
          </h1>

          <p className="xeque-hero-left-subheadline">
            Um guia prático para entender o que realmente está acontecendo em uma conversa antes de responder por impulso, se explicar demais ou perceber tarde demais o que a outra pessoa estava fazendo.
          </p>

          <div className="xeque-hero-micro-cards-row">
            <div className="xeque-hero-mini-card">
              <span className="xeque-mini-card-icon">✓</span>
              <span>Leia melhor o que está por trás das palavras</span>
            </div>
            <div className="xeque-hero-mini-card">
              <span className="xeque-mini-card-icon">✓</span>
              <span>Saiba quando responder, recuar ou impor um limite</span>
            </div>
          </div>

          <a href={HOTMART_CHECKOUT_URL} className="xeque-cta-btn">
            <span>QUERO ENXERGAR O JOGO</span>
          </a>
        </div>
      </section>

      {/* ==================================================================
          1B. HERO MOBILE (EXCLUSIVELY FOR MAX-WIDTH: 768px)
          ================================================================== */}
      <section className="xeque-hero-mobile">
        <div className="xeque-mobile-visual">
          <img
            src="/images/xeque_hero_mobile.jpg"
            alt="Xeque Social"
            loading="eager"
          />
          <div className="xeque-mobile-visual-fade" aria-hidden="true" />
        </div>

        <div className="xeque-mobile-copy-overlay">
          <div className="xeque-hero-brand-tag">
            <span>♟ XEQUE SOCIAL</span>
          </div>

          <h1 className="xeque-hero-left-headline">
            <span className="xeque-headline-highlight">Pare de reagir no automático.</span>
            Aprenda a <span className="xeque-gold-highlight">ler a intenção</span> antes de decidir o próximo movimento.
          </h1>

          <p className="xeque-hero-left-subheadline">
            Um guia prático para entender o que realmente está acontecendo em uma conversa antes de responder por impulso, se explicar demais ou perceber tarde demais o que a outra pessoa estava fazendo.
          </p>

          <div className="xeque-hero-micro-cards-row">
            <div className="xeque-hero-mini-card">
              <span className="xeque-mini-card-icon">✓</span>
              <span>Leia melhor o que está por trás das palavras</span>
            </div>
            <div className="xeque-hero-mini-card">
              <span className="xeque-mini-card-icon">✓</span>
              <span>Saiba quando responder, recuar ou impor um limite</span>
            </div>
          </div>

          <a href={HOTMART_CHECKOUT_URL} className="xeque-cta-btn">
            <span>QUERO ENXERGAR O JOGO</span>
          </a>
        </div>
      </section>

      {/* ==================================================================
          2. MANIFESTO / PRINCÍPIO DO JOGO SOCIAL
          ================================================================== */}
      <section className="xeque-section xeque-manifesto-section">
        <div className="xeque-container-editorial">
          <div className="xeque-manifesto-badge">
            <span>♟ O PRINCÍPIO DO JOGO SOCIAL</span>
          </div>
          <h2 className="xeque-manifesto-quote">
            "O problema não é não saber o que dizer.<br className="xeque-desktop-br" />
            O problema é perceber o jogo quando o movimento já aconteceu."
          </h2>
          <p className="xeque-truth-highlight-quote" style={{ marginTop: '1.25rem', paddingTop: '1.25rem' }}>
            Quem aprende a ler a situação antes de reagir deixa de ser empurrado pela conversa e começa a escolher o próprio movimento.
          </p>
          <div className="xeque-editorial-divider" aria-hidden="true" />
        </div>
      </section>

      {/* ==================================================================
          3. IDENTIFICAÇÃO DA DOR
          ================================================================== */}
      <section className="xeque-section xeque-problem-section">
        <div className="xeque-container">
          <h2 className="xeque-headline-medium">
            Se alguma dessas situações parece familiar, provavelmente o problema não é falta de comunicação.
          </h2>
          <p className="xeque-subheadline">
            É que você está tentando responder antes de entender o que realmente está acontecendo.
          </p>

          <div className="xeque-problem-editorial-list">
            <div className="xeque-problem-editorial-item">
              <span className="xeque-problem-icon-small">✕</span>
              <p className="xeque-problem-editorial-text">
                Você percebe a intenção da pessoa só depois que a conversa termina, e passa horas pensando no que deveria ter dito.
              </p>
            </div>

            <div className="xeque-problem-editorial-item">
              <span className="xeque-problem-icon-small">✕</span>
              <p className="xeque-problem-editorial-text">
                Você entra na defensiva e começa a se explicar, mesmo quando não fez nada que precisava justificar.
              </p>
            </div>

            <div className="xeque-problem-editorial-item">
              <span className="xeque-problem-icon-small">✕</span>
              <p className="xeque-problem-editorial-text">
                Você aceita um pedido, pressão ou provocação no impulso e se arrepende minutos depois.
              </p>
            </div>

            <div className="xeque-problem-editorial-item">
              <span className="xeque-problem-icon-small">✕</span>
              <p className="xeque-problem-editorial-text">
                Você sente que precisa impor um limite, mas trava porque não sabe se está exagerando ou sendo manipulado.
              </p>
            </div>

            <div className="xeque-problem-editorial-item">
              <span className="xeque-problem-icon-small">✕</span>
              <p className="xeque-problem-editorial-text">
                Você percebe que o clima mudou, mas não consegue identificar exatamente o que a outra pessoa fez.
              </p>
            </div>

            <div className="xeque-problem-editorial-item">
              <span className="xeque-problem-icon-small">✕</span>
              <p className="xeque-problem-editorial-text">
                Você acaba assumindo culpa por conflitos que começaram com pressão, inversão ou provocação do outro lado.
              </p>
            </div>
          </div>

          <div className="xeque-problem-closing-box">
            <p>
              Você não precisa decorar respostas melhores.<br />
              <strong className="xeque-gold-text">Precisa aprender a identificar o movimento antes de escolher a resposta.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* ==================================================================
          3B. NOVO CTA ESTRATÉGICO DE TRANSIÇÃO (DIRETO AO CHECKOUT HOTMART)
          ================================================================== */}
      <section className="xeque-section xeque-mid-cta-section">
        <div className="xeque-container-editorial">
          <p className="xeque-mid-cta-top-text">
            Se você se reconheceu aqui, não precisa continuar reagindo no escuro.
          </p>
          <p className="xeque-mid-cta-subtext">
            Aprenda a identificar o que está acontecendo antes de decidir como responder.
          </p>

          <a href={HOTMART_CHECKOUT_URL} className="xeque-cta-btn xeque-mid-cta-btn">
            <span>QUERO ENXERGAR O JOGO</span>
          </a>
        </div>
      </section>

      {/* ==================================================================
          4. QUEBRA DE CRENÇA: "A VERDADE"
          ================================================================== */}
      <section className="xeque-section xeque-truth-section xeque-section-alt">
        <div className="xeque-container-editorial">
          <span className="xeque-tag-badge">A VERDADE</span>
          <h2 className="xeque-headline-medium">Seu problema nunca foi falta de lábia.</h2>
          
          <div className="xeque-truth-body-text">
            <p>Ser rápido nas palavras não significa entender pessoas.</p>
            <p>
              Muita gente fala bem e mesmo assim entra em discussões que não precisava entrar, aceita pressão que deveria cortar e percebe a intenção do outro tarde demais.
            </p>
            <p>Porque comunicação não começa na resposta. <strong>Começa na leitura.</strong></p>
          </div>

          <p className="xeque-truth-highlight-quote">
            "Você está tentando jogar a próxima peça sem olhar o tabuleiro."
          </p>
        </div>
      </section>

      {/* ==================================================================
          5. REVELAÇÃO DO PRODUTO (O MÉTODO)
          ================================================================== */}
      <section className="xeque-section">
        <div className="xeque-container">
          <div className="xeque-mechanism-split">
            <div className="xeque-mechanism-copy">
              <span className="xeque-tag-badge">O MÉTODO</span>
              <h2 className="xeque-headline-medium" style={{ textAlign: 'left' }}>
                XEQUE SOCIAL
              </h2>
              <p className="xeque-subheadline" style={{ textAlign: 'left', marginTop: '1rem' }}>
                Xeque Social é um guia prático de leitura social e posicionamento.
              </p>
              <p className="xeque-subheadline" style={{ textAlign: 'left', marginTop: '0.75rem' }}>
                Ele foi criado para te ajudar a desacelerar a reação, separar o que aconteceu da emoção do momento e identificar o que a outra pessoa realmente está tentando conseguir na interação.
              </p>
              <div className="xeque-method-bullet-list">
                <p>• Não é um livro de frases prontas.</p>
                <p>• Não é um manual para manipular pessoas.</p>
                <p>• É um sistema para você parar de responder no escuro.</p>
              </div>

              <div className="xeque-method-highlight-steps">
                <span>Primeiro você lê.</span>
                <span>Depois você decide.</span>
                <span className="xeque-gold-text">Só então você move.</span>
              </div>
            </div>

            <div>
              <img
                src="/images/xeque_social.jpg"
                alt="Xeque Social Produto"
                className="xeque-mechanism-img"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================================
          6. COMPARAÇÃO SEM / COM
          ================================================================== */}
      <section className="xeque-section xeque-comparison-section">
        <div className="xeque-container">
          <h2 className="xeque-headline-medium">A diferença entre reagir e enxergar</h2>

          <div className="xeque-comparison-grid-redesigned">
            {/* SEM O XEQUE SOCIAL */}
            <div className="xeque-comp-card sem">
              <div className="xeque-comp-header-pill red">
                <span>Sem o Xeque Social</span>
              </div>
              <div className="xeque-comp-body">
                <div className="xeque-comp-row-redesigned">
                  <span className="xeque-comp-icon red">✕</span>
                  <span>Responde no calor do momento.</span>
                </div>
                <div className="xeque-comp-row-redesigned">
                  <span className="xeque-comp-icon red">✕</span>
                  <span>Se explica além do necessário.</span>
                </div>
                <div className="xeque-comp-row-redesigned">
                  <span className="xeque-comp-icon red">✕</span>
                  <span>Percebe provocações só depois.</span>
                </div>
                <div className="xeque-comp-row-redesigned">
                  <span className="xeque-comp-icon red">✕</span>
                  <span>Confunde culpa com responsabilidade.</span>
                </div>
                <div className="xeque-comp-row-redesigned">
                  <span className="xeque-comp-icon red">✕</span>
                  <span>Deixa a outra pessoa decidir o ritmo da conversa.</span>
                </div>
              </div>
            </div>

            {/* COM O XEQUE SOCIAL */}
            <div className="xeque-comp-card com">
              <div className="xeque-comp-header-pill green">
                <span>Com o Xeque Social:</span>
              </div>
              <div className="xeque-comp-body">
                <div className="xeque-comp-row-redesigned">
                  <span className="xeque-comp-icon green">✓</span>
                  <span>Identifica o que está acontecendo antes de responder.</span>
                </div>
                <div className="xeque-comp-row-redesigned">
                  <span className="xeque-comp-icon green">✓</span>
                  <span>Compra tempo para pensar sem parecer inseguro.</span>
                </div>
                <div className="xeque-comp-row-redesigned">
                  <span className="xeque-comp-icon green">✓</span>
                  <span>Reconhece pressão, provocação e inversão mais cedo.</span>
                </div>
                <div className="xeque-comp-row-redesigned">
                  <span className="xeque-comp-icon green">✓</span>
                  <span>Separa fatos do que a situação fez você sentir.</span>
                </div>
                <div className="xeque-comp-row-redesigned">
                  <span className="xeque-comp-icon green">✓</span>
                  <span>Escolhe quando responder, impor limite, recuar ou simplesmente não entrar no jogo.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================================
          7. O QUE VOCÊ VAI APRENDER (PILARES)
          ================================================================== */}
      <section className="xeque-section">
        <div className="xeque-container">
          <h2 className="xeque-headline-medium">O que muda quando você começa a enxergar o jogo</h2>
          <p className="xeque-subheadline">
            Quatro habilidades práticas para deixar de responder no automático.
          </p>

          <div className="xeque-pillars-vertical-list">
            <div className="xeque-pillar-item">
              <span className="xeque-pillar-number">01</span>
              <div className="xeque-pillar-content">
                <h3 className="xeque-pillar-title">LEITURA DE PADRÕES</h3>
                <p className="xeque-pillar-desc">
                  Aprenda a identificar sinais de provocação, pressão, culpa, vitimismo, rejeição e invasão de limites antes de entrar no modo defensivo.
                </p>
              </div>
            </div>

            <div className="xeque-pillar-item">
              <span className="xeque-pillar-number">02</span>
              <div className="xeque-pillar-content">
                <h3 className="xeque-pillar-title">FATO X EMOÇÃO</h3>
                <p className="xeque-pillar-desc">
                  Entenda como separar o que realmente aconteceu da interpretação que surge no calor do momento.
                </p>
              </div>
            </div>

            <div className="xeque-pillar-item">
              <span className="xeque-pillar-number">03</span>
              <div className="xeque-pillar-content">
                <h3 className="xeque-pillar-title">PAUSA ANTES DA REAÇÃO</h3>
                <p className="xeque-pillar-desc">
                  Aprenda a perceber os próprios gatilhos antes que eles decidam sua resposta por você.
                </p>
              </div>
            </div>

            <div className="xeque-pillar-item">
              <span className="xeque-pillar-number">04</span>
              <div className="xeque-pillar-content">
                <h3 className="xeque-pillar-title">RESPOSTA CONSCIENTE</h3>
                <p className="xeque-pillar-desc">
                  Estruture respostas mais firmes, curtas e claras sem precisar ser agressivo, passivo ou ficar se justificando.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================================
          8. TRANSFORMAÇÃO
          ================================================================== */}
      <section className="xeque-section xeque-section-alt">
        <div className="xeque-container-editorial">
          <h2 className="xeque-headline-medium">
            Você não precisa vencer toda conversa. Precisa parar de perder posição sem perceber.
          </h2>
          <p className="xeque-subheadline" style={{ marginTop: '1.25rem' }}>
            O objetivo do Xeque Social não é transformar você na pessoa que sempre tem uma resposta pronta. É fazer com que você perceba mais cedo o que está acontecendo, para poder escolher como agir em vez de apenas reagir.
          </p>
        </div>
      </section>

      {/* ==================================================================
          9. SEÇÃO DE OFERTA (LINK HOTMART MESMA ABA)
          ================================================================== */}
      <section className="xeque-section xeque-offer-section" id="oferta">
        <div className="xeque-container">
          <div className="xeque-offer-main-card">
            
            {/* PRODUCT MOCKUP TOP HEADER */}
            <div className="xeque-offer-card-top">
              <img
                src="/images/xeque_social.jpg"
                alt="Xeque Social Produto"
                className="xeque-offer-card-product-img"
              />
              <h2 className="xeque-offer-card-title">XEQUE SOCIAL</h2>
              <p className="xeque-offer-card-subtitle">
                Comece a enxergar o jogo antes de fazer o próximo movimento.
              </p>
            </div>

            {/* "ACESSO IMEDIATO" BADGE */}
            <div className="xeque-offer-badge-pill">
              <span className="xeque-ticket-icon">⚡</span>
              <span>ACESSO IMEDIATO</span>
            </div>

            {/* HUGE PRICE DISPLAY: R$ 37,00 */}
            <div className="xeque-offer-big-price">
              <span className="xeque-price-currency">R$</span>
              <span className="xeque-price-val">37</span>
              <span className="xeque-price-cents">,00</span>
            </div>

            {/* CHECKLIST */}
            <ul className="xeque-offer-features-list">
              <li>
                <span className="xeque-feat-check">✓</span>
                <span>Guia prático Xeque Social</span>
              </li>
              <li>
                <span className="xeque-feat-check">✓</span>
                <span>Leitura social aplicada ao dia a dia</span>
              </li>
              <li>
                <span className="xeque-feat-check">✓</span>
                <span>Ferramentas para desacelerar reações impulsivas</span>
              </li>
              <li>
                <span className="xeque-feat-check">✓</span>
                <span>Acesso imediato</span>
              </li>
              <li>
                <span className="xeque-feat-check">✓</span>
                <span>Acesso vitalício</span>
              </li>
              <li>
                <span className="xeque-feat-check">✓</span>
                <span>Garantia de 7 dias</span>
              </li>
            </ul>

            {/* MASSIVE GOLD CTA CHECKOUT BUTTON (SAME WINDOW) */}
            <a
              href={HOTMART_CHECKOUT_URL}
              className="xeque-cta-btn xeque-offer-cta-btn"
            >
              <span>QUERO ACESSAR O XEQUE SOCIAL</span>
            </a>

            <p className="xeque-offer-micro-sub">
              Pagamento único. Sem mensalidade.
            </p>

            {/* SECURITY TRUST BADGES */}
            <div className="xeque-offer-trust-footer">
              <span>🔒 Compra 100% Segura</span>
              <span>•</span>
              <span>⚡ Acesso Imediato</span>
              <span>•</span>
              <span>🛡 7 Dias de Garantia</span>
            </div>

          </div>
        </div>
      </section>

      {/* ==================================================================
          10. GARANTIA
          ================================================================== */}
      <section className="xeque-section xeque-guarantee-section">
        <div className="xeque-container-narrow">
          <div className="xeque-guarantee-editorial">
            <svg
              className="xeque-guarantee-svg-icon"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <path d="m9 12 2 2 4-4" />
            </svg>
            <div>
              <h3 className="xeque-guarantee-title">Você tem 7 dias para decidir se isso faz sentido para você.</h3>
              <p className="xeque-guarantee-desc">
                Acesse o Xeque Social, leia o material e veja se ele muda a forma como você enxerga suas próprias conversas. Se dentro de 7 dias você entender que o conteúdo não faz sentido para você, solicite o reembolso dentro do prazo da garantia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================================
          11. AUTORIDADE / POR TRÁS DO XEQUE SOCIAL
          ================================================================== */}
      <section className="xeque-section xeque-author-section xeque-section-alt">
        <div className="xeque-container">
          <div className="xeque-author-editorial">
            <div>
              <img
                src="/images/profile.jpg"
                alt="João Giovanni"
                className="xeque-author-portrait-img"
                loading="lazy"
              />
            </div>

            <div className="xeque-author-info">
              <span className="xeque-author-tag">POR TRÁS DO XEQUE SOCIAL</span>
              <h3 className="xeque-author-name-title">João Giovanni</h3>
              <div className="xeque-author-bio-paragraphs">
                <p>Eu criei o Xeque Social porque percebi uma coisa: a maioria dos problemas sociais não começa porque alguém “não sabe conversar”. Começa porque a pessoa entende tarde demais o que estava acontecendo.</p>
                <p>O Jogo de Cintura nasceu do estudo e da aplicação prática de leitura social, comunicação e posicionamento, com foco em transformar situações confusas em movimentos mais conscientes.</p>
                <p><strong>O Xeque Social é a porta de entrada para essa forma de enxergar relações.</strong></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================================
          12. FAQ ACCORDION
          ================================================================== */}
      <section className="xeque-section">
        <div className="xeque-container-narrow">
          <h2 className="xeque-headline-medium">Perguntas Frequentes</h2>

          <div className="xeque-faq-editorial-list">
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div key={index} className="xeque-faq-editorial-item">
                  <button
                    type="button"
                    className="xeque-faq-editorial-question"
                    onClick={() => toggleFaq(index)}
                  >
                    <span>{faq.q}</span>
                    <span className="xeque-faq-editorial-symbol">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="xeque-faq-editorial-answer">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==================================================================
          13. CTA FINAL (LINK HOTMART MESMA ABA)
          ================================================================== */}
      <section className="xeque-section xeque-section-surface">
        <div className="xeque-container-editorial">
          <h2 className="xeque-headline-medium" style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.3rem)' }}>
            Pare de descobrir o que estava acontecendo depois que a conversa acabou.
          </h2>

          <p className="xeque-subheadline" style={{ marginTop: '0.75rem', color: '#F1F5F9', fontWeight: '700' }}>
            Aprenda a ler primeiro. Depois escolha o movimento.
          </p>

          <div className="xeque-final-price-box">
            <span className="xeque-price-currency">R$</span>
            <span className="xeque-price-val" style={{ fontSize: '3.2rem' }}>37</span>
            <span className="xeque-price-cents">,00</span>
          </div>

          <a
            href={HOTMART_CHECKOUT_URL}
            className="xeque-cta-btn"
            style={{ maxWidth: '440px' }}
          >
            <span>QUERO O XEQUE SOCIAL</span>
          </a>

          <p className="xeque-offer-trust-footer" style={{ marginTop: '1.25rem' }}>
            Acesso imediato • Pagamento único • Garantia de 7 dias
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="xeque-footer-editorial">
        <p>© 2026 Closy Company. Todos os direitos reservados.</p>
      </footer>

    </div>
  );
}
