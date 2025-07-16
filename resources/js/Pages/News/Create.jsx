import { useForm, Head, Link } from '@inertiajs/react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import React, { useState } from 'react'
import Select from 'react-select'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'


function Create({ categories }) {
  const [tagInput, setTagInput] = useState('')
  const [tags, setTags] = useState([])
  const module = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      ['link', 'image'],
      ['code-block'],
      ['clean'] // remove formatting
    ],
  }

  const [thumbnailPreview, setThumbnailPreview] = useState('/placeholder.svg')

  const { data, setData, post, processing, errors } = useForm({
    thumbnail: '',
    title: '',
    category_id: '',
    description: '',
    content: '',
    tags: [],
  })

  const handleThumbnailChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setData('thumbnail', file)
      setThumbnailPreview(URL.createObjectURL(file))
    }
  }


  const handleTagInput = (e) => {
    const input = e.target.value
    setTagInput(input)

    if (input.endsWith(',')) {
      const tag = input.replace(',', '').trim()
      if (tag && !tags.includes(tag)) {
        const updatedTags = [...tags, tag]
        setTags(updatedTags)
        setData('tags', updatedTags)
      }
      setTagInput('')
    }
  }

  const removeTag = (tagToRemove) => {
    const filtered = tags.filter((tag) => tag !== tagToRemove)
    setTags(filtered)
    setData('tags', filtered)
  }



  const handleSubmit = (e) => {
    e.preventDefault()
    post(route('news.store'))
  }

  return (
    <>
      <AuthenticatedLayout header={
        <h2 className="text-xl font-semibold leading-tight text-gray-800">
          Create News
        </h2>
      }>
        <Head title="Create News" />

        <div className="py-12">
          <div className="card bg-base-100 shadow-sm md:max-w-6xl md:mx-auto mx-2 p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Thumbnail */}
              <div>
                <label className="label">Thumbnail</label>
                {thumbnailPreview && (
                  <div className="my-4 ">
                    <img src={thumbnailPreview} alt="Thumbnail Preview"
                      className="rounded-xl max-h-60 border border-base-300" />
                  </div>
                )}
                <input type="file"
                  accept="image/*"
                  onChange={handleThumbnailChange}
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
                    className="react-select-container"
                  />
                  {errors.category_id && <div className="text-red-500 text-sm">{errors.category_id}</div>}
                </div>

              </div>


              {/* Deskripsi */}
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
                <ReactQuill
                  value={data.content}
                  className='bg-white'
                  modules={module}
                  onChange={(value) => setData('content', value)} />
                {errors.content && <div className="text-red-500 text-sm">{errors.content}</div>}
              </div>


              {/* Submit */}
              <button type="submit" disabled={processing} className="btn btn-primary w-full">
                {processing ? 'Saving...' : 'Create News'}
              </button>
            </form>
          </div>
        </div>


      </AuthenticatedLayout>
    </>
  )
}

export default Create