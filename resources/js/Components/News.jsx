import React from 'react';
import { Calendar, ArrowRight, Briefcase, Users, Award } from 'lucide-react';
import { Link } from '@inertiajs/react';

const News = ({newsItems}) => {
 
  const getCategoryColor = (category) => {
    switch (category) {
      case 'Karir':
        return 'bg-blue-100 text-blue-800';
      case 'Event':
        return 'bg-green-100 text-green-800';
      case 'Penghargaan':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section id="news" className="py-20 lg:px-12 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Berita & Update Terbaru
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ikuti perkembangan terbaru CPSI, mulai dari lowongan kerja, kegiatan organisasi, hingga pencapaian dan penghargaan yang kami raih
          </p>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {newsItems.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={`/storage/${item.image}`}
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(item.category.name)}`}>
                    {item.category.name}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  {item.date}
                </div>

                <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {item.description}
                </p>
                <Link
                  href={`/news/${item.id}`}
                  className="inline-flex items-center text-primary font-medium text-sm hover:text-primary-dark transition-all group"
                >
                  Baca Selengkapnya
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link
            href={route('allNews')}
            className="inline-flex items-center justify-center bg-primary text-white px-8 py-3 text-lg font-semibold rounded-lg hover:bg-primary-dark transition-colors"
          >
            Lihat Semua Berita
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default News;
