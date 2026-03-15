export function OrganizationJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "FITCHECK",
    url: "https://tryfitcheck.co",
    logo: "https://tryfitcheck.co/og-image.png",
    contactPoint: {
      "@type": "ContactPoint",
      email: "hello@tryfitcheck.co",
      contactType: "customer support",
    },
    sameAs: [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function SoftwareApplicationJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "FITCHECK",
    operatingSystem: "iOS",
    applicationCategory: "LifestyleApplication",
    description:
      "AI-powered outfit feedback app that scores your fit, color, and style with personalized recommendations.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
    installUrl:
      "https://apps.apple.com/us/app/fitcheck-dress-better/id6757345061",
    screenshot: "https://tryfitcheck.co/iphone-mockup.png",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function WebSiteJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "FITCHECK",
    url: "https://tryfitcheck.co",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function FAQJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is FITCHECK?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "FITCHECK is an AI-powered outfit scanner. Point your camera at any outfit and get instant feedback on your look including scores for fit, color, and style.",
        },
      },
      {
        "@type": "Question",
        name: "How do I scan an outfit?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Open the app, tap the camera button, and point it at your outfit. FITCHECK will analyze your look and give you feedback within seconds.",
        },
      },
      {
        "@type": "Question",
        name: "Why does FITCHECK need camera access?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Camera access is required to scan your outfits. Without it, the core feature of the app cannot function. You can update this permission in your iPhone's Settings > FITCHECK > Camera.",
        },
      },
      {
        "@type": "Question",
        name: "How do I manage or cancel my subscription?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Subscriptions are managed through your Apple ID. Go to Settings > [your name] > Subscriptions on your iPhone to view or cancel your FITCHECK subscription.",
        },
      },
      {
        "@type": "Question",
        name: "How do I delete my account?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can delete your account directly within the app under Settings > Delete Account. This will permanently remove your data.",
        },
      },
      {
        "@type": "Question",
        name: "What data does FITCHECK collect?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "FITCHECK collects account information via Apple Sign-In, outfit photographs for AI analysis, style scores and feedback, and subscription status. Full details are in the Privacy Policy.",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
