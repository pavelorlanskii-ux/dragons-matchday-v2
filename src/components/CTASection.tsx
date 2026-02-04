export function CTASection() {
  return (
    <section className="md-card overflow-hidden p-5 sm:p-6 md:p-8">
      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between md:gap-6">
        {/* Text */}
        <div>
          <h2 className="text-balance text-xl font-bold text-[var(--md-text-primary)] sm:text-2xl md:text-3xl">
            Увидимся на арене
          </h2>
          <p className="mt-2 text-sm text-[var(--md-text-secondary)] sm:text-base md:text-lg">
            Приходите заранее, чтобы всё успеть
          </p>
        </div>
        
        {/* Buttons */}
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href="#tickets"
            className="flex h-12 items-center justify-center rounded-xl bg-[var(--md-yellow)] px-6 text-sm font-semibold text-[var(--md-bg)] transition-all hover:bg-[var(--md-yellow-dark)] hover:shadow-lg active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--md-yellow)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--md-surface)]"
          >
            Купить билеты
          </a>
          <a
            href="https://hc-dragons.com"
            className="flex h-12 items-center justify-center rounded-xl border border-[var(--md-border)] px-6 text-sm font-semibold text-[var(--md-text-secondary)] transition-all hover:border-[var(--md-border-hover)] hover:bg-[var(--md-surface-hover)] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--md-border)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--md-surface)]"
          >
            На главную
          </a>
        </div>
      </div>
    </section>
  );
}
