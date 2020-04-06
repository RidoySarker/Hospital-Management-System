<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Blood_bank extends Model
{
    protected $primaryKey='blood_bag_id';
    protected $fillable = ['blood_bag_name','blood_bag_quantity'];
}
