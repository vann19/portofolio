'use client';

import { useState } from 'react';
import Link from 'next/link';
import { projects } from '../data/projects';
import { ShoppingBag, ClipboardList, Bot, Home, Sparkles, Smartphone, Star, Code2, ExternalLink, ArrowRight } from 'lucide-react';

// Map slugs to icons
const iconMap: Record<string, React.ReactNode> = {
  'e-commerce-platform': <ShoppingBag size={48} color="white" />,
  'task-management-app': <ClipboardList size={48} color="white" />,
  'ai-content-generator': <Bot size={48} color="white" />,
  'real-estate-dashboard': <Home size={48} color="white" />,
  'portfolio-website': <Sparkles size={48} color="white" />,
  'social-media-clone': <Smartphone size={48} color="white" />,
};

const filters = ['All', 'Featured', 'Next.js', 'React', 'TypeScript'];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = projects.filter((p) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Featured') return p.featured;
    return p.tags.some((t) => t.toLowerCase().includes(activeFilter.toLowerCase()));
  });

  return (
    <section
      id="projects"
      style={{
        padding: '120px 0',
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span className="tag-badge" style={{ marginBottom: '16px', display: 'inline-block' }}>
            My Work
          </span>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: '800',
            letterSpacing: '-0.02em',
            color: 'var(--foreground)',
            marginBottom: '16px',
          }}>
            Featured{' '}
            <span className="gradient-text">Projects</span>
          </h2>
          <p style={{
            fontSize: '1.05rem',
            color: 'var(--muted)',
            maxWidth: '480px',
            margin: '0 auto',
            lineHeight: '1.7',
          }}>
            A selection of projects I&apos;ve built—from idea to deployment.
          </p>
        </div>

        {/* Filters */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '10px',
          justifyContent: 'center',
          marginBottom: '48px',
        }}>
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              style={{
                padding: '8px 20px',
                borderRadius: '9999px',
                border: '1px solid',
                borderColor: activeFilter === f ? 'var(--accent)' : 'var(--card-border)',
                background: activeFilter === f ? 'var(--accent-glow)' : 'var(--card)',
                color: activeFilter === f ? 'var(--accent)' : 'var(--muted)',
                fontSize: '0.875rem',
                fontWeight: '500',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                fontFamily: 'var(--font-inter)',
              }}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Project cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '24px',
        }} className="projects-grid">
          {filtered.map((project) => (
            <div
              key={project.slug}
              className="glass-card project-card"
              style={{
                borderRadius: '20px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
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
              <Link href={`/${project.slug}`} style={{ position: 'absolute', inset: 0, zIndex: 1 }} aria-label={`View ${project.title} details`} />
              
              {/* Card header with gradient */}
              <div style={{ height: '160px', background: project.gradient, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3.5rem', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.1)', backdropFilter: 'blur(2px)' }} />
                <span style={{ position: 'relative', zIndex: 1, filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))' }}>
                  {iconMap[project.slug]}
                </span>
                {project.featured && (
                  <div style={{ position: 'absolute', top: '12px', right: '12px', background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(10px)', padding: '4px 10px', borderRadius: '9999px', fontSize: '0.7rem', fontWeight: '700', color: 'white', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Star size={10} fill="currentColor" /> Featured
                  </div>
                )}
              </div>

              {/* Card body */}
              <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '10px', gap: '8px' }}>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--foreground)' }}>
                    {project.title}
                  </h3>
                  <ArrowRight size={18} color="var(--muted)" style={{ flexShrink: 0, marginTop: '2px', transition: 'transform 0.3s ease' }} />
                </div>
                
                <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: '1.7', marginBottom: '16px', flex: 1 }}>
                  {project.description}
                </p>

                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag-badge" style={{ fontSize: '0.7rem' }}>
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div style={{ display: 'flex', gap: '10px', position: 'relative', zIndex: 2 }}>
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ flex: 1, padding: '9px', borderRadius: '10px', border: '1px solid var(--card-border)', background: 'var(--background)', color: 'var(--foreground)', fontSize: '0.8rem', fontWeight: '600', textDecoration: 'none', textAlign: 'center', transition: 'all 0.3s ease', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--card-border)'; e.currentTarget.style.color = 'var(--foreground)'; }}
                  >
                    <Code2 size={14} /> Code
                  </a>
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gradient-btn"
                    style={{ flex: 1, padding: '9px', borderRadius: '10px', fontSize: '0.8rem', fontWeight: '600', textDecoration: 'none', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}
                  >
                    <ExternalLink size={14} /> Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View all button */}
        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <a
            href="#"
            style={{
              padding: '14px 32px',
              borderRadius: '12px',
              fontWeight: '600',
              fontSize: '0.95rem',
              textDecoration: 'none',
              display: 'inline-block',
              border: '1px solid var(--card-border)',
              color: 'var(--foreground)',
              background: 'var(--card)',
              transition: 'all 0.3s ease',
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
            View All Projects →
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .projects-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 640px) {
          .projects-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
