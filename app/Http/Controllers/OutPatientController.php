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
        $doctor = Doctor::all();
        return view('admin.patient.out_patient.out_patient_list', ['doctor' => $doctor]);
    }

    public function datalist()
    {
        $outpatient = OutPatient::orderBy('out_p_id', 'desc')->get();
        return response()->json($outpatient);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
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

    /**
     * Display the specified resource.
     *
     * @param  \App\OutPatient  $outPatient
     * @return \Illuminate\Http\Response
     */
    public function show(OutPatient $outPatient)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\OutPatient  $outPatient
     * @return \Illuminate\Http\Response
     */
    public function edit(OutPatient $outPatient)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\OutPatient  $outPatient
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, OutPatient $outPatient)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\OutPatient  $outPatient
     * @return \Illuminate\Http\Response
     */
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
