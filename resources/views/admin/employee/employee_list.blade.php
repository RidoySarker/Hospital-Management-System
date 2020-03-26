<table id="dataTable" class="table table-striped table-bordered" style="width:100%">
    <thead>
        <tr>
            <th>Sl</th>
            <th>Employee</th>
            <th>Name</th>
            <th>Role</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Email</th>
            <th>Action</th>
        </tr>
    </thead>


    <tbody>
    @php $sl=1 @endphp
    @foreach($employee as $value)
        <tr>
            <td>{{ $sl++ }}</td>
            <td style="width:70px"><img id='previmage' style="height:55px;width: 60px;" src="@if($value->emp_img) /{{$value->emp_img}} @else {{'/images/avatar.jpg'}} @endif" alt="your image" class='img-responsive img-circle'></td>
            <td>{{ $value->emp_name }}</td>
            <td>@php $role=collect($employee_role)->where('role_id',$value->emp_role_id)->first(); @endphp
              {{$role->role_name}}
            </td>
            <td>{{ $value->emp_phone }}</td>
            <td>{{ $value->emp_address }}</td>
            <td>{{ $value->emp_email }}</td>
            <td>
                <a href="{{route('employee.edit',$value->emp_id)}}" class="edit btn btn-btn btn-outline-info btn-sm"><i class="fa fa-edit"></i></a>
                <button class="delete btn btn-outline-danger btn-sm" data="{{ $value->emp_id }}"><i class="fa fa-trash"></i></button>
            </td>
        </tr>
    @endforeach
    </tbody>
</table>
