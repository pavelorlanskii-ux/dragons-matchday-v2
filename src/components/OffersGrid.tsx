import type { Offer } from "@/data/matchday";

export function OffersGrid(props: { offers?: Offer[] }) {
  const offers = props.offers ?? [];
  if (offers.length === 0) {
    return null;
  }

  return (
    <div className="grid gap-4 sm:gap-5 md:grid-cols-2">
      {offers.map((o) => (
        <article 
          key={o.id} 
          className="md-card flex flex-col p-5 sm:p-6 md:p-8"
        >
          {/* Badge */}
          {o.badge && (
            <div className="inline-flex w-fit rounded-full border border-[var(--md-yellow)]/25 bg-[var(--md-yellow)]/10 px-3 py-1.5 text-xs font-semibold text-[var(--md-yellow)]">
              {o.badge}
            </div>
          )}
          
          {/* Title */}
          <h3 className="mt-4 line-clamp-2 text-xl font-bold text-[var(--md-text-primary)] sm:text-2xl">
            {o.title}
          </h3>
          
          {/* Description */}
          <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--md-text-secondary)] sm:text-base">
            {o.description}
          </p>
          
          {/* CTA */}
          {o.link && (
            <a
              href={o.link.href}
              className="mt-5 flex h-12 w-full items-center justify-center rounded-xl bg-[var(--md-accent)] text-sm font-semibold text-[var(--md-bg)] transition-all hover:bg-[var(--md-accent-dark)] hover:shadow-lg active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--md-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--md-surface)] sm:w-auto sm:px-6"
            >
              {o.link.label}
            </a>
          )}
        </article>
      ))}
    </div>
  );
}
