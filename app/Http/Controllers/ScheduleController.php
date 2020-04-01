<?php

namespace App\Http\Controllers;

use App\Schedule;
use App\Doctor;
use Illuminate\Http\Request;
use Toastr;
use Validator;

class ScheduleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data['doctor'] = Doctor::get();
        $data['schedule'] = Schedule::orderBy('sd_id', 'desc')->get();
        return view('admin.schedule.schedule_list', $data);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $data['doctor'] = Doctor::get();
        return view('admin.schedule.add_schedule', $data);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $model = new Schedule;
        $all_data = $request->all();
        $validate = Validator::make($all_data, $model->validation());
        if($validate->fails()) {
            Toastr::warning('Validation Failed', '', ["positionClass" => "toast-top-right"]);
            return back()->withErrors($validate)->withInput($all_data);
        }
        $model->fill($all_data)->save();
        Toastr::success('Added Successfully', '', ["positionClass" => "toast-top-right"]);
        return back();
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Schedule  $schedule
     * @return \Illuminate\Http\Response
     */
    public function show(Schedule $schedule)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Schedule  $schedule
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $data['schedule'] = Schedule::findOrFail($id);
        $data['doctor'] = Doctor::get();
        return view('admin.schedule.edit_schedule', $data);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Schedule  $schedule
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $model = Schedule::findOrFail($id);
        $all_data = $request->all();
        $validate = Validator::make($all_data, $model->validation());
        if($validate->fails()) {
            Toastr::warning('Validation Failed', '', ["positionClass" => "toast-top-right"]);
            return back()->withErrors($validate)->withInput($all_data);
        }
        $model->fill($all_data)->save();
        Toastr::success('Update Successfully', '', ["positionClass" => "toast-top-right"]);
        return back();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Schedule  $schedule
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Schedule::where('sd_id', $id)->delete();
        Toastr::success('Deleted Successfully', '', ["positionClass" => "toast-top-right"]);
        return back();
    }
}
