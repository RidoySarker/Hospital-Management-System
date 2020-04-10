<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Medicine extends Model
{
  protected $primaryKey='med_id';
  protected $fillable=['med_cat_id','med_name','med_purchase_price','med_sales_price','med_store_box','med_quantity','med_generic_name','med_company','med_expire_date'];
}
