import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { router, Link, Head } from '@inertiajs/react'
import React, { useEffect, useState } from 'react'

export default function Index({ news, filters }) {
    const [search, setSearch] = useState(filters.search || '')

    useEffect(() => {
        const delayDebounce = setTimeout(() => {
            router.get(route('news.index'), { search }, { preserveState: true, replace: true })
        }, 400)

        return () => clearTimeout(delayDebounce)
    }, [search])

    return (
        <AuthenticatedLayout header={
            <h2 className="text-xl font-semibold leading-tight text-gray-800">
                News
            </h2>
        }>
            <Head title="News" />
            <div className="py-12">
                <div className="card bg-base-100 p-6 max-w-6xl mx-2 lg:mx-8">
                    <div className="flex justify-between items-center mb-4">
                        <h1 className="text-2xl font-bold">Daftar Berita</h1>
                        <Link href={route('news.create')} className="btn btn-primary">+ Tambah Berita</Link>
                    </div>

                    <div className="mb-4">
                        <input
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Cari judul berita..."
                            className="input input-bordered w-full"
                        />
                    </div>

                    <div className="grid gap-4">
                        {news.data.length === 0 && <p className="text-gray-500">Tidak ada berita ditemukan.</p>}

                        {news.data.map((item) => (
                            <div key={item.id} className="card bg-base-100 shadow-md grid grid-cols-1 md:grid-cols-3">
                                <figure className="col-span-1">
                                    <img
                                        src={`/storage/${item.thumbnail}`}
                                        alt={item.title}
                                        className="object-contain w-full"
                                    />
                                </figure>
                                <div className="card-body col-span-2">
                                    <h2 className="card-title text-lg">{item.title}</h2>
                                    <p className="text-sm text-gray-500">
                                        Kategori: {item.category || '-'} | {new Date(item.datePub).toLocaleDateString()}
                                    </p>
                                    <p className="text-sm line-clamp-2">{item.description}</p>
                                    <div className="card-actions justify-end">
                                        <Link href={route('news.edit', item.id)} className="btn btn-sm btn-outline">Edit</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Pagination */}
                    <div className="join mt-6 justify-center flex">
                        {news.links.map((link, index) => (
                            <button
                                key={index}
                                disabled={!link.url}
                                onClick={() => link.url && router.visit(link.url)}
                                className={`join-item btn btn-sm ${link.active ? 'btn-primary' : ''}`}
                                dangerouslySetInnerHTML={{ __html: link.label }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}
