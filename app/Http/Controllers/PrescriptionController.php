<?php

namespace App\Http\Controllers;

use App\OutPatient;
use App\Doctor;
use App\Medicine;
use App\Prescription;
use App\Prescription_Medicine;
use Illuminate\Http\Request;
use DB;
use Toastr;
use Haruncpi\LaravelIdGenerator\IdGenerator;

class PrescriptionController extends Controller
{

    public function index()
    {
        return view('admin.prescription.index');
    }

    public function list()
    {
      $data['prescription']=Prescription::orderBy('prescription_id','desc')->get();
      $data['medicines']=Prescription_Medicine::get();
      $data['patients']=OutPatient::get();
      $data['doctors']=Doctor::get();
      $data['meds']=Medicine::get();
      return view('admin.prescription.list',$data);
    }

    public function create()
    {
      $data['doctor']=Doctor::orderBy('doc_name','asc')->get();
      $data['patient']=OutPatient::orderBy('out_p_name','asc')->get();
      $data['medicine']=Medicine::orderBy('med_name')->get();
      return view('admin.prescription.add_prescription',$data);
    }


    public function store(Request $request)
    {
      $prescription_code = IdGenerator::generate(['table' => 'prescriptions','field'=>'prescription_code','length' => 8, 'prefix' =>'PRE#']);

        $request->validate([
          'prescription_date' => 'required',
          'patient' => 'required',
          'doctor' => 'required',
        ]);

        $input=[
          'prescription_code' => $prescription_code,
          'prescription_date' => $request->prescription_date,
          'prescription_p_id' => $request->patient,
          'prescription_doc_id' => $request->doctor,
          'prescription_history' => $request->message,
          'prescription_note' => $request->message2,
        ];
        Prescription::create($input);
        $last_id=DB::getPDO()->lastInsertId();

        for ($i=0; $i < ($request->row_no) ; $i++)
        {
          $prescription_medicine[]=[
            'prescription_id'=>$last_id,
            'prescription_medicine_id'=> $request->medicine[$i],
            'prescription_med_dosage'=> $request->dosage[$i],
            'prescription_med_frequency'=> $request->frequency[$i],
            'prescription_med_days'=> $request->days[$i],
            'prescription_med_ins'=> $request->instruction[$i],
          ];
        }
        Prescription_Medicine::insert($prescription_medicine);
        Toastr::success('Added Successfully', 'Success', ["positionClass" => "toast-bottom-right"]);
        return back();
    }


    public function show(Request $request)
    {
      $id=$request->id;
      $data['prescription']=Prescription::find($id);
      $data['pre_medicine']=Prescription_Medicine::where('prescription_id',$id)->get();
      $data['patients']=OutPatient::get();
      $data['doctors']=Doctor::get();
      $data['meds']=Medicine::get();
      return view('admin.prescription.invoice',$data);
    }


    public function edit($id)
    {
      $data['prescription']=Prescription::find($id);
      $data['pre_medicine']=Prescription_Medicine::where('prescription_id',$id)->get();
      $data['doctor']=Doctor::orderBy('doc_name','asc')->get();
      $data['patient']=OutPatient::orderBy('out_p_name','asc')->get();
      $data['medicine']=Medicine::orderBy('med_name')->get();
      return view('admin.prescription.edit_prescription',$data);
    }


    public function update(Request $request, $id)
    {
      $request->validate([
        'prescription_date' => 'required',
        'patient' => 'required',
        'doctor' => 'required',
      ]);

      $input=[
        'prescription_date' => $request->prescription_date,
        'prescription_p_id' => $request->patient,
        'prescription_doc_id' => $request->doctor,
        'prescription_history' => $request->message,
        'prescription_note' => $request->message2,
      ];
      Prescription::where('prescription_id',$id)->update($input);
      Prescription_Medicine::where('prescription_id',$id)->delete();
      for ($i=0; $i < ($request->row_no) ; $i++)
      {
        $prescription_medicine[]=[
          'prescription_id'=>$id,
          'prescription_medicine_id'=> $request->medicine[$i],
          'prescription_med_dosage'=> $request->dosage[$i],
          'prescription_med_frequency'=> $request->frequency[$i],
          'prescription_med_days'=> $request->days[$i],
          'prescription_med_ins'=> $request->instruction[$i],
        ];
      }
      Prescription_Medicine::insert($prescription_medicine);
      Toastr::success('Updated Successfully', 'Success', ["positionClass" => "toast-bottom-right"]);
      return back();
    }


    public function destroy($id)
    {
      Prescription::where('prescription_id',$id)->delete();
      Prescription_Medicine::where('prescription_id',$id)->delete();
      return response(['msgtype'=>"success",'message'=>"Successfully Data Deleted"]);
    }
}
