<?php

namespace App\Http\Controllers;

use App\Bed;
use App\BedCategory;
use App\Floor;
use Illuminate\Http\Request;
use Validator;
use Toastr;

class BedController extends Controller
{
    
    public function index()
    {
        $data['bed'] = Bed::get();
        $data['bed_category'] = BedCategory::get();
        $data['floors']= Floor::get();
        return view('admin.bed.bed_list', $data);
    }

    public function create()
    {
        $data['bed_category'] = BedCategory::get();
        return view('admin.bed.add_bed', $data);
    }

    public function store(Request $request)
    {
        $bed = new Bed;
        $validation = Validator::make($request->all(), $bed->validation());
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
           $bed->fill($request->all())->save();
            $status=200;
            $response = [
                "status" => $status,
                "data" => $bed,
            ];
        }
        return response()->json($response, $status);
    }

    public function success(Request $request)
    {
        Toastr::success($request->status.' Successfully', '', ["positionClass" => "toast-top-right"]);
        return redirect()->back();
    }

    public function edit($id)
    {
        $data = Bed::find($id);
        return response()->json($data);
    }

    public function update(Request $request)
    {
        $id = $request->bed_id;
        $bed =Bed::findOrFail($id);
        $validation = Validator::make($request->all(), $bed->validation());
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
           $bed->fill($request->all())->update();
            $status=200;
            $response = [
                "status" => $status,
                "data" => $bed,
            ];
        }
        return response()->json($response, $status);
    }

    public function destroy($id)
    {
        Bed::where('bed_id', $id)->delete();
        $status = 200;
        $response = [
            "status" => $status,
        ];
        return response()->json($response);
    }

    public function available_bed(Request $request)
    {
        $id=$request->bed_cat_id;
        $data=Bed::where('bed_category_id',$id)->where('bed_status','Available')
            ->get();
        return response()->json($data);
    }
}
