import { useEffect } from 'react';

export function AnalyticsSetup({ analytics }) {
  useEffect(() => {
    if (!analytics) return;

    // 1. Google Tag Manager (GTM)
    if (analytics.gtmId && !document.getElementById('gtm-script')) {
      const gtmScript = document.createElement('script');
      gtmScript.id = 'gtm-script';
      gtmScript.async = true;
      gtmScript.src = `https://www.googletagmanager.com/gtm.js?id=${analytics.gtmId}`;
      document.head.appendChild(gtmScript);
    }

    // 2. Google Analytics 4 (GA4)
    if (analytics.googleAnalyticsId && !document.getElementById('ga-script')) {
      const gaScript = document.createElement('script');
      gaScript.id = 'ga-script';
      gaScript.async = true;
      gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${analytics.googleAnalyticsId}`;
      document.head.appendChild(gaScript);

      const gaInitScript = document.createElement('script');
      gaInitScript.id = 'ga-init-script';
      gaInitScript.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${analytics.googleAnalyticsId}');
      `;
      document.head.appendChild(gaInitScript);
    }

    // 3. Meta Pixel (Facebook)
    if (analytics.metaPixelId && !document.getElementById('meta-pixel-script')) {
      const fbScript = document.createElement('script');
      fbScript.id = 'meta-pixel-script';
      fbScript.innerHTML = `
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '${analytics.metaPixelId}');
        fbq('track', 'PageView');
      `;
      document.head.appendChild(fbScript);
    }
  }, [analytics]);

  return null;
}
