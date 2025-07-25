import React from 'react';
import { Head, Link } from '@inertiajs/react';
import { Calendar, ArrowLeft, Briefcase, Users, Award, Globe, Building, Trophy, Share2, BookmarkPlus, Calendar1, Newspaper } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';



const NewsDetail = ({ news, latestNews,categorys }) => {

  const article = news || '';

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Karir':
        return 'bg-blue-200 text-blue-800';
      case 'Event':
        return 'bg-green-200 text-green-800';
      case 'Penghargaan':
        return 'bg-yellow-200 text-yellow-800';
      default:
        return 'bg-gray-200 text-gray-800';
    }
  };

  if (!article) {
    return (
      <>
       <Head title="Artikel Tidak Ditemukan" />
      <div className="min-h-screen bg-base-100">
        <Navigation />
        <main className="pt-20">
          <div className="container mx-auto px-6 py-16 text-center">
            <h1 className="text-4xl font-bold text-base-content mb-4">Artikel Tidak Ditemukan</h1>
            <p className="text-base-content/70 mb-8">Maaf, artikel yang Anda cari tidak dapat ditemukan.</p>
            <Link to="/news" className="btn btn-outline">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Kembali ke Berita
            </Link>
          </div>
        </main>
        <Footer />
      </div>
      </>
    );
  }

  return (
    <>
    <Head title={article.title} />
    <div className="min-h-screen bg-base-100">
      <Navigation />
      <main className="pt-20">

        <article className="py-8">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="mb-8">
                  <div className="flex flex-wrap items-center gap-4 mb-6">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(article.category.name)}`}>{article.category.name}</span>
                    <div className="flex items-center text-sm text-base-content/70">
                      <Calendar className="h-4 w-4 mr-2" />
                      {article.date}
                    </div>
                    {/* <div className="text-sm text-base-content/70">{article.readTime} baca</div>
                    <div className="text-sm text-base-content/70">Oleh {article.author}</div> */}
                  </div>
                  <h1 className="text-4xl font-bold text-base-content mb-6 leading-tight">{article.title}</h1>
                  <p className="text-xl text-base-content/70 mb-8 leading-relaxed">{article.description}</p>
                  <div className="flex flex-wrap gap-3 mb-8">
                    <button className="btn btn-outline btn-sm"><Share2 className="h-4 w-4 mr-2" />Bagikan</button>
                   </div>
                </div>
                <div className="mb-8">
                  <img src={`/storage/${article.image}`} alt={article.title} className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg" />
                </div>
                <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: article.content }} />
                <div className="mt-12 pt-8 border-t border-base-300">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                      <p className="text-sm font-medium text-base-content mb-2">Bagikan artikel ini:</p>
                      <div className="flex gap-2">
                         {/* Share via WhatsApp */}
                            <a
                              href={`https://wa.me/?text=${encodeURIComponent(article.title + ' ' + window.location.href)}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn btn-outline btn-sm"
                            >
                              WhatsApp
                            </a>
                            {/* Share via Facebook */}
                            <a
                              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn btn-outline btn-sm"
                            >
                              Facebook
                            </a>
                            {/* Share via X (Twitter) */}
                            <a
                              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(article.title)}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn btn-outline btn-sm"
                            >
                              X
                            </a>
                            {/* Share via LinkedIn */}
                            <a
                              href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(article.title)}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn btn-outline btn-sm"
                            >
                              LinkedIn
                            </a>
                      </div>
                    </div>
                    <div className="text-sm text-base-content/70">
                      Diterbitkan oleh <strong>{article.author}</strong>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-1 space-y-6">

                <div className="bg-base-100 border rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4">Kategori</h3>
                  <div className="space-y-2">
                    {categorys.map((category) => {
                      return (
                        <Link
                          key={category.id}
                          href={category.name !== 'Semua' ? `/allNews?category_id=${category.id}` : `/allNews`}
                          className="flex justify-between items-center p-2 rounded hover:bg-base-200"
                        >
                          <span className="text-sm text-gray-700">{category.name}</span>
                          <span className="badge badge-soft text-xs">{category.count_news}</span>
                        </Link>
                      );
                    })}
                  </div>
                </div>

                <div className="bg-base-100 border rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4">Berita Terbaru</h3>
                  <div className="space-y-4">
                    {latestNews.map((item) => (
                      <Link key={item.id} href={`/news/${item.id}`} className="flex gap-4 items-start p-2 rounded hover:bg-base-200">
                        <div className="bg-blue-800/10 rounded p-2">
                          <Newspaper className='h-6 w-6' />
                        </div>
                        <div className="text-sm">
                          <h4 className="font-medium mb-1 line-clamp-2">{item.title}</h4>
                          <div className="flex items-center gap-1 text-xs text-gray-500">
                            <Calendar1 className="h-3 w-3" /> {item.date}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
    </>
  );
};

export default NewsDetail;
