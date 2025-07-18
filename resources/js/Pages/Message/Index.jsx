import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head, Link } from '@inertiajs/react'
import React from 'react'

function Index({ message }) {
    
    return (
        <AuthenticatedLayout header={
            <h2 className="text-xl font-semibold leading-tight text-gray-800">
                Pesan
            </h2>
        }>
            <Head title="Pesan" />
            <div className="py-12 mx-2 md:mx-6 flex justify-center">
                <div className="w-full bg-white rounded-lg shadow-md">
                    <div className="flex justify-between items-center px-6 py-4 border-b">
                        <h1 className="text-xl md:text-2xl font-bold">Daftar Pesan Masuk</h1>
                    </div>
                    <div>
                        {message.length === 0 && (
                            <div className="text-center text-gray-500 py-8">Tidak ada pesan.</div>
                        )}
                        <ul>
                            {message.map((pesan, index) => (
                                <li key={pesan.id}>
                                    <Link
                                        href={route('message.show', { id: pesan.id })}
                                        className={`flex items-center px-6 py-4 border-b hover:bg-gray-100 cursor-pointer transition ${
                                            !pesan.is_read ? 'bg-gray-50 font-semibold' : ''
                                        }`}
                                    >
                                        {/* Avatar */}
                                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-200 flex items-center justify-center text-blue-700 font-bold mr-4">
                                            {pesan.name ? pesan.name.charAt(0).toUpperCase() : '?'}
                                        </div>
                                        {/* Sender and subject */}
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center">
                                                <span className="truncate mr-2">{pesan.name}</span>
                                                {!pesan.is_read && (
                                                    <span className="ml-2 inline-block w-2 h-2 bg-blue-500 rounded-full"></span>
                                                )}
                                            </div>
                                            <div className="text-gray-600 truncate text-sm">
                                                {pesan.subject || '(Tanpa Subjek)'}
                                            </div>
                                        </div>
                                        {/* Date */}
                                        <div className="ml-4 text-xs text-gray-400 whitespace-nowrap">
                                            {pesan.created_at ? new Date(pesan.created_at).toLocaleDateString() : ''}
                                        </div>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}

export default Index