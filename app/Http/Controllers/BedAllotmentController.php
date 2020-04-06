<?php

namespace App\Http\Controllers;

use App\Bed_allotment;
use App\Bed_categorie;
use Illuminate\Http\Request;
use DB;
use Validator;
use Toastr;

class BedAllotmentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data['bed_allotment'] = Bed_allotment::get();
        $data['bed_category'] = Bed_categorie::get();
        return view('admin.bed_allotment.bed_allotment_list', $data);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $data['bed_category'] = Bed_categorie::get();
        return view('admin.bed_allotment.add_bed_allotment', $data);
    }

    public function get_patient_name($patient_id) 
    {
        $matched = DB::table('patients')->where('p_s', $patient_id)->get();
        return response()->json($matched, 200);
    }

    public function get_bed_quantity($quantity_id)
    {
        $data = DB::table('beds')->where('bed_category_id', $quantity_id)->get();
        return response()->json($data);
    }

    public function list($quantity_id)
    {
        $data = Bed_allotment::where('bed_allot_category_id', $quantity_id)->where('bed_allot_status', 'Active')->get();
        return response()->json($data);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $model = new Bed_allotment;
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
     * @param  \App\Bed_allotment  $bed_allotment
     * @return \Illuminate\Http\Response
     */
    public function show()
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Bed_allotment  $bed_allotment
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $data['bed_allotment'] = Bed_allotment::findOrFail($id);
        $data['bed_category'] = Bed_categorie::get();
        return view('admin.bed_allotment.edit_bed_allotment', $data);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Bed_allotment  $bed_allotment
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $model = Bed_allotment::findOrFail($id);
        $all_data = $request->all();
        $validate = Validator::make($all_data, $model->up_validation());
        if($validate->fails()) {
            Toastr::warning('Validation Failed', '', ["positionClass" => "toast-top-right"]);
            return back()->withErrors($validate)->withInput($all_data);
        }
        $model->fill($all_data)->save();
        Toastr::success('Updated Successfully', 'Success', ["positionClass" => "toast-top-right"]);
        return back();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Bed_allotment  $bed_allotment
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Bed_allotment::where('bed_allot_id', $id)->delete();
        Toastr::success('Deleted Successfully', 'Success', ["positionClass" => "toast-top-right"]);
        return back();
    }
}
