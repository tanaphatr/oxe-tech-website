'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslation } from '@/lib/translations';
import { portfolioData } from '@/data/portfolio';
import Image from 'next/image';
import Link from 'next/link';

export default function PortfolioSection() {
    const { language } = useLanguage();

    return (
        <section id="portfolio" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{getTranslation('portfolioTitle', language)}</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        {getTranslation('portfolioDescription', language)}
                    </p>
                </div>                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {portfolioData.slice(0, 3).map((item) => (
                        <Link
                            key={item.id}
                            href={`/Portfolio/${item.slug}`}
                            className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            <div className="aspect-video relative bg-gradient-to-br from-blue-100 to-blue-300 flex items-center justify-center">
                                {item.images.thumbnail && (
                                    <Image
                                        src={item.images.thumbnail}
                                        alt={item.title[language]}
                                        fill
                                        className="object-cover"
                                    />
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                                    <div className="p-6 text-white">
                                        <h3 className="text-lg font-semibold mb-2">{item.title[language]}</h3>
                                        <p className="text-sm text-gray-200 mb-3">{item.shortDescription[language]}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {item.technologies.slice(0, 3).map((tech, techIndex) => (
                                                <span key={techIndex} className="bg-white/20 px-2 py-1 rounded text-xs">
                                                    {tech.name}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>))}
                </div>

                {/* View All Portfolio Button */}
                <div className="text-center mt-12">
                    <Link
                        href="/Portfolio"
                        className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                    >
                        {language === 'th' ? 'ดูผลงานทั้งหมด' : 'View All Portfolio'}
                    </Link>
                </div>

                {/* Portfolio List */}
                <div className="mt-16">
                    <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <ul className="space-y-3">
                                    <li className="flex items-start">
                                        <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                        <span>{getTranslation('portfolioList1', language)}</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                        <span>{getTranslation('portfolioList2', language)}</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                        <span>{getTranslation('portfolioList3', language)}</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                        <span>{getTranslation('portfolioList4', language)}</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                        <span>{getTranslation('portfolioList5', language)}</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                        <span>{getTranslation('portfolioList6', language)}</span>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <ul className="space-y-3">
                                    <li className="flex items-start">
                                        <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                        <span>{getTranslation('portfolioList7', language)}</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                        <span>{getTranslation('portfolioList8', language)}</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                        <span>{getTranslation('portfolioList9', language)}</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                        <span>{getTranslation('portfolioList10', language)}</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                        <span>{getTranslation('portfolioList11', language)}</span>
                                    </li>                                    <li className="flex items-start">
                                        <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                        <span>{getTranslation('portfolioList12', language)}</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                        <span>{getTranslation('portfolioList13', language)}</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                        <span>{getTranslation('portfolioList14', language)}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
