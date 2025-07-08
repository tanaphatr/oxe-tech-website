'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PortfolioItem } from '@/types/portfolio';
import { useLanguage } from '@/contexts/LanguageContext';

interface PortfolioDetailViewProps {
    portfolio: PortfolioItem;
}

export default function PortfolioDetailView({ portfolio }: PortfolioDetailViewProps) {
    const { language } = useLanguage();
    const [selectedImage, setSelectedImage] = useState(0);

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <Link href="/#portfolio" className="text-blue-600 hover:text-blue-800 flex items-center">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        {language === 'th' ? 'กลับไปยังผลงาน' : 'Back to Portfolio'}
                    </Link>
                </div>
            </div>

            {/* Hero Section */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="mb-4">
                                <span className="inline-block px-4 py-2 bg-blue-500/30 rounded-full text-sm font-medium">
                                    {portfolio.category.toUpperCase()}
                                </span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold mb-6">
                                {portfolio.title[language]}
                            </h1>
                            <p className="text-xl text-blue-100 mb-8">
                                {portfolio.description[language]}
                            </p>
                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <p className="text-blue-200 text-sm">{language === 'th' ? 'ลูกค้า' : 'Client'}</p>
                                    <p className="font-semibold">{portfolio.client}</p>
                                </div>
                                <div>
                                    <p className="text-blue-200 text-sm">{language === 'th' ? 'ปี' : 'Year'}</p>
                                    <p className="font-semibold">{portfolio.year}</p>
                                </div>
                                <div>
                                    <p className="text-blue-200 text-sm">{language === 'th' ? 'ระยะเวลา' : 'Duration'}</p>
                                    <p className="font-semibold">{portfolio.duration}</p>
                                </div>
                                <div>
                                    <p className="text-blue-200 text-sm">{language === 'th' ? 'ทีมงาน' : 'Team Size'}</p>
                                    <p className="font-semibold">{portfolio.teamSize} {language === 'th' ? 'คน' : 'people'}</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative max-w-2xl">
                            <div className="aspect-video rounded-xl overflow-hidden shadow-2xl bg-gray-200 mb-4 relative">
                                <Image
                                    src={portfolio.images.gallery[selectedImage]}
                                    alt={portfolio.title[language]}
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>
                            {/* Image Gallery Thumbnails */}
                            {portfolio.images.gallery.length > 1 && (
                                <div className="grid grid-cols-4 gap-2">
                                    {portfolio.images.gallery.map((image, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setSelectedImage(index)}
                                            className={`aspect-video rounded-lg overflow-hidden relative ${selectedImage === index ? 'ring-2 ring-blue-500' : ''
                                                }`}
                                        >
                                            <Image
                                                src={image}
                                                alt={`${portfolio.title[language]} ${index + 1}`}
                                                fill
                                                className="object-contain"
                                            />
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-12">
                        {/* Technologies */}
                        <section>
                            <h2 className="text-3xl font-bold text-gray-900 mb-8">
                                {language === 'th' ? 'เทคโนโลยีที่ใช้' : 'Technologies Used'}
                            </h2>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                                {portfolio.technologies.map((tech, index) => (
                                    <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center">
                                        <div className="w-12 h-12 mx-auto mb-4 relative">
                                            <Image
                                                src={tech.icon}
                                                alt={tech.name}
                                                fill
                                                className="object-contain"
                                            />
                                        </div>
                                        <p className="font-medium text-gray-800">{tech.name}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Features */}
                        <section>
                            <h2 className="text-3xl font-bold text-gray-900 mb-8">
                                {language === 'th' ? 'คุณสมบัติหลัก' : 'Key Features'}
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {portfolio.features[language].map((feature, index) => (
                                    <div key={index} className="flex items-start space-x-3">
                                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <p className="text-gray-700">{feature}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Challenges & Solutions */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <section>
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                                    {language === 'th' ? 'ความท้าทาย' : 'Challenges'}
                                </h2>
                                <div className="space-y-4">
                                    {portfolio.challenges[language].map((challenge, index) => (
                                        <div key={index} className="flex items-start space-x-3">
                                            <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <p className="text-gray-700">{challenge}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                                    {language === 'th' ? 'วิธีแก้ไข' : 'Solutions'}
                                </h2>
                                <div className="space-y-4">
                                    {portfolio.solutions[language].map((solution, index) => (
                                        <div key={index} className="flex items-start space-x-3">
                                            <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <p className="text-gray-700">{solution}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>

                        {/* Results */}
                        <section>
                            <h2 className="text-3xl font-bold text-gray-900 mb-8">
                                {language === 'th' ? 'ผลลัพธ์' : 'Results'}
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {portfolio.results[language].map((result, index) => (
                                    <div key={index} className="bg-green-50 p-6 rounded-xl border border-green-200">
                                        <div className="flex items-start space-x-3">
                                            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                                                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <p className="text-gray-800 font-medium">{result}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Testimonial */}
                        {portfolio.testimonial && (
                            <section>
                                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                                    {language === 'th' ? 'ความคิดเห็นจากลูกค้า' : 'Client Testimonial'}
                                </h2>
                                <div className="bg-blue-50 p-8 rounded-xl border border-blue-200">
                                    <blockquote className="text-lg text-gray-800 mb-6 italic">
                                        &ldquo;{portfolio.testimonial.text[language]}&rdquo;
                                    </blockquote>
                                    <div className="flex items-center">
                                        <div>
                                            <p className="font-semibold text-gray-900">{portfolio.testimonial.author}</p>
                                            <p className="text-gray-600">{portfolio.testimonial.position}</p>
                                            <p className="text-gray-600">{portfolio.testimonial.company}</p>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        )}
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-8">
                        {/* Project Info */}
                        <div className="bg-white p-6 rounded-xl shadow-md">
                            <h3 className="text-xl font-bold text-gray-900 mb-6">
                                {language === 'th' ? 'ข้อมูลโปรเจ็กต์' : 'Project Info'}
                            </h3>
                            <div className="space-y-4">
                                <div>
                                    <p className="text-gray-600 text-sm">{language === 'th' ? 'สถานะ' : 'Status'}</p>
                                    <p className="font-medium capitalize">{portfolio.status}</p>
                                </div>
                                <div>
                                    <p className="text-gray-600 text-sm">{language === 'th' ? 'หมวดหมู่' : 'Category'}</p>
                                    <p className="font-medium capitalize">{portfolio.category}</p>
                                </div>
                                {portfolio.liveUrl && (
                                    <div>
                                        <p className="text-gray-600 text-sm">{language === 'th' ? 'ลิงก์เว็บไซต์' : 'Live URL'}</p>
                                        <a href={portfolio.liveUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium">
                                            {language === 'th' ? 'ดูเว็บไซต์' : 'View Website'}
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Call to Action */}
                        <div className="bg-blue-600 text-white p-6 rounded-xl">
                            <h3 className="text-xl font-bold mb-4">
                                {language === 'th' ? 'สนใจโปรเจ็กต์คล้ายกัน?' : 'Interested in Similar Project?'}
                            </h3>
                            <p className="mb-6">
                                {language === 'th'
                                    ? 'ติดต่อเราเพื่อปรึกษาและขอใบเสนอราคา'
                                    : 'Contact us for consultation and quotation'
                                }
                            </p>
                            <Link href="/#contact" className="block w-full bg-white text-blue-600 text-center py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                                {language === 'th' ? 'ติดต่อเรา' : 'Contact Us'}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
