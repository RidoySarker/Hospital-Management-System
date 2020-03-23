<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Department extends Model
{
    protected $table = 'departments';
    protected $primaryKey = 'dept_id';
    protected $fillable = ['dept_name', 'dept_details'];
}
