import React, { useState } from 'react'
import { Head, useForm } from '@inertiajs/react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

function Index({ kontakLokasi }) {
    const { data, setData, post, processing, progress, errors } = useForm({
        phone: kontakLokasi?.phone || '',
        email: kontakLokasi?.email || '',
        address: kontakLokasi?.address || '',
        jam_oprasional: kontakLokasi?.jam_oprasional || '',

    });
    const [isEditing, setIsEditing] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('kontak_lokasi.store'));
        setIsEditing(false);
    };
    return (
        <AuthenticatedLayout header={
            <h2 className="text-xl font-semibold leading-tight text-gray-800">
                Custom Kontak & Lokasi
            </h2>
        }>
            <Head title="Custom Kontak & Lokasi" />

            <div className="py-12">
                <div className="card bg-base-100 shadow-sm mx-2 md:mx-6 p-6">
                    <form onSubmit={handleSubmit} className="space-y-4 flex flex-col justify-center gap-2">
                        <div className='grid grid-cols-2 gap-2'>

                            {/* Phone */}
                            <div>
                                <label className="label">Telepon</label>
                                <input type="number" value={data.phone} onChange={(e) => setData('phone', e.target.value)}
                                    className="input input-bordered w-full disabled:bg-gray-100"
                                    disabled={!isEditing} />
                                {errors.phone && <div className="text-red-500 text-sm">{errors.phone}</div>}
                            </div>

                            {/* Email */}
                            <div>
                                <label className="label">Email</label>
                                <input type="text" value={data.email} onChange={(e) => setData('email', e.target.value)}
                                    className="input input-bordered w-full disabled:bg-gray-100"
                                    disabled={!isEditing} />
                                {errors.email && <div className="text-red-500 text-sm">{errors.email}</div>}
                            </div>
                        </div>

                        {/* Alamat */}
                        <div>
                            <label className="label">Alamat</label>
                            <textarea value={data.address} onChange={(e) => setData('address', e.target.value)}
                                className="textarea textarea-bordered w-full disabled:bg-gray-100"
                                disabled={!isEditing} />
                            {errors.address && <div className="text-red-500 text-sm">{errors.address}</div>}

                        </div>

                        {/* Jam Oprasional */}
                        <div>
                            <label className="label">Jam Oprasional</label>
                            <textarea value={data.jam_oprasional} onChange={(e) => setData('jam_oprasional', e.target.value)}
                                className="textarea textarea-bordered w-full disabled:bg-gray-100"
                                disabled={!isEditing} />
                            {errors.jam_oprasional && <div className="text-red-500 text-sm">{errors.jam_oprasional}</div>}
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
                                    {kontakLokasi ? 'Edit' : 'Create'}
                                </button>
                            ) :
                                <button key={'save'} type="submit" disabled={processing} className="btn btn-primary w-1/8">
                                    {processing ? 'Saving...' : 'Save Kontak & Lokasi'}
                                </button>
                            }

                            {isEditing && (
                                <button
                                    type="button"
                                    key={'cancel'}
                                    onClick={() => {
                                        setIsEditing(false);
                                        setData({
                                            phone: kontakLokasi?.phone || '',
                                            email: kontakLokasi?.email || '',
                                            address: kontakLokasi?.address || '',
                                            jam_oprasional: kontakLokasi?.jam_oprasional || '',
                                        });
                                    }}
                                    className="btn btn-error"
                                >
                                    Cancel
                                </button>
                            )}
                        </div>
                    </form>
                </div >
            </div >
        </AuthenticatedLayout >
    )
}

export default Index