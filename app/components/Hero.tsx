'use client';

import { useEffect, useState } from 'react';
import { Sparkles, Github, Linkedin, Twitter, Rocket, Zap } from 'lucide-react';

const roles = ['Full Stack Developer', 'Backend Developer', 'Web Developer'];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout: NodeJS.Timeout;

    if (typing) {
      if (displayed.length < currentRole.length) {
        timeout = setTimeout(() => {
          setDisplayed(currentRole.slice(0, displayed.length + 1));
        }, 80);
      } else {
        timeout = setTimeout(() => setTyping(false), 2000);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => {
          setDisplayed(displayed.slice(0, -1));
        }, 40);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '72px',
      }}
    >
      {/* Background grid */}
      <div
        className="bg-grid"
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.4,
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
        }}
      />

      {/* Glow orbs */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '10%',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)',
        filter: 'blur(40px)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '20%',
        right: '10%',
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(168,85,247,0.15) 0%, transparent 70%)',
        filter: 'blur(40px)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', width: '100%', position: 'relative' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '60px',
          alignItems: 'center',
        }} className="hero-grid">

          {/* Text content */}
          <div className="animate-slide-left">

            <h1 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: '800',
              lineHeight: '1.1',
              letterSpacing: '-0.03em',
              marginBottom: '16px',
              color: 'var(--foreground)',
            }}>
              Hi, I&apos;m{' '}
              <span className="gradient-text">Fansyah</span>
            </h1>

            {/* Typewriter */}
            <div style={{
              fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
              fontWeight: '500',
              color: 'var(--muted)',
              marginBottom: '24px',
              fontFamily: 'var(--font-fira-code), monospace',
              minHeight: '2em',
            }}>
              <span style={{ color: 'var(--accent)' }}>&gt;</span>{' '}
              <span style={{ color: 'var(--foreground)' }}>{displayed}</span>
              <span className="cursor-blink" style={{ color: 'var(--accent)', fontWeight: '300' }}>|</span>
            </div>

            <p style={{
              fontSize: '1.05rem',
              lineHeight: '1.8',
              color: 'var(--muted)',
              maxWidth: '480px',
              marginBottom: '40px',
            }}>
              I am La Ode Muhammad Nurfansyah, an enthusiastic Junior Developer passionate about building clean, responsive, and modern web applications. Always eager to learn and turn creative ideas into reality.
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a
                href="#projects"
                className="gradient-btn"
                style={{
                  padding: '14px 28px',
                  borderRadius: '12px',
                  fontWeight: '600',
                  fontSize: '0.95rem',
                  textDecoration: 'none',
                  display: 'inline-block',
                  letterSpacing: '0.01em',
                }}
              >
                <span>View My Work →</span>
              </a>
              <a
                href="#contact"
                style={{
                  padding: '14px 28px',
                  borderRadius: '12px',
                  fontWeight: '600',
                  fontSize: '0.95rem',
                  textDecoration: 'none',
                  display: 'inline-block',
                  border: '1px solid var(--card-border)',
                  color: 'var(--foreground)',
                  background: 'var(--card)',
                  transition: 'all 0.3s ease',
                  letterSpacing: '0.01em',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.borderColor = 'var(--accent)';
                  el.style.boxShadow = '0 0 20px var(--accent-glow)';
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.borderColor = 'var(--card-border)';
                  el.style.boxShadow = 'none';
                }}
              >
                <span>Download CV</span>
              </a>
            </div>

            {/* Social links */}
            <div style={{ display: 'flex', gap: '16px', marginTop: '40px', alignItems: 'center' }}>
              <span style={{ fontSize: '0.8rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Follow me</span>
              <div style={{ width: '40px', height: '1px', background: 'var(--card-border)' }} />
              {[
                { label: 'GitHub', href: 'https://github.com/vann19', icon: <Github size={18} /> },
                { label: 'LinkedIn', href: 'https://www.linkedin.com/in/fansyalaode/', icon: <Linkedin size={18} /> },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  title={social.label}
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    border: '1px solid var(--card-border)',
                    background: 'var(--card)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1rem',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget;
                    el.style.borderColor = 'var(--accent)';
                    el.style.transform = 'translateY(-2px)';
                    el.style.boxShadow = '0 4px 15px var(--accent-glow)';
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget;
                    el.style.borderColor = 'var(--card-border)';
                    el.style.transform = 'translateY(0)';
                    el.style.boxShadow = 'none';
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Visual / Avatar */}
          <div className="animate-slide-right" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div className="animate-float" style={{ position: 'relative' }}>
              {/* Decorative ring */}
              <div
                className="animate-pulse-glow"
                style={{
                  position: 'absolute',
                  inset: '-20px',
                  borderRadius: '50%',
                  border: '2px solid',
                  borderColor: 'var(--accent)',
                  opacity: 0.3,
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: '-40px',
                  borderRadius: '50%',
                  border: '1px dashed var(--accent)',
                  opacity: 0.15,
                  animation: 'spin 20s linear infinite',
                }}
              />

              {/* Avatar photo */}
              <div style={{
                width: '280px',
                height: '280px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, var(--gradient-start), var(--gradient-end))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                zIndex: 1,
                boxShadow: '0 0 60px rgba(99,102,241,0.3)',
                overflow: 'hidden',
                padding: '3px',
              }}>
                <img
                  src="/img/_DSC0009.jpg"
                  alt="Fansyah"
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    objectPosition: 'center 10%', // Menggeser fokus gambar ke bawah
                    display: 'block',
                  }}
                />
              </div>

              {/* Floating badges */}
              <div style={{
                position: 'absolute',
                top: '-10px',
                right: '-20px',
                background: 'var(--card)',
                border: '1px solid var(--card-border)',
                borderRadius: '12px',
                padding: '8px 14px',
                fontSize: '0.8rem',
                fontWeight: '600',
                color: 'var(--foreground)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                whiteSpace: 'nowrap',
                zIndex: 2,
              }}>
                <Rocket size={14} style={{ display: 'inline', marginRight: '4px', verticalAlign: 'text-bottom' }} /> 2+ Projects
              </div>

              <div style={{
                position: 'absolute',
                bottom: '20px',
                left: '-30px',
                background: 'var(--card)',
                border: '1px solid var(--card-border)',
                borderRadius: '12px',
                padding: '8px 14px',
                fontSize: '0.8rem',
                fontWeight: '600',
                color: 'var(--foreground)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                whiteSpace: 'nowrap',
                zIndex: 2,
              }}>
                <Zap size={14} style={{ display: 'inline', marginRight: '4px', verticalAlign: 'text-bottom' }} /> 2+ Years Exp.
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{
          position: 'absolute',
          bottom: '-60px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          opacity: 0.5,
        }}>
          <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--muted)' }}>Scroll</span>
          <div style={{
            width: '24px',
            height: '40px',
            border: '2px solid var(--card-border)',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
            padding: '4px',
          }}>
            <div style={{
              width: '4px',
              height: '8px',
              borderRadius: '2px',
              background: 'var(--accent)',
              animation: 'float 1.5s ease-in-out infinite',
            }} />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; text-align: center; }
          .hero-grid > div:last-child { display: none !important; }
        }
      `}</style>
    </section>
  );
}
