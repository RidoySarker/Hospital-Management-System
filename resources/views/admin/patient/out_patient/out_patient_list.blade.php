@extends('layouts.app') 
@section('title') Out Patient | HMS @endsection 
@section('content')
<div class="right_col" role="main">
    <div class="">

        <div class="clearfix"></div>

        <div class="row">
            <div class="col-md-12 col-sm-12 ">
                <div class="x_panel">
                    <div class="x_title">
                        <h2>Patient list</h2>
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
                                                <th>PID</th>
                                                <th>Name</th>
                                                <th>Age</th>
                                                <th>Phone</th>
                                                <th>Address</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody id="da">
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
<div id="myModal" class="modal fade">
     <div class="modal-dialog modal-lg">
       <form id="form" method="post">
	       <div class="modal-content">
	           	<div class="modal-header" style="background-color:  #808080; height: 60px;">
	               	<h5 class="modal-title" style="color: white;">Patient Add</h5>
	             	<button type="button" class="close" data-dismiss="modal" aria-label="Close">
	               	<span aria-hidden="true" style="color: white;">&times;</span></button>
	           	</div>
	           	<div class="modal-body">
	           		<div class="row">
	           			<div class="col-md-8">
	           				<div class="col-md-12">
	           					<div class="form-group col-md-12">
			                        <label for="out_p_name"><b>Patient Name</b></label>
			                        <div>
			                            <input type="text" class="form-control" id="out_p_name" name="out_p_name" placeholder="Patient Name"/>
			                            <span id="out_p_name_error"></span>
			                        </div>
			                    </div>
	           				</div>

		                    <div class="col-md-12">
		                    	<div class="form-group col-md-3">
			                        <label><b>Gender</b></label>
			                        <div>
			                            <div class="radio">
			                                <label>
			                                    <input type="radio" class="radio" name="out_p_sex" value="Male"> Male
			                                </label>
			                            </div>
			                            <div class="radio">
			                                <label>
			                                    <input type="radio" class="radio" name="out_p_sex" value="Female"> Female
			                                </label>
			                            </div>
			                            <span id="out_p_sex_error"></span>
			                        </div>
			                    </div>

			                    <div class="form-group col-md-2">
			                        <label for="out_p_age"><b>Age</b></label>
			                        <div>
			                            <input type="text" class="form-control" id="out_p_age" name="out_p_age" placeholder="Age"/>
			                            <span id="out_p_age_error"></span>
			                        </div>
			                    </div>

			                    <div class="form-group col-md-4">
			                        <label for="out_p_phone"><b>Phone</b></label>
			                        <div>
			                            <input type="text" class="form-control" id="out_p_phone" name="out_p_phone" type="text" placeholder="Phone"/>
			                            <span id="out_p_phone_error"></span>
			                        </div>
			                    </div>

			                    <div class="form-group col-md-3">
			                        <label for="out_p_blood"><b>Blood Group</b></label>
			                        <div>
			                            <select class="form-control" id="out_p_blood" name="out_p_blood">
			                                <option selected hidden>Choose</option>
			                                <option value="A+"> A+ </option>
			                                <option value="A-"> A- </option>
			                                <option value="B+"> B+ </option>
			                                <option value="B-"> B- </option>
			                                <option value="AB+"> AB+ </option>
			                                <option value="AB-"> AB- </option>
			                                <option value="O+"> O+ </option>
			                                <option value="O-"> O- </option>
			                            </select>
			                            <span id="out_p_blood_error"></span>
			                        </div>
			                    </div>
		                    </div>

		                    <div class="col-md-12">
		                    	<div class="form-group col-md-3">
			                        <label for="out_p_height"><b>Height</b></label>
			                        <div>
			                            <input type="text" class="form-control" id="out_p_height" name="out_p_height" placeholder="Height"/>
			                            <span id="out_p_height_error"></span>
			                        </div>
			                    </div>

			                    <div class="form-group col-md-3">
			                        <label for="out_p_weight"><b>Weight</b></label>
			                        <div>
			                            <input type="text" class="form-control" id="out_p_weight" name="out_p_weight" placeholder="Weight"/>
			                            <span id="out_p_weight_error"></span>
			                        </div>
			                    </div>

			                    <div class="form-group col-md-3">
			                        <label for="out_p_bp"><b>BP</b></label>
			                        <div>
			                            <input type="text" class="form-control" id="out_p_bp" name="out_p_bp" placeholder="BP"/>
			                            <span id="out_p_bp_error"></span>
			                        </div>
			                    </div>

			                    <div class="form-group col-md-3">
			                        <label for="out_p_symptoms"><b>Symptoms</b></label>
			                        <div>
			                            <input type="text" class="form-control" id="out_p_symptoms" name="out_p_symptoms" placeholder="Symptoms"/>
			                            <span id="out_p_symptoms_error"></span>
			                        </div>
			                    </div>
		                    </div>

		                    <div class="col-md-12">
		                    	<div class="form-group col-md-12">
			                        <label for="out_p_address"><b>Address</b></label>
			                        <div>
			                        	<textarea rows="1" class="form-control" id="out_p_address" placeholder="Address" name="out_p_address"></textarea>
			                            <span id="out_p_address_error"></span>
			                        </div>
			                    </div>
		                    </div> 
		                </div>

		                <div class="col-md-4" style="background: #f4f4f4;">
		                	<div class="form-group col-md-12">
		                        <label for="out_p_ap_date"><b>Appointment Date</b></label>
		                        <div>
		                            <input class="form-control" id="out_p_ap_date" placeholder="Address" name="out_p_ap_date"/>
		                            <span id="out_p_ap_date_error"></span>
		                        </div>
		                    </div>

		                    <div class="form-group col-md-12">
		                        <label for="out_p_doc_id"><b>Doctor</b></label>
		                        <div>
		                            <select class="form-control" id="out_p_doc_id" name="out_p_doc_id">
		                                <option selected hidden>-----Choose Doctor-----</option>
		                                @foreach($doctor as $value)
		                                <option value="{{$value->doc_id}}">{{$value->doc_name}}</option>
		                                @endforeach
		                            </select>
		                            <span id="out_p_doc_id_error"></span>
		                        </div>
		                    </div>
	                    	<div class="form-group col-md-12">
		                        <label for="out_p_note"><b>Note</b></label>
		                        <div>
		                        	<textarea rows="2" class="form-control" id="out_p_note" name="out_p_note" placeholder="Note"></textarea>
		                            <span id="out_p_note_error"></span>
		                        </div>
		                    </div>
		                </div>
	           		</div>
        		</div>
	           	<div class="modal-footer">
	             	<button type="button" class="btn btn-dark btn-sm" data-dismiss="modal">Close</button>
	             	<button type="submit" class="btn btn-success btn-sm">Save</button>
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
		$(document).on("submit", "#form", function(e) {
			e.preventDefault();
			var data = $(this).serializeArray();

			$.ajax({
				url     : "{{route('out_patient.store')}}",
				data    : data,
				type    : "post",
				dataType: "json",
				success: function(data) {
					toastr["success"]("Out Patient Added Succesfully");
					$("#myModal").modal("hide");
					$("#form").trigger("reset");
					dataList();
				}, error: function(errors) {
					let error = JSON.parse(errors.responseText).errors;
			        $.each(error,function(i,message){
			            $("#"+i+"_error").html('<span class="help-block" style="color:red;">'+message+'</span>');
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
		          url     : "/out_patient/"+data,
		          type    : "delete",
		          dataType: "json",
		          success: function(data) {
		            if (data.status==200) {
		              toastr["success"]("Out Patient data deleted Succesfully");
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

	function dataList() {
		$.ajax({
			url     : "/out_patient.datalist",
			type    : "get",
			dataType: "html",
			success: function(data) {
				var data = JSON.parse(data);
				var a = 1;
				var b = $();
		        $.each(data, function (i, item) {
		            b = b.add(
	                    "<tr>"+
	                    "<td>"+ (a++) +"</td>"+
	                    "<td>"+item.out_p_s+"</td>"+
	                    "<td>"+item.out_p_name+"</td>"+
	                    "<td>"+item.out_p_age+"</td>"+
	                    "<td>"+item.out_p_phone+"</td>"+
	                    "<td>"+item.out_p_address+"</td>"+
	                    "<td><button class='view btn btn-outline-primary btn-sm' data='"+item.out_p_id+"'><i class='fa fa-eye'></i></button><button class='delete btn btn-outline-danger btn-sm' data='"+item.out_p_id+"'><i class='fa fa-trash'></i></button></td>"+
	                    "</tr>"
	                )
		        });
		        $("#da").html(b);
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
