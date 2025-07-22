// Converted to use only DaisyUI + Tailwind CSS components, no UI/Card/Input/Textarea/Button/Label components
import React from 'react';
import { Head, Link } from '@inertiajs/react';
import { ArrowLeft, MapPin, Phone, Mail, Clock, Send, MessageSquare, Calendar, Users } from 'lucide-react';
import GuestLayout from '@/Layouts/GuestLayout';


const Contact = ({ kontak }) => {

    return (
        <>
            <Head title="Contact" />
            <GuestLayout>
                <section className="py-16  bg-base-200">
                    <div className="container mx-auto px-6">

                        <div className="text-center mt-20">
                            <h1 className="text-4xl font-bold mb-4">Hubungi Kami</h1>
                            <p className="text-xl max-w-3xl mx-auto">
                                Mari diskusikan bagaimana CPSI dapat membantu transformasi dan inovasi di organisasi Anda
                            </p>
                        </div>
                    </div>
                </section>

                <section className="py-16 lg:px-16">
                    <div className="container mx-auto px-6">
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

                            <div key='1' className="bg-base-100 rounded-lg shadow-md text-center p-6 hover:shadow-xl transition">
                                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                                    <MapPin className="h-6 w-6 text-primary" />
                                </div>
                                <h3 className="text-lg font-bold mb-1">Alamat Kantor</h3>
                                <p className="text-gray-600 whitespace-pre-line">{kontak.address}</p>
                            </div>

                            <div key='2' className="bg-base-100 rounded-lg shadow-md text-center p-6 hover:shadow-xl transition">
                                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                                    <Phone className="h-6 w-6 text-primary" />
                                </div>
                                <h3 className="text-lg font-bold mb-1">Telepon</h3>
                                <p className="text-gray-600 whitespace-pre-line">{kontak.phone}</p>
                            </div>

                            <div key='3' className="bg-base-100 rounded-lg shadow-md text-center p-6 hover:shadow-xl transition">
                                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                                    <Mail className="h-6 w-6 text-primary" />
                                </div>
                                <h3 className="text-lg font-bold mb-1">Email</h3>
                                <p className="text-gray-600 whitespace-pre-line">{kontak.email}</p>
                            </div>

                            <div key='4' className="bg-base-100 rounded-lg shadow-md text-center p-6 hover:shadow-xl transition">
                                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                                    <Mail className="h-6 w-6 text-primary" />
                                </div>
                                <h3 className="text-lg font-bold mb-1">Jam Oprasional</h3>
                                 <p className="text-gray-600 whitespace-pre-line">{kontak.jam_oprasional}</p>
                            </div>


                        </div>
                    </div>
                </section>

                <section className="py-16 bg-base-200">
                    <div className="container mx-auto px-6">
                        <div className="max-w-3xl mx-auto bg-base-100 p-6 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-bold mb-6">Kirim Pesan</h2>
                            <form className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <input type="text" placeholder="Nama Depan" className="input input-bordered w-full" />
                                    <input type="text" placeholder="Nama Belakang" className="input input-bordered w-full" />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <input type="email" placeholder="Email" className="input input-bordered w-full" />
                                    <input type="tel" placeholder="Telepon" className="input input-bordered w-full" />
                                </div>
                                <input type="text" placeholder="Organisasi/Instansi" className="input input-bordered w-full" />
                                <input type="text" placeholder="Subjek" className="input input-bordered w-full" />
                                <textarea className="textarea textarea-bordered w-full min-h-[150px]" placeholder="Pesan Anda..." />
                                <button className="btn btn-primary w-full">
                                    <Send className="w-4 h-4 mr-2" /> Kirim Pesan
                                </button>
                            </form>
                        </div>
                    </div>
                </section>



            </GuestLayout>
        </>

    );
};

export default Contact;
