<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class OrderProductSeeder extends Seeder
{
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run()
  {
    DB::table("order_product")->insert([
      [
        "order_id" => 1,
        "product_id" => 1,
        "quantity" => 1,
        "price" => 10,
        "created_at" => now(),
        "updated_at" => now(),
      ],
      [
        "order_id" => 1,
        "product_id" => 2,
        "quantity" => 2,
        "price" => 20,
        "created_at" => now(),
        "updated_at" => now(),
      ],
      [
        "order_id" => 2,
        "product_id" => 1,
        "quantity" => 1,
        "price" => 10,
        "created_at" => now(),
        "updated_at" => now(),
      ],
      [
        "order_id" => 2,
        "product_id" => 2,
        "quantity" => 2,
        "price" => 20,
        "created_at" => now(),
        "updated_at" => now(),
      ],
    ]);
  }
}
