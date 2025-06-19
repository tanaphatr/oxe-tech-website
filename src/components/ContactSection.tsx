'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslation } from '@/lib/translations';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactSection() {
    const { language } = useLanguage();
    const formRef = useRef<HTMLFormElement>(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    }); const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            // EmailJS configuration
            const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_oxe_tech';
            const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_oxe_contact';
            const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

            if (formRef.current) {
                const result = await emailjs.sendForm(
                    serviceId,
                    templateId,
                    formRef.current,
                    publicKey
                );

                if (result.status === 200) {
                    setSubmitStatus('success');
                    setFormData({ name: '', email: '', subject: '', message: '' });
                } else {
                    setSubmitStatus('error');
                }
            }
        } catch (error) {
            console.error('Error sending email:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 to-blue-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{getTranslation('contactTitle', language)}</h2>
                    <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                        {getTranslation('contactDescription', language)}
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-6">{getTranslation('contactInfo', language)}</h3>
                        <div className="space-y-4 text-blue-100">
                            <div className="flex items-center">
                                <svg className="w-6 h-6 mr-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                </svg>
                                <span>34 Chaloem Phrakiat Rama 9 Soi 67, Khwaeng Prawet, Khet Prawet, Krung Thep Maha Nakhon 10250</span>
                            </div>
                            <div className="flex items-center">
                                <svg className="w-6 h-6 mr-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                </svg>
                                <span>Tel : 096-164-2625, 065-812-8805</span>
                            </div>
                            <div className="flex items-center">
                                <svg className="w-6 h-6 mr-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                </svg>
                                <span>Email : office@oxetechthailand.com</span>
                            </div>
                        </div>
                    </div>                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                            {submitStatus === 'success' && (
                                <div className="bg-green-500/20 border border-green-400 text-green-100 px-4 py-3 rounded-lg">
                                    {language === 'th' ? 'ส่งข้อความสำเร็จแล้ว!' : 'Message sent successfully!'}
                                </div>
                            )}
                            {submitStatus === 'error' && (
                                <div className="bg-red-500/20 border border-red-400 text-red-100 px-4 py-3 rounded-lg">
                                    {language === 'th' ? 'เกิดข้อผิดพลาดในการส่งข้อความ กรุณาลองใหม่อีกครั้ง' : 'Error sending message. Please try again.'}
                                </div>
                            )}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    name="from_name"
                                    value={formData.name}
                                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                                    placeholder={getTranslation('yourName', language)}
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-blue-100 focus:outline-none focus:ring-2 focus:ring-white/50"
                                />
                                <input
                                    type="email"
                                    name="from_email"
                                    value={formData.email}
                                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                                    placeholder={getTranslation('yourEmail', language)}
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-blue-100 focus:outline-none focus:ring-2 focus:ring-white/50"
                                />
                            </div>
                            <input
                                type="text"
                                name="subject"
                                value={formData.subject}
                                onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                                placeholder={getTranslation('subject', language)}
                                required
                                className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-blue-100 focus:outline-none focus:ring-2 focus:ring-white/50"
                            />
                            <textarea
                                rows={4}
                                name="message"
                                value={formData.message}
                                onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                                placeholder={getTranslation('yourMessage', language)}
                                required
                                className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-blue-100 focus:outline-none focus:ring-2 focus:ring-white/50"
                            ></textarea>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting
                                    ? (language === 'th' ? 'กำลังส่ง...' : 'Sending...')
                                    : getTranslation('sendMessage', language)
                                }
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
