<?php

namespace App\Http\Controllers;

use App\Bed_categorie;
use Illuminate\Http\Request;
use Validator;
use Toastr;

class BedCategorieController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data['bed_category'] = Bed_categorie::orderBy('bed_category_id', 'desc')->get();
        return view('admin.bed_category.bed_category_list', $data);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('admin.bed_category.add_bed_category');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $model = new Bed_categorie;
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
     * @param  \App\Bed_categorie  $bed_categorie
     * @return \Illuminate\Http\Response
     */
    public function show(Bed_categorie $bed_categorie)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Bed_categorie  $bed_categorie
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $data['bed_category'] = Bed_categorie::findOrFail($id);
        return view('admin.bed_category.edit_bed_category', $data);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Bed_categorie  $bed_categorie
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $model = Bed_categorie::findOrFail($id);
        $all_data = $request->all();
        $validate = Validator::make($all_data, $model->validation());
        if($validate->fails()) {
            Toastr::warning('Validation Failed', '', ["positionClass" => "toast-top-right"]);
            
            return back()->withErrors($validate)->withInput($all_data);
        }
        $model->fill($all_data)->save();
        Toastr::success('Updated Successfully', '', ["positionClass" => "toast-top-right"]);
        return back();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Bed_categorie  $bed_categorie
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Bed_categorie::where('bed_category_id', $id)->delete();
        Toastr::success('Deleted Successfully', '', ["positionClass" => "toast-top-right"]);
        return back();
    }
}
