@extends('layouts.app') @section('title') Patient | HMS @endsection @section('content')
<div class="right_col" role="main">
    <div class="">
        <div class="page-title">
            <div class="title_left">
                <h3>Patient</h3>
            </div>

            <div class="title_right">
                <div class="col-md-5 col-sm-5 col-xs-12 form-group pull-right top_search">
                    <a href="{{route('patient.create')}}">
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
                        <h2>Patient list</h2>
                        <ul class="nav navbar-right panel_toolbox">
                            <li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a>
                            </li>
                            <li class="dropdown">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i class="fa fa-wrench"></i></a>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a class="dropdown-item" href="#">Settings 1</a>
                                    <a class="dropdown-item" href="#">Settings 2</a>
                                </div>
                            </li>
                            <li><a class="close-link"><i class="fa fa-close"></i></a>
                            </li>
                        </ul>
                        <div class="clearfix"></div>
                    </div>
                    <div class="x_content">
                        <div class="row">
                            <div class="col-sm-12">
                                <div class="card-box table-responsive">

                                    <table id="datatable" class="table table-striped table-bordered" style="width:100%">
                                        <thead>
                                            <tr>
                                                <th>Sl</th>
                                                <th>PID</th>
                                                <th>Image</th>
                                                <th>Name</th>
                                                <th>Age</th>
                                                <th>Address</th>
                                                <th>Phone</th>
                                                <th>Gender</th>
                                                <th>Blood</th>
                                                <th>Age</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            @foreach($p_data as $key => $value)
                                            <tr>
                                                <td>{{$key+1}}</td>
                                                <td>{{$value->p_s}}</td>
                                                <td style="width:70px"><img id='previmage' style="height:55px;width:55px;" src="@if($value->p_img) /{{$value->p_img}} @else {{'/images/avatar.jpg'}} @endif" alt="your image" class='img-responsive img-circle'></td>
                                                <td>{{ $value->p_name }}</td>
                                                <td>{{ $value->p_age }}</td>
                                                <td>{{ $value->p_address }}</td>
                                                <td>{{ $value->p_phone }}</td>
                                                <td>
                                                    {{ $value->p_sex=='1' ? 'Male' : '' }} {{ $value->p_sex=='2' ? 'Female' : '' }}
                                                </td>
                                                <td>{{ $value->p_blood }}</td>
                                                <td>{{ $value->p_age }}</td>
                                                <td>

                                                        <a href="{{route('patient.edit',$value->p_id)}}">
                                                        <button class="btn btn-btn btn-outline-info btn-sm"><i class="fa fa-edit"></i></button>
                                                        </a>

                                                        <form method="POST" action="{{route('patient.destroy',$value->p_id)}}">
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