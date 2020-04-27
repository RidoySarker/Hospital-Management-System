<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Expense_Categorie extends Model
{
  protected $table='expense_categories';
  protected $primaryKey='exp_cat_id';
  protected $fillable=['exp_cat_name','exp_cat_description'];
}
