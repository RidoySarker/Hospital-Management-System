<table id="dataTable" class="table table-striped table-bordered" style="width:100%">
    <thead>
        <tr>
            <th>Sl</th>
            <th>Date</th>
            <th>Expense Category</th>
            <th>Amount</th>
            <th>Note</th>
            <th>Action</th>
        </tr>
      </thead>
    <tbody>
    @php $sl=1 @endphp
    @foreach($expense as $value)
        <tr>
            <td>{{ $sl++ }}</td>
            <td>{{ $value->exp_date }}</td>
            <td>@php $categorys=collect($category)->where('exp_cat_id',$value->exp_cat_id)->first(); @endphp
              {{$categorys->exp_cat_name}}
            </td>
            <td>{{ $value->exp_amount }}</td>
            <td>{{ $value->exp_details }}</td>
            <td>
                <a href="{{route('expense.edit',$value->exp_id)}}" class="edit btn btn-btn btn-outline-info btn-sm"><i class="fa fa-edit"></i></a>
                <button class="delete btn btn-outline-danger btn-sm" data="{{ $value->exp_id }}"><i class="fa fa-trash"></i></button>
            </td>
        </tr>
    @endforeach
    </tbody>
</table>
