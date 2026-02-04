export function SectionHeader(props: { title: string; subtitle?: string }) {
  return (
    <header>
      <h2 className="md-headline-section text-balance text-[var(--md-text-primary)]">
        {props.title}
      </h2>
      {props.subtitle && (
        <p className="mt-3 max-w-2xl text-pretty text-sm leading-relaxed text-[var(--md-text-secondary)] sm:text-base">
          {props.subtitle}
        </p>
      )}
    </header>
  );
}
