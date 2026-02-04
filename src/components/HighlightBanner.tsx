export function HighlightBanner(props: { 
  highlight?: { 
    title?: string; 
    badge?: string; 
    description?: string; 
    image?: string 
  } 
}) {
  if (!props.highlight || !props.highlight.title) {
    return null;
  }

  return (
    <article className="md-card-featured overflow-hidden">
      <div className="flex flex-col md:flex-row md:items-center">
        {/* Image placeholder */}
        <div className="relative aspect-[16/9] w-full bg-gradient-to-br from-[var(--md-surface-2)] to-[var(--md-surface-3)] md:aspect-[4/3] md:w-2/5 lg:w-1/3">
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--md-dragons-orange)]/10 to-transparent" />
        </div>
        
        {/* Content */}
        <div className="flex-1 p-6 md:p-8 lg:p-10">
          {/* Badge */}
          {props.highlight.badge && (
            <span className="md-badge md-badge-turq">
              {props.highlight.badge}
            </span>
          )}
          
          {/* Title */}
          <h2 className="md-headline-section mt-4 text-balance text-[var(--md-text-primary)]">
            {props.highlight.title}
          </h2>
          
          {/* Description */}
          {props.highlight.description && (
            <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-[var(--md-text-secondary)] md:text-lg">
              {props.highlight.description}
            </p>
          )}
        </div>
      </div>
    </article>
  );
}
