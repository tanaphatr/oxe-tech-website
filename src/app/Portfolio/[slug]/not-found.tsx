'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function NotFound() {
    const { language } = useLanguage();

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
            <div className="max-w-md mx-auto text-center px-4">
                <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-8">
                    <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                </div>

                <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>

                <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                    {language === 'th' ? 'ไม่พบผลงานที่ค้นหา' : 'Portfolio Not Found'}
                </h2>

                <p className="text-gray-600 mb-8">
                    {language === 'th'
                        ? 'ขออภัย เราไม่พบผลงานที่คุณกำลังมองหา กรุณาตรวจสอบ URL หรือกลับไปยังหน้าผลงานหลัก'
                        : 'Sorry, we couldn\'t find the portfolio project you\'re looking for. Please check the URL or return to the main portfolio page.'
                    }
                </p>

                <div className="space-y-4">
                    <Link
                        href="/Portfolio"
                        className="block w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                    >
                        {language === 'th' ? 'ดูผลงานทั้งหมด' : 'View All Portfolio'}
                    </Link>

                    <Link
                        href="/"
                        className="block w-full bg-gray-200 text-gray-800 py-3 px-6 rounded-lg font-medium hover:bg-gray-300 transition-colors"
                    >
                        {language === 'th' ? 'กลับหน้าแรก' : 'Back to Home'}
                    </Link>
                </div>
            </div>
        </div>
    );
}
