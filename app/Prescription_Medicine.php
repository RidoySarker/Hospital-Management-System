<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Prescription_Medicine extends Model
{
  protected $table='prescription_medicines';
  protected $primaryKey = 'prescription_m_id';
  protected $fillable = ['prescription_code','prescription_id','prescription_medicine_id', 'prescription_med_dosage','prescription_med_frequency','prescription_med_days','prescription_med_ins'];
}
