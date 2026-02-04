import { matchday } from "@/data/matchday";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { MatchCard } from "@/components/MatchCard";
import { HighlightBanner } from "@/components/HighlightBanner";
import { SectionHeader } from "@/components/SectionHeader";
import { ActivityCardGrid } from "@/components/ActivityCardGrid";
import { OffersGrid } from "@/components/OffersGrid";
import { CTASection } from "@/components/CTASection";
import { PartnerOddsBar } from "@/components/PartnerOddsBar";
import Image from "next/image";

export default function Page() {
  return (
    <div className="relative flex min-h-screen flex-col text-[var(--md-text-primary)]">
      {/* Background Pattern */}
      <div className="fixed inset-0 z-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%BF%D0%B0%D1%82%D1%82%D0%B5%D1%80%D0%BD-UZl85fq2cADJVF10CvuMk1iKkBw337.jpg"
          alt=""
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1628]/90 via-[#0A1628]/85 to-[#0A1628]/95" />
      </div>

      {/* Decorative Clouds - Sparse placement */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
        {/* Top left cloud */}
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/18-EK9ObLgUG8eQmlkLEqtYJIaJKcH9HU.png"
          alt=""
          width={280}
          height={160}
          className="absolute -left-20 top-[15%] opacity-20"
        />
        {/* Bottom right cloud */}
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/15-QcP9iwKQDO0sK8r6g78Ux4EjOCCnpL.png"
          alt=""
          width={320}
          height={180}
          className="absolute -right-24 bottom-[20%] opacity-15"
        />
      </div>

      {/* Skip Link */}
      <a href="#main-content" className="md-skip-link">
        Перейти к основному содержимому
      </a>

      <Header />

      <main id="main-content" className="relative z-10 flex-1">
        {/* Hero Section - Poster-like with dynamic background */}
        <HeroSection
          title="Вечер хоккея и шоу на арене"
          subtitle="Приезжайте заранее, чтобы успеть на активности, сделать фото и поймать правильное матчевое настроение."
          partnerName={matchday.partner.name}
        >
          <MatchCard
            leftMetaLines={matchday.match.leftMetaLines}
            title={matchday.match.title}
            homeLogoText={matchday.match.teams.home.logoText}
            awayLogoText={matchday.match.teams.away.logoText}
            matchDateIso={matchday.match.matchDateIso}
            buyHref={matchday.match.ctaBuy.href}
            homeHref={matchday.match.ctaHome.href}
            partnerName={matchday.partner.name}
          />
        </HeroSection>

        {/* Main container for remaining content */}
        <div className="md-container py-2">
          {/* BetBoom Odds Section - Featured Partner Block */}
          <section className="md-section" id="odds">
            <PartnerOddsBar
              partner={matchday.partner}
              odds={matchday.odds}
            />
          </section>

          {/* Highlight Section */}
          <section className="md-section" id="highlight">
            <HighlightBanner highlight={matchday.highlight} />
          </section>

          {/* Program Section */}
          <section className="md-section" id="program">
            <SectionHeader
              title="Программа вечера"
              subtitle="Фильтруйте по интересам и ориентирам. Все активности работают в указанное время."
            />
            <div className="mt-6 md:mt-8">
              <ActivityCardGrid
                activities={matchday.activities}
                tags={matchday.filters.tags}
                badges={matchday.filters.badges}
              />
            </div>
          </section>

          {/* Partner Divider */}
          <div className="md-partner-divider mx-auto mb-10 max-w-[200px] md:mb-14" aria-hidden="true" />

          {/* Offers Section */}
          <section className="md-section" id="offers">
            <SectionHeader
              title="Специальные предложения"
              subtitle="Партнерские предложения и бонусы для болельщиков."
            />
            <div className="mt-6 md:mt-8">
              <OffersGrid offers={matchday.offers} partnerName={matchday.partner.name} />
            </div>
          </section>

          {/* CTA Section */}
          <section className="mb-8 md:mb-12" id="tickets">
            <CTASection />
          </section>
        </div>
      </main>

      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}
