<?php

namespace App\Http\Controllers;

use App\Models\KontakLokasi;
use Illuminate\Http\Request;
use Inertia\Inertia;


class KontakLokasiController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('KontakLokasi/Index', [
            'kontakLokasi' => KontakLokasi::first(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'phone' => 'required|string',
            'email' => 'required|string',
            'address' => 'required|string',
            'jam_oprasional' => 'required|string',
        ]);


        $kontak_lokasi = KontakLokasi::first();


        if ($kontak_lokasi) {
            $kontak_lokasi->update($validated);
        } else {
            KontakLokasi::create($validated);
        }

        return redirect()->route('kontak_lokasi.index')->with('success', 'Data berhasil disimpan');
    }

    /**
     * Display the specified resource.
     */
    public function show(KontakLokasi $kontakLokasi)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(KontakLokasi $kontakLokasi)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, KontakLokasi $kontakLokasi)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(KontakLokasi $kontakLokasi)
    {
        //
    }
}
