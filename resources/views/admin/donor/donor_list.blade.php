@extends('layouts.app')
@section('title') Donor | HMS @endsection
@section('content')
<div class="right_col" role="main">
    <div class="">
        <div class="page-title">
            <div class="title_left">
                <h3>Donor</h3>
            </div>

            <div class="title_right">
                <div class="col-md-5 col-sm-5 col-xs-12 form-group pull-right top_search">
                    <a href="{{route('donor.create')}}">
                        <button class="btn btn-round btn-primary btn-sm pull-right">Add New</button>
                    </a>
                </div>
            </div>
        </div>

        <div class="clearfix"></div>

        <div class="row">
            <div class="col-md-12 col-sm-12 ">
                <div class="x_panel">
                    <div class="x_title">
                        <h2>Donor list</h2>
                        <
                        <div class="clearfix"></div>
                    </div>
                    <div class="x_content">
                        <div class="row">
                            <div class="col-sm-12">
                                <div class="card-box table-responsive">

                                    <table id="datatable" class="table table-striped table-bordered" style="width:100%">
                                        <thead>
                                            <tr>
                                                <th>SL</th>
                                                <th>Name</th>
                                                <th>Blood Group</th>
                                                <th>Age</th>
                                                <th>Phone</th>
                                                <th>Email</th>
                                                <th>Gender</th>
                                                <th>Last Donation Date</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            @foreach($donor_data as $key => $value)
                                            <tr>
                                                <td>{{$key+1}}</td>
                                                <td>{{$value->donor_name}}</td>
                                                <td>{{ $value->donor_blood }}</td>
                                                <td>{{ $value->donor_age }}</td>
                                                <td>{{ $value->donor_phone }}</td>
                                                <td>{{ $value->donor_email }}</td>
                                                <td>
                                                    {{ $value->donor_sex=='1' ? 'Male' : '' }} {{ $value->donor_sex=='2' ? 'Female' : '' }}
                                                </td>
                                                <td>{{ $value->donor_last_date }}</td>
                                                <td>

                                                        <a href="{{route('donor.edit',$value->donor_id)}}">
                                                        <button class="btn btn-btn btn-outline-info btn-sm"><i class="fa fa-edit"></i></button>
                                                        </a>
                                                        <form method="POST" action="{{route('donor.destroy',$value->donor_id)}}">
                                                    @csrf @method("DELETE")
                                                    <button type="submit" onclick="return confirm('Are you sure?')" class="btn btn-outline-danger btn-sm pull-right" style="margin-top: -36px;"><i class="fa fa-trash"></i></button>
                                                    </form>
                                                </td>
                                            </tr>
                                            @endforeach
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
