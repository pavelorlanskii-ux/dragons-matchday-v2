import type { ReactNode } from "react";

type HeroSectionProps = {
  title: string;
  subtitle: string;
  partnerName: string;
  children: ReactNode;
};

export function HeroSection({ title, subtitle, partnerName, children }: HeroSectionProps) {
  return (
    <section className="relative py-8 md:py-12 lg:py-16" id="tickets">
      {/* Content */}
      <div className="md-container relative z-10">
        <div className="flex flex-col gap-8 lg:gap-10">
          {/* Text Block */}
          <div className="max-w-3xl">
            {/* Partner Badge in Hero */}
            <div className="mb-4 inline-flex items-center gap-2">
              <span className="md-badge md-badge-partner">
                <svg 
                  className="mr-1.5 h-3 w-3" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2.5"
                  aria-hidden="true"
                >
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
                {"Партнёр матча: " + partnerName}
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
