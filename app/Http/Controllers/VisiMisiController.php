<?php

namespace App\Http\Controllers;

use App\Models\VisiMisi;
use Illuminate\Http\Request;
use Inertia\Inertia;

class VisiMisiController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Tentang/VisiMisi/Index', [
            'visiMisi' => VisiMisi::first()
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        $validated = $request->validate([
            'visi' => 'required|string',
            'misi' => 'required|string',
        ]);


        $visiMisi = VisiMisi::first();


        if ($visiMisi) {
            $visiMisi->update($validated);
        } else {
            VisiMisi::create($validated);
        }

        return redirect()->route('visi_misi.index')->with('success', 'Visi Misi section saved!');
    }
}
