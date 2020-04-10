@extends('layouts.app')
@section('title')  Blood Bank | HMS @endsection
@section('content')
<div class="right_col" role="main">
    <div class="">
        <div class="page-title">
            <div class="title_left">
                <h3> Blood Bank </h3>
            </div>

            <div class="title_right">
                <div class="col-md-5 col-sm-5 col-xs-12 form-group pull-right top_search">

                </div>
            </div>
        </div>

        <div class="clearfix"></div>

        <div class="row">
            <div class="col-md-12 col-sm-12 ">
                <div class="x_panel">
                    <div class="x_title">
                        <h2>Blood Bank list</h2>
                        
                        <div class="clearfix"></div>
                    </div>
                    <div class="x_content">
                        <div class="row">
                            <div class="col-sm-12">
                                <div class="card-box table-responsive">

                                    <table id="datatable" class="table table-striped table-bordered" style="width:100%">
                                        <thead>
                                            <tr>
                                                <th>SL</th>
                                                <th>Blood Group</th>
                                                <th>Status</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            @foreach($blood_data as $key => $value)
                                            <tr>
                                                <td>{{$key+1}}</td>
                                                <td>{{$value->blood_bag_name}}</td>
                                                <td>{{ $value->blood_bag_quantity }}  Bags</td>
                                                <td>
                                                    <button class="edit btn btn-btn btn-outline-info btn-sm" data="{{ $value->blood_bag_id }}" data-toggle="modal" data-target="#edit"><i class="fa fa-edit"></i></button>
                                                </td>
                                            </tr>
                                            @endforeach
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div id="edit" class="modal fade" role="dialog">
  <div class="modal-dialog">
    <form id="modal_form">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Edit Blood Bank</h4>
          <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>
        <div class="modal-body">
          <div class="form-group">
            <label>Blood Group</label>
            <input type="text" class="form-control" id="e_blood_bag_name" name="blood_bag_name" disabled>
          </div>
          <div class="form-group">
            <label>Status</label>
            <input type="text" class="form-control" id="e_blood_bag_quantity" name="blood_bag_quantity">
          </div>
          <input type="hidden" id="e_blood_bag_id">
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default pull-left" data-dismiss="modal">Close</button>
          <button type="submit" class="btn btn-primary update">Update</button>
        </div>
      </div>
    </form>
  </div>
</div>
@endsection
@section('script')
<script type="text/javascript">
    $(document).ready(function(){
        $(document).on("click", ".edit", function() {
      var data = $(this).attr("data");

      $.ajax({
        url: "{{url('bloodbank')}}" + "/" + data + "/edit",
        type: "get",
        dataType: "json",
        success: function(data) {
          $("#e_blood_bag_name").val(data.blood_bag_name);
          $("#e_blood_bag_quantity").val(data.blood_bag_quantity);
          $("#e_blood_bag_id").val(data.blood_bag_id);
        }
      });
    });

    $(document).on("click", ".update", function(e) {
      e.preventDefault();
      var blood_bag_id = $("#e_blood_bag_id").val();
      var blood_bag_name = $("#e_blood_bag_name").val();
      var blood_bag_quantity = $("#e_blood_bag_quantity").val();

      $.ajax({
        url: "{{route('bloodbank.store')}}",
        data: {
          "_token": "{{ csrf_token() }}",
          blood_bag_id: blood_bag_id,
          blood_bag_name: blood_bag_name,
          blood_bag_quantity: blood_bag_quantity
        },
        type: "post",
        dataType: "json",
        success: function(data) {
          if (data.msgtype == "success") {
            toastr["success"](data.message);
            $("#edit").modal('hide');
            location.reload();
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


    });

</script>
@endsection
