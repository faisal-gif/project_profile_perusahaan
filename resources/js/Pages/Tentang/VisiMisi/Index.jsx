import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

function Index({ visiMisi }) {

    const { data, setData, post, processing, errors } = useForm({
        visi: visiMisi?.visi || '',
        misi: visiMisi?.misi || '',
    });

    const module = {
        toolbar: [
            ['bold', 'italic', 'underline'],
            [{ 'list': 'bullet' }],
            [{'align': ['center', 'right', 'justify'] }],
            ['clean'] // remove formatting
        ],
    }

    const [isEditing, setIsEditing] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('visi_misi.store'));
        setIsEditing(false);
    };
    return (
        <AuthenticatedLayout header={
            <h2 className="text-xl font-semibold leading-tight text-gray-800">
                Custom Visi Misi
            </h2>
        }>
            <Head title="Custom Visi Misi" />

            <div className="py-12">
                <div className="card bg-base-100 shadow-sm mx-2 md:mx-6 p-6">
                    <form onSubmit={handleSubmit} className="space-y-4 flex flex-col justify-center gap-2">

                        <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>

                            {/* Visi */}
                            <div>
                                <label className="label">Visi</label>
                                <ReactQuill
                                    value={data.visi}
                                    className='bg-white mt-2 '
                                    modules={module}
                                    readOnly={!isEditing}
                                    onChange={(value) => setData('visi', value)} />
                                {errors.visi && <div className="text-red-500 text-sm">{errors.visi}</div>}
                            </div>
                            {/* Misi */}
                            <div>
                                <label className="label">Misi</label>
                                <ReactQuill
                                    value={data.misi}
                                    className='bg-white mt-2 '
                                    modules={module}
                                    readOnly={!isEditing}
                                    onChange={(value) => setData('misi', value)} />
                                {errors.misi && <div className="text-red-500 text-sm">{errors.misi}</div>}
                            </div>


                        </div>
                        <div className='t-6 flex justify-end gap-2'>
                            {/* Submit */}
                            {!isEditing ? (
                                <button
                                    type="button"
                                    onClick={() => setIsEditing(true)}
                                    className="btn btn-primary "
                                    key={'create'}
                                >
                                    {visiMisi ? 'Edit' : 'Create'}
                                </button>
                            ) :
                                <button key={'save'} type="submit" disabled={processing} className="btn btn-primary w-1/8">
                                    {processing ? 'Saving...' : 'Save Hero'}
                                </button>
                            }

                            {isEditing && (
                                <button
                                    type="button"
                                    key={'cancel'}
                                    onClick={() => {
                                        setIsEditing(false);
                                        setData({
                                            title: hero?.title || '',
                                            description: hero?.description || '',
                                            image: null,
                                        });
                                    }}
                                    className="btn btn-error"
                                >
                                    Cancel
                                </button>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}

export default Index