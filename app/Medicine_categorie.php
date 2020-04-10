<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Medicine_categorie extends Model
{
  protected $primaryKey='med_cat_id';
  protected $fillable=['med_cat_name','med_cat_details'];
}
