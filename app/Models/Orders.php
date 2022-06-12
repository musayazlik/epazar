<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Orders extends Model
{
    protected $table = 'orders';
    protected $fillable = ['user_name','name', 'email', 'total', 'products', 'created_at', 'updated_at'];

/*    public function user()
    {
        return $this->belongsTo('App\Models\Users');
    }

    public function products()
    {
        return $this->belongsToMany('App\Models\Products')->withPivot('quantity', 'price');
    }*/
}
