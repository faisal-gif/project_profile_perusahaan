// Versi JSX menggunakan elemen DaisyUI dasar, tanpa Card/Button bawaan

import React from 'react';
import { Head, Link } from '@inertiajs/react';
import * as Icons from 'lucide-react';
import GuestLayout from '@/Layouts/GuestLayout';


const Services = ({ services }) => {
    

    const specialPrograms = [
        {
            title: "Digital Government Accelerator",
            description: "Program intensif 6 bulan untuk mempercepat transformasi digital pemerintah daerah",
            duration: "6 bulan",
            participants: "15-20 Pemda",
            benefits: [
                "Digital readiness assessment",
                "Master plan pengembangan",
                "Quick wins implementation",
                "Continuous mentoring"
            ]
        },
        {
            title: "Policy Analysis Bootcamp",
            description: "Pelatihan intensif analisis kebijakan publik untuk aparatur sipil negara",
            duration: "2 minggu",
            participants: "25-30 peserta",
            benefits: [
                "Methodology training",
                "Hands-on practice",
                "Expert mentoring",
                "Certification program"
            ]
        },
        {
            title: "Innovation Lab",
            description: "Laboratorium inovasi untuk mengembangkan solusi kreatif masalah sektor publik",
            duration: "3 bulan",
            participants: "10-15 tim",
            benefits: [
                "Design thinking workshop",
                "Prototype development",
                "User testing",
                "Implementation support"
            ]
        }
    ];

    const process = [
        {
            step: "1",
            title: "Konsultasi Awal",
            description: "Diskusi mendalam untuk memahami kebutuhan dan tantangan spesifik klien"
        },
        {
            step: "2",
            title: "Proposal & Planning",
            description: "Penyusunan proposal detail dengan timeline, metodologi, dan deliverables yang jelas"
        },
        {
            step: "3",
            title: "Pelaksanaan",
            description: "Implementasi layanan dengan monitoring berkala dan komunikasi intensif"
        },
        {
            step: "4",
            title: "Evaluasi & Follow-up",
            description: "Evaluasi hasil dan dukungan berkelanjutan untuk memastikan sustainabilitas"
        }
    ];

    return (
        <>
            <Head title="Layanan Kami" />
            <GuestLayout>

                <section className="py-16 my-16 bg-base-200 ">
                    <div className="container mx-auto px-6">
                        <div className="text-center">
                            <h1 className="text-4xl font-bold mb-4">Layanan Kami</h1>
                            <p className="text-xl text-base-content max-w-3xl mx-auto">
                                Solusi komprehensif untuk transformasi dan inovasi sektor publik Indonesia.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="py-10  px-6 lg:px-20">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold mb-2">Layanan Utama</h2>
                        <p className="text-gray-600">Rangkaian lengkap layanan untuk mendukung inovasi sektor publik.</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((service, index) => (
                            <div key={index} className="bg-base-100 rounded-xl shadow-md p-6 hover:shadow-lg transition">
                                <div className="w-12 h-12 bg-blue-600/10 rounded-full flex items-center justify-center mb-4 text-primary">
                                    {Icons[service.icon] ? React.createElement(Icons[service.icon], { size: 23 }) : null}
                                </div>
                                <h3 className="font-bold text-lg mb-2">{service.name}</h3>
                                <div className=" prose prose-sm max-w-none prose-li:marker:text-cyan-800/40" dangerouslySetInnerHTML={{ __html: service.description }} />

                            </div>
                        ))}
                    </div>
                </section>

                <section className="py-16 px-6 lg:px-20 bg-base-200">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold mb-2">Program Khusus</h2>
                        <p className="text-gray-600">Dirancang untuk dampak maksimal dalam waktu terstruktur.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {specialPrograms.map((program, index) => (
                            <div key={index} className="bg-white shadow-md rounded-lg p-6">
                                <h3 className="font-bold text-lg mb-2">{program.title}</h3>
                                <p className="text-sm text-gray-600 mb-4">{program.description}</p>
                                <div className="text-sm mb-2">Durasi: <strong>{program.duration}</strong></div>
                                <div className="text-sm mb-2">Peserta: <strong>{program.participants}</strong></div>
                                <ul className="mt-4 space-y-1 text-sm">
                                    {program.benefits.map((benefit, idx) => (
                                        <li key={idx} className="flex gap-2 items-center">
                                            <Icons.CheckCircle className="w-4 h-4 text-primary" /> {benefit}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="py-16 px-6 lg:px-20">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-2">Proses Kerja Sama</h2>
                        <p className="text-gray-600">Langkah sistematis menjamin kualitas layanan kami.</p>
                    </div>
                    <div className="grid md:grid-cols-4 gap-8">
                        {process.map((item, index) => (
                            <div key={index} className="text-center">
                                <div className="w-16 h-16 bg-primary text-white font-bold rounded-full flex items-center justify-center mx-auto mb-4">
                                    {item.step}
                                </div>
                                <h4 className="font-semibold text-lg mb-1">{item.title}</h4>
                                <p className="text-sm text-gray-600">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

            </GuestLayout>
        </>
    );
};

export default Services;
