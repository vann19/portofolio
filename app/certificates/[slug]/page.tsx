import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getCertificateBySlug, certificates } from '../../data/certificates';
import { ThemeProvider } from '../../components/ThemeProvider';

import CertificateDetail from '../../components/CertificateDetail';

export function generateStaticParams() {
  return certificates.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cert = getCertificateBySlug(slug);
  if (!cert) return { title: 'Certificate Not Found' };
  return {
    title: `${cert.title} | Portfolio`,
    description: cert.description,
  };
}

export default async function CertificatePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cert = getCertificateBySlug(slug);

  if (!cert) notFound();

  return (
    <ThemeProvider>
      <div style={{ minHeight: '100vh', background: 'var(--background)', color: 'var(--foreground)' }}>
        <CertificateDetail cert={cert} />
      </div>
    </ThemeProvider>
  );
}
