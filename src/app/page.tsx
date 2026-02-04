import { matchday } from "@/data/matchday";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
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
        {/* Main container */}
        <div className="md-container py-8 md:py-12 lg:py-16">
          {/* Hero Section */}
          <section className="md-section">
            <h1 className="text-balance text-3xl font-bold leading-tight tracking-tight text-[var(--md-text-primary)] sm:text-4xl md:text-5xl lg:text-[3.5rem] lg:leading-[1.1]">
              Вечер хоккея и шоу на арене
            </h1>
            <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-[var(--md-text-secondary)] sm:text-lg md:mt-5 md:text-xl">
              Приезжайте заранее, чтобы успеть на активности, сделать фото и поймать правильное матчевое настроение.
            </p>
          </section>

          {/* Match Card Section */}
          <section className="md-section" id="tickets">
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
          </section>

          {/* BetBoom Odds Section - Prominent placement */}
          <section className="md-section" id="odds">
            <SectionHeader
              title="Коэффициенты партнёра"
              subtitle="Официальные коэффициенты от BetBoom"
            />
            <div className="mt-6 md:mt-8">
              <PartnerOddsBar
                partner={matchday.partner}
                odds={matchday.odds}
              />
            </div>
          </section>

          {/* Highlight Section */}
          <section className="md-section" id="highlight">
            <HighlightBanner highlight={matchday.highlight} />
          </section>

          {/* Program Section */}
          <section className="md-section" id="program">
            <SectionHeader
              title="Программа вечера"
              subtitle="Тайминги есть в данных, но на карточках не показываем. Фильтруйте по интересам и ориентирам."
            />
            <div className="mt-6 md:mt-8">
              <ActivityCardGrid
                activities={matchday.activities}
                tags={matchday.filters.tags}
                badges={matchday.filters.badges}
              />
            </div>
          </section>

          {/* Offers Section */}
          <section className="md-section" id="offers">
            <SectionHeader
              title="Специальные предложения"
              subtitle="Партнерские предложения и бонусы. Условия смотрите на карточках."
            />
            <div className="mt-6 md:mt-8">
              <OffersGrid offers={matchday.offers} />
            </div>
          </section>

          {/* CTA Section */}
          <section className="mb-0">
            <CTASection />
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
