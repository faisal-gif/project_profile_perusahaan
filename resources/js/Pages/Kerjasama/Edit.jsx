import { useForm, Head, Link, router } from '@inertiajs/react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import React, { useState } from 'react'
import Select from 'react-select'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'


function Edit({ kerjasama }) {


    const { data: editData, setData: setEditData, processing, errors } = useForm({
        name: kerjasama.name || '',
        logo: null,
        status: kerjasama.status || '',
    })


    const [logoPreview, setLogoPreview] = useState(
        kerjasama.logo ? `/storage/${kerjasama.logo}` : '/placeholder.svg'
    )

    const handleLogoChange = (e) => {
        const file = e.target.files[0]
        if (file) {
            setEditData('logo', file)
            setLogoPreview(URL.createObjectURL(file))
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        router.post(route('kerjasama.update', kerjasama), {
            _method: 'PUT',
            ...editData,
        })
    }

    return (
        <>
            <AuthenticatedLayout header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Edit Kerjasama
                </h2>
            }>
                <Head title="Edit Kerjasama" />

                <div className="py-12">
                    <div className="card bg-base-100 shadow-sm mx-2 md:mx-6 p-6">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="label">Logo</label>
                                {logoPreview && (
                                    <div className="my-4 ">
                                        <img src={logoPreview} alt="Thumbnail Preview"
                                            className="rounded-xl max-h-60 border border-base-300" />
                                    </div>
                                )}
                                <input type="file"
                                    accept="image/*"
                                    onChange={handleLogoChange}
                                    className="file-input file-input-bordered w-full" />
                                {errors.logo && <div className="text-red-500 text-sm">{errors.logo}</div>}

                            </div>
                            <div className='grid grid-cols-2 gap-2'>

                                {/* Name */}
                                <div>
                                    <label className="label">Nama</label>
                                    <input type="text" value={editData.name} onChange={(e) => setEditData('name', e.target.value)}
                                        className="input input-bordered w-full" />
                                    {errors.name && <div className="text-red-500 text-sm">{errors.name}</div>}
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

                            </div>

                            {/* Submit */}
                            <button type="submit" disabled={processing} className="btn btn-primary w-full">
                                {processing ? 'Saving...' : 'Edit Kerjasama'}
                            </button>
                        </form>
                    </div>
                </div>


            </AuthenticatedLayout>
        </>
    )
}

export default Edit