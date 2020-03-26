<?php

namespace App\Http\Controllers;

use App\Employee;
use App\Employee_role;
use Illuminate\Http\Request;
use Hash;
use Toastr;
class EmployeeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('admin.employee.employee');
    }

    public function list()
    {
      $data['employee_role'] = Employee_role::get();
      $data['employee'] = Employee::get();
      return view('admin.employee.employee_list', $data);
    }
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $data['employee_role']=Employee_role::get();
        return view('admin.employee.add_employee',$data);
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
        'role_id'=>'required',
        'name'=>'required',
        'phone'=>'required',
        'address'=>'required',
        'gender'=>'required',
        'email'=>'required|email',
        'password'=>'required|min:8',
        'password2'=>'required||min:8']
      );
      if($request->hasFile('emp_image'))
      {
           $image_type = $request->file('emp_image')->getClientOriginalExtension();
           $path = "images/";
           $name = 'emp_'.time().".".$image_type;
           $image = $request->file('emp_image')->move($path,$name);
           $input= [
             'emp_role_id' => $request->role_id,
             'emp_name' => $request->name,
             'emp_phone' => $request->phone,
             'emp_address' => $request->address,
             'emp_sex' => $request->gender,
             'emp_email' => $request->email,
             'emp_password' => Hash::make($request->password2),
             'emp_img'  => $image
           ];
       }
       else {
         $input=[
           'emp_role_id' => $request->role_id,
           'emp_name' => $request->name,
           'emp_phone' => $request->phone,
           'emp_address' => $request->address,
           'emp_sex' => $request->gender,
           'emp_email' => $request->email,
           'emp_password' => Hash::make($request->password2),
           'emp_img'=>''
         ];
       }
      Employee::create($input);
      Toastr::success('Added Successfully', 'Success', ["positionClass" => "toast-bottom-right"]);
      return back();
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Employee  $employee
     * @return \Illuminate\Http\Response
     */
    public function show(Employee $employee)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Employee  $employee
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $data['employee_role'] = Employee_role::get();
        $data['employee']=Employee::find($id);
        return view('admin.employee.edit_employee',$data);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Employee  $employee
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
      $request->validate([
        'role_id'=>'required',
        'name'=>'required',
        'phone'=>'required',
        'address'=>'required',
        'gender'=>'required']
      );
      if($request->hasFile('emp_image'))
      {
        if ($request->old_image!='') {
          unlink($request->old_image);
        }
           $image_type = $request->file('emp_image')->getClientOriginalExtension();
           $path = "images/";
           $name = 'emp_'.time().".".$image_type;
           $image = $request->file('emp_image')->move($path,$name);
           $input= [
             'emp_role_id' => $request->role_id,
             'emp_name' => $request->name,
             'emp_phone' => $request->phone,
             'emp_address' => $request->address,
             'emp_sex' => $request->gender,
             'emp_img'  => $image
           ];
       }
       else {
         $input=[
           'emp_role_id' => $request->role_id,
           'emp_name' => $request->name,
           'emp_phone' => $request->phone,
           'emp_address' => $request->address,
           'emp_sex' => $request->gender,
           'emp_password' => Hash::make($request->password2),
         ];
       }
       Employee::where('emp_id',$id)->update($input);
       Toastr::success('Updated Successfully', 'Success', ["positionClass" => "toast-bottom-right"]);
       return back();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Employee  $employee
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Employee::where('emp_id',$id)->delete();
        return response(['msgtype'=>"success",'message'=>"Successfully Data Deleted"]);
    }
}
