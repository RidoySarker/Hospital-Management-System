<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Bed_allotment extends Model
{
    protected $table = 'bed_allotments';
    protected $primaryKey = 'bed_allot_id';
    protected $fillable = ['bed_allot_p_id', 'bed_allot_category_id', 'bed_allot_start', 'bed_allot_discharge', 'bed_allot_status'];

    public function validation()
    {
        return [
            'bed_allot_p_id'        => 'required',
            'bed_allot_category_id' => 'required',
            'bed_allot_start'       => 'required',
            'bed_allot_discharge'   => 'required',
            'bed_allot_status'      => 'required',
        ];
    }

    public function up_validation()
    {
        return [
            'bed_allot_category_id' => 'required',
            'bed_allot_start'       => 'required',
            'bed_allot_discharge'   => 'required',
            'bed_allot_status'      => 'required',
        ];
    }
}
