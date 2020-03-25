@extends('layouts.app')
@section('title') Employee | HMS @endsection
@section('content')
<div class="right_col" role="main">
  <div class="">
    <div class="page-title">
      <div class="title_left">
        <h3>Add Employee</h3>
      </div>
    </div>

    <div class="clearfix"></div>

    <div class="row">
      <div class="col-md-12 col-sm-12 ">
        <div class="x_panel">
          <div class="x_title">
            <h2> Employee </h2>

            <div class="clearfix"></div>
          </div>


                <div class="x_content">
                  <form action="{{route('employee.update',$employee->emp_id)}}" method="post" enctype="multipart/form-data">
                    @csrf
                      <div class="field item form-group">
                        <label class="col-form-label col-md-3 col-sm-3  label-align">Employee Role<span
                            class="required">*</span></label>
                        <div class="col-md-6 col-sm-6">
                          <select class="form-control" name="role_id" >
                            <option> ----Choose Role---- </option>
                            @foreach($employee_role as $role)
                            <option value="{{$role->role_id}}" @if($role->role_id==$employee->emp_role_id) selected @endif>{{$role->role_name}}</option>
                            @endforeach
                          </select>
                        </div>
                      </div>

                    <div class="field item form-group">
                      <label class="col-form-label col-md-3 col-sm-3  label-align">Employee Name<span
                          class="required">*</span></label>
                      <div class="col-md-6 col-sm-6">
                        <input class="form-control" name="name"
                          value="{{$employee->emp_name}}" required="required" />
                      </div>
                    </div>

                    <div class="field item form-group">
                      <label class="col-form-label col-md-3 col-sm-3  label-align">Employee Phone<span
                          class="required">*</span></label>
                      <div class="col-md-6 col-sm-6">
                        <input class="form-control" name="phone" type="text" value="{{$employee->emp_phone}}" required="required"/></div>
                    </div>

                    <div class="field item form-group">
                      <label class="col-form-label col-md-3 col-sm-3  label-align">Employee Address<span
                          class="required">*</span></label>
                      <div class="col-md-6 col-sm-6">
                        <input class="form-control" name="address" type="text" value="{{$employee->emp_address}}" required="required"/></div>
                    </div>

                    <div class="form-group row">
                        <label class="col-form-label col-md-3 col-sm-3  label-align">Gender</label>
                        <div class="col-md-9 col-sm-9 ">
                          <div class="radio">
                            <label>
                              <input type="radio" class="radio" name="gender" value="1" @if($employee->emp_sex==1) checked @endif> Male
                            </label>
                          </div>
                          <div class="radio">
                            <label>
                              <input type="radio" class="radio" name="gender" value="2" @if($employee->emp_sex==2) checked @endif> Female
                            </label>
                          </div>
                        </div>
                      </div>

                    <div class="field item form-group">
      				        <label class="col-form-label col-md-3 col-sm-3 label-align">Image</label>
      				        <div class="col-md-6 col-sm-6">
      				          <img id='previmage' style="height:140px;" src="@if($employee->emp_img) /{{$employee->emp_img}} @else /images/avatar.jpg @endif" alt="your image" class='img-responsive img-circle'>
      				          <br>
                        <input type="hidden" name="old_image" value="{{$employee->emp_img}}">
      				          <input type="file" name="emp_image" onchange="readURL(this);"/>
      				        </div>
      				      </div>

                      <div class="form-group">
                        <div class="col-md-6 offset-md-3">
                    <button type='submit' class="btn btn-primary submit">Submit</button>
                    <button type='reset' class="btn btn-success">Reset</button>
                    <a href="/employee" class="btn btn-dark">Back</a>
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
  $(document).ready(function(){
    $("#password").keyup(function(){
      var length=$(this).val().length;
      if (length >= 8) {
        $(".msg").html("<p class='text-success'>Strong Password</p>")
        $("#r_password").keyup(function(){
          var r_password=$(this).val();
          var password=$("#password").val();
          if (r_password !='' && password !='' && r_password==password)
          {
            $(".submit").removeAttr("disabled",'disabled');
            $(".rmsg").html("<p class='text-success'>Password Matched</p>");
          }
          else {
            $(".submit").attr("disabled",'disabled');
            $(".rmsg").html("<p class='text-danger'>Password Not Matched</p>");
          }
        });
      }
      else {
        $(".msg").html("<p class='text-danger'>Password Length Must Be 8 Charecters</p>");
        $(".submit").attr("disabled",'disabled');

      }
    });
  });

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
