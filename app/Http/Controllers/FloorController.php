<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Floor;
use Validator;
class FloorController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('admin.bed.Floor.floor_list');
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

    public function list()
    {
        $floor = Floor::get();
        return response()->json($floor);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $floor = New Floor;
        $validation = Validator::make($request->all(), $floor->validation());
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
           $floor->fill($request->all())->save();
            $status=200;
            $response = [
                "status" => $status,
                "data" => $floor,
            ];
        }
        return response()->json($response, $status);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $data = Floor::find($id);
        return response()->json($data);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $id = $request->floor_id;
        $floor =Floor::findOrFail($id);
        $validation = Validator::make($request->all(), $floor->validation());
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
           $floor->fill($request->all())->update();
            $status=200;
            $response = [
                "status" => $status,
                "data" => $floor,
            ];
        }
        return response()->json($response, $status);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Floor::where('floor_id', $id)->delete();
        $status = 200;
        $response = [
            "status" => $status,
        ];
        return response()->json($response);
    }
}
