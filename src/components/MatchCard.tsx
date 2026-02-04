"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";

const CLUB_LOGO = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo_shanghai_dragons-rpqZlKvYrjv48TTGb7Qc3pkrbDbzZJ.png";

function parseCountdown(ms: number) {
  if (ms <= 0) return { d: "0", h: "0", m: "0", s: "0" };
  const total = Math.floor(ms / 1000);
  const d = Math.floor(total / 86400);
  const h = Math.floor((total % 86400) / 3600);
  const m = Math.floor((total % 3600) / 60);
  const s = total % 60;
  return { 
    d: String(d).padStart(2, "0"), 
    h: String(h).padStart(2, "0"), 
    m: String(m).padStart(2, "0"),
    s: String(s).padStart(2, "0")
  };
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

const TICKET_TIERS = [
  { id: "vip", label: "Купить VIP от 8 750", className: "md-btn-tier md-btn-tier-vip" },
  { id: "platinum", label: "VTB Platinum", className: "md-btn-tier md-btn-tier-platinum" },
  { id: "gold", label: "Gold", className: "md-btn-tier md-btn-tier-gold" },
  { id: "premium", label: "BetBoom Premium", className: "md-btn-tier md-btn-tier-premium" },
];

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
    const t = setInterval(() => setNow(Date.now()), 1000);
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
      <div className="flex flex-col gap-4 p-4 sm:p-5 lg:hidden">
        {/* Date / League / Arena */}
        <div className="space-y-1">
          <div className="text-lg font-bold text-[var(--md-dragons-orange)]">{props.leftMetaLines[0]}</div>
          <div className="flex flex-wrap items-center gap-2 text-sm text-[var(--md-text-muted)]">
            <span>{props.leftMetaLines[1]}</span>
            <span className="h-1 w-1 rounded-full bg-[var(--md-text-muted)]" aria-hidden="true" />
            <span>{props.leftMetaLines[2]}</span>
          </div>
        </div>

        {/* Teams Block */}
        <div className="rounded-xl bg-[var(--md-surface-2)] p-3.5">
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
              <div className="mt-2 line-clamp-2 text-sm font-bold uppercase text-[var(--md-text-primary)]">{homeName}</div>
            </div>

            {/* VS */}
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center text-lg font-bold text-[var(--md-text-muted)]">
              VS
            </div>

            {/* Away Team */}
            <div className="flex min-w-0 flex-1 flex-col items-center text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[var(--md-surface-3)] text-xs font-bold text-[var(--md-text-secondary)]">
                {props.awayLogoText.slice(0, 4).toUpperCase()}
              </div>
              <div className="mt-2 line-clamp-2 text-sm font-bold uppercase text-[var(--md-text-primary)]">{awayName}</div>
            </div>
          </div>
        </div>

        {/* Countdown */}
        <div className="rounded-xl border border-[var(--md-border)] bg-[var(--md-surface-2)] p-3.5">
          <div className="mb-2.5 text-center text-xs font-semibold uppercase tracking-wider text-[var(--md-text-muted)]">До матча осталось</div>
          {diff > 0 ? (
            <div className="flex items-center justify-center gap-2">
              <CountdownUnit value={countdown.d} label="дней" />
              <span className="text-xl font-bold text-[var(--md-text-muted)]">:</span>
              <CountdownUnit value={countdown.h} label="час" />
              <span className="text-xl font-bold text-[var(--md-text-muted)]">:</span>
              <CountdownUnit value={countdown.m} label="мин" />
              <span className="text-xl font-bold text-[var(--md-text-muted)]">:</span>
              <CountdownUnit value={countdown.s} label="сек" />
            </div>
          ) : (
            <div className="text-center text-xl font-bold text-[var(--md-dragons-orange)]">Матч начался</div>
          )}
        </div>

        {/* Ticket Tiers - Mobile scrollable */}
        <div className="flex flex-wrap gap-2">
          {TICKET_TIERS.map((tier) => (
            <a
              key={tier.id}
              href={props.buyHref}
              className={`${tier.className} flex-1 min-w-[calc(50%-0.25rem)] text-center`}
            >
              {tier.label}
            </a>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col gap-2.5">
          <a
            href={props.buyHref}
            className="md-btn md-btn-primary md-btn-xl w-full"
          >
            Купить от 100
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
      <div className="hidden p-5 lg:block lg:p-6">
        <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-6">
          {/* Left Column: Date + Meta */}
          <div className="space-y-1">
            <div className="text-xl font-bold text-[var(--md-dragons-orange)]">{props.leftMetaLines[0]}</div>
            <div className="text-sm text-[var(--md-text-muted)]">{props.leftMetaLines[1]}</div>
            <div className="text-sm text-[var(--md-text-muted)]">{props.leftMetaLines[2]}</div>
          </div>

          {/* Middle Column: Teams */}
          <div className="rounded-xl bg-[var(--md-surface-2)] px-8 py-4">
            <div className="flex items-center gap-6">
              {/* Home Team */}
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <div className="text-lg font-bold uppercase text-[var(--md-text-primary)]">{homeName}</div>
                </div>
                <Image
                  src={CLUB_LOGO}
                  alt={homeName}
                  width={64}
                  height={64}
                  className="h-16 w-16 shrink-0 object-contain"
                />
              </div>

              {/* VS */}
              <div className="flex-shrink-0 text-lg font-bold text-[var(--md-text-muted)]">
                VS
              </div>

              {/* Away Team */}
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-[var(--md-surface-3)] text-sm font-bold text-[var(--md-text-secondary)]">
                  {props.awayLogoText.slice(0, 4).toUpperCase()}
                </div>
                <div className="text-left">
                  <div className="text-lg font-bold uppercase text-[var(--md-text-primary)]">{awayName}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Countdown */}
          <div className="text-right">
            <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-[var(--md-text-muted)]">До матча осталось</div>
            {diff > 0 ? (
              <div className="flex items-center justify-end gap-2">
                <CountdownUnit value={countdown.d} label="дн" />
                <span className="text-lg font-bold text-[var(--md-text-muted)]">:</span>
                <CountdownUnit value={countdown.h} label="ч" />
                <span className="text-lg font-bold text-[var(--md-text-muted)]">:</span>
                <CountdownUnit value={countdown.m} label="м" />
                <span className="text-lg font-bold text-[var(--md-text-muted)]">:</span>
                <CountdownUnit value={countdown.s} label="с" />
              </div>
            ) : (
              <div className="text-xl font-bold text-[var(--md-dragons-orange)]">Матч начался</div>
            )}
          </div>
        </div>

        {/* Ticket Tiers Row */}
        <div className="mt-5 flex items-center justify-between gap-3 border-t border-[var(--md-border)] pt-5">
          <div className="flex flex-wrap gap-2">
            {TICKET_TIERS.map((tier) => (
              <a
                key={tier.id}
                href={props.buyHref}
                className={tier.className}
              >
                {tier.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <a href={props.buyHref} className="md-btn md-btn-primary md-btn-lg">
              Купить от 100
            </a>
            <div className="text-xs text-[var(--md-text-muted)]">Необходима<br/>Карта болельщика</div>
          </div>
        </div>
      </div>
    </article>
  );
}
