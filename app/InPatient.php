<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Haruncpi\LaravelIdGenerator\IdGenerator;

class InPatient extends Model
{
    protected $table='in_patients';
    protected $primaryKey = 'in_p_id';
    protected $fillable = ['in_p_s','in_p_name','in_p_sex','in_p_age','in_p_phone','in_p_guardian_name','in_p_guardian_phone','in_p_blood','in_p_height','in_p_weight','in_p_bp','in_p_symptoms','in_p_address','in_p_admission_date','in_p_case','in_p_casualty','in_p_old_patient','in_p_reference','in_p_doc_id','in_p_bed_category_id','in_p_bed_id','in_p_note'];

    public function validation()
    {
    	return [
	    	'in_p_name'           => 'required',
            'in_p_sex'            => 'required',
            'in_p_age'            => 'required',
            'in_p_phone'          => 'required',
            'in_p_guardian_name'  => 'required',
            'in_p_guardian_phone' => 'required',
            'in_p_blood'          => 'required',
            'in_p_address'        => 'required',
            'in_p_admission_date' => 'required',
            'in_p_case'           => 'required',
            'in_p_doc_id'         => 'required',
            'in_p_bed_category_id'=> 'required',
            'in_p_bed_id'         => 'required'
	    ];
    }

    public static function boot()
	{
	    parent::boot();
	    static::saving(function ($model) {
	        $model->in_p_s = IdGenerator::generate(['table' => 'in_patients', 'field'=>'in_p_s', 'length' => 10, 'prefix' => 'INPAT']);
	    });
	}
}
