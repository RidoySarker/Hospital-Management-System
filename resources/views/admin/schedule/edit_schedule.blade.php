@extends('layouts.app')
@section('title') Doctor | HMS @endsection
@section('content')
<div class="right_col" role="main">
    <div class="">
        <div class="page-title">
            <div class="title_left">
                <h3><b>Schedule</b></h3>
            </div>
        </div>
        <a href="{{url('schedule')}}">
            <button style="margin-left: 540px;" class="btn btn-round btn-primary btn-sm">Back</button>
        </a>
        <div class="clearfix"></div>

        <div class="row">
            <div class="col-md-12 col-sm-12 col-xs-12">
                <div class="x_panel">
                    <div class="x_title">
                        <h2>Edit Schedule</h2>
                    
                        <div class="clearfix"></div>
                    </div>
                    <div class="x_content">


                        <form class="form-horizontal form-label-left" method="POST" action="{{ route('schedule.update', $schedule->sd_id) }}" enctype="multipart/form-data">
                            @method("PUT")
                            @csrf
                            <div class="field item form-group">
                                <label class="col-form-label col-md-3 col-sm-3 label-align" for="sd_d_id">Doctor Name <span class="required">*</span>
                                </label>
                                <div class="col-md-6 col-sm-6">
                                    <select class="form-control" name="sd_d_id" id="sd_d_id">
                                        <option hidden>Select Option</option>
                                        @foreach($doctor as $value)
                                        <option value="{{$value->doc_id}}" {{ $schedule->sd_d_id==$value->doc_id ? 'selected' : '' }}>{{$value->doc_name}}</option>
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
                                        <option value="Sunday" {{ $schedule->sd_available_days=='Sunday' ? 'selected' : '' }}>Sunday</option>
                                        <option value="Monday" {{ $schedule->sd_available_days=='Monday' ? 'selected' : '' }}>Monday</option>
                                        <option value="Tuesday" {{ $schedule->sd_available_days=='Tuesday' ? 'selected' : '' }}>Tuesday</option>
                                        <option value="Wednesday" {{ $schedule->sd_available_days=='Wednesday' ? 'selected' : '' }}>Wednesday</option>
                                        <option value="Thursday" {{ $schedule->sd_available_days=='Thursday' ? 'selected' : '' }}>Thursday</option>
                                        <option value="Friday" {{ $schedule->sd_available_days=='Friday' ? 'selected' : '' }}>Friday</option>
                                        <option value="Saturday" {{ $schedule->sd_available_days=='Saturday' ? 'selected' : '' }}>Saturday</option>
                                    </select>
                                </div>
                            </div>

                            <div class="field item form-group">
                                <label class="col-form-label col-md-3 col-sm-3 label-align" for="sd_start_time">Start Time <span class="required">*</span>
                                </label>
                                <div class="col-md-6 col-sm-6">
                                    <input id="sd_start_time" class="form-control" name="sd_start_time" placeholder="Enter Start Time" type="time" value="{{ $schedule->sd_start_time }}">
                                    <p class="text-danger">{{$errors->first('sd_start_time')}}</p>
                                </div>
                            </div>

                            <div class="field item form-group">
                                <label class="col-form-label col-md-3 col-sm-3 label-align" for="sd_end_time">End Time <span class="required">*</span>
                                </label>
                                <div class="col-md-6 col-sm-6">
                                    <input type="time" id="sd_end_time" name="sd_end_time" class="form-control" placeholder="Enter End Time" value="{{ $schedule->sd_end_time }}">
                                    <p class="text-danger">{{$errors->first('sd_end_time')}}</p>
                                </div>
                            </div>

                            <div class="field item form-group">
                                <label class="col-form-label col-md-3 col-sm-3 label-align" for="sd_per_p_time">Per Patient Time  <span class="required">*</span>
                                </label>
                                <div class="col-md-6 col-sm-6">
                                    <input type="text" id="sd_per_p_time" name="sd_per_p_time" class="form-control" placeholder="Enter Appointment Start" value="{{ $schedule->sd_per_p_time }}">
                                    <p class="text-danger">{{$errors->first('sd_per_p_time')}}</p>
                                </div>
                            </div>

                            <div class="field item form-group">
                                <label class="col-form-label col-md-3 col-sm-3 label-align" for="app_status">Status <span class="required">*</span>
                                </label>
                                <div class="col-md-6 col-sm-6">
                                    <select class="form-control" name="sd_status" id="sd_status">
                                        <option value="Active" {{ $schedule->sd_status=='Active' ? 'selected' : '' }}>Active</option>
                                        <option value="Inactive" {{ $schedule->sd_status=='Inactive' ? 'selected' : '' }}>Inactive </option>
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
