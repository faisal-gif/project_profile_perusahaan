import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head, Link } from '@inertiajs/react'
import React from 'react'
import * as Icons from 'lucide-react';

function Index({ layanan }) {
    const getStatusText = (status) => (status == 1 ? 'Active' : 'Unactive');
    return (
        <AuthenticatedLayout header={
            <h2 className="text-xl font-semibold leading-tight text-gray-800">
                Layanan
            </h2>
        }>
            <Head title="Layanan" />
            <div className="py-12">

                <div className="card bg-base-100 p-6 mx-2 md:mx-6">
                    <div className="flex justify-between items-center mb-4">
                        <h1 className="text-xl md:text-2xl font-bold">Daftar Layanan</h1>
                        <Link href={route('layanan.create')} className="btn btn-primary btn-sm">+ Tambah Layanan</Link>
                    </div>
                    <div className="py-2 overflow-x-auto">
                        <table className="table table-zebra">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Nama</th>
                                    <th>Icon</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row */}
                                {layanan.map((l, index) => (
                                    <tr key={l.id}>
                                        <td>{index + 1}</td>
                                        <td>{l.name}</td>
                                        <td>{Icons[l.icon] && React.createElement(Icons[l.icon], { size: 24 })}</td>
                                        <td>{getStatusText(l.status)}</td>
                                        <td>
                                            <Link href={route('layanan.edit', l)} className="btn btn-sm btn-accent">Edit</Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>



                        </table>
                    </div>
                </div>

            </div>
        </AuthenticatedLayout>
    )
}

export default Index