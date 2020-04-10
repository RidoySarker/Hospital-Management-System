@extends('layouts.app')
@section('title') Employee | HMS @endsection
@section('content')

<div class="right_col" role="main">
  <div class="">
    <div class="page-title">
      <div class="title_left">
        <h3>Employee</h3>
      </div>

      <div class="title_right">
        <div class="col-md-5 col-sm-5 col-xs-12 form-group pull-right top_search">
          <a href="{{route('employee.create')}}" style="margin-left: 168px;" class="btn btn-round btn-primary btn-sm">Add New</a>
        </div>
      </div>
    </div>

    <div class="clearfix"></div>

    <div class="row">
      <div class="col-md-12 col-sm-12 ">
        <div class="x_panel">
          <div class="x_title">
            <h2> Employee </h2>
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

@endsection
@section('script')
<script type="text/javascript">
  $(document).ready(function() {
    loaddata();
    $('#dataTable').DataTable();
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
                url: "{{url('employee')}}" + "/" + data,
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
      url: "{{route('employee.list')}}",
      type: "get",
      dataType: "html",
      success: function(data) {
        $("#datalist").html(data);
      }
    });
  }
</script>
@endsection
