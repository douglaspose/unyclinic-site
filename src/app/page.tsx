import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import Pains from "@/components/sections/Pains";
import HowItWorks from "@/components/sections/HowItWorks";
import Features from "@/components/sections/Features";
import Showcase from "@/components/sections/Showcase";
import Multiclinic from "@/components/sections/Multiclinic";
import Segments from "@/components/sections/Segments";
import Pricing from "@/components/sections/Pricing";
import Faq from "@/components/sections/Faq";
import FinalCta from "@/components/sections/FinalCta";
import { brand, faq, pricing, whatsapp } from "@/content/site";

/**
 * Dados estruturados: fazem o Google entender que a página descreve um
 * software com planos e preços, e habilitam o rich result de FAQ.
 */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: brand.name,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description: brand.legal,
      offers: pricing.plans.map((plan) => ({
        "@type": "Offer",
        name: plan.name,
        price: plan.price,
        priceCurrency: "BRL",
        category: "SubscriptionService",
      })),
    },
    {
      "@type": "Organization",
      name: brand.name,
      url: "https://unyclinic.com.br",
      email: brand.email,
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        telephone: `+${whatsapp.e164}`,
        areaServed: "BR",
        availableLanguage: "Portuguese",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: faq.items.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Header />

      <main>
        {/* 1. Promessa */}
        <Hero />
        {/* 2. Para quem é, de relance */}
        <Marquee />
        {/* 3. Dor reconhecida — precede as features de propósito */}
        <Pains />
        {/* 4. A virada */}
        <HowItWorks />
        {/* 5. Amplitude */}
        <Features />
        {/* 6. Profundidade: o momento de maior impacto */}
        <Showcase />
        {/* 7. Confiança técnica */}
        <Multiclinic />
        {/* 8. "Serve pro meu caso?" */}
        <Segments />
        {/* 9. Preço, só depois da prova */}
        <Pricing />
        {/* 10. Últimas objeções */}
        <Faq />
        {/* 11. Ação */}
        <FinalCta />
      </main>

      <Footer />

      <WhatsAppButton />
    </>
  );
}
