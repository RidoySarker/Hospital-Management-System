<?php

namespace App\Http\Controllers;

use App\Department;
use Illuminate\Http\Request;
class DepartmentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('admin.department.index');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $dept['data'] = Department::get();
        return view('admin.department.list', $dept);
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
            'dept_name'    => 'required',
            'dept_details' => 'required',
        ]);
        $data = [
            'dept_name'    => $request->dept_name,
            'dept_details' => $request->dept_details,
        ];
        $id = $request->dept_id;
        if($id) {
            Department::where('dept_id', $id)->update($data);
            $response = [
                'msgtype' => 'success',
                'message' => 'Data Updated Successfully',
            ];
            echo json_encode($response);
        } else {
            Department::create($data);
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
     * @param  \App\Department  $department
     * @return \Illuminate\Http\Response
     */
    public function show(Department $department)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Department  $department
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $data = Department::find($id);
        echo json_encode($data);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Department  $department
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Department  $department
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Department::where('dept_id', $id)->delete();
        $response = [
            'msgtype' => 'success',
            'message' => 'Data Deleted Successfully',
        ];
        echo json_encode($response);
    }
}
