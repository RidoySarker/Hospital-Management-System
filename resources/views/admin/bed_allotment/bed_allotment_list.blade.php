@extends('layouts.app')
@section('title') Bed Allotment | HMS @endsection
@section('content')
<div class="right_col" role="main">
  <div class="">
    <div class="page-title">
      <div class="title_left">
        <h3>Bed Allotment</h3>
      </div>

      <div class="title_right">
        <div class="col-md-5 col-sm-5 col-xs-12 form-group pull-right top_search">
          <a href="{{route('bed_allotment.create')}}">
            <button style="margin-left: 168px;" class="btn btn-round btn-primary btn-sm">Add New</button>
          </a>
        </div>
      </div>
    </div>

    <div class="clearfix"></div>

    <div class="row">
      <div class="col-md-12 col-sm-12 ">
        <div class="x_panel">
          <div class="x_title">
            <h2>Bed Allotment list</h2>
            <ul class="nav navbar-right panel_toolbox">
              <li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a>
              </li>
              <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i class="fa fa-wrench"></i></a>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a class="dropdown-item" href="#">Settings 1</a>
                  <a class="dropdown-item" href="#">Settings 2</a>
                </div>
              </li>
              <li><a class="close-link"><i class="fa fa-close"></i></a>
              </li>
            </ul>
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
                        <th>Patient ID</th>
                        <th>Bed Type</th>
                        <th>Assign Date</th>
                        <th>Discharge Date</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      @foreach($bed_allotment as $key => $value)
                      <tr>
                        <td>{{ $key+1 }}</td>
                        <td>{{ $value->bed_allot_p_id }}</td>
                        <td>
                            @php $data = collect($bed_category)->where('bed_category_id', $value->bed_allot_category_id)->first() @endphp
                            {{ $data->bed_category_name }}
                        </td>
                        <td>{{ $value->bed_allot_start }}</td>
                        <td>{{ $value->bed_allot_discharge }}</td>
                        <td>{{ $value->bed_allot_status }}</td>
                        <td>
                          <a method="GET" href="{{route('bed_allotment.edit',$value->bed_allot_id)}}">
                            <button class="btn btn-btn btn-outline-info btn-sm"><i class="fa fa-edit"></i></button>
                          </a>
                          <form method="POST" action="{{route('bed_allotment.destroy',$value->bed_allot_id)}}">
                            @csrf @method("DELETE")
                            <button type="submit" onclick="return confirm('Are you sure?')" class="btn btn-outline-danger btn-sm pull-right" style="margin-top: -36px;"><i class="fa fa-trash"></i></button>
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
@endsection