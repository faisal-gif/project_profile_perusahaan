import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head, Link } from '@inertiajs/react'
import React from 'react'

function Show({ pesan }) {
    return (
        <AuthenticatedLayout header={
            <h2 className="text-xl font-semibold leading-tight text-gray-800">
                Pesan
            </h2>
        }>
            <Head title="Pesan" />
            <div className="py-12 mx-2 md:mx-6 flex justify-center">
                <div className="w-full bg-white rounded-lg shadow-md p-6">
                    {/* Header */}
                    <div className="flex items-center justify-between border-b pb-4 mb-4">
                        <div>
                            <h3 className="text-lg font-bold">{pesan.subject}</h3>
                            <div className="text-sm text-gray-500">
                                Dari: <span className="font-medium text-gray-700">{pesan.name} &lt;{pesan.email}&gt;</span>
                            </div>
                        </div>
                        <div className="text-xs text-gray-400 text-right">
                            {new Date(pesan.created_at).toLocaleString()}
                        </div>
                    </div>
                    {/* Body */}
                    <div className="mt-4 text-gray-800 whitespace-pre-line">
                        {pesan.message}
                    </div>
                    {/* Actions */}
                    <div className="mt-8 flex gap-2">
                        <Link href={route('message.index')} className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 text-sm">
                            Kembali ke Daftar
                        </Link>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}

export default Show