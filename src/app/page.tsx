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

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--md-bg)] text-[var(--md-text-primary)]">
      {/* Skip Link */}
      <a href="#main-content" className="md-skip-link">
        Перейти к основному содержимому
      </a>

      <Header />

      <main id="main-content" className="flex-1">
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

      <Footer />
    </div>
  );
}
