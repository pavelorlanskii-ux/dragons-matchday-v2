import type { ReactNode } from "react";

type HeroSectionProps = {
  title: string;
  subtitle: string;
  partnerName: string;
  children: ReactNode;
};

export function HeroSection({ title, subtitle, partnerName, children }: HeroSectionProps) {
  return (
    <section className="relative pt-16 pb-8 md:pt-24 md:pb-10 lg:pb-12" id="tickets">
      {/* Content */}
      <div className="md-container relative z-10">
        <div className="flex flex-col">
          {/* Text Block */}
          <div className="max-w-3xl space-y-4 md:space-y-5">
            {/* Partner Badge in Hero */}
            <div className="inline-flex items-center gap-2">
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
            <p className="max-w-2xl text-pretty text-base leading-snug text-[var(--md-text-secondary)] md:text-lg md:leading-snug">
              {subtitle}
            </p>
          </div>

          {/* Match Card */}
          <div className="mt-10 md:mt-14">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
