<?php

namespace App\Http\Controllers;

use App\Medicine;
use App\Medicine_categorie;
use Illuminate\Http\Request;
use Toastr;
class MedicineController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
      return view('admin.medicine.medicine');
    }

    public function list()
    {
      $data['category'] = Medicine_categorie::get();
      $data['medicine'] = Medicine::get();
      return view('admin.medicine.medicine_list', $data);
    }

    public function create()
    {
      $data['category']=Medicine_categorie::get();
      return view('admin.medicine.add_medicine',$data);
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
        'med_cat_id'=>'required',
        'med_name'=>'required',
        'med_purchase_price'=>'required',
        'med_sales_price'=>'required',
        'med_store_box'=>'required',
        'med_quantity'=>'required',
        'med_generic_name'=>'required',
        'med_company'=>'required',
        'med_expire_date'=>'required'
      ]);

         $input=[
           'med_cat_id' => $request->med_cat_id,
           'med_name' => $request->med_name,
           'med_purchase_price' => $request->med_purchase_price,
           'med_sales_price' => $request->med_sales_price,
           'med_store_box' => $request->med_store_box,
           'med_quantity' => $request->med_quantity,
           'med_generic_name' => $request->med_generic_name,
           'med_company'=> $request->med_company,
           'med_expire_date'=> $request->med_expire_date,
         ];
      Medicine::create($input);
      Toastr::success('Added Successfully', 'Success', ["positionClass" => "toast-bottom-right"]);
      return back();
    }

    public function show(Medicine $medicine)
    {

    }

    public function edit($id)
    {
      $data['category'] = Medicine_categorie::get();
      $data['medicine']=Medicine::find($id);
      return view('admin.medicine.edit_medicine',$data);
    }

    public function update(Request $request,$id)
    {
      $request->validate([
        'med_cat_id'=>'required',
        'med_name'=>'required',
        'med_purchase_price'=>'required',
        'med_sales_price'=>'required',
        'med_store_box'=>'required',
        'med_quantity'=>'required',
        'med_generic_name'=>'required',
        'med_company'=>'required',
        'med_expire_date'=>'required'
      ]);

         $input=[
           'med_cat_id' => $request->med_cat_id,
           'med_name' => $request->med_name,
           'med_purchase_price' => $request->med_purchase_price,
           'med_sales_price' => $request->med_sales_price,
           'med_store_box' => $request->med_store_box,
           'med_quantity' => $request->med_quantity,
           'med_generic_name' => $request->med_generic_name,
           'med_company'=> $request->med_company,
           'med_expire_date'=> $request->med_expire_date,
         ];

       Medicine::where('med_id',$id)->update($input);
       Toastr::success('Updated Successfully', 'Success', ["positionClass" => "toast-bottom-right"]);
       return back();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Medicine  $medicine
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
      Medicine::where('med_id',$id)->delete();
      return response(['msgtype'=>"success",'message'=>"Successfully Data Deleted"]);
    }

    public function quantity()
    {
      return view('admin.medicine.stock');
    }

    public function stock(Request $request)
    {
      $id = $request->id;
      $old_quantity=Medicine::find($id);
      $quantity=$request->new_quantity;
      $total=($old_quantity->med_quantity)+$quantity;
      $input=['med_quantity' => $total];
      Medicine::where('med_id',$id)->update($input);
      return response(['msgtype'=>"success",'message'=>"Successfully Medicine Stock Updated"]);
    }
}
