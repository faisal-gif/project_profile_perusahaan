import React from 'react';
import { Head, Link } from '@inertiajs/react';
import { ArrowLeft, Users, Target, Heart, Globe, Building, Lightbulb } from 'lucide-react';
import GuestLayout from '@/Layouts/GuestLayout';


const About = () => {
    const values = [
        { icon: Lightbulb, title: 'Inovasi', description: 'Mendorong pemikiran kreatif dan solusi inovatif dalam transformasi sektor publik' },
        { icon: Heart, title: 'Integritas', description: 'Berkomitmen pada transparansi, akuntabilitas, dan etika profesional tertinggi' },
        { icon: Globe, title: 'Kolaborasi', description: 'Membangun kemitraan strategis untuk mencapai dampak yang berkelanjutan' },
        { icon: Target, title: 'Excellent', description: 'Mengutamakan kualitas dan keunggulan dalam setiap riset dan rekomendasi' },
    ];

    const team = [
        { name: 'Dr. Sarah Wijaya', position: 'Direktur Eksekutif', education: 'Ph.D. Public Policy, Harvard University', experience: '15+ tahun pengalaman di sektor publik dan think tank internasional' },
        { name: 'Prof. Ahmad Santoso', position: 'Direktur Riset', education: 'Ph.D. Economics, London School of Economics', experience: '20+ tahun pengalaman dalam analisis kebijakan ekonomi dan fiskal' },
        { name: 'Dr. Maya Indrawati', position: 'Kepala Program Digital Government', education: 'Ph.D. Information Systems, MIT', experience: '12+ tahun pengalaman dalam transformasi digital pemerintahan' },
    ];

    return (
        <>
            <Head title="Tentang Kami" />
            <GuestLayout>
                
                    <section className="py-16 my-16 bg-base-200">
                        <div className="container mx-auto px-6">
                            <div className="text-center">
                                <h1 className="text-4xl font-bold mb-4">Tentang CPSI</h1>
                                <p className="text-xl text-base-content max-w-3xl mx-auto">
                                    Center for Public Sector Innovation - Mendorong transformasi dan inovasi di sektor publik Indonesia melalui riset, advokasi, dan kemitraan strategis
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="py-16">
                        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 max-w-5xl">
                            <div className="bg-white rounded-xl shadow-md p-6 text-center">
                                <div className="w-16 h-16 bg-blue-200/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Target className="h-8 w-8 text-primary" />
                                </div>
                                <h2 className="text-2xl font-bold mb-2">Visi</h2>
                                <p className="text-base-content">
                                    Menjadi think tank terdepan di Indonesia yang mendorong inovasi dan transformasi sektor publik untuk menciptakan pemerintahan yang lebih efektif, transparan, dan responsif terhadap kebutuhan masyarakat.
                                </p>
                            </div>

                            <div className="bg-white rounded-xl shadow-md p-6 text-center">
                                <div className="w-16 h-16 bg-blue-200/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Building className="h-8 w-8 text-primary" />
                                </div>
                                <h2 className="text-2xl font-bold mb-2">Misi</h2>
                                <ul className="text-base-content text-left space-y-2">
                                    <li>• Melakukan riset berkualitas tinggi dalam kebijakan publik</li>
                                    <li>• Memberikan rekomendasi strategis berbasis data dan evidence</li>
                                    <li>• Memfasilitasi dialog antara pemerintah, akademisi, dan masyarakat</li>
                                    <li>• Mengembangkan kapasitas aparatur sipil negara</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section className="py-16 bg-base-200">
                        <div className="container mx-auto px-6 text-center">
                            <h2 className="text-3xl font-bold mb-4">Nilai-Nilai Kami</h2>
                            <p className="text-base-content max-w-2xl mx-auto mb-12">
                                Nilai-nilai fundamental yang menjadi landasan dalam setiap kegiatan dan pengambilan keputusan di CPSI
                            </p>
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                                {values.map((value, index) => (
                                    <div key={index} className="bg-white rounded-xl p-6 shadow-md text-center">
                                        <div className="w-16 h-16 bg-blue-200/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <value.icon className="h-8 w-8 text-primary" />
                                        </div>
                                        <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                                        <p className="text-base-content">{value.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    <section className="py-16">
                        <div className="container mx-auto px-6 max-w-4xl">
                            <h2 className="text-3xl font-bold text-center mb-12">Sejarah CPSI</h2>
                            <div className="space-y-8">
                                {[2019, 2020, 2022, 2024].map((year, i) => (
                                    <div key={year} className="flex gap-6 items-start">
                                        <div className="w-20 h-20 bg-blue-200/20 rounded-full flex items-center justify-center">
                                            <span className="text-primary font-bold text-lg">{year}</span>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold mb-2">
                                                {year === 2019 ? 'Pendirian CPSI' : year === 2020 ? 'Program Digital Government' : year === 2022 ? 'Ekspansi Kemitraan' : 'Pencapaian Prestasi'}
                                            </h3>
                                            <p className="text-base-content">
                                                {year === 2019 && 'CPSI didirikan oleh sekelompok akademisi...'}
                                                {year === 2020 && 'Meluncurkan program Digital Government...'}
                                                {year === 2022 && 'Menjalin kemitraan strategis dengan universitas...'}
                                                {year === 2024 && 'Meraih penghargaan Think Tank Terbaik 2024...'}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    <section className="py-16 bg-base-200">
                        <div className="container mx-auto px-6 text-center">
                            <h2 className="text-3xl font-bold mb-4">Tim Kepemimpinan</h2>
                            <p className="text-base-content max-w-2xl mx-auto mb-12">
                                Para pemimpin berpengalaman yang memandu visi dan misi CPSI
                            </p>
                            <div className="grid md:grid-cols-3 gap-8">
                                {team.map((member, index) => (
                                    <div key={index} className="bg-white rounded-xl shadow-md p-6">
                                        <div className="w-24 h-24 bg-blue-200/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <Users className="h-12 w-12 text-primary" />
                                        </div>
                                        <h3 className="text-xl font-bold">{member.name}</h3>
                                        <p className="text-primary font-medium">{member.position}</p>
                                        <p className="text-base-content text-sm mt-2">{member.education}</p>
                                        <p className="text-base-content text-sm">{member.experience}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    <section className="py-16">
                        <div className="container mx-auto px-6 text-center">
                            <h2 className="text-3xl font-bold mb-4">Mari Berkolaborasi</h2>
                            <p className="text-xl text-base-content mb-8 max-w-2xl mx-auto">
                                Bergabunglah dengan kami dalam mewujudkan transformasi sektor publik Indonesia yang lebih baik
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link to="/contact" className="btn btn-primary">Hubungi Kami</Link>
                                <Link to="/services" className="btn btn-outline">Lihat Layanan</Link>
                            </div>
                        </div>
                    </section>
              
            </GuestLayout>
        </>
    );
};

export default About;