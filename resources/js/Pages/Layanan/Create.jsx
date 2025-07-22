import { useForm, Head, Link } from '@inertiajs/react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import React, { useState } from 'react'
import Select from 'react-select';
import * as Icons from 'lucide-react';
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'


function Create() {


    const { data, setData, post, processing, errors } = useForm({
        name: '',
        description: '',
        icon: '',
    })

    const iconOptions = [
        { value: 'Camera', label: 'Camera' },
        { value: 'User', label: 'User' },
        { value: 'Users', label: 'Users' },
        { value: 'Monitor', label: 'Monitor' },
        { value: 'Star', label: 'Star' },
        { value: 'Search', label: 'Search' },
        { value: 'Bell', label: 'Bell' },
        { value: 'Home', label: 'Home' },
        { value: 'Heart', label: 'Heart' },
    ];

    const module = {
        toolbar: [
            ['bold', 'italic', 'underline'],
            [{ 'list': 'bullet' }],
            [{ 'align': ['center', 'right', 'justify'] }],
            ['clean'] // remove formatting
        ],
    }



    const handleSubmit = (e) => {
        e.preventDefault()
        post(route('layanan.store'))
    }

    return (
        <>
            <AuthenticatedLayout header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Tambah Anggota Tim
                </h2>
            }>
                <Head title="Tambah Anggota Tim" />

                <div className="py-12">
                    <div className="card bg-base-100 shadow-sm mx-2 md:mx-6 p-6">
                        <form onSubmit={handleSubmit} className="space-y-4">


                            <div>
                                <label className="block font-semibold mb-1">Icon</label>
                                <Select
                                    options={iconOptions}
                                    value={iconOptions.find(opt => opt.value === data.icon) || null}
                                    onChange={(selected) => setData('icon', selected?.value)}
                                    className="react-select-container"
                                    classNamePrefix="react-select"
                                    formatOptionLabel={({ label, value }) => (
                                        <div className="flex items-center gap-2">
                                            {Icons[value] ? React.createElement(Icons[value], { size: 18 }) : null}
                                            <span>{label}</span>
                                        </div>
                                    )}
                                    placeholder="Pilih icon"
                                />

                                {errors.icon && <p className="text-red-500 text-sm mt-1">{errors.icon}</p>}

                            </div>

                            {/* Name */}
                            <div>
                                <label className="label">Nama</label>
                                <input type="text" value={data.name} onChange={(e) => setData('name', e.target.value)}
                                    className="input input-bordered w-full" />
                                {errors.name && <div className="text-red-500 text-sm">{errors.name}</div>}
                            </div>

                            {/* Biografi */}
                            <div>
                                <label className="label">Deskripsi Layanan</label>
                                <ReactQuill
                                    className='bg-white mt-2 '
                                    modules={module}
                                    theme="snow"
                                    placeholder="Deskripsi Singkat Layanan"
                                    value={data.description}
                                    onChange={(value) => setData('description', value)} />
                                {errors.description && <div className="text-red-500 text-sm">{errors.description}</div>}
                            </div>




                            {/* Submit */}
                            <div className='flex justify-end'>
                                <button type="submit" disabled={processing} className="btn btn-primary disabled:btn-disabled">
                                    {processing ? 'Saving...' : 'Save Layanan'}
                                </button>
                            </div>

                        </form>
                    </div>
                </div>


            </AuthenticatedLayout>
        </>
    )
}

export default Create