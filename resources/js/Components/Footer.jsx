import React from 'react'
import { Phone, Mail, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';


function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="bg-gray-900 text-white">
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="md:col-span-2">
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-sm">C</span>
                            </div>
                            <span className="font-bold text-xl">CPSI</span>
                        </div>
                        <p className="text-gray-300 mb-6 max-w-md">
                            Center for Public Sector Innovation - Think tank dan lembaga riset kebijakan publik yang berkomitmen menciptakan inovasi berkelanjutan dalam tata kelola pemerintahan.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-200">
                                <Linkedin size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-200">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-200">
                                <Facebook size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="#about" className="text-gray-300 hover:text-primary transition-colors duration-200">Tentang Kami</a></li>
                            <li><a href="#services" className="text-gray-300 hover:text-primary transition-colors duration-200">Layanan</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-primary transition-colors duration-200">Penelitian</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-primary transition-colors duration-200">Publikasi</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-primary transition-colors duration-200">Karir</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Kontak</h3>
                        <div className="space-y-3">
                            <div className="flex items-center text-gray-300">
                                <Phone size={16} className="mr-3" />
                                <span>+62 21 1234 5678</span>
                            </div>
                            <div className="flex items-center text-gray-300">
                                <Mail size={16} className="mr-3" />
                                <span>info@cpsi.org.id</span>
                            </div>
                            <div className="flex items-start text-gray-300">
                                <MapPin size={16} className="mr-3 mt-1" />
                                <span>Jl. Sudirman No. 123<br />Jakarta Pusat 10220</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400 text-sm">
                        © {currentYear} Center for Public Sector Innovation. All rights reserved.
                    </p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="text-gray-400 hover:text-primary text-sm transition-colors duration-200">Privacy Policy</a>
                        <a href="#" className="text-gray-400 hover:text-primary text-sm transition-colors duration-200">Terms of Service</a>
                        <a href="#" className="text-gray-400 hover:text-primary text-sm transition-colors duration-200">Sitemap</a>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer