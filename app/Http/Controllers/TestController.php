<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Patient;

class TestController extends Controller
{
    public function list(Request $request) 
    {
        $patient = $request->patient;
        $matched = Patient::where('p_s', $patient)->get();
        return view('admin.bed_allotment.add_bed_allotment', $matched);
    }
}
