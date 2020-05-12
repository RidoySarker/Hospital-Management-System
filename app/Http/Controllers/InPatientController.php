<?php

namespace App\Http\Controllers;

use App\InPatient;
use Illuminate\Http\Request;
use App\Doctor;
use App\BedCategory;
use App\Bed;
use Validator;

class InPatientController extends Controller
{
    /** 
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data['doctors'] = Doctor::all();
        $data['bed_categorys'] = BedCategory::all();
        $data['beds'] = Bed::all();
        return view('admin.patient.in_patient.in_patient_list', $data);
    }

    public function datalist()
    {
        $inpatient = InPatient::orderBy('in_p_id', 'desc')->get();
        return response()->json($inpatient);
    }

    public function store(Request $request)
    {
        $inpatient = new InPatient;
        $validation = Validator::make($request->all(), $inpatient->validation());
        if($validation->fails()) {
            $status = 400;
            $response = [
                "status" => $status,
                "errors"   => $validation->errors(),
            ];
        } else {
            $inpatient->fill($request->all())->save();
            $status = 201;
            $response = [
                "status" => $status,
                "data"   => $inpatient,
            ];
        }
        return response()->json($response, $status);
    }

    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        InPatient::where('in_p_id', $id)->delete();
        $status = 200;
        $response = [
            "status" => $status,
        ];
        return response()->json($response);
    }
}
