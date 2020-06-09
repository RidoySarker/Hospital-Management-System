@extends('layouts.app') 
@section('title') In Patient | HMS @endsection 
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
                                                <th>Guardian Name</th>
                                                <th>Guardian Phone</th>
                                                <th>Case</th>
                                                <th>Doctor</th>
                                                <th>Bed</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
										<tbody>
											@php $i=0 @endphp
											@foreach($inpatient as $value)
											<tr>
											<td>{{ ++$i }}</td>
											<td>{{ $value->in_p_s }}</td>
											<td>{{ $value->in_p_name }}</td>
											<td>{{ $value->in_p_guardian_name }}</td>
											<td>{{ $value->in_p_guardian_phone }}</td>
											<td>{{ $value->in_p_case }}</td>
											<td>@php $doctor= collect($doctors)->where('doc_id',$value->in_p_doc_id)->first() @endphp
												{{$doctor->doc_name}}
											</td>
											<td>
												@php $bed= collect($beds)->where('bed_id',$value->in_p_bed_id)->first() @endphp
												@php $bed_category = collect($bed_categorys)->where('bed_category_id', $value->in_p_bed_category_id)->first() @endphp
												@php $floor = collect($floors)->where('floor_id', $bed_category->bed_category_floor_id)->first() @endphp
												{{ $bed->bed_name }} - {{ $floor->floor_name }} - {{$bed_category->bed_category_name}}
											</td>
											<td>
												<button  class='show btn btn-outline-primary btn-sm' data-toggle='modal' data-target='#showModal' data="{{$value->in_p_id}}"><i class="fa fa-eye"></i></button>
												<button class="btn btn-outline-danger btn-sm delete" data="{{$value->in_p_id}}"><i class="fa fa-trash-alt"></i></button>
												<form method="get" id="success" action="{{url('inpatient.success')}}">
													<input type="hidden" readonly name="status" id="status">
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
<div id="myModal" class="modal fade">
     <div class="modal-dialog modal-lg">
       <form id="form" method="post">
	       <div class="modal-content">
	           	<div class="modal-header" style="background-color:  #808080; height: 60px;">
	               	<h5 class="modal-title" style="color: white;">Add Patient</h5>
	             	<button type="button" class="close" data-dismiss="modal" aria-label="Close">
	               	<span aria-hidden="true" style="color: white;">&times;</span></button>
	           	</div>
	           	<div class="modal-body">
	           		<div class="row">
	           			<div class="col-md-8">
	           				<div class="col-md-12">
	           					<div class="form-group col-md-12">
			                        <label for="in_p_name"><b>Patient Name</b></label>
			                        <div>
			                            <input type="text" class="form-control" id="in_p_name" name="in_p_name" placeholder="Patient Name"/>
			                            <span id="in_p_name_error"></span>
			                        </div>
			                    </div>
                            </div>
                            
                            <div class="col-md-12">
	           					<div class="form-group col-md-8">
			                        <label for="in_p_name"><b>Guardian Name</b></label>
			                        <div>
			                            <input type="text" class="form-control" id="in_p_guardian_name" name="in_p_guardian_name" placeholder="Patient Name"/>
			                            <span id="in_p_guardian_name_error"></span>
			                        </div>
                                </div>
                                <div class="form-group col-md-4">
			                        <label for="in_p_phone"><b>Guardian Phone</b></label>
			                        <div>
			                            <input type="text" class="form-control" id="in_p_guardian_phone" name="in_p_guardian_phone" type="text" placeholder="Phone"/>
			                            <span id="in_p_guardian_phone_error"></span>
			                        </div>
			                    </div>
	           				</div>

		                    <div class="col-md-12">
		                    	<div class="form-group col-md-3">
			                        <label><b>Gender</b></label>
			                        <div>
			                            <div class="radio">
			                                <label>
			                                    <input type="radio" class="radio" name="in_p_sex" value="Male"> Male
			                                </label>
			                            </div>
			                            <div class="radio">
			                                <label>
			                                    <input type="radio" class="radio" name="in_p_sex" value="Female"> Female
			                                </label>
			                            </div>
			                            <span id="in_p_sex_error"></span>
			                        </div>
			                    </div>

			                    <div class="form-group col-md-2">
			                        <label for="in_p_age"><b>Age</b></label>
			                        <div>
			                            <input type="text" class="form-control" id="in_p_age" name="in_p_age" placeholder="Age"/>
			                            <span id="in_p_age_error"></span>
			                        </div>
			                    </div>

			                    <div class="form-group col-md-4">
			                        <label for="in_p_phone"><b>Phone</b></label>
			                        <div>
			                            <input type="text" class="form-control" id="in_p_phone" name="in_p_phone" type="text" placeholder="Phone"/>
			                            <span id="in_p_phone_error"></span>
			                        </div>
			                    </div>

			                    <div class="form-group col-md-3">
			                        <label for="in_p_blood"><b>Blood Group</b></label>
			                        <div>
			                            <select class="form-control" id="in_p_blood" name="in_p_blood">
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
			                            <span id="in_p_blood_error"></span>
			                        </div>
			                    </div>
		                    </div>

		                    <div class="col-md-12">
		                    	<div class="form-group col-md-3">
			                        <label for="in_p_height"><b>Height</b></label>
			                        <div>
			                            <input type="text" class="form-control" id="in_p_height" name="in_p_height" placeholder="Height"/>
			                            <span id="in_p_height_error"></span>
			                        </div>
			                    </div>

			                    <div class="form-group col-md-3">
			                        <label for="in_p_weight"><b>Weight</b></label>
			                        <div>
			                            <input type="text" class="form-control" id="in_p_weight" name="in_p_weight" placeholder="Weight"/>
			                            <span id="in_p_weight_error"></span>
			                        </div>
			                    </div>

			                    <div class="form-group col-md-3">
			                        <label for="in_p_bp"><b>BP</b></label>
			                        <div>
			                            <input type="text" class="form-control" id="in_p_bp" name="in_p_bp" placeholder="BP"/>
			                            <span id="in_p_bp_error"></span>
			                        </div>
			                    </div>

			                    <div class="form-group col-md-3">
			                        <label for="in_p_symptoms"><b>Symptoms</b></label>
			                        <div>
			                            <input type="text" class="form-control" id="in_p_symptoms" name="in_p_symptoms" placeholder="Symptoms"/>
			                            <span id="in_p_symptoms_error"></span>
			                        </div>
			                    </div>
		                    </div>

		                    <div class="col-md-12">
		                    	<div class="form-group col-md-12">
			                        <label for="in_p_address"><b>Address</b></label>
			                        <div>
			                        	<textarea rows="1" class="form-control" id="in_p_address" placeholder="Address" name="in_p_address"></textarea>
			                            <span id="in_p_address_error"></span>
			                        </div>
			                    </div>
                            </div> 

                            <div class="form-group col-md-12">
		                        <label for="in_p_note"><b>Note</b></label>
		                        <div>
		                        	<textarea rows="2" class="form-control" id="in_p_note" name="in_p_note" placeholder="Note"></textarea>
		                            <span id="in_p_note_error"></span>
		                        </div>
                            </div>
                            
		                </div>

		                <div class="col-md-4" style="background: #f4f4f4;">
		                	<div class="form-group col-md-12">
		                        <label for="in_p_admission_date"><b>Admission Date</b></label>
		                        <div>
		                            <input class="form-control" id="in_p_admission_date" placeholder="Admission Date" name="in_p_admission_date"/>
		                            <span id="in_p_admission_date_error"></span>
		                        </div>
		                    </div>
                            
                            <div class="form-group col-md-12">
		                        <label for="in_p_case"><b>Case</b></label>
		                        <div>
                                <input type="text" class="form-control" id="in_p_case" name="in_p_case" placeholder="Patient Case"/>
			                            <span id="in_p_case_error"></span>
		                        </div>
                            </div>

                            <div class="form-group col-md-6">
		                        <label for="in_p_casualty"><b>Casualty</b></label>
		                        <div>
                                <select class="form-control" id="in_p_casualty" name="in_p_casualty">
                                <option value="no">No</option>
                                <option value="yes">Yes</option>
                                </select>
			                    <span id="in_p_casualty_error"></span>
		                        </div>
                            </div>

                            <div class="form-group col-md-6">
		                        <label for="in_p_old_patient"><b>Old Patient</b></label>
		                        <div>
                                <select class="form-control" id="in_p_old_patient" name="in_p_old_patient">
                                <option value="no">No</option>
                                <option value="yes">Yes</option>
                                </select>
			                    <span id="in_p_old_patient_error"></span>
		                        </div>
                            </div>

                            <div class="form-group col-md-12">
		                        <label for="in_p_reference"><b>Reference</b></label>
		                        <div>
                                <input class="form-control" id="in_p_reference" name="in_p_reference"/>
			                    <span id="in_p_reference_error"></span>
		                        </div>
                            </div>

                            <div class="form-group col-md-12">
		                        <label for="in_p_doc_id"><b>Doctor</b></label>
		                        <div>
                                <select class="form-control" id="in_p_doc_id" name="in_p_doc_id">
		                                <option selected hidden>-----Choose Doctor-----</option>
		                                @foreach($doctors as $value)
		                                <option value="{{$value->doc_id}}">{{$value->doc_name}}</option>
		                                @endforeach
		                            </select>
			                    <span id="in_p_doc_id_error"></span>
		                        </div>
                            </div>

                            <div class="form-group col-md-12">
		                        <label for="in_p_bed_category_id"><b>Bed Category</b></label>
		                        <div>
                                <select class="form-control" id="in_p_bed_category_id" name="in_p_bed_category_id">
		                                <option selected hidden>Category</option>
		                                @foreach($bed_categorys as $bed_category)
		                                <option value="{{$bed_category->bed_category_id}}">{{$bed_category->bed_category_name}}</option>
		                                @endforeach
		                            </select>
			                    <span id="in_p_bed_category_id_error"></span>
		                        </div>
                            </div>

                            <div class="form-group col-md-12">
		                        <label for="in_p_bed_id"><b>Bed</b></label>
		                        <div>
                                <select class="form-control" id="in_p_bed_id" name="in_p_bed_id">
                                        <option selected hidden>Bed</option>
		                            </select>
			                    <span id="in_p_bed_id_error"></span>
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

 <!-- SHOW MODAL -->
<div class="modal fade" id="showModal" tabindex="-1" role="dialog" aria-hidden="true">
  <div class="modal-dialog modal-sm">
    <div class="modal-content">
	<div class="modal-header" style="background-color:  #808080; height: 60px;">
	               	<h5 class="modal-title" style="color: white;">In Patient</h5>
	             	<button type="button" class="close" data-dismiss="modal" aria-label="Close">
	               	<span aria-hidden="true" style="color: white;">&times;</span></button>
	           	</div>
      <div class="modal-body">
	  <div>
          <h6 style="display:inline"><b>Admission Date:</b></h6>
          <p style="display:inline" id="s_add_date"></p>
		</div>
		<div>
          <h6 style="display:inline"><b>Patient Sl:</b></h6>
          <p style="display:inline" id="s_p_sl"></p>
		</div>
        <div>
          <h6 style="display:inline"><b>Patient Name:</b></h6>
          <p style="display:inline" id="s_p_name"></p>
		</div>
		<div>
		  <h6 style="display:inline"><b>Blood Group:</b></h6>
		  <p id="s_p_bg" style="display:inline"></p>
		</div>
        <div>
          <h6 style="display:inline"><b>Gender:</b></h6>
          <p style="display:inline" id="s_p_gender"></p>
        </div>
        <div>
          <h6 style="display:inline"><b>Age:</b></h6>
          <p style="display:inline" id="s_p_age"></p>
        </div>
        <div>
          <h6 style="display:inline"><b>Height:</b></h6>
          <p id="s_p_height" style="display:inline"></p>
        </div>
        <div>
          <h6 style="display:inline"><b>Weight:</b></h6>
          <p id="s_p_weight" style="display:inline"></p>
        </div>
        <div>
          <h6 style="display:inline"><b>Phone:</b></h6>
          <p id="s_p_phone" style="display:inline"></p>
        </div>
        <div>
          <h6 style="display:inline"><b>Adress:</b></h6>
          <p id="s_p_adress" style="display:inline"></p>
        </div>
        <div>
          <h6 style="display:inline"><b>BP:</b></h6>
          <p id="s_p_bp" style="display:inline"></p>
		</div>
		<div>
          <h6 style="display:inline"><b>Symptoms:</b></h6>
          <p id="s_p_symptoms" style="display:inline"></p>
		</div>
		<div>
          <h6 style="display:inline"><b>Case:</b></h6>
          <p style="display:inline" id="s_p_case"></p>
		</div>
		<div>
          <h6 style="display:inline"><b>Casualty:</b></h6>
		  <p style="display:inline" id="s_p_casualty"></p>
		  &nbsp&nbsp&nbsp
		  <h6 style="display:inline"><b>Old Patient:</b></h6>
          <p style="display:inline" id="s_p_old"></p>
		</div>
		<div>
          <h6 style="display:inline"><b>Guardian Name:</b></h6>
          <p style="display:inline" id="s_p_guard_name"></p>
		</div>
		<div>
          <h6 style="display:inline"><b>Guardian Phone:</b></h6>
          <p style="display:inline" id="s_p_guard_phone"></p>
		</div>
		<div>
          <h6 style="display:inline"><b>Reference:</b></h6>
          <p style="display:inline" id="s_p_reference"></p>
		</div>
		<div>
          <h6 style="display:inline"><b>Doctor:</b></h6>
          <p style="display:inline" id="s_p_doc"></p>
		</div>
		<div>
          <h6 style="display:inline"><b>Bed:</b></h6>
          <p style="display:inline" id="s_p_bed"></p>
		</div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>

    </div>
  </div>
</div>

@endsection
@section('script')
<script type="text/javascript">
	$(document).ready(function() {

        $("#in_p_bed_category_id").change(function(){
            var bed_cat_id=$(this).val();
            $.ajax({
                url:"{{url('bed.status')}}",
                type:'get',
                data:{bed_cat_id:bed_cat_id},
                dataType:"json",
                success:function(data)
                {
                    var b=$();
                    $.each(data, function (i, item) 
                    {
                        console.log(item);
                    b=b.add("<option value="+item.bed_id+">"+item.bed_name+"</option>");
                    });
                    $("#in_p_bed_id").html(b);
                }
            });
        });

		$(document).on("submit", "#form", function(e) {
			e.preventDefault();
			var data = $(this).serializeArray();

			$.ajax({
				url     : "{{route('in_patient.store')}}",
				data    : data,
				type    : "post",
				dataType: "json",
				success: function(data) {
				$('#status').val('Inserted');
          		$('#success').submit();
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
		          url     : "/in_patient/"+data,
		          type    : "delete",
		          dataType: "json",
		          success: function(data) {
		            if (data.status==200) {
						$('#status').val('Deleted');
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

	$(document).on('click', '.show', function() {
      var id = $(this).attr("data");
      $.ajax({
        url: "{{url('inpatient.show')}}",
        type: 'get',
        data: {
          id: id
        },
        dataType: 'json',
        success: function(data) {
          $("#s_p_name").text(data.patient.in_p_name);
          $("#s_p_bg").text(data.patient.in_p_blood);
          $("#s_p_gender").text(data.patient.in_p_sex);
          $("#s_p_age").text(data.patient.in_p_age);
          $("#s_p_height").text(data.patient.in_p_height);
          $("#s_p_weight").text(data.patient.in_p_weight);
          $("#s_p_phone").text(data.patient.in_p_phone);
          $("#s_p_adress").text(data.patient.in_p_address);
          $("#s_p_bp").text(data.patient.in_p_bp);
		  $('#s_p_symptoms').text(data.patient.in_p_symptoms);

		  $('#s_add_date').text(data.patient.in_p_admission_date);
		  $('#s_p_sl').text(data.patient.in_p_s);
		  $('#s_p_case').text(data.patient.in_p_case);
		  $('#s_p_casualty').text(data.patient.in_p_casualty);
		  $('#s_p_old').text(data.patient.in_p_old_patient);
		  $('#s_p_guard_name').text(data.patient.in_p_guardian_name);
		  $('#s_p_guard_phone').text(data.patient.in_p_guardian_phone);
		  $('#s_p_reference').text(data.patient.in_p_reference);
		  $('#s_p_doc').text(data.doctor.doc_name);
		  $('#s_p_bed').text(data.bed.bed_name+"-"+data.bed_cat.bed_category_name);
        }
      });
    });

	});


	$("#example").dataTable();

	jQuery(function($) {
        $("#in_p_admission_date").datetimepicker({
        	dateFormat: 'yy-mm-dd',
        	timeFormat: 'hh:mm:ss',
        });
    });
</script>
@endsection
