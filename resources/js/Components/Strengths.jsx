import React from 'react';
import { Award, Users, Globe, Lightbulb, Target, Zap } from 'lucide-react';

const Strengths = () => {
  const strengths = [
    {
      icon: Award,
      title: "Expertise Terpercaya",
      description: "Tim ahli berpengalaman dengan track record yang solid dalam riset kebijakan dan konsultasi sektor publik.",
      stat: "15+ Tahun",
      statLabel: "Pengalaman"
    },
    {
      icon: Globe,
      title: "Jaringan Strategis",
      description: "Kemitraan yang kuat dengan institusi pemerintah, akademisi, dan organisasi internasional.",
      stat: "50+",
      statLabel: "Partner"
    },
    {
      icon: Lightbulb,
      title: "Pendekatan Inovatif",
      description: "Metodologi riset terdepan dan solusi kreatif yang disesuaikan dengan konteks lokal Indonesia.",
      stat: "100+",
      statLabel: "Inovasi"
    },
    {
      icon: Target,
      title: "Hasil Terukur",
      description: "Komitmen pada deliverable yang jelas, timeline yang tepat, dan impact yang dapat diukur.",
      stat: "95%",
      statLabel: "Success Rate"
    },
    {
      icon: Users,
      title: "Tim Multidisiplin",
      description: "Kolaborasi lintas keahlian dari berbagai bidang untuk solusi yang komprehensif.",
      stat: "25+",
      statLabel: "Experts"
    },
    {
      icon: Zap,
      title: "Adaptasi Cepat",
      description: "Kemampuan beradaptasi dengan perubahan dinamika kebijakan dan kebutuhan klien.",
      stat: "24/7",
      statLabel: "Support"
    }
  ];

  return (
    <section className="py-20 lg:px-16 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Mengapa Memilih <span className="text-primary">CPSI</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Keunggulan kompetitif yang menjadikan CPSI sebagai mitra terpercaya dalam transformasi sektor publik.
          </p>
        </div>

        {/* Strength Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {strengths.map((strength, index) => {
            const Icon = strength.icon;
            return (
              <div
                key={index}
                className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-10 w-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-accent text-white text-xs font-bold px-2 py-1 rounded-full">
                    {strength.stat}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">
                  {strength.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {strength.description}
                </p>
                <div className="text-sm text-accent font-semibold">
                  {strength.statLabel}
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Dipercaya oleh Berbagai Institusi
            </h3>
            <p className="text-gray-600">
              Partner strategis dalam transformasi sektor publik Indonesia
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {[
              { code: 'GOVT', label: 'Kementerian' },
              { code: 'PEMDA', label: 'Pemerintah Daerah' },
              { code: 'UNIV', label: 'Universitas' },
              { code: 'INTL', label: 'Organisasi Internasional' },
            ].map((item, idx) => (
              <div
                key={idx}
                className="text-center opacity-60 hover:opacity-100 transition-opacity duration-300"
              >
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-sm font-bold text-gray-600">{item.code}</span>
                </div>
                <span className="text-xs text-gray-500">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Strengths;
