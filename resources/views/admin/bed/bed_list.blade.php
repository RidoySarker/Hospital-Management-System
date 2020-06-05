@extends('layouts.app')
@section('title') Bed | HMS @endsection
@section('content')
<div class="right_col" role="main">
  <div class="">
    <div class="page-title">
      <div class="title_left">
        <h3>Bed</h3>
      </div>

      <div class="title_right">
        <div class="col-md-5 col-sm-5 col-xs-12 form-group pull-right top_search">
          <button style="margin-left: 12rem;" class="btn btn-primary btn-sm" data-toggle="modal" data-target="#myModal">Add New</button>
        </div>
      </div>
    </div> 

    <div class="clearfix"></div>

    <div class="row">
      <div class="col-md-12 col-sm-12 ">
        <div class="x_panel">
          <div class="x_title">
            <h2>Bed list</h2>
            <div class="clearfix"></div>
          </div>
          <div class="x_content">
            <div class="row">
              <div class="col-sm-12">
                <div class="card-box table-responsive">

                  <table id="datatable" class="table table-striped table-bordered" style="width:100%">
                    <thead>
                      <tr>
                        <th>Sl</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Floor</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                        @foreach($bed as $key => $value)
                      <tr>
                        <td>{{ $key+1 }}</td>
                        <td>{{ $value->bed_name }}</td>
                        <td>
                            @php $data = collect($bed_category)->where('bed_category_id', $value->bed_category_id)->first() @endphp
                            {{ $data->bed_category_name }}
                        </td>
                        <td>
                            @php $floor = collect($floors)->where('floor_id', $data->bed_category_floor_id)->first() @endphp
                            {{ $floor->floor_name }}
                        </td>
                        <td @if($value->bed_status=='Alloted') style='background-color:red;' @endif>{{ $value->bed_status }}</td>
                        <td>
                             <button  class='edit view btn btn-outline-primary btn-sm' data-toggle='modal' data-target='#editModal' data="{{$value->bed_id}}"><i class="fa fa-edit"></i></button>
                              <button class="btn btn-outline-danger btn-sm delete" get_id="{{$value->bed_id}}"><i class="fa fa-trash-alt"></i></button>
                              <form method="get" id="success" action="{{url('bed.success')}}">
                                <input type="hidden" name="status" id="status">
                              <button id="success" type="submit" hidden></button>
                              </form>
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
<!-- Insert Modal -->
<div class="modal fade" id="myModal" role="dialog">
  <div class="modal-dialog">
    <form id="modal-form">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Add New</h4>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span></button>
        </div>
        <div class="modal-body">
          <div class="form-group">
            <label>Name</label>
            <input type="text" class="form-control" id="bed_name" name="bed_name">
            <span id="bed_name_error"></span>
          </div>
          <input type="hidden" id="bed_status" name="bed_status" value="Available">

          <div class="form-group">
            <label>Category</label>
				<select name="bed_category_id" id="bed_category_id" class="form-control">
					<option hidden="">Select Bed Category</option>
					@foreach($bed_category as $value)
				     <option value="{{$value->bed_category_id}}">{{$value->bed_category_name}}</option>
				     @endforeach
				</select>
            <span id="bed_category_id_error"></span>
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

<!-- Edit Modal -->
<div class="modal fade" id="editModal" role="dialog">
  <div class="modal-dialog">
    <form id="edit_form">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Edit Bed</h4>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span></button>
        </div>
        <div class="modal-body">

        <div class="form-group">
            <label>Name</label>
            <input type="text" class="form-control" id="e_bed_name" name="bed_name">
            <span id="bed_name_edit"></span>
          </div>
          <div class="form-group">
            <label>Category</label>
				<select name="bed_category_id" id="e_bed_category_id" class="form-control">
					<option hidden="">Select Bed Category</option>
					@foreach($bed_category as $value)
				     <option value="{{$value->bed_category_id}}">{{$value->bed_category_name}}</option>
				     @endforeach
				</select>
            <span id="bed_category_id_edit"></span>
          </div>
        <input type="hidden" id="e_bed_id" name="e_bed_id">
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default pull-left" data-dismiss="modal">Close</button>
          <button type="submit" class="btn btn-primary submit">Update</button>
        </div>
      </div>
    </form>
  </div>
</div>
@endsection

@section('script')
<script>
 $(document).ready(function(){
  $(document).on("submit", "#modal-form", function(e) {
			e.preventDefault();
			var data = $(this).serializeArray();

			$.ajax({
				url: "{{route('bed.store')}}",
				data: data,
				type: "post",
				dataType: "json",
				success: function(data) {
          $('#status').val('Inserted')
          $('#success').submit();
				},
				error: function(errors) {
					let error = JSON.parse(errors.responseText).errors;
					$.each(error, function(i, message) {
						$("#" + i + "_error").html('<span class="help-block" style="color:red;">' + message + '</span>');
					});
				}
			});
		});

    $(document).on("click", ".delete", function() {
			var data = $(this).attr("get_id");

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
							url: "/bed/" + data,
							type: "delete",
							dataType: "json",
							success: function(data) {
								if (data.status == 200) {
                  $('#status').val('Deleted')
                  $('#success').submit();
								} else {
									toastr["error"]("Something Went Wrong");
								}
							}
						});
					} else {
						swal("Your Data is safe!");
					}
				});
		});

    $(document).on("click", ".edit", function() {
      var data = $(this).attr("data");

      $.ajax({
      	url: "/bed/" + data + "/edit",
        type: "get",
        dataType: "json",
        success: function(data) {
          $("#e_bed_name").val(data.bed_name);
          $("#e_bed_category_id").val(data.bed_category_id);
          $("#e_bed_id").val(data.bed_id);
        }
      });
    });

    $(document).on("submit", "#edit_form", function(e) {
			e.preventDefault();
		      var bed_id = $("#e_bed_id").val();
		      var bed_name = $("#e_bed_name").val();
		      var bed_category_id = $("#e_bed_category_id").val();

			$.ajax({
				url: "bed/update",
				data: {
					bed_id:bed_id,
					bed_name:bed_name,
					bed_category_id:bed_category_id,
				},
				type: "post",
				dataType: "json",
				success: function(data) {
          $('#status').val('Updated')
          $('#success').submit();
				},
				error: function(errors) {
					let error = JSON.parse(errors.responseText).errors;
					$.each(error, function(i, message) {
						$("#" + i + "_edit").html('<span class="help-block" style="color:red;">' + message + '</span>');
					});
				}
			});
		});

 }); 	
</script>
@endsection