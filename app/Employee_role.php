<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Employee_role extends Model
{
    protected $table='employee_roles';
    protected $primaryKey='role_id';
    protected $fillable=['role_name','role_details'];
}
