<?php

namespace App\Http\Controllers;

use App\Blood_bank;
use Illuminate\Http\Request;

class BloodBankController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $blood['blood_data'] = Blood_bank::orderBy('blood_bag_id','desc')->get();
        return view('admin.donor.bloodbank',$blood);
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
        $request->validate([
            'blood_bag_name'    => 'required',
            'blood_bag_quantity' => 'required',
        ]);
        $data = [
            'blood_bag_name'    => $request->blood_bag_name,
            'blood_bag_quantity' => $request->blood_bag_quantity,
        ];
        $id = $request->blood_bag_id;
            Blood_bank::where('blood_bag_id', $id)->update($data);
            $response = [
                'msgtype' => 'success',
                'message' => 'Data Update Successfully',
            ];
            echo json_encode($response);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Blood_bank  $blood_bank
     * @return \Illuminate\Http\Response
     */
    public function show(Blood_bank $blood_bank)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Blood_bank  $blood_bank
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $data = Blood_bank::find($id);
        echo json_encode($data);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Blood_bank  $blood_bank
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Blood_bank $blood_bank)
    {

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Blood_bank  $blood_bank
     * @return \Illuminate\Http\Response
     */
    public function destroy(Blood_bank $blood_bank)
    {
        //
    }
}
