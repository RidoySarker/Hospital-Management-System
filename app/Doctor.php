<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Doctor extends Model
{
    protected $table = 'doctors';
    protected $primaryKey = 'doc_id';
    protected $fillable = ['doc_name', 'doc_phone', 'doc_address', 'doc_schedule', 'doc_email', 'doc_password', 'doc_profile', 'doc_img', 'doc_dept_id'];

    public function validation()
    {
    	return [
    		'doc_name'     => 'required',
            'doc_phone'    => 'required',
            'doc_address'  => 'required',
            'doc_schedule' => 'required',
            'doc_email'    => 'required|email',
            'doc_password' => 'required',
            'doc_profile'  => 'required',
            'doc_img'      => 'required'
    	];
    }
}
