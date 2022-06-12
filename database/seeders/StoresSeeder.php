<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class StoresSeeder extends Seeder
{
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run()
  {
    $faker = \Faker\Factory::create();

    DB::table("stores")->insert([
      [
        "name" => "Odunpazarı Mağaza 1",
        "region_id" => 1,
        "created_at" => now(),
        "updated_at" => now(),
      ],
      [
        "name" => "Odunpazarı Mağaza 2",
        "region_id" => 1,
        "created_at" => now(),
        "updated_at" => now(),
      ],
      [
        "name" => "Odunpazarı Mağaza 3",
        "region_id" => 1,
        "created_at" => now(),
        "updated_at" => now(),
      ],
      [
        "name" => "Odunpazarı Mağaza 4",
        "region_id" => 1,
        "created_at" => now(),
        "updated_at" => now(),
      ],
      [
        "name" => "Tepebaşı Mağaza 1",
        "region_id" => 2,
        "created_at" => now(),
        "updated_at" => now(),
      ],
            [
        "name" => "Tepebaşı Mağaza 2",
        "region_id" => 2,
        "created_at" => now(),
        "updated_at" => now(),
      ],


    ]);
  }
}
