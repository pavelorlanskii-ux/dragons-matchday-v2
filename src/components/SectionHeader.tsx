export function SectionHeader(props: { title: string; subtitle?: string }) {
  return (
    <div>
      <h2 className="text-2xl font-bold leading-tight tracking-tight text-[var(--text-primary)] sm:text-3xl md:text-4xl lg:text-5xl">
        {props.title}
      </h2>
      {props.subtitle && (
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-[var(--text-secondary)] sm:mt-3 sm:text-base md:text-lg">
          {props.subtitle}
        </p>
      )}
    </div>
  );
}
