import { Metadata } from 'next';
import PortfolioListClient from './PortfolioListClient';

export const metadata: Metadata = {
    title: 'Portfolio - OXE Tech',
    description: 'Explore our comprehensive portfolio of successful projects including web applications, mobile apps, e-commerce platforms, and enterprise systems.',
    keywords: 'portfolio, web development, mobile apps, e-commerce, systems development, OXE Tech',
};

export default function PortfolioPage() {
    return <PortfolioListClient />;
}
