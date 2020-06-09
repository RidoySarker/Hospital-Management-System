@extends('layouts.app')
@section('title') Doctor | HMS @endsection
@section('content')
<div class="right_col" role="main">
  <div class="">
    <div class="page-title">
      <div class="title_left">
        <h3>Doctor</h3>
      </div>

      <div class="title_right">
        <div class="col-md-5 col-sm-5 col-xs-12 form-group pull-right top_search">
          <a href="{{route('doctor.create')}}">
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
            <h2>Doctor list</h2>
            
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
                        <th>Image</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Patient Left</th>
                        <th>Email</th>
                        <th>Department</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      @foreach($data as $key => $value)
                      <tr>
                        <td>{{$key+1}}</td>
                        <td style="width:70px">
                        <img style="height:35px;width: 40px;" src="{{ $value->doc_img }}" alt="" height="100" class='img-responsive img-circle'>
                        </td>
                        <td>{{ $value->doc_name }}</td>
                        <td>{{ $value->doc_phone }}</td>
                        <td>{{ $value->doc_email }}</td>
                        <td>
                          @php $data=collect($dept)->where('dept_id', $value->doc_dept_id)->first(); @endphp
                          {{ $data->dept_name }}
                        </td>
                        <td>
                          <a method="GET" href="{{url('doctor/'.$value->doc_id.'/edit')}}">
                            <button class="btn btn-btn btn-outline-info btn-sm"><i class="fa fa-edit"></i></button>
                          </a>
                          <form method="POST" action="{{route('doctor.destroy' , $value->doc_id)}}">
                            @csrf @method("DELETE")
                            <button type="submit" onclick="return confirm('Are you sure?')" class="btn btn-outline-danger btn-sm pull-right" style="margin-top: -36px;"><i class="fa fa-trash-alt"></i></button>
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
