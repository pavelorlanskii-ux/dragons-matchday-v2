"use client";

import type { ReactNode } from "react";
import { useMemo, useState } from "react";
import type { Activity, ActivityBadge, ActivityTag } from "@/data/matchday";

type ChipProps = {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
};

function Chip({ active, onClick, children }: ChipProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex-shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--md-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--md-bg)] ${
        active
          ? "border-[var(--md-accent)] bg-[var(--md-accent)]/10 text-[var(--md-accent)]"
          : "border-[var(--md-border)] bg-[var(--md-bg-secondary)] text-[var(--md-text-secondary)] hover:border-[var(--md-border-hover)] hover:bg-[var(--md-surface-hover)]"
      }`}
    >
      {children}
    </button>
  );
}

type ActivityCardGridProps = {
  activities?: Activity[];
  tags?: ActivityTag[];
  badges?: ActivityBadge[];
};

export function ActivityCardGrid({
  activities = [],
  tags = [],
  badges = [],
}: ActivityCardGridProps) {
  const [tag, setTag] = useState<ActivityTag | "Все">("Все");
  const [badge, setBadge] = useState<ActivityBadge | "Все">("Все");

  const filtered = useMemo(() => {
    return activities.filter((a) => {
      const tagOk = tag === "Все" ? true : a.tags.includes(tag);
      const badgeOk = badge === "Все" ? true : a.badges.includes(badge);
      return tagOk && badgeOk;
    });
  }, [activities, tag, badge]);

  return (
    <div>
      {/* Filters with horizontal scroll on mobile */}
      <div className="flex flex-col gap-4">
        {/* Interests filter */}
        <div>
          <div className="mb-2 text-sm font-medium text-[var(--md-text-secondary)]">Интересы:</div>
          <div className="overflow-x-auto pb-2 md-scrollbar-hide">
            <div className="flex min-w-max gap-2">
              <Chip active={tag === "Все"} onClick={() => setTag("Все")}>
                Все
              </Chip>
              {tags.map((t: ActivityTag) => (
                <Chip key={t} active={tag === t} onClick={() => setTag(t)}>
                  {t}
                </Chip>
              ))}
            </div>
          </div>
        </div>

        {/* Badges filter */}
        <div>
          <div className="mb-2 text-sm font-medium text-[var(--md-text-secondary)]">Ориентиры:</div>
          <div className="overflow-x-auto pb-2 md-scrollbar-hide">
            <div className="flex min-w-max gap-2">
              <Chip active={badge === "Все"} onClick={() => setBadge("Все")}>
                Все
              </Chip>
              {badges.map((b: ActivityBadge) => (
                <Chip key={b} active={badge === b} onClick={() => setBadge(b)}>
                  {b}
                </Chip>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Cards grid - Mobile: 1 col, Tablet: 2 cols, Desktop: 4 cols */}
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {filtered.map((a: Activity) => (
          <article
            key={a.id}
            className="md-card group overflow-hidden"
          >
            {/* Image placeholder */}
            <div className="aspect-[16/9] bg-gradient-to-br from-[var(--md-accent)]/8 via-[var(--md-yellow)]/5 to-transparent" />
            
            {/* Content */}
            <div className="p-4 sm:p-5">
              {/* Badges */}
              <div className="flex flex-wrap gap-1.5">
                {a.badges.map((b: ActivityBadge) => (
                  <span 
                    key={b} 
                    className="rounded-full bg-[var(--md-bg-secondary)] px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide text-[var(--md-text-muted)]"
                  >
                    {b}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h3 className="mt-3 line-clamp-2 text-base font-semibold leading-snug text-[var(--md-text-primary)]">
                {a.title}
              </h3>
              
              {/* Description */}
              <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-[var(--md-text-secondary)]">
                {a.description}
              </p>

              {/* Location */}
              <div className="mt-3 flex items-center gap-1.5 text-xs text-[var(--md-text-muted)]">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <span className="truncate">{a.location}</span>
              </div>

              {/* Tags */}
              <div className="mt-3 flex flex-wrap gap-1.5">
                {a.tags.map((t: ActivityTag) => (
                  <span 
                    key={t} 
                    className="rounded-full border border-[var(--md-accent)]/20 bg-[var(--md-accent)]/8 px-2.5 py-1 text-[10px] font-medium text-[var(--md-accent)]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Empty state */}
      {filtered.length === 0 && (
        <div className="mt-8 rounded-xl border border-[var(--md-border)] bg-[var(--md-surface)] p-8 text-center">
          <p className="text-sm text-[var(--md-text-muted)]">
            Нет активностей по выбранным фильтрам
          </p>
        </div>
      )}
    </div>
  );
}
