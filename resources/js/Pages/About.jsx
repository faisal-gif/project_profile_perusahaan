import React from 'react';
import { Head, Link } from '@inertiajs/react';
import { ArrowLeft, Users, Target, Heart, Globe, Building, Lightbulb } from 'lucide-react';
import GuestLayout from '@/Layouts/GuestLayout';


const About = ({ visiMisi, team }) => {
    const values = [
        { icon: Lightbulb, title: 'Inovasi', description: 'Mendorong pemikiran kreatif dan solusi inovatif dalam transformasi sektor publik' },
        { icon: Heart, title: 'Integritas', description: 'Berkomitmen pada transparansi, akuntabilitas, dan etika profesional tertinggi' },
        { icon: Globe, title: 'Kolaborasi', description: 'Membangun kemitraan strategis untuk mencapai dampak yang berkelanjutan' },
        { icon: Target, title: 'Excellent', description: 'Mengutamakan kualitas dan keunggulan dalam setiap riset dan rekomendasi' },
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

                <section className="py-16 bg-base-100">
                    <div className="container mx-auto px-6 text-center">
                        <h2 className="text-3xl font-bold mb-4">Tim</h2>
                        <p className="text-base-content max-w-2xl mx-auto mb-12">
                            Para anggota berpengalaman yang memandu visi dan misi CPSI
                        </p>
                        <div className="grid md:grid-cols-3 gap-8">
                            {team.map((member, index) => (
                                <div key={index} className="bg-white rounded-xl shadow-md p-6">
                                    <div className="w-24 h-24 bg-blue-200/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Users className="h-12 w-12 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-bold">{member.name}</h3>
                                    <p className="text-primary font-medium">{member.jabatan}</p>
                                    <p className=" mt-2 whitespace-break-spaces max-w-none " >
                                        {member.biografi}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-16 bg-base-200">
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