<?php

namespace App\Http\Controllers;

use App\Expense;
use App\Expense_Categorie;
use Illuminate\Http\Request;
use Toastr;
class ExpenseController extends Controller
{

    public function index()
    {
      return view('admin.financial_activities.expense.index');
    }

    public function list()
    {
      $data['expense'] = Expense::get();
      $data['category'] = Expense_Categorie::get();
      return view('admin.financial_activities.expense.list', $data);
    }

    public function create()
    {
      $data['category']=Expense_Categorie::get();
      return view('admin.financial_activities.expense.add_expense',$data);
    }

    public function store(Request $request)
    {
      $request->validate([
        'exp_cat_id'=>'required',
        'exp_amount'=>'required',
        'exp_details'=>'required']
      );
     $input=[
       'exp_cat_id' => $request->exp_cat_id,
       'exp_amount' => $request->exp_amount,
       'exp_details' => $request->exp_details,
       'exp_date' => date('Y-m-d'),
     ];

      Expense::create($input);
      Toastr::success('Added Successfully', 'Success', ["positionClass" => "toast-bottom-right"]);
      return back();
    }

    public function edit($id)
    {
      $data['category'] = Expense_Categorie::get();
      $data['expense']=Expense::find($id);
      return view('admin.financial_activities.expense.edit_expense',$data);
    }

    public function update(Request $request, $id)
    {
      $request->validate([
        'exp_cat_id'=>'required',
        'exp_amount'=>'required',
        'exp_details'=>'required']
      );
      $input=[
        'exp_cat_id' => $request->exp_cat_id,
        'exp_amount' => $request->exp_amount,
        'exp_details' => $request->exp_details,
      ];

       Expense::where('exp_id',$id)->update($input);
       Toastr::success('Updated Successfully', 'Success', ["positionClass" => "toast-bottom-right"]);
       return back();
    }

    public function destroy($id)
    {
        Expense::where('exp_id',$id)->delete();
        return response(['msgtype'=>"success",'message'=>"Successfully Data Deleted"]);
    }
}
