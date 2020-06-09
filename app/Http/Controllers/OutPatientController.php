<?php

namespace App\Http\Controllers;

use App\OutPatient;
use Illuminate\Http\Request;
use App\Doctor;
use Validator;

class OutPatientController extends Controller
{
    /** 
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('admin.patient.out_patient.out_patient_list');
    }

    public function datalist()
    {
        $outpatient = OutPatient::orderBy('out_p_id', 'desc')->get();
        return response()->json($outpatient);
    }

    public function store(Request $request)
    {
        $outpatient = new OutPatient;
        $validation = Validator::make($request->all(), $outpatient->validation());
        if($validation->fails()) {
            $status = 400;
            $response = [
                "status" => $status,
                "errors"   => $validation->errors(),
            ];
        } else {
            $outpatient->fill($request->all())->save();
            $status = 201;
            $response = [
                "status" => $status,
                "data"   => $outpatient,
            ];
        }
        
        return response()->json($response, $status);
    }

    public function show(Request $request)
    {
        $id=$request->id;
        $patient=OutPatient::find($id);
        return response()->json($patient);
    }

    public function destroy($id)
    {
        OutPatient::where('out_p_id', $id)->delete();
        $status = 200;
        $response = [
            "status" => $status,
        ];
        return response()->json($response);
    }
}
