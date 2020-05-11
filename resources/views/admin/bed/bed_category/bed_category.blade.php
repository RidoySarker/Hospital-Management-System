@extends('layouts.app')
@section('title') Bed Category | HMS @endsection
@section('content')
<div class="right_col" role="main">
	<div class="">

		<div class="clearfix"></div>

		<div class="row">
			<div class="col-md-12 col-sm-12 ">
				<div class="x_panel">
					<div class="x_title">
						<h2>Bed Category List</h2>
						<button type="button" class="btn btn-primary btn-sm pull-right" data-toggle="modal" data-target="#myModal">Add New</button>
						<div class="clearfix"></div>
					</div>
					<div class="x_content">
						<div class="row">
							<div class="col-sm-12">
								<div class="card-box table-responsive">
									<table id="example" class="table table-striped table-bordered table" style="width:100%">
										<thead>
											<tr>
												<th>Sl</th>
												<th>Name</th>
												<th>Floor</th>
												<th>Description</th>
												<th>Action</th>
											</tr>
										</thead>
										<tbody id="category_data">
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
            <input type="text" class="form-control" id="category_name" name="bed_category_name">
            <span id="category_name_error"></span>
          </div>
          <div class="form-group">
            <label>Floor</label>
				<select name="bed_category_floor_id" id="category_floor_id" class="form-control">
					<option hidden="">Select Floor</option>
					@foreach($floor_data as $value)
				     <option value="{{$value->floor_id}}">{{$value->floor_name}}</option>
				     @endforeach
				</select>
            <span id="category_floor_id_error"></span>
          </div>
          <div class="form-group">
            <label>Description</label>
            <textarea class="form-control" id="category_details" name="bed_category_details"></textarea>
            <span id="category_details_error"></span>
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

{{-- Edit Modal --}}
<div class="modal fade" id="editModal" role="dialog">
  <div class="modal-dialog">
    <form id="edit_form">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Edit Bed Category</h4>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span></button>
        </div>
        <div class="modal-body">
          <div class="form-group">
            <label>Name</label>
            <input type="text" class="form-control" id="e_category_name" name="bed_category_name">
            <span id="category_name_edit"></span>
          </div>
          <input type="hidden" id="e_category_id">
          <div class="form-group">
            <label>Floor</label>
				<select name="bed_category_floor_id" id="e_category_floor_id" class="form-control">
					<option hidden="">Select Floor</option>
					@foreach($floor_data as $value)
				     <option value="{{$value->floor_id}}">{{$value->floor_name}}</option>
				     @endforeach
				</select>
            <span id="category_floor_id_edit"></span>
          </div>
          <div class="form-group">
            <label>Description</label>
            <textarea class="form-control" id="e_category_details" name="bed_category_details"></textarea>
            <span id="category_details_edit"></span>
	          </div>
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
<script type="text/javascript">
	$(document).ready(function() {
		dataList();
		$(document).on("submit", "#modal-form", function(e) {
			e.preventDefault();
			var data = $(this).serializeArray();

			$.ajax({
				url: "{{route('bed_category.store')}}",
				data: data,
				type: "post",
				dataType: "json",
				success: function(data) {
					toastr["success"]("Bed Category Added Succesfully");
					$("#myModal").modal("hide");
					$("#modal-form").trigger("reset");
					dataList();
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
							url: "/bed_category/" + data,
							type: "delete",
							dataType: "json",
							success: function(data) {
								if (data.status == 200) {
									toastr["success"]("Bed Category deleted Succesfully");
									dataList();
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
	});


    $(document).on("click", ".edit", function() {
      var data = $(this).attr("data");

      $.ajax({
      	url: "/bed_category/" + data + "/edit",
        type: "get",
        dataType: "json",
        success: function(data) {
          $("#e_category_name").val(data.bed_category_name);
          $("#e_category_floor_id").val(data.bed_category_floor_id);
          $("#e_category_details").val(data.bed_category_details);
          $("#e_category_id").val(data.bed_category_id);
        }
      });
    });

		$(document).on("submit", "#edit_form", function(e) {
			e.preventDefault();
		      var bed_category_id = $("#e_category_id").val();
		      var bed_category_name = $("#e_category_name").val();
		      var bed_category_floor_id = $("#e_category_floor_id").val();
		      var bed_category_details = $("#e_category_details").val();

			$.ajax({
				url: "bed_category/update",
				data: {
					bed_category_id:bed_category_id,
					bed_category_name:bed_category_name,
					bed_category_floor_id:bed_category_floor_id,
					bed_category_details:bed_category_details,
				},
				type: "post",
				dataType: "json",
				success: function(data) {
					toastr["success"]("Bed Category Update Succesfully");
					$("#editModal").modal("hide");
					$("#adit_form").trigger("reset");
					dataList();
				},
				error: function(errors) {
					let error = JSON.parse(errors.responseText).errors;
					$.each(error, function(i, message) {
						$("#" + i + "_edit").html('<span class="help-block" style="color:red;">' + message + '</span>');
					});
				}
			});
		});



	function dataList() {
		$.ajax({
			url: "/bed_category.list",
			type: "get",
			dataType: "html",
			success: function(data) {
				var data = JSON.parse(data);
				var a = 1;
				var b = $();
				$.each(data, function(i, item) {
					b = b.add(
						"<tr>" +
						"<td>" + (a++) + "</td>" +
						"<td>" + item.bed_category_name + "</td>" +
						"<td>" + item.bed_category_floor_id + "</td>" +
						"<td>" + item.bed_category_details + "</td>" +
						"<td><button class='edit view btn btn-outline-primary btn-sm' data-toggle='modal' data-target='#editModal' data='" + item.bed_category_id + "'><i class='fa fa-edit'></i></button><button class='delete btn btn-outline-danger btn-sm' data='" + item.bed_category_id + "'><i class='fa fa-trash'></i></button></td>" +
						"</tr>"
					)
				});
				$("#category_data").html(b);
				$("#example").dataTable();
			}
		});
	}
</script>
@endsection