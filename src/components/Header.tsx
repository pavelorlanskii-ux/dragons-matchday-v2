"use client";

import { useState, useEffect, useRef } from "react";

const NAV_GROUPS = [
  {
    label: "Новости",
    href: "https://hc-dragons.com/news",
    items: [
      { label: "Все новости", href: "https://hc-dragons.com/news" },
      { label: "Пресс-релизы", href: "https://hc-dragons.com/news/press" },
    ],
  },
  {
    label: "Команда",
    href: "https://hc-dragons.com/team",
    items: [
      { label: "Состав", href: "https://hc-dragons.com/team/roster" },
      { label: "Тренерский штаб", href: "https://hc-dragons.com/team/coaches" },
      { label: "Статистика", href: "https://hc-dragons.com/team/stats" },
    ],
  },
  {
    label: "Клуб",
    href: "https://hc-dragons.com/club",
    items: [
      { label: "О клубе", href: "https://hc-dragons.com/club/about" },
      { label: "История", href: "https://hc-dragons.com/club/history" },
      { label: "Арена", href: "https://hc-dragons.com/club/arena" },
    ],
  },
  {
    label: "Сезон",
    href: "https://hc-dragons.com/season",
    items: [
      { label: "Календарь", href: "https://hc-dragons.com/season/calendar" },
      { label: "Турнирная таблица", href: "https://hc-dragons.com/season/standings" },
      { label: "Результаты", href: "https://hc-dragons.com/season/results" },
    ],
  },
  {
    label: "Медиа",
    href: "https://hc-dragons.com/media",
    items: [
      { label: "Фото", href: "https://hc-dragons.com/media/photo" },
      { label: "Видео", href: "https://hc-dragons.com/media/video" },
      { label: "Подкасты", href: "https://hc-dragons.com/media/podcasts" },
    ],
  },
];

const UTILITY_LINKS = [
  { label: "VIP", href: "https://hc-dragons.com/vip" },
  { label: "Билеты", href: "#tickets", primary: true },
  { label: "Магазин", href: "https://hc-dragons.com/shop" },
];

const SOCIAL_LINKS = [
  { label: "VK", href: "https://vk.com/hcdragons", icon: "vk" },
  { label: "Telegram", href: "https://t.me/hcdragons", icon: "tg" },
];

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg className={className} width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <div className="relative h-5 w-5">
      <span className={`absolute left-0 h-0.5 w-5 bg-current transition-all duration-200 ${open ? "top-2 rotate-45" : "top-0"}`} />
      <span className={`absolute left-0 top-2 h-0.5 w-5 bg-current transition-all duration-200 ${open ? "opacity-0" : ""}`} />
      <span className={`absolute left-0 h-0.5 w-5 bg-current transition-all duration-200 ${open ? "top-2 -rotate-45" : "top-4"}`} />
    </div>
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);
  const [lang, setLang] = useState<"ru" | "en">("ru");
  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        setOpenDropdown(null);
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleMouseEnter = (label: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  };

  return (
    <header className="md-header sticky top-0 z-50 border-b border-[var(--md-border)] bg-[var(--md-surface)]/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-[var(--md-container)] items-center justify-between px-4 py-3 md:px-6 lg:px-8">
        {/* Logo */}
        <a
          href="https://hc-dragons.com"
          className="flex items-center gap-2 text-[var(--md-text-primary)] transition-colors hover:text-[var(--md-accent)]"
          aria-label="ХК Шанхай Дрэгонс - На главную"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[var(--md-accent)]/20 to-[var(--md-yellow)]/10">
            <span className="text-xs font-bold text-[var(--md-accent)]">SD</span>
          </div>
          <div className="hidden sm:block">
            <div className="text-sm font-bold leading-tight">Шанхай</div>
            <div className="text-xs font-medium text-[var(--md-text-muted)]">Дрэгонс</div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Основная навигация">
          {NAV_GROUPS.map((group) => (
            <div
              key={group.label}
              className="relative"
              onMouseEnter={() => handleMouseEnter(group.label)}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                className={`flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  openDropdown === group.label
                    ? "bg-[var(--md-surface-hover)] text-[var(--md-accent)]"
                    : "text-[var(--md-text-secondary)] hover:bg-[var(--md-surface-hover)] hover:text-[var(--md-text-primary)]"
                }`}
                aria-expanded={openDropdown === group.label}
                aria-haspopup="true"
              >
                {group.label}
                <ChevronDown className={`transition-transform ${openDropdown === group.label ? "rotate-180" : ""}`} />
              </button>
              
              {/* Dropdown */}
              {openDropdown === group.label && (
                <div className="absolute left-0 top-full z-50 min-w-[180px] pt-2">
                  <div className="rounded-xl border border-[var(--md-border)] bg-[var(--md-surface)] p-2 shadow-lg">
                    {group.items.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        className="block rounded-lg px-3 py-2 text-sm text-[var(--md-text-secondary)] transition-colors hover:bg-[var(--md-surface-hover)] hover:text-[var(--md-text-primary)]"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Utility Links + Social + Language - Desktop */}
        <div className="hidden items-center gap-3 lg:flex">
          {UTILITY_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={
                link.primary
                  ? "inline-flex h-9 items-center justify-center rounded-lg bg-[var(--md-yellow)] px-4 text-sm font-semibold text-[var(--md-bg)] transition-all hover:bg-[var(--md-yellow-dark)] hover:shadow-md active:scale-[0.98]"
                  : "inline-flex h-9 items-center justify-center rounded-lg border border-[var(--md-border)] px-3 text-sm font-medium text-[var(--md-text-secondary)] transition-colors hover:border-[var(--md-border-hover)] hover:bg-[var(--md-surface-hover)] hover:text-[var(--md-text-primary)]"
              }
            >
              {link.label}
            </a>
          ))}

          <div className="mx-1 h-5 w-px bg-[var(--md-border)]" aria-hidden="true" />

          {/* Social */}
          <div className="flex items-center gap-1">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.icon}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-[var(--md-text-muted)] transition-colors hover:bg-[var(--md-surface-hover)] hover:text-[var(--md-accent)]"
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
              </a>
            ))}
          </div>

          {/* Language */}
          <button
            type="button"
            onClick={() => setLang(lang === "ru" ? "en" : "ru")}
            className="flex h-9 items-center gap-1 rounded-lg border border-[var(--md-border)] px-2 text-sm font-medium text-[var(--md-text-secondary)] transition-colors hover:border-[var(--md-border-hover)] hover:bg-[var(--md-surface-hover)]"
            aria-label={`Переключить язык на ${lang === "ru" ? "English" : "Русский"}`}
          >
            {lang === "ru" ? "Ru" : "En"}
            <ChevronDown />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-[var(--md-text-primary)] transition-colors hover:bg-[var(--md-surface-hover)] lg:hidden"
          aria-label={mobileOpen ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={mobileOpen}
        >
          <MenuIcon open={mobileOpen} />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <>
          <div
            className="fixed inset-0 top-[57px] z-40 bg-[var(--md-bg)]/80 backdrop-blur-sm lg:hidden"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />
          <nav
            className="fixed left-0 right-0 top-[57px] z-50 max-h-[calc(100vh-57px)] overflow-y-auto border-b border-[var(--md-border)] bg-[var(--md-surface)] lg:hidden"
            aria-label="Мобильная навигация"
          >
            <div className="p-4">
              {/* Utility Links Mobile */}
              <div className="mb-4 flex flex-wrap gap-2">
                {UTILITY_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={
                      link.primary
                        ? "inline-flex h-10 flex-1 items-center justify-center rounded-xl bg-[var(--md-yellow)] text-sm font-semibold text-[var(--md-bg)] transition-all active:scale-[0.98]"
                        : "inline-flex h-10 flex-1 items-center justify-center rounded-xl border border-[var(--md-border)] text-sm font-medium text-[var(--md-text-secondary)] transition-colors"
                    }
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              {/* Navigation Groups */}
              <div className="space-y-1">
                {NAV_GROUPS.map((group) => (
                  <div key={group.label} className="rounded-xl border border-[var(--md-border)] bg-[var(--md-bg-secondary)]">
                    <button
                      type="button"
                      onClick={() => setMobileAccordion(mobileAccordion === group.label ? null : group.label)}
                      className="flex w-full items-center justify-between px-4 py-3 text-left text-base font-medium text-[var(--md-text-primary)]"
                      aria-expanded={mobileAccordion === group.label}
                    >
                      {group.label}
                      <ChevronDown className={`transition-transform ${mobileAccordion === group.label ? "rotate-180" : ""}`} />
                    </button>
                    {mobileAccordion === group.label && (
                      <div className="border-t border-[var(--md-border)] px-4 py-2">
                        {group.items.map((item) => (
                          <a
                            key={item.label}
                            href={item.href}
                            onClick={() => setMobileOpen(false)}
                            className="block rounded-lg px-2 py-2.5 text-sm text-[var(--md-text-secondary)] transition-colors hover:text-[var(--md-text-primary)]"
                          >
                            {item.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Social + Language Mobile */}
              <div className="mt-4 flex items-center justify-between border-t border-[var(--md-border)] pt-4">
                <div className="flex items-center gap-2">
                  {SOCIAL_LINKS.map((social) => (
                    <a
                      key={social.icon}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--md-border)] text-[var(--md-text-muted)] transition-colors hover:text-[var(--md-accent)]"
                      aria-label={social.label}
                    >
                      {social.icon === "vk" && (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                          <path d="M12.77 19.05c-6.05 0-9.5-4.15-9.65-11.05h3.03c.1 5.05 2.32 7.18 4.08 7.62V8h2.86v4.35c1.73-.19 3.55-2.18 4.16-4.35h2.86c-.47 2.67-2.45 4.66-3.86 5.48 1.41.65 3.67 2.37 4.52 5.57h-3.15c-.66-2.06-2.3-3.65-4.53-3.87v3.87h-.32z"/>
                        </svg>
                      )}
                      {social.icon === "tg" && (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.05-.2s-.16-.04-.23-.02c-.1.02-1.62 1.03-4.58 3.03-.43.3-.82.44-1.17.43-.39-.01-1.13-.22-1.68-.4-.68-.22-1.22-.34-1.17-.72.02-.2.31-.4.87-.6 3.45-1.5 5.75-2.49 6.9-2.97 3.29-1.37 3.97-1.61 4.42-1.62.1 0 .32.02.46.13.12.09.15.21.17.3-.01.06.01.24 0 .37z"/>
                        </svg>
                      )}
                    </a>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => setLang(lang === "ru" ? "en" : "ru")}
                  className="flex h-10 items-center gap-2 rounded-xl border border-[var(--md-border)] px-4 text-sm font-medium text-[var(--md-text-secondary)]"
                >
                  {lang === "ru" ? "Русский" : "English"}
                  <ChevronDown />
                </button>
              </div>
            </div>
          </nav>
        </>
      )}
    </header>
  );
}
