import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head, Link } from '@inertiajs/react'
import React from 'react'

function Index({ kerjasama }) {
    const getStatusText = (status) => (status == 1 ? 'Active' : 'Unactive');
    return (
        <AuthenticatedLayout header={
            <h2 className="text-xl font-semibold leading-tight text-gray-800">
                Kerjasama
            </h2>
        }>
            <Head title="Kerjasama" />
            <div className="py-12">

                <div className="card bg-base-100 p-6 mx-2 md:mx-6">
                    <div className="flex justify-between items-center mb-4">
                        <h1 className="text-xl md:text-2xl font-bold">Daftar Lembaga</h1>
                        <Link href={route('kerjasama.create')} className="btn btn-primary btn-sm">+ Tambah Lembaga</Link>
                    </div>
                    <div className="py-2 overflow-x-auto">
                        <table className="table table-zebra">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Logo</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row */}
                                {kerjasama.map((lembaga, index) => (
                                    <tr key={lembaga.id}>
                                        <td>{index + 1}</td>
                                        <td>{lembaga.name}</td>
                                        <td >
                                           <img src={`/storage/${lembaga.logo}`} alt={lembaga.name} className="w-[40px]" />
                                        </td>
                                        <td>{getStatusText(lembaga.status)}</td>
                                        <td>
                                            <Link href={route('kerjasama.edit', lembaga.id)} className="btn btn-sm btn-accent">Edit</Link>


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