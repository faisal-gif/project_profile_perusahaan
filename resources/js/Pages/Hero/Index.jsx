import React, { useState } from 'react'
import { Head, useForm } from '@inertiajs/react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

function Index({ hero }) {
    const { data, setData, post, processing, progress, errors } = useForm({
        title: hero?.title || '',
        description: hero?.description || '',
        image: null,
    });
    const [isEditing, setIsEditing] = useState(false);
    const [imagePreview, setImagePreview] = useState(hero.image ? `/storage/${hero.image}` : '/placeholder.svg')

    const handleImageChange = (e) => {
        const file = e.target.files[0]
        if (file) {
            setData('image', file)
            setImagePreview(URL.createObjectURL(file))
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('hero.store'));
        setIsEditing(false);
    };
    return (
        <AuthenticatedLayout header={
            <h2 className="text-xl font-semibold leading-tight text-gray-800">
                Custom Hero Section
            </h2>
        }>
            <Head title="Custom Hero Section" />

            <div className="py-12">
                <div className="card bg-base-100 shadow-sm mx-2 md:mx-6 p-6">
                    <form onSubmit={handleSubmit} className="space-y-4 flex flex-col justify-center gap-2">
                        <div>
                            <label className="label">Image</label>
                            {imagePreview && (
                                <div className="my-4 ">
                                    <img src={imagePreview} alt="Thumbnail Preview"
                                        className="rounded-xl max-h-60 border border-base-300" />
                                </div>
                            )}

                            <input type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                                disabled={!isEditing}
                                className="file-input file-input-bordered w-full disabled:bg-gray-100" />
                            {errors.image && <div className="text-red-500 text-sm">{errors.image}</div>}

                        </div>
                        <div className='grid grid-cols-1 gap-2'>

                            {/* Name */}
                            <div>
                                <label className="label">Nama</label>
                                <input type="text" value={data.title} onChange={(e) => setData('title', e.target.value)}
                                    className="input input-bordered w-full disabled:bg-gray-100"
                                    disabled={!isEditing} />
                                {errors.title && <div className="text-red-500 text-sm">{errors.title}</div>}
                            </div>

                            {/* Description */}

                            <div>
                                <label className="label">Deskripsi</label>
                                <textarea value={data.description} onChange={(e) => setData('description', e.target.value)}
                                    className="textarea textarea-bordered w-full disabled:bg-gray-100"
                                    disabled={!isEditing} />
                                {errors.description && <div className="text-red-500 text-sm">{errors.description}</div>}
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
                                    {hero ? 'Edit' : 'Create'}
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