<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Employee_role;
class EmployeeRoleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('admin.employee.employee_role');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
      $data['employee_role'] = Employee_role::get();
      return view('admin.employee.employee_role_list', $data);
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
          'role_name'    => 'required',
          'role_details' => 'required',
      ]);
      $data = [
          'role_name'    => $request->role_name,
          'role_details' => $request->role_details,
      ];
      $id = $request->role_id;
      if($id) {
          Employee_role::where('role_id', $id)->update($data);
          $response = [
              'msgtype' => 'success',
              'message' => 'Data Updated Successfully',
          ];
          echo json_encode($response);
      } else {
          Employee_role::create($data);
          $response = [
              'msgtype' => 'success',
              'message' => 'Data Inserted Successfully',
          ];
          echo json_encode($response);
      }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Employee_role  $employee_role
     * @return \Illuminate\Http\Response
     */
    public function show(employee_role $employee_role)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Employee_role  $employee_role
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
      $data = Employee_role::find($id);
      echo json_encode($data);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Employee_role  $employee_role
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, employee_role $employee_role)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Employee_role  $employee_role
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
      Employee_role::where('role_id', $id)->delete();
      $response = [
          'msgtype' => 'success',
          'message' => 'Data Deleted Successfully',
      ];
      echo json_encode($response);
    }
}
