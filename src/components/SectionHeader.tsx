export function SectionHeader(props: { title: string; subtitle?: string }) {
  return (
    <header className="mb-8 md:mb-10">
      <h2 className="md-headline-section text-balance text-[var(--md-text-primary)]">
        {props.title}
      </h2>
      {props.subtitle && (
        <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-[var(--md-text-secondary)] md:text-lg">
          {props.subtitle}
        </p>
      )}
    </header>
  );
}
