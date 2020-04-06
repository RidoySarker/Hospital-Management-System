<?php

namespace App\Http\Controllers;

use App\Donor_list;
use Illuminate\Http\Request;
use Toastr;
use Validator;
class DonorListController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $donor['donor_data'] = Donor_list::orderBy('donor_id','desc')->get();
        return view('admin.donor.donor_list',$donor);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
       return view('admin.donor.add_donor');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $model = new Donor_list;
        $alldata = $request->all();
        $validation = Validator::make($alldata, $model->validation());
        if($validation->fails()){
            Toastr::warning('Validation Failed');
             return back()->withErrors($validation)->withInput($alldata);
        }
        $model->fill($alldata)->save();
        Toastr::success('Donor Add Successfully', 'Success');
        return back();

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Donor_list  $donor_list
     * @return \Illuminate\Http\Response
     */
    public function show(Donor_list $donor_list)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Donor_list  $donor_list
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $donor['edit_donor'] = Donor_list::findOrFail($id);
        return view('admin.donor.edit_donor',$donor);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Donor_list  $donor_list
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $model = Donor_list::findOrFail($id);
        $alldata = $request->all();
        $validation = Validator::make($alldata, $model->validation());
        if($validation->fails()){
            Toastr::warning('Validation Failed');
             return back()->withErrors($validation)->withInput($alldata);
        }
        $model->fill($alldata)->save();
        Toastr::success('Donor Update Successfully', 'Success');
        return back();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Donor_list  $donor_list
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request, $id)
    {
      Donor_list::where('donor_id' , $id)->delete();
      Toastr::success('Donor Delete Successfully', 'Success');
      return back();
    }
}
