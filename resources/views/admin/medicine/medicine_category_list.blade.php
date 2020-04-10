<table id="datatable" class="table table-striped table-bordered" style="width:100%">
    <thead>
        <tr>
            <th>Sl</th>
            <th>Category Name</th>
            <th>Category Details</th>
            <th>Action</th>
        </tr>
    </thead>


    <tbody>
    @php $sl=1 @endphp
    @foreach($category as $value)
        <tr>
            <td>{{ $sl++ }}</td>
            <td>{{ $value->med_cat_name }}</td>
            <td>{{ $value->med_cat_details }}</td>
            <td>
                <button class="edit btn btn-btn btn-outline-info btn-sm" data="{{ $value->med_cat_id }}" data-toggle="modal" data-target="#edit"><i class="fa fa-edit"></i></button>
                <button class="delete btn btn-outline-danger btn-sm" data="{{ $value->med_cat_id }}"><i class="fa fa-trash"></i></button>
            </td>
        </tr>
    @endforeach
    </tbody>
</table>
