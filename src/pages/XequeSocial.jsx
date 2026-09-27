import React, { useEffect, useState } from 'react';
import { useLaunchStatus } from '../hooks/useLaunchStatus';
import { IconChessPawn, IconLock, IconLightning, IconShield, IconCheck } from '../components/Icons';
import '../styles/xeque-social.css';

export function XequeSocial() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const { isLaunched } = useLaunchStatus();

  useEffect(() => {
    const previousTitle = document.title;
    const metaDescription = document.querySelector('meta[name="description"]');
    const previousDescription = metaDescription?.getAttribute('content');

    document.title = 'Xeque Social | Jogo de Cintura';
    metaDescription?.setAttribute(
      'content',
      'Livro digital para entender melhor mensagens, encontros e conflitos antes de transformar ansiedade em reação.'
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
      q: 'O Xeque Social é um livro físico?',
      a: 'Não. É um livro digital com 187 páginas, dividido em 30 capítulos e 5 partes.'
    },
    {
      q: 'O livro serve só para relacionamento amoroso?',
      a: 'Não. Os exemplos passam por mensagens, encontros, conflitos, afastamentos e outras situações de relacionamento.'
    },
    {
      q: 'Quando recebo acesso?',
      a: isLaunched
        ? 'O acesso é liberado pela Hotmart após a confirmação do pagamento.'
        : 'O acesso será liberado quando as vendas forem abertas.'
    },
    {
      q: 'Existe garantia?',
      a: 'Sim. Você tem 7 dias para solicitar o cancelamento dentro das condições informadas no checkout.'
    }
  ];

  const testimonialImages = [
    { src: '/images/xeque/depoimentos/depoimento-01.webp', alt: 'Depoimento de leitor do Xeque Social 1' },
    { src: '/images/xeque/depoimentos/depoimento-02.webp', alt: 'Depoimento de leitor do Xeque Social 2' },
    { src: '/images/xeque/depoimentos/depoimento-03.webp', alt: 'Depoimento de leitor do Xeque Social 3' },
    { src: '/images/xeque/depoimentos/depoimento-04.webp', alt: 'Depoimento de leitor do Xeque Social 4' },
    { src: '/images/xeque/depoimentos/depoimento-05.webp', alt: 'Depoimento de leitor do Xeque Social 5' },
    { src: '/images/xeque/depoimentos/depoimento-06.webp', alt: 'Depoimento de leitor do Xeque Social 6' },
    { src: '/images/xeque/depoimentos/depoimento-07.webp', alt: 'Depoimento de leitor do Xeque Social 7' },
    { src: '/images/xeque/depoimentos/depoimento-08.webp', alt: 'Depoimento de leitor do Xeque Social 8' },
    { src: '/images/xeque/depoimentos/depoimento-09.webp', alt: 'Depoimento de leitor do Xeque Social 9' }
  ];

  const samplePages = [
    {
      src: '/images/xeque-social-sumario.webp',
      alt: 'Sumário do livro Xeque Social'
    },
    {
      src: '/images/xeque-social-fato-interpretacao.webp',
      alt: 'Página Fato x interpretação do livro Xeque Social'
    },
    {
      src: '/images/xeque-social-pratica-7-dias.webp',
      alt: 'Página da prática orientada de 7 dias do Xeque Social'
    }
  ];

  const HOTMART_CHECKOUT_URL = 'https://pay.hotmart.com/D107390083H?checkoutMode=10';

  return (
    <div className="xeque-social-page xeque-low-ticket-page">

      <section className="xeque-editorial-hero-section">
        <div className="xeque-hero-responsive-bg" aria-hidden="true" />
        <div className="xeque-editorial-hero-container">
          <div className="xeque-editorial-hero-copy">
            <div className="xeque-hero-brand-tag">
              <IconChessPawn size={15} />
              <span>XEQUE SOCIAL • LIVRO DIGITAL</span>
            </div>

            <h1 className="xeque-hero-left-headline">
              Quando uma conversa muda de tom,
              <span className="xeque-hero-headline-second">
                <span className="xeque-gold-highlight">não deixe a ansiedade</span> fazer o próximo movimento.
              </span>
            </h1>

            <p className="xeque-hero-left-subheadline xeque-subheadline-desktop">
              Um livro para entender melhor mensagens, encontros e conflitos antes de transformar ansiedade em reação.
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

            <div className="xeque-hero-purchase-meta">
              <div className="xeque-hero-price">
                <span className="xeque-hero-price-currency">R$</span>
                <span className="xeque-hero-price-value">37</span>
                <span className="xeque-hero-price-cents">,00</span>
              </div>
              <div className="xeque-hero-price-copy">
                <strong>pagamento único</strong>
                <span>Acesso vitalício • 7 dias de garantia</span>
              </div>
            </div>

            <div className="xeque-hero-cta-wrapper">
              {!isLaunched ? (
                <button type="button" className="xeque-cta-btn xeque-cta-btn-locked" disabled aria-disabled="true">
                  <IconLock size={16} className="xeque-lock-icon" />
                  <span>EM BREVE</span>
                </button>
              ) : (
                <a href={HOTMART_CHECKOUT_URL} className="xeque-cta-btn">
                  <span>QUERO O XEQUE SOCIAL</span>
                </a>
              )}
              <p className="xeque-hero-micro-footer">
                Livro digital • acesso vitalício • leitura no celular, tablet ou computador
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="xeque-section xeque-compact-problem-section">
        <div className="xeque-container-editorial">
          <span className="xeque-tag-badge">ANTES DE REAGIR</span>
          <h2 className="xeque-headline-medium xeque-text-left-desktop">
            O problema começa quando você transforma uma hipótese em certeza.
          </h2>
          <p className="xeque-compact-lead">
            Uma resposta fria, uma demora ou uma mudança de comportamento pode fazer você cobrar, insistir, se explicar ou se afastar antes de entender o que realmente aconteceu.
          </p>

          <div className="xeque-compact-example">
            <div>
              <span>O QUE ACONTECEU</span>
              <p>A mensagem foi visualizada e ainda não houve resposta.</p>
            </div>
            <div>
              <span>O QUE SUA CABEÇA PODE CONCLUIR</span>
              <p>“Está me ignorando. Fiz alguma coisa. Preciso resolver agora.”</p>
            </div>
            <div>
              <span>O QUE O LIVRO TREINA</span>
              <p>Separar fato de interpretação e escolher o próximo movimento com mais critério.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="xeque-section xeque-testimonials-section">
        <div className="xeque-container">
          <span className="xeque-tag-badge">DEPOIMENTOS</span>
          <h2 className="xeque-headline-medium">O que leitores do Xeque Social estão dizendo.</h2>

          <div className="xeque-testimonials-grid">
            {testimonialImages.map((item) => (
              <figure key={item.src} className="xeque-testimonial-card">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="xeque-testimonial-img"
                  loading="lazy"
                  decoding="async"
                />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="xeque-section xeque-compact-included-section">
        <div className="xeque-container">
          <span className="xeque-tag-badge">O QUE VOCÊ RECEBE</span>
          <h2 className="xeque-headline-medium">Direto ao ponto, sem transformar a página em uma aula.</h2>

          <div className="xeque-compact-included-grid">
            <div className="xeque-compact-included-list">
              <div><IconCheck size={16} /><span>187 páginas organizadas em 30 capítulos e 5 partes</span></div>
              <div><IconCheck size={16} /><span>Exemplos de mensagens, encontros, conflitos e afastamentos</span></div>
              <div><IconCheck size={16} /><span>Protocolo LANCE para organizar o primeiro movimento</span></div>
              <div><IconCheck size={16} /><span>Prática orientada de 7 dias</span></div>
              <div><IconCheck size={16} /><span>Acesso vitalício ao livro digital</span></div>
            </div>

            <div className="xeque-compact-pages">
              {samplePages.map((item) => (
                <figure key={item.src}>
                  <img src={item.src} alt={item.alt} loading="lazy" decoding="async" />
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="xeque-section xeque-offer-section" id="oferta">
        <div className="xeque-container">
          <div className="xeque-offer-main-card">
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
                Para entender melhor a situação antes de deixar a ansiedade decidir por você.
              </p>
            </div>

            <div className="xeque-offer-price-wrap">
              <div className="xeque-offer-price">
                <span className="xeque-price-currency">R$</span>
                <span className="xeque-price-value">37</span>
                <span className="xeque-price-cents">,00</span>
              </div>
              <span className="xeque-offer-payment-label">pagamento único</span>
            </div>

            <ul className="xeque-offer-features-list">
              <li><IconCheck size={16} className="xeque-feat-check" /><span>187 páginas • 30 capítulos • 5 partes</span></li>
              <li><IconCheck size={16} className="xeque-feat-check" /><span>Prática orientada de 7 dias</span></li>
              <li><IconCheck size={16} className="xeque-feat-check" /><span>Acesso vitalício</span></li>
              <li><IconCheck size={16} className="xeque-feat-check" /><span>Garantia de 7 dias</span></li>
            </ul>

            {!isLaunched ? (
              <button type="button" className="xeque-cta-btn xeque-offer-cta-btn xeque-cta-btn-locked" disabled aria-disabled="true">
                <IconLock size={16} className="xeque-lock-icon" />
                <span>EM BREVE</span>
              </button>
            ) : (
              <a href={HOTMART_CHECKOUT_URL} className="xeque-cta-btn xeque-offer-cta-btn">
                <span>QUERO O XEQUE SOCIAL</span>
              </a>
            )}

            <div className="xeque-offer-trust-footer">
              <span><IconLock size={12} /> Pagamento pela Hotmart</span>
              <span>•</span>
              <span><IconLightning size={12} /> Acesso vitalício</span>
              <span>•</span>
              <span><IconShield size={12} /> 7 dias de garantia</span>
            </div>
          </div>
        </div>
      </section>

      <section className="xeque-section xeque-compact-after-offer">
        <div className="xeque-container-narrow">
          <div className="xeque-guarantee-editorial">
            <IconShield size={38} className="xeque-guarantee-svg-icon" />
            <div>
              <h3 className="xeque-guarantee-title">Você tem 7 dias para conhecer o material.</h3>
              <p className="xeque-guarantee-desc">
                Se entender que o Xeque Social não faz sentido para você dentro desse prazo, pode solicitar o reembolso pelos canais da plataforma de pagamento.
              </p>
            </div>
          </div>

          <div className="xeque-compact-faq-wrap">
            <h2 className="xeque-headline-medium">Dúvidas rápidas</h2>
            <div className="xeque-faq-editorial-list">
              {faqs.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div key={faq.q} className="xeque-faq-editorial-item">
                    <button
                      type="button"
                      className="xeque-faq-editorial-question"
                      onClick={() => toggleFaq(index)}
                      aria-expanded={isOpen}
                    >
                      <span>{faq.q}</span>
                      <span>{isOpen ? '−' : '+'}</span>
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
        </div>
      </section>

      <footer className="xeque-footer-editorial">
        <p>© 2026 João Giovanni. Todos os direitos reservados.</p>
      </footer>

    </div>
  );
}
