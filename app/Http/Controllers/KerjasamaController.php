<?php

namespace App\Http\Controllers;

use App\Models\Kerjasama;
use Illuminate\Http\Request;
use Inertia\Inertia;

class KerjasamaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        return Inertia::render('Kerjasama/Index', [
            'kerjasama' => Kerjasama::all(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Kerjasama/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'logo' => 'required|image|max:2048',
            'status' => 'required',
        ]);

        $path = $request->file('logo')->store('logo', 'public');

        $kerjasama = Kerjasama::create([
            'name' => $request->name,
            'logo' => $path,
            'status' => $request->status,
        ]);
        return redirect()->route('kerjasama.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Kerjasama $kerjasama)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Kerjasama $kerjasama)
    {
        return Inertia::render('Kerjasama/Edit', [
            'kerjasama' => $kerjasama,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Kerjasama $kerjasama)
    {

        $request->validate([
            'logo' => 'nullable|image|max:2048',
            'name' => 'required|string|max:255',
            'status' => 'required',
        ]);

        // Update thumbnail jika ada file baru
        if ($request->hasFile('logo')) {
            $path = $request->file('logo')->store('logo', 'public');
            $kerjasama->logo = $path;
        }

        $kerjasama->update([
            'name' => $request->name,
            'status' => $request->status,
        ]);

        $kerjasama->save();

        return redirect()->route('kerjasama.index')->with('success', 'Lembaga berhasil diperbarui!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Kerjasama $kerjasama)
    {
        //
    }
}
