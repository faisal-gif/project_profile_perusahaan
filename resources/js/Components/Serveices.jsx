import React from 'react';
import * as Icons from 'lucide-react';

const Services = ({services}) => {
 
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Fokus Area <span className="text-primary">Layanan</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Lima pilar utama layanan CPSI yang dirancang untuk memberikan solusi komprehensif bagi transformasi sektor publik.
          </p>
        </div>

        {/* Services Grid */}
        <div className="py-20 lg:px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
          
            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl p-6 shadow-lg group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 text-white`}>
                  {Icons[service.icon] ? React.createElement(Icons[service.icon], { size: 32 }) : null}
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-300 mb-2">
                  {service.name}
                </h3>
                 <div className=" prose prose-sm max-w-none prose-li:marker:text-cyan-800/40" dangerouslySetInnerHTML={{ __html: service.description }}  />
                <a
                  href="#"
                  className="w-full inline-flex justify-center items-center border border-primary text-primary font-medium py-2 px-4 rounded-lg hover:bg-primary hover:text-white transition-all duration-300"
                >
                  Pelajari Lebih Lanjut
                  <Icons.ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center ">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Siap Mentransformasi Organisasi Anda?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Konsultasikan kebutuhan organisasi Anda dengan tim ahli CPSI. Kami siap membantu merancang solusi yang tepat untuk tantangan spesifik Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#"
                className="inline-flex items-center justify-center bg-primary text-white font-semibold py-3 px-6 rounded-lg hover:bg-primary/90 transition duration-300"
              >
                Konsultasi Gratis
                
                <Icons.ChevronRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center border border-primary text-primary font-semibold py-3 px-6 rounded-lg hover:bg-primary hover:text-white transition duration-300"
              >
                Download Brochure
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
