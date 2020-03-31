<?php

namespace App\Http\Controllers;

use App\Doctor;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use DB;
use Session;
use File;
use Toastr;

class DoctorController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $doctor['data'] = Doctor::orderBy('doc_id', 'desc')->get();
        $doctor['dept'] = DB::table('departments')->get();
        return view('admin.doctor.doctor_list', $doctor);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $dept['data'] = DB::table('departments')->get();
        return view('admin.doctor.add_doctor', $dept);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'doc_name'           => 'required',
            'doc_phone'          => 'required',
            'doc_address'        => 'required',
            'doc_email'          => 'required|email',
            'doc_password'       => 'required',
            'doc_profile'        => 'required',
            'doc_dept_id'        => 'required',
            'doc_img'            => 'required'
        ]);
        if($request->hasFile('doc_img')) {
            $image_type = $request->file('doc_img')->getClientOriginalExtension();
            $path = "images/";
            $name = 'doctor_'.time().".".$image_type;
            $image = $request->file('doc_img')->move($path,$name);
        }
        $data = [
            'doc_name'           => $request->doc_name,
            'doc_phone'          => $request->doc_phone,
            'doc_address'        => $request->doc_address,
            'doc_email'          => $request->doc_email,
            'doc_password'       => Hash::make($request->doc_password),
            'doc_profile'        => $request->doc_profile,
            'doc_dept_id'        => $request->doc_dept_id,
            'doc_img'            => $image
        ];
        Doctor::create($data);
        Toastr::success('Added Successfully', 'Success', ["positionClass" => "toast-top-right"]);
        return back();
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Doctor  $doctor
     * @return \Illuminate\Http\Response
     */
    public function show(Doctor $doctor)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Doctor  $doctor
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $doctor['doctor']  = Doctor::findOrFail($id);
        $doctor['data'] = DB::table('departments')->get();
        return view('admin.doctor.edit_doctor', $doctor);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Doctor  $doctor
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'doc_name'           => 'required',
            'doc_phone'          => 'required',
            'doc_address'        => 'required',
            'doc_profile'        => 'required'
        ]);
        if($request->hasFile('doc_img')) {
            $image_type = $request->file('doc_img')->getClientOriginalExtension();
            $path = "images/";
            $name = 'doctor_'.time().".".$image_type;
            $image = $request->file('doc_img')->move($path,$name);
            if(File::exists(Doctor::findOrFail($id)->doc_img))
            {
                File::delete(Doctor::findOrFail($id)->doc_img);
            }
            $data = [
                'doc_name'           => $request->doc_name,
                'doc_phone'          => $request->doc_phone,
                'doc_address'        => $request->doc_address,
                'doc_profile'        => $request->doc_profile,
                'doc_dept_id'        => $request->doc_dept_id,
                'doc_img'            => $image
            ];
        } else {
            $data = [
                'doc_name'           => $request->doc_name,
                'doc_phone'          => $request->doc_phone,
                'doc_address'        => $request->doc_address,
                'doc_profile'        => $request->doc_profile,
                'doc_dept_id'        => $request->doc_dept_id
            ];
        }
        Doctor::where('doc_id', $id)->update($data);
        Toastr::success('Updated Successfully', 'Success', ["positionClass" => "toast-top-right"]);
        return back();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Doctor  $doctor
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Doctor::where('doc_id', $id)->delete();
        Toastr::success('Deleted Successfully', 'Success', ["positionClass" => "toast-top-right"]);
        return back();
    }
}
