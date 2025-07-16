import { useForm, Head, Link } from '@inertiajs/react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import React, { useState } from 'react'
import Select from 'react-select'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'


function Edit({ category }) {


    const { data, setData, put, processing, errors } = useForm({
        name: category.name,
        status: category.status,
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        put(route('category.update', { id: category.id }),
            { preserveScroll: true })
    }

    return (
        <>
            <AuthenticatedLayout header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Edit Category
                </h2>
            }>
                <Head title="Edit Category" />

                <div className="py-12">
                    <div className="card bg-base-100 shadow-sm max-w-3xl md:mx-auto mx-2 p-6">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className='grid grid-cols-2 gap-2'>
                                {/* Name */}
                                <div >
                                    <label className="label">Nama</label>
                                    <input type="text" value={data.name} onChange={(e) => setData('name', e.target.value)}
                                        className="input input-bordered w-full" />
                                    {errors.name && <div className="text-red-500 text-sm">{errors.name}</div>}
                                </div>
                                {/* Name */}
                                <div>
                                    <label className="label">Status</label>
                                    <select
                                        value={data.status}
                                        onChange={(e) => setData('status', e.target.value)}
                                        className="select select-bordered w-full">
                                        <option value="">Select Status</option>
                                        <option value="1">Active</option>
                                        <option value="0">Inactive</option>
                                    </select>
                                    {errors.status && <div className="text-red-500 text-sm">{errors.status}</div>}
                                </div>
                            </div>

                            {/* Submit */}
                            <button type="submit" disabled={processing} className="btn btn-primary w-full">
                                {processing ? 'Saving...' : 'Edit Category'}
                            </button>
                        </form>
                    </div>
                </div>


            </AuthenticatedLayout>
        </>
    )
}

export default Edit