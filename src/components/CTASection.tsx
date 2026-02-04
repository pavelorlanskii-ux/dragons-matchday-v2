export function CTASection() {
  return (
    <section className="md-card overflow-hidden">
      <div className="p-6 sm:p-8 md:p-10">
        <div className="flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
          {/* Text */}
          <div>
            <h2 className="md-headline-section text-balance text-[var(--md-text-primary)]">
              Увидимся на арене
            </h2>
            <p className="mt-2 text-base text-[var(--md-text-secondary)] sm:text-lg">
              Приходите заранее, чтобы всё успеть
            </p>
          </div>
          
          {/* Buttons */}
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <a
              href="#tickets"
              className="md-btn md-btn-primary md-btn-xl w-full sm:w-auto"
            >
              Купить билеты
            </a>
            <a
              href="https://hc-dragons.com"
              className="md-btn md-btn-secondary md-btn-lg w-full sm:w-auto"
            >
              На главную
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
