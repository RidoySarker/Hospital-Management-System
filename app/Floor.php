<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Floor extends Model
{
    protected $table = 'floors';
    protected $primaryKey = 'floor_id';
    protected $fillable = ['floor_name','floor_description'];

    public function validation()
    {
    	return [

    		'floor_name' => 'required',
    		'floor_description' => 'required',

    	];
    }
}
