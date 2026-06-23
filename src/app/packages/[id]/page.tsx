import PackageDetailClient from './PackageDetailClient';

export async function generateStaticParams() {
  return [
    { id: 'honeymoon-special' },
    { id: 'abc-valley' },
    { id: 'betaab-valley' },
    { id: 'shikara-ride' },
    { id: 'supper-chaijai' },
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
