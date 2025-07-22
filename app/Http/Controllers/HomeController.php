<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Hero;
use App\Models\Kerjasama;
use App\Models\KontakLokasi;
use App\Models\Layanan;
use App\Models\Message;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\News;
use App\Models\Tim;
use App\Models\VisiMisi;

class HomeController extends Controller
{
    //

    public function index()
    {

        $hero = Hero::first();

        $visiMisi = VisiMisi::first();

        $layanan = Layanan::select('id', 'name', 'description', 'icon', 'status')
            ->where('status', '1')
            ->get();

        $news = News::with('category:id,name')
            ->orderBy('created_at', 'desc')
            ->limit(3)
            ->get(['id', 'title', 'description', 'created_at as date', 'category_id', 'image']);

        $kerjasama = Kerjasama::select('id', 'name', 'logo', 'status')->where('status', '1')->get();

        $kontak = KontakLokasi::first();


        return Inertia::render('Welcome', ['news' => $news, 'kerjasama' => $kerjasama, 'layanan' => $layanan, 'visiMisi' => $visiMisi, 'kontak' => $kontak, 'heroData' => $hero]);
    }

    public function allNews(Request $request)
    {
        $categoryId = $request->query('category_id');

        $query = News::with('category:id,name')
            ->orderBy('created_at', 'desc');

        if ($categoryId) {
            $query->where('category_id', $categoryId);
        }

        $news = $query->get(['id', 'title', 'description', 'created_at as date', 'category_id', 'image'])
            ->map(function ($item) {
                $item->date = \Carbon\Carbon::parse($item->date)->format('d M Y');
                return $item;
            });

        $category = Category::withCount('news')->get(['id', 'name']);
        // Tambahkan kategori "Semua" untuk sidebar
        $allCount = News::count();
        $category->prepend([
            'id' => null,
            'name' => 'Semua',
            'count_news' => $allCount,
        ]);
        // Rename news_count to count_news untuk sidebar
        $category = $category->map(function ($cat) {
            return [
                'id' => $cat['id'],
                'name' => $cat['name'],
                'count_news' => $cat['count_news'] ?? $cat['news_count'],
            ];
        });

        return Inertia::render('AllNews', ['news' => $news, 'categorys' => $category]);
    }

    public function newsDetail($id)
    {
        $latestNews = News::with('category:id,name')
            ->orderBy('created_at', 'desc')
            ->limit(3)
            ->get(['id', 'title', 'description', 'created_at as date', 'category_id', 'image'])
            ->map(function ($item) {
                $item->date = \Carbon\Carbon::parse($item->date)->format('d M Y');
                return $item;
            });

        $category = Category::withCount('news')->get(['id', 'name']);
        // Tambahkan kategori "Semua" untuk sidebar
        $allCount = News::count();
        $category->prepend([
            'id' => null,
            'name' => 'Semua',
            'count_news' => $allCount,
        ]);
        // Rename news_count to count_news untuk sidebar
        $category = $category->map(function ($cat) {
            return [
                'id' => $cat['id'],
                'name' => $cat['name'],
                'count_news' => $cat['count_news'] ?? $cat['news_count'],
            ];
        });

        $news = News::with(['category:id,name', 'user:id,name'])
            ->where('id', $id)
            ->first(['id', 'title', 'description', 'content', 'created_at as date', 'category_id', 'image', 'author_id']);

        if ($news) {
            $news->date = \Carbon\Carbon::parse($news->date)->format('d M Y');
        }

        $news->author = $news->user->name;

        return Inertia::render('NewsDetail', ['news' => $news, 'latestNews' => $latestNews, 'categorys' => $category]);
    }

    public function about()
    {
        $visiMisi = VisiMisi::first();
        $team = Tim::all();

        return Inertia::render('About', [
            'visiMisi' => $visiMisi,
            'team' => $team,
        ]);
    }

    public function contact()
    {
        return Inertia::render('Contact', [
            'kontak' => KontakLokasi::first(),
        ]);
    }

    public function services()
    {
        return Inertia::render('Services', [
            'services' => Layanan::all(),
        ]);
    }

    public function sendMessage(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'organization' => 'nullable|string|max:255',
            'subject' => 'nullable|string|max:255',
            'message' => 'required|string',
        ]);

        Message::create([
            'name' => $request->name,
            'email' => $request->email,
            'instansi' => $request->organization,
            'subject' => $request->subject,
            'message' => $request->message,
        ]);

        return redirect()->back()->with('success', 'Terima kasih atas pesan Anda. Tim kami akan segera menghubungi Anda.');
    }
}
