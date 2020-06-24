@extends('layouts.app')
@section('title') Appointment Report | HMS @endsection
@section('content')
<div class="right_col" role="main">
    <div class="">

        <div class="clearfix"></div>

        <div class="row">

    <div class="col-md-12 x_content" style="margin-bottom: 10px;">
    <form class="form-inline" method="post" id="searchForm">
                  <div class="form-group">
                    <label for="from" class="col-form-label">From:&nbsp&nbsp</label>
                    <input type="text" id="from" name="from" class="form-control dater">
                  </div>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
                  <div class="form-group">
                    <label for="to" class="col-form-label">To:&nbsp&nbsp</label>
                    <input type="text" id="to" name="to" class="form-control dater">
                  </div>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
                  <div class="form-group">
                    <label for="doctor" class="col-form-label">Doctor:&nbsp&nbsp</label>
                    <select id="doctor" class="form-control" name="doctor">
                    @foreach($doctors as $doctor)
                    <option value="{{$doctor->doc_id}}">{{$doctor->doc_name}}</option>
                    @endforeach
                    </select>
                  </div>

                  <button style="margin-left:auto" type="submit" id="search" class="btn btn-success">Search</button>
                </form>
        </div>

            <div class="col-md-12 col-sm-12 ">
                <div class="x_panel">
                    <div class="x_title">
                        <h2>Appointment Report</h2>
                        <div class="clearfix"></div>
                    </div>
                    <div class="x_content">
                        <div class="row">
                            <div class="col-sm-12">
                                <div class="card-box table-responsive">
                                    <table id="example" class="table table-striped table-bordered table" style="width:100%">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Date</th>
                                                <th>SL</th>
                                                <th>Patient Name</th>
                                                <th>Doctor Name</th>
                                                <th>Status</th>
                                                <th>Message</th>
                                            </tr>
                                        </thead>
                                        <tbody id="tableBody">
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
@endsection

@section('script')
<script type="text/javascript">
$("#searchForm").submit(function(e){
    e.preventDefault();
    var data=$(this).serializeArray();
    $.ajax({
        url:"{{url('appointmentReport.show')}}",
        data:data,
        dataType:'html',
        type:"get",
        success:function(data)
        {
          $("#tableBody").html(data);
		     $("#example").dataTable();
        }
    });
});

jQuery(function($) {
$(".dater").datetimepicker({
    dateFormat: 'yy-mm-dd',
});
});
</script>
@endsection
