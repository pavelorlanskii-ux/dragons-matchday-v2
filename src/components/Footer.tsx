const PARTNERS = [
  { name: "BetBoom", href: "https://betboom.ru", featured: true },
  { name: "Дом Книги", href: "#" },
  { name: "Imperial Orchestra", href: "#" },
];

const NAV_COLUMNS = [
  {
    title: "Команда",
    links: [
      { label: "Состав", href: "https://hc-dragons.com/team/roster" },
      { label: "Тренерский штаб", href: "https://hc-dragons.com/team/coaches" },
      { label: "Статистика", href: "https://hc-dragons.com/team/stats" },
    ],
  },
  {
    title: "Клуб",
    links: [
      { label: "О клубе", href: "https://hc-dragons.com/club/about" },
      { label: "История", href: "https://hc-dragons.com/club/history" },
      { label: "Арена", href: "https://hc-dragons.com/club/arena" },
      { label: "Контакты", href: "https://hc-dragons.com/club/contacts" },
    ],
  },
  {
    title: "Сезон",
    links: [
      { label: "Календарь", href: "https://hc-dragons.com/season/calendar" },
      { label: "Турнирная таблица", href: "https://hc-dragons.com/season/standings" },
      { label: "Результаты", href: "https://hc-dragons.com/season/results" },
    ],
  },
  {
    title: "Медиа",
    links: [
      { label: "Фото", href: "https://hc-dragons.com/media/photo" },
      { label: "Видео", href: "https://hc-dragons.com/media/video" },
      { label: "Подкасты", href: "https://hc-dragons.com/media/podcasts" },
    ],
  },
];

const SOCIAL_LINKS = [
  { label: "VK", href: "https://vk.com/hcdragons", icon: "vk" },
  { label: "Telegram", href: "https://t.me/hcdragons", icon: "tg" },
  { label: "YouTube", href: "https://youtube.com/@hcdragons", icon: "yt" },
];

export function Footer() {
  return (
    <footer className="border-t border-[var(--md-border)] bg-[var(--md-bg)]">
      {/* Partners Bar */}
      <div className="border-b border-[var(--md-border)]">
        <div className="mx-auto max-w-[var(--md-container)] px-4 py-6 md:px-6 lg:px-8">
          <div className="mb-3 text-[10px] font-semibold uppercase tracking-wider text-[var(--md-text-muted)]">
            Партнёры клуба
          </div>
          <div className="flex flex-wrap items-center gap-3 md:gap-4">
            {PARTNERS.map((partner) => (
              <a
                key={partner.name}
                href={partner.href}
                target="_blank"
                rel="noreferrer"
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  partner.featured 
                    ? "border border-[var(--md-partner-accent)]/20 bg-[var(--md-partner-accent)]/10 text-[var(--md-partner-accent)] hover:bg-[var(--md-partner-accent)]/15" 
                    : "bg-[var(--md-surface-1)] text-[var(--md-text-secondary)] hover:bg-[var(--md-surface-2)] hover:text-[var(--md-text-primary)]"
                }`}
              >
                {partner.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="mx-auto max-w-[var(--md-container)] px-4 py-10 md:px-6 md:py-12 lg:px-8 lg:py-14">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {NAV_COLUMNS.map((column) => (
            <div key={column.title}>
              <h3 className="mb-4 text-sm font-semibold text-[var(--md-text-primary)]">{column.title}</h3>
              <ul className="space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-[var(--md-text-muted)] transition-colors hover:text-[var(--md-dragons-turq)]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[var(--md-border)]">
        <div className="mx-auto flex max-w-[var(--md-container)] flex-col items-center justify-between gap-4 px-4 py-6 md:flex-row md:px-6 lg:px-8">
          {/* Logo + Copyright */}
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[var(--md-dragons-turq)]/20 to-[var(--md-dragons-yellow)]/10">
              <span className="text-[10px] font-bold text-[var(--md-dragons-turq)]">SD</span>
            </div>
            <div className="text-sm text-[var(--md-text-muted)]">
              &copy; {new Date().getFullYear()} ХК Шанхай Дрэгонс. Все права защищены.
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-2">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.icon}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--md-border)] text-[var(--md-text-muted)] transition-colors hover:border-[var(--md-border-hover)] hover:bg-[var(--md-surface-1)] hover:text-[var(--md-dragons-turq)]"
                aria-label={social.label}
              >
                {social.icon === "vk" && (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12.77 19.05c-6.05 0-9.5-4.15-9.65-11.05h3.03c.1 5.05 2.32 7.18 4.08 7.62V8h2.86v4.35c1.73-.19 3.55-2.18 4.16-4.35h2.86c-.47 2.67-2.45 4.66-3.86 5.48 1.41.65 3.67 2.37 4.52 5.57h-3.15c-.66-2.06-2.3-3.65-4.53-3.87v3.87h-.32z"/>
                  </svg>
                )}
                {social.icon === "tg" && (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.05-.2s-.16-.04-.23-.02c-.1.02-1.62 1.03-4.58 3.03-.43.3-.82.44-1.17.43-.39-.01-1.13-.22-1.68-.4-.68-.22-1.22-.34-1.17-.72.02-.2.31-.4.87-.6 3.45-1.5 5.75-2.49 6.9-2.97 3.29-1.37 3.97-1.61 4.42-1.62.1 0 .32.02.46.13.12.09.15.21.17.3-.01.06.01.24 0 .37z"/>
                  </svg>
                )}
                {social.icon === "yt" && (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
