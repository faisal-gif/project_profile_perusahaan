import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert('Mohon lengkapi semua field yang wajib diisi.');
      return;
    }

    alert('Terima kasih atas pesan Anda. Tim kami akan segera menghubungi Anda.');

    setFormData({
      name: '',
      email: '',
      organization: '',
      subject: '',
      message: ''
    });
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
            {[{
              icon: Phone,
              title: 'Telepon',
              detail: '+62 21 1234 5678',
              bg: 'bg-primary/10',
              iconColor: 'text-primary'
            }, {
              icon: Mail,
              title: 'Email',
              detail: 'info@cpsi.org.id',
              bg: 'bg-accent/10',
              iconColor: 'text-accent'
            }, {
              icon: MapPin,
              title: 'Alamat',
              detail: 'Jl. Sudirman No. 123, Jakarta Pusat 10220, Indonesia',
              bg: 'bg-primary/10',
              iconColor: 'text-primary'
            }, {
              icon: Clock,
              title: 'Jam Operasional',
              detail: 'Senin - Jumat: 08:00 - 17:00\nSabtu: 08:00 - 12:00',
              bg: 'bg-accent/10',
              iconColor: 'text-accent'
            }].map((item, idx) => (
              <div key={idx} className="border-2 p-6 rounded-lg hover:shadow transition-all">
                <div className="flex items-start">
                  <div className={`w-12 h-12 ${item.bg} rounded-lg flex items-center justify-center mr-4`}>
                    <item.icon className={`h-6 w-6 ${item.iconColor}`} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{item.title}</h3>
                    <p className="text-gray-600 whitespace-pre-line">{item.detail}</p>
                  </div>
                </div>
              </div>
            ))}
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
                    <input type="text" name="name" value={formData.name} onChange={handleInputChange} required className="input input-bordered w-full" placeholder="Masukkan nama lengkap" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                    <input type="email" name="email" value={formData.email} onChange={handleInputChange} required className="input input-bordered w-full" placeholder="nama@email.com" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Organisasi</label>
                    <input type="text" name="organization" value={formData.organization} onChange={handleInputChange} className="input input-bordered w-full" placeholder="Nama organisasi/instansi" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Subjek</label>
                    <input type="text" name="subject" value={formData.subject} onChange={handleInputChange} className="input input-bordered w-full" placeholder="Subjek pesan" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Pesan *</label>
                  <textarea name="message" value={formData.message} onChange={handleInputChange} required className="textarea textarea-bordered w-full" rows={6} placeholder="Tuliskan pesan Anda di sini..." />
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
          <div className="bg-gradient-to-br from-primary to-accent p-10 rounded-xl text-center">
            <MapPin size={48} className="text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Lokasi Kantor CPSI</h3>
            <p className="text-gray-600">Jl. Sudirman No. 123, Jakarta Pusat 10220</p>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary mt-4"
            >
              Lihat di Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
