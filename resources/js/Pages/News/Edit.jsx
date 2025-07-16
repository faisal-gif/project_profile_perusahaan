import React, { useState, useEffect } from 'react'
import { Head, useForm } from '@inertiajs/react'
import Select from 'react-select'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'

export default function Edit({ news, categories }) {
    const [thumbnailPreview, setThumbnailPreview] = useState(
        news.image ? `/storage/${news.image}` : '/placeholder.svg'
    )

    const [tagInput, setTagInput] = useState('')
    const [tags, setTags] = useState(news.tags || [])

    const { data, setData, put, processing, errors } = useForm({
        thumbnail: '',
        title: news.title,
        category_id: news.category_id,
        description: news.description,
        content: news.content,
       
    })

    
    const handleThumbnailChange = (e) => {
        const file = e.target.files[0]
        if (file) {
            setData('thumbnail', file)
            setThumbnailPreview(URL.createObjectURL(file))
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        put(route('news.update', news.id))
    }

    return (

        <AuthenticatedLayout header={
            <h2 className="text-xl font-semibold leading-tight text-gray-800">
                Edit News
            </h2>
        }>
            <Head title="Create News" />

            <div className="py-12">

                <div className="card bg-base-100 md:max-w-6xl md:mx-auto mx-2 p-4">
                    <h1 className="text-2xl font-bold mb-6">Edit Berita</h1>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Thumbnail */}
                        <div>
                            <label className="label">Thumbnail</label>
                            <div className="my-2    ">
                                <img src={thumbnailPreview} className="rounded-xl max-h-60 border border-base-300" />
                            </div>
                            <input type="file" accept="image/*" onChange={handleThumbnailChange}
                                className="file-input file-input-bordered w-full" />
                            {errors.thumbnail && <div className="text-red-500 text-sm">{errors.thumbnail}</div>}

                        </div>

                        <div className='grid md:grid-cols-3 gap-2'>
                            {/* Title */}
                            <div className='col-span-2'>
                                <label className="label">Title</label>
                                <input type="text" value={data.title} onChange={(e) => setData('title', e.target.value)}
                                    className="input input-bordered w-full" />
                                {errors.title && <div className="text-red-500 text-sm">{errors.title}</div>}
                            </div>

                            {/* Category */}
                            <div className='col-span-1'>
                                <label className="label">Category</label>
                                <Select
                                    options={categories.map(cat => ({ value: cat.id, label: cat.name }))}
                                    onChange={(selected) => setData('category_id', selected?.value)}
                                    defaultValue={categories.map(cat => ({ value: cat.id, label: cat.name })).find(c => c.value === news.category_id)}
                                />
                                {errors.category_id && <div className="text-red-500 text-sm">{errors.category_id}</div>}
                            </div>

                        </div>
                       

                        {/* Description */}
                        <div>
                            <label className="label">Deskripsi</label>
                            <textarea value={data.description}
                                onChange={(e) => setData('description', e.target.value)}
                                className="textarea textarea-bordered w-full" />
                            {errors.description && <div className="text-red-500 text-sm">{errors.description}</div>}
                        </div>

                        {/* Content */}
                        <div>
                            <label className="label">Content</label>
                            <ReactQuill value={data.content} onChange={(value) => setData('content', value)} />
                            {errors.content && <div className="text-red-500 text-sm">{errors.content}</div>}
                        </div>

                      
                        {/* Submit */}
                        <button type="submit" disabled={processing} className="btn btn-primary w-full">
                            {processing ? 'Updating...' : 'Update Berita'}
                        </button>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}