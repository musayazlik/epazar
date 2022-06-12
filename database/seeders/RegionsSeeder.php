<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RegionsSeeder extends Seeder
{
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run()
  {

     $faker = \Faker\Factory::create();

    DB::table("regions")->insert([
      [
        "name" => "Odunpazarı",
        "created_at" => $faker -> dateTime(),
        "updated_at" => now(),
      ],
      [
        "name" => "Tepebaşı",
        "created_at" => now(),
        "updated_at" => now(),
      ]
    ]);
  }
}
