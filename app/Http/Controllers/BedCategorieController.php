<?php

namespace App\Http\Controllers;

use App\BedCategory;
use App\Floor;
use Illuminate\Http\Request;
use Validator;
use Toastr;

class BedCategorieController extends Controller
{

    public function index()
    {
        $floor_data= Floor::get();
        return view('admin.bed.bed_category.bed_category', ['floor_data' => $floor_data]);
    }

    public function list()
    {
        $BedCategory = BedCategory::get();
        return response()->json($BedCategory);
    }

    public function store(Request $request)
    {
        $category = New BedCategory;
        $validation = Validator::make($request->all(), $category->validation());
        if($validation->fails())
        {
            $status=400;
            $response = [
                "status" => $status,
                "errors" => $validation->errors(),
            ];
        }
        else
        {
           $category->fill($request->all())->save();
            $status=200;
            $response = [
                "status" => $status,
                "data" => $category,
            ];
        }
        return response()->json($response, $status);
    }

    public function edit($id)
    {
        $data = BedCategory::find($id);
        return response()->json($data);
    }

    public function update(Request $request)
    {
        $id = $request->bed_category_id;
        $category =BedCategory::findOrFail($id);
        $validation = Validator::make($request->all(), $category->validation());
        if($validation->fails())
        {
            $status=400;
            $response = [
                "status" => $status,
                "errors" => $validation->errors(),
            ];
        }
        else
        {
           $category->fill($request->all())->update();
            $status=200;
            $response = [
                "status" => $status,
                "data" => $category,
            ];
        }
        return response()->json($response, $status);
    }

    public function destroy($id)
    {
        BedCategory::where('bed_category_id', $id)->delete();
        $status = 200;
        $response = [
            "status" => $status,
        ];
        return response()->json($response);
    }
}
