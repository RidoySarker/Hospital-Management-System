<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Bed extends Model
{
    protected $table = 'beds';
    protected $primaryKey = 'bed_id';
    protected $fillable = ['bed_name', 'bed_category_id','bed_status'];

    public function validation()
    {
        return [
            'bed_name' => 'required',
            'bed_category_id'    => 'required',
        ];
    }
}
