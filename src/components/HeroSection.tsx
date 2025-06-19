'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslation } from '@/lib/translations';

export default function HeroSection() {
    const [isVisible, setIsVisible] = useState(false);
    const { language } = useLanguage();

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section id="home" className="pt-16 pb-20 bg-gradient-to-br from-blue-50 via-white to-sky-50 min-h-screen flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                            {getTranslation('heroTitle', language)}
                        </h1>
                        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">{getTranslation('heroTitleAccent', language)}</span>
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                            {getTranslation('heroDescription', language)}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                href="#about"
                                className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center"
                            >
                                {getTranslation('exploreServices', language)}
                            </Link>
                            <Link
                                href="#portfolio"
                                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300 text-center"
                            >
                                {getTranslation('viewPortfolio', language)}
                            </Link>
                        </div>
                    </div>

                    <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <div className="relative">
                            <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                                <div className="bg-white rounded-xl p-6 transform -rotate-3">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg p-4 text-center">
                                            <div className="text-2xl font-bold text-blue-600">10+</div>
                                            <div className="text-sm text-blue-800">{getTranslation('projects', language)}</div>
                                        </div>                                        <div className="bg-gradient-to-br from-sky-100 to-sky-200 rounded-lg p-4 text-center">
                                            <div className="text-2xl font-bold text-sky-600">1</div>
                                            <div className="text-sm text-sky-800">{getTranslation('years', language)}</div>
                                        </div>
                                        <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-lg p-4 text-center">
                                            <div className="text-2xl font-bold text-green-600">100%</div>
                                            <div className="text-sm text-green-800">{getTranslation('success', language)}</div>
                                        </div>
                                        <div className="bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg p-4 text-center">
                                            <div className="text-2xl font-bold text-orange-600">24/7</div>
                                            <div className="text-sm text-orange-800">{getTranslation('support', language)}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
