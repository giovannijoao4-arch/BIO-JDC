import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { siteConfig } from './data/siteConfig';
import { HeaderProfile } from './components/HeaderProfile';
import { FeaturedBanner } from './components/FeaturedBanner';
import { ProductShowcase } from './components/ProductShowcase';
import { FreeContent } from './components/FreeContent';
import { Ecosystem } from './components/Ecosystem';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AnalyticsSetup } from './components/AnalyticsSetup';
import { IconChessPawn } from './components/Icons';
import './index.css';
import './styles/components.css';

/**
 * Route Level Code-Splitting for /xeque-social
 * Reduces initial JavaScript payload for Bio visitors
 */
const XequeSocial = lazy(() =>
  import('./pages/XequeSocial').then((module) => ({ default: module.XequeSocial }))
);

/**
 * Global ScrollToTop Component
 * Disables browser automatic scroll restoration and guarantees scrollY = 0
 * for ALL route transitions including Links, navigate(), Back & Forward buttons.
 */
function ScrollToTop() {
  const { pathname } = useLocation();

  // 1. Force manual scroll restoration globally
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  // 2. Instant scroll reset to top on pathname change (Link, navigate)
  useEffect(() => {
    const resetScroll = () => {
      window.scrollTo(0, 0);
      try {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      } catch (e) {
        // Fallback for older browsers
      }
    };

    resetScroll();
    const rafId = requestAnimationFrame(resetScroll);
    return () => cancelAnimationFrame(rafId);
  }, [pathname]);

  // 3. Handle browser Back / Forward popstate events
  useEffect(() => {
    const handlePopState = () => {
      window.scrollTo(0, 0);
      requestAnimationFrame(() => {
        window.scrollTo(0, 0);
      });
    };

    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  return null;
}

function HomePage() {
  return (
    <>
      {/* Analytics Loader */}
      <AnalyticsSetup analytics={siteConfig.analytics} />

      {/* Main Wide Layout Container for Profile, Wide Hero Banner & Product Showcase */}
      <div className="app-container-wide">
        {/* Seção 1 — Perfil */}
        <HeaderProfile profile={siteConfig.profile} />

        {/* Seção 1B — Primeiro Banner Largo (VTSD Style - Sem Botão) */}
        <FeaturedBanner banner={siteConfig.featuredBanner} />

        {/* Divisor Visual Estratégico */}
        <div className="chess-divider" style={{ width: '100%', maxWidth: '1200px', margin: '1.5rem auto' }} aria-hidden="true">
          <span className="chess-divider-icon"><IconChessPawn size={16} /></span>
        </div>

        {/* Seção 2 — Vitrine de Produtos (4 Produtos) */}
        <ProductShowcase
          sectionConfig={siteConfig.productsSection}
          products={siteConfig.products}
        />
      </div>

      {/* Full-Width Section Wrapper for Bottom Sections (VTSD Exact Ref on Continuous #05070A) */}
      <div className="full-width-section-wrapper">
        <div className="section-inner-container">
          {/* Seção 3 — Nova Seção de Parcerias (No lugar de "Não sabe por onde começar?") */}
          <Ecosystem config={siteConfig.ecosystemSection} />

          {/* Divisor Visual Estratégico */}
          <div className="chess-divider" style={{ width: '100%', maxWidth: '1200px', margin: '2rem 0' }} aria-hidden="true">
            <span className="chess-divider-icon"><IconChessPawn size={16} /></span>
          </div>

          {/* Seção 4 — Conteúdos Gratuitos (YouTube, Spotify, Blog JDC) */}
          <FreeContent
            sectionConfig={siteConfig.freeContentSection}
            contents={siteConfig.freeContents}
          />

          {/* Seção 5 — Contato / Time Comercial (VTSD 950px Green Button) */}
          <ContactSection contact={siteConfig.contact} />

          {/* Rodapé VTSD (1 Linha Horizontal no Desktop) */}
          <Footer footer={siteConfig.footer} />
        </div>
      </div>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<div style={{ backgroundColor: '#050506', minHeight: '100vh' }} />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/xeque-social" element={<XequeSocial />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
