<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Bed_categorie extends Model
{
    protected $table = 'bed_categories';
    protected $primaryKey = 'bed_category_id';
    protected $fillable = ['bed_category_name', 'bed_category_details'];

    public function validation()
    {
        return [
            'bed_category_name'    => 'required',
            'bed_category_details' => 'required',
        ];
    }
}
