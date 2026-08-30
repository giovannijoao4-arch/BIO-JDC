import React from 'react';
import { siteConfig } from './data/siteConfig';
import { HeaderProfile } from './components/HeaderProfile';
import { FeaturedBanner } from './components/FeaturedBanner';
import { ProductShowcase } from './components/ProductShowcase';
import { FreeContent } from './components/FreeContent';
import { Ecosystem } from './components/Ecosystem';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AnalyticsSetup } from './components/AnalyticsSetup';
import './index.css';
import './styles/components.css';

export default function App() {
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
          <span className="chess-divider-icon">♟</span>
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
            <span className="chess-divider-icon">♟</span>
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
