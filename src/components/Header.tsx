'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslation } from '@/lib/translations';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { language, toggleLanguage } = useLanguage();

    return (
        <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-lg">O</span>
                            </div>
                            <span className="text-xl font-bold text-gray-900">OXE Tech</span>
                        </Link>
                    </div>                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        <Link href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">{getTranslation('home', language)}</Link>
                        <Link href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">{getTranslation('about', language)}</Link>
                        <Link href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">{getTranslation('services', language)}</Link>
                        <Link href="#portfolio" className="text-gray-700 hover:text-blue-600 transition-colors">{getTranslation('portfolio', language)}</Link>
                        <Link href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">{getTranslation('contact', language)}</Link>
                    </nav>

                    {/* Language Toggle & CTA Button */}
                    <div className="hidden md:flex items-center space-x-4">
                        <button
                            onClick={toggleLanguage}
                            className="flex items-center space-x-2 px-3 py-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-all duration-300"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                            </svg>
                            <span className="text-sm font-medium">{language === 'en' ? 'ไทย' : 'ENG'}</span>
                        </button>
                        <Link
                            href="#contact"
                            className="bg-gradient-to-r from-blue-600 to-blue-800 text-white min-w-[150px] text-center px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300"
                        >
                            {getTranslation('getStarted', language)}
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
                            <Link href="#home" className="block px-3 py-2 text-gray-700 hover:text-blue-600">{getTranslation('home', language)}</Link>
                            <Link href="#about" className="block px-3 py-2 text-gray-700 hover:text-blue-600">{getTranslation('about', language)}</Link>
                            <Link href="#services" className="block px-3 py-2 text-gray-700 hover:text-blue-600">{getTranslation('services', language)}</Link>
                            <Link href="#portfolio" className="block px-3 py-2 text-gray-700 hover:text-blue-600">{getTranslation('portfolio', language)}</Link>
                            <Link href="#contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600">{getTranslation('contact', language)}</Link>

                            {/* Language Toggle for Mobile */}
                            <button
                                onClick={toggleLanguage}
                                className="flex items-center space-x-2 w-full px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded-lg transition-all duration-300"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                                </svg>
                                <span className="text-sm font-medium">{language === 'en' ? 'ไทย' : 'ENG'}</span>
                            </button>

                            <Link
                                href="#contact"
                                className="block mx-3 mt-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white px-4 py-2 rounded-lg text-center"
                            >
                                {getTranslation('getStarted', language)}
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}
