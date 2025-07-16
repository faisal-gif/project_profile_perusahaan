<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\News;
use Illuminate\Http\Request;
use Inertia\Inertia;

class NewsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        // Ambil nilai pencarian dari request
        $search =  $request->query('search');

        $newsQuery = News::with('category')
            ->when($search, fn($q) => $q->where('title', 'like', '%' . $search . '%'))
            ->orderBy('created_at', 'desc');


        $news = $newsQuery->paginate(10)->withQueryString()->through(function ($news) {
            return [
                'id' => $news->id,
                'title' => $news->title,
                'category' => $news->category->name,
                'thumbnail' => $news->image,
                'description' => $news->description,
                'datePub' => $news->datePublished->format('d M Y'),
                'created_at' => $news->created_at->format('d M Y'),
            ];
        });
        return Inertia::render('News/Index', [
            'news' => $news,
            'filters' => [
                'search' => $search,
            ],
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('News/Create', [
            'categories' => Category::select('id', 'name')->get()
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        $request->validate([
            'thumbnail' => 'required|image|max:2048',
            'title' => 'required|string|max:255',
            'category_id' => 'required|exists:categories,id',
            'description' => 'required|string',
            'content' => 'required|string',
            'tags' => 'nullable|array'
        ]);

        $path = $request->file('thumbnail')->store('thumbnails', 'public');


        // Simpan berita ke database
        $news = News::create([
            'image' => $path,
            'title' => $request->title,
            'category_id' => $request->category_id,
            'description' => $request->description,
            'content' => $request->content,
            'author_id' => auth()->id(), // jika berita terkait user login
            'datePublished' => now(),
            'status' => 1,
        ]);
        return redirect()->route('news.index')->with('success', 'Berita berhasil dibuat!');
    }

    /**
     * Display the specified resource.
     */
    public function show(News $news)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(News $news)
    {
        return Inertia::render('News/Edit', [
            'news' => $news,
            'categories' => Category::select('id', 'name')->get(),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, News $news)
    {
        $request->validate([
            'thumbnail' => 'nullable|image|max:2048',
            'title' => 'required|string|max:255',
            'category_id' => 'required|exists:categories,id',
            'description' => 'required|string',
            'content' => 'required|string',
        ]);

        // Update thumbnail jika ada file baru
        if ($request->hasFile('thumbnail')) {
            $path = $request->file('thumbnail')->store('thumbnails', 'public');
            $news->image = $path;
        }

        $news->update([
            'title' => $request->title,
            'category_id' => $request->category_id,
            'description' => $request->description,
            'content' => $request->content,
            'author_id' => auth()->id(), // jika berita terkait user login
            'datePublished' => now(),
            'status' => 1,
        ]);

        $news->save();

        return redirect()->route('news.index')->with('success', 'Berita berhasil diperbarui!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(News $news)
    {
        //
    }
}
