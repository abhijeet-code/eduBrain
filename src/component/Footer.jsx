import React, { useState } from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    const [email, setEmail] = useState('');

    const handleSubscribe = (e) => {
        e.preventDefault();
        // Handle newsletter subscription
        console.log('Newsletter subscription:', email);
        setEmail('');
    };

    return (
        <footer className="bg-white text-gray-600 border-t border-gray-200 font-roboto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8">
                    {/* Brand Section */}
                    <div className="lg:col-span-1 space-y-6">
                        <div className="flex items-center">
                            <div className="w-12 h-12 flex items-center justify-center mr-3 rounded-xl bg-[#9411a8]/10">
                                <img src="/icon.png" alt="EduBraining" className="w-8 h-8 object-contain" />
                            </div>
                            <span className="text-xl font-bold text-gray-900 font-montserrat">EduBraining</span>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Empowering learners through accessible, modern, and industry-ready education. Join thousands of students shaping their future.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-[#9411a8] transition-colors">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-[#9411a8] transition-colors">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-[#9411a8] transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-[#9411a8] transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Explore & Support Section */}
                    <div className="lg:col-span-2 grid grid-cols-2 gap-8 sm:gap-12">
                        {/* Explore Section */}
                        <div>
                            <h4 className="text-gray-900 font-bold mb-6 font-montserrat">Explore</h4>
                            <ul className="space-y-3">
                                {['About Us', 'Courses', 'Process', 'Certification', 'Refund Policy'].map((item) => (
                                    <li key={item}>
                                        <a href="#" className="text-gray-600 hover:text-[#9411a8] transition-colors text-sm">
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* Support Section */}
                        <div>
                            <h4 className="text-gray-900 font-bold mb-6 font-montserrat">Support</h4>
                            <ul className="space-y-3">
                                {['FAQs', 'Privacy Policy', 'Contact Us', 'Terms of Service', 'Careers'].map((item) => (
                                    <li key={item}>
                                        <a href="#" className="text-gray-600 hover:text-[#9411a8] transition-colors text-sm">
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Newsletter Section */}
                    <div className="lg:col-span-1">
                        <h4 className="text-gray-900 font-bold mb-6 font-montserrat">Join our Newsletter</h4>
                        <form onSubmit={handleSubscribe} className="space-y-3">
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Your email address"
                                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#9411a8] focus:ring-1 focus:ring-[#9411a8] text-gray-900 placeholder-gray-400 text-sm transition-all"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-[#9411a8] hover:bg-[#7a0c8b] text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg text-sm"
                            >
                                Subscribe
                            </button>
                        </form>
                        <p className="text-gray-500 text-xs mt-4 leading-relaxed">
                            No spam. Only helpful updates and learning resources.
                        </p>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-12 pt-8 border-t border-gray-100">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div className="text-gray-500 text-sm">
                            © 2025 EduBraining. All rights reserved.
                        </div>
                        <div className="flex space-x-6 text-sm text-gray-500">
                            <a href="#" className="hover:text-[#9411a8] transition-colors">Privacy</a>
                            <a href="#" className="hover:text-[#9411a8] transition-colors">Terms</a>
                            <a href="#" className="hover:text-[#9411a8] transition-colors">Cookies</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;