<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Appointment;
use App\Doctor;
use App\OutPatient;
use Validator;
use Toastr;

class AppointmentController extends Controller
{
    public function success(Request $request)
    {
        Toastr::success($request->status.' Successfully', '', ["positionClass" => "toast-top-right"]);
        return redirect()->back();
    }

    public function index()
    { 
        $appointment = Appointment::all();
        $doctor = Doctor::all();
        $patients = OutPatient::all();
        return view('admin.appointment.appointment_list', ['appointments'=>$appointment,'doctors' => $doctor,'patients'=>$patients]);
    }

    public function patient($id)
    {
        $data = OutPatient::find($id);
        echo json_encode($data);
    }
 
    public function store(Request $request)
    {
        $appointment = new Appointment;
        $validation = Validator::make($request->all(), $appointment->validation());
        if($validation->fails()) {
            $status = 400;
            $response = [
                "status" => $status,
                "errors"   => $validation->errors(),
            ];
        } else {
            $appointment->fill($request->all())->save();
            $status = 201;
            $response = [
                "status" => $status,
                "data"   => $appointment,
            ];
        }
        return response()->json($response, $status);
    }

    public function show(Request $request)
    {
        $id=$request->id;
        $data['appointment']=$appointment=Appointment::find($id);
        $data['patient']=OutPatient::find($appointment->app_p_id);
        $data['doctor']=Doctor::find($appointment->app_doc_id);
        return response()->json($data);
    }

    public function update(Request $request)
    {
        $id=$request->id;
        $status=['app_status'=>$request->status];
        Appointment::where('app_id',$id)->update($status);
        $status = 200;
        $response = [
            "status" => $status,
        ];
        return response()->json($response);
    }

    public function destroy($id)
    {
        Appointment::where('app_id', $id)->delete();
        $status = 200;
        $response = [
            "status" => $status,
        ];
        return response()->json($response);
    }
}
