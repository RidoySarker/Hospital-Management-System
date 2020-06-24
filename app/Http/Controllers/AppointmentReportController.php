<?php

namespace App\Http\Controllers;

use App\Appointment;
use Illuminate\Http\Request;
use App\Doctor;
use App\OutPatient;

class AppointmentReportController extends Controller
{

    public function index()
    {
        $doctors=Doctor::all();
        return(view("admin.report.appointmentReport",['doctors'=>$doctors]));
    }

    public function show(Request $request)
    {
        $from=$request->from;
        $to=$request->to;
        $doctor=$request->doctor;
        $data['appointment']=$appointment=Appointment::where('app_doc_id',$doctor)->whereBetween('app_date',[$from,$to])->get();
        $data['patient']=OutPatient::all();
        $data['doctor']=Doctor::all();
        return view("admin.report.report",$data);
    }

}
