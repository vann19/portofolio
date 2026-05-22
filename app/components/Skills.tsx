'use client';

import { useEffect, useRef, useState } from 'react';
import { Palette, Settings, Wrench, Atom, Triangle, FileCode2, Server, Wind, Database, Box, GitBranch, Figma } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend',
    icon: <Palette size={28} />,
    skills: [
      { name: 'React / Next.js', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'HTML & CSS', level: 95 },
      { name: 'Tailwind CSS', level: 85 },
    ],
  },
  {
    title: 'Backend',
    icon: <Settings size={28} />,
    skills: [
      { name: 'Node.js / Express', level: 75 },
      { name: 'PostgreSQL', level: 70 },
      { name: 'REST APIs', level: 85 },
      { name: 'Firebase', level: 72 },
    ],
  },
  {
    title: 'Tools & DevOps',
    icon: <Wrench size={28} />,
    skills: [
      { name: 'Git / GitHub', level: 90 },
      { name: 'Docker', level: 60 },
      { name: 'Vercel / Netlify', level: 88 },
      { name: 'Figma', level: 78 },
    ],
  },
];

const techStack = [
  { name: 'React', icon: <Atom size={16} /> },
  { name: 'Next.js', icon: <Triangle size={16} /> },
  { name: 'TypeScript', icon: <FileCode2 size={16} /> },
  { name: 'Node.js', icon: <Server size={16} /> },
  { name: 'Tailwind', icon: <Wind size={16} /> },
  { name: 'PostgreSQL', icon: <Database size={16} /> },
  { name: 'Docker', icon: <Box size={16} /> },
  { name: 'Git', icon: <GitBranch size={16} /> },
  { name: 'Figma', icon: <Figma size={16} /> },
  { name: 'Vercel', icon: <Triangle size={16} /> },
];

function SkillBar({ level, animated }: { level: number; animated: boolean }) {
  return (
    <div className="skill-bar">
      <div
        className="skill-bar-fill"
        style={{ width: animated ? `${level}%` : '0%' }}
      />
    </div>
  );
}

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    const section = sectionRef.current;
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
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
            My Skills
          </span>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: '800',
            letterSpacing: '-0.02em',
            color: 'var(--foreground)',
            marginBottom: '16px',
          }}>
            Tech Stack &{' '}
            <span className="gradient-text">Expertise</span>
          </h2>
          <p style={{
            fontSize: '1.05rem',
            color: 'var(--muted)',
            maxWidth: '480px',
            margin: '0 auto',
            lineHeight: '1.7',
          }}>
            A collection of technologies I&apos;ve mastered through real-world projects.
          </p>
        </div>

        {/* Skill cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '24px',
          marginBottom: '60px',
        }} className="skills-grid">
          {skillCategories.map((cat) => (
            <div
              key={cat.title}
              className="glass-card"
              style={{
                borderRadius: '20px',
                padding: '32px',
              }}
            >
              <div style={{ fontSize: '1.8rem', marginBottom: '12px' }}>{cat.icon}</div>
              <h3 style={{
                fontSize: '1.1rem',
                fontWeight: '700',
                color: 'var(--foreground)',
                marginBottom: '24px',
              }}>
                {cat.title}
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                {cat.skills.map((skill) => (
                  <div key={skill.name}>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginBottom: '8px',
                    }}>
                      <span style={{
                        fontSize: '0.875rem',
                        fontWeight: '500',
                        color: 'var(--foreground)',
                      }}>
                        {skill.name}
                      </span>
                      <span style={{
                        fontSize: '0.75rem',
                        color: 'var(--accent)',
                        fontWeight: '600',
                        fontFamily: 'var(--font-fira-code)',
                      }}>
                        {skill.level}%
                      </span>
                    </div>
                    <SkillBar level={skill.level} animated={animated} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech badges */}
        <div
          className="glass-card"
          style={{
            borderRadius: '20px',
            padding: '32px',
            textAlign: 'center',
          }}
        >
          <h3 style={{
            fontSize: '0.85rem',
            fontWeight: '600',
            color: 'var(--muted)',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            marginBottom: '24px',
          }}>
            Technologies I Work With
          </h3>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '12px',
            justifyContent: 'center',
          }}>
            {techStack.map((tech) => (
              <div
                key={tech.name}
                style={{
                  padding: '10px 18px',
                  borderRadius: '12px',
                  background: 'var(--background)',
                  border: '1px solid var(--card-border)',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  color: 'var(--foreground)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  cursor: 'default',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.borderColor = 'var(--accent)';
                  el.style.boxShadow = '0 4px 15px var(--accent-glow)';
                  el.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.borderColor = 'var(--card-border)';
                  el.style.boxShadow = 'none';
                  el.style.transform = 'translateY(0)';
                }}
              >
                <span>{tech.icon}</span>
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .skills-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 640px) {
          .skills-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
