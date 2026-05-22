'use client';

import Link from 'next/link';
import type { Project } from '../data/projects';
import {
  ShoppingBag, ClipboardList, Bot, Home, Sparkles, Smartphone,
  ArrowLeft, ExternalLink, Code2, CheckCircle, Calendar, Briefcase, Tag,
  Heart, Globe, User, Monitor,
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  'undangan-digital': <Heart size={64} color="white" />,
  'aplikasi-presensi-guru': <User size={64} color="white" />,
  'company-profile-gardatech': <Globe size={64} color="white" />,
  // legacy / fallback
  'task-management-app': <ClipboardList size={64} color="white" />,
  'ai-content-generator': <Bot size={64} color="white" />,
  'real-estate-dashboard': <Home size={64} color="white" />,
  'portfolio-website': <Sparkles size={64} color="white" />,
  'social-media-clone': <Smartphone size={64} color="white" />,
};

const defaultIcon = <Monitor size={64} color="white" />;

export default function ProjectDetail({ project }: { project: Project }) {
  return (
    <main style={{ paddingTop: '72px', minHeight: '100vh' }}>
      {/* Hero banner */}
      <div style={{
        height: '380px',
        background: project.gradient,
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        {/* Background blur effect */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(0,0,0,0.25)',
          backdropFilter: 'blur(1px)',
        }} />

        {/* Grid overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }} />

        {/* Icon */}
        <div style={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '24px',
        }}>
          <div style={{
            width: '120px',
            height: '120px',
            borderRadius: '28px',
            background: 'rgba(255,255,255,0.15)',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
          }}>
            {iconMap[project.slug] ?? defaultIcon}
          </div>
          <h1 style={{
            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            fontWeight: '800',
            color: 'white',
            textAlign: 'center',
            letterSpacing: '-0.03em',
            textShadow: '0 2px 20px rgba(0,0,0,0.3)',
            margin: 0,
          }}>
            {project.title}
          </h1>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 24px' }}>
        {/* Back button */}
        <div style={{ padding: '32px 0 0' }}>
          <Link
            href="/#projects"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              color: 'var(--muted)',
              textDecoration: 'none',
              fontSize: '0.875rem',
              fontWeight: '500',
              transition: 'color 0.3s ease',
              padding: '8px 16px',
              borderRadius: '10px',
              border: '1px solid var(--card-border)',
              background: 'var(--card)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--accent)';
              e.currentTarget.style.borderColor = 'var(--accent)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--muted)';
              e.currentTarget.style.borderColor = 'var(--card-border)';
            }}
          >
            <ArrowLeft size={16} />
            Back to Projects
          </Link>
        </div>

        {/* Main layout: 2 columns */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 280px',
          gap: '40px',
          padding: '40px 0 80px',
          alignItems: 'start',
        }} className="slug-grid">

          {/* Left column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {/* Description */}
            <div className="glass-card" style={{ borderRadius: '20px', padding: '36px' }}>
              <h2 style={{
                fontSize: '1.25rem',
                fontWeight: '700',
                color: 'var(--foreground)',
                marginBottom: '16px',
              }}>
                About this Project
              </h2>
              <p style={{
                lineHeight: '1.9',
                color: 'var(--muted)',
                fontSize: '0.97rem',
              }}>
                {project.longDescription}
              </p>
            </div>

            {/* Features */}
            <div className="glass-card" style={{ borderRadius: '20px', padding: '36px' }}>
              <h2 style={{
                fontSize: '1.25rem',
                fontWeight: '700',
                color: 'var(--foreground)',
                marginBottom: '24px',
              }}>
                Key Features
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {project.features.map((feature, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <CheckCircle
                      size={20}
                      color="var(--accent)"
                      style={{ flexShrink: 0, marginTop: '1px' }}
                    />
                    <span style={{ fontSize: '0.93rem', color: 'var(--muted)', lineHeight: '1.6' }}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA buttons */}
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a
                href={project.links.live}
                className="gradient-btn"
                style={{
                  padding: '14px 28px',
                  borderRadius: '12px',
                  fontWeight: '600',
                  fontSize: '0.95rem',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <ExternalLink size={18} />
                  View Live Demo
                </span>
              </a>
              <a
                href={project.links.github}
                style={{
                  padding: '14px 28px',
                  borderRadius: '12px',
                  fontWeight: '600',
                  fontSize: '0.95rem',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  border: '1px solid var(--card-border)',
                  color: 'var(--foreground)',
                  background: 'var(--card)',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent)';
                  e.currentTarget.style.boxShadow = '0 0 20px var(--accent-glow)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--card-border)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <Code2 size={18} />
                View Source Code
              </a>
            </div>
          </div>

          {/* Right column: sidebar */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* Project info */}
            <div className="glass-card" style={{ borderRadius: '20px', padding: '28px' }}>
              <h3 style={{
                fontSize: '0.8rem',
                fontWeight: '600',
                color: 'var(--muted)',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '20px',
              }}>
                Project Info
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '10px',
                    background: 'var(--accent-glow)',
                    border: '1px solid rgba(99,102,241,0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <Calendar size={18} color="var(--accent)" />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--muted)', marginBottom: '2px' }}>Year</div>
                    <div style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--foreground)' }}>{project.year}</div>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '10px',
                    background: 'var(--accent-glow)',
                    border: '1px solid rgba(99,102,241,0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <Briefcase size={18} color="var(--accent)" />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--muted)', marginBottom: '2px' }}>Role</div>
                    <div style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--foreground)' }}>{project.role}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tech stack */}
            <div className="glass-card" style={{ borderRadius: '20px', padding: '28px' }}>
              <h3 style={{
                fontSize: '0.8rem',
                fontWeight: '600',
                color: 'var(--muted)',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '16px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}>
                <Tag size={14} />
                Tech Stack
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {project.tags.map((tag) => (
                  <span key={tag} className="tag-badge">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Featured badge */}
            {project.featured && (
              <div
                className="glass-card"
                style={{
                  borderRadius: '20px',
                  padding: '20px',
                  background: 'var(--accent-glow)',
                  border: '1px solid rgba(99,102,241,0.3)',
                  textAlign: 'center',
                }}
              >
                <div style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  ⭐ Featured Project
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .slug-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  );
}
