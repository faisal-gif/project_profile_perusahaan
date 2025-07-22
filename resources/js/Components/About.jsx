import React from 'react';
import { Target, Eye, Award } from 'lucide-react';

const About = ({visimisi}) => {
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
               <div className="text-gray-600 leading-relaxed text-center prose prose-lg max-w-none prose-li:marker:text-cyan-800/40" dangerouslySetInnerHTML={{ __html: visimisi.visi }}  />
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
               <div className="text-gray-600 leading-relaxed prose prose-lg max-w-none prose-li:marker:text-cyan-800/40" dangerouslySetInnerHTML={{ __html: visimisi.misi }}  />
            
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
