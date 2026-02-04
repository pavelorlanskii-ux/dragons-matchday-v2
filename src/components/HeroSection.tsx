import type { ReactNode } from "react";

type HeroSectionProps = {
  title: string;
  subtitle: string;
  partnerName: string;
  children: ReactNode;
};

export function HeroSection({ title, subtitle, partnerName, children }: HeroSectionProps) {
  return (
    <section className="relative" id="tickets">
      {/* Content */}
      <div className="md-container py-8 md:py-12 lg:py-16">
        <div className="flex flex-col gap-8 lg:gap-10">
          {/* Text Block */}
          <div className="max-w-3xl">
            {/* Partner Badge in Hero */}
            <div className="mb-4 inline-flex items-center gap-2">
              <span className="md-badge md-badge-partner">
                Партнер матча: {partnerName}
              </span>
            </div>

            {/* Headline */}
            <h1 className="md-headline-hero text-balance text-[var(--md-text-primary)]">
              {title}
            </h1>
            
            {/* Subtitle */}
            <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-[var(--md-text-secondary)] md:mt-5 md:text-lg">
              {subtitle}
            </p>
          </div>

          {/* Match Card */}
          <div>
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
