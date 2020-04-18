<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Prescription extends Model
{
  protected $primaryKey = 'prescription_id';
  protected $fillable = ['prescription_code','prescription_p_id','prescription_doc_id', 'prescription_history','prescription_note','prescription_date'];
}
