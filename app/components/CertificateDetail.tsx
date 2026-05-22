'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import type { Certificate } from '../data/certificates';
import {
  ArrowLeft, Award, BadgeCheck, Calendar, Clock, ExternalLink, Tag, CheckCircle, BookOpen, ImageIcon, X, ZoomIn,
} from 'lucide-react';

export default function CertificateDetail({ cert }: { cert: Certificate }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  return (
    <main style={{ paddingTop: '72px', minHeight: '100vh' }}>
      {/* Hero banner */}
      <div style={{
        height: '360px',
        background: cert.gradient,
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '24px',
      }}>
        {/* Overlay */}
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.2)', backdropFilter: 'blur(1px)' }} />

        {/* Grid */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }} />

        {/* Icon */}
        <div style={{
          position: 'relative', zIndex: 1,
          width: '100px', height: '100px',
          borderRadius: '24px',
          background: 'rgba(255,255,255,0.15)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255,255,255,0.3)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
        }}>
          <Award size={52} color="white" />
        </div>

        {/* Title */}
        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: '0 24px' }}>
          <div style={{
            display: 'inline-block',
            background: 'rgba(255,255,255,0.15)',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(255,255,255,0.2)',
            borderRadius: '9999px',
            padding: '4px 14px',
            fontSize: '0.75rem',
            fontWeight: '700',
            color: 'white',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            marginBottom: '12px',
          }}>
            {cert.category}
          </div>
          <h1 style={{
            fontSize: 'clamp(1.6rem, 3.5vw, 2.8rem)',
            fontWeight: '800',
            color: 'white',
            letterSpacing: '-0.02em',
            textShadow: '0 2px 20px rgba(0,0,0,0.3)',
            margin: 0,
            maxWidth: '700px',
          }}>
            {cert.title}
          </h1>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 24px' }}>
        {/* Back */}
        <div style={{ padding: '32px 0 0' }}>
          <Link
            href="/#certificates"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              color: 'var(--muted)', textDecoration: 'none',
              fontSize: '0.875rem', fontWeight: '500',
              padding: '8px 16px', borderRadius: '10px',
              border: '1px solid var(--card-border)', background: 'var(--card)',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.borderColor = 'var(--accent)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--muted)'; e.currentTarget.style.borderColor = 'var(--card-border)'; }}
          >
            <ArrowLeft size={16} />
            Back to Certificates
          </Link>
        </div>

        {/* Grid layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 280px',
          gap: '40px',
          padding: '40px 0 80px',
          alignItems: 'start',
        }} className="cert-slug-grid">

          {/* Left */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            {/* Description */}
            <div className="glass-card" style={{ borderRadius: '20px', padding: '36px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <BookOpen size={20} color="var(--accent)" />
                <h2 style={{ fontSize: '1.2rem', fontWeight: '700', color: 'var(--foreground)', margin: 0 }}>
                  About this Certificate
                </h2>
              </div>
              <p style={{ lineHeight: '1.9', color: 'var(--muted)', fontSize: '0.97rem', margin: 0 }}>
                {cert.description}
              </p>
            </div>

            {/* Certificate Image */}
            <div className="glass-card" style={{ borderRadius: '20px', padding: '28px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                <ImageIcon size={20} color="var(--accent)" />
                <h2 style={{ fontSize: '1.2rem', fontWeight: '700', color: 'var(--foreground)', margin: 0 }}>
                  Certificate Preview
                </h2>
              </div>

              {cert.image ? (
                <div
                  onClick={() => setLightboxOpen(true)}
                  style={{
                    position: 'relative',
                    width: '100%',
                    borderRadius: '14px',
                    overflow: 'hidden',
                    cursor: 'zoom-in',
                    border: '1px solid var(--card-border)',
                    background: 'var(--background)',
                    aspectRatio: '16/9',
                  }}
                >
                  <Image
                    src={cert.image}
                    alt={`${cert.title} certificate`}
                    fill
                    style={{ objectFit: 'contain' }}
                    sizes="(max-width: 768px) 100vw, 660px"
                  />
                  {/* Zoom hint overlay */}
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(0,0,0,0)',
                    transition: 'background 0.2s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.background = 'rgba(0,0,0,0.3)'; (e.currentTarget.querySelector('.zoom-icon') as HTMLElement).style.opacity = '1'; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.background = 'rgba(0,0,0,0)'; (e.currentTarget.querySelector('.zoom-icon') as HTMLElement).style.opacity = '0'; }}
                  >
                    <div className="zoom-icon" style={{ opacity: 0, transition: 'opacity 0.2s ease', background: 'rgba(255,255,255,0.9)', borderRadius: '12px', padding: '10px 16px', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '600', fontSize: '0.85rem', color: '#111' }}>
                      <ZoomIn size={18} /> Click to enlarge
                    </div>
                  </div>
                </div>
              ) : (
                // Placeholder when image not yet uploaded
                <div style={{
                  width: '100%',
                  aspectRatio: '16/9',
                  borderRadius: '14px',
                  border: '2px dashed var(--card-border)',
                  background: 'var(--background)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '12px',
                  padding: '24px',
                }}>
                  <ImageIcon size={40} color="var(--muted)" style={{ opacity: 0.4 }} />
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--muted)', marginBottom: '6px' }}>No image yet</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--muted)', opacity: 0.7, fontFamily: 'var(--font-fira-code)', lineHeight: '1.6' }}>
                      Drop your image at:<br />
                      <span style={{ color: 'var(--accent)' }}>public/certificates/{cert.slug}.jpg</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="glass-card" style={{ borderRadius: '20px', padding: '36px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                <CheckCircle size={20} color="var(--accent)" />
                <h2 style={{ fontSize: '1.2rem', fontWeight: '700', color: 'var(--foreground)', margin: 0 }}>
                  Skills Covered
                </h2>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                {cert.skills.map((skill) => (
                  <div key={skill} style={{
                    display: 'flex', alignItems: 'center', gap: '10px',
                    padding: '12px 16px', borderRadius: '12px',
                    background: 'var(--background)', border: '1px solid var(--card-border)',
                  }}>
                    <div style={{
                      width: '8px', height: '8px', borderRadius: '50%',
                      background: 'linear-gradient(135deg, var(--gradient-start), var(--gradient-end))',
                      flexShrink: 0,
                    }} />
                    <span style={{ fontSize: '0.875rem', fontWeight: '500', color: 'var(--foreground)' }}>{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="gradient-btn"
                style={{
                  padding: '14px 28px', borderRadius: '12px',
                  fontWeight: '600', fontSize: '0.95rem',
                  textDecoration: 'none',
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                }}
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <ExternalLink size={18} />
                  View Certificate
                </span>
              </a>
              <a
                href={cert.issuerUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: '14px 28px', borderRadius: '12px',
                  fontWeight: '600', fontSize: '0.95rem',
                  textDecoration: 'none',
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  border: '1px solid var(--card-border)', color: 'var(--foreground)',
                  background: 'var(--card)', transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.boxShadow = '0 0 20px var(--accent-glow)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--card-border)'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                <BadgeCheck size={18} />
                Visit {cert.issuer}
              </a>
            </div>
          </div>

          {/* Right sidebar */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* Info card */}
            <div className="glass-card" style={{ borderRadius: '20px', padding: '28px' }}>
              <h3 style={{
                fontSize: '0.8rem', fontWeight: '600', color: 'var(--muted)',
                textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '20px',
              }}>
                Certificate Info
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  { icon: <BadgeCheck size={18} color="var(--accent)" />, label: 'Issuer', value: cert.issuer },
                  { icon: <Calendar size={18} color="var(--accent)" />, label: 'Completed', value: cert.date },
                  { icon: <Clock size={18} color="var(--accent)" />, label: 'Duration', value: cert.duration },
                ].map((row) => (
                  <div key={row.label} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{
                      width: '36px', height: '36px', borderRadius: '10px',
                      background: 'var(--accent-glow)', border: '1px solid rgba(99,102,241,0.2)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                    }}>
                      {row.icon}
                    </div>
                    <div>
                      <div style={{ fontSize: '0.72rem', color: 'var(--muted)', marginBottom: '2px' }}>{row.label}</div>
                      <div style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--foreground)' }}>{row.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Credential ID */}
            {cert.credentialId && (
              <div className="glass-card" style={{ borderRadius: '20px', padding: '24px' }}>
                <h3 style={{
                  fontSize: '0.8rem', fontWeight: '600', color: 'var(--muted)',
                  textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '12px',
                }}>
                  Credential ID
                </h3>
                <div style={{
                  fontFamily: 'var(--font-fira-code), monospace',
                  fontSize: '0.85rem', fontWeight: '500',
                  color: 'var(--accent)', letterSpacing: '0.03em',
                  background: 'var(--accent-glow)',
                  border: '1px solid rgba(99,102,241,0.2)',
                  borderRadius: '10px', padding: '10px 14px',
                  wordBreak: 'break-all',
                }}>
                  {cert.credentialId}
                </div>
              </div>
            )}

            {/* Category */}
            <div className="glass-card" style={{ borderRadius: '20px', padding: '24px' }}>
              <h3 style={{
                fontSize: '0.8rem', fontWeight: '600', color: 'var(--muted)',
                textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '12px',
                display: 'flex', alignItems: 'center', gap: '6px',
              }}>
                <Tag size={13} />
                Category
              </h3>
              <span className="tag-badge" style={{ fontSize: '0.85rem', padding: '6px 14px' }}>
                {cert.category}
              </span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .cert-slug-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  );
}
