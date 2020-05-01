<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Appointment extends Model
{
    protected $table = 'appointments';
    protected $primaryKey = 'app_id';
    protected $fillable = ['app_p_id', 'app_doc_id', 'app_date', 'app_start', 'app_status'];

    public function validation() 
    {
    	return [
    		'app_p_id'   => 'required',
    		'app_doc_id' => 'required',
    		'app_date'   => 'required',
    		'app_start'  => 'required',
    		'app_status' => 'required',
    	];
    }

    public function message()
    {
    	return [
    		'app_p_id.required'   => 'Patient id is empty',
    		'app_doc_id.required' => 'Doctor name is empty',
    		'app_date.required'   => 'Date is empty',
    		'app_start.required'  => 'Appointment start is empty',
    		'app_status.required' => 'Appointment status is empty',
    	];
    }
}
