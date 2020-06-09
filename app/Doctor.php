<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Doctor extends Model
{
    protected $table = 'doctors';
    protected $primaryKey = 'doc_id';
    protected $fillable = ['doc_name', 'doc_phone','doc_address', 'doc_email', 'doc_password', 'doc_profile', 'doc_img', 'doc_dept_id'];
}
