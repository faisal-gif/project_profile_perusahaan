<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\NewsController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\HeroController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\KerjasamaController;
use App\Http\Controllers\KontakLokasiController;
use App\Http\Controllers\LayananController;
use App\Http\Controllers\MessageController;
use App\Http\Controllers\TimController;
use App\Http\Controllers\VisiMisiController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [HomeController::class, 'index'])->name('home');

Route::get('/allNews', [HomeController::class, 'allNews'])->name('allNews');
Route::get('/news/{id}', [HomeController::class, 'newsDetail'])->name('newsDetail');
Route::get('/about', [HomeController::class, 'about'])->name('about');
Route::get('/services', [HomeController::class, 'services'])->name('services');
Route::get('/contact', [HomeController::class, 'contact'])->name('contact');
Route::post('/send', [HomeController::class, 'sendMessage'])->name('message.send');


Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');



Route::middleware('auth')->group(function () {
    Route::prefix('admin')->group(function () {
        Route::resource('category', CategoryController::class);
        Route::resource('news', NewsController::class);
        Route::resource('kerjasama', KerjasamaController::class);
        Route::resource('message', MessageController::class);
        Route::resource('hero', HeroController::class);
        Route::resource('visi_misi', VisiMisiController::class);
        Route::resource('tim', TimController::class);
        Route::resource('layanan', LayananController::class);
        Route::resource('kontak_lokasi', KontakLokasiController::class);
    });

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
