<?php

namespace App\Http\Controllers;

use App\Medicine_categorie;
use Illuminate\Http\Request;

class MedicineCategorieController extends Controller
{

    public function index()
    {
      return view('admin.medicine.medicine_category');
    }

    public function create()
    {
      $data['category'] = Medicine_categorie::get();
      return view('admin.medicine.medicine_category_list', $data);
    }

    public function store(Request $request)
    {
      $request->validate([
          'category_name'    => 'required',
          'category_details' => 'required',
      ]);
      $data = [
          'med_cat_name'    => $request->category_name,
          'med_cat_details' => $request->category_details,
      ];
      $id = $request->category_id;
      if($id) {
          Medicine_categorie::where('med_cat_id', $id)->update($data);
          $response = [
              'msgtype' => 'success',
              'message' => 'Data Updated Successfully',
          ];
          echo json_encode($response);
      } else {
          Medicine_categorie::create($data);
          $response = [
              'msgtype' => 'success',
              'message' => 'Data Inserted Successfully',
          ];
          echo json_encode($response);
      }
    }

    public function edit($id)
    {
      $data = Medicine_categorie::find($id);
      echo json_encode($data);
    }

    public function destroy($id)
    {
      Medicine_categorie::where('med_cat_id', $id)->delete();
      $response = [
          'msgtype' => 'success',
          'message' => 'Data Deleted Successfully',
      ];
      echo json_encode($response);
    }
}
