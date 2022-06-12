<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Regions extends Model
{

  use HasFactory;
  public $table = 'regions';
  public $timestamps = false;
  public $primaryKey = 'id';


  public function stores(): \Illuminate\Database\Eloquent\Relations\HasMany
  {
    return $this->hasMany(Stores::class, 'region_id');
  }
}
