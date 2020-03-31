@extends('layouts.app')
@section('title') Schedule | HMS @endsection
@section('content')
<div class="right_col" role="main">
    <div class="">
        <div class="page-title">
            <div class="title_left">
                <h3><b>Schedule</b></h3>
            </div>
        </div>
        <a href="{{url('schedule')}}">
            <button style="margin-left: 489px;" class="btn btn-round btn-primary btn-sm">Schedule List</button>
        </a>
        <div class="clearfix"></div>

        <div class="row">
            <div class="col-md-12 col-sm-12 col-xs-12">
                <div class="x_panel">
                    <div class="x_title">
                        <h2>Add Schedule</h2>
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


                        <form class="form-horizontal form-label-left" method="POST" action="{{route('schedule.store')}}" enctype="multipart/form-data">
                            @csrf
                            <div class="field item form-group">
                                <label class="col-form-label col-md-3 col-sm-3 label-align" for="sd_d_id">Doctor Name <span class="required">*</span>
                                </label>
                                <div class="col-md-6 col-sm-6">
                                    <select class="form-control" name="sd_d_id" id="sd_d_id">
                                        <option hidden>Select Option</option>
                                        @foreach($doctor as $value)
                                        <option value="{{$value->doc_id}}">{{$value->doc_name}}</option>
                                        @endforeach
                                    </select>
                                </div>
                            </div>

                            <div class="field item form-group">
                                <label class="col-form-label col-md-3 col-sm-3 label-align" for="sd_available_days">Available Day <span class="required">*</span>
                                </label>
                                <div class="col-md-6 col-sm-6">
                                    <select class="form-control" name="sd_available_days" id="sd_available_days">
                                        <option hidden>Select Option</option>
                                        <option value="Sunday">Sunday</option>
                                        <option value="Monday">Monday</option>
                                        <option value="Tuesday">Tuesday</option>
                                        <option value="Wednesday">Wednesday</option>
                                        <option value="Thursday">Thursday</option>
                                        <option value="Friday">Friday</option>
                                        <option value="Saturday">Saturday</option>
                                    </select>
                                </div>
                            </div>

                            <div class="field item form-group">
                                <label class="col-form-label col-md-3 col-sm-3 label-align" for="sd_start_time">Start Time <span class="required">*</span>
                                </label>
                                <div class="col-md-6 col-sm-6">
                                    <input id="sd_start_time" class="form-control" name="sd_start_time" placeholder="Enter Start Time" type="time" value="{{ old('sd_start_time') }}">
                                    <p class="text-danger">{{$errors->first('sd_start_time')}}</p>
                                </div>
                            </div>

                            <div class="field item form-group">
                                <label class="col-form-label col-md-3 col-sm-3 label-align" for="sd_end_time">End Time <span class="required">*</span>
                                </label>
                                <div class="col-md-6 col-sm-6">
                                    <input type="time" id="sd_end_time" name="sd_end_time" class="form-control" placeholder="Enter End Time" value="{{ old('sd_end_time') }}">
                                    <p class="text-danger">{{$errors->first('sd_end_time')}}</p>
                                </div>
                            </div>

                            <div class="field item form-group">
                                <label class="col-form-label col-md-3 col-sm-3 label-align" for="sd_per_p_time">Per Patient Time  <span class="required">*</span>
                                </label>
                                <div class="col-md-6 col-sm-6">
                                    <input type="text" id="sd_per_p_time" name="sd_per_p_time" class="form-control" placeholder="Enter Appointment Start" value="{{ old('sd_per_p_time') }}">
                                    <p class="text-danger">{{$errors->first('sd_per_p_time')}}</p>
                                </div>
                            </div>

                            <div class="field item form-group">
                                <label class="col-form-label col-md-3 col-sm-3 label-align" for="app_status">Status <span class="required">*</span>
                                </label>
                                <div class="col-md-6 col-sm-6">
                                    <select class="form-control" name="sd_status" id="sd_status">
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