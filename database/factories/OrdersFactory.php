<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Orders>
 */
class OrdersFactory extends Factory
{
  /**
   * Define the model's default state.
   *
   * @return array<string, mixed>
   */
  public function definition()
  {
    return [
      'name' => $this->faker->name(255),
      'email' => $this->faker->unique()->safeEmail(255),
      'address' => $this->faker->address(),
      'total' => $this->faker->randomFloat(2, 0, 5000),
      'products' => $this->faker->randomElement([[
        'id' => $this->faker->numberBetween(1, 10),
      ],
      [
        'id' => $this->faker->numberBetween(1, 10),
      ],
      [
        'id' => $this->faker->numberBetween(1, 10),
      ],
      ]),
      'status' => $this->faker->randomElement(['pending', 'processing', 'completed', 'cancelled']),
      'created_at' => now(),
      'updated_at' => now(),
    ];
  }
}
