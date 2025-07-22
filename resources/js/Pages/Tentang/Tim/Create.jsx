import { useForm, Head, Link } from '@inertiajs/react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import React, { useState } from 'react'
import Select from 'react-select'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'


function Create() {


    const { data, setData, post, processing, errors } = useForm({
        name: '',
        jabatan: '',
        biografi: '',
        foto: null,
        status: '',
    })


    const module = {
        toolbar: [
            ['bold', 'italic', 'underline'],
            [{ 'list': 'bullet' }],
            [{ 'align': ['center', 'right', 'justify'] }],
            ['clean'] // remove formatting
        ],
    }

    const [fotoPreview, setFotoPreview] = useState('/placeholder.svg')

    const handleFotoChange = (e) => {
        const file = e.target.files[0]
        if (file) {
            setData('foto', file)
            setFotoPreview(URL.createObjectURL(file))
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        post(route('tim.store'))
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
                                    <input type="text" value={data.name} onChange={(e) => setData('name', e.target.value)}
                                        className="input input-bordered w-full" />
                                    {errors.name && <div className="text-red-500 text-sm">{errors.name}</div>}
                                </div>

                                {/* Name */}
                                <div>
                                    <label className="label">Jabatan</label>
                                    <input type="text" value={data.jabatan} onChange={(e) => setData('jabatan', e.target.value)}
                                        className="input input-bordered w-full" />
                                    {errors.jabatan && <div className="text-red-500 text-sm">{errors.jabatan}</div>}
                                </div>

                            </div>

                            {/* Biografi */}
                            <div>
                                <label className="label">Biografi Singkat</label>
                                <textarea className="textarea textarea-bordered w-full" placeholder="Biografi Singkat"
                                    value={data.biografi} onChange={(e) => setData('biografi', e.target.value)} />
                                {errors.biografi && <div className="text-red-500 text-sm">{errors.biografi}</div>}

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

export default Create