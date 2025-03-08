import { CtaSection } from '@/components/sections/cta-section';
import { FeaturesSection } from '@/components/sections/features-section';
import { Footer } from '@/components/sections/footer';
import { HeroSection } from '@/components/sections/hero-section';
import { PricingSection } from '@/components/sections/pricing-section';
import { SiteHeader } from '@/components/sections/site-header';
import { UseCasesSection } from '@/components/sections/use-cases-section';

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <HeroSection />
          <FeaturesSection />
          <UseCasesSection />
          <PricingSection />
          <CtaSection />
        </div>
      </main>
      <Footer className="w-full" />
    </div>
  );
}
