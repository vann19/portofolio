import { Heart, Coffee } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        borderTop: '1px solid var(--card-border)',
        padding: '48px 24px',
        marginTop: '40px',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '24px',
        }}>
          {/* Logo */}
          <div>
            <span style={{
              fontSize: '1.15rem',
              fontWeight: '700',
              fontFamily: 'var(--font-fira-code), monospace',
            }}>
              <span className="gradient-text">{'<'}</span>
              <span style={{ color: 'var(--foreground)' }}>dev</span>
              <span className="gradient-text">{'/>'}</span>
            </span>
          </div>

          {/* Nav links */}
          <div style={{ display: 'flex', gap: '28px' }}>
            {['About', 'Skills', 'Projects', 'Contact'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="nav-link"
                style={{ textDecoration: 'none', fontSize: '0.85rem' }}
              >
                {link}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div style={{
            fontSize: '0.8rem',
            color: 'var(--muted)',
            textAlign: 'right',
          }}>
            © {year} Fansyah. All rights reserved.
            <br />
            <span style={{ fontSize: '0.75rem', opacity: 0.7 }}>
              Built with Next.js & <Coffee size={14} style={{ display: 'inline', verticalAlign: 'text-bottom' }} />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
