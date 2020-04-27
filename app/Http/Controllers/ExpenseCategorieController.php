<?php

namespace App\Http\Controllers;

use App\Expense_Categorie;
use Illuminate\Http\Request;

class ExpenseCategorieController extends Controller
{

    public function index()
    {
       return view('admin.financial_activities.expense.category.index');
    }

    public function create()
    {
        $data['category'] = Expense_Categorie::get();
        return view('admin.financial_activities.expense.category.list',$data);
    }

    public function store(Request $request)
    {
      $request->validate([
          'exp_cat_name'    => 'required',
          'exp_cat_description' => 'required',
      ]);
      $data = [
          'exp_cat_name'    => $request->exp_cat_name,
          'exp_cat_description' => $request->exp_cat_description,
      ];
      $id = $request->exp_cat_id;
      if($id) {
          Expense_Categorie::where('exp_cat_id', $id)->update($data);
          $response = [
              'msgtype' => 'success',
              'message' => 'Data Updated Successfully',
          ];
          echo json_encode($response);
      } else {
          Expense_Categorie::create($data);
          $response = [
              'msgtype' => 'success',
              'message' => 'Data Inserted Successfully',
          ];
          echo json_encode($response);
      }
    }

    public function edit($id)
    {
      $data = Expense_Categorie::find($id);
      echo json_encode($data);
    }

    public function destroy($id)
    {
      Expense_Categorie::where('exp_cat_id', $id)->delete();
      $response = [
          'msgtype' => 'success',
          'message' => 'Data Deleted Successfully',
      ];
      echo json_encode($response);
    }
}
