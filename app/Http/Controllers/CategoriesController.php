<?php

namespace App\Http\Controllers;

use App\Models\Categories;
use Illuminate\Http\Request;

class CategoriesController extends Controller
{
  /**
   * Display a listing of the resource.
   *
   * @return \Illuminate\Http\JsonResponse
   */
  public function index()
  {
    $categories = Categories::all();
    return response()->json($categories);
  }

  /**
   * Show the form for creating a new resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function create(Request $request)
  {
    $category = new Categories();
    $category->name = $request->name;
    $category->save();
    return response()->json(['success' => true]);
  }

  /**
   * Store a newly created resource in storage.
   *
   * @param \Illuminate\Http\Request $request
   * @return \Illuminate\Http\Response
   */
  public function store(Request $request)
  {
    //
  }

  /**
   * Display the specified resource.
   *
   * @param \App\Models\Categories $categories
   * @return \Illuminate\Http\Response
   */
  public function show(Categories $categories)
  {
    //
  }

  /**
   * Show the form for editing the specified resource.
   *
   * @param \App\Models\Categories $categories
   * @return \Illuminate\Http\Response
   */
  public function edit(Categories $categories)
  {
    //
  }

  /**
   * Update the specified resource in storage.
   *
   * @param \Illuminate\Http\Request $request
   * @param \App\Models\Categories $categories
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, Categories $categories)
  {
    //
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param \App\Models\Categories $categories
   * @return \Illuminate\Http\JsonResponse
   */
  public function destroy($id)
  {

    $category = Categories::find($id);
    $category->delete();
    return response()->json($category);
  }
}
