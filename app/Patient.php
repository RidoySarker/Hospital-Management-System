<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Patient extends Model
{
   protected $primaryKey = 'p_id';
   protected $fillable = ['p_name','p_age',
	'p_address','p_phone','p_sex','p_blood','p_img','p_doc_id'];
}
