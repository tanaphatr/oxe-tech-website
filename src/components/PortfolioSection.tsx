'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslation } from '@/lib/translations';

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
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Project 1 */}
                    <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                        <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-300 flex items-center justify-center">
                            <div className="text-center p-8">
                                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-800">{getTranslation('projectManagement', language)}</h3>
                            </div>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                            <div className="p-6 text-white">
                                <h3 className="text-lg font-semibold mb-2">{getTranslation('projectManagement', language)}</h3>
                                <p className="text-sm text-gray-200">{getTranslation('projectDescription1', language)}</p>
                            </div>
                        </div>
                    </div>

                    {/* Project 2 */}
                    <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                        <div className="aspect-video bg-gradient-to-br from-green-100 to-green-300 flex items-center justify-center">
                            <div className="text-center p-8">
                                <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-800">{getTranslation('ecommerceSystem', language)}</h3>
                            </div>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                            <div className="p-6 text-white">
                                <h3 className="text-lg font-semibold mb-2">{getTranslation('ecommerceSystem', language)}</h3>
                                <p className="text-sm text-gray-200">{getTranslation('projectDescription2', language)}</p>
                            </div>
                        </div>
                    </div>

                    {/* Project 3 */}
                    <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                        <div className="aspect-video bg-gradient-to-br from-purple-100 to-purple-300 flex items-center justify-center">
                            <div className="text-center p-8">
                                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-800">{getTranslation('mobileApp', language)}</h3>
                            </div>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                            <div className="p-6 text-white">
                                <h3 className="text-lg font-semibold mb-2">{getTranslation('mobileApp', language)}</h3>
                                <p className="text-sm text-gray-200">{getTranslation('projectDescription3', language)}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Portfolio List */}
                <div className="mt-16">
                    <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
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
