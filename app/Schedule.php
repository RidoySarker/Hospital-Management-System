<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Schedule extends Model
{
    protected $table = 'schedules';
    protected $primaryKey = 'sd_id';
    protected $fillable = ['sd_d_id', 'sd_available_days', 'sd_start_time', 'sd_end_time', 'sd_per_p_time', 'sd_status'];

    public function validation()
    {
        return [
            'sd_d_id'           => 'required',
            'sd_available_days' => 'required',
            'sd_start_time'     => 'required',
            'sd_end_time'       => 'required',
            'sd_per_p_time'     => 'required',
            'sd_status'         => 'required',
        ];
    }
}
