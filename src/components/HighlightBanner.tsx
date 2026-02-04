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
    <article className="md-card overflow-hidden">
      <div className="p-5 sm:p-6 md:p-8">
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
          <p className="mt-4 max-w-3xl text-pretty text-sm leading-relaxed text-[var(--md-text-secondary)] sm:text-base md:text-lg">
            {props.highlight.description}
          </p>
        )}
      </div>
    </article>
  );
}
