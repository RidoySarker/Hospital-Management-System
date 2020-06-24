@php $i=1; @endphp
@foreach($appointment as $app)
<tr>
<td>{{$i++}}</td>
<td>{{$app->app_date}}</td>
<td>{{$app->app_sl}}</td>
@php $pat=collect($patient)->where('out_p_id',$app->app_p_id)->first() @endphp
<td>{{$pat->out_p_name}}</td>
@php $doc=collect($doctor)->where('doc_id',$app->app_doc_id)->first() @endphp
<td>{{$doc->doc_name}}</td>
<td>app_status</td>
<td>app_message</td>
</tr>
@endforeach
