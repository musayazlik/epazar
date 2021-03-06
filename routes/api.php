<?php

use App\Http\Controllers\CategoriesController;
use App\Http\Controllers\OrdersController;
use App\Http\Controllers\ProductsController;
use App\Http\Controllers\RegionsController;
use App\Http\Controllers\StoresController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/products', [ProductsController::class, 'index']);
Route::post('/products', [ProductsController::class, 'store']);
Route::delete('/products/{id}', [ProductsController::class, 'destroy']);
Route::get('/categories', [CategoriesController::class, 'index']);
Route::post('/categories', [CategoriesController::class, 'create']);
Route::delete('/categories/{id}', [CategoriesController::class, 'destroy']);
Route::get('/stores', [StoresController::class, 'index']);
Route::post('/orders', [OrdersController::class, 'create']);
Route::get('/orders', [OrdersController::class, 'index']);
Route::get('/regions', [RegionsController::class, 'index']);

