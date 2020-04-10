@extends('layouts.app')
@section('title') Department | HMS @endsection
@section('content')

<div class="right_col" role="main">
  <div class="">
    <div class="page-title">
      <div class="title_left">
        <h3>Department</h3>
      </div>

      <div class="title_right">
        <div class="col-md-5 col-sm-5 col-xs-12 form-group pull-right top_search">
          <button style="margin-left: 168px;" class="btn btn-round btn-primary btn-sm" data-toggle="modal" data-target="#addbtn">Add New</button>
        </div>
      </div>
    </div>

    <div class="clearfix"></div>

    <div class="row">
      <div class="col-md-12 col-sm-12 ">
        <div class="x_panel">
          <div class="x_title">
            <h2>Department list</h2>
            
            <div class="clearfix"></div>
          </div>
          <div class="x_content">
            <div class="row">
              <div class="col-sm-12">
                <div class="card-box table-responsive">

                  <div id="datalist"></div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="modal fade" id="addbtn" role="dialog">
  <div class="modal-dialog">
    <form id="modal-form">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Add New</h4>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span></button>
        </div>
        <div class="modal-body">
          @csrf
          <div class="form-group">
            <label>Department Name</label>
            <input type="text" class="form-control" placeholder="Enter Department Name" id="dept_name" name="dept_name">
          </div>
          <div class="form-group">
            <label>Department Details</label>
            <input type="text" class="form-control" placeholder="Enter Department Details" id="dept_details" name="dept_details">
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default pull-left" data-dismiss="modal">Close</button>
          <button type="submit" class="btn btn-primary submit">Save</button>
        </div>
      </div>
    </form>
  </div>
</div>

<div id="edit" class="modal fade" role="dialog">
  <div class="modal-dialog">
    <form id="modal_form">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Department</h4>
          <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>
        <div class="modal-body">
          <div class="form-group">
            <label>Department Name</label>
            <input type="text" class="form-control" id="e_dept_name" name="dept_name">
          </div>
          <div class="form-group">
            <label>Department Details</label>
            <input type="text" class="form-control" id="e_dept_details" name="dept_details">
          </div>
          <input type="hidden" id="e_dept_id">
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default pull-left" data-dismiss="modal">Close</button>
          <button type="submit" class="btn btn-primary update">Save</button>
        </div>
      </div>
    </form>
  </div>
</div>
@endsection
@section('script')
<script type="text/javascript">
  $(document).ready(function() {
    $(document).on("click", ".submit", function(e) {
      e.preventDefault();
      var dept_name = $("#dept_name").val();
      var dept_details = $("#dept_details").val();

      $.ajax({
        url: "{{route('department.store')}}",
        data: {
          "_token": "{{ csrf_token() }}",
          dept_name: dept_name,
          dept_details: dept_details
        },
        type: "post",
        dataType: "json",
        success: function(data) {
          if (data.msgtype == "success") {
            toastr["success"](data.message);
            $("#addbtn").modal('hide');
            loaddata();
            $("#modal-form").trigger( "reset" );
          } else {
            toastr["error"](data.message);
          }
        },
        error: function(errors) {
          var error = errors.responseJSON;
          $("#modal-form").find(".alert-danger").remove();
          $("#modal-form").find(".modal-body").prepend('<div class="alert alert-danger">' + error.message + '</div>');
        }
      });
    });

    $("#datalist").on("click", ".edit", function() {
      var data = $(this).attr("data");

      $.ajax({
        url: "{{url('department')}}" + "/" + data + "/edit",
        type: "get",
        dataType: "json",
        success: function(data) {
          $("#e_dept_name").val(data.dept_name);
          $("#e_dept_details").val(data.dept_details);
          $("#e_dept_id").val(data.dept_id);
        }
      });
    });
    $(document).on("click", ".update", function(e) {
      e.preventDefault();
      var dept_id = $("#e_dept_id").val();
      var dept_name = $("#e_dept_name").val();
      var dept_details = $("#e_dept_details").val();

      $.ajax({
        url: "{{route('department.store')}}",
        data: {
          "_token": "{{ csrf_token() }}",
          dept_id: dept_id,
          dept_name: dept_name,
          dept_details: dept_details
        },
        type: "post",
        dataType: "json",
        success: function(data) {
          if (data.msgtype == "success") {
            toastr["success"](data.message);
            $("#edit").modal('hide');
            loaddata();
          } else {
            toastr["error"](data.message);
          }
        },
        error: function(errors) {
          var error = errors.responseJSON;
          $("#modal_form").find(".alert-danger").remove();
          $("#modal_form").find(".modal-body").prepend('<div class="alert alert-danger">' + error.message + '</div>');
        }
      });
    });

    $("#datalist").on("click", ".delete", function() {
      var data = $(this).attr("data");

      $.ajax({
        url: "{{url('department')}}" + "/" + data,
        data: {
          _token: "{{ csrf_token() }}"
        },
        type: "delete",
        dataType: "json",
        success: function(data) {
          if (data.msgtype == "success") {
            toastr["success"](data.message);
            loaddata();
          } else {
            toastr["error"](data.message);
          }
        }
      });
    });
    loaddata();
  });

  function loaddata() {

    $.ajax({
      url: "{{route('department.create')}}",
      type: "get",
      dataType: "html",
      success: function(data) {
        $("#datalist").html(data);
      }
    });
  }
</script>
@endsection
