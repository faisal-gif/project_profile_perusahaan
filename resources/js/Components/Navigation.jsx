import React, { useState } from 'react'
import { Menu, X } from 'lucide-react';
import { Link } from '@inertiajs/react';
import ApplicationLogo from './ApplicationLogo';

function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false);
        }
    };
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
            <div className="container mx-auto px-6">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center space-x-2">
                       <ApplicationLogo />
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link
                            href={'/'}
                            className="text-gray-700 hover:text-primary transition-colors duration-200"
                        >
                            Beranda
                        </Link>
                        <Link
                            href={route('about')}
                            className="text-gray-700 hover:text-primary transition-colors duration-200"
                        >
                            Tentang
                        </Link>
                        <Link
                            href={route('services')}
                            className="text-gray-700 hover:text-primary transition-colors duration-200"
                        >
                            Layanan
                        </Link>
                        <Link
                            href={route('allNews')}
                            className="text-gray-700 hover:text-primary transition-colors duration-200"
                        >
                            Berita
                        </Link>
                        <Link
                            href={route('contact')}
                            className="text-gray-700 hover:text-primary transition-colors duration-200"
                        >
                            Kontak
                        </Link>
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="btn btn-primary"
                        >
                            Hubungi Kami
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden border-t border-gray-200 py-4 animate-fade-in">
                        <div className="flex flex-col space-y-4">
                            <Link
                                href={'/'}
                                className="text-left text-gray-700 hover:text-primary transition-colors duration-200"
                            >
                                Beranda
                            </Link>
                            <Link
                                href={route('about')}
                                className="text-left text-gray-700 hover:text-primary transition-colors duration-200"
                            >
                                Tentang
                            </Link>
                            <Link
                                href={route('services')}
                                className="text-left text-gray-700 hover:text-primary transition-colors duration-200"
                            >
                                Layanan
                            </Link>
                            <Link
                                href={route('allNews')}
                                className="text-left text-gray-700 hover:text-primary transition-colors duration-200"
                            >
                                Berita
                            </Link>
                            <Link
                                href={route('contact')}
                                className="text-left text-gray-700 hover:text-primary transition-colors duration-200"
                            >
                                Kontak
                            </Link>
                            <button
                                onClick={() => scrollToSection('contact')}
                                className="btn btn-primary w-full"
                            >
                                Hubungi Kami
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </nav>

    )
}

export default Navigation