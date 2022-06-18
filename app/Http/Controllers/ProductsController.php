<?php

namespace App\Http\Controllers;

use App\Models\Products;
use Illuminate\Http\Request;

class ProductsController extends Controller
{
  /**
   * Display a listing of the resource.
   *
   * @return \Illuminate\Http\JsonResponse
   */
  public function index()
  {
    $products = Products::all();
    return response()->json($products);
  }

  /**
   * Show the form for creating a new resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function create()
  {
    //
  }

  /**
   * Store a newly created resource in storage.
   *
   * @param \Illuminate\Http\Request $request
   * @return \Illuminate\Http\JsonResponse
   */
  public function store(Request $request)

  {


    $request->file('image')->store('storage/images/products');
    $imageName = $request->image->hashName();



    $product = Products::create(
      [
        'title' => $request->title,
        'category' => $request->category_id,
        'price' => $request->price,
        'image' => $imageName,
        'description' => $request->description,
      ]
    );

    return response()->json($product);

  }

  /**
   * Display the specified resource.
   *
   * @param \App\Models\Products $products
   * @return \Illuminate\Http\Response
   */
  public function show(Products $products)
  {
    //
  }

  /**
   * Show the form for editing the specified resource.
   *
   * @param \App\Models\Products $products
   * @return \Illuminate\Http\Response
   */
  public function edit(Products $products)
  {
    //
  }

  /**
   * Update the specified resource in storage.
   *
   * @param \Illuminate\Http\Request $request
   * @param \App\Models\Products $products
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, Products $products)
  {
    //
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param \App\Models\Products $products
   * @return \Illuminate\Http\JsonResponse
   */
  public function destroy($id)
  {

    $product = Products::find($id);
    $product->delete();
    return response()->json($product);

  }
}
