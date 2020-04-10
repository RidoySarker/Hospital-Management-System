@extends('layouts.app')
@section('title') Employee | HMS @endsection
@section('content')
<div class="right_col" role="main">
  <div class="">
    <div class="page-title">
      <div class="title_left">
        <h3>Add Employee</h3>
      </div>
      <div class="title_right">
          <div class="col-md-5 col-sm-5 col-xs-12 form-group pull-right top_search">
              <a href="{{route('medicine.index')}}">
                  <button class="btn btn-round btn-primary btn-sm pull-right">Medicine List</button>
              </a>
          </div>
      </div>
    </div>

    <div class="clearfix"></div>

    <div class="row">
      <div class="col-md-12 col-sm-12 ">
        <div class="x_panel">
          <div class="x_title">
            <h2> Employee </h2>

            <div class="clearfix"></div>
          </div>


                <div class="x_content">
                  <form action="{{route('medicine.update',$medicine->med_id)}}" method="post">
                    @csrf
                      <div class="field item form-group">
                        <label class="col-form-label col-md-3 col-sm-3  label-align">Medicine Category<span
                            class="required">*</span></label>
                        <div class="col-md-6 col-sm-6">
                          <select class="form-control" name="med_cat_id" >
                            <option> ----Choose Category---- </option>
                            @foreach($category as $categorys)
                            <option value="{{$categorys->med_cat_id}}"  @if($categorys->med_cat_id==$medicine->med_cat_id) selected @endif>{{$categorys->med_cat_name}}</option>
                            @endforeach
                          </select>
                        </div>
                      </div>

                    <div class="field item form-group">
                      <label class="col-form-label col-md-3 col-sm-3  label-align">Name<span
                          class="required">*</span></label>
                      <div class="col-md-6 col-sm-6">
                        <input class="form-control" data-validate-length-range="6" data-validate-words="2" name="med_name" required="required" value="{{$medicine->med_name}}" />
                      </div>
                    </div>

                    <div class="field item form-group">
                      <label class="col-form-label col-md-3 col-sm-3  label-align">Purchase Price<span
                          class="required">*</span></label>
                      <div class="col-md-6 col-sm-6">
                        <input class="form-control" name="med_purchase_price" min=0 type="number" required="required" value="{{$medicine->med_purchase_price}}"/></div>
                    </div>

                    <div class="field item form-group">
                      <label class="col-form-label col-md-3 col-sm-3  label-align">Sales Price<span
                          class="required">*</span></label>
                      <div class="col-md-6 col-sm-6">
                        <input class="form-control" name="med_sales_price" type="number" min=0 required="required" value="{{$medicine->med_sales_price}}"/></div>
                    </div>

                    <div class="field item form-group">
                      <label class="col-form-label col-md-3 col-sm-3  label-align">Store Box<span
                          class="required">*</span></label>
                      <div class="col-md-6 col-sm-6">
                        <input class="form-control" name="med_store_box" required="required" type="text" value="{{$medicine->med_store_box}}"/></div>
                    </div>

                    <div class="field item form-group">
                      <label class="col-form-label col-md-3 col-sm-3  label-align">Quantity<span
                          class="required">*</span></label>
                      <div class="col-md-6 col-sm-6">
                        <input class="form-control" name="med_quantity" required="required" min=0 type="number" value="{{$medicine->med_quantity}}"/></div>
                    </div>

                    <div class="field item form-group">
                      <label class="col-form-label col-md-3 col-sm-3  label-align">Generic Name</label>
                      <div class="col-md-6 col-sm-6">
                        <input class="form-control" name="med_generic_name" required="required" type="text" value="{{$medicine->med_generic_name}}"/></div>
                    </div>

                    <div class="field item form-group">
                      <label class="col-form-label col-md-3 col-sm-3  label-align">Company</label>
                      <div class="col-md-6 col-sm-6">
                        <input class="form-control" name="med_company" required="required" type="text" value="{{$medicine->med_company}}"/></div>
                    </div>

                    <div class="field item form-group">
                      <label class="col-form-label col-md-3 col-sm-3  label-align">Expire Date</label>
                      <div class="col-md-6 col-sm-6">
                        <input class="form-control" name="med_expire_date" required="required" type="date" value="{{$medicine->med_expire_date}}"/></div>
                    </div>

                      <div class="form-group">
                        <div class="col-md-6 offset-md-3">
                    <button type='submit' class="btn btn-primary">Update</button>
                    <button type='reset' class="btn btn-success">Reset</button>
                    <a href="/medicine" class="btn btn-dark">Back</a>
                        </div>
                      </div>
                  </form>
                </div>

        </div>
      </div>
    </div>
  </div>
</div>

@endsection
