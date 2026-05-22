'use client';

import Link from 'next/link';
import { Award, BadgeCheck, Calendar, ExternalLink, ArrowRight } from 'lucide-react';
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
                <div style={{ height: '8px', background: cert.gradient }} />

                <div style={{ padding: '28px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  {/* Icon + category */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                    <div style={{
                      width: '48px', height: '48px', borderRadius: '14px',
                      background: cert.gradient,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      boxShadow: '0 4px 15px rgba(0,0,0,0.15)',
                    }}>
                      <Award size={24} color="white" />
                    </div>
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
