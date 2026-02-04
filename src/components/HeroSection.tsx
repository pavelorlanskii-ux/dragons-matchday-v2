import type { ReactNode } from "react";

type HeroSectionProps = {
  title: string;
  subtitle: string;
  partnerName: string;
  children: ReactNode;
};

export function HeroSection({ title, subtitle, partnerName, children }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden" id="tickets">
      {/* Dynamic Background Layer */}
      <div className="absolute inset-0 z-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--md-bg)] via-[var(--md-surface-1)] to-[var(--md-bg)]" />
        
        {/* Diagonal speed lines pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `repeating-linear-gradient(
              -45deg,
              transparent,
              transparent 40px,
              var(--md-dragons-turq) 40px,
              var(--md-dragons-turq) 41px
            )`
          }}
          aria-hidden="true"
        />
        
        {/* Secondary accent lines */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 60px,
              var(--md-dragons-yellow) 60px,
              var(--md-dragons-yellow) 61px
            )`
          }}
          aria-hidden="true"
        />
        
        {/* Top spotlight */}
        <div 
          className="absolute -top-[20%] left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full opacity-30"
          style={{
            background: "radial-gradient(ellipse at center, rgba(0, 212, 255, 0.15) 0%, transparent 70%)"
          }}
          aria-hidden="true"
        />
        
        {/* Side accent glow */}
        <div 
          className="absolute -right-[10%] top-1/3 h-[400px] w-[400px] rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle at center, rgba(255, 215, 0, 0.1) 0%, transparent 60%)"
          }}
          aria-hidden="true"
        />
      </div>

      {/* Content */}
      <div className="md-container relative z-10 py-8 md:py-12 lg:py-16">
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
                Партнёр матча: {partnerName}
              </span>
            </div>

            {/* Headline */}
            <h1 className="md-headline-hero text-balance text-[var(--md-text-primary)]">
              {title}
            </h1>
            
            {/* Subtitle */}
            <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-[var(--md-text-secondary)] md:mt-5 md:text-lg lg:text-xl">
              {subtitle}
            </p>
          </div>

          {/* Match Card with Spotlight Effect */}
          <div className="md-spotlight">
            {children}
          </div>
        </div>
      </div>
      
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[var(--md-bg)] to-transparent" aria-hidden="true" />
    </section>
  );
}
