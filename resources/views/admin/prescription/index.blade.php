@extends('layouts.app')
@section('title') Prescription | HMS @endsection
@section('content')

<div class="right_col" role="main">
  <div class="">
    <div class="page-title">
      <div class="title_left">
        <h3>Prescription</h3>
      </div>

      <div class="title_right">
        <div class="col-md-5 col-sm-5 col-xs-12 form-group pull-right top_search">
          <a href="{{route('prescription.create')}}" style="margin-left: 168px;" class="btn btn-round btn-primary btn-sm">Add New</a>
        </div>
      </div>
    </div>

    <div class="clearfix"></div>

    <div class="row">
      <div class="col-md-12 col-sm-12 ">
        <div class="x_panel">
          <div class="x_title">
            <h2> Prescription </h2>
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
<!-- INVOICE -->
<div class="modal fade" id="invoice" role="dialog">
  <div class="modal-dialog modal-lg">

      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Prescription</h4>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span></button>
        </div>
        <div class="modal-body">

          <div id="invoice_body"></div>

        </div>
        <div class="modal-footer">
          <button class="btn btn-info" type="button" id="print_btn"><i class="fa fa-print"></i> Print</button>
          <button type="button" class="btn btn-dark pull-left" data-dismiss="modal">Close</button>
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
                url: "{{url('prescription')}}" + "/" + data,
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
$('#datalist').on('click','.show',function(){
  var id=$(this).attr("data");

  $.ajax({
    url:"{{route('prescription.show')}}",
    type:'get',
    data:{id:id},
    success:function(data)
    {
      $("#invoice_body").html(data);
    }
  });

});

$('#invoice').on('click','#print_btn',function(){
  printDiv('invoice_body');
});

  function loaddata() {
    $.ajax({
      url: "{{route('prescription.list')}}",
      type: "get",
      dataType: "html",
      success: function(data) {
        $("#datalist").html(data);
      }
    });
  }
</script>
<script type="text/javascript">
function printDiv(divName) {
  var originalContents = document.body.innerHTML;
  var printContents = document.getElementById(divName).innerHTML;
  document.body.innerHTML = printContents;
  window.print();
  document.body.innerHTML = originalContents;
}

</script>
@endsection
