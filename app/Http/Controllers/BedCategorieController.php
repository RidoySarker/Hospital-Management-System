<?php

namespace App\Http\Controllers;

use App\BedCategory;
use App\Floor;
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
        $floor_data= Floor::get();
        return view('admin.bed.bed_category.bed_category', ['floor_data' => $floor_data]);
    }

    public function list()
    {
        $BedCategory = BedCategory::get();
        return response()->json($BedCategory);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
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
        $data = BedCategory::find($id);
        return response()->json($data);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Bed_categorie  $bed_categorie
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $id = $request->category_id;
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

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Bed_categorie  $bed_categorie
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        BedCategory::where('category_id', $id)->delete();
        $status = 200;
        $response = [
            "status" => $status,
        ];
        return response()->json($response);
    }
}
