export function CTASection() {
  return (
    <section className="md-card-hero relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse at center, rgba(0, 212, 255, 0.1) 0%, transparent 60%)"
          }}
          aria-hidden="true"
        />
        {/* Diagonal accent */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `repeating-linear-gradient(
              -45deg,
              transparent,
              transparent 30px,
              var(--md-dragons-turq) 30px,
              var(--md-dragons-turq) 31px
            )`
          }}
          aria-hidden="true"
        />
      </div>
      
      <div className="relative p-6 sm:p-8 md:p-10">
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
