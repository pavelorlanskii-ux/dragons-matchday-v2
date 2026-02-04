"use client";

import Image from "next/image";

const BETBOOM_LOGO = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-dark-Uo5FobMRzYlKViTzKaOGGScifD6wZn.svg";

type Partner = {
  name: string;
  url: string;
  logoText?: string;
};

type Odds = {
  p1?: number;
  x?: number;
  p2?: number;
  disclaimer?: string;
  cta?: { label?: string; href?: string };
  ctaLabel?: string;
  ctaHref?: string;
};

function formatOdd(v: unknown) {
  const n = typeof v === "number" ? v : Number(v);
  return Number.isFinite(n) ? n.toFixed(2) : "--";
}

function OddPill({ 
  label, 
  value, 
  href 
}: { 
  label: string; 
  value: unknown; 
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group flex items-center gap-2 rounded-full border border-[var(--md-border)] bg-[var(--md-surface-2)] px-4 py-2 transition-all hover:border-[var(--md-partner-accent)]/50 hover:bg-[var(--md-surface-3)] active:scale-[0.97] sm:px-5 sm:py-2.5"
    >
      <span className="text-xs font-semibold uppercase tracking-wider text-[var(--md-text-muted)]">{label}</span>
      <span className="text-lg font-bold tabular-nums text-[var(--md-partner-accent)] transition-colors group-hover:text-[var(--md-partner-accent-light)] sm:text-xl">
        {formatOdd(value)}
      </span>
    </a>
  );
}

export function PartnerOddsBar({
  partner,
  odds,
  className,
}: {
  partner: Partner;
  odds?: Odds;
  className?: string;
}) {
  const ctaLabel = odds?.cta?.label ?? odds?.ctaLabel ?? "Перейти на сайт BetBoom";
  const ctaHref = odds?.cta?.href ?? odds?.ctaHref ?? partner?.url ?? "#";
  const disclaimer = odds?.disclaimer ?? "Информация носит справочный характер";

  return (
    <div className={`md-card-featured overflow-hidden ${className || ""}`}>
      {/* Main Content */}
      <div className="p-5 sm:p-6 lg:p-8">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
          {/* Partner Info */}
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[var(--md-partner-accent)]/10 lg:h-16 lg:w-16">
              <Image
                src={BETBOOM_LOGO}
                alt="BetBoom"
                width={40}
                height={40}
                className="h-10 w-10 object-contain lg:h-12 lg:w-12"
              />
            </div>
            <div>
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
                Партнёр матча
              </span>
              <a
                href={partner.url}
                target="_blank"
                rel="noreferrer"
                className="mt-1.5 block text-xl font-bold text-[var(--md-text-primary)] transition-colors hover:text-[var(--md-partner-accent)] lg:text-2xl"
              >
                {partner.logoText || partner.name}
              </a>
            </div>
          </div>

          {/* Odds Pills */}
          <div className="flex flex-wrap items-center gap-3">
            <OddPill label="П1" value={odds?.p1} href={ctaHref} />
            <OddPill label="X" value={odds?.x} href={ctaHref} />
            <OddPill label="П2" value={odds?.p2} href={ctaHref} />
          </div>

          {/* CTA Button */}
          <a
            href={ctaHref}
            target="_blank"
            rel="noreferrer"
            className="md-btn md-btn-partner md-btn-lg w-full lg:w-auto"
          >
            {ctaLabel}
          </a>
        </div>

        {/* Disclaimer */}
        <div className="mt-5 border-t border-[var(--md-border)] pt-4 text-xs text-[var(--md-text-muted)]">
          {disclaimer}
        </div>
      </div>
    </div>
  );
}
