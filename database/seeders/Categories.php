<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class Categories extends Seeder
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
            'name' => 'Meyve, Sebze',
            'created_at' => now(),
            'updated_at' => now(),
          ],
          [
            'name' => 'Et,Tavuk,Balık',
            'created_at' => now(),
            'updated_at' => now(),
          ],
          [
            'name' => 'Atıştırmalıklar',
            'created_at' => now(),
            'updated_at' => now(),
          ],
          [
            'name' => 'İçecekler',
            'created_at' => now(),
            'updated_at' => now(),
          ],



        ]);
    }
}
