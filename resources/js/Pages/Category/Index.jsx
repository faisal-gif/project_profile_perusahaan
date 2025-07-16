import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head, Link } from '@inertiajs/react'
import React from 'react'

function Index({ categories }) {
    const getStatusText = (status) => (status == 1 ? 'Active' : 'Inactive');
    return (
        <AuthenticatedLayout header={
            <h2 className="text-xl font-semibold leading-tight text-gray-800">
                Category
            </h2>
        }>
            <Head title="Category" />
            <div className="py-12">

                <div className="card bg-base-100 p-6 max-w-6xl mx-2 md:mx-auto">
                    <div className="flex flex-col md:flex-row justify-between gap-2 md:items-center mb-4">
                        <h1 className="text-2xl font-bold">Daftar Category</h1>
                        <Link href={route('category.create')} className="btn btn-primary">+ Tambah Category</Link>
                    </div>
                    <div className="py-2 overflow-x-auto">
                        <table className="table table-zebra">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Slug</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row */}
                                {categories.map((category, index) => (
                                    <tr key={category.id}>
                                        <td>{index + 1}</td>
                                        <td>{category.name}</td>
                                        <td>{category.slug}</td>
                                        <td>{getStatusText(category.status)}</td>
                                        <td>
                                            <Link href={route('category.edit', category.id)} className="btn btn-sm btn-accent">Edit</Link>


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