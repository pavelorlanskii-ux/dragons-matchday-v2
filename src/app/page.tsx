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

// Cloud assets for decorative elements
const CLOUDS = {
  cloud14: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/14-RMKJZnq5vT9N3qHm8qfA3KsY0MAo8L.png",
  cloud15: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/15-0MEuYK4qmfLenoH77hnGcLCxjvAreZ.png",
  cloud18: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/18-2Vr0fp2vKC1OeNvWDctY3j3yn3z4yc.png",
};

const PATTERN_BG = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%BF%D0%B0%D1%82%D1%82%D0%B5%D1%80%D0%BD-qLnjkta9xCtCtULLZrxwb41jfn1K36.jpg";

export default function Page() {
  return (
    <div className="relative flex min-h-screen flex-col text-[var(--md-text-primary)]">
      {/* Pattern Background */}
      <div className="fixed inset-0 z-0">
        <Image
          src={PATTERN_BG}
          alt=""
          fill
          className="object-cover"
          priority
          aria-hidden="true"
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-[#041525]/75" aria-hidden="true" />
      </div>

      {/* Decorative Clouds */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
        {/* Cloud top-left */}
        <Image
          src={CLOUDS.cloud14}
          alt=""
          width={280}
          height={180}
          className="absolute -left-20 top-[15%] opacity-15"
        />
        {/* Cloud bottom-right */}
        <Image
          src={CLOUDS.cloud15}
          alt=""
          width={320}
          height={200}
          className="absolute -right-24 bottom-[20%] opacity-10"
        />
        {/* Cloud middle-left */}
        <Image
          src={CLOUDS.cloud18}
          alt=""
          width={200}
          height={130}
          className="absolute -left-12 top-[55%] opacity-10"
        />
      </div>

      {/* Skip Link */}
      <a href="#main-content" className="md-skip-link">
        Перейти к основному содержимому
      </a>

      <div className="relative z-20">
        <Header />
      </div>

      <main id="main-content" className="relative z-10 flex-1">
        {/* Hero Section */}
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

        {/* BetBoom Odds Section */}
        <section id="odds" className="mx-auto w-full max-w-[1200px] px-4 py-6 sm:px-6 lg:px-8">
          <PartnerOddsBar
            partner={matchday.partner}
            odds={matchday.odds}
          />
        </section>

        {/* Highlight Section */}
        <section id="highlight" className="mx-auto w-full max-w-[1200px] px-4 py-6 sm:px-6 lg:px-8">
          <HighlightBanner highlight={matchday.highlight} />
        </section>

        {/* Offers Section - Full width dark bg */}
        <section id="offers" className="py-12 md:py-16 lg:py-20">
          <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
            <SectionHeader
              title="Специальные предложения"
              subtitle="Партнерские предложения и бонусы для болельщиков."
            />
            <OffersGrid offers={matchday.offers} partnerName={matchday.partner.name} />
          </div>
        </section>

        {/* Program Section */}
        <section id="program" className="py-12 md:py-16 lg:py-20">
          <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
            <SectionHeader
              title="Программа вечера"
              subtitle="Фильтруйте по интересам и ориентирам. Все активности работают в указанное время."
            />
            <ActivityCardGrid
              activities={matchday.activities}
              tags={matchday.filters.tags}
              badges={matchday.filters.badges}
            />
          </div>
        </section>

        {/* CTA Section */}
        <section id="cta" className="mx-auto w-full max-w-[1200px] px-4 py-12 sm:px-6 md:py-16 lg:px-8">
          <CTASection />
        </section>
      </main>

      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}
