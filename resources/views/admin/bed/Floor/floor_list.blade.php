@extends('layouts.app')
@section('title') Floor List | HMS @endsection
@section('content')
<div class="right_col" role="main">
	<div class="">

		<div class="clearfix"></div>

		<div class="row">
			<div class="col-md-12 col-sm-12 ">
				<div class="x_panel">
					<div class="x_title">
						<h2>Floor List</h2>
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
												<th>Description</th>
												<th>ACtion</th>
											</tr>
										</thead>
										<tbody id="floor_data">
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
            <input type="text" class="form-control" id="floor_name" name="floor_name">
            <span id="floor_name_error"></span>
          </div>
          <div class="form-group">
            <label>Description</label>
            <textarea class="form-control" id="floor_description" name="floor_description"></textarea>
            <span id="floor_description_error"></span>
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
          <h4 class="modal-title">Edit Floor</h4>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span></button>
        </div>
        <div class="modal-body">
          <div class="form-group">
            <label>Name</label>
            <input type="text" class="form-control" id="e_floor_name" name="floor_name">
            <span id="floor_name_edit"></span>
          </div>
          <input type="hidden" id="e_floor_id">
          <div class="form-group">
            <label>Description</label>
            <textarea class="form-control" id="e_floor_description" name="floor_description"></textarea>
            <span id="floor_description_edit"></span>
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
@endsection
@section('script')
<script type="text/javascript">
	$(document).ready(function() {
		dataList();
		$(document).on("submit", "#modal-form", function(e) {
			e.preventDefault();
			var data = $(this).serializeArray();

			$.ajax({
				url: "{{route('floor.store')}}",
				data: data,
				type: "post",
				dataType: "json",
				success: function(data) {
					toastr["success"]("Floor Added Succesfully");
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
							url: "/floor/" + data,
							type: "delete",
							dataType: "json",
							success: function(data) {
								if (data.status == 200) {
									toastr["success"]("Floor deleted Succesfully");
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
      	url: "/floor/" + data + "/edit",
        type: "get",
        dataType: "json",
        success: function(data) {
          $("#e_floor_name").val(data.floor_name);
          $("#e_floor_description").val(data.floor_description);
          $("#e_floor_id").val(data.floor_id);
        }
      });
    });

		$(document).on("submit", "#edit_form", function(e) {
			e.preventDefault();
		      var floor_id = $("#e_floor_id").val();
		      var floor_name = $("#e_floor_name").val();
		      var floor_description = $("#e_floor_description").val();

			$.ajax({
				url: "floor/update",
				data: {
					floor_id:floor_id,
					floor_name:floor_name,
					floor_description:floor_description
				},
				type: "post",
				dataType: "json",
				success: function(data) {
					toastr["success"]("Floor Update Succesfully");
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
			url: "/floor.list",
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
						"<td>" + item.floor_name + "</td>" +
						"<td>" + item.floor_description + "</td>" +
						"<td><button class='edit view btn btn-outline-primary btn-sm' data-toggle='modal' data-target='#editModal' data='" + item.floor_id + "'><i class='fa fa-edit'></i></button><button class='delete btn btn-outline-danger btn-sm' data='" + item.floor_id + "'><i class='fa fa-trash'></i></button></td>" +
						"</tr>"
					)
				});
				$("#floor_data").html(b);
				$("#example").dataTable();
			}
		});
	}

	jQuery(function($) {
		$("#out_p_ap_date").datetimepicker({
			dateFormat: 'yy-mm-dd',
			timeFormat: 'hh:mm:ss',
		});
	});
</script>
@endsection