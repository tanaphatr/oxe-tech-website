import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPortfolioBySlug } from '@/data/portfolio';
import dynamic from 'next/dynamic';

const PortfolioDetailClient = dynamic(() => import('./PortfolioDetailClient'), {
    ssr: false
});

interface PortfolioDetailPageProps {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PortfolioDetailPageProps): Promise<Metadata> {
    const { slug } = await params;
    const portfolio = getPortfolioBySlug(slug);

    if (!portfolio) {
        return {
            title: 'Portfolio Not Found - OXE Tech',
        };
    }

    return {
        title: `${portfolio.title.en} - OXE Tech Portfolio`,
        description: portfolio.shortDescription.en,
        keywords: portfolio.technologies.map(tech => tech.name).join(', '),
    };
}

export default async function PortfolioDetailPage({ params }: PortfolioDetailPageProps) {
    const { slug } = await params;
    const portfolio = getPortfolioBySlug(slug);

    if (!portfolio) {
        notFound();
    }

    return <PortfolioDetailClient portfolio={portfolio} />;
}
