import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { useForm } from '@inertiajs/react';

function Contact({ kontakLokasi }) {
  const { data, setData, post, processing, errors } = useForm({
    name: '',
    email: '',
    organization: '',
    subject: '',
    message: ''
  });


  const handleSubmit = (e) => {
    e.preventDefault();
    post(route('message.send'));
  };

  return (
    <section id="contact" className="py-20 lg:px-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Kontak & <span className="text-primary">Lokasi</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hubungi kami untuk konsultasi, kemitraan, atau informasi lebih lanjut tentang layanan CPSI.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="space-y-6">
            {/* Contact Info Items */}
            <div key='1' className="border-2 p-6 rounded-lg hover:shadow transition-all">
              <div className="flex items-start">
                <div className='w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4'>
                  <Phone className='h-6 w-6 text-accent' />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Telepon</h3>
                  <p className="text-gray-600 whitespace-pre-line">{kontakLokasi.phone}</p>
                </div>
              </div>
            </div>
            <div key='2' className="border-2 p-6 rounded-lg hover:shadow transition-all">
              <div className="flex items-start">
                <div className='w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mr-4'>
                  <Mail className='h-6 w-6 text-accent' />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-600 whitespace-pre-line">{kontakLokasi.email}</p>
                </div>
              </div>
            </div>
            <div key='3' className="border-2 p-6 rounded-lg hover:shadow transition-all">
              <div className="flex items-start">
                <div className='w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4'>
                  <MapPin className='h-6 w-6 text-primary' />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Alamat</h3>
                  <p className="text-gray-600 whitespace-pre-line">{kontakLokasi.address}</p>
                </div>
              </div>
            </div>
            <div key='4' className="border-2 p-6 rounded-lg hover:shadow transition-all">
              <div className="flex items-start">
                <div className='w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mr-4'>
                  <Clock className='h-6 w-6 text-accent' />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Jam Opreasinal</h3>
                  <p className="text-gray-600 whitespace-pre-line">{kontakLokasi.jam_oprasional}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <div className="rounded-lg shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-primary to-accent text-white px-6 py-4 text-2xl font-semibold">
                Kirim Pesan
              </div>
              <form onSubmit={handleSubmit} className="p-6 space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nama Lengkap *</label>
                    <input type="text" name="name" value={data.name} onChange={(e) => setData('name', e.target.value)} required className="input input-bordered w-full" placeholder="Masukkan nama lengkap" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                    <input type="email" name="email" value={data.email} onChange={(e) => setData('email', e.target.value)} required className="input input-bordered w-full" placeholder="nama@email.com" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Organisasi</label>
                    <input type="text" name="organization" value={data.organization} onChange={(e) => setData('organization', e.target.value)} className="input input-bordered w-full" placeholder="Nama organisasi/instansi" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Subjek</label>
                    <input type="text" name="subject" value={data.subject} onChange={(e) => setData('subject', e.target.value)} className="input input-bordered w-full" placeholder="Subjek pesan" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Pesan *</label>
                  <textarea name="message" value={data.message} onChange={(e) => setData('message', e.target.value)} required className="textarea textarea-bordered w-full" rows={6} placeholder="Tuliskan pesan Anda di sini..." />
                </div>
                <button type="submit" className="btn btn-primary w-full">
                  Kirim Pesan
                  <Send className="ml-2 h-4 w-4" />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mt-16">
          <iframe className='rounded-xl text-center w-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2996083016747!2d106.8056774!3d-6.2241694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f14e1e509b95%3A0xd5ad687eede84a66!2sJl.%20Jenderal%20Sudirman%20No.123%2C%20RT.1%2FRW.3%2C%20Gelora%2C%20Kecamatan%20Tanah%20Abang%2C%20Kota%20Jakarta%20Pusat%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2010270!5e0!3m2!1sen!2sid!4v1752665682768!5m2!1sen!2sid" width="400" height="400" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">

          </iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
