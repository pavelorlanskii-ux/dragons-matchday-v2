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
      <div className="relative p-5 sm:p-6 md:p-8">
        {/* Subtle background accent */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: "radial-gradient(ellipse at top right, rgba(0, 212, 255, 0.08) 0%, transparent 60%)"
          }}
          aria-hidden="true"
        />
        
        <div className="relative">
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
      </div>
    </article>
  );
}
