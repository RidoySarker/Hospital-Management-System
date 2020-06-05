<?php

namespace App\Http\Controllers;

use App\InPatient;
use Illuminate\Http\Request;
use App\Doctor;
use App\BedCategory;
use App\Bed;
use App\Floor;
use Toastr;
use Validator;

class InPatientController extends Controller
{

    public function success(Request $request)
    {
        Toastr::success($request->status.' Successfully', '', ["positionClass" => "toast-top-right"]);
        return redirect()->back();
    }
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
        $data['floors'] = Floor::all();
        $data['inpatient'] = InPatient::all();
        return view('admin.patient.in_patient.in_patient_list', $data);
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
            $bed_status=['bed_status'=>'Alloted'];
            Bed::where('bed_id',$request->in_p_bed_id)->update($bed_status);
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
