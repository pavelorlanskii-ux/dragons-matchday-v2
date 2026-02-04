"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";

const CLUB_LOGO = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo_shanghai_dragons-rpqZlKvYrjv48TTGb7Qc3pkrbDbzZJ.png";

function formatCountdown(ms: number) {
  if (ms <= 0) return "Матч начался";
  const total = Math.floor(ms / 1000);
  const d = Math.floor(total / 86400);
  const h = Math.floor((total % 86400) / 3600);
  const m = Math.floor((total % 3600) / 60);
  
  if (d > 0) return `${d}д ${h}ч ${m}м`;
  if (h > 0) return `${h}ч ${m}м`;
  return `${m}м`;
}

function CountdownUnit({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <span className="text-2xl font-bold tabular-nums text-[var(--md-dragons-orange)] sm:text-3xl lg:text-4xl">
        {value}
      </span>
      <span className="mt-1 text-[10px] font-medium uppercase tracking-wider text-[var(--md-text-muted)] sm:text-xs">
        {label}
      </span>
    </div>
  );
}

function parseCountdown(ms: number) {
  if (ms <= 0) return { d: "0", h: "0", m: "0" };
  const total = Math.floor(ms / 1000);
  const d = Math.floor(total / 86400);
  const h = Math.floor((total % 86400) / 3600);
  const m = Math.floor((total % 3600) / 60);
  return { d: String(d), h: String(h), m: String(m) };
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
  const countdown = parseCountdown(diff);

  const titleParts = props.title.split(" - ");
  const homeName = titleParts[0] ?? props.title;
  const awayName = titleParts[1] ?? "";

  return (
    <article className={`md-card-hero overflow-hidden ${props.className || ""}`}>
      {/* Mobile Layout */}
      <div className="flex flex-col gap-5 p-5 sm:p-6 lg:hidden">
        {/* Date / League / Arena */}
        <div className="space-y-1">
          <div className="text-lg font-bold text-[var(--md-text-primary)]">{props.leftMetaLines[0]}</div>
          <div className="flex flex-wrap items-center gap-2 text-sm text-[var(--md-text-muted)]">
            <span>{props.leftMetaLines[1]}</span>
            <span className="h-1 w-1 rounded-full bg-[var(--md-text-muted)]" aria-hidden="true" />
            <span>{props.leftMetaLines[2]}</span>
          </div>
        </div>

        {/* Teams Block */}
        <div className="rounded-xl bg-[var(--md-surface-2)] p-4">
          <div className="flex items-center justify-between gap-3">
            {/* Home Team */}
            <div className="flex min-w-0 flex-1 flex-col items-center text-center">
              <Image
                src={CLUB_LOGO}
                alt={homeName}
                width={56}
                height={56}
                className="h-14 w-14 object-contain"
              />
              <div className="mt-2 text-[10px] font-medium uppercase tracking-wide text-[var(--md-text-muted)]">Хозяева</div>
              <div className="mt-0.5 line-clamp-2 text-sm font-semibold text-[var(--md-text-primary)]">{homeName}</div>
            </div>

            {/* VS */}
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[var(--md-surface-3)] text-sm font-bold text-[var(--md-text-muted)]">
              VS
            </div>

            {/* Away Team */}
            <div className="flex min-w-0 flex-1 flex-col items-center text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[var(--md-surface-3)] text-xs font-bold text-[var(--md-text-secondary)]">
                {props.awayLogoText.slice(0, 4).toUpperCase()}
              </div>
              <div className="mt-2 text-[10px] font-medium uppercase tracking-wide text-[var(--md-text-muted)]">Гости</div>
              <div className="mt-0.5 line-clamp-2 text-sm font-semibold text-[var(--md-text-primary)]">{awayName}</div>
            </div>
          </div>
        </div>

        {/* Countdown */}
        <div className="rounded-xl border border-[var(--md-border)] bg-[var(--md-surface-2)] p-4">
          <div className="mb-3 text-center text-xs font-medium uppercase tracking-wider text-[var(--md-text-muted)]">До матча</div>
          {diff > 0 ? (
            <div className="flex items-center justify-center gap-6">
              <CountdownUnit value={countdown.d} label="дней" />
              <div className="text-xl text-[var(--md-text-muted)]">:</div>
              <CountdownUnit value={countdown.h} label="часов" />
              <div className="text-xl text-[var(--md-text-muted)]">:</div>
              <CountdownUnit value={countdown.m} label="минут" />
            </div>
          ) : (
            <div className="text-center text-xl font-bold text-[var(--md-dragons-orange)]">Матч начался</div>
          )}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col gap-3">
          <a
            href={props.buyHref}
            className="md-btn md-btn-primary md-btn-xl w-full"
          >
            Купить билеты
          </a>
          <a
            href={props.homeHref}
            className="md-btn md-btn-secondary md-btn-lg w-full"
          >
            На главную
          </a>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden p-6 lg:block lg:p-8">
        <div className="grid grid-cols-[1.2fr_1.8fr_1.2fr] items-center gap-6">
          {/* Left Column: Meta Info */}
          <div className="space-y-1">
            <div className="text-xl font-bold text-[var(--md-text-primary)]">{props.leftMetaLines[0]}</div>
            <div className="text-sm text-[var(--md-text-muted)]">{props.leftMetaLines[1]}</div>
            <div className="text-sm text-[var(--md-text-muted)]">{props.leftMetaLines[2]}</div>
          </div>

          {/* Middle Column: Teams */}
          <div className="rounded-xl bg-[var(--md-surface-2)] p-5">
            <div className="flex items-center justify-between gap-4">
              {/* Home Team */}
              <div className="flex min-w-0 flex-1 items-center gap-4">
                <Image
                  src={CLUB_LOGO}
                  alt={homeName}
                  width={64}
                  height={64}
                  className="h-16 w-16 shrink-0 object-contain"
                />
                <div className="min-w-0">
                  <div className="text-[10px] font-medium uppercase tracking-wider text-[var(--md-text-muted)]">Хозяева</div>
                  <div className="mt-0.5 truncate text-lg font-bold text-[var(--md-text-primary)]">{homeName}</div>
                </div>
              </div>

              {/* VS */}
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[var(--md-surface-3)] text-sm font-bold text-[var(--md-text-muted)]">
                VS
              </div>

              {/* Away Team */}
              <div className="flex min-w-0 flex-1 items-center justify-end gap-4">
                <div className="min-w-0 text-right">
                  <div className="text-[10px] font-medium uppercase tracking-wider text-[var(--md-text-muted)]">Гости</div>
                  <div className="mt-0.5 truncate text-lg font-bold text-[var(--md-text-primary)]">{awayName}</div>
                </div>
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-[var(--md-surface-3)] text-sm font-bold text-[var(--md-text-secondary)]">
                  {props.awayLogoText.slice(0, 4).toUpperCase()}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Countdown + CTAs */}
          <div className="space-y-4">
            {/* Countdown */}
            <div className="rounded-xl border border-[var(--md-border)] bg-[var(--md-surface-2)] p-4">
              <div className="mb-2 text-center text-[10px] font-medium uppercase tracking-wider text-[var(--md-text-muted)]">До матча</div>
              {diff > 0 ? (
                <div className="flex items-center justify-center gap-3">
                  <CountdownUnit value={countdown.d} label="дн" />
                  <span className="text-lg text-[var(--md-text-muted)]">:</span>
                  <CountdownUnit value={countdown.h} label="ч" />
                  <span className="text-lg text-[var(--md-text-muted)]">:</span>
                  <CountdownUnit value={countdown.m} label="м" />
                </div>
              ) : (
                <div className="text-center text-xl font-bold text-[var(--md-dragons-orange)]">Матч начался</div>
              )}
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-2">
              <a href={props.buyHref} className="md-btn md-btn-primary md-btn-lg w-full">
                Купить билеты
              </a>
              <a href={props.homeHref} className="md-btn md-btn-secondary w-full">
                На главную
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
