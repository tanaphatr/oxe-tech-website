'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { portfolioData, getPortfolioByCategory } from '@/data/portfolio';
import { PortfolioCategory } from '@/types/portfolio';
import { useLanguage } from '@/contexts/LanguageContext';

export default function PortfolioListClient() {
    const { language } = useLanguage();
    const [activeCategory, setActiveCategory] = useState<PortfolioCategory>('all');
    const [filteredPortfolio, setFilteredPortfolio] = useState(portfolioData);

    const categories = [
        { value: 'all', label: { th: 'ทั้งหมด', en: 'All' } },
        { value: 'web', label: { th: 'เว็บแอปพลิเคชัน', en: 'Web Applications' } },
        { value: 'mobile', label: { th: 'แอปมือถือ', en: 'Mobile Apps' } },
        { value: 'system', label: { th: 'ระบบองค์กร', en: 'Enterprise Systems' } },
        { value: 'ecommerce', label: { th: 'อีคอมเมิร์ซ', en: 'E-commerce' } },
    ];

    const handleCategoryChange = (category: PortfolioCategory) => {
        setActiveCategory(category);
        setFilteredPortfolio(getPortfolioByCategory(category));
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            {language === 'th' ? 'ผลงานของเรา' : 'Our Portfolio'}
                        </h1>
                        <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                            {language === 'th'
                                ? 'สำรวจผลงานที่หลากหลายของเรา ตั้งแต่การพัฒนาเว็บแอปพลิเคชัน แอปมือถือ ระบบอีคอมเมิร์ซ และระบบองค์กรขนาดใหญ่'
                                : 'Explore our diverse portfolio of successful projects including web applications, mobile apps, e-commerce platforms, and enterprise systems.'
                            }
                        </p>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category.value}
                            onClick={() => handleCategoryChange(category.value as PortfolioCategory)}
                            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${activeCategory === category.value
                                    ? 'bg-blue-600 text-white shadow-lg'
                                    : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 shadow-md'
                                }`}
                        >
                            {category.label[language]}
                        </button>
                    ))}
                </div>

                {/* Portfolio Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredPortfolio.map((item) => (
                        <div key={item.id} className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                            {/* Image */}
                            <div className="relative aspect-video overflow-hidden">
                                <Image
                                    src={item.images.thumbnail}
                                    alt={item.title[language]}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="absolute top-4 left-4">
                                    <span className="px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full">
                                        {item.category.toUpperCase()}
                                    </span>
                                </div>
                                <div className="absolute top-4 right-4">
                                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${item.status === 'completed' ? 'bg-green-100 text-green-800' :
                                            item.status === 'in-progress' ? 'bg-yellow-100 text-yellow-800' :
                                                'bg-blue-100 text-blue-800'
                                        }`}>
                                        {item.status === 'completed' ? (language === 'th' ? 'เสร็จสิ้น' : 'Completed') :
                                            item.status === 'in-progress' ? (language === 'th' ? 'กำลังดำเนินการ' : 'In Progress') :
                                                (language === 'th' ? 'ดูแลรักษา' : 'Maintenance')}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                                    {item.title[language]}
                                </h3>
                                <p className="text-gray-600 mb-4 line-clamp-3">
                                    {item.shortDescription[language]}
                                </p>

                                {/* Technologies */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {item.technologies.slice(0, 4).map((tech, index) => (
                                        <div key={index} className="flex items-center space-x-2 bg-gray-100 px-3 py-1 rounded-full">
                                            <div className="w-4 h-4 relative">
                                                <Image
                                                    src={tech.icon}
                                                    alt={tech.name}
                                                    fill
                                                    className="object-contain"
                                                />
                                            </div>
                                            <span className="text-xs font-medium text-gray-700">{tech.name}</span>
                                        </div>
                                    ))}
                                    {item.technologies.length > 4 && (
                                        <span className="bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-700">
                                            +{item.technologies.length - 4}
                                        </span>
                                    )}
                                </div>

                                {/* Meta Info */}
                                <div className="flex justify-between items-center text-sm text-gray-500 mb-6">
                                    <span>{item.client}</span>
                                    <span>{item.year}</span>
                                </div>

                                {/* CTA */}
                                <Link
                                    href={`/Portfolio/${item.slug}`}
                                    className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                                >
                                    {language === 'th' ? 'ดูรายละเอียด' : 'View Details'}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Empty State */}
                {filteredPortfolio.length === 0 && (
                    <div className="text-center py-16">
                        <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-medium text-gray-900 mb-2">
                            {language === 'th' ? 'ไม่พบผลงานในหมวดหมู่นี้' : 'No projects found in this category'}
                        </h3>
                        <p className="text-gray-500">
                            {language === 'th' ? 'กรุณาเลือกหมวดหมู่อื่นหรือติดต่อเราเพื่อปรึกษาโปรเจ็กต์ใหม่' : 'Please try another category or contact us to discuss new projects'}
                        </p>
                    </div>
                )}

                {/* Call to Action */}
                <div className="mt-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-2xl p-8 text-center">
                    <h2 className="text-3xl font-bold mb-4">
                        {language === 'th' ? 'มีโปรเจ็กต์ที่ต้องการพัฒนา?' : 'Have a Project in Mind?'}
                    </h2>
                    <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                        {language === 'th'
                            ? 'เรายินดีที่จะร่วมงานกับคุณเพื่อสร้างสรรค์โซลูชันดิจิทัลที่ตอบโจทย์ธุรกิจของคุณ'
                            : 'We\'d love to work with you to create digital solutions that meet your business needs'
                        }
                    </p>
                    <Link
                        href="/#contact"
                        className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                    >
                        {language === 'th' ? 'เริ่มโปรเจ็กต์ใหม่' : 'Start a New Project'}
                    </Link>
                </div>
            </div>
        </div>
    );
}
