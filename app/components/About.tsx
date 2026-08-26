'use client';
import { GraduationCap, Target } from 'lucide-react';

const stats = [
  { label: 'Projects Completed', value: '2' },
  { label: 'Years Experience', value: '2+' },
  { label: 'Technologies', value: '10+' },
];

export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: '120px 0',
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        {/* Section header */}
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <span className="tag-badge" style={{ marginBottom: '16px', display: 'inline-block' }}>
            About Me
          </span>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: '800',
            letterSpacing: '-0.02em',
            color: 'var(--foreground)',
            marginBottom: '16px',
          }}>
            Passion for{' '}
            <span className="gradient-text">Crafting</span>
            {' '}Digital Experiences
          </h2>
          <p style={{
            fontSize: '1.05rem',
            color: 'var(--muted)',
            maxWidth: '500px',
            margin: '0 auto',
            lineHeight: '1.7',
          }}>
            Building the web, one component at a time.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '60px',
          alignItems: 'center',
        }} className="about-grid">
          {/* Left: content */}
          <div>
            <div
              className="glass-card"
              style={{
                borderRadius: '20px',
                padding: '40px',
                marginBottom: '24px',
              }}
            >
              <div style={{
                fontSize: '2rem',
                marginBottom: '16px',
              }}>
                <GraduationCap size={32} />
              </div>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: '700',
                color: 'var(--foreground)',
                marginBottom: '12px',
              }}>
                Who I Am
              </h3>
              <p style={{
                lineHeight: '1.8',
                color: 'var(--muted)',
                fontSize: '0.95rem',
              }}>
                I&apos;m a Full Stack Developer with a deep love for building scalable, high-performance web applications. I thrive at the intersection of great engineering and beautiful design—where clean code meets stunning UI.
              </p>
            </div>

            <div
              className="glass-card"
              style={{
                borderRadius: '20px',
                padding: '40px',
              }}
            >
              <div style={{
                fontSize: '2rem',
                marginBottom: '16px',
              }}>
                <Target size={32} />
              </div>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: '700',
                color: 'var(--foreground)',
                marginBottom: '12px',
              }}>
                My Approach
              </h3>
              <p style={{
                lineHeight: '1.8',
                color: 'var(--muted)',
                fontSize: '0.95rem',
              }}>
                I believe in writing code that&apos;s not just functional, but elegant. I prioritize accessibility, performance, and user experience in every project—ensuring every pixel is intentional and every interaction delightful.
              </p>
            </div>
          </div>

          {/* Right: stats + timeline */}
          <div>
            {/* Stats grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '16px',
              marginBottom: '32px',
            }}>
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="glass-card"
                  style={{
                    borderRadius: '16px',
                    padding: '24px',
                    textAlign: 'center',
                  }}
                >
                  <div style={{
                    fontSize: '2rem',
                    fontWeight: '800',
                    letterSpacing: '-0.02em',
                    marginBottom: '4px',
                  }} className="gradient-text">
                    {stat.value}
                  </div>
                  <div style={{
                    fontSize: '0.8rem',
                    color: 'var(--muted)',
                    fontWeight: '500',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                  }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Timeline */}
            <div
              className="glass-card"
              style={{
                borderRadius: '20px',
                padding: '32px',
              }}
            >
              <h3 style={{
                fontSize: '1rem',
                fontWeight: '700',
                color: 'var(--foreground)',
                marginBottom: '24px',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}>
                Journey
              </h3>
              {[
                { year: '2026', title: 'Fullstack Developer — Garda Tech', desc: 'Bergabung di agency Garda Tech sebagai Fullstack Developer, membangun sistem, API, dan antarmuka untuk berbagai proyek klien.' },
                { year: '2025', title: 'Freelance Developer', desc: 'Membangun aplikasi web dan sistem sesuai kebutuhan klien dengan fokus pada kualitas kode dan user experience.' },
                { year: '2024', title: 'SDA - Robotika UTY', desc: 'Anggota aktif di Robotika UTY 2024-2025.' },
                { year: '2022', title: 'Informatika UTY', desc: 'Mahasiswa jurusan Informatika di Universitas Teknologi Yogyakarta, lulus tahun 2026.' },
              ].map((item, i) => (
                <div key={i} style={{
                  display: 'flex',
                  gap: '16px',
                  paddingBottom: i < 3 ? '24px' : '0',
                  position: 'relative',
                }}>
                  {i < 3 && (
                    <div style={{
                      position: 'absolute',
                      left: '27px',
                      top: '36px',
                      bottom: '0',
                      width: '1px',
                      background: 'var(--card-border)',
                    }} />
                  )}
                  <div style={{
                    flexShrink: 0,
                    width: '55px',
                    height: '36px',
                    borderRadius: '8px',
                    background: 'var(--accent-glow)',
                    border: '1px solid rgba(99,102,241,0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.75rem',
                    fontWeight: '700',
                    color: 'var(--accent)',
                    fontFamily: 'var(--font-fira-code)',
                  }}>
                    {item.year}
                  </div>
                  <div>
                    <div style={{
                      fontWeight: '600',
                      color: 'var(--foreground)',
                      fontSize: '0.9rem',
                      marginBottom: '4px',
                    }}>
                      {item.title}
                    </div>
                    <div style={{
                      fontSize: '0.8rem',
                      color: 'var(--muted)',
                      lineHeight: '1.6',
                    }}>
                      {item.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
