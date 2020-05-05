<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class BedCategory extends Model
{
    protected $table = 'bed_categories';
    protected $primaryKey = 'category_id';
    protected $fillable = ['category_name', 'category_details','category_floor_id'];

    public function validation()
    {
        return [
            'category_name'    => 'required',
            'category_details' => 'required',
            'category_floor_id' => 'required',
        ];
    }
}
