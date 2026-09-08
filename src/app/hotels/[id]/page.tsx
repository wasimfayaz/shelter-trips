import HotelDetailClient from './HotelDetailClient';

export async function generateStaticParams() {
  return [
    { id: 'shelter-group-houseboats' },
    { id: 'shelter-heritage' },
    { id: 'wonder-hills' },
  ];
}

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function Page({ params }: PageProps) {
  const resolvedParams = await params;
  return <HotelDetailClient id={resolvedParams.id} />;
}
