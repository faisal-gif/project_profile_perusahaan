import { useForm, Head, Link, router } from '@inertiajs/react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import React, { useState } from 'react'
import Select from 'react-select'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'


function Edit({ anggotaTim }) {


    const { data: editData, setData: setEditData, processing, errors } = useForm({
        name: anggotaTim.name || '',
        jabatan: anggotaTim.jabatan || '',
        biografi: anggotaTim.biografi || '',
        foto: null,
        status: anggotaTim.status || '',
    })


    const module = {
        toolbar: [
            ['bold', 'italic', 'underline'],
            [{ 'list': 'bullet' }],
            [{ 'align': ['center', 'right', 'justify'] }],
            ['clean'] // remove formatting
        ],
    }

    const [fotoPreview, setFotoPreview] = useState(
        anggotaTim.foto ? `/storage/${anggotaTim.foto}` : '/placeholder.svg'
    )

    const handleFotoChange = (e) => {
        const file = e.target.files[0]
        if (file) {
            setEditData('foto', file)
            setFotoPreview(URL.createObjectURL(file))
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        router.post(route('tim.update', anggotaTim), {
            _method: 'PUT',
            ...editData,
        })
    }

    return (
        <>
            <AuthenticatedLayout header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Edit Anggota Tim
                </h2>
            }>
                <Head title="Edit Anggota Tim" />

                <div className="py-12">
                    <div className="card bg-base-100 shadow-sm mx-2 md:mx-6 p-6">
                        <form onSubmit={handleSubmit} className="space-y-4">

                            {/* Foto */}
                            <div>
                                <label className="label">Foto</label>
                                {fotoPreview && (
                                    <div className="my-4 ">
                                        <img src={fotoPreview} alt="Thumbnail Preview"
                                            className="rounded-xl max-h-60 border border-base-300" />
                                    </div>
                                )}
                                <input type="file"
                                    accept="image/*"
                                    onChange={handleFotoChange}
                                    className="file-input file-input-bordered w-full" />
                                {errors.foto && <div className="text-red-500 text-sm">{errors.foto}</div>}

                            </div>

                            {/* Nama & Jabatan */}
                            <div className='grid grid-cols-2 gap-2'>
                                {/* Name */}
                                <div>
                                    <label className="label">Nama</label>
                                    <input type="text" value={editData.name} onChange={(e) => setEditData('name', e.target.value)}
                                        className="input input-bordered w-full" />
                                    {errors.name && <div className="text-red-500 text-sm">{errors.name}</div>}
                                </div>

                                {/* Name */}
                                <div>
                                    <label className="label">Jabatan</label>
                                    <input type="text" value={editData.jabatan} onChange={(e) => setEditData('jabatan', e.target.value)}
                                        className="input input-bordered w-full" />
                                    {errors.jabatan && <div className="text-red-500 text-sm">{errors.jabatan}</div>}
                                </div>

                            </div>

                            {/* Biografi */}
                            <div>
                                <label className="label">Biografi Singkat</label>
                                <textarea className="textarea textarea-bordered w-full" placeholder="Biografi Singkat"
                                    value={editData.biografi} onChange={(e) => setEditData('biografi', e.target.value)} />
                                {errors.biografi && <div className="text-red-500 text-sm">{errors.biografi}</div>}
                            </div>

                            {/* Status */}
                            <div>
                                <label className="label">Status</label>
                                <select
                                    value={editData.status}
                                    onChange={(e) => setEditData('status', e.target.value)}
                                    className="select select-bordered w-full">
                                    <option value="">Select Status</option>
                                    <option value="1">Active</option>
                                    <option value="0">Inactive</option>
                                </select>
                                {errors.status && <div className="text-red-500 text-sm">{errors.status}</div>}
                            </div>


                            {/* Submit */}
                            <div className='flex justify-end'>
                                <button type="submit" disabled={processing} className="btn btn-primary disabled:btn-disabled">
                                    {processing ? 'Saving...' : 'Save Anggota Tim'}
                                </button>
                            </div>

                        </form>
                    </div>
                </div>


            </AuthenticatedLayout>
        </>
    )
}

export default Edit