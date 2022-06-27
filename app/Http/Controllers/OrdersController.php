<?php

namespace App\Http\Controllers;

use App\Models\Orders;
use http\Env;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class OrdersController extends Controller
{
  /**
   * Display a listing of the resource.
   *
   * @return \Illuminate\Http\JsonResponse
   */
  public function index()
  {
    $orders = Orders::all();
    return response()->json($orders);
  }

  /**
   * Show the form for creating a new resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function create(Request $request)
  {

    $order = new Orders();
    $order->name = $request->name;
    $order->email = $request->email;
    $order->message = $request->message;
    $order->region_id = (int)$request->region_id;
    $order->store_id = (int)$request->store_id;
    $order->total = $request->total;
    $order->save();

    $email = $request->email;

    Mail::send("email.test",[], function ($message) use ($email) {
      $message->to($email, "Epazar")->subject("Siparişiniz alındı");
    });

    $adminMail = $_ENV['MAIL_USERNAME'];

    Mail::send("email.admin",[], function ($message) use ($adminMail) {
      $message->to($adminMail, "Epazar")->subject("Yeni sipariş");
    });


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
  }

  /**
   * Display the specified resource.
   *
   * @param \App\Models\Orders $orders
   * @return \Illuminate\Http\Response
   */
  public function show(Orders $orders)
  {
    //
  }

  /**
   * Show the form for editing the specified resource.
   *
   * @param \App\Models\Orders $orders
   * @return \Illuminate\Http\Response
   */
  public function edit(Orders $orders)
  {
    //
  }

  /**
   * Update the specified resource in storage.
   *
   * @param \Illuminate\Http\Request $request
   * @param \App\Models\Orders $orders
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, Orders $orders)
  {
    //
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param \App\Models\Orders $orders
   * @return \Illuminate\Http\Response
   */
  public function destroy(Orders $orders)
  {
    //
  }
}
