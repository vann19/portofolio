'use client';

import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeProvider';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#certificates', label: 'Certificates' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>
          {/* Logo */}
          <a href="#" style={{ textDecoration: 'none' }}>
            <span style={{ 
              fontSize: '1.25rem', 
              fontWeight: '700',
              fontFamily: 'var(--font-fira-code), monospace',
              letterSpacing: '-0.02em'
            }}>
              <span className="gradient-text">{'<'}</span>
              <span style={{ color: 'var(--foreground)' }}>Portfolio</span>
              <span className="gradient-text">{'/>'}</span>
            </span>
          </a>

          {/* Desktop Links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }} className="nav-desktop">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="nav-link" style={{ textDecoration: 'none' }}>
                {link.label}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            {/* Dark mode toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                border: '1px solid var(--card-border)',
                background: 'var(--card)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.1rem',
                transition: 'all 0.3s ease',
                color: 'var(--foreground)',
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.borderColor = 'var(--accent)';
                (e.target as HTMLElement).style.boxShadow = '0 0 15px var(--accent-glow)';
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.borderColor = 'var(--card-border)';
                (e.target as HTMLElement).style.boxShadow = 'none';
              }}
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* CTA */}
            <a
              href="#contact"
              className="gradient-btn"
              style={{
                padding: '10px 20px',
                borderRadius: '10px',
                fontSize: '0.875rem',
                fontWeight: '600',
                textDecoration: 'none',
                display: 'inline-block',
              }}
            >
              <span>Hire Me</span>
            </a>

            {/* Mobile burger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="mobile-menu-btn"
              aria-label="Toggle menu"
              style={{
                display: 'none',
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                border: '1px solid var(--card-border)',
                background: 'var(--card)',
                cursor: 'pointer',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                gap: '5px',
                padding: '10px',
              }}
            >
              <span style={{ width: '18px', height: '2px', background: 'var(--foreground)', display: 'block', transition: 'all 0.3s', transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }}/>
              <span style={{ width: '18px', height: '2px', background: 'var(--foreground)', display: 'block', transition: 'all 0.3s', opacity: menuOpen ? 0 : 1 }}/>
              <span style={{ width: '18px', height: '2px', background: 'var(--foreground)', display: 'block', transition: 'all 0.3s', transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }}/>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div style={{
            padding: '16px 0',
            borderTop: '1px solid var(--card-border)',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
          }}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link"
                onClick={() => setMenuOpen(false)}
                style={{
                  textDecoration: 'none',
                  padding: '12px 16px',
                  borderRadius: '10px',
                  background: 'var(--card)',
                  display: 'block',
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
