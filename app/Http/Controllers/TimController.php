<?php

namespace App\Http\Controllers;

use App\Models\Tim;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TimController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Tentang/Tim/Index', [
            'tim' => Tim::all(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Tentang/Tim/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string',
            'jabatan' => 'required|string',
            'biografi' => 'nullable',
            'foto' => 'nullable|image',
        ]);

        $path = $request->file('foto')->store('fotos', 'public');

        Tim::create([
            'name' => $validated['name'],
            'jabatan' => $validated['jabatan'],
            'biografi' => $validated['biografi'],
            'foto' => $path,
            'status' => '1',
        ]);

        return redirect()->route('tim.index')->with('success', 'Data berhasil ditambahkan!');
    }

    /**
     * Display the specified resource.
     */
    public function show(Tim $tim)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Tim $tim)
    {
        return Inertia::render('Tentang/Tim/Edit', [
            'anggotaTim' => $tim,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Tim $tim)
    {
        $validated = $request->validate([
            'name' => 'required|string',
            'jabatan' => 'required|string',
            'biografi' => 'nullable',
            'foto' => 'nullable|image',
            'status' => 'required'
        ]);

        // Update thumbnail jika ada file baru
        if ($request->hasFile('foto')) {
            $path = $request->file('foto')->store('fotos', 'public');
            $tim->foto = $path;
        }

        $tim->update([
            'name' => $validated['name'],
            'jabatan' => $validated['jabatan'],
            'biografi' => $validated['biografi'],
            'status' => $validated['status'],
        ]);

        $tim->save();

        return redirect()->route('tim.index')->with('success', 'Data berhasil diubah!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Tim $tim)
    {
        //
    }
}
