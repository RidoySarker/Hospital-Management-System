<section class="content invoice">
  <div id="printable">

            <div class="row">
              <div class="  invoice-header">
                <h3>
                  <img src="logo.png" alt="Logo" style="height: 60px; width: 60px;"> Hospital Management System
                </h3>
              </div>
            </div>

            <div class="row invoice-info">
              <div class="col-sm-4 invoice-col">
                Doctor
                <address>
                    <strong>@php $doctor=collect($doctors)->where('doc_id',$prescription->prescription_doc_id)->first(); @endphp
                    Name: {{$doctor->doc_name}}</strong>
                    <br>Profile: {{$doctor->doc_profile}}
                    <br>Address: {{$doctor->doc_address}}
                    <br>Phone: {{$doctor->doc_phone}}
                    <br>Email: {{$doctor->doc_email}}
                </address>
              </div>

              <div class="col-sm-4 invoice-col">
                Patient
                <address>
                  <strong>@php $patient=collect($patients)->where('out_p_id',$prescription->prescription_p_id)->first(); @endphp
                    Name: {{$patient->out_p_name}}</strong>
                  <br>Age: {{$patient->out_p_age}} Year(s)
                  <br>Sex: {{($patient->out_p_sex=='Male' ? 'Male' : 'Female' )}}
                  <br>Phone: {{$patient->out_p_phone}}
                  <br>Address: {{$patient->out_p_address}}
                </address>
              </div>

              <div class="col-sm-4 invoice-col">
                <b>Date: {{$prescription->prescription_date}}</b>
                <br>
                <br>
                <b>Code:</b> {{$prescription->prescription_code}}
              </div>
            </div>

            <div class="row">
              <div class="col-md-6">
                <h5>History:</h5>
                <p style="margin-top: 10px;">
                  {!! $prescription->prescription_history !!}
                </p>
              </div>

              <div class="col-md-6">
                <h5>Note:</h5>
                <p style="margin-top: 10px;">
                  {!! $prescription->prescription_note !!}
                </p>
              </div>
            </div>

            <div class="row">
              <div class="col-md-12">
                <div class="table-responsive">
                  <table class="table">
                    <thead>
                    <tr>
                      <th>Medicine</th>
                      <th>Dosage</th>
                      <th>Frequency</th>
                      <th>Days</th>
                      <th>Instruction</th>
                    </tr>
                  </thead>
                    <tbody>
                      @php $value=collect($pre_medicine)->where('prescription_id',$prescription->prescription_id); @endphp
                      @foreach($value as $v)
                      <tr>
                        <td>@php $med=collect($meds)->where('med_id',$v->prescription_medicine_id)->first(); @endphp
                        {{ $med->med_name }}</td>
                        <td>{{$v->prescription_med_dosage}}</td>
                        <td>{{$v->prescription_med_frequency}}</td>
                        <td>{{$v->prescription_med_days}}</td>
                        <td>{{$v->prescription_med_ins}}</td>
                      </tr>
                      @endforeach
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          </section>
