<table id="datatable" class="table table-striped table-bordered" style="width:100%">
    <thead>
        <tr>
            <th>Sl</th>
            <th>Department Name</th>
            <th>Department Details</th>
            <th>Action</th>
        </tr>
    </thead>


    <tbody>
    @php $sl=1 @endphp
    @foreach($data as $value)
        <tr>
            <td>{{ $sl++ }}</td>
            <td>{{ $value->dept_name }}</td>
            <td>{{ $value->dept_details }}</td>
            <td>
                <button class="edit btn btn-btn btn-outline-info btn-sm" data="{{ $value->dept_id }}" data-toggle="modal" data-target="#edit"><i class="fa fa-edit"></i></button>
                <button class="delete btn btn-outline-danger btn-sm" data="{{ $value->dept_id }}" onclick="return confirm('Are you sure you want to delete this item?');"><i class="fa fa-trash"></i></button>
            </td>
        </tr>
    @endforeach
    </tbody>
</table>