export function HighlightBanner(props: { highlight?: { title?: string; badge?: string; description?: string; image?: string } }) {
  // Безопасная обработка: если highlight не передан или пустой, не рендерим
  if (!props.highlight || !props.highlight.title) {
    return null;
  }

  return (
    <section className="rounded-[var(--radius-card)] border border-[var(--border-default)] bg-gradient-to-br from-[var(--bg-surface)] to-[var(--bg-secondary)] p-5 shadow-[var(--shadow-card)] sm:p-6 md:p-8">
      {props.highlight.badge && (
        <div className="inline-flex rounded-full border border-[var(--brand-turquoise)]/30 bg-[var(--brand-turquoise)]/10 px-3 py-1.5 text-xs font-semibold text-[var(--brand-turquoise)] sm:px-4">
          {props.highlight.badge}
        </div>
      )}
      <h2 className="mt-4 text-2xl font-bold leading-tight tracking-tight text-[var(--text-primary)] sm:text-3xl md:text-4xl">
        {props.highlight.title}
      </h2>
      {props.highlight.description && (
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[var(--text-secondary)] sm:mt-4 sm:text-base md:text-lg">
          {props.highlight.description}
        </p>
      )}
    </section>
  );
}
