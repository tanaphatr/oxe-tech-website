'use client';

import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslation } from '@/lib/translations';

export default function TechnologyToolsSection() {
    const { language } = useLanguage();

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{getTranslation('technologyTitle', language)}</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        {getTranslation('technologyDescription', language)}
                    </p>
                </div>
                <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-8 items-center justify-items-center">
                    {/* React */}
                    <div className="w-16 h-16 bg-white rounded-lg shadow-md flex items-center justify-center hover:shadow-lg transition-shadow duration-300 p-2">
                        <Image
                            src="/tool/React.png"
                            alt="React"
                            width={48}
                            height={48}
                            className="object-contain"
                        />
                    </div>

                    {/* Next.js */}
                    <div className="w-16 h-16 bg-white rounded-lg shadow-md flex items-center justify-center hover:shadow-lg transition-shadow duration-300 p-2">
                        <Image
                            src="/tool/nextjs.webp"
                            alt="Next.js"
                            width={48}
                            height={48}
                            className="object-contain"
                        />
                    </div>

                    {/* JavaScript */}
                    <div className="w-16 h-16 bg-white rounded-lg shadow-md flex items-center justify-center hover:shadow-lg transition-shadow duration-300 p-2">
                        <Image
                            src="/tool/javascript.webp"
                            alt="JavaScript"
                            width={48}
                            height={48}
                            className="object-contain"
                        />
                    </div>

                    {/* Node.js */}
                    <div className="w-16 h-16 bg-white rounded-lg shadow-md flex items-center justify-center hover:shadow-lg transition-shadow duration-300 p-2">
                        <Image
                            src="/tool/nodejs.webp"
                            alt="Node.js"
                            width={48}
                            height={48}
                            className="object-contain"
                        />
                    </div>

                    {/* Python */}
                    <div className="w-16 h-16 bg-white rounded-lg shadow-md flex items-center justify-center hover:shadow-lg transition-shadow duration-300 p-2">
                        <Image
                            src="/tool/Python.png"
                            alt="Python"
                            width={48}
                            height={48}
                            className="object-contain"
                        />
                    </div>

                    {/* Angular */}
                    <div className="w-16 h-16 bg-white rounded-lg shadow-md flex items-center justify-center hover:shadow-lg transition-shadow duration-300 p-2">
                        <Image
                            src="/tool/Angular.png"
                            alt="Angular"
                            width={48}
                            height={48}
                            className="object-contain"
                        />
                    </div>

                    {/* PHP */}
                    <div className="w-16 h-16 bg-white rounded-lg shadow-md flex items-center justify-center hover:shadow-lg transition-shadow duration-300 p-2">
                        <Image
                            src="/tool/php_.png"
                            alt="PHP"
                            width={48}
                            height={48}
                            className="object-contain"
                        />
                    </div>

                    {/* Laravel */}
                    <div className="w-16 h-16 bg-white rounded-lg shadow-md flex items-center justify-center hover:shadow-lg transition-shadow duration-300 p-2">
                        <Image
                            src="/tool/Laravel_.png"
                            alt="Laravel"
                            width={48}
                            height={48}
                            className="object-contain"
                        />
                    </div>

                    {/* Flutter */}
                    <div className="w-16 h-16 bg-white rounded-lg shadow-md flex items-center justify-center hover:shadow-lg transition-shadow duration-300 p-2">
                        <Image
                            src="/tool/Flutter_.png"
                            alt="Flutter"
                            width={48}
                            height={48}
                            className="object-contain"
                        />
                    </div>

                    {/* React Native */}
                    <div className="w-16 h-16 bg-white rounded-lg shadow-md flex items-center justify-center hover:shadow-lg transition-shadow duration-300 p-2">
                        <Image
                            src="/tool/React-native.png"
                            alt="React Native"
                            width={48}
                            height={48}
                            className="object-contain"
                        />
                    </div>

                    {/* Android */}
                    <div className="w-16 h-16 bg-white rounded-lg shadow-md flex items-center justify-center hover:shadow-lg transition-shadow duration-300 p-2">
                        <Image
                            src="/tool/Android.png"
                            alt="Android"
                            width={48}
                            height={48}
                            className="object-contain"
                        />
                    </div>

                    {/* iOS */}
                    <div className="w-16 h-16 bg-white rounded-lg shadow-md flex items-center justify-center hover:shadow-lg transition-shadow duration-300 p-2">
                        <Image
                            src="/tool/iOS.png"
                            alt="iOS"
                            width={48}
                            height={48}
                            className="object-contain"
                        />
                    </div>

                    {/* Docker */}
                    <div className="w-16 h-16 bg-white rounded-lg shadow-md flex items-center justify-center hover:shadow-lg transition-shadow duration-300 p-2">
                        <Image
                            src="/tool/Docker.png"
                            alt="Docker"
                            width={48}
                            height={48}
                            className="object-contain"
                        />
                    </div>

                    {/* Kubernetes */}
                    <div className="w-16 h-16 bg-white rounded-lg shadow-md flex items-center justify-center hover:shadow-lg transition-shadow duration-300 p-2">
                        <Image
                            src="/tool/kubernetes.webp"
                            alt="Kubernetes"
                            width={48}
                            height={48}
                            className="object-contain"
                        />
                    </div>

                    {/* PostgreSQL */}
                    <div className="w-16 h-16 bg-white rounded-lg shadow-md flex items-center justify-center hover:shadow-lg transition-shadow duration-300 p-2">
                        <Image
                            src="/tool/PostgreSQL.webp"
                            alt="PostgreSQL"
                            width={48}
                            height={48}
                            className="object-contain"
                        />
                    </div>                    {/* Go */}
                    <div className="w-16 h-16 bg-white rounded-lg shadow-md flex items-center justify-center hover:shadow-lg transition-shadow duration-300 p-2">
                        <Image
                            src="/tool/GO_.png"
                            alt="Go"
                            width={48}
                            height={48}
                            className="object-contain"
                        />
                    </div>

                    {/* Java */}
                    <div className="w-16 h-16 bg-white rounded-lg shadow-md flex items-center justify-center hover:shadow-lg transition-shadow duration-300 p-2">
                        <Image
                            src="/tool/Java.png"
                            alt="Java"
                            width={48}
                            height={48}
                            className="object-contain"
                        />
                    </div>

                    {/* C# */}
                    <div className="w-16 h-16 bg-white rounded-lg shadow-md flex items-center justify-center hover:shadow-lg transition-shadow duration-300 p-2">
                        <Image
                            src="/tool/C_.png"
                            alt="C#"
                            width={48}
                            height={48}
                            className="object-contain"
                        />
                    </div>

                    {/* C */}
                    <div className="w-16 h-16 bg-white rounded-lg shadow-md flex items-center justify-center hover:shadow-lg transition-shadow duration-300 p-2">
                        <Image
                            src="/tool/C.png"
                            alt="C"
                            width={48}
                            height={48}
                            className="object-contain"
                        />
                    </div>

                    {/* HTML/CSS */}
                    <div className="w-16 h-16 bg-white rounded-lg shadow-md flex items-center justify-center hover:shadow-lg transition-shadow duration-300 p-2">
                        <Image
                            src="/tool/Html Css.png"
                            alt="HTML/CSS"
                            width={48}
                            height={48}
                            className="object-contain"
                        />
                    </div>

                    {/* NestJS */}
                    <div className="w-16 h-16 bg-white rounded-lg shadow-md flex items-center justify-center hover:shadow-lg transition-shadow duration-300 p-2">
                        <Image
                            src="/tool/Nest.png"
                            alt="NestJS"
                            width={48}
                            height={48}
                            className="object-contain"
                        />
                    </div>

                    {/* Strapi */}
                    <div className="w-16 h-16 bg-white rounded-lg shadow-md flex items-center justify-center hover:shadow-lg transition-shadow duration-300 p-2">
                        <Image
                            src="/tool/Strapi.png"
                            alt="Strapi"
                            width={48}
                            height={48}
                            className="object-contain"
                        />
                    </div>

                    {/* Elasticsearch */}
                    <div className="w-16 h-16 bg-white rounded-lg shadow-md flex items-center justify-center hover:shadow-lg transition-shadow duration-300 p-2">
                        <Image
                            src="/tool/elasticsearch.webp"
                            alt="Elasticsearch"
                            width={48}
                            height={48}
                            className="object-contain"
                        />
                    </div>

                    {/* ERPNext */}
                    <div className="w-16 h-16 bg-white rounded-lg shadow-md flex items-center justify-center hover:shadow-lg transition-shadow duration-300 p-2">
                        <Image
                            src="/tool/ERPNext.png"
                            alt="ERPNext"
                            width={48}
                            height={48}
                            className="object-contain"
                        />
                    </div>

                    {/* Frappe */}
                    <div className="w-16 h-16 bg-white rounded-lg shadow-md flex items-center justify-center hover:shadow-lg transition-shadow duration-300 p-2">
                        <Image
                            src="/tool/Frappe_.png"
                            alt="Frappe"
                            width={48}
                            height={48}
                            className="object-contain"
                        />
                    </div>

                    {/* Gopher */}
                    <div className="w-16 h-16 bg-white rounded-lg shadow-md flex items-center justify-center hover:shadow-lg transition-shadow duration-300 p-2">
                        <Image
                            src="/tool/gopher.png"
                            alt="Go Gopher"
                            width={48}
                            height={48}
                            className="object-contain"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
