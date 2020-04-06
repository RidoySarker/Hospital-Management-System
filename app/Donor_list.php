<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Donor_list extends Model
{
    protected $primaryKey ='donor_id';
    protected $fillable = ['donor_name','donor_blood','donor_age','donor_sex','donor_last_date','donor_phone','donor_email'];

    public function validation()
    {
    	return[
    		'donor_name' => 'required',
    		'donor_blood' => 'required',
    		'donor_age' => 'required',
            'donor_sex' => 'required',
    		'donor_last_date' => 'required',
    		'donor_phone' => 'required',
    	];
    }
}
