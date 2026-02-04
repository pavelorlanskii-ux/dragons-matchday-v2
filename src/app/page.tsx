import { matchday } from "@/data/matchday";
import { TopNav } from "@/components/TopNav";
import { MatchCard } from "@/components/MatchCard";
import { HighlightBanner } from "@/components/HighlightBanner";
import { SectionHeader } from "@/components/SectionHeader";
import { ActivityCardGrid } from "@/components/ActivityCardGrid";
import { OffersGrid } from "@/components/OffersGrid";
import { CTASection } from "@/components/CTASection";
import { PartnerOddsBar } from "@/components/PartnerOddsBar";

export default function Page() {
  return (
    <main className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      {/* Subtle brand gradient background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-turquoise)]/5 via-transparent to-[var(--brand-yellow)]/3" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--brand-turquoise)/10,_transparent_50%)]" />
      </div>

      <TopNav />

      {/* Main container - Mobile-first spacing */}
      <div className="mx-auto max-w-[var(--container-max-width)] px-4 py-10 sm:px-6 md:px-8 md:py-14 lg:px-12 lg:py-20">
        {/* Hero Section */}
        <section className="mb-12 sm:mb-16 md:mb-20">
          <h1 className="text-3xl font-bold leading-tight tracking-tight text-[var(--text-primary)] sm:text-4xl md:text-5xl lg:text-6xl lg:leading-[1.1]">
            Вечер хоккея и шоу на арене
          </h1>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-[var(--text-secondary)] sm:mt-4 sm:text-lg md:text-xl">
            Приезжайте заранее, чтобы успеть на активности, сделать фото и поймать правильное матчевое настроение.
          </p>
        </section>

        {/* Match Card Section */}
        <section className="mb-12 sm:mb-16 md:mb-20" id="tickets">
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
        <section className="mb-12 sm:mb-16 md:mb-20" id="odds">
          <SectionHeader
            title="Коэффициенты партнёра"
            subtitle="Официальные коэффициенты от BetBoom"
          />
          <div className="mt-6">
            <PartnerOddsBar
              partner={matchday.partner}
              odds={matchday.odds}
            />
          </div>
        </section>

        {/* Highlight Section */}
        <section className="mb-12 sm:mb-16 md:mb-20" id="highlight">
          <HighlightBanner highlight={matchday.highlight} />
        </section>

        {/* Program Section */}
        <section className="mb-12 sm:mb-16 md:mb-20" id="program">
          <SectionHeader
            title="Программа вечера"
            subtitle="Тайминги есть в данных, но на карточках не показываем. Фильтруйте по интересам и ориентирам."
          />
          <div className="mt-6">
            <ActivityCardGrid
              activities={matchday.activities}
              tags={matchday.filters.tags}
              badges={matchday.filters.badges}
            />
          </div>
        </section>

        {/* Offers Section */}
        <section className="mb-12 sm:mb-16 md:mb-20" id="offers">
          <SectionHeader
            title="Специальные предложения"
            subtitle="Партнерские предложения и бонусы. Условия смотрите на карточках."
          />
          <div className="mt-6">
            <OffersGrid offers={matchday.offers} />
          </div>
        </section>

        {/* CTA Section */}
        <section className="mb-8">
          <CTASection />
        </section>
      </div>
    </main>
  );
}
