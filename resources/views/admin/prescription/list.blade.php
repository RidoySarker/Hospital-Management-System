<table id="dataTable" class="table table-striped table-bordered" style="width:100%">
    <thead>
        <tr>
          <th>Sl</th>
          <th>Code</th>
          <th>Date</th>
          <th>Patient Name</th>
          <th>Doctore Name</th>
          <th>Medicines</th>
          <th>Note</th>
          <th>Action</th>
        </tr>
    </thead>


    <tbody>
    @php $sl=1 @endphp
    @foreach($prescription as $value)
        <tr>
            <td>{{ $sl++ }}</td>
            <td>{{ $value->prescription_code }}</td>
            <td>{{ $value->prescription_date }}</td>
            <td>@php $patient=collect($patients)->where('out_p_id',$value->prescription_p_id)->first(); @endphp
              {{$patient->out_p_name}}
            </td>
            <td>
              @php $doctor=collect($doctors)->where('doc_id',$value->prescription_doc_id)->first(); @endphp
              {{$doctor->doc_name}}
            </td>
            <td>
              @php $medicine=collect($medicines)->where('prescription_id',$value->prescription_id); @endphp
                @foreach($medicine as $medicine_list)
                @php $med=collect($meds)->where('med_id',$medicine_list->prescription_medicine_id)->first(); @endphp
                {{ $med->med_name }} <br>
                @endforeach
            </td>
            <td>{!! ($value->prescription_note) !!}</td>
            <td>
              <button class="show btn btn-outline-primary btn-sm" data-toggle="modal" data-target="#invoice" data="{{ $value->prescription_id }}"><i class="fa fa-eye"></i></button>
                <a href="{{route('prescription.edit',$value->prescription_id)}}" class="edit btn btn-btn btn-outline-info btn-sm"><i class="fa fa-edit"></i></a>
                <button class="delete btn btn-outline-danger btn-sm" data="{{ $value->prescription_id }}"><i class="fa fa-trash"></i></button>
            </td>
        </tr>
    @endforeach
    </tbody>
</table>
