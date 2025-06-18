'use client';

import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslation } from '@/lib/translations';

export default function PartnersSection() {
    const { language } = useLanguage();

    const partners = [
        { src: "/partner/true.png", alt: "TRUE" },
        { src: "/partner/GPO.png", alt: "GPO" },
        { src: "/partner/EnCo.png", alt: "EnCo" },
        { src: "/partner/ascend.png", alt: "Ascend" },
        { src: "/partner/Mr FOX.png", alt: "Mr FOX" },
        { src: "/partner/FUSIONWARE.png", alt: "FUSIONWARE" },
        { src: "/partner/SMS1CLICK.png", alt: "SMS1CLICK" },
        { src: "/partner/CompuPower.png", alt: "CompuPower" },
        { src: "/partner/GOventure.png", alt: "GOventure" },
        { src: "/partner/prime.png", alt: "Prime" },
        { src: "/partner/NEST.png", alt: "NEST" },
        { src: "/partner/VPROtech.png", alt: "VPROtech" },
        { src: "/partner/Amaze.png", alt: "Amaze" },
    ];    // Split partners into chunks for responsive rows
    const chunkedPartners = [];
    for (let i = 0; i < partners.length; i += 5) {
        chunkedPartners.push(partners.slice(i, i + 5));
    }

    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{getTranslation('partnersTitle', language)}</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        {getTranslation('partnersDescription', language)}
                    </p>
                </div>                {/* Mobile/Tablet: 3 rows grid */}
                <div className="block lg:hidden px-4 sm:px-6">
                    <div className="space-y-6">
                        {chunkedPartners.map((row, rowIndex) => (
                            <div key={`row-${rowIndex}`} className="flex justify-center space-x-2 sm:space-x-4 animate-fade-in" style={{ animationDelay: `${rowIndex * 0.2}s` }}>
                                {row.map((partner, index) => (
                                    <div
                                        key={`mobile-${rowIndex}-${index}`}
                                        className="flex-shrink-0 w-16 h-12 sm:w-20 sm:h-16 md:w-24 md:h-18 bg-white rounded-lg shadow-md flex items-center justify-center p-1.5 sm:p-2 hover:shadow-lg transition-shadow duration-300"
                                    >
                                        <Image
                                            src={partner.src}
                                            alt={partner.alt}
                                            width={60}
                                            height={40}
                                            className="object-contain max-w-full max-h-full"
                                        />
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Desktop: Horizontal scrolling animation */}
                <div className="hidden lg:block">
                    <div className="relative overflow-hidden">
                        <div className="flex animate-infinite-scroll space-x-8">
                            {/* Multiple sets for truly seamless infinite loop */}
                            {[...Array(4)].flatMap((_, setIndex) =>
                                partners.map((partner, index) => (
                                    <div
                                        key={`set-${setIndex}-${index}`}
                                        className="flex-shrink-0 w-32 h-20 bg-white rounded-lg shadow-md flex items-center justify-center p-4 hover:shadow-lg transition-shadow duration-300"
                                    >
                                        <Image
                                            src={partner.src}
                                            alt={partner.alt}
                                            width={120}
                                            height={60}
                                            className="object-contain max-w-full max-h-full"
                                        />
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
