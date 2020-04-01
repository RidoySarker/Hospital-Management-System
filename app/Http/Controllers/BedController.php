<?php

namespace App\Http\Controllers;

use App\Bed;
use App\Bed_categorie;
use Illuminate\Http\Request;
use Validator;
use Toastr;

class BedController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data['bed'] = Bed::get();
        $data['bed_category'] = Bed_categorie::get();
        return view('admin.bed.bed_list', $data);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $data['bed_category'] = Bed_categorie::get();
        return view('admin.bed.add_bed', $data);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $model = new Bed;
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
     * @param  \App\Bed  $bed
     * @return \Illuminate\Http\Response
     */
    public function show(Bed $bed)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Bed  $bed
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $data['bed'] = Bed::findOrFail($id);
        $data['bed_category'] = Bed_categorie::get();
        return view('admin.bed.edit_bed', $data);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Bed  $bed
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $model = Bed::findOrFail($id);
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
     * @param  \App\Bed  $bed
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Bed::where('bed_id', $id)->delete();
        Toastr::success('Deleted Successfully', '', ["positionClass" => "toast-top-right"]);
        return back();
    }
}
