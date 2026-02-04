"use client";

import { useState, useEffect } from "react";

export function TopNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-[var(--border-default)] bg-[var(--bg-surface)]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-[var(--container-max-width)] items-center justify-between px-4 py-3 md:px-[var(--spacing-container-md)] lg:px-[var(--spacing-container-lg)]">
        <div className="text-base font-semibold tracking-wide text-[var(--text-primary)]">Матчдэй</div>
        
        {/* Desktop Navigation */}
        <div className="hidden gap-6 text-sm text-[var(--text-secondary)] md:flex">
          <a className="transition-colors hover:text-[var(--brand-turquoise)]" href="#tickets">
            Купить билеты
          </a>
          <a className="transition-colors hover:text-[var(--brand-turquoise)]" href="#program">
            Программа
          </a>
          <a className="transition-colors hover:text-[var(--brand-turquoise)]" href="#offers">
            Предложения
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-md text-[var(--text-primary)] transition-colors hover:bg-[var(--bg-surface-hover)] md:hidden"
          aria-label="Меню"
          aria-expanded={isMenuOpen}
        >
          <div className="relative h-5 w-5">
            <span
              className={`absolute left-0 top-0 h-0.5 w-5 bg-current transition-all ${
                isMenuOpen ? "top-2 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-2 h-0.5 w-5 bg-current transition-all ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-4 h-0.5 w-5 bg-current transition-all ${
                isMenuOpen ? "top-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <>
          <div
            className="fixed inset-0 top-[57px] bg-[var(--bg-primary)]/80 backdrop-blur-sm md:hidden"
            onClick={closeMenu}
          />
          <div className="absolute left-0 right-0 top-full border-b border-[var(--border-default)] bg-[var(--bg-surface)] md:hidden">
            <div className="mx-auto max-w-[var(--container-max-width)] px-4 py-4">
              <nav className="flex flex-col gap-3">
                <a
                  href="#tickets"
                  onClick={closeMenu}
                  className="block rounded-md px-4 py-3 text-base font-medium text-[var(--text-primary)] transition-colors hover:bg-[var(--bg-surface-hover)] hover:text-[var(--brand-turquoise)]"
                >
                  Купить билеты
                </a>
                <a
                  href="#program"
                  onClick={closeMenu}
                  className="block rounded-md px-4 py-3 text-base font-medium text-[var(--text-primary)] transition-colors hover:bg-[var(--bg-surface-hover)] hover:text-[var(--brand-turquoise)]"
                >
                  Программа
                </a>
                <a
                  href="#offers"
                  onClick={closeMenu}
                  className="block rounded-md px-4 py-3 text-base font-medium text-[var(--text-primary)] transition-colors hover:bg-[var(--bg-surface-hover)] hover:text-[var(--brand-turquoise)]"
                >
                  Предложения
                </a>
              </nav>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}
