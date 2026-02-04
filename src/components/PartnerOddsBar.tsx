"use client";

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
      className="group flex min-w-[90px] flex-col items-center justify-center rounded-xl border border-[var(--md-border)] bg-[var(--md-bg-secondary)] px-4 py-3 transition-all hover:border-[var(--md-accent)]/40 hover:bg-[var(--md-surface)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--md-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--md-surface)] active:scale-[0.97]"
    >
      <span className="text-xs font-medium text-[var(--md-text-muted)]">{label}</span>
      <span className="mt-1 text-xl font-bold text-[var(--md-accent)] transition-colors group-hover:text-[var(--md-accent-light)]">
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
  const ctaLabel = odds?.cta?.label ?? odds?.ctaLabel ?? "Сделать ставку";
  const ctaHref = odds?.cta?.href ?? odds?.ctaHref ?? partner?.url ?? "#";
  const disclaimer = odds?.disclaimer ?? "Информация носит справочный характер";

  return (
    <div className={`md-card overflow-hidden ${className || ""}`}>
      {/* Mobile Layout */}
      <div className="flex flex-col gap-5 p-5 sm:p-6 lg:hidden">
        {/* Partner Info */}
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--md-accent)]/15 to-[var(--md-yellow)]/10">
            <span className="text-sm font-bold text-[var(--md-accent)]">BB</span>
          </div>
          <div>
            <div className="text-xs font-medium uppercase tracking-wider text-[var(--md-text-muted)]">
              Партнёр матча
            </div>
            <a
              href={partner.url}
              target="_blank"
              rel="noreferrer"
              className="mt-0.5 block text-lg font-bold text-[var(--md-text-primary)] transition-colors hover:text-[var(--md-accent)]"
            >
              {partner.logoText || partner.name}
            </a>
          </div>
        </div>

        {/* Odds Pills - Horizontal scroll */}
        <div className="overflow-x-auto pb-1 md-scrollbar-hide">
          <div className="flex min-w-max gap-3">
            <OddPill label="П1" value={odds?.p1} href={ctaHref} />
            <OddPill label="X" value={odds?.x} href={ctaHref} />
            <OddPill label="П2" value={odds?.p2} href={ctaHref} />
          </div>
        </div>

        {/* CTA Button - Full width, large tap target */}
        <a
          href={ctaHref}
          target="_blank"
          rel="noreferrer"
          className="flex h-14 w-full items-center justify-center rounded-xl bg-[var(--md-yellow)] text-base font-semibold text-[var(--md-bg)] transition-all hover:bg-[var(--md-yellow-dark)] hover:shadow-lg active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--md-yellow)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--md-surface)]"
        >
          {ctaLabel}
        </a>

        {/* Disclaimer */}
        <div className="border-t border-[var(--md-border)] pt-4 text-xs text-[var(--md-text-muted)]">
          {disclaimer}
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden p-6 lg:block lg:p-8">
        <div className="flex items-center justify-between gap-6">
          {/* Partner Info */}
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--md-accent)]/15 to-[var(--md-yellow)]/10">
              <span className="text-base font-bold text-[var(--md-accent)]">BB</span>
            </div>
            <div>
              <div className="text-xs font-medium uppercase tracking-wider text-[var(--md-text-muted)]">
                Партнёр матча
              </div>
              <a
                href={partner.url}
                target="_blank"
                rel="noreferrer"
                className="mt-1 block text-xl font-bold text-[var(--md-text-primary)] transition-colors hover:text-[var(--md-accent)]"
              >
                {partner.logoText || partner.name}
              </a>
            </div>
          </div>

          {/* Odds Pills */}
          <div className="flex items-center gap-3">
            <OddPill label="П1" value={odds?.p1} href={ctaHref} />
            <OddPill label="X" value={odds?.x} href={ctaHref} />
            <OddPill label="П2" value={odds?.p2} href={ctaHref} />
          </div>

          {/* CTA Button */}
          <a
            href={ctaHref}
            target="_blank"
            rel="noreferrer"
            className="flex h-12 items-center justify-center rounded-xl bg-[var(--md-yellow)] px-8 text-sm font-semibold text-[var(--md-bg)] transition-all hover:bg-[var(--md-yellow-dark)] hover:shadow-lg active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--md-yellow)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--md-surface)]"
          >
            {ctaLabel}
          </a>
        </div>

        {/* Disclaimer */}
        <div className="mt-6 border-t border-[var(--md-border)] pt-4 text-xs text-[var(--md-text-muted)]">
          {disclaimer}
        </div>
      </div>
    </div>
  );
}
