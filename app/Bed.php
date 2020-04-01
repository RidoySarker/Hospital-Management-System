<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Bed extends Model
{
    protected $table = 'beds';
    protected $primaryKey = 'bed_id';
    protected $fillable = ['bed_category_id', 'bed_capacity', 'bed_charge', 'bed_status'];

    public function validation()
    {
        return [
            'bed_category_id' => 'required',
            'bed_capacity'    => 'required',
            'bed_charge'      => 'required',
            'bed_status'      => 'required',
        ];
    }
}
