"use client";

import type { ReactNode } from "react";
import { useMemo, useState } from "react";
import type { Activity, ActivityBadge, ActivityTag } from "@/data/matchday";

type ChipProps = {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
  key?: string | number;
};

function Chip(props: ChipProps) {
  return (
    <button
      type="button"
      onClick={props.onClick}
      className={[
        "flex-shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-all",
        props.active
          ? "border-[var(--brand-turquoise)] bg-[var(--brand-turquoise)]/10 text-[var(--brand-turquoise)]"
          : "border-[var(--border-default)] bg-[var(--bg-secondary)] text-[var(--text-secondary)] hover:border-[var(--border-hover)] hover:bg-[var(--bg-surface-hover)]",
      ].join(" ")}
    >
      {props.children}
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
    <section className="mt-6">
      {/* Filters with horizontal scroll on mobile */}
      <div className="flex flex-col gap-4">
        {/* Interests filter */}
        <div>
          <div className="mb-2 text-sm font-semibold text-[var(--text-secondary)]">Интересы:</div>
          <div className="overflow-x-auto pb-2 scrollbar-hide">
            <div className="flex gap-3 min-w-max">
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
          <div className="mb-2 text-sm font-semibold text-[var(--text-secondary)]">Ориентиры:</div>
          <div className="overflow-x-auto pb-2 scrollbar-hide">
            <div className="flex gap-3 min-w-max">
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

      {/* Cards grid - Mobile: 1 col, Tablet: 2 cols, Desktop: 3-4 cols */}
      <div className="mt-6 grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filtered.map((a: Activity) => (
          <article
            key={a.id}
            className="group overflow-hidden rounded-[var(--radius-card)] border border-[var(--border-default)] bg-[var(--bg-surface)] transition-all hover:border-[var(--border-hover)] hover:shadow-[var(--shadow-card-hover)]"
          >
            <div className="aspect-[16/9] bg-gradient-to-br from-[var(--brand-turquoise)]/10 via-[var(--brand-yellow)]/5 to-transparent" />
            <div className="p-4 sm:p-5">
              <div className="flex flex-wrap gap-2">
                {a.badges.map((b: ActivityBadge) => (
                  <span key={b} className="rounded-full border border-[var(--border-default)] bg-[var(--bg-secondary)] px-2.5 py-1 text-xs font-medium text-[var(--text-muted)]">
                    {b}
                  </span>
                ))}
              </div>

              <h3 className="mt-3 line-clamp-2 text-base font-semibold text-[var(--text-primary)] sm:text-lg">{a.title}</h3>
              <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-[var(--text-secondary)]">{a.description}</p>

              <div className="mt-3 text-xs text-[var(--text-muted)] sm:text-sm">
                <span className="font-semibold text-[var(--text-secondary)]">Локация:</span> {a.location}
              </div>

              <div className="mt-3 flex flex-wrap gap-2">
                {a.tags.map((t: ActivityTag) => (
                  <span key={t} className="rounded-full border border-[var(--brand-turquoise)]/30 bg-[var(--brand-turquoise)]/10 px-2.5 py-1 text-xs font-medium text-[var(--brand-turquoise)]">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
