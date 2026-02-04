export function CTASection() {
  return (
    <section className="rounded-[var(--radius-card)] border border-[var(--border-default)] bg-gradient-to-br from-[var(--bg-surface)] to-[var(--bg-secondary)] p-5 shadow-[var(--shadow-card)] sm:p-6 md:p-8">
      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between md:gap-6">
        <div>
          <div className="text-xl font-bold text-[var(--text-primary)] sm:text-2xl md:text-3xl">Увидимся на арене</div>
          <div className="mt-2 text-sm text-[var(--text-secondary)] sm:text-base md:text-lg">Приходите заранее, чтобы все успеть</div>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href="#tickets"
            className="inline-flex h-12 items-center justify-center rounded-[var(--radius-button)] bg-[var(--brand-yellow)] px-6 text-sm font-semibold text-[var(--bg-primary)] transition-all hover:bg-[var(--brand-yellow-dark)] hover:shadow-lg active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[var(--brand-yellow)] focus:ring-offset-2 focus:ring-offset-[var(--bg-surface)]"
          >
            Купить билеты
          </a>
          <a
            href="/"
            className="inline-flex h-12 items-center justify-center rounded-[var(--radius-button)] border border-[var(--border-default)] bg-transparent px-6 text-sm font-semibold text-[var(--text-secondary)] transition-all hover:border-[var(--border-hover)] hover:bg-[var(--bg-surface-hover)] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[var(--border-default)] focus:ring-offset-2 focus:ring-offset-[var(--bg-surface)]"
          >
            На главную
          </a>
        </div>
      </div>
    </section>
  );
}
