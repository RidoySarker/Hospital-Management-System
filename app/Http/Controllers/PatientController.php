<?php

namespace App\Http\Controllers;

use App\Patient;
use Illuminate\Http\Request;
use App\Doctor;
use Session;
use File;
use Toastr;
use Haruncpi\LaravelIdGenerator\IdGenerator;

class PatientController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {   
        $patient['p_data'] = Patient::orderBy('p_id','desc')->get();
        return view('admin.patient.patient_list',$patient);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        
        $doctor['d_data'] = Doctor::orderBy('doc_id', 'desc')->get();
        return view('admin.patient.add_patient',$doctor);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $id = IdGenerator::generate(['table' => 'patients', 'length' => 8, 'prefix' =>'PAT']);
        $request->validate([
            'p_name' => 'required',
            'p_age' => 'required',
            'p_address' => 'required',
            'p_phone' => 'required',
            'p_sex' => 'required',
            'p_blood' => 'required',
            'p_doc_id' => 'required'
        ]);
        if ($request->hasFile('p_img')) {

           $input_image=$request->file('p_img')->getClientOriginalExtension();
           $path= "images/patient";
           $img_name = 'p_'.time().".".$input_image;
           $image = $request->file('p_img')->move($path,$img_name);
           $input= [
             'p_s' => $id,
             'p_name' => $request->p_name,
             'p_age' => $request->p_age,
             'p_address' => $request->p_address,
             'p_sex' => $request->p_sex,
             'p_phone' => $request->p_phone,
             'p_blood' => $request->p_blood,
             'p_doc_id' => $request->p_doc_id,
             'p_img'  => $image
           ];
        }
        else{
           $input= [
             'p_s' => $id,
             'p_name' => $request->p_name,
             'p_age' => $request->p_age,
             'p_address' => $request->p_address,
             'p_sex' => $request->p_sex,
             'p_phone' => $request->p_phone,
             'p_blood' => $request->p_blood,
             'p_doc_id' => $request->p_doc_id,
             'p_img'  => ''
           ];

        }
        Patient::create($input);
        Toastr::success('Patient Added Successfully', 'Success');
        return back();

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Patient  $patient
     * @return \Illuminate\Http\Response
     */
    public function show(Patient $patient)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Patient  $patient
     * @return \Illuminate\Http\Response
     */
    public function edit(Patient $patient)
    {
        
         $doctor['d_data'] = Doctor::orderBy('doc_id', 'desc')->get();
        return view('admin.patient.edit_patient',$doctor,compact('patient'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Patient  $patient
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'p_name' => 'required',
            'p_age' => 'required',
            'p_address' => 'required',
            'p_phone' => 'required',
            'p_sex' => 'required',
            'p_blood' => 'required',
            'p_doc_id' => 'required'
        ]);
        if ($request->hasFile('p_img')) {

        if ($request->old_image!='') {
          unlink($request->old_image);
        }
           $input_image=$request->file('p_img')->getClientOriginalExtension();
           $path= "images/patient";
           $img_name = 'p_'.time().".".$input_image;
           $image = $request->file('p_img')->move($path,$img_name);
           $input= [
             'p_name' => $request->p_name,
             'p_age' => $request->p_age,
             'p_address' => $request->p_address,
             'p_sex' => $request->p_sex,
             'p_phone' => $request->p_phone,
             'p_blood' => $request->p_blood,
             'p_doc_id' => $request->p_doc_id,
             'p_img'  => $image
           ];
        }
        else{
           $input= [
             'p_name' => $request->p_name,
             'p_age' => $request->p_age,
             'p_address' => $request->p_address,
             'p_sex' => $request->p_sex,
             'p_phone' => $request->p_phone,
             'p_blood' => $request->p_blood,
             'p_doc_id' => $request->p_doc_id,
           ];

        }
        Patient::where('p_id',$id)->update($input);
        Toastr::success('Patient Update Successfully', 'Success');
        return back();    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Patient  $patient
     * @return \Illuminate\Http\Response
     */
    public function destroy(Patient $patient)
    {
        $patient->delete();
        Toastr::success('Patient Delete Successfully', 'Success');
        return back();
    }
}
