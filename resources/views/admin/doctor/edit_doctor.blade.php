@extends('layouts.app')
@section('title') Doctor | HMS @endsection
@section('content')
<div class="right_col" role="main">
    <div class="">
        <div class="page-title">
            <div class="title_left">
                <h3><b>Doctor</b></h3>
            </div>
        </div>
        <a href="{{url('doctor')}}">
            <button style="margin-left: 540px;" class="btn btn-round btn-primary btn-sm">Back</button>
        </a>
        <div class="clearfix"></div>

        <div class="row">
            <div class="col-md-12 col-sm-12 col-xs-12">
                <div class="x_panel">
                    <div class="x_title">
                        <h2>Edit Doctor</h2>

                        <div class="clearfix"></div>
                    </div>
                    <div class="x_content">


                        <form class="form-horizontal form-label-left" method="POST" action="{{route('doctor.update', $doctor->doc_id)}}" enctype="multipart/form-data">
                            @method("PUT")
                            @csrf
                            <div class="field item form-group">
                                <label class="col-form-label col-md-3 col-sm-3 label-align" for="name">Doctor Name <span class="required">*</span>
                                </label>
                                <div class="col-md-6 col-sm-6">
                                    <input id="name" class="form-control" name="doc_name" placeholder="Enter Name" type="text" value="{{ $doctor->doc_name }}">
                                    <p class="text-danger">{{$errors->first('doc_name')}}</p>
                                </div>
                            </div>

                            <div class="field item form-group">
                                <label class="col-form-label col-md-3 col-sm-3 label-align" for="number">Doctor Number <span class="required">*</span>
                                </label>
                                <div class="col-md-6 col-sm-6">
                                    <input type="text" id="number" name="doc_phone" placeholder="Enter Your Number" class="form-control" value="{{ $doctor->doc_phone }}">
                                    <p class="text-danger">{{$errors->first('doc_phone')}}</p>
                                </div>
                            </div>

                            <div class="field item form-group">
                                <label class="col-form-label col-md-3 col-sm-3 label-align" for="address">Doctor Address <span class="required">*</span>
                                </label>
                                <div class="col-md-6 col-sm-6">
                                    <input type="text" id="address" name="doc_address" placeholder="Enter Address" class="form-control" value="{{ $doctor->doc_address }}">
                                    <p class="text-danger">{{$errors->first('doc_address')}}</p>
                                </div>
                            </div>

                            <div class="field item form-group">
                                <label for="profile" class="col-form-label col-md-3 col-sm-3  label-align">Profile <span class="required">*</span></label>
                                <div class="col-md-6 col-sm-6">
                                    <input id="profile" type="text" name="doc_profile" class="form-control" placeholder="Enter Profile" value="{{ $doctor->doc_profile }}">
                                    <p class="text-danger">{{$errors->first('doc_profile')}}</p>
                                </div>
                            </div>

                            <div class="field item form-group">
                                <label for="department" class="col-form-label col-md-3 col-sm-3  label-align">Doctor Department <span class="required">*</span></label>
                                <div class="col-md-6 col-sm-6">
                                    <select class="form-control" name="doc_dept_id">
                                        @foreach($data as $value)
                                        <option value="" hidden>--Select--</option>
                                        <option value="{{ $value->dept_id }}" {{ $doctor->doc_dept_id==$value->dept_id ? 'selected' : '' }}>{{ $value->dept_name }}</option>
                                        @endforeach
                                    </select>
                                    <p class="text-danger">{{$errors->first('doc_dept_id')}}</p>
                                </div>
                            </div>

                            <div class="field item form-group">
                                <label class="col-form-label col-md-3 col-sm-3  label-align" for="telephone">Photo <span class="required">*</span>
                                </label>
                                <div class="col-md-6 col-sm-6">
                                    <img id='previmage' style="height:140px;" src="{{asset($doctor->doc_img)}}" alt="your image" class='img-responsive img-circle'>
                                    <br>
                                    <input type="file" id="image" name="doc_img" onchange="readURL(this);" value="{{ $doctor->doc_img }}">
                                    <p class="text-danger">{{$errors->first('doc_img')}}</p>
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
    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function(e) {
                $('#previmage')
                    .attr('src', e.target.result)
                    .width(140)
                    .height(140);
            };
            reader.readAsDataURL(input.files[0]);
        }
    }

    function myFunction() {
        window.print();
    }
</script>
@endsection
