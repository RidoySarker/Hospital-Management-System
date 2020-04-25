@extends('layouts.app')
@section('title') Medicine | HMS @endsection
@section('content')

<div class="right_col" role="main">
  <div class="">
    <div class="page-title">
      <div class="title_left">
        <h3>Medicine</h3>
      </div>

      <div class="title_right">
        <div class="col-md-5 col-sm-5 col-xs-12 form-group pull-right top_search">
          <a href="{{route('medicine.create')}}" style="margin-left: 168px;" class="btn btn-round btn-primary btn-sm">Add New</a>
        </div>
      </div>
    </div>

    <div class="clearfix"></div>

    <div class="row">
      <div class="col-md-12 col-sm-12 ">
        <div class="x_panel">
          <div class="x_title">
            <h2> Medicine </h2>

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

<!-- LOAD MODAL -->
<div class="modal fade bs-example-modal-sm" tabindex="-1" id="stock" role="dialog" aria-hidden="true">
  <div class="modal-dialog modal-sm">
    <div class="modal-content">

      <div class="modal-header">
        <h4 class="modal-title" id="myModalLabel2">Stock Medicine</h4>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span>
        </button>
      </div>
      <div class="modal-body" id="body">

      </div>
      <div class="modal-footer">
        <input type="hidden" id='id'>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="update btn btn-primary">Update</button>
      </div>

    </div>
  </div>
</div>

@endsection
@section('script')
<script type="text/javascript">
  $(document).ready(function() {

    $(document).on("click",".stock",function(){
      var id = $(this).attr("get_id");
      $("#id").val(id);
      $.ajax({
        url:"{{route('medicine.quantity')}}",
        type:'post',
        data: {
          _token: "{{ csrf_token() }}"
        },
        dataType:'html',
        success:function(data)
        {
          $("#body").html(data);
        }
      });
      $("#stock").modal();
    });

    $(document).on("click",".update",function(){
      var new_quantity=parseInt($("#new_quantity").val());
      var id=$("#id").val();
      $.ajax({
        url:"{{route('medicine.stock')}}",
        data:{new_quantity:new_quantity, id:id, _token:"{{ csrf_token() }}"},
        type:"post",
        success:function(data)
        {
          if (data.msgtype == "success") {
            toastr["success"](data.message);
            loaddata();
            $('.stock-form').trigger("reset");
            $("#stock").modal('hide');
          } else {
            toastr["error"](data.message);
          }
        }
      });

    });

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
                url: "{{url('medicine')}}" + "/" + data,
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
      url: "{{route('medicine.list')}}",
      type: "get",
      dataType: "html",
      success: function(data) {
        $("#datalist").html(data);
      }
    });
  }
</script>
@endsection
