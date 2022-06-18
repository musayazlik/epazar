<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Home', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/urunler', function () {
    return Inertia::render('Urunler');
})->middleware(['auth', 'verified'])->name('urunler');

Route::get('/urunler/create', function () {
  return Inertia::render('urunCreate');
})->middleware(['auth', 'verified'])->name('urunCreate');

Route::get('/siparisler', function () {
    return Inertia::render('Siparisler');
})->middleware(['auth', 'verified'])->name('siparisler');

Route::get('/kategoriler', function () {
    return Inertia::render('Kategoriler');
})->middleware(['auth', 'verified'])->name('kategoriler');

Route::get('/kategori/create', function () {
  return Inertia::render('kategoriCreate');
})->middleware(['auth', 'verified'])->name('kategoriCreate');

require __DIR__.'/auth.php';
