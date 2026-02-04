import type { Offer } from "@/data/matchday";

export function OffersGrid(props: { offers?: Offer[]; partnerName?: string }) {
  const offers = props.offers ?? [];
  const partnerName = props.partnerName ?? "BetBoom";
  
  if (offers.length === 0) {
    return null;
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
      {offers.map((o) => {
        // Check if this offer is from the partner
        const isPartnerOffer = o.badge?.toLowerCase().includes(partnerName.toLowerCase()) || 
                               o.badge?.toLowerCase().includes("betboom") ||
                               o.title?.toLowerCase().includes("betboom") ||
                               o.title?.toLowerCase().includes("фрибет");

        return (
          <article 
            key={o.id} 
            className={`flex flex-col overflow-hidden ${isPartnerOffer ? "md-card-featured" : "md-card"}`}
          >
            {/* Content */}
            <div className="flex flex-1 flex-col p-5 sm:p-6">
              {/* Title */}
              <h3 className="md-title-card line-clamp-2 text-[var(--md-text-primary)]">
                {o.title}
              </h3>
              
              {/* Badge */}
              {o.badge && (
                <div className={`mt-3 inline-flex w-fit ${isPartnerOffer ? "md-badge md-badge-partner" : "md-badge md-badge-yellow"}`}>
                  {isPartnerOffer && (
                    <svg 
                      className="mr-1.5 h-3 w-3" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2.5"
                      aria-hidden="true"
                    >
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                    </svg>
                  )}
                  {o.badge}
                </div>
              )}
              
              {/* Description */}
              <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--md-text-secondary)]">
                {o.description}
              </p>
              
              {/* CTA */}
              {o.link && (
                <a
                  href={o.link.href}
                  className={`mt-5 w-full ${isPartnerOffer ? "md-btn md-btn-partner md-btn-lg" : "md-btn md-btn-accent md-btn-lg"}`}
                >
                  {o.link.label}
                </a>
              )}
            </div>
            
            {/* Image placeholder at bottom */}
            <div className="relative aspect-[16/9] bg-gradient-to-br from-[var(--md-surface-2)] to-[var(--md-surface-3)]">
              {isPartnerOffer && (
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--md-partner-accent)]/20 to-transparent" />
              )}
            </div>
          </article>
        );
      })}
    </div>
  );
}
