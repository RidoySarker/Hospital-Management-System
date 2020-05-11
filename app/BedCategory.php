<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class BedCategory extends Model
{
    protected $table = 'bed_categories';
    protected $primaryKey = 'bed_category_id';
    protected $fillable = ['bed_category_name', 'bed_category_details','bed_category_floor_id'];

    public function validation()
    {
        return [
            'bed_category_name'    => 'required',
            'bed_category_details' => 'required',
            'bed_category_floor_id' => 'required',
        ];
    }
}
