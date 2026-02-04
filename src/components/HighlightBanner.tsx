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
    <article className="md-card overflow-hidden p-5 sm:p-6 md:p-8">
      {/* Badge */}
      {props.highlight.badge && (
        <div className="inline-flex rounded-full border border-[var(--md-accent)]/25 bg-[var(--md-accent)]/10 px-3.5 py-1.5 text-xs font-semibold text-[var(--md-accent)]">
          {props.highlight.badge}
        </div>
      )}
      
      {/* Title */}
      <h2 className="mt-4 text-balance text-2xl font-bold leading-tight tracking-tight text-[var(--md-text-primary)] sm:text-3xl md:text-4xl">
        {props.highlight.title}
      </h2>
      
      {/* Description */}
      {props.highlight.description && (
        <p className="mt-3 max-w-3xl text-pretty text-sm leading-relaxed text-[var(--md-text-secondary)] sm:mt-4 sm:text-base md:text-lg">
          {props.highlight.description}
        </p>
      )}
    </article>
  );
}
