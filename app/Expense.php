<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Expense extends Model
{
  protected $table='expenses';
  protected $primaryKey='exp_id';
  protected $fillable=['exp_cat_id','exp_details','exp_amount','exp_date'];
}
