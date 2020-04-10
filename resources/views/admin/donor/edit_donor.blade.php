@extends('layouts.app')
@section('title') Donor | HMS @endsection 
@section('content')
<div class="right_col" role="main">
    <div class="">
        <div class="page-title">
            <div class="title_left">
                <h3>Edit Donor</h3>
            </div>
            <div class="title_right">
                <div class="col-md-5 col-sm-5 col-xs-12 form-group pull-right top_search">
                    <a href="{{route('donor.index')}}">
                        <button class="btn btn-round btn-primary btn-sm pull-right">Back</button>
                    </a>
                </div>
            </div>
        </div>
        <div class="clearfix"></div>
        <div class="row">
            <div class="col-md-12 col-sm-12 ">
                <div class="x_panel">
                    <div class="x_title">
                        <h2>Edit Donor </h2>
                        <div class="clearfix"></div>
                    </div>
                    <div class="x_content">
                        <form action="{{route('donor.update',$edit_donor->donor_id)}}" method="post">
                            @csrf
                            @method("PUT")

                            <div class="field item form-group">
                                <label class="col-form-label col-md-3 col-sm-3  label-align">Donor Name<span class="required">*</span></label>
                                <div class="col-md-6 col-sm-6">
                                    <input class="form-control" data-validate-length-range="6" data-validate-words="2" name="donor_name" placeholder="Name"  value="{{$edit_donor->donor_name}}">
                                    <p class="text-danger">{{$errors->first('donor_name')}}</p>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-form-label col-md-3 col-sm-3  label-align">Gender*</label>
                                <div class="col-md-9 col-sm-9 ">
                                    <div class="radio">
                                        <label>
                                            <input type="radio" class="radio" name="donor_sex" value="1" {{$edit_donor->donor_sex=='1' ? 'checked':''}}> Male
                                        </label>
                                    </div>
                                    <div class="radio">
                                        <label>
                                            <input type="radio" class="radio" name="donor_sex" value="2" {{$edit_donor->donor_sex=='2' ? 'checked':''}}> Female
                                        </label>
                                    </div>
                                    <p class="text-danger">{{$errors->first('donor_sex')}}</p>
                                </div>

                            </div>
                            <div class="field item form-group">
                                <label class="col-form-label col-md-3 col-sm-3  label-align">Donor Age<span class="required">*</span></label>
                                <div class="col-md-6 col-sm-6">
                                    <input type="number" min="0" class="form-control" data-validate-length-range="6" data-validate-words="2" name="donor_age" placeholder="Age" value="{{ $edit_donor->donor_age}}">
                                    <p class="text-danger">{{$errors->first('donor_age')}}</p>
                                </div>
                            </div>
                            <div class="field item form-group">
                                <label class="col-form-label col-md-3 col-sm-3  label-align">Blood Group<span class="required">*</span></label>
                                <div class="col-md-6 col-sm-6">
                                    <select class="form-control" name="donor_blood" >
                                        <option value="" hidden>-----Choose Blood Group-----</option>
                                        <option value="A+" value="A+" {{$edit_donor->donor_blood=="A+" ? 'selected':''}}> A+ </option>
                                        <option value="A-" {{$edit_donor->donor_blood=="A-" ? 'selected':''}}> A- </option>
                                        <option value="B+" {{$edit_donor->donor_blood=="B+" ? 'selected':''}}> B+ </option>
                                        <option value="B-" {{$edit_donor->donor_blood=="B-" ? 'selected':''}}> B- </option>
                                        <option value="AB+" {{$edit_donor->donor_blood=="AB+" ? 'selected':''}}> AB+ </option>
                                        <option value="AB-" {{$edit_donor->donor_blood=="AB-" ? 'selected':''}}> AB- </option>
                                        <option value="O+" {{$edit_donor->donor_blood=="O+" ? 'selected':''}}> O+ </option>
                                        <option value="O-" {{$edit_donor->donor_blood=="O-" ? 'selected':''}}> O- </option>
                                    </select>
                                    <p class="text-danger">{{$errors->first('donor_blood')}}</p>
                                </div>
                            </div>
                            <div class="field item form-group">
                                <label class="col-form-label col-md-3 col-sm-3 label-align" for="donor_last_date">Last Donation Date <span class="required">*</span>
                                </label>
                                <div class="col-md-6 col-sm-6">
                                    <input type="date" name="donor_last_date" class="form-control cdatepicker" placeholder="Enter Details" value="{{$edit_donor->donor_last_date}}">
                                    <p class="text-danger" >{{$errors->first('donor_last_date')}}</p>
                                </div>
                            </div>
                            <div class="field item form-group">
                                <label class="col-form-label col-md-3 col-sm-3  label-align">Donor Phone<span class="required">*</span></label>
                                <div class="col-md-6 col-sm-6">
                                    <input class="form-control" placeholder="Phone" name="donor_phone" type="text" value="{{$edit_donor->donor_phone}}">
                                    <p class="text-danger">{{$errors->first('donor_phone')}}</p>
                                </div>
                            </div>

                            <div class="field item form-group">
                                <label class="col-form-label col-md-3 col-sm-3  label-align">Donor Email<span class="required">*</span></label>
                                <div class="col-md-6 col-sm-6">
                                    <input class="form-control" name="donor_email" type="email" placeholder="Email" value="{{$edit_donor->donor_email}}">

                                </div>
                            </div>



                            <div class="form-group">
                                <div class="col-md-6 offset-md-3">
                                    <button type='submit' class="btn btn-primary submit">Update</button>
                                    <button type='reset' class="btn btn-success">Reset</button>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>

@endsection @section('script')
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
