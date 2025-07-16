import React from 'react';
import { Target, Eye, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 lg:px-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Sekilas Tentang <span className="text-primary">CPSI</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Didirikan dengan komitmen untuk menciptakan perubahan positif dalam sektor publik melalui riset, inovasi, dan kolaborasi strategis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Vision */}
          <div className="border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg rounded-xl bg-white">
            <div className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                  <Eye className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Visi</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Menjadi pusat unggulan inovasi sektor publik yang menghasilkan solusi berbasis riset untuk transformasi tata kelola pemerintahan yang berkelanjutan, inklusif, dan berorientasi pada kepentingan masyarakat.
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="border-2 border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-lg rounded-xl bg-white">
            <div className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mr-4">
                  <Target className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Misi</h3>
              </div>
              <ul className="text-gray-600 space-y-3">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Menghasilkan riset kebijakan publik yang berkualitas tinggi
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Membangun kapasitas sumber daya manusia sektor publik
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Mendorong adopsi teknologi digital dalam pemerintahan
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Mempromosikan tata kelola yang berkelanjutan dan inklusif
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 hover:bg-blue-50 rounded-xl transition-all duration-300">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-primary" />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Excellence</h4>
            <p className="text-gray-600 text-sm">Komitmen pada standar kualitas tertinggi dalam setiap aspek pekerjaan</p>
          </div>

          <div className="text-center p-6 hover:bg-green-50 rounded-xl transition-all duration-300">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="h-8 w-8 text-accent" />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Innovation</h4>
            <p className="text-gray-600 text-sm">Mendorong pemikiran kreatif dan solusi inovatif untuk tantangan kompleks</p>
          </div>

          <div className="text-center p-6 hover:bg-blue-50 rounded-xl transition-all duration-300">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Eye className="h-8 w-8 text-primary" />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Integrity</h4>
            <p className="text-gray-600 text-sm">Menjunjung tinggi transparansi, akuntabilitas, dan etika profesional</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
