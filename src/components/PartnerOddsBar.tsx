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
      className="group flex min-w-[85px] flex-col items-center justify-center rounded-xl border border-[var(--md-border)] bg-[var(--md-surface-2)] px-4 py-3 transition-all hover:border-[var(--md-partner-accent)]/50 hover:bg-[var(--md-surface-3)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--md-partner-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--md-surface-1)] active:scale-[0.97] sm:min-w-[100px] sm:px-5 sm:py-4"
    >
      <span className="text-[10px] font-semibold uppercase tracking-wider text-[var(--md-text-muted)] sm:text-xs">{label}</span>
      <span className="mt-1 text-xl font-bold tabular-nums text-[var(--md-partner-accent)] transition-colors group-hover:text-[var(--md-partner-accent-light)] sm:text-2xl">
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
      {/* Featured badge */}
      <div className="flex items-center justify-between border-b border-[var(--md-partner-accent)]/15 bg-gradient-to-r from-[var(--md-partner-accent)]/10 to-transparent px-5 py-3 sm:px-6">
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
        <span className="text-xs font-medium text-[var(--md-text-muted)]">Ставки на спорт</span>
      </div>

      {/* Mobile Layout */}
      <div className="flex flex-col gap-5 p-5 sm:p-6 lg:hidden">
        {/* Partner Info */}
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[var(--md-partner-accent)]/10">
            <Image
              src={BETBOOM_LOGO}
              alt="BetBoom"
              width={40}
              height={40}
              className="h-10 w-10 object-contain"
            />
          </div>
          <div>
            <div className="text-[10px] font-semibold uppercase tracking-wider text-[var(--md-text-muted)]">
              Официальный партнёр
            </div>
            <a
              href={partner.url}
              target="_blank"
              rel="noreferrer"
              className="mt-0.5 block text-xl font-bold text-[var(--md-text-primary)] transition-colors hover:text-[var(--md-partner-accent)]"
            >
              {partner.logoText || partner.name}
            </a>
          </div>
        </div>

        {/* Odds Title */}
        <div className="text-sm font-medium text-[var(--md-text-secondary)]">Коэффициенты на матч:</div>

        {/* Odds Pills */}
        <div className="flex gap-3">
          <OddPill label="П1" value={odds?.p1} href={ctaHref} />
          <OddPill label="X" value={odds?.x} href={ctaHref} />
          <OddPill label="П2" value={odds?.p2} href={ctaHref} />
        </div>

        {/* CTA Button - Full width, large tap target */}
        <a
          href={ctaHref}
          target="_blank"
          rel="noreferrer"
          className="md-btn md-btn-partner md-btn-xl w-full"
        >
          {ctaLabel}
        </a>

        {/* Disclaimer */}
        <div className="text-[11px] leading-relaxed text-[var(--md-text-muted)]">
          {disclaimer}
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden p-6 lg:block lg:p-8">
        <div className="flex items-center justify-between gap-8">
          {/* Partner Info */}
          <div className="flex items-center gap-5">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-[var(--md-partner-accent)]/10">
              <Image
                src={BETBOOM_LOGO}
                alt="BetBoom"
                width={48}
                height={48}
                className="h-12 w-12 object-contain"
              />
            </div>
            <div>
              <div className="text-[10px] font-semibold uppercase tracking-wider text-[var(--md-text-muted)]">
                Официальный партнёр
              </div>
              <a
                href={partner.url}
                target="_blank"
                rel="noreferrer"
                className="mt-1 block text-2xl font-bold text-[var(--md-text-primary)] transition-colors hover:text-[var(--md-partner-accent)]"
              >
                {partner.logoText || partner.name}
              </a>
            </div>
          </div>

          {/* Odds Pills */}
          <div className="flex items-center gap-4">
            <span className="mr-2 text-sm font-medium text-[var(--md-text-muted)]">Кэфы:</span>
            <OddPill label="П1" value={odds?.p1} href={ctaHref} />
            <OddPill label="X" value={odds?.x} href={ctaHref} />
            <OddPill label="П2" value={odds?.p2} href={ctaHref} />
          </div>

          {/* CTA Button */}
          <a
            href={ctaHref}
            target="_blank"
            rel="noreferrer"
            className="md-btn md-btn-partner md-btn-lg"
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
