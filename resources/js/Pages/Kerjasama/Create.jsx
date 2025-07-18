import { useForm, Head, Link } from '@inertiajs/react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import React, { useState } from 'react'
import Select from 'react-select'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'


function Create() {


    const { data, setData, post, processing, errors } = useForm({
        name: '',
        logo: null,
        status: '',
    })
    const [logoPreview, setLogoPreview] = useState('/placeholder.svg')

    const handleLogoChange = (e) => {
        const file = e.target.files[0]
        if (file) {
            setData('logo', file)
            setLogoPreview(URL.createObjectURL(file))
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        post(route('kerjasama.store'))
    }

    return (
        <>
            <AuthenticatedLayout header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Create Kerjasama
                </h2>
            }>
                <Head title="Create Kerjasama" />

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
                                    <input type="text" value={data.name} onChange={(e) => setData('name', e.target.value)}
                                        className="input input-bordered w-full" />
                                    {errors.name && <div className="text-red-500 text-sm">{errors.name}</div>}
                                </div>

                                {/* Status */}
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
                                {processing ? 'Saving...' : 'Create Kerjasama'}
                            </button>
                        </form>
                    </div>
                </div>


            </AuthenticatedLayout>
        </>
    )
}

export default Create