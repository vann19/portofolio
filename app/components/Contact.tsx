'use client';

import { useState } from 'react';
import { Mail, MapPin, Zap, Github, Linkedin, Twitter, Instagram, CheckCircle, Loader2, Send } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Gagal mengirim pesan.');
      setSent(true);
      setForm({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSent(false), 5000);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Terjadi kesalahan.');
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      id="contact"
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
            Let&apos;s Talk
          </span>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: '800',
            letterSpacing: '-0.02em',
            color: 'var(--foreground)',
            marginBottom: '16px',
          }}>
            Get In{' '}
            <span className="gradient-text">Touch</span>
          </h2>
          <p style={{
            fontSize: '1.05rem',
            color: 'var(--muted)',
            maxWidth: '480px',
            margin: '0 auto',
            lineHeight: '1.7',
          }}>
            Have a project in mind or just want to say hi? My inbox is always open.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.6fr',
          gap: '40px',
          alignItems: 'start',
        }} className="contact-grid">
          {/* Left: info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {[
              { icon: <Mail size={24} />, label: 'Email', value: 'ahmadfansya660@gmail.com', href: 'mailto:hello@vanzer.dev' },
              { icon: <MapPin size={24} />, label: 'Location', value: 'Indonesia ', href: null },
              { icon: <Zap size={24} />, label: 'Response Time', value: 'Within 24 hours', href: null },
            ].map((info) => (
              <div
                key={info.label}
                className="glass-card"
                style={{
                  borderRadius: '16px',
                  padding: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  cursor: info.href ? 'pointer' : 'default',
                }}
              >
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  background: 'var(--accent-glow)',
                  border: '1px solid rgba(99,102,241,0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.3rem',
                  flexShrink: 0,
                }}>
                  {info.icon}
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--muted)', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px' }}>
                    {info.label}
                  </div>
                  {info.href ? (
                    <a href={info.href} style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--accent)', textDecoration: 'none' }}>
                      {info.value}
                    </a>
                  ) : (
                    <div style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--foreground)' }}>
                      {info.value}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Social links */}
            <div
              className="glass-card"
              style={{
                borderRadius: '16px',
                padding: '24px',
              }}
            >
              <div style={{ fontSize: '0.75rem', color: 'var(--muted)', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '16px' }}>
                Social Media
              </div>
              <div style={{ display: 'flex', gap: '12px' }}>
                {[
                  { label: 'GitHub', icon: <Github size={20} />, href: '#' },
                  { label: 'LinkedIn', icon: <Linkedin size={20} />, href: '#' },
                  { label: 'Twitter', icon: <Twitter size={20} />, href: '#' },
                  { label: 'Instagram', icon: <Instagram size={20} />, href: '#' },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    title={s.label}
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '10px',
                      border: '1px solid var(--card-border)',
                      background: 'var(--background)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.1rem',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget;
                      el.style.borderColor = 'var(--accent)';
                      el.style.transform = 'translateY(-2px)';
                      el.style.boxShadow = '0 4px 12px var(--accent-glow)';
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget;
                      el.style.borderColor = 'var(--card-border)';
                      el.style.transform = 'translateY(0)';
                      el.style.boxShadow = 'none';
                    }}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div
            className="glass-card"
            style={{
              borderRadius: '24px',
              padding: '40px',
            }}
          >
            {sent ? (
              <div style={{
                textAlign: 'center',
                padding: '60px 20px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '16px',
              }}>
                <div style={{ fontSize: '3rem', display: 'flex', justifyContent: 'center' }}><CheckCircle size={48} color="var(--accent)" /></div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--foreground)' }}>Message Sent!</h3>
                <p style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>Thanks for reaching out! I&apos;ll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '700',
                  color: 'var(--foreground)',
                  marginBottom: '28px',
                }}>
                  Send a Message
                </h3>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '600', color: 'var(--muted)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      Name
                    </label>
                    <input
                      className="contact-input"
                      type="text"
                      required
                      placeholder="John Doe"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '600', color: 'var(--muted)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      Email
                    </label>
                    <input
                      className="contact-input"
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: '16px' }}>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '600', color: 'var(--muted)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Subject
                  </label>
                  <input
                    className="contact-input"
                    type="text"
                    required
                    placeholder="Project Inquiry"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  />
                </div>

                <div style={{ marginBottom: '24px' }}>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '600', color: 'var(--muted)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Message
                  </label>
                  <textarea
                    className="contact-input"
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    style={{ resize: 'vertical', fontFamily: 'var(--font-inter)' }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="gradient-btn"
                  style={{
                    width: '100%',
                    padding: '14px',
                    borderRadius: '12px',
                    fontSize: '0.95rem',
                    fontWeight: '600',
                    cursor: sending ? 'not-allowed' : 'pointer',
                    opacity: sending ? 0.7 : 1,
                    letterSpacing: '0.01em',
                  }}
                >
                  <span>
                    {sending ? (
                      <><Loader2 size={18} className="animate-spin" style={{ display: 'inline', marginRight: '8px', verticalAlign: 'text-bottom' }} /> Sending...</>
                    ) : (
                      <><Send size={18} style={{ display: 'inline', marginRight: '8px', verticalAlign: 'text-bottom' }} /> Send Message</>
                    )}
                  </span>
                </button>
                {error && (
                  <p style={{
                    marginTop: '12px',
                    color: '#ef4444',
                    fontSize: '0.875rem',
                    textAlign: 'center',
                    padding: '10px',
                    background: 'rgba(239,68,68,0.1)',
                    borderRadius: '8px',
                    border: '1px solid rgba(239,68,68,0.2)',
                  }}>
                    ⚠️ {error}
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
