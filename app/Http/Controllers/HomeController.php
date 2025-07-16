<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\News;

class HomeController extends Controller
{
    //

    public function index()
    {
        $news = News::with('category:id,name')
            ->orderBy('created_at', 'desc')
            ->limit(3)
            ->get(['id', 'title', 'description', 'created_at as date', 'category_id', 'image']);

        return Inertia::render('Welcome', ['news' => $news]);
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


        $news = News::with('category:id,name')
            ->where('id', $id)
            ->first(['id', 'title', 'description', 'content', 'created_at as date', 'category_id', 'image']);

        if ($news) {
            $news->date = \Carbon\Carbon::parse($news->date)->format('d M Y');
        }
        return Inertia::render('NewsDetail', ['news' => $news, 'latestNews' => $latestNews]);
    }


    public function about()
    {
        return Inertia::render('About');
    }

    public function contact()
    {
        return Inertia::render('Contact');
    }

    public function services()
    {
        return Inertia::render('Services');
    }
}
