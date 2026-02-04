import type { Offer } from "@/data/matchday";

export function OffersGrid(props: { offers?: Offer[] }) {
  // Безопасная обработка: если offers не передан или пустой, не рендерим
  const offers = props.offers ?? [];
  if (offers.length === 0) {
    return null;
  }

  return (
    <section className="mt-6">
      <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
        {offers.map((o) => (
          <article key={o.id} className="group rounded-[var(--radius-card)] border border-[var(--border-default)] bg-[var(--bg-surface)] p-5 shadow-[var(--shadow-card)] transition-all hover:border-[var(--border-hover)] hover:shadow-[var(--shadow-card-hover)] sm:p-6 md:p-8">
            {o.badge && (
              <div className="inline-flex rounded-full border border-[var(--brand-yellow)]/30 bg-[var(--brand-yellow)]/10 px-3 py-1.5 text-xs font-semibold text-[var(--brand-yellow)]">
                {o.badge}
              </div>
            )}
            <h3 className="mt-4 line-clamp-2 text-xl font-bold text-[var(--text-primary)] sm:text-2xl">{o.title}</h3>
            <p className="mt-3 line-clamp-4 text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">{o.description}</p>
            {o.link && (
              <a
                href={o.link.href}
                className="mt-5 inline-flex h-12 w-full items-center justify-center rounded-[var(--radius-button)] bg-[var(--brand-turquoise)] text-sm font-semibold text-[var(--bg-primary)] transition-all hover:bg-[var(--brand-turquoise-dark)] hover:shadow-lg active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[var(--brand-turquoise)] focus:ring-offset-2 focus:ring-offset-[var(--bg-surface)] sm:w-auto sm:px-6"
              >
                {o.link.label}
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
