import React from 'react'
import { ChevronRight, Target } from 'lucide-react';
import ApplicationLogo from './ApplicationLogo';
import ApplicationLightLogo from './ApplicationLightLogo';

function Hero({ hero }) {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="hero" className="pt-16 bg-gradient-to-br from-blue-50 to-green-50 min-h-screen flex items-center">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <div className="space-y-8 animate-slide-in-left">
                        <div className="space-y-4">
                            <h1 className="text-4xl md:text-7xl font-bold text-gray-900 leading-tight">
                                {(() => {
                                    const words = hero.title.split(' ');
                                    return (
                                        <>
                                            {words.slice(0, 2).join(' ')}{' '}
                                            <span className="text-primary">{words[2] || ''}</span>{' '}
                                            <span className="text-accent">{words[3] || ''}</span>
                                        </>
                                    );
                                })()}
                            </h1>
                            <p className="text-xl text-gray-600 leading-relaxed">
                                {hero.description}
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <button
                                onClick={() => scrollToSection('about')}
                                className="btn btn-lg btn-primary"
                            >
                                Pelajari Selengkapnya
                                <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button
                                onClick={() => scrollToSection('contact')}
                                className="btn btn-lg btn-outline btn-primary"
                            >
                                Hubungi Kami
                            </button>
                        </div>

                        {/* Stats */}
                        {/* <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-primary">50+</div>
                                <div className="text-sm text-gray-600">Research Projects</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-primary">100+</div>
                                <div className="text-sm text-gray-600">Training Programs</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-primary">25+</div>
                                <div className="text-sm text-gray-600">Partner Institutions</div>
                            </div>
                        </div> */}
                    </div>

                    {/* Visual */}
                    <div className="relative animate-fade-in">
                        <div className="relative">
                            <img src={`/storage/${hero.image}`} className='w-full h-96 rounded-3xl flex items-center justify-center animate-float object-cover' alt="" />
                            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent rounded-full flex items-center justify-center shadow-lg">
                                <span className="text-white font-bold text-xl"><ApplicationLightLogo /></span>
                            </div>
                            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg">
                                <Target size={24} className="text-white" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Hero