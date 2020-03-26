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
      <button style="margin-left: 505px;" class="btn btn-round btn-primary btn-sm">Doctor List</button>
    </a>
    <div class="clearfix"></div>
    @if($success=Session::get("success"))
    <div class="alert alert-success">{{$success}}</div>
    @endif

    <div class="row">
      <div class="col-md-12 col-sm-12 col-xs-12">
        <div class="x_panel">
          <div class="x_title">
            <h2>Add Doctor</h2>
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


            <form class="form-horizontal form-label-left" method="POST" action="{{route('doctor.store')}}" enctype="multipart/form-data">
              @csrf
              <div class="item form-group">
                <label class="control-label col-md-3 col-sm-3 col-xs-12" for="name">Doctor Name <span class="required">*</span>
                </label>
                <div class="col-md-12 col-sm-12 col-xs-12">
                  <input id="name" class="form-control col-md-7 col-xs-12" name="doc_name" placeholder="Enter Name" type="text" value="{{ old('doc_name') }}">
                  <p class="text-danger">{{$errors->first('doc_name')}}</p>
                </div>
              </div>

              <div class="item form-group">
                <label class="control-label col-md-3 col-sm-3 col-xs-12" for="number">Doctor Number <span class="required">*</span>
                </label>
                <div class="col-md-12 col-sm-12 col-xs-12">
                  <input type="text" id="number" name="doc_phone" placeholder="Enter Your Number" class="form-control col-md-7 col-xs-12" value="{{ old('doc_phone') }}">
                  <p class="text-danger">{{$errors->first('doc_phone')}}</p>
                </div>
              </div>

              <div class="item form-group">
                <label class="control-label col-md-3 col-sm-3 col-xs-12" for="address">Doctor Address <span class="required">*</span>
                </label>
                <div class="col-md-12 col-sm-12 col-xs-12">
                  <input type="text" id="address" name="doc_address" placeholder="Enter Address" class="form-control col-md-7 col-xs-12" value="{{ old('doc_address') }}">
                  <p class="text-danger">{{$errors->first('doc_address')}}</p>
                </div>
              </div>

              <div class="item form-group">
                <label class="control-label col-md-3 col-sm-3 col-xs-12" for="schedule">Doctor Schedule <span class="required">*</span>
                </label>
                <div class="col-md-12 col-sm-12 col-xs-12">
                  <input type="text" id="schedule" name="doc_schedule" class="form-control col-md-7 col-xs-12" value="{{ old('doc_schedule') }}">
                  <p class="text-danger">{{$errors->first('doc_schedule')}}</p>
                </div>
              </div>

              <div class="item form-group">
                <label class="control-label col-md-3 col-sm-3 col-xs-12" for="email"> Email <span class="required">*</span>
                </label>
                <div class="col-md-12 col-sm-12 col-xs-12">
                  <input type="email" id="email" name="doc_email" placeholder="Enter Email" class="form-control col-md-7 col-xs-12" value="{{ old('doc_email') }}">
                  <p class="text-danger">{{$errors->first('doc_email')}}</p>
                </div>
              </div>

              <div class="item form-group">
                <label class="control-label col-md-3 col-sm-3 col-xs-12" for="password">Password <span class="required">*</span>
                </label>
                <div class="col-md-12 col-sm-12 col-xs-12">
                  <input id="password" type="password" name="doc_password" class="optional form-control col-md-7 col-xs-12" value="{{ old('doc_password') }}">
                  <p class="text-danger">{{$errors->first('doc_password')}}</p>
                </div>
              </div>

              <div class="item form-group">
                <label for="profile" class="control-label col-md-3">Profile</label>
                <div class="col-md-12 col-sm-12 col-xs-12">
                  <input id="profile" type="text" name="doc_profile" class="form-control col-md-7 col-xs-12" value="{{ old('doc_profile') }}">
                  <p class="text-danger">{{$errors->first('doc_profile')}}</p>
                </div>
              </div>

              <div class="item form-group">
                <label for="department" class="control-label col-md-3 col-sm-3 col-xs-12">Doctor Department</label>
                <div class="col-md-12 col-sm-12 col-xs-12">
                  <select class="form-control col-md-7 col-xs-12" name="doc_dept_id">
                    @foreach($data as $value)
                    <option value="" hidden>--Select--</option>
                    <option value="{{ $value->dept_id }}">{{ $value->dept_name }}</option>
                    @endforeach
                  </select>
                  <p class="text-danger">{{$errors->first('doc_dept_id')}}</p>
                </div>
              </div>

              <div class="item form-group">
                <label class="control-label col-md-3 col-sm-3 col-xs-12" for="telephone">Photo <span class="required">*</span>
                </label>
                <div class="col-md-12 col-sm-12 col-xs-12">
                  <img id='previmage' style="height:140px;" src="{{asset('images/blankavatar.png')}}" alt="your image" class='img-responsive img-circle'>
                  <br>
                  <input type="file" id="image" name="doc_img" onchange="readURL(this);" value="{{ old('doc_img') }}">
                  <p class="text-danger">{{$errors->first('doc_img')}}</p>
                </div>
              </div>

              <div class="ln_solid"></div>
              <div class="form-group">
                <div class="col-md-6 col-md-offset-3">
                  <button type="reset" class="btn btn-primary btn-sm">Reset</button>
                  <button type="submit" class="btn btn-success btn-sm">Submit</button>
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