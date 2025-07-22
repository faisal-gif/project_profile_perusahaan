import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head, Link } from '@inertiajs/react'
import React from 'react'

function Index({ tim }) {
    const getStatusText = (status) => (status == 1 ? 'Active' : 'Unactive');
    return (
        <AuthenticatedLayout header={
            <h2 className="text-xl font-semibold leading-tight text-gray-800">
                Tim
            </h2>
        }>
            <Head title="Tim" />
            <div className="py-12">

                <div className="card bg-base-100 p-6 mx-2 md:mx-6">
                    <div className="flex justify-between items-center mb-4">
                        <h1 className="text-xl md:text-2xl font-bold">Daftar Tim</h1>
                        <Link href={route('tim.create')} className="btn btn-primary btn-sm">+ Tambah Anggota</Link>
                    </div>
                    <div className="py-2 overflow-x-auto">
                        <table className="table table-zebra">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Nama</th>
                                    <th>Jabatan</th>
                                    <th>Foto</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row */}
                                {tim.map((anggota, index) => (
                                    <tr key={anggota.id}>
                                        <td>{index + 1}</td>
                                        <td>{anggota.name}</td>
                                        <td>{anggota.jabatan}</td>
                                        <td >
                                            <img src={`/storage/${anggota.foto}`} alt={anggota.name} className="w-[40px]" />
                                        </td>
                                        <td>{getStatusText(anggota.status)}</td>
                                        <td>
                                            <Link href={route('tim.edit', anggota)} className="btn btn-sm btn-accent">Edit</Link>
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