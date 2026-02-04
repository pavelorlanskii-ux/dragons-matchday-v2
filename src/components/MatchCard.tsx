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

  // Безопасный split для названий команд
  const titleParts = props.title.split(" - ");
  const homeName = titleParts[0] ?? props.title;
  const awayName = titleParts[1] ?? "";

  return (
    <section className={`rounded-[var(--radius-card)] border border-[var(--border-default)] bg-[var(--bg-surface)] p-4 shadow-[var(--shadow-card)] transition-shadow hover:shadow-[var(--shadow-card-hover)] sm:p-6 md:p-8 ${props.className || ""}`}>
      {/* Mobile: Stacked layout */}
      <div className="flex flex-col gap-4 md:hidden">
        {/* Date/League/Arena */}
        <div className="space-y-1.5">
          <div className="text-base font-semibold text-[var(--text-primary)]">{props.leftMetaLines[0]}</div>
          <div className="text-sm text-[var(--text-muted)]">{props.leftMetaLines[1]}</div>
          <div className="text-sm text-[var(--text-muted)]">{props.leftMetaLines[2]}</div>
        </div>

        {/* Teams - Compact horizontal */}
        <div className="rounded-[var(--radius-lg)] bg-[var(--bg-secondary)] p-4">
          <div className="flex items-center justify-between gap-3">
            <div className="flex min-w-0 items-center gap-2">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[var(--radius-md)] bg-[var(--bg-surface)] text-xs font-bold text-[var(--text-primary)]">
                {props.homeLogoText}
              </div>
              <div className="min-w-0">
                <div className="truncate text-xs text-[var(--text-muted)]">Хозяева</div>
                <div className="truncate text-sm font-semibold text-[var(--text-primary)]">{homeName}</div>
              </div>
            </div>

            <div className="px-2 text-base font-semibold text-[var(--text-muted)]">-</div>

            <div className="flex min-w-0 items-center gap-2">
              <div className="min-w-0 text-right">
                <div className="truncate text-xs text-[var(--text-muted)]">Гости</div>
                <div className="truncate text-sm font-semibold text-[var(--text-primary)]">{awayName}</div>
              </div>
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[var(--radius-md)] bg-[var(--bg-surface)] text-xs font-bold text-[var(--text-primary)]">
                {props.awayLogoText}
              </div>
            </div>
          </div>
        </div>

        {/* Countdown */}
        <div className="rounded-[var(--radius-lg)] border border-[var(--border-default)] bg-[var(--bg-secondary)] p-4">
          <div className="text-xs font-medium text-[var(--text-muted)]">До матча осталось</div>
          <div className="mt-1 text-xl font-bold text-[var(--text-primary)]">{formatCountdown(diff)}</div>
        </div>

        {/* Partner badge */}
        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[var(--border-default)] bg-[var(--bg-secondary)] px-3 py-1.5 text-xs text-[var(--text-muted)]">
          Партнер матча: <span className="font-semibold text-[var(--text-secondary)]">{props.partnerName}</span>
        </div>

        {/* Primary CTA */}
        <a
          href={props.buyHref}
          className="inline-flex h-12 items-center justify-center rounded-[var(--radius-button)] bg-[var(--brand-yellow)] text-sm font-semibold text-[var(--bg-primary)] transition-all hover:bg-[var(--brand-yellow-dark)] hover:shadow-lg active:scale-[0.98]"
        >
          Купить билеты
        </a>
      </div>

      {/* Desktop: Grid layout */}
      <div className="hidden gap-6 md:grid md:grid-cols-[1.1fr_2fr_1.2fr] md:items-center">
        <div className="space-y-2 text-[var(--text-secondary)]">
          <div className="text-base font-medium">{props.leftMetaLines[0]}</div>
          <div className="text-sm text-[var(--text-muted)]">{props.leftMetaLines[1]}</div>
          <div className="text-sm text-[var(--text-muted)]">{props.leftMetaLines[2]}</div>
          <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-[var(--border-default)] bg-[var(--bg-secondary)] px-4 py-1.5 text-xs text-[var(--text-muted)]">
            Партнер матча: <span className="font-semibold text-[var(--text-secondary)]">{props.partnerName}</span>
          </div>
        </div>

        <div className="rounded-[var(--radius-lg)] bg-[var(--bg-secondary)] p-5">
          <div className="flex items-center justify-between gap-4">
            <div className="flex min-w-0 items-center gap-3">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[var(--radius-md)] bg-[var(--bg-surface)] text-sm font-bold text-[var(--text-primary)]">
                {props.homeLogoText}
              </div>
              <div className="min-w-0">
                <div className="truncate text-xs text-[var(--text-muted)]">Хозяева</div>
                <div className="truncate text-lg font-semibold text-[var(--text-primary)]">{homeName}</div>
              </div>
            </div>

            <div className="px-4 text-xl font-semibold text-[var(--text-muted)]">-</div>

            <div className="flex min-w-0 items-center justify-end gap-3">
              <div className="min-w-0 text-right">
                <div className="truncate text-xs text-[var(--text-muted)]">Гости</div>
                <div className="truncate text-lg font-semibold text-[var(--text-primary)]">{awayName}</div>
              </div>
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[var(--radius-md)] bg-[var(--bg-surface)] text-sm font-bold text-[var(--text-primary)]">
                {props.awayLogoText}
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-[var(--radius-lg)] border border-[var(--border-default)] bg-[var(--bg-secondary)] p-5">
          <div className="text-sm font-medium text-[var(--text-muted)]">До матча осталось</div>
          <div className="mt-2 text-2xl font-bold text-[var(--text-primary)]">{formatCountdown(diff)}</div>

          <div className="mt-6 flex flex-col gap-3">
            <a
              href={props.buyHref}
              className="inline-flex h-12 items-center justify-center rounded-[var(--radius-button)] bg-[var(--brand-yellow)] px-6 text-sm font-semibold text-[var(--bg-primary)] transition-all hover:bg-[var(--brand-yellow-dark)] hover:shadow-lg active:scale-[0.98]"
            >
              Купить билеты
            </a>
            <a
              href={props.homeHref}
              className="inline-flex h-12 items-center justify-center rounded-[var(--radius-button)] border border-[var(--border-default)] bg-transparent px-6 text-sm font-semibold text-[var(--text-secondary)] transition-all hover:border-[var(--border-hover)] hover:bg-[var(--bg-surface-hover)] active:scale-[0.98]"
            >
              На главную
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
