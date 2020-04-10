@extends('layouts.app')
@section('title') Medicine Category | HMS @endsection
@section('content')

<div class="right_col" role="main">
  <div class="">
    <div class="page-title">
      <div class="title_left">
        <h3>Medicine Category</h3>
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
            <h2>Category list</h2>

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
          <h4 class="modal-title">Add Medicine Category</h4>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span></button>
        </div>
        <div class="modal-body">
          @csrf
          <div class="form-group">
            <label>Category Name</label>
            <input type="text" class="form-control" placeholder="Enter Medicine Category Name" id="category_name" name="category_name">
          </div>
          <div class="form-group">
            <label>Details</label>
            <textarea class="form-control" placeholder="Enter Category Details" id="category_details" name="category_details"></textarea>
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
          <h4 class="modal-title">Edit Medicine Category</h4>
          <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>
        <div class="modal-body">
          <div class="form-group">
            <label>Category Name</label>
            <input type="text" class="form-control" id="e_category_name" name="category_name">
          </div>
          <div class="form-group">
            <label>Role Details</label>
            <textarea class="form-control" id="e_category_details" name="category_details"></textarea>
          </div>
          <input type="hidden" id="e_category_id">
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
    loaddata();
    $(document).on("click", ".submit", function(e) {
      e.preventDefault();
      var category_name = $("#category_name").val();
      var category_details = $("#category_details").val();

      $.ajax({
        url: "{{route('medicine_category.store')}}",
        data: {
          "_token": "{{ csrf_token() }}",
          category_name: category_name,
          category_details: category_details
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
        url: "{{url('medicine_category')}}"+'/'+ data + "/edit",
        type: "get",
        dataType: "json",
        success: function(data) {
          $("#e_category_name").val(data.med_cat_name);
          $("#e_category_details").val(data.med_cat_details);
          $("#e_category_id").val(data.med_cat_id);
        }
      });
    });
    $(document).on("click", ".update", function(e) {
      e.preventDefault();
      var category_id = $("#e_category_id").val();
      var category_name = $("#e_category_name").val();
      var category_details = $("#e_category_details").val();

      $.ajax({
        url: "{{route('medicine_category.store')}}",
        data: {
          "_token": "{{ csrf_token() }}",
          category_id: category_id,
          category_name: category_name,
          category_details: category_details
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
        url: "{{url('medicine_category')}}" + "/" + data,
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

  });

  function loaddata() {

    $.ajax({
      url: "{{route('medicine_category.create')}}",
      type: "get",
      dataType: "html",
      success: function(data) {
        $("#datalist").html(data);
      }
    });
  }
</script>
@endsection
