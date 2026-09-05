import React, { useState } from 'react';
import { useLaunchStatus } from '../hooks/useLaunchStatus';
import { IconChessPawn, IconLock, IconLightning, IconShield, IconCheck } from '../components/Icons';
import '../styles/xeque-social.css';

export function XequeSocial() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const { isLaunched } = useLaunchStatus();

  const toggleFaq = (index) => {
    setOpenFaqIndex((prevIndex) => (prevIndex === index ? null : index));
  };

const faqs = [
    {
      q: "O Xeque Social é um curso?",
      a: "Não. É um livro digital de 180 páginas, dividido em 30 capítulos e 5 partes, com uma prática orientada de 7 dias."
    },
    {
      q: "Preciso ser extrovertido?",
      a: "Não. O método não depende de falar mais. Ele ensina você a observar melhor, separar fato de interpretação e escolher uma resposta consciente."
    },
    {
      q: "Isso ensina manipulação?",
      a: "Não. O Xeque Social não ensina controle, leitura mental ou frases para conduzir pessoas. Ele ensina leitura contextual, responsabilidade pela própria reação e respeito aos limites."
    },
    {
      q: "O Xeque Social substitui o Jogo de Cintura?",
      a: "Não. O Xeque Social é a entrada prática para desenvolver leitura social e uma primeira resposta consciente. O Jogo de Cintura é a formação completa."
    },
    {
      q: "Quando recebo acesso?",
      a: isLaunched
        ? "O acesso é liberado pela Hotmart após a confirmação do pagamento."
        : "As compras abrem em 07/09/2026 às 20h, no horário de Fortaleza."
    },
    {
      q: "O acesso expira?",
      a: "Não. O acesso ao livro digital é vitalício."
    },
    {
      q: "Existe garantia?",
      a: "Sim. Você tem 7 dias, contados a partir da compra, para solicitar o cancelamento dentro das condições informadas no checkout."
    },
    {
      q: "Consigo ler pelo celular?",
      a: "Sim. O livro digital pode ser acessado em celular, tablet ou computador."
    }
  ];
  const galleryItems = [
    {
      title: "Sumário",
      tag: "Estrutura Geral",
      desc: "Visão integrada dos 30 capítulos organizados em 5 partes.",
      src: "/images/xeque-social-sumario.webp",
      alt: "Página de sumário do livro Xeque Social, com 30 capítulos organizados em 5 partes."
    },
    {
      title: "Abertura do Prólogo",
      tag: "Prólogo",
      desc: "A abertura da obra e o intervalo entre o que acontece e a sua resposta.",
      src: "/images/xeque-social-prologo.webp",
      alt: "Página de abertura do prólogo Os segundos antes da reação, do livro Xeque Social."
    },
    {
      title: "Abertura de Capítulo",
      tag: "Leitura da Posição",
      desc: "Abertura editorial de capítulo dedicada à leitura da posição antes da reação.",
      src: "/images/xeque-social-capitulo.webp",
      alt: "Página de abertura de capítulo Leia a posição antes de reagir, do livro Xeque Social."
    },
    {
      title: "Fato x interpretação",
      tag: "Leitura Aplicada",
      desc: "Uma ferramenta visual para separar observação, interpretação e leitura consciente.",
      src: "/images/xeque-social-fato-interpretacao.webp",
      alt: "Página Fato x interpretação do livro Xeque Social, comparando fato, interpretação e leitura consciente."
    },
    {
      title: "Prática Orientada",
      tag: "7 Dias",
      desc: "Uma prática de observação estruturada ao longo de sete dias.",
      src: "/images/xeque-social-pratica-7-dias.webp",
      alt: "Página Prática Orientada, 7 dias de observação, do livro Xeque Social."
    },
    {
      title: "Notas e Referências",
      tag: "Fundamentação",
      desc: "A seção editorial destinada às notas, referências e critérios de leitura.",
      src: "/images/xeque-social-referencias.webp",
      alt: "Página de notas e referências do livro Xeque Social."
    }
  ];

  const HOTMART_CHECKOUT_URL = "https://pay.hotmart.com/D107390083H?checkoutMode=10";

  return (
    <div className="xeque-social-page">

      {/* ==================================================================
          1. REFORMULATED EDITORIAL HERO SECTION
          ================================================================== */}
      <section className="xeque-editorial-hero-section">
        <div className="xeque-hero-responsive-bg" aria-hidden="true" />
        <div className="xeque-editorial-hero-container">

          {/* LEFT COLUMN: EDITORIAL COPY & CALL TO ACTION */}
          <div className="xeque-editorial-hero-copy">

            {/* EYEBROW */}
            <div className="xeque-hero-brand-tag">
              <IconChessPawn size={15} />
              <span>XEQUE SOCIAL • LIVRO DIGITAL</span>
              {!isLaunched && (
                <span className="xeque-hero-lock-badge">
                  <IconLock size={12} style={{ display: 'inline', marginRight: '4px' }} />
                  <span>LIBERA 07/09 ÀS 20H</span>
                </span>
              )}
            </div>

            {/* HEADLINE */}
            <h1 className="xeque-hero-left-headline">
              Pare de reagir no automático.
              <span className="xeque-hero-headline-second">
                <span className="xeque-gold-highlight">Leia a situação</span> antes de escolher seu próximo movimento.
              </span>
            </h1>

            {/* SUBHEADLINE */}
            <p className="xeque-hero-left-subheadline">
              Um livro prático de 180 páginas para separar fato de interpretação, reconhecer pressão e escolher uma primeira resposta com mais clareza, sem manipulação e sem leitura mental.
            </p>

            {/* ATTRIBUTES LINE */}
            <div className="xeque-hero-attributes-line">
              <span>30 capítulos</span>
              <span className="xeque-attr-dot">•</span>
              <span>5 partes</span>
              <span className="xeque-attr-dot">•</span>
              <span className="xeque-gold-text">Prática de 7 dias</span>
            </div>

            {/* EDITORIAL QUOTE */}
            <blockquote className="xeque-hero-editorial-quote">
              "Leia a posição antes de entregar o movimento."
            </blockquote>

            {/* CALL TO ACTION BUTTON (LOCKED OR ACTIVE) */}
            <div className="xeque-hero-cta-wrapper">
              {!isLaunched ? (
                <button
                  type="button"
                  className="xeque-cta-btn xeque-cta-btn-locked"
                
                  disabled
                  aria-disabled="true">
                  <IconLock size={16} className="xeque-lock-icon" />
                  <span>LIBERA DIA 7 ÀS 20H</span>
                </button>
              ) : (
                <a href={HOTMART_CHECKOUT_URL} aria-disabled="false" className="xeque-cta-btn">
                  <span>QUERO ACESSAR O XEQUE SOCIAL</span>
                </a>
              )}

              {/* BELOW-BUTTON MICROCOPY */}
              <p className="xeque-hero-micro-footer">
                Livro digital • Acesso vitalício • Garantia de 7 dias
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ==================================================================
          SEÇÃO 1, RECONHECIMENTO
          ================================================================== */}
      <section className="xeque-section xeque-section-reconhecimento">
        <div className="xeque-container-editorial">
          <h2 className="xeque-headline-medium xeque-text-left-desktop">
            A resposta errada quase nunca começa nas palavras.
          </h2>

          <p className="xeque-subheadline xeque-text-left-desktop" style={{ marginTop: '1rem', maxWidth: '800px' }}>
            Ela começa nos segundos em que você interpreta, sente pressão e reage antes de entender a posição.
          </p>

          <div className="xeque-situations-editorial-grid">
            <div className="xeque-situation-editorial-card">
              <span className="xeque-situation-num">01</span>
              <p className="xeque-situation-text">
                Você interpreta uma demora como rejeição e reage antes de confirmar o que aconteceu.
              </p>
            </div>

            <div className="xeque-situation-editorial-card">
              <span className="xeque-situation-num">02</span>
              <p className="xeque-situation-text">
                Você aceita pressão, provocação ou pedido no impulso e se arrepende minutos depois.
              </p>
            </div>

            <div className="xeque-situation-editorial-card">
              <span className="xeque-situation-num">03</span>
              <p className="xeque-situation-text">
                Você começa a se explicar por algo que nem precisava justificar.
              </p>
            </div>

            <div className="xeque-situation-editorial-card">
              <span className="xeque-situation-num">04</span>
              <p className="xeque-situation-text">
                Você percebe somente horas depois que entregou mais do que deveria.
              </p>
            </div>
          </div>

          <div className="xeque-reconhecimento-closing-statement">
            <p>
              O problema não é apenas não saber o que dizer. <br className="xeque-desktop-br" />
              <strong className="xeque-gold-text">É não perceber o momento em que a situação começou a decidir por você.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* ==================================================================
          SEÇÃO 2, O CONCEITO (TEXTURA DE PAPEL CLARO)
          ================================================================== */}
      <section className="xeque-section xeque-section-conceito">
        <div className="xeque-container-editorial">
          <span className="xeque-tag-badge xeque-badge-paper">O QUE É UM XEQUE SOCIAL?</span>

          <h2 className="xeque-headline-medium xeque-title-paper">
            O momento em que uma interação começa a restringir suas escolhas.
          </h2>

          <div className="xeque-conceito-body-text">
            <p>
              Um xeque social pode aparecer como urgência, provocação, culpa, silêncio, exposição, estruturação de narrativa, insistência ou mudança repentina de comportamento.
            </p>
            <p>
              Você ainda pode escolher. Mas, se não perceber a posição, provavelmente reagirá como se só existisse uma saída.
            </p>
          </div>

          <div className="xeque-conceito-highlight-box">
            <p className="xeque-conceito-quote">
              "O Xeque Social não ensina a adivinhar pensamentos. Ele ensina a observar o tabuleiro antes de movimentar a própria peça."
            </p>
          </div>
        </div>
      </section>

      {/* ==================================================================
          SEÇÃO, UMA POSIÇÃO, TRÊS LEITURAS
          ================================================================== */}
      <section className="xeque-section xeque-section-tres-leituras">
        <div className="xeque-container">
          <span className="xeque-tag-badge">UMA POSIÇÃO, TRÊS LEITURAS</span>

          <h2 className="xeque-headline-medium">
            Veja a diferença entre interpretar e ler a posição.
          </h2>

          <p className="xeque-tres-leituras-intro">
            Situação: a pessoa visualiza sua mensagem, continua ativa e não responde.
          </p>

          <div className="xeque-tres-leituras-grid">

            <div className="xeque-tres-leituras-card">
              <span className="xeque-tres-leituras-label">FATO OBSERVÁVEL</span>
              <p className="xeque-tres-leituras-text">
                A mensagem foi visualizada e ainda não houve resposta.
              </p>
            </div>

            <div className="xeque-tres-leituras-card xeque-tres-leituras-card-interp">
              <span className="xeque-tres-leituras-label">INTERPRETAÇÃO AUTOMÁTICA</span>
              <p className="xeque-tres-leituras-text">
                Ela está me ignorando. Preciso cobrar agora.
              </p>
            </div>

            <div className="xeque-tres-leituras-card xeque-tres-leituras-card-leitura">
              <span className="xeque-tres-leituras-label xeque-gold-text">LEITURA CONSCIENTE</span>
              <p className="xeque-tres-leituras-text">
                A causa da demora ainda não é conhecida. Não transforme hipótese em fato. Preserve sua rotina, observe o padrão e só aborde se isso afetar um acordo real.
              </p>
            </div>

          </div>

          <div className="xeque-tres-leituras-fechamento">
            <p>
              Ler a posição não é adivinhar intenção. É impedir que uma interpretação incompleta escolha seu movimento.
            </p>
          </div>
        </div>
      </section>


      {/* ==================================================================
          O QUE VOCÊ APRENDE AO LONGO DO LIVRO (5 EIXOS)
          ================================================================== */}
      <section className="xeque-section xeque-section-aprendizado">
        <div className="xeque-container">
          <span className="xeque-tag-badge">OS 5 EIXOS DA OBRA</span>
          <h2 className="xeque-headline-medium">O que você aprende ao longo do livro</h2>

          <div className="xeque-eixos-grid">
            <div className="xeque-eixo-card">
              <span className="xeque-eixo-num">01</span>
              <p className="xeque-eixo-text">Ler contexto, posição, hierarquia e acordos invisíveis.</p>
            </div>
            <div className="xeque-eixo-card">
              <span className="xeque-eixo-num">02</span>
              <p className="xeque-eixo-text">Separar acontecimentos de interpretações e hipóteses emocionais.</p>
            </div>
            <div className="xeque-eixo-card">
              <span className="xeque-eixo-num">03</span>
              <p className="xeque-eixo-text">Reconhecer pressão, culpa, silêncio, urgência e invasão de limites.</p>
            </div>
            <div className="xeque-eixo-card">
              <span className="xeque-eixo-num">04</span>
              <p className="xeque-eixo-text">Escolher entre perguntar, afirmar, adiar, negar, limitar ou sair.</p>
            </div>
            <div className="xeque-eixo-card">
              <span className="xeque-eixo-num">05</span>
              <p className="xeque-eixo-text">Avaliar o movimento realizado e reconstruir o próprio eixo.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================================
          POR DENTRO DA OBRA & FICHA TÉCNICA PREMIUM
          ================================================================== */}
      <section className="xeque-section xeque-section-pordentro">
        <div className="xeque-container-editorial">
          <span className="xeque-tag-badge">POR DENTRO DA OBRA</span>

          <h2 className="xeque-headline-medium">
            Não é um manual de respostas prontas.
          </h2>

          <p className="xeque-subheadline" style={{ marginTop: '1rem', maxWidth: '780px' }}>
            Xeque Social é um livro digital de 180 páginas sobre leitura social e posicionamento. Ele foi criado para ajudar você a perceber padrões, separar o que aconteceu da interpretação do momento e escolher uma primeira resposta mais consciente.
          </p>

          {/* FICHA TÉCNICA DE CATALOGO PREMIUM */}
          <div className="xeque-ficha-tecnica-grid">
            <div className="xeque-ficha-item">
              <span className="xeque-ficha-val">180</span>
              <span className="xeque-ficha-lbl">páginas</span>
            </div>
            <div className="xeque-ficha-item">
              <span className="xeque-ficha-val">30</span>
              <span className="xeque-ficha-lbl">capítulos</span>
            </div>
            <div className="xeque-ficha-item">
              <span className="xeque-ficha-val">5</span>
              <span className="xeque-ficha-lbl">partes</span>
            </div>
            <div className="xeque-ficha-item">
              <span className="xeque-ficha-val">Leitura</span>
              <span className="xeque-ficha-lbl">APLICADA</span>
            </div>
            <div className="xeque-ficha-item">
              <span className="xeque-ficha-val">Prática de 7 dias</span>
              <span className="xeque-ficha-lbl">orientada</span>
            </div>
            <div className="xeque-ficha-item">
              <span className="xeque-ficha-val">Mapa Pessoal</span>
              <span className="xeque-ficha-lbl">de leitura & reação</span>
            </div>
            <div className="xeque-ficha-item xeque-ficha-full">
              <span className="xeque-ficha-val">Notas e Referências</span>
              <span className="xeque-ficha-lbl">comportamento humano aplicado</span>
            </div>
          </div>
        </div>
      </section>



      {/* ==================================================================
          GALERIA EDITORIAL DA OBRA (TEXTURA DE PAPEL CLARO / REAIS)
          ================================================================== */}
      <section className="xeque-section xeque-section-galeria-papel">
        <div className="xeque-container">
          <span className="xeque-tag-badge xeque-badge-paper">VISUALIZAÇÃO DA OBRA</span>
          <h2 className="xeque-headline-medium xeque-title-paper">Galeria Editorial</h2>
          <p className="xeque-subheadline" style={{ color: '#44403C', marginTop: '0.5rem', marginBottom: '2.5rem' }}>
            Explore a estrutura interna e os elementos que compõem a obra.
          </p>

          {/* DESKTOP GRID WITH ENLARGED AND CLOSE-UP DETAIL CARDS */}
          <div className="xeque-gallery-desktop-grid">
            {galleryItems.map((item, index) => (
              <div key={index} className={`xeque-gallery-card ${index % 2 === 0 ? 'card-enlarged' : 'card-detail'}`}>
                <div className="xeque-gallery-img-box">
                  <picture>
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="xeque-gallery-book-img"
                      loading="lazy"
                      decoding="async"

                    />
                  </picture>
                </div>
                <div className="xeque-gallery-card-info">
                  <span className="xeque-gallery-item-tag">{item.tag}</span>
                  <h3 className="xeque-gallery-item-title">{item.title}</h3>
                  <p className="xeque-gallery-item-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* MOBILE CAROUSEL WITH SWIPE & ACCESSIBLE CONTROLS */}
          <div className="xeque-gallery-mobile-carousel">
            <div className="xeque-carousel-track-wrapper">
              <div
                className="xeque-carousel-track"
                style={{ transform: `translateX(-${activeSlide * 100}%)` }}
              >
                {galleryItems.map((item, index) => (
                  <div key={index} className="xeque-carousel-slide">
                    <div className="xeque-gallery-card">
                      <div className="xeque-gallery-img-box">
                        <picture>
                          <img
                            src={item.src}
                            alt={item.alt}
                            className="xeque-gallery-book-img"
                            loading="lazy"
                            decoding="async"

                          />
                        </picture>
                      </div>
                      <div className="xeque-gallery-card-info">
                        <span className="xeque-gallery-item-tag">{item.tag}</span>
                        <h3 className="xeque-gallery-item-title">{item.title}</h3>
                        <p className="xeque-gallery-item-desc">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CONTROLS */}
            <div className="xeque-carousel-controls">
              <button
                type="button"
                className="xeque-carousel-btn"
                onClick={() => setActiveSlide((prev) => (prev > 0 ? prev - 1 : galleryItems.length - 1))}
                aria-label="Página anterior"
              >
                ‹
              </button>

              <div className="xeque-carousel-indicators">
                {galleryItems.map((_, index) => (
                  <span
                    key={index}
                    className={`xeque-indicator-dot ${activeSlide === index ? 'active' : ''}`}
                    onClick={() => setActiveSlide(index)}
                  />
                ))}
              </div>

              <button
                type="button"
                className="xeque-carousel-btn"
                onClick={() => setActiveSlide((prev) => (prev < galleryItems.length - 1 ? prev + 1 : 0))}
                aria-label="Próxima página"
              >
                ›
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* ==================================================================
          REFORMULATED TRANSFORMATION SECTION (SOBER EDITORIAL - NO RED/GREEN)
          ================================================================== */}

      {/* ==================================================================
          PROVA DO PRODUTO - CREDIBILIDADE
          ================================================================== */}
      <section className="xeque-section xeque-credibilidade-section">
        <div className="xeque-container">
          <div className="xeque-credibilidade-box">

            <span className="xeque-tag-badge">CRITÉRIO DE LEITURA</span>

            <h2 className="xeque-headline-medium">
              Fundamentado sem prometer leitura mental.
            </h2>

            <p className="xeque-credibilidade-desc">
              O Xeque Social combina observação prática, exercícios de aplicação e referências
              de comportamento humano. Nenhum sinal isolado prova intenção: a leitura considera
              contexto, repetição, hierarquia e efeito produzido na interação.
            </p>

            <div className="xeque-credibilidade-items">
              <div className="xeque-credibilidade-item">
                <span>01</span>
                <p>Observação antes da conclusão</p>
              </div>

              <div className="xeque-credibilidade-item">
                <span>02</span>
                <p>Exercício antes da resposta automática</p>
              </div>

              <div className="xeque-credibilidade-item">
                <span>03</span>
                <p>Referências apresentadas com transparência</p>
              </div>
            </div>

          </div>
        </div>
      </section>
      <section className="xeque-section xeque-section-transf-sober">
        <div className="xeque-container">
          <span className="xeque-tag-badge">MUDANÇA DE POSICIONAMENTO</span>

          <h2 className="xeque-headline-medium">
            Você não precisa vencer toda conversa.
          </h2>

          <p className="xeque-subheadline" style={{ marginTop: '0.5rem', marginBottom: '3rem' }}>
            Precisa parar de perder posição sem perceber.
          </p>

          {/* TWO SOBER EDITORIAL COLUMNS (NO RED/GREEN BOXES) */}
          <div className="xeque-transf-editorial-columns">

            {/* COLUMN 1: QUANDO A REAÇÃO DECIDE */}
            <div className="xeque-transf-col xeque-transf-col-reacao">
              <h3 className="xeque-transf-col-title">QUANDO A REAÇÃO DECIDE</h3>
              <ul className="xeque-transf-list">
                <li>• Pressa para responder.</li>
                <li>• Explicações além do necessário.</li>
                <li>• Limites impostos tarde demais.</li>
                <li>• Conclusões baseadas somente na emoção.</li>
                <li>• Arrependimento depois que a conversa termina.</li>
              </ul>
            </div>

            {/* COLUMN 2: QUANDO VOCÊ LÊ A POSIÇÃO */}
            <div className="xeque-transf-col xeque-transf-col-leitura">
              <h3 className="xeque-transf-col-title xeque-gold-text">QUANDO VOCÊ LÊ A POSIÇÃO</h3>
              <ul className="xeque-transf-list">
                <li>• Distingue fato de hipótese.</li>
                <li>• Compra tempo sem desaparecer.</li>
                <li>• Reconhece pressão com antecedência.</li>
                <li>• Escolhe o menor movimento necessário.</li>
                <li>• Encerra situações sem punição ou espetáculo.</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ==================================================================
          AUTORIDADE / POR TRÁS DO XEQUE SOCIAL
          ================================================================== */}
      <section className="xeque-section xeque-author-section xeque-section-alt">
        <div className="xeque-container">
          <div className="xeque-author-editorial">
            <div>
              <picture>
                <source srcSet="/images/profile.webp" type="image/webp" />
                <img
                  src="/images/profile.jpg"
                  alt="João Giovanni"
                  className="xeque-author-portrait-img"
                  loading="lazy"
                  decoding="async"
                  width="260"
                  height="320"
                />
              </picture>
            </div>

            <div className="xeque-author-info">
              <span className="xeque-author-tag">POR TRÁS DO XEQUE SOCIAL</span>
              <h3 className="xeque-author-name-title">
                Eu sabia conversar. Mas descobri que isso não bastava.
              </h3>
              <div className="xeque-author-bio-paragraphs">
                <p>
                  Durante muito tempo, pensei que ter jogo de cintura significava saber conquistar, argumentar e sustentar uma conversa.
                </p>
                <p>
                  Então vivi uma situação na qual perdi exatamente aquilo que acreditava dominar. Quanto mais eu sentia alguém se afastar, mais eu pressionava. Quanto mais tentava recuperar o controle, mais abandonava minha própria posição.
                </p>
                <p>
                  Foi ali que entendi: meu problema não era falta de palavras. Eu não sabia atravessar os segundos anteriores à reação.
                </p>
                <p>
                  O Xeque Social nasceu dessa reconstrução. Não como uma fórmula para controlar pessoas, mas como um sistema para que ninguém precise entregar a própria posição no impulso.
                </p>
              </div>

              <div className="xeque-author-signature-block">
                <span className="xeque-author-sign-name">João Giovanni</span>
                <span className="xeque-author-sign-role">Criador do Universo Jogo de Cintura</span>
              </div>
            </div>
          </div>

          {/* FAIXA DISCRETA, PONTE PARA O JOGO DE CINTURA (SEM SEGUNDA OFERTA) */}
          <div className="xeque-universo-hierarchy-banner">
            <span className="xeque-hierarchy-badge">A PORTA DE ENTRADA DO UNIVERSO JOGO DE CINTURA</span>
            <h3 className="xeque-hierarchy-title">O Xeque Social é a entrada. O Jogo de Cintura é o tabuleiro completo.</h3>
            <div className="xeque-hierarchy-paragraphs">
              <p className="xeque-hierarchy-text">
                O Xeque Social ensina a reconhecer a posição, separar fato de interpretação e escolher uma primeira resposta mais consciente.
              </p>
              <p className="xeque-hierarchy-text">
                O Protocolo LANCE, sistema central do Jogo de Cintura, aprofunda essa leitura e a transforma em movimento sustentado.
              </p>
              <p className="xeque-hierarchy-text">
                Você não precisa conhecer o JDC para aplicar o Xeque Social. E o Xeque Social não tenta substituir a formação completa.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ==================================================================
          SEÇÃO DE OFERTA (PRÉ-LANÇAMENTO & LANÇADO)
          ================================================================== */}
      <section className="xeque-section xeque-offer-section" id="oferta">
        <div className="xeque-container">
          <div className="xeque-offer-main-card">

            {/* OFFICIAL NEW COVER MOCKUP HEADER */}
            <div className="xeque-offer-card-top">
              <picture>
                <source srcSet="/images/xeque-social-capa-oficial.webp" type="image/webp" />
                <img
                  src="/images/xeque-social-capa-oficial.png"
                  alt="Capa do livro digital Xeque Social, de João Giovanni"
                  className="xeque-offer-card-product-img"
                  loading="lazy"
                  decoding="async"
                  width="210"
                  height="210"
                  style={{ objectFit: 'contain' }}
                />
              </picture>
              <span className="xeque-offer-eyebrow">LIVRO DIGITAL</span>
              <h2 className="xeque-offer-card-title">XEQUE SOCIAL</h2>
              <p className="xeque-offer-card-subtitle">
                180 páginas para ler a posição antes de entregar o movimento.
              </p>
            </div>

            {/* STATUS BADGE: PRE-LAUNCH OR RELEASED */}
            <div className="xeque-offer-badge-pill">
              {!isLaunched ? (
                <>
                  <IconLock size={14} className="xeque-ticket-icon" />
                  <span>Abertura em 07/09/2026 às 20h.</span>
                </>
              ) : (
                <>
                  <IconLightning size={14} className="xeque-ticket-icon" />
                  <span>Acesso imediato</span>
                </>
              )}
            </div>

            {/* HUGE PRICE DISPLAY: R$ 37,00 */}
            <div className="xeque-offer-big-price">
              <span className="xeque-price-currency">R$</span>
              <span className="xeque-price-val">37</span>
              <span className="xeque-price-cents">,00</span>
            </div>
            <p className="xeque-offer-payment-label">pagamento único</p>

            {/* CONTENT CHECKLIST */}
            <ul className="xeque-offer-features-list">
              <li>
                <IconCheck size={16} className="xeque-feat-check" />
                <span>Livro digital com 180 páginas</span>
              </li>

              <li>
                <IconCheck size={16} className="xeque-feat-check" />
                <span>30 capítulos organizados em 5 partes</span>
              </li>

              <li>
                <IconCheck size={16} className="xeque-feat-check" />
                <span>Prática orientada de 7 dias</span>
              </li>

              <li>
                <IconCheck size={16} className="xeque-feat-check" />
                <span>Ferramentas para separar fato, interpretação e reação</span>
              </li>

              <li>
                <IconCheck size={16} className="xeque-feat-check" />
                <span>Acesso vitalício</span>
              </li>

              <li>
                <IconCheck size={16} className="xeque-feat-check" />
                <span>Garantia de 7 dias</span>
              </li>
            </ul>

            {/* CTA BUTTON (LOCKED OR ACTIVE WITH HOTMART URL) */}
            {!isLaunched ? (
              <button
                type="button"
                className="xeque-cta-btn xeque-offer-cta-btn xeque-cta-btn-locked"
              
                  disabled
                  aria-disabled="true">
                <IconLock size={16} className="xeque-lock-icon" />
                <span>LIBERA DIA 7 ÀS 20H</span>
              </button>
            ) : (
              <a
                href={HOTMART_CHECKOUT_URL} aria-disabled="false"
                className="xeque-cta-btn xeque-offer-cta-btn"
              >
                <span>QUERO ACESSAR O XEQUE SOCIAL</span>
              </a>
            )}

            <p className="xeque-offer-micro-sub">
              {!isLaunched ? "Abertura em 07/09/2026 às 20h." : "Acesso liberado após a confirmação do pagamento."}
            </p>

            {/* SECURITY TRUST BADGES */}
            <div className="xeque-offer-trust-footer">
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                <IconLock size={12} /> Pagamento processado pela Hotmart
              </span>
              <span>•</span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                <IconLightning size={12} /> {!isLaunched ? "Acesso Vitalício" : "Acesso Vitalício"}
              </span>
              <span>•</span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                <IconShield size={12} /> 7 Dias de Garantia
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* ==================================================================
          GARANTIA (7 DIAS)
          ================================================================== */}
      <section className="xeque-section xeque-guarantee-section">
        <div className="xeque-container-narrow">
          <div className="xeque-guarantee-editorial">
            <IconShield size={44} className="xeque-guarantee-svg-icon" />
            <div>
              <h3 className="xeque-guarantee-title">
                Você tem 7 dias para decidir se esta obra faz sentido para você.
              </h3>
              <p className="xeque-guarantee-desc">
                Acesse o Xeque Social, conheça o conteúdo e comece a aplicação. Se, dentro do prazo legal de 7 dias, entender que o livro não faz sentido para você, poderá solicitar o reembolso pelos canais da plataforma de pagamento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================================
          FAQ ACCORDION
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
                aria-expanded={openFaqIndex === index}
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
          CTA FINAL
          ================================================================== */}
      <section className="xeque-section xeque-section-surface">
        <div className="xeque-container-editorial">
          <h2 className="xeque-headline-medium" style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.3rem)' }}>
            Pare de descobrir tarde demais o que aconteceu.
          </h2>

          <p className="xeque-subheadline" style={{ marginTop: '0.75rem', color: '#F7F4EE', fontWeight: '700' }}>
            Leia a posição. Proteja seu eixo. Só então escolha o movimento.
          </p>

          <div className="xeque-final-price-box">
            <span className="xeque-price-currency">R$</span>
            <span className="xeque-price-val" style={{ fontSize: '3.2rem' }}>37</span>
            <span className="xeque-price-cents">,00</span>
          </div>

          {!isLaunched ? (
            <button
              type="button"
              className="xeque-cta-btn xeque-cta-btn-locked"
              style={{ maxWidth: '440px' }}
            
                  disabled
                  aria-disabled="true">
              <IconLock size={16} className="xeque-lock-icon" />
              <span>LIBERA DIA 7 ÀS 20H</span>
            </button>
          ) : (
            <a
              href={HOTMART_CHECKOUT_URL} aria-disabled="false"
              className="xeque-cta-btn"
              style={{ maxWidth: '440px' }}
            >
              <span>QUERO ACESSAR O XEQUE SOCIAL</span>
            </a>
          )}

          <p className="xeque-offer-trust-footer" style={{ marginTop: '1.25rem' }}>
            {!isLaunched ? "Abertura em 07/09/2026 às 20h." : "Acesso liberado após a confirmação do pagamento. • Garantia de 7 dias"}
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
