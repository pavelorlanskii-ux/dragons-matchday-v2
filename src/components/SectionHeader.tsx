export function SectionHeader(props: { title: string; subtitle?: string }) {
  return (
    <header>
      <h2 className="text-balance text-2xl font-bold leading-tight tracking-tight text-[var(--md-text-primary)] sm:text-3xl md:text-4xl">
        {props.title}
      </h2>
      {props.subtitle && (
        <p className="mt-2 max-w-2xl text-pretty text-sm leading-relaxed text-[var(--md-text-secondary)] sm:mt-3 sm:text-base">
          {props.subtitle}
        </p>
      )}
    </header>
  );
}
