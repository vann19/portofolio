'use client';

import Link from 'next/link';
import { BadgeCheck, Calendar, ExternalLink, ArrowRight } from 'lucide-react';

const CertIcon = ({ size = 24, color = 'currentColor' }: { size?: number; color?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" style={{ color }}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path fill="currentColor" d="M4.75 3A2.75 2.75 0 0 0 2 5.75V11a5 5 0 0 1 8 6v1h9.25A2.75 2.75 0 0 0 22 15.25v-9.5A2.75 2.75 0 0 0 19.25 3zm2 4h10.5a.75.75 0 0 1 0 1.5H6.75a.75.75 0 0 1 0-1.5M12 12.75a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75M6 10a4 4 0 1 0 0 8.001A4 4 0 0 0 6 10m3 8.001c-.835.628-1.874 1-3 1a4.98 4.98 0 0 1-3-.998v3.246c0 .57.605.92 1.09.669l.09-.055L6 20.592l1.82 1.272a.75.75 0 0 0 1.172-.51L9 21.249z" />
  </svg>
);
import { certificates } from '../data/certificates';

export default function Certificates() {
  return (
    <section
      id="certificates"
      style={{
        padding: '120px 0',
        position: 'relative',
        background: 'linear-gradient(180deg, transparent, rgba(99,102,241,0.03) 50%, transparent)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <span className="tag-badge" style={{ marginBottom: '16px', display: 'inline-block' }}>
            Credentials
          </span>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: '800',
            letterSpacing: '-0.02em',
            color: 'var(--foreground)',
            marginBottom: '16px',
          }}>
            My{' '}
            <span className="gradient-text">Certificates</span>
          </h2>
          <p style={{
            fontSize: '1.05rem',
            color: 'var(--muted)',
            maxWidth: '480px',
            margin: '0 auto',
            lineHeight: '1.7',
          }}>
            Courses and certifications I&apos;ve completed to sharpen my skills.
          </p>
        </div>

        {/* Stats bar */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '40px',
          marginBottom: '60px',
          flexWrap: 'wrap',
        }}>
        {[
            { value: `${certificates.length}`, label: 'Certificates' },
            { value: '2025', label: 'Tahun' },
          ].map((stat) => (
            <div key={stat.label} style={{ textAlign: 'center' }}>
              <div className="gradient-text" style={{ fontSize: '2rem', fontWeight: '800', letterSpacing: '-0.02em' }}>
                {stat.value}
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--muted)', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Certificate cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '24px',
        }} className="cert-grid">
          {certificates.map((cert) => (
            <Link
              key={cert.slug}
              href={`/certificates/${cert.slug}`}
              style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column' }}
            >
              <div
                className="glass-card"
                style={{
                  borderRadius: '20px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  flex: 1,
                  cursor: 'pointer',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)';
                  (e.currentTarget as HTMLDivElement).style.boxShadow = '0 12px 40px rgba(0,0,0,0.15)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                  (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
                }}
              >
                {/* Top gradient strip */}
                

                <div style={{ padding: '28px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  {/* Icon + category */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                    <CertIcon size={28} color="var(--accent)" />
                    <span className="tag-badge" style={{ fontSize: '0.7rem' }}>
                      {cert.category}
                    </span>
                  </div>

                  {/* Title + arrow */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '8px', marginBottom: '10px' }}>
                    <h3 style={{
                      fontSize: '1rem', fontWeight: '700', color: 'var(--foreground)',
                      lineHeight: '1.4', flex: 1,
                    }}>
                      {cert.title}
                    </h3>
                    <ArrowRight size={16} color="var(--muted)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  </div>

                  {/* Issuer */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '16px' }}>
                    <BadgeCheck size={16} color="var(--accent)" />
                    <span style={{ fontSize: '0.875rem', fontWeight: '600', color: 'var(--accent)' }}>
                      {cert.issuer}
                    </span>
                  </div>

                  {/* Divider */}
                  <div style={{ height: '1px', background: 'var(--card-border)', marginBottom: '16px', marginTop: 'auto' }} />

                  {/* Date + Credential */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Calendar size={14} color="var(--muted)" />
                      <span style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>{cert.date}</span>
                    </div>
                    {cert.credentialId && (
                      <span style={{
                        fontSize: '0.68rem', color: 'var(--muted)',
                        fontFamily: 'var(--font-fira-code), monospace',
                        background: 'var(--background)',
                        padding: '3px 8px', borderRadius: '6px',
                        border: '1px solid var(--card-border)',
                      }}>
                        {cert.credentialId}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .cert-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 640px) {
          .cert-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
