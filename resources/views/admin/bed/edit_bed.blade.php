@extends('layouts.app')
@section('title') Bed | HMS @endsection
@section('content')
<div class="right_col" role="main">
    <div class="">
        <div class="page-title">
            <div class="title_left">
                <h3><b>Bed</b></h3>
            </div>
        </div>
        <a href="{{url('bed')}}">
            <button style="margin-left: 522px;" class="btn btn-round btn-primary btn-sm">Bed List</button>
        </a>
        <div class="clearfix"></div>

        <div class="row">
            <div class="col-md-12 col-sm-12 col-xs-12">
                <div class="x_panel">
                    <div class="x_title">
                        <h2>Edit Bed</h2>
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


                        <form class="form-horizontal form-label-left" method="POST" action="{{route('bed.update', $bed->bed_id)}}">
                            @method("PUT")
                            @csrf

                            <div class="field item form-group">
                                <label class="col-form-label col-md-3 col-sm-3 label-align" for="bed_category_id">Bed Type <span class="required">*</span>
                                </label>
                                <div class="col-md-6 col-sm-6">
                                    <select class="form-control" name="bed_category_id" id="bed_category_id">
                                        <option hidden>Select Option</option>
                                        @foreach($bed_category as $value)
                                        <option value="{{$value->bed_category_id}}" {{ $value->bed_category_id==$bed->bed_category_id ? 'selected' : '' }}>{{$value->bed_category_name}}</option>
                                        @endforeach
                                    </select>
                                </div>
                            </div>

                            <div class="field item form-group">
                                <label class="col-form-label col-md-3 col-sm-3 label-align" for="bed_capacity">Bed Capacity <span class="required">*</span>
                                </label>
                                <div class="col-md-6 col-sm-6">
                                    <input type="number" id="bed_capacity" name="bed_capacity" class="form-control" placeholder="Enter Details" value="{{ $bed->bed_capacity }}">
                                    <p class="text-danger">{{$errors->first('bed_capacity')}}</p>
                                </div>
                            </div>

                            <div class="field item form-group">
                                <label class="col-form-label col-md-3 col-sm-3 label-align" for="bed_charge">Bed Charge <span class="required">*</span>
                                </label>
                                <div class="col-md-6 col-sm-6">
                                    <input type="number" id="bed_charge" name="bed_charge" class="form-control" placeholder="Enter Details" value="{{ $bed->bed_charge }}">
                                    <p class="text-danger">{{$errors->first('bed_charge')}}</p>
                                </div>
                            </div>

                            <div class="field item form-group">
                                <label class="col-form-label col-md-3 col-sm-3 label-align" for="bed_status">Status <span class="required">*</span>
                                </label>
                                <div class="col-md-6 col-sm-6">
                                    <select class="form-control" name="bed_status" id="bed_status">
                                        <option value="Active" {{ $bed->bed_status=='Active' ? 'selected' : '' }}>Active</option>
                                        <option value="Inactive" {{ $bed->bed_status=='Inactive' ? 'selected' : '' }}>Inactive</option>
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