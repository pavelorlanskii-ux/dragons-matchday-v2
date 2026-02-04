"use client";

import { useEffect, useMemo, useState } from "react";

function formatCountdown(ms: number) {
  if (ms <= 0) return "Матч начался";
  const total = Math.floor(ms / 1000);
  const d = Math.floor(total / 86400);
  const h = Math.floor((total % 86400) / 3600);
  const m = Math.floor((total % 3600) / 60);
  return `${d}д ${h}ч ${m}м`;
}

export function MatchCard(props: {
  leftMetaLines: readonly string[];
  title: string;
  homeLogoText: string;
  awayLogoText: string;
  matchDateIso: string;
  buyHref: string;
  homeHref: string;
  partnerName: string;
  className?: string;
}) {
  const target = useMemo(() => new Date(props.matchDateIso).getTime(), [props.matchDateIso]);
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 30_000);
    return () => clearInterval(t);
  }, []);

  const diff = target - now;

  const titleParts = props.title.split(" - ");
  const homeName = titleParts[0] ?? props.title;
  const awayName = titleParts[1] ?? "";

  return (
    <article className={`md-card overflow-hidden ${props.className || ""}`}>
      {/* Mobile Layout */}
      <div className="flex flex-col gap-5 p-5 sm:p-6 lg:hidden">
        {/* Date / League / Arena */}
        <div className="space-y-1.5">
          <div className="text-lg font-semibold text-[var(--md-text-primary)]">{props.leftMetaLines[0]}</div>
          <div className="text-sm text-[var(--md-text-muted)]">{props.leftMetaLines[1]}</div>
          <div className="text-sm text-[var(--md-text-muted)]">{props.leftMetaLines[2]}</div>
        </div>

        {/* Teams Block */}
        <div className="rounded-xl bg-[var(--md-bg-secondary)] p-4">
          <div className="flex items-center justify-between gap-2">
            {/* Home Team */}
            <div className="flex min-w-0 flex-1 items-center gap-3">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--md-surface)] text-[10px] font-bold text-[var(--md-text-primary)]">
                {props.homeLogoText.slice(0, 3).toUpperCase()}
              </div>
              <div className="min-w-0">
                <div className="text-[10px] font-medium uppercase tracking-wide text-[var(--md-text-muted)]">Хозяева</div>
                <div className="truncate text-sm font-semibold text-[var(--md-text-primary)]">{homeName}</div>
              </div>
            </div>

            <div className="px-2 text-lg font-bold text-[var(--md-text-muted)]">vs</div>

            {/* Away Team */}
            <div className="flex min-w-0 flex-1 items-center justify-end gap-3">
              <div className="min-w-0 text-right">
                <div className="text-[10px] font-medium uppercase tracking-wide text-[var(--md-text-muted)]">Гости</div>
                <div className="truncate text-sm font-semibold text-[var(--md-text-primary)]">{awayName}</div>
              </div>
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--md-surface)] text-[10px] font-bold text-[var(--md-text-primary)]">
                {props.awayLogoText.slice(0, 4).toUpperCase()}
              </div>
            </div>
          </div>
        </div>

        {/* Countdown */}
        <div className="rounded-xl border border-[var(--md-border)] bg-[var(--md-bg-secondary)] p-4">
          <div className="text-xs font-medium uppercase tracking-wide text-[var(--md-text-muted)]">До матча осталось</div>
          <div className="mt-1.5 text-2xl font-bold text-[var(--md-text-primary)]">{formatCountdown(diff)}</div>
        </div>

        {/* Partner Badge */}
        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[var(--md-border)] bg-[var(--md-bg-secondary)] px-4 py-2 text-xs text-[var(--md-text-muted)]">
          Партнёр матча: <span className="font-semibold text-[var(--md-text-secondary)]">{props.partnerName}</span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col gap-3">
          <a
            href={props.buyHref}
            className="flex h-14 items-center justify-center rounded-xl bg-[var(--md-yellow)] text-base font-semibold text-[var(--md-bg)] transition-all hover:bg-[var(--md-yellow-dark)] hover:shadow-lg active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--md-yellow)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--md-surface)]"
          >
            Купить билеты
          </a>
          <a
            href={props.homeHref}
            className="flex h-12 items-center justify-center rounded-xl border border-[var(--md-border)] text-sm font-semibold text-[var(--md-text-secondary)] transition-all hover:border-[var(--md-border-hover)] hover:bg-[var(--md-surface-hover)] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--md-border)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--md-surface)]"
          >
            На главную
          </a>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden gap-6 p-6 lg:grid lg:grid-cols-[1.1fr_2fr_1.2fr] lg:items-center lg:p-8">
        {/* Left Column: Meta Info */}
        <div className="space-y-2">
          <div className="text-lg font-semibold text-[var(--md-text-primary)]">{props.leftMetaLines[0]}</div>
          <div className="text-sm text-[var(--md-text-muted)]">{props.leftMetaLines[1]}</div>
          <div className="text-sm text-[var(--md-text-muted)]">{props.leftMetaLines[2]}</div>
          <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-[var(--md-border)] bg-[var(--md-bg-secondary)] px-4 py-2 text-xs text-[var(--md-text-muted)]">
            Партнёр матча: <span className="font-semibold text-[var(--md-text-secondary)]">{props.partnerName}</span>
          </div>
        </div>

        {/* Middle Column: Teams */}
        <div className="rounded-xl bg-[var(--md-bg-secondary)] p-5">
          <div className="flex items-center justify-between gap-4">
            {/* Home Team */}
            <div className="flex min-w-0 items-center gap-4">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-[var(--md-surface)] text-sm font-bold text-[var(--md-text-primary)]">
                {props.homeLogoText.slice(0, 3).toUpperCase()}
              </div>
              <div className="min-w-0">
                <div className="text-xs font-medium uppercase tracking-wide text-[var(--md-text-muted)]">Хозяева</div>
                <div className="truncate text-lg font-semibold text-[var(--md-text-primary)]">{homeName}</div>
              </div>
            </div>

            <div className="px-4 text-2xl font-bold text-[var(--md-text-muted)]">vs</div>

            {/* Away Team */}
            <div className="flex min-w-0 items-center justify-end gap-4">
              <div className="min-w-0 text-right">
                <div className="text-xs font-medium uppercase tracking-wide text-[var(--md-text-muted)]">Гости</div>
                <div className="truncate text-lg font-semibold text-[var(--md-text-primary)]">{awayName}</div>
              </div>
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-[var(--md-surface)] text-sm font-bold text-[var(--md-text-primary)]">
                {props.awayLogoText.slice(0, 4).toUpperCase()}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Countdown + CTAs */}
        <div className="rounded-xl border border-[var(--md-border)] bg-[var(--md-bg-secondary)] p-5">
          <div className="text-xs font-medium uppercase tracking-wide text-[var(--md-text-muted)]">До матча осталось</div>
          <div className="mt-2 text-3xl font-bold text-[var(--md-text-primary)]">{formatCountdown(diff)}</div>

          <div className="mt-6 flex flex-col gap-3">
            <a
              href={props.buyHref}
              className="flex h-12 items-center justify-center rounded-xl bg-[var(--md-yellow)] px-6 text-sm font-semibold text-[var(--md-bg)] transition-all hover:bg-[var(--md-yellow-dark)] hover:shadow-lg active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--md-yellow)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--md-surface)]"
            >
              Купить билеты
            </a>
            <a
              href={props.homeHref}
              className="flex h-12 items-center justify-center rounded-xl border border-[var(--md-border)] px-6 text-sm font-semibold text-[var(--md-text-secondary)] transition-all hover:border-[var(--md-border-hover)] hover:bg-[var(--md-surface-hover)] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--md-border)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--md-surface)]"
            >
              На главную
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
