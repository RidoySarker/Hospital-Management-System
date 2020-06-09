<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Haruncpi\LaravelIdGenerator\IdGenerator;

class OutPatient extends Model
{
    protected $table = 'out_patients';
    protected $primaryKey = 'out_p_id';
    protected $fillable = ['out_p_name', 'out_p_sex', 'out_p_age', 'out_p_phone', 'out_p_blood', 'out_p_height', 'out_p_weight', 'out_p_bp', 'out_p_symptoms', 'out_p_address'];

    public function validation()
    {
    	return [
	    	'out_p_name'    => 'required',
	    	'out_p_age'     => 'required',
	    	'out_p_address' => 'required',
	    	'out_p_phone'   => 'required',
	    	'out_p_sex'     => 'required',
	    	'out_p_blood'   => 'required',
	    ];
    }

    public static function boot()
	{
	    parent::boot();
	    static::saving(function ($model) {
	        $model->out_p_s = IdGenerator::generate(['table' => 'out_patients', 'field'=>'out_p_s', 'length' => 10, 'prefix' => 'OUTPAT']);
	    });
	}
}
