// src/components/PartnerOddsBar.tsx
import React from "react";

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

export function PartnerOddsBar({
  partner,
  odds,
  className,
}: {
  partner: Partner;
  odds?: Odds;
  className?: string;
}) {
  // Безопасное извлечение данных с фолбэками
  const ctaLabel = odds?.cta?.label ?? odds?.ctaLabel ?? "Перейти на сайт";
  const ctaHref = odds?.cta?.href ?? odds?.ctaHref ?? partner?.url ?? "#";
  const disclaimer = odds?.disclaimer ?? "Информация носит справочный характер";

  return (
    <div className={`rounded-[var(--radius-card)] border border-[var(--border-default)] bg-[var(--bg-surface)] p-4 shadow-[var(--shadow-card)] transition-shadow hover:shadow-[var(--shadow-card-hover)] sm:p-6 md:p-8 ${className || ""}`}>
      {/* Mobile: Stacked layout */}
      <div className="flex flex-col gap-4 md:hidden">
        {/* Partner */}
        <div className="flex items-center gap-3">
          <div className="h-12 w-16 shrink-0 rounded-[var(--radius-md)] bg-gradient-to-br from-[var(--brand-turquoise)]/20 to-[var(--brand-yellow)]/10" />
          <div className="leading-tight">
            <div className="text-xs font-medium text-[var(--text-muted)] uppercase tracking-wide">Партнер матча</div>
            <a
              className="mt-0.5 block text-base font-bold text-[var(--text-primary)] transition-colors hover:text-[var(--brand-turquoise)]"
              href={partner.url}
              target="_blank"
              rel="noreferrer"
            >
              {partner.logoText || partner.name}
            </a>
          </div>
        </div>

        {/* Odds - Horizontal scroll on mobile */}
        <div className="overflow-x-auto pb-2 scrollbar-hide">
          <div className="flex gap-3 min-w-max">
            <div className="flex-shrink-0 rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-secondary)] px-4 py-3 text-center shadow-sm">
              <div className="text-xs font-medium text-[var(--text-muted)]">П1</div>
              <div className="mt-1 text-xl font-bold text-[var(--brand-turquoise)]">{formatOdd(odds?.p1)}</div>
            </div>
            <div className="flex-shrink-0 rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-secondary)] px-4 py-3 text-center shadow-sm">
              <div className="text-xs font-medium text-[var(--text-muted)]">X</div>
              <div className="mt-1 text-xl font-bold text-[var(--brand-turquoise)]">{formatOdd(odds?.x)}</div>
            </div>
            <div className="flex-shrink-0 rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-secondary)] px-4 py-3 text-center shadow-sm">
              <div className="text-xs font-medium text-[var(--text-muted)]">П2</div>
              <div className="mt-1 text-xl font-bold text-[var(--brand-turquoise)]">{formatOdd(odds?.p2)}</div>
            </div>
          </div>
        </div>

        {/* CTA - Full width on mobile */}
        <a
          href={ctaHref}
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-12 w-full items-center justify-center rounded-[var(--radius-button)] bg-[var(--brand-yellow)] text-sm font-semibold text-[var(--bg-primary)] transition-all hover:bg-[var(--brand-yellow-dark)] hover:shadow-lg active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[var(--brand-yellow)] focus:ring-offset-2 focus:ring-offset-[var(--bg-surface)]"
        >
          {ctaLabel}
        </a>

        {/* Disclaimer */}
        <div className="border-t border-[var(--border-default)] pt-3 text-xs text-[var(--text-muted)]">
          {disclaimer}
        </div>
      </div>

      {/* Desktop: Horizontal layout */}
      <div className="hidden flex-col gap-6 md:flex md:flex-row md:items-center md:justify-between">
        {/* Left: Partner */}
        <div className="flex items-center gap-4">
          <div className="h-16 w-20 shrink-0 rounded-[var(--radius-md)] bg-gradient-to-br from-[var(--brand-turquoise)]/20 to-[var(--brand-yellow)]/10" />
          <div className="leading-tight">
            <div className="text-xs font-medium text-[var(--text-muted)] uppercase tracking-wide">Партнер матча</div>
            <a
              className="mt-1 block text-lg font-bold text-[var(--text-primary)] transition-colors hover:text-[var(--brand-turquoise)]"
              href={partner.url}
              target="_blank"
              rel="noreferrer"
            >
              {partner.logoText || partner.name}
            </a>
          </div>
        </div>

        {/* Middle: Odds pills */}
        <div className="flex items-center gap-3">
          <div className="rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-secondary)] px-4 py-3 text-center shadow-sm transition-all hover:border-[var(--brand-turquoise)]/50 hover:shadow-md">
            <div className="text-xs font-medium text-[var(--text-muted)]">П1</div>
            <div className="mt-1 text-xl font-bold text-[var(--brand-turquoise)]">{formatOdd(odds?.p1)}</div>
          </div>
          <div className="rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-secondary)] px-4 py-3 text-center shadow-sm transition-all hover:border-[var(--brand-turquoise)]/50 hover:shadow-md">
            <div className="text-xs font-medium text-[var(--text-muted)]">X</div>
            <div className="mt-1 text-xl font-bold text-[var(--brand-turquoise)]">{formatOdd(odds?.x)}</div>
          </div>
          <div className="rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--bg-secondary)] px-4 py-3 text-center shadow-sm transition-all hover:border-[var(--brand-turquoise)]/50 hover:shadow-md">
            <div className="text-xs font-medium text-[var(--text-muted)]">П2</div>
            <div className="mt-1 text-xl font-bold text-[var(--brand-turquoise)]">{formatOdd(odds?.p2)}</div>
          </div>
        </div>

        {/* Right: CTA */}
        <div className="flex items-center justify-end">
          <a
            href={ctaHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-12 items-center justify-center rounded-[var(--radius-button)] bg-[var(--brand-yellow)] px-6 text-sm font-semibold text-[var(--bg-primary)] transition-all hover:bg-[var(--brand-yellow-dark)] hover:shadow-lg active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[var(--brand-yellow)] focus:ring-offset-2 focus:ring-offset-[var(--bg-surface)]"
          >
            {ctaLabel}
          </a>
        </div>
      </div>

      {/* Desktop Disclaimer */}
      <div className="hidden border-t border-[var(--border-default)] pt-4 text-xs text-[var(--text-muted)] md:mt-6 md:block">
        {disclaimer}
      </div>
    </div>
  );
}
