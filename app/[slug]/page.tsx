import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getProjectBySlug, projects } from '../data/projects';
import { ThemeProvider } from '../components/ThemeProvider';
import Footer from '../components/Footer';
import ProjectDetail from '../components/ProjectDetail';

// Generate static params for all projects
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

// Generate metadata per page
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: 'Project Not Found' };
  return {
    title: `${project.title} | Portfolio`,
    description: project.description,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  return (
    <ThemeProvider>
      <div style={{ minHeight: '100vh', background: 'var(--background)', color: 'var(--foreground)' }}>
        <ProjectDetail project={project} />
      </div>
    </ThemeProvider>
  );
}
