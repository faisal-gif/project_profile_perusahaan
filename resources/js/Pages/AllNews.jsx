import React from 'react';
import { Head, Link } from '@inertiajs/react';
import { Calendar, ArrowLeft, Briefcase, Users, Award, Globe, Building, Trophy, Calendar1, Newspaper } from 'lucide-react';
import GuestLayout from '@/Layouts/GuestLayout';

function AllNews({ news, categorys }) {
    console.log(news);


    const getCategoryColor = (category) => {
        switch (category) {
            case 'Karir':
                return 'bg-blue-100 text-blue-800';
            case 'Event':
                return 'bg-green-100 text-green-800';
            case 'Penghargaan':
                return 'bg-yellow-100 text-yellow-800';
            case 'Partnership':
                return 'bg-purple-100 text-purple-800';
            case 'Project':
                return 'bg-orange-100 text-orange-800';
            case 'Publikasi':
                return 'bg-indigo-100 text-indigo-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };


    return (
        <>
            <Head title="All News" />
            <GuestLayout>
                <main className="pt-20 lg:px-16">
                    <section className="py-16 bg-base-200">
                        <div className="container mx-auto px-6">
                            <div className="text-center">
                                <h1 className="text-4xl font-bold mb-4">Semua Berita & Update</h1>
                                <p className="text-xl text-gray-500 max-w-3xl mx-auto">
                                    Ikuti perkembangan terbaru CPSI, mulai dari lowongan kerja, kegiatan organisasi, partnerships, hingga pencapaian dan penghargaan yang kami raih
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="py-16">
                        <div className="container mx-auto px-6">
                            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                                <div className="lg:col-span-3">
                                    <div className="grid md:grid-cols-2 gap-8">
                                        {news.map((item) => (
                                            <div key={item.id} className="rounded-lg overflow-hidden shadow hover:shadow-xl transition">
                                                <div className="relative">
                                                    <img src={`/storage/${item.image}`} alt={item.title} className="w-full h-48 object-cover" />
                                                    <div className="absolute top-4 left-4">
                                                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(item.category.name)}`}>
                                                            {item.category.name}
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="p-4">
                                                    <div className="flex items-center text-sm text-gray-500 mb-2">
                                                        <Calendar className="h-4 w-4 mr-2" /> {item.date}
                                                    </div>
                                                    <h2 className="text-lg font-bold mb-2 hover:text-primary cursor-pointer">{item.title}</h2>
                                                    <p className="text-sm text-gray-600 mb-4 line-clamp-4">{item.description}</p>
                                                    <Link href={`/news/${item.id}`} className="text-primary inline-flex items-center">
                                                        Baca Selengkapnya

                                                    </Link>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="lg:col-span-1 space-y-6">
                                    <div className="bg-base-100 border rounded-lg p-6">
                                        <h3 className="text-lg font-semibold mb-4">Kategori</h3>
                                        <div className="space-y-2">
                                            {categorys.map((category) => {  
                                                return (
                                                    <Link
                                                        key={category.id}
                                                        href={category.name !== 'Semua' ? `/allNews?category_id=${category.id}` : `/allNews`}
                                                        className="flex justify-between items-center p-2 rounded hover:bg-base-200"
                                                    >
                                                        <span className="text-sm text-gray-700">{category.name}</span>
                                                        <span className="badge badge-soft text-xs">{category.count_news}</span>
                                                    </Link>
                                                );
                                            })}
                                        </div>
                                    </div>

                                    <div className="bg-base-100 border rounded-lg p-6">
                                        <h3 className="text-lg font-semibold mb-4">Berita Terbaru</h3>
                                        <div className="space-y-4">
                                            {news.slice(0, 4).map((item) => (
                                                <Link key={item.id} href={`/news/${item.id}`} className="flex gap-4 items-start p-2 rounded hover:bg-base-200">
                                                    <div className="bg-blue-800/10 rounded p-2">
                                                        <Newspaper className="h-6 w-6" />
                                                    </div>
                                                    <div className="text-sm">
                                                        <h4 className="font-medium mb-1 line-clamp-2">{item.title}</h4>
                                                        <div className="flex items-center gap-1 text-xs text-gray-500">
                                                            <Calendar className="h-3 w-3" /> {item.date}
                                                        </div>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="bg-base-100 border rounded-lg p-6">
                                        <h3 className="text-lg font-semibold mb-4">Tag Populer</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {["Digital Government", "Policy Analysis", "Innovation", "Public Sector", "Research", "Technology", "Training", "Partnership"].map((tag) => (
                                                <span key={tag} className="badge badge-outline cursor-pointer hover:bg-primary hover:text-white">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="bg-base-100 border rounded-lg p-6">
                                        <h3 className="text-lg font-semibold mb-4">Arsip</h3>
                                        <div className="space-y-2">
                                            {["Desember 2024", "November 2024", "Oktober 2024", "September 2024"].map((month) => (
                                                <Link
                                                    key={month}
                                                    href={`/news?month=${month}`}
                                                    className="flex justify-between items-center p-2 rounded hover:bg-base-200"
                                                >
                                                    <span className="text-sm text-gray-700">{month}</span>
                                                    <span className="badge badge-outline text-xs">
                                                        {month === 'Desember 2024' ? '3' : month === 'November 2024' ? '4' : '2'}
                                                    </span>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </GuestLayout>
        </>
    );
}

export default AllNews