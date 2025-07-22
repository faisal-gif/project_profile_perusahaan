<?php

namespace App\Http\Controllers;

use App\Models\Hero;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HeroController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Hero/Index', [
            'hero' => Hero::first(),
        ]);
    }


    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'image' => 'nullable|image|mimes:jpeg,png,jpg|max:2048',
        ]);


        if ($request->hasFile('image')) {
            $validated['image'] = $request->file('image')->store('hero', 'public');
        }

        $hero = Hero::first();

        if (empty($validated['image']) && $hero) {
            $validated['image'] = $hero->image;
        }

        if ($hero) {
            $hero->update($validated);
        } else {
            Hero::create($validated);
        }

        return redirect()->route('hero.index')->with('success', 'Hero section saved!');
    }
}
