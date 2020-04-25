<table id="dataTable" class="table table-striped table-bordered" style="width:100%">
    <thead>
        <tr>
            <th>Sl</th>
            <th>Name</th>
            <th>Category</th>
            <th>Purchase Price</th>
            <th>Sales Price</th>
            <th>Quantity</th>
            <th>Expire Date</th>
            <th>Action</th>
        </tr>
    </thead>


    <tbody>
    @php $sl=1 @endphp
    @foreach($medicine as $value)
        <tr>
            <td>{{ $sl++ }}</td>
            <td>{{ $value->med_name }}</td>
            <td>@php $categorys=collect($category)->where('med_cat_id',$value->med_cat_id)->first(); @endphp
              {{$categorys->med_cat_name}}
            </td>
            <td>{{ $value->med_purchase_price }}</td>
            <td>{{ $value->med_sales_price }}</td>
            <td>{{ $value->med_quantity }}
              @if($value->med_quantity<=10)
                <button class="btn btn-sm btn-danger stock" get_id="{{$value->med_id}}">Stock</button>
              @else
                <button class="btn btn-sm btn-info stock" get_id="{{$value->med_id}}">Load</button> @endif</td>
            <td>{{ $value->med_expire_date }}</td>
            <td>
                <a href="{{route('medicine.edit',$value->med_id)}}" class="edit btn btn-btn btn-outline-info btn-sm"><i class="fa fa-edit"></i></a>
                <button class="delete btn btn-outline-danger btn-sm" data="{{ $value->med_id }}"><i class="fa fa-trash"></i></button>
            </td>
        </tr>
    @endforeach
    </tbody>
</table>
