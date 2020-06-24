@extends('layouts.app')
@section('title') Prescription | HMS @endsection
@section('content')
<div class="right_col" role="main">
  <div class="">
    <div class="page-title">
      <div class="title_left">
        <h3>Add Prescription</h3>
      </div>
      <div class="title_right">
          <div class="col-md-5 col-sm-5 col-xs-12 form-group pull-right top_search">
              <a href="{{route('prescription.index')}}">
                  <button class="btn btn-round btn-primary btn-sm pull-right">Prescription List</button>
              </a>
          </div>
      </div>
    </div>

    <div class="clearfix"></div>

    <div class="row">
      <div class="col-md-12 col-sm-12 ">
        <div class="x_panel">
          <div class="x_title">
            <h2> Prescription </h2>

            <div class="clearfix"></div>
          </div>


            <div class="x_content">
              <form action="{{route('prescription.store')}}" method="post" >
                @csrf
                <div class="container">
                    <div class="row">

                        <div class='col-sm-4'>
                            Date
                            <div class="form-group">
                                <div class='col-md-11 xdisplay_inputx form-group row'>
                                    <input type='text' name="prescription_date" class="form-control" id="single_cal2" />
                                </div>
                            </div>
                        </div>

                        <div class='col-sm-4'>
                            Patient
                            <div class="form-group">
                                <div class='col-md-11 xdisplay_inputx form-group row'>
                                  <select class="form-control" id="patient" name="patient">
                                   <option>Select Patient</option>
                                   @foreach($patient as $patients)
                                   <option value="{{$patients->out_p_id}}">{{$patients->out_p_name}} ({{$patients->out_p_s}})</option>
                                   @endforeach
                                  </select>

                                </div>
                            </div>
                        </div>

                        <div class='col-sm-4'>
                            Doctor
                            <div class="form-group">
                                <div class='col-md-11 xdisplay_inputx form-group row'>

                                  <select class="form-control" id="doctor" name="doctor">
                                   <option>Select Doctor</option>
                                   @foreach($doctor as $doctors)
                                   <option value="{{$doctors->doc_id}}">{{$doctors->doc_name}} ({{$doctors->doc_id}})</option>
                                   @endforeach
                                  </select>
                                </div>
                            </div>
                        </div>

                        <div class='col-sm-6'>
                          History
                        <div class="form-group">
                          <div class="col-md-11 xdisplay_inputx form-group ro">
                          <textarea class="form-control" name="message" id="compose textarea" placeholder="Place some text here"></textarea>
                        </div>
                      </div>
                    </div>

                    <div class='col-sm-6'>
                      Note
                    <div class="form-group">
                      <div class="col-md-11 xdisplay_inputx form-group ro">
                      <textarea class="form-control" name="message2" id="compose textarea" placeholder="Place some text here"></textarea>
                    </div>
                  </div>
                </div>

                <div class='col-sm-12'>
                  Medicine
                <div class="form-group">
                  <div class="col-md-11 xdisplay_inputx form-group ro">
                      <table>
                        <tr>
                            <td>
                              <select class='form-control' name="medicine[]" style='width: 170px;'>
                                <option selected hidden disabled>Select</option>
                                @foreach($medicine as $value)
                                <option value='{{ $value->med_id }}'>{{ $value->med_name }}</option>
                                @endforeach
                              </select>
                            </td>
                            <input type="hidden" name="row_no" id="row_no" value=1>
                            <td>
                              <input type='text' name='dosage[]' class='form-control' style='margin-left: 9px; width: 170px;' placeholder="100mg">
                            </td>
                            <td>
                              <input type='text' name='frequency[]' class='form-control' style='margin-left: 9px; width: 170px;' placeholder="1+0+1">
                            </td>
                            <td>
                              <input type='text' name='days[]' class='form-control' style='margin-left: 9px; width: 170px;' placeholder="7days">
                            </td>
                            <td>
                              <input type='text' name='instruction[]' class='form-control' style='margin-left: 9px; width: 170px;' placeholder="After Food">
                            </td>
                            <td>
                              <button class='btn btn-success btn-sm add_field' type="button" style='margin-left: 8px;'><i class="fa fa-plus-square"></i></button>
                            </td>
                        </tr>
                      </table>
                    <div class="input_field"></div>
                </div>
              </div>
            </div>

                </div>

                <div class="form-group">
                  <div class="col-md-6 offset-md-3">
              <button type='submit' class="btn btn-primary submit">Submit</button>
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
</div>
@endsection
@section('script')
<script type="text/javascript">
$(document).ready(function() {
  var max_field = 10;
  var wrapper = $(".input_field");
  var add_field = $(".add_field");
  var i = 1;

  $(add_field).click(function(e) {
  e.preventDefault();
  if(i < max_field) {
    i++;
    $("#row_no").val(i);
    $(wrapper).append("<div>\
      <table>\
                      <tr>\
                          <td>\
                            <select class='form-control' name='medicine[]' style='width: 170px;'>\
                              <option selected hidden disabled>Select</option>\
                              @foreach($medicine as $value)\
                              <option value='{{ $value->med_id }}'>{{ $value->med_name }}</option>\
                              @endforeach\
                            </select>\
                          </td>\
                          <td>\
                            <input type='text' name='dosage[]' class='form-control' style='margin-left: 9px; width:170px;' placeholder='100mg'>\
                          </td>\
                          <td>\
                            <input type='text' name='frequency[]' class='form-control' style='margin-left: 9px; width:170px;' placeholder='1+0+1'>\
                          </td>\
                          <td>\
                            <input type='text' name='days[]' class='form-control' style='margin-left: 9px; width: 170px;' placeholder='7days'>\
                          </td>\
                          <td>\
                            <input type='text' name='instruction[]' class='form-control' style='margin-left: 9px; width: 170px;' placeholder='After Food'>\
                          </td>\
                          <td>\
                            <button class='btn btn-danger btn-sm remove_field' style='margin-left: 8px;'><i class='fa fa-trash'></i></button>\
                          </td>\
                      </tr>\
                    </table>\</div>");
  }
});
$(wrapper).on("click", ".remove_field", function(e) {
  e.preventDefault();
  $(this).closest('div').remove(); i--;
});
});
</script>
<script type="text/javascript">
CKEDITOR.replace('message',{
  filebrowserUploadUrl: 'ckeditor/',
  filebrowserUploadMethod: 'form'
});

CKEDITOR.replace('message2',{
  filebrowserUploadUrl: 'ckeditor/',
  filebrowserUploadMethod: 'form'
});
</script>
@endsection
