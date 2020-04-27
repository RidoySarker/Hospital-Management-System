@extends('layouts.app')
@section('title') Expense | HMS @endsection
@section('content')
<div class="right_col" role="main">
  <div class="">
    <div class="page-title">
      <div class="title_left">
        <h3>Edit Expense</h3>
      </div>
    </div>

    <div class="clearfix"></div>

    <div class="row">
      <div class="col-md-12 col-sm-12 ">
        <div class="x_panel">
          <div class="x_title">
            <h2> Expense </h2>

            <div class="clearfix"></div>
          </div>


                <div class="x_content">
                  <form action="{{route('expense.update',$expense->exp_id)}}" method="post">
                    @csrf
                    <div class="field item form-group">
                      <label class="col-form-label col-md-3 col-sm-3  label-align">Date</label>
                        <div class="col-md-6 col-sm-6">
                          <input class="form-control" value="{{$expense->exp_date}}" readonly/></div>
                        </div>

                      <div class="field item form-group">
                        <label class="col-form-label col-md-3 col-sm-3  label-align">Expense Category<span
                            class="required">*</span></label>
                        <div class="col-md-6 col-sm-6">
                          <select class="form-control" name="exp_cat_id">
                            <option> ----Choose Category---- </option>
                            @foreach($category as $categorys)
                            <option value="{{$categorys->exp_cat_id}}" {{$expense->exp_cat_id==$categorys->exp_cat_id ? 'selected' : ''}}>{{$categorys->exp_cat_name}}</option>
                            @endforeach
                          </select>
                        </div>
                      </div>

                    <div class="field item form-group">
                      <label class="col-form-label col-md-3 col-sm-3  label-align">Expense Amount<span
                        class="required">*</span></label>
                        <div class="col-md-6 col-sm-6">
                          <input class="form-control" name="exp_amount" value="{{$expense->exp_amount}}" required="required" /></div>
                        </div>

                    <div class="field item form-group">
                      <label class="col-form-label col-md-3 col-sm-3  label-align">Note</label>
                      <div class="col-md-6 col-sm-6">
                        <textarea class="form-control" name="exp_details" rows="8" cols="80">{{$expense->exp_details}}</textarea>
                      </div>
                    </div>

                      <div class="form-group">
                        <div class="col-md-6 offset-md-3">
                    <button type='submit' class="btn btn-primary submit">Submit</button>
                    <a class="btn btn-success" href="/expense">Back</a>
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
