@extends('layouts.app')
@section('title') Employee Role | HMS @endsection
@section('content')

<div class="right_col" role="main">
  <div class="">
    <div class="page-title">
      <div class="title_left">
        <h3>Employee Role</h3>
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
            <h2>Role list</h2>
            <ul class="nav navbar-right panel_toolbox">
              <li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a>
              </li>
              <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i class="fa fa-wrench"></i></a>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a class="dropdown-item" href="#">Settings 1</a>
                  <a class="dropdown-item" href="#">Settings 2</a>
                </div>
              </li>
              <li><a class="close-link"><i class="fa fa-close"></i></a>
              </li>
            </ul>
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
<!-- ADD MODAL -->
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
            <label>Role Name</label>
            <input type="text" class="form-control" placeholder="Enter Role Name" id="role_name" name="role_name">
          </div>
          <div class="form-group">
            <label>Role Details</label>
            <input type="text" class="form-control" placeholder="Enter Role Details" id="role_details" name="role_details">
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
<!-- EDIT MODAL -->
<div id="edit" class="modal fade" role="dialog">
  <div class="modal-dialog">
    <form id="modal_form">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Role</h4>
          <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>
        <div class="modal-body">
          <div class="form-group">
            <label>Role Name</label>
            <input type="text" class="form-control" id="e_role_name" name="role_name">
          </div>
          <div class="form-group">
            <label>Role Details</label>
            <input type="text" class="form-control" id="e_role_details" name="role_details">
          </div>
          <input type="hidden" id="e_role_id">
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
      var role_name = $("#role_name").val();
      var role_details = $("#role_details").val();

      $.ajax({
        url: "{{route('employee_role.store')}}",
        data: {
          "_token": "{{ csrf_token() }}",
          role_name: role_name,
          role_details: role_details
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
        url: "{{url('employee_role')}}" + "/" + data + "/edit",
        type: "get",
        dataType: "json",
        success: function(data) {
          $("#e_role_name").val(data.role_name);
          $("#e_role_details").val(data.role_details);
          $("#e_role_id").val(data.role_id);
        }
      });
    });
    $(document).on("click", ".update", function(e) {
      e.preventDefault();
      var role_id = $("#e_role_id").val();
      var role_name = $("#e_role_name").val();
      var role_details = $("#e_role_details").val();

      $.ajax({
        url: "{{route('employee_role.store')}}",
        data: {
          "_token": "{{ csrf_token() }}",
          role_id: role_id,
          role_name: role_name,
          role_details: role_details
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
      swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this data!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
      $.ajax({
        url: "{{url('employee_role')}}" + "/" + data,
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
    } else {
      swal("Your Data is safe!");
    }
  });
    });
    loaddata();
  });

  function loaddata() {

    $.ajax({
      url: "{{route('employee_role.create')}}",
      type: "get",
      dataType: "html",
      success: function(data) {
        $("#datalist").html(data);
      }
    });
  }
</script>
@endsection
