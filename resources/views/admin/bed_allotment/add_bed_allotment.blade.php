@extends('layouts.app')
@section('title') Bed Allotment | HMS @endsection
@section('content')
<div class="right_col" role="main">
    <div class="">
        <div class="page-title">
            <div class="title_left">
                <h3><b>Bed Allotment</b></h3>
            </div>
        </div>
        <a href="{{url('bed_allotment')}}">
            <button style="margin-left: 460px;" class="btn btn-round btn-primary btn-sm">Bed Allotment List</button>
        </a>
        <div class="clearfix"></div>

        <div class="row">
            <div class="col-md-12 col-sm-12 col-xs-12">
                <div class="x_panel">
                    <div class="x_title">
                        <h2>Add Bed Allotment</h2>
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


                        <form class="form-horizontal form-label-left" method="POST" action="{{route('bed_allotment.store')}}">
                            @csrf

                            <div class="field item form-group">
                                <label class="col-form-label col-md-3 col-sm-3 label-align" for="bed_allot_p_id">Patient <span class="required">*</span>
                                </label>
                                <div class="col-md-6 col-sm-6">
                                    <input type="text" id="bed_allot_p_id" name="bed_allot_p_id" class="form-control" placeholder="Enter Details" value="{{ old('bed_allot_p_id') }}">
                                    <p class="text-danger">{{$errors->first('bed_allot_p_id')}}</p>
                                </div>
                            </div>

                            <div class="field item form-group">
                                <label class="col-form-label col-md-3 col-sm-3 label-align">Patient Name <span class="required">*</span>
                                </label>
                                <div class="col-md-6 col-sm-6">
                                    <input id="pname" class="form-control" disabled>
                                    <p></p>
                                </div>
                            </div>

                            <div class="field item form-group">
                                <label class="col-form-label col-md-3 col-sm-3 label-align" for="bed_allot_category_id">Bed Type <span class="required">*</span>
                                </label>
                                <div class="col-md-6 col-sm-6">
                                    <select class="form-control" name="bed_allot_category_id" id="bed_allot_category_id">
                                        <option disabled selected value>Select Option</option>
                                        @foreach($bed_category as $value)
                                        <option value="{{$value->bed_category_id}}">{{$value->bed_category_name}}</option>
                                        @endforeach
                                    </select>
                                    <span id="show"></span>
                                    <p></p>
                                </div>
                            </div>

                            <div class="field item form-group" hidden>
                                <label class="col-form-label col-md-3 col-sm-3 label-align">Bed Quantity <span class="required">*</span>
                                </label>
                                <div class="col-md-6 col-sm-6">
                                    <input id="quantity" class="form-control" disabled>
                                </div>
                            </div>

                            <div class="field item form-group">
                                <label class="col-form-label col-md-3 col-sm-3 label-align" for="bed_allot_start">Assign Date <span class="required">*</span>
                                </label>
                                <div class="col-md-6 col-sm-6">
                                    <input type="date" id="bed_allot_start" name="bed_allot_start" class="form-control cdatepicker" placeholder="Enter Details" value="{{ old('bed_allot_start') }}">
                                    <p class="text-danger">{{$errors->first('bed_allot_start')}}</p>
                                </div>
                            </div>

                            <div class="field item form-group">
                                <label class="col-form-label col-md-3 col-sm-3 label-align" for="bed_allot_discharge">Discharge Date <span class="required">*</span>
                                </label>
                                <div class="col-md-6 col-sm-6">
                                    <input type="date" id="bed_allot_discharge" name="bed_allot_discharge" class="form-control cdatepicker" placeholder="Enter Details" value="{{ old('bed_allot_discharge') }}">
                                    <p class="text-danger">{{$errors->first('bed_allot_discharge')}}</p>
                                </div>
                            </div>

                            <div class="field item form-group">
                                <label class="col-form-label col-md-3 col-sm-3 label-align" for="bed_allot_status">Status <span class="required">*</span>
                                </label>
                                <div class="col-md-6 col-sm-6">
                                    <select class="form-control" name="bed_allot_status" id="bed_allot_status">
                                        <option value="Active">Active</option>
                                        <option value="Inactive">Inactive</option>
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
<script type="text/javascript">
    $(document).ready(function() {
        $("#bed_allot_p_id").keyup(function() {
            var data = $(this).val();
            $.ajax({
                url     : "/get_patient_name/"+data,
                success: function(data) {
                    if(data==0) {
                        $("#pname").addClass('text-danger').val("Invalid Patient Id");
                    } else {
                        $("#pname").removeClass('text-danger').val(data[0]["p_name"]);
                    }
                }
            });
        });

        $("#bed_allot_category_id").change(function() {
            var data = $(this).val();
            
            $.ajax({
                url     : "/get_bed_quantity/"+data,
                success: function(data) {
                    $("#quantity").val(data[0]["bed_capacity"]);
                }
            });
        });

        $("#bed_allot_category_id").change(function() {
            var category = $("#bed_allot_category_id").val();

            $.ajax({
                url    : "/list/"+category,
                success: function(data) {
                    var i=0;
                    $(data).each(function(k,v) {
                        ++i;
                    });
                    var quantity = $("#quantity").val();
                    var available = parseInt(quantity-i);
                    if(available>0) {
                        $("#show").html('<font color="green">Bed Available ' +available+'</font>');
                        $(".submit").attr("disabled", false);
                    } else{
                        $("#show").html('<font color="red">Bed Is Not Available</font>');
                        $(".submit").attr("disabled", true);
                    }
                }
            });
        });

    });
</script>
@endsection