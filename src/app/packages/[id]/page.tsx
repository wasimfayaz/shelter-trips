import PackageDetailClient from './PackageDetailClient';

export async function generateStaticParams() {
  return [
    { id: 'signature-journey' },
    { id: 'honeymoon-special' },
    { id: 'family-gondola' },
    { id: 'design-package' },
  ];
}

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function Page({ params }: PageProps) {
  const resolvedParams = await params;
  return <PackageDetailClient id={resolvedParams.id} />;
}
