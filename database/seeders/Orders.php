<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class Orders extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      DB::table('categories')->insert([
        [
          'name' => 'Ahmet Topal',
          'email' => 'ahmet@gmail.com',
          'address' => 'İstanbul',
          'total' => '100',
          'products' => '{"1":{"id":"1","name":"Meyve","price":"10","quantity":"1"},"2":{"id":"2","name":"Sebze","price":"20","quantity":"2"}}',
          'status' => 'completed',
          'created_at' => now(),
          'updated_at' => now(),
        ],
        [
          'name' => 'Ali Topal',
          'email' => 'alitopal@gmail.com',
          'address' => 'Ankara',
          'total' => '100',
          'products' => '{"1":{"id":"1","name":"Meyve","price":"10","quantity":"1"},"2":{"id":"2","name":"Sebze","price":"20","quantity":"2"}}',
          'status' => 'completed',
          'created_at' => now(),
          'updated_at' => now(),
        ],




      ]);
    }
}
