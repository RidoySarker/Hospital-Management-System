@extends('layouts.app')
@section('title') Appointment | HMS @endsection
@section('content')
<div class="right_col" role="main">
    <div class="">
        <div class="page-title">
            <div class="title_left">
                <h3><b>Appointment</b></h3>
            </div>
        </div>
        <a href="{{url('doctor')}}">
            <button style="margin-left: 468px;" class="btn btn-round btn-primary btn-sm">Appointment List</button>
        </a>
        <div class="clearfix"></div>

        <div class="row">
            <div class="col-md-12 col-sm-12 col-xs-12">
                <div class="x_panel">
                    <div class="x_title">
                        <h2>Add Appointment</h2>
                        <ul class="nav navbar-right panel_toolbox">
                            <li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a>
                            </li>
                            <li class="dropdown">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i class="fa fa-wrench"></i></a>
                                <ul class="dropdown-menu" role="menu">
                                    <li><a href="#">Settings 1</a>
                                    </li>
                                    <li><a href="#">Settings 2</a>
                                    </li>
                                </ul>
                            </li>
                            <li><a class="close-link"><i class="fa fa-close"></i></a>
                            </li>
                        </ul>
                        <div class="clearfix"></div>
                    </div>
                    <div class="x_content">


                        <form class="form-horizontal form-label-left" method="POST" action="{{route('appointment.store')}}" enctype="multipart/form-data">
                            @csrf
                            <div class="field item form-group">
                                <label class="col-form-label col-md-3 col-sm-3 label-align" for="name">Patient ID <span class="required">*</span>
                                </label>
                                <div class="col-md-6 col-sm-6">
                                    <input id="name" class="form-control" name="app_p_id" placeholder="Enter Patient ID" type="text" value="{{ old('app_p_id') }}">
                                    <p class="text-danger">{{$errors->first('app_p_id')}}</p>
                                </div>
                            </div>

                            <div class="field item form-group">
                                <label class="col-form-label col-md-3 col-sm-3 label-align" for="app_d_id">Doctor ID <span class="required">*</span>
                                </label>
                                <div class="col-md-6 col-sm-6">
                                    <input id="app_d_id" class="form-control" name="app_d_id" placeholder="Enter Patient ID" type="text" value="{{ old('app_d_id') }}">
                                    <p class="text-danger">{{$errors->first('app_d_id')}}</p>
                                </div>
                            </div>

                            <div class="field item form-group">
                                <label class="col-form-label col-md-3 col-sm-3 label-align" for="app_date">Appointment Date <span class="required">*</span>
                                </label>
                                <div class="col-md-6 col-sm-6">
                                    <input type="date" id="app_date" name="app_date" class="form-control" value="{{ old('app_date') }}">
                                    <p class="text-danger">{{$errors->first('app_date')}}</p>
                                </div>
                            </div>

                            <div class="field item form-group">
                                <label class="col-form-label col-md-3 col-sm-3 label-align" for="app_start">Appointment Start <span class="required">*</span>
                                </label>
                                <div class="col-md-6 col-sm-6">
                                    <input type="text" id="app_start" name="app_start" class="form-control" placeholder="Enter Appointment Start" value="{{ old('app_start') }}">
                                    <p class="text-danger">{{$errors->first('app_start')}}</p>
                                </div>
                            </div>

                            <div class="field item form-group">
                                <label class="col-form-label col-md-3 col-sm-3 label-align" for="app_status">Status <span class="required">*</span>
                                </label>
                                <div class="col-md-6 col-sm-6">
                                    <select class="form-control" name="app_status" id="app_status">
                                        <option value="Active">Active</option>
                                        <option value="Inactive">Inactive </option>
                                    </select>
                                </div>
                            </div>

                            <div class="ln_solid"></div>
                            <div class="form-group">
                                <div class="col-md-6 offset-md-3">
                                    <button type="reset" class="btn btn-primary btn-sm">Reset</button>
                                    <button type="submit" class="btn btn-success btn-sm submit">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
@section('script')
<script>
    $(document).ready(function() {
        
    });
</script>
@endsection