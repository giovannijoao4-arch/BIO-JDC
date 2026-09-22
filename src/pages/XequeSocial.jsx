import React, { useEffect, useState } from 'react';
import { useLaunchStatus } from '../hooks/useLaunchStatus';
import { IconChessPawn, IconLock, IconLightning, IconShield, IconCheck } from '../components/Icons';
import '../styles/xeque-social.css';

export function XequeSocial() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const { isLaunched } = useLaunchStatus();

  useEffect(() => {
    const previousTitle = document.title;
    const metaDescription = document.querySelector('meta[name="description"]');
    const previousDescription = metaDescription?.getAttribute('content');

    document.title = 'Xeque Social | Jogo de Cintura';
    metaDescription?.setAttribute(
      'content',
      'Livro digital do Jogo de Cintura para entender melhor situações de relacionamento, separar fato de interpretação e organizar o primeiro movimento antes de reagir.'
    );

    return () => {
      document.title = previousTitle;
      if (metaDescription && previousDescription) {
        metaDescription.setAttribute('content', previousDescription);
      }
    };
  }, []);

  const toggleFaq = (index) => {
    setOpenFaqIndex((prevIndex) => (prevIndex === index ? null : index));
  };

const faqs = [
    {
      q: "O Xeque Social é um livro físico?",
      a: "Não. O Xeque Social é um livro digital. São 188 páginas, divididas em 30 capítulos e 5 partes, com o Protocolo LANCE e uma prática orientada de 7 dias."
    },
    {
      q: "O livro é só sobre relacionamento amoroso?",
      a: "Não. O foco é aprender a ler situações de relacionamento com mais clareza. Os exemplos passam por mensagens, aproximação, afastamento, conflito, amizade, família e outras relações do dia a dia."
    },
    {
      q: "Preciso ser extrovertido?",
      a: "Não. O método não depende de falar mais. Ele ajuda você a perceber melhor o que está acontecendo, separar fato de interpretação e escolher uma resposta compatível com a situação."
    },
    {
      q: "Isso ensina técnicas para controlar pessoas?",
      a: "Não. O Xeque Social não ensina manipulação, leitura mental, ciúme provocado nem frases para conduzir alguém. O foco é entender a situação, assumir responsabilidade pelo próprio movimento e respeitar limites."
    },
    {
      q: "O Xeque Social substitui o Jogo de Cintura?",
      a: "Não. O Xeque Social organiza a leitura e o primeiro movimento pelo Protocolo LANCE. O Jogo de Cintura desenvolve presença, comunicação, posicionamento e ação ao longo das relações."
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
              <span>XEQUE SOCIAL • PRIMEIRO MOVIMENTO DO JDC</span>
              {!isLaunched && (
                <span className="xeque-hero-lock-badge">
                  <IconLock size={12} style={{ display: 'inline', marginRight: '4px' }} />
                  <span>LIBERA 07/09 ÀS 20H</span>
                </span>
              )}
            </div>

            {/* HEADLINE */}
            <h1 className="xeque-hero-left-headline">
              Quando uma conversa muda de tom,
              <span className="xeque-hero-headline-second">
                <span className="xeque-gold-highlight">não deixe a ansiedade</span> fazer o próximo movimento.
              </span>
            </h1>

            {/* SUBHEADLINE */}
            <p className="xeque-hero-left-subheadline xeque-subheadline-desktop">
  O Xeque Social é o livro de entrada do Jogo de Cintura para quem quer lidar melhor com situações de relacionamento. Ele ensina a separar fato de interpretação e organizar o primeiro movimento em mensagens, encontros, conflitos e mudanças de comportamento.
</p>

<p className="xeque-hero-left-subheadline xeque-subheadline-mobile">
  Um livro para entender melhor mensagens, encontros e conflitos antes de transformar ansiedade em reação.
</p>

            <div className="xeque-relationship-context" aria-label="Situações trabalhadas no livro">
              <span>Mensagens</span>
              <span>Encontros</span>
              <span>Conflitos</span>
              <span>Afastamentos</span>
            </div>

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
              "Antes de tentar decifrar o outro, organize a sua própria leitura."
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
                  <span>QUERO LER ANTES DE REAGIR</span>
                </a>
              )}

              {/* BELOW-BUTTON MICROCOPY */}
              <p className="xeque-hero-micro-footer">
                Livro digital • Prática orientada de 7 dias + acesso vitalício • Garantia de 7 dias
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
            Nos relacionamentos, o impulso costuma aparecer antes da clareza.
          </h2>

          <p className="xeque-subheadline xeque-text-left-desktop" style={{ marginTop: '1rem', maxWidth: '800px' }}>
            Uma demora, uma mudança de tom ou um conflito pode fazer você agir só para aliviar a ansiedade do momento.
          </p>

          <div className="xeque-situations-editorial-grid">
            <div className="xeque-situation-editorial-card">
              <span className="xeque-situation-num">01</span>
              <p className="xeque-situation-text">
                A outra pessoa demora a responder e sua cabeça transforma a demora em rejeição antes de existir contexto suficiente.
              </p>
            </div>

            <div className="xeque-situation-editorial-card">
              <span className="xeque-situation-num">02</span>
              <p className="xeque-situation-text">
                Depois de um encontro, você sente uma mudança no ritmo e tenta compensar insistindo mais do que gostaria.
              </p>
            </div>

            <div className="xeque-situation-editorial-card">
              <span className="xeque-situation-num">03</span>
              <p className="xeque-situation-text">
                Uma cobrança aparece e você começa a se explicar antes de entender o que realmente está sendo pedido.
              </p>
            </div>

            <div className="xeque-situation-editorial-card">
              <span className="xeque-situation-num">04</span>
              <p className="xeque-situation-text">
                No conflito, você cede para encerrar o desconforto e só depois percebe que concordou com algo que não queria.
              </p>
            </div>
          </div>

          <div className="xeque-reconhecimento-closing-statement">
            <p>
              Você não precisa decifrar ninguém para se relacionar melhor. <br className="xeque-desktop-br" />
              <strong className="xeque-gold-text">Precisa perceber o que aconteceu e escolher como vai se posicionar.</strong>
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
            Um xeque social é o momento em que a interação muda e pressiona você a agir antes de entender o que mudou.
          </h2>

          <div className="xeque-conceito-body-text">
            <p>
              Uma resposta mais fria. Um encontro que parecia bom e depois perdeu ritmo. Uma brincadeira que tocou num limite. Uma cobrança que aparece no meio da conversa. Uma mudança que você percebe, mas ainda não entende.
            </p>
            <p>
              O problema começa quando a sua cabeça preenche o que falta, transforma hipótese em certeza e usa essa certeza para cobrar, insistir, ceder, se afastar ou tentar consertar tudo de uma vez.
            </p>
          </div>

          <div className="xeque-conceito-highlight-box">
            <p className="xeque-conceito-quote">
              "O livro não ensina a adivinhar o que a outra pessoa pensa. Ensina você a não transformar uma hipótese em comando."
            </p>
          </div>
        </div>
      </section>

      {/* ==================================================================
          SEÇÃO, UMA POSIÇÃO, TRÊS LEITURAS
          ================================================================== */}
      <section className="xeque-section xeque-section-tres-leituras">
        <div className="xeque-container">
          <span className="xeque-tag-badge">UMA MENSAGEM, TRÊS CAMADAS</span>

          <h2 className="xeque-headline-medium">
            O que aconteceu é uma coisa. O que sua cabeça concluiu é outra.
          </h2>

          <p className="xeque-tres-leituras-intro">
            Situação: a pessoa visualiza sua mensagem, continua ativa e não responde.
          </p>

          <div className="xeque-tres-leituras-grid">

            <div className="xeque-tres-leituras-card">
              <span className="xeque-tres-leituras-label">FATO OBSERVÁVEL</span>
              <p className="xeque-tres-leituras-text">
                A mensagem foi visualizada. Ainda não houve resposta.
              </p>
            </div>

            <div className="xeque-tres-leituras-card xeque-tres-leituras-card-interp">
              <span className="xeque-tres-leituras-label">INTERPRETAÇÃO AUTOMÁTICA</span>
              <p className="xeque-tres-leituras-text">
                Essa pessoa está me ignorando. Fiz alguma coisa. Preciso resolver isso agora.
              </p>
            </div>

            <div className="xeque-tres-leituras-card xeque-tres-leituras-card-leitura">
              <span className="xeque-tres-leituras-label xeque-gold-text">LEITURA CONSCIENTE</span>
              <p className="xeque-tres-leituras-text">
                A causa da demora ainda é desconhecida. Sem contexto, qualquer certeza é uma hipótese. Observe antes de transformar ansiedade em movimento.
              </p>
            </div>

          </div>

          <div className="xeque-tres-leituras-fechamento">
            <p>
              É nesse espaço entre o fato e a interpretação que você recupera o comando do próximo movimento.
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
          <h2 className="xeque-headline-medium">Do que aconteceu ao próximo lance: o caminho que o livro treina.</h2>

          <div className="xeque-eixos-grid">
            <div className="xeque-eixo-card">
              <span className="xeque-eixo-num">01</span>
              <p className="xeque-eixo-text">Separar o que aconteceu do que você concluiu sobre a outra pessoa e sobre a relação.</p>
            </div>
            <div className="xeque-eixo-card">
              <span className="xeque-eixo-num">02</span>
              <p className="xeque-eixo-text">Perceber ansiedade, medo de perder, raiva ou vontade de agradar antes de obedecer ao impulso.</p>
            </div>
            <div className="xeque-eixo-card">
              <span className="xeque-eixo-num">03</span>
              <p className="xeque-eixo-text">Ler contexto, repetição, acordos e mudanças de comportamento sem fingir que sabe a intenção dela.</p>
            </div>
            <div className="xeque-eixo-card">
              <span className="xeque-eixo-num">04</span>
              <p className="xeque-eixo-text">Escolher quando esperar, perguntar, conversar, colocar limite, recuar ou encerrar.</p>
            </div>
            <div className="xeque-eixo-card">
              <span className="xeque-eixo-num">05</span>
              <p className="xeque-eixo-text">Examinar o que aconteceu depois do seu movimento e ajustar sem abandonar a própria posição.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================================
          PROTOCOLO LANCE — PRIMEIRO MOVIMENTO
          ================================================================== */}
      <section className="xeque-section xeque-lance-section">
        <div className="xeque-container">
          <span className="xeque-tag-badge">PROTOCOLO LANCE</span>
          <h2 className="xeque-headline-medium">
            Um processo para organizar o primeiro movimento.
          </h2>
          <p className="xeque-subheadline">
            Quando a relação aperta, o LANCE coloca um critério entre o que você sentiu e o que você vai fazer.
          </p>

          <div className="xeque-lance-grid">
            <div className="xeque-lance-card">
              <span className="xeque-lance-letter">L</span>
              <h3>Ler</h3>
              <p>O que aconteceu de fato, sem completar as partes que você ainda não sabe.</p>
            </div>
            <div className="xeque-lance-card">
              <span className="xeque-lance-letter">A</span>
              <h3>Avaliar</h3>
              <p>O que mudou na situação e o que está pressionando você a reagir.</p>
            </div>
            <div className="xeque-lance-card">
              <span className="xeque-lance-letter">N</span>
              <h3>Nomear</h3>
              <p>O que é fato, interpretação, emoção, limite ou acordo entre vocês.</p>
            </div>
            <div className="xeque-lance-card">
              <span className="xeque-lance-letter">C</span>
              <h3>Calibrar</h3>
              <p>Qual movimento é proporcional: esperar, perguntar, falar, recusar, recuar ou sair.</p>
            </div>
            <div className="xeque-lance-card">
              <span className="xeque-lance-letter">E</span>
              <h3>Examinar</h3>
              <p>O que o resultado mostrou e o que precisa ser ajustado no próximo lance.</p>
            </div>
          </div>

          <p className="xeque-lance-closing">
            O objetivo não é transformar relacionamento em cálculo. É evitar que o impulso escolha por você.
          </p>
        </div>
      </section>

      {/* ==================================================================
          POR DENTRO DA OBRA & FICHA TÉCNICA PREMIUM
          ================================================================== */}
      <section className="xeque-section xeque-section-pordentro">
        <div className="xeque-container-editorial">
          <span className="xeque-tag-badge">POR DENTRO DA OBRA</span>

          <h2 className="xeque-headline-medium">
            Frase pronta falha quando a relação muda. Critério continua útil.
          </h2>

          <p className="xeque-subheadline" style={{ marginTop: '1rem', maxWidth: '780px' }}>
            O Xeque Social reúne 188 páginas e 30 capítulos organizados em 5 partes para treinar leitura, primeiro movimento e revisão em situações reais de relacionamento.
          </p>

          {/* FICHA TÉCNICA DE CATALOGO PREMIUM */}
          <div className="xeque-ficha-tecnica-grid">
            <div className="xeque-ficha-item">
              <span className="xeque-ficha-val">188</span>
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
              <span className="xeque-ficha-val">Protocolo LANCE</span>
              <span className="xeque-ficha-lbl">5 etapas de decisão</span>
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
              <span className="xeque-ficha-lbl">base e limites do método</span>
            </div>
          </div>
        </div>
      </section>



      {/* ==================================================================
          GALERIA EDITORIAL DA OBRA (TEXTURA DE PAPEL CLARO / REAIS)
          ================================================================== */}
      <section className="xeque-section xeque-section-galeria-papel">
        <div className="xeque-container">
          <span className="xeque-tag-badge xeque-badge-paper">PÁGINAS REAIS DO XEQUE SOCIAL</span>
          <h2 className="xeque-headline-medium xeque-title-paper">Veja como o método aparece dentro do livro.</h2>
          <p className="xeque-subheadline" style={{ color: '#44403C', marginTop: '0.5rem', marginBottom: '2.5rem' }}>
            Páginas reais do Xeque Social: estrutura, exemplos, exercícios e ferramentas usadas para organizar a leitura e o próximo movimento.
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

            <span className="xeque-tag-badge">SEM ADIVINHAR O QUE O OUTRO PENSA</span>

            <h2 className="xeque-headline-medium">
              Entender melhor a relação começa por não inventar certeza onde ainda não existe.
            </h2>

            <p className="xeque-credibilidade-desc">
              O Xeque Social usa observação prática, exercícios e referências de comportamento humano.
              Nenhum sinal isolado prova intenção. A leitura considera contexto, repetição, acordos,
              limites e o efeito real da interação antes de você escolher o próximo movimento.
            </p>

            <div className="xeque-credibilidade-items">
              <div className="xeque-credibilidade-item">
                <span>01</span>
                <p>Fato antes da suposição</p>
              </div>

              <div className="xeque-credibilidade-item">
                <span>02</span>
                <p>Contexto antes da reação</p>
              </div>

              <div className="xeque-credibilidade-item">
                <span>03</span>
                <p>Limites do método sem promessa de controle</p>
              </div>
            </div>

          </div>
        </div>
      </section>
      <section className="xeque-section xeque-section-transf-sober">
        <div className="xeque-container">
          <span className="xeque-tag-badge">DO IMPULSO AO POSICIONAMENTO</span>

          <h2 className="xeque-headline-medium">
            Você continua sentindo. Só para de entregar o movimento ao impulso.
          </h2>

          <p className="xeque-subheadline" style={{ marginTop: '0.5rem', marginBottom: '3rem' }}>
            A mudança aparece no que você faz quando a conversa pesa, o interesse oscila ou um limite precisa ser colocado.
          </p>

          {/* TWO SOBER EDITORIAL COLUMNS (NO RED/GREEN BOXES) */}
          <div className="xeque-transf-editorial-columns">

            {/* COLUMN 1: QUANDO O IMPULSO DECIDE */}
            <div className="xeque-transf-col xeque-transf-col-reacao">
              <h3 className="xeque-transf-col-title">QUANDO VOCÊ TENTA ALIVIAR A ANSIEDADE</h3>
              <ul className="xeque-transf-list">
                <li>• Manda outra mensagem só para diminuir a incerteza.</li>
                <li>• Se explica antes de entender se existe um problema.</li>
                <li>• Cede para evitar a possibilidade de conflito.</li>
                <li>• Trata uma mudança de comportamento como prova de intenção.</li>
                <li>• Age primeiro e entende o que sentiu depois.</li>
              </ul>
            </div>

            {/* COLUMN 2: QUANDO VOCÊ RECUPERA A LEITURA */}
            <div className="xeque-transf-col xeque-transf-col-leitura">
              <h3 className="xeque-transf-col-title xeque-gold-text">QUANDO VOCÊ SUSTENTA POSIÇÃO</h3>
              <ul className="xeque-transf-list">
                <li>• Distingue o que aconteceu do que você está imaginando.</li>
                <li>• Tolera alguns minutos de incerteza antes de agir.</li>
                <li>• Procura contexto sem perseguir confirmação.</li>
                <li>• Escolhe uma resposta proporcional ao que realmente aconteceu.</li>
                <li>• Revê o resultado sem transformar cada situação em teste de valor pessoal.</li>
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
                Eu criei este livro depois de perceber o que a ansiedade fazia com os meus próprios movimentos.
              </h3>
              <div className="xeque-author-bio-paragraphs">
                <p>
                  Durante muito tempo, eu associei jogo de cintura a saber conversar, argumentar e encontrar a frase certa.
                </p>
                <p>
                  Quando sentia alguém se afastar, eu tentava corrigir a situação rápido demais. Quanto mais eu buscava controle, pior eu lia o que estava acontecendo.
                </p>
                <p>
                  Foi aí que percebi que o problema começava antes da frase: na leitura que eu fazia e na pressa para resolver.
                </p>
                <p>
                  O Xeque Social nasceu para organizar esses segundos com um critério prático. Sem ensinar manipulação, jogo de poder ou controle sobre outras pessoas.
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
            <span className="xeque-hierarchy-badge">1º MOVIMENTO DO JOGO DE CINTURA</span>
            <h3 className="xeque-hierarchy-title">O Xeque Social ensina a ler e organizar o primeiro movimento. O JDC ensina a sustentar sua posição na relação.</h3>
            <div className="xeque-hierarchy-paragraphs">
              <p className="xeque-hierarchy-text">
                Encontros, conversas, conflitos e afastamentos mudam rápido. O Xeque Social trabalha o momento em que você precisa perceber o que aconteceu e decidir o que fazer a seguir.
              </p>
              <p className="xeque-hierarchy-text">
                O Protocolo LANCE organiza esse primeiro movimento: Ler, Avaliar, Nomear, Calibrar e Examinar.
              </p>
              <p className="xeque-hierarchy-text">
                No Jogo de Cintura, essa base vira presença, comunicação, limites, iniciativa e direção aplicadas aos relacionamentos. A leitura continua importante, mas passa a servir à ação.
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
                188 páginas para organizar leitura e primeiro movimento em situações reais de relacionamento.
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
                <span>Livro digital Xeque Social • 188 páginas</span>
              </li>

              <li>
                <IconCheck size={16} className="xeque-feat-check" />
                <span>30 capítulos organizados em 5 partes</span>
              </li>

              <li>
                <IconCheck size={16} className="xeque-feat-check" />
                <span>Protocolo LANCE completo</span>
              </li>

              <li>
                <IconCheck size={16} className="xeque-feat-check" />
                <span>Exemplos aplicados a mensagens, encontros e conflitos</span>
              </li>

              <li>
                <IconCheck size={16} className="xeque-feat-check" />
                <span>Prática orientada de 7 dias + acesso vitalício</span>
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
                <span>QUERO LER ANTES DE REAGIR</span>
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
            A próxima conversa difícil não vai vir com roteiro.
          </h2>

          <p className="xeque-subheadline" style={{ marginTop: '0.75rem', color: '#F7F4EE', fontWeight: '700' }}>
            A diferença está no que você faz antes de responder, insistir, ceder ou se afastar.
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
              <span>QUERO LER ANTES DE REAGIR</span>
            </a>
          )}

          <p className="xeque-offer-trust-footer" style={{ marginTop: '1.25rem' }}>
            {!isLaunched ? "Abertura em 07/09/2026 às 20h." : "Acesso liberado após a confirmação do pagamento. • Garantia de 7 dias"}
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="xeque-footer-editorial">
        <p>© 2026 Universo Jogo de Cintura. Todos os direitos reservados.</p>
      </footer>

    </div>
  );
}


