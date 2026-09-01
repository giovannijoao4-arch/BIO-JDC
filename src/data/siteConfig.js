/**
 * CONFIGURAÇÃO CENTRAL DO SITE - JOÃO GIOVANNI (@joaogiovannils)
 */

export const siteConfig = {
  // 1. PERFIL
  profile: {
    name: "João Giovanni",
    username: "@joaogiovannils",
    avatarUrl: "/images/profile.jpg",
    slogan: "Aprenda a entender o jogo antes de fazer seu próximo movimento.",
    socials: [
      {
        id: "instagram",
        name: "Instagram",
        url: "https://instagram.com/joaogiovannils",
        icon: "Instagram",
      },
      {
        id: "youtube",
        name: "YouTube",
        url: "https://youtube.com/@joaogiovannils",
        icon: "Youtube",
      },
      {
        id: "tiktok",
        name: "TikTok",
        url: "https://tiktok.com/@joaogiovannils",
        icon: "Tiktok",
      },
    ],
  },

  // 2. DESTAQUE PRINCIPAL (DESKTOP & MOBILE RESPONSIVO)
  featuredBanner: {
    show: true,
    tag: "EM DESTAQUE",
    title: "Pare de se perder. Comece a dominar.",
    description: "Entenda pessoas. Leia situações. Aja com clareza. Seja respeitado.",
    bgImage: "/images/featured_banner.jpg",
    mobileBgImage: "/images/featured_banner_mobile.jpg",
    link: "/xeque-social",
  },

  // 3. PRODUTOS (ACORDEÃO COMPLETO VTSD)
  productsSection: {
    title: "Conheça o universo que te torna inevitável",
    subtitle: "",
  },
  products: [
    {
      id: "xeque-social",
      name: "Xeque Social",
      summary: "O Xeque Social é um guia prático que te ensina a perceber o que está acontecendo em uma interação antes de reagir no automático. O resultado é simples: você para de cair tão fácil em pressão, culpa, provocação, silêncio e outros comportamentos que mexem com você.",
      learnTitle: "No Xeque Social, você vai aprender:",
      learnItems: [
        "Como identificar padrões de pressão, provocação, culpa, rejeição, silêncio e invasão.",
        "Como perceber os gatilhos que fazem você reagir sem pensar.",
        "Como entender o que a situação está tentando provocar em você.",
        "Como separar fato, interpretação e emoção.",
        "Como escolher uma primeira resposta melhor.",
        "Como evitar se explicar demais, ceder por impulso ou entrar em discussões inúteis."
      ],
      recommendedTitle: "Para quem o Xeque Social é recomendado:",
      recommendedItems: [
        "Quem sente que reage no automático em muitas situações.",
        "Quem costuma perceber tarde demais que caiu em um jogo emocional.",
        "Quem quer entender melhor o comportamento das pessoas.",
        "Quem quer desenvolver leitura social de forma simples e prática.",
        "Quem quer ter mais clareza antes de responder."
      ],
      cta: "CONHECER O XEQUE SOCIAL",
      link: "/xeque-social",
      comingSoon: false,
      launchBadge: "LIBERA 07/09 ÀS 20H",
    },
    {
      id: "jogo-de-cintura",
      name: "Jogo de Cintura",
      summary: "O Jogo de Cintura é uma formação prática que te ensina a se movimentar melhor nas relações, nas conversas e nas situações sociais do dia a dia. O resultado aqui é outro: você não aprende só a perceber o jogo, mas a agir melhor dentro dele.",
      learnTitle: "No Jogo de Cintura, você vai aprender:",
      learnItems: [
        "Como melhorar sua comunicação.",
        "Como desenvolver presença, postura e confiança.",
        "Como se posicionar sem ser agressivo nem passivo.",
        "Como conversar melhor em diferentes contextos.",
        "Como lidar com conflitos e situações desconfortáveis.",
        "Como se adaptar ao ambiente sem perder sua posição.",
        "Como criar repertório para agir bem em várias situações sociais."
      ],
      recommendedTitle: "Para quem o Jogo de Cintura é recomendado:",
      recommendedItems: [
        "Quem já entende algumas coisas sobre comportamento, mas não consegue aplicar.",
        "Quem quer melhorar sua comunicação e sua postura.",
        "Quem sente que trava em conversas, conflitos ou relações.",
        "Quem quer se tornar mais seguro socialmente.",
        "Quem quer aprender a agir melhor em vez de apenas analisar."
      ],
      cta: "ENTRE NO JOGO DE CINTURA",
      link: "#",
      comingSoon: true,
    },
    {
      id: "lei-do-tabuleiro",
      name: "Lei do Tabuleiro",
      summary: "A Lei do Tabuleiro é o nível avançado que te ensina a entender o que realmente move uma situação e influencia o resultado dela. O resultado aqui não é só reagir melhor nem apenas se movimentar melhor: é começar a entender como o jogo é conduzido e como seus movimentos mudam a direção dele.",
      learnTitle: "Na Lei do Tabuleiro, você vai aprender:",
      learnItems: [
        "Como percepção e expectativa mudam o rumo de uma interação.",
        "Como contexto e ambiente influenciam decisões e comportamentos.",
        "Como reconhecer forças invisíveis por trás de uma situação.",
        "Como antecipar reações e cenários.",
        "Como compreender melhor influência, direção e condução.",
        "Como alinhar presença, intenção e comportamento ao resultado que você quer construir.",
        "Como deixar de ser apenas alguém que responde e passar a entender o que move o tabuleiro."
      ],
      recommendedTitle: "Para quem a Lei do Tabuleiro é recomendada:",
      recommendedItems: [
        "Quem já sabe perceber melhor as situações e quer ir além.",
        "Quem quer entender por que certas interações caminham para determinados resultados.",
        "Quem quer desenvolver uma visão mais estratégica do comportamento humano.",
        "Quem quer compreender melhor influência, contexto e direção.",
        "Quem quer acessar um nível mais profundo do método."
      ],
      cta: "DESCUBRA A LEI DO TABULEIRO",
      link: "#",
      comingSoon: true,
    },
    {
      id: "mentoria",
      name: "Mentoria",
      summary: "A Mentoria é o nível mais próximo e personalizado do método, onde tudo é aplicado diretamente à sua realidade. O resultado aqui é aceleração: você recebe direção, correção e acompanhamento para evoluir no seu caso específico.",
      learnTitle: "Na Mentoria, você vai receber:",
      learnItems: [
        "Análise das suas situações reais.",
        "Direção personalizada para seus desafios.",
        "Correção de postura, comunicação e posicionamento.",
        "Clareza sobre erros que você sozinho talvez não perceba.",
        "Ajustes práticos para aplicar o método na sua vida.",
        "Acompanhamento mais próximo da sua evolução.",
        "Orientação individual para transformar entendimento em resultado."
      ],
      recommendedTitle: "Para quem a Mentoria é recomendada:",
      recommendedItems: [
        "Quem quer um acompanhamento mais próximo.",
        "Quem quer aplicar o método na própria vida com mais precisão.",
        "Quem sente que precisa de direção personalizada.",
        "Quem quer corrigir pontos cegos mais rápido.",
        "Quem quer acelerar a evolução comportamental."
      ],
      cta: "ENTRE PARA A MENTORIA",
      link: "#",
      comingSoon: true,
    },
  ],

  // 4. SEÇÃO: PARCERIAS
  ecosystemSection: {
    enabled: true,
    title: "Parcerias",
    subtitle: "",
    items: [
      {
        id: "parceiro-1",
        name: "Espaço reservado para parceiro",
        image: "/images/partner_banner.jpg",
        cta: "ATIVAR CAMPANHA",
        link: "#",
      },
    ],
  },

  // 5. SEÇÃO: CONTEÚDOS GRATUITOS
  freeContentSection: {
    title: "Conteúdos Gratuitos",
  },
  freeContents: [
    {
      id: "youtube",
      title: "YouTube JDC",
      platform: "YouTube",
      icon: "Youtube",
      image: "/images/yt_cover.jpg",
      description: "Análises de comportamento e aulas em vídeo.",
      link: "#",
      comingSoon: true,
    },
    {
      id: "spotify",
      title: "Spotify Podcast",
      platform: "Spotify",
      icon: "Spotify",
      image: "/images/spotify_cover.jpg",
      description: "Episódios sobre estratégia e comunicação.",
      link: "#",
      comingSoon: true,
    },
    {
      id: "blog",
      title: "Blog JDC",
      platform: "Blog",
      icon: "Blog",
      image: "/images/blog_cover.jpg",
      description: "Artigos e ensaios semanais estratégicos.",
      link: "#",
      comingSoon: true,
    },
  ],

  // 6. SEÇÃO: CONTATO / TIME COMERCIAL
  contact: {
    title: "Quer falar comigo ou com minha equipe?",
    subtitle: "Atendimento comercial, parcerias e suporte de alunos.",
    ctaText: "FALAR COM A EQUIPE COMERCIAL",
    link: "https://wa.me/558498337223?text=Ol%C3%A1%21%20Vim%20pelo%20site%20do%20Jogo%20de%20Cintura%20e%20quero%20falar%20com%20o%20time%20comercial.",
  },

  // 7. RODAPÉ
  footer: {
    copyright: "© 2026 Closy Company. Todos os direitos reservados.",
    privacyLink: "#politica-de-privacidade",
    termsLink: "#termos-de-uso",
  },

  // 8. METADADOS E ANALYTICS
  seo: {
    title: "João Giovanni | Central Oficial & Estratégia Comportamental",
    description: "Pare de se perder. Comece a dominar. Aprenda a entender o jogo antes de fazer seu próximo movimento.",
    url: "https://bio.joaogiovani.com.br",
    ogImage: "/images/featured_banner.jpg",
  },
  analytics: {
    googleAnalyticsId: "",
    metaPixelId: "",
    gtmId: "",
  },
};
