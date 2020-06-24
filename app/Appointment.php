<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Haruncpi\LaravelIdGenerator\IdGenerator;

class Appointment extends Model
{
    protected $table = 'appointments';
    protected $primaryKey = 'app_id';
    protected $fillable = ['app_sl','app_p_id', 'app_doc_id', 'app_date', 'app_message', 'app_status'];

    public function validation() 
    {
    	return [ 
    		'app_p_id'   => 'required',
    		'app_doc_id' => 'required',
    		'app_date'   => 'required',
    		'app_status' => 'required',
    	];
    }

    public function message()
    {
    	return [
    		'app_p_id.required'   => 'Patient id is empty',
    		'app_doc_id.required' => 'Doctor name is empty',
    		'app_date.required'   => 'Date is empty',
    		'app_status.required' => 'Appointment status is empty',
    	];
	}
	
	public function patient()
    {
        return $this->belongsTo("App\OutPatient", "app_p_id");
    }

	public static function boot()
	{
	    parent::boot();
	    static::saving(function ($model) {
	        $model->app_sl = IdGenerator::generate(['table' => 'appointments', 'field'=>'app_sl', 'length' => 10, 'prefix' => 'APP']);
	    });
	}
}
