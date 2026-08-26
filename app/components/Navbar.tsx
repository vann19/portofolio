'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from './ThemeProvider';
import { Sun, Moon } from 'lucide-react';

const navLinks = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#certificates', label: 'Certificates' },
  { href: '#contact', label: 'Contact' },
];

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHash, setActiveHash] = useState('#hero');

  useEffect(() => {
    setActiveHash(window.location.hash || '#hero');
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <>
      {/* ═══════════════ DESKTOP NAVBAR ═══════════════ */}
      <nav
        className={`
          hidden lg:flex w-full justify-center items-center px-9 z-50
          fixed top-0 left-0 right-0
          transition-all duration-500 ease-out
          ${scrolled ? 'pt-3 pb-3' : 'pt-6 pb-0'}
        `}
      >
        <div
          className={`
            flex items-center justify-between w-full max-w-[1160px]
            transition-all duration-500 ease-out
            ${scrolled
              ? 'backdrop-blur-xl shadow-[0_8px_40px_rgba(0,0,0,0.12)] rounded-full px-6 py-3'
              : 'bg-transparent px-2 py-0'
            }
          `}
          style={scrolled ? { background: 'var(--card)', border: '1px solid var(--card-border)' } : {}}
        >
          {/* ── Logo / Brand ── */}
          <a
            href="#hero"
            onClick={() => setActiveHash('#hero')}
            className="font-vorex text-base font-bold tracking-widest hover:opacity-70 transition-opacity duration-200 select-none flex-shrink-0"
            style={{ color: 'var(--foreground)', textDecoration: 'none', letterSpacing: '0.15em', marginLeft: '24px' }}
          >
            PORTFOLIO<span style={{ color: 'var(--accent)' }}></span>
          </a>

          {/* ── Center Nav Links ── */}
          <div
            className="flex items-center rounded-full px-3 py-2 gap-6"
          
          >
            {navLinks.map((link) => {
              const isActive = activeHash === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setActiveHash(link.href)}
                  className="font-vorex text-[13px] font-bold px-5 py-2.5 rounded-full transition-all duration-200 ease-out"
                  style={{
                    textDecoration: 'none',
                    letterSpacing: '0.08em',
                    background: 'transparent',
                    color: isActive ? 'var(--foreground)' : 'var(--muted)',
                    boxShadow: 'none',
                    borderBottom: isActive ? '2px solid var(--accent)' : '2px solid transparent',
                    borderRadius: '0',
                    paddingBottom: '4px',
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) (e.currentTarget as HTMLElement).style.color = 'var(--foreground)';
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) (e.currentTarget as HTMLElement).style.color = 'var(--muted)';
                  }}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* ── Actions ── */}
          <div className="flex items-center gap-3 flex-shrink-0" style={{ marginRight: '24px' }}>
            {/* Dark mode toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200"
              style={{
                border: '1px solid var(--card-border)',
                background: 'var(--card)',
                color: 'var(--foreground)',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'var(--accent)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 0 15px var(--accent-glow)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'var(--card-border)';
                (e.currentTarget as HTMLElement).style.boxShadow = 'none';
              }}
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* CTA */}
            <a
              href="#contact"
              onClick={() => setActiveHash('#contact')}
              className="gradient-btn font-vorex text-[13px] font-bold px-6 py-3 rounded-full flex-shrink-0 transition-all duration-200"
              style={{ textDecoration: 'none', letterSpacing: '0.08em' }}
            >
              <span>Let&apos;s Talk →</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Desktop spacer */}
      <div className="hidden lg:block h-[96px]" />

      {/* ═══════════════ MOBILE NAVBAR ═══════════════ */}
      <nav
        className={`
          lg:hidden fixed top-0 left-0 right-0 z-50
          flex items-center justify-between px-5 py-4
          transition-all duration-300
        `}
        style={scrolled || isOpen
          ? { background: 'var(--card)', borderBottom: '1px solid var(--card-border)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }
          : {}
        }
      >
        {/* Brand */}
        <a
          href="#hero"
          onClick={() => setActiveHash('#hero')}
          className="font-vorex font-bold text-lg tracking-widest z-50"
          style={{ color: 'var(--foreground)', textDecoration: 'none', letterSpacing: '0.15em' }}
        >
          FANS<span style={{ color: 'var(--accent)' }}>YAH</span>
        </a>

        <div className="flex items-center gap-3 z-50">
          {/* Dark mode toggle mobile */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200"
            style={{
              border: '1px solid var(--card-border)',
              background: 'var(--card)',
              color: 'var(--foreground)',
              cursor: 'pointer',
            }}
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-10 h-10 flex flex-col justify-center items-center gap-[5px] focus:outline-none"
            aria-label="Toggle menu"
          >
            <span
              className="block w-6 h-[2px] rounded-full origin-center transition-all duration-300"
              style={{
                background: 'var(--foreground)',
                transform: isOpen ? 'rotate(45deg) translate(5px, 3.5px)' : 'none',
              }}
            />
            <span
              className="block w-6 h-[2px] rounded-full transition-all duration-300"
              style={{
                background: 'var(--foreground)',
                opacity: isOpen ? 0 : 1,
                transform: isOpen ? 'scaleX(0)' : 'scaleX(1)',
              }}
            />
            <span
              className="block w-6 h-[2px] rounded-full origin-center transition-all duration-300"
              style={{
                background: 'var(--foreground)',
                transform: isOpen ? 'rotate(-45deg) translate(5px, -3.5px)' : 'none',
              }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile spacer */}
      <div className="lg:hidden h-[72px]" />

      {/* ═══════════════ MOBILE FULL-SCREEN MENU ═══════════════ */}
      <div
        className={`
          lg:hidden fixed inset-0 z-40
          flex flex-col justify-center items-center
          transition-all duration-300 ease-out
          ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}
        style={{ background: 'var(--background)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}
      >
        <ul className="flex flex-col items-center gap-2 w-full px-8">
          {navLinks.map((link, i) => {
            const isActive = activeHash === link.href;
            return (
              <li
                key={link.href}
                className="w-full"
                style={{
                  transitionDelay: isOpen ? `${80 + i * 55}ms` : '0ms',
                  transform: isOpen ? 'translateY(0)' : 'translateY(24px)',
                  opacity: isOpen ? 1 : 0,
                  transition: 'transform 0.35s ease-out, opacity 0.35s ease-out',
                }}
              >
                <a
                  href={link.href}
                  onClick={() => { setIsOpen(false); setActiveHash(link.href); }}
                  className="block text-center font-vorex text-3xl font-bold py-4 rounded-2xl transition-all duration-200"
                  style={{
                    textDecoration: 'none',
                    color: isActive ? 'var(--accent)' : 'var(--foreground)',
                  }}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Mobile CTA */}
        <div
          className="mt-10 w-full px-8"
          style={{
            transitionDelay: isOpen ? `${80 + navLinks.length * 55}ms` : '0ms',
            transform: isOpen ? 'translateY(0)' : 'translateY(24px)',
            opacity: isOpen ? 1 : 0,
            transition: 'transform 0.35s ease-out, opacity 0.35s ease-out',
          }}
        >
          <a
            href="#contact"
            onClick={() => { setIsOpen(false); setActiveHash('#contact'); }}
            className="gradient-btn block w-full text-center font-vorex text-lg font-bold py-5 rounded-full transition-all duration-200"
            style={{ textDecoration: 'none' }}
          >
            <span>Let&apos;s Talk →</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
