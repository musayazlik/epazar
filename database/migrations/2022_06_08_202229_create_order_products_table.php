<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    Schema::create('order_products', function (Blueprint $table) {
      $table->increments("id");
      $table->integer("order_id")->unsigned();
      $table->integer("product_id")->unsigned();
      $table->integer("quantity");
      $table->timestamps();
      //$table->foreign("order_id")->references("id")->on("orders")->onDelete("cascade")->onUpdate("cascade");
      //$table->foreign("product_id")->references("id")->on("products")->onDelete("cascade")->onUpdate("cascade");
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down()
  {
    Schema::dropIfExists('order_products');
  }
};
