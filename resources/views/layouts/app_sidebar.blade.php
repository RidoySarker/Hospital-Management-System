  <body class="nav-md">
    <div class="container body">
      <div class="main_container">
        <div class="col-md-3 left_col">
          <div class="left_col scroll-view">
            <div class="navbar nav_title" style="border: 0;">
              <a href="index.html" class="site_title"><i class="fa fa-paw"></i> <span>HMS</span></a>
            </div>

            <div class="clearfix"></div>

            <!-- menu profile quick info -->
            <div class="profile clearfix">
              <div class="profile_pic">
                <img src="{{asset('images/img.jpg')}}" alt="..." class="img-circle profile_img">
              </div>
              <div class="profile_info">
                <span>Welcome</span>
                <h2>{{Auth::user()->name}}</h2>
              </div>
            </div>
            <br />
            <div id="sidebar-menu" class="main_menu_side hidden-print main_menu">
              <div class="menu_section">
                <ul class="nav side-menu">
                <li><a href="/"><i class="fas fa-home"></i> @lang('admin_menu.dashboard') </a>

                </li>
                  <li><a><i class="fas fa-sitemap"></i> @lang('admin_menu.department') <span class="fa fa-chevron-down"></span></a>
                    <ul class="nav child_menu">
                      <li><a href="{{url('department')}}">@lang('admin_menu.department_list')</a></li>
                    </ul>
                  </li>

                  <li><a><i class="fa fa-user-md"></i> @lang('admin_menu.doctor') <span class="fa fa-chevron-down"></span></a>
                    <ul class="nav child_menu">
                      <li><a href="{{route('doctor.create')}}">@lang('admin_menu.add_doctor')</a></li>
                      <li><a href="{{url('doctor')}}">@lang('admin_menu.doctor_list')</a></li>
                    </ul>
                  </li>

                  <li><a><i class="fas fa-edit"></i> @lang('admin_menu.patient') <span class="fa fa-chevron-down"></span></a>
                    <ul class="nav child_menu">
                      <li><a href="{{url('out_patient')}}">@lang('admin_menu.out_patient')</a></li>
                      <li><a href="{{url('in_patient')}}">@lang('admin_menu.in_patient')</a></li>
                    </ul>
                  </li>

                  <li><a><i class="fas fa-user-md"></i> @lang('admin_menu.appointment') <span class="fa fa-chevron-down"></span></a>
                    <ul class="nav child_menu">
                      <li><a href="{{ url('appointment') }}">@lang('admin_menu.appointment_list')</a></li>
                    </ul>
                  </li>


                  <li><a><i class="fas fa-users"></i> @lang('admin_menu.hrm') <span class="fa fa-chevron-down"></span></a>
                    <ul class="nav child_menu">
                      <li><a href="{{route('employee_role.index')}}">@lang('admin_menu.emp_roles')Employee Roles</a></li>
                      <li><a href="{{route('employee.index')}}">@lang('admin_menu.emp_list')</a></li>
                      <li><a href="{{route('employee.create')}}">@lang('admin_menu.add_emp')</a></li>

                    </ul>
                  </li>

                  <li><a><i class="fas fa-dollar-sign"></i> @lang('admin_menu.finance') <span class="fa fa-chevron-down"></span></a>
                    <ul class="nav child_menu">
                      <li><a href="/expense_category">@lang('admin_menu.exp_cat')</a></li>
                      <li><a href="/expense/create">@lang('admin_menu.add_exp')</a></li>
                      <li><a href="/expense">@lang('admin_menu.exp_list')</a></li>
                    </ul>
                  </li>

                  <li><a><i class="fas fa-pills"></i> @lang('admin_menu.medicine') <span class="fa fa-chevron-down"></span></a>
                    <ul class="nav child_menu">
                      <li><a href="{{route('medicine_category.index')}}">@lang('admin_menu.medicine_cat')</a></li>
                      <li><a href="{{route('medicine.index')}}">@lang('admin_menu.medicine_list')</a></li>
                      <li><a href="{{route('medicine.create')}}">@lang('admin_menu.add_medicine')</a></li>
                    </ul>
                  </li>

                  <li><a><i class="fas fa-notes-medical"></i> @lang('admin_menu.prescription') <span class="fa fa-chevron-down"></span></a>
                    <ul class="nav child_menu">
                      <li><a href="{{route('prescription.create')}}">@lang('admin_menu.add_prescription')</a></li>
                      <li><a href="{{route('prescription.index')}}">@lang('admin_menu.prescription_list')</a></li>
                    </ul>
                  </li>

                  <li><a><i class="fas fa-flask"></i> @lang('admin_menu.lab') <span class="fa fa-chevron-down"></span></a>
                    <ul class="nav child_menu">
                      <li><a href="form.html">Add Department</a></li>
                      <li><a href="form_advanced.html">Department List</a></li>
                    </ul>
                  </li>

                  <li><a><i class="fa fa-hands"></i> @lang('admin_menu.donor') <span class="fa fa-chevron-down"></span></a>
                    <ul class="nav child_menu">
                      <li><a href="{{route('donor.create')}}">@lang('admin_menu.add_donor')</a></li>
                      <li><a href="{{url('donor')}}">@lang('admin_menu.donor_list')</a></li>
                      <li><a href="{{url('bloodbank')}}">@lang('admin_menu.blood_bank')</a></li>
                    </ul>
                  </li>


                  <li><a><i class="fas fa-bed"></i> @lang('admin_menu.bed_manager') <span class="fa fa-chevron-down"></span></a>
                    <ul class="nav child_menu">
                    <li><a href="{{ url('bed') }}">@lang('admin_menu.bed')</a></li>
                      <li><a href="{{ url('bed_category') }}">@lang('admin_menu.bed_cat')</a></li>
                      <li><a href="{{ url('floor') }}">@lang('admin_menu.bed_floor')</a></li>
                    </ul>
                  </li>


                  <li><a><i class="fas fa-edit"></i> @lang('admin_menu.report') <span class="fa fa-chevron-down"></span></a>
                    <ul class="nav child_menu">
                      <li><a href="{{url('appointmentReport')}}">@lang('admin_menu.app_report')</a></li>
                    </ul>
                  </li>

                  <li><a><i class="fas fa-edit"></i> @lang('admin_menu.notice') <span class="fa fa-chevron-down"></span></a>
                    <ul class="nav child_menu">
                      <li><a href="form.html">Add Department</a></li>
                      <li><a href="form_advanced.html">Department List</a></li>
                    </ul>
                  </li>

                </ul>
              </div>
            </div>

            <div class="sidebar-footer hidden-small">
              <a data-toggle="tooltip" data-placement="top" title="Settings">
                <span class="glyphicon glyphicon-cog" aria-hidden="true"></span>
              </a>
              <a data-toggle="tooltip" data-placement="top" title="FullScreen">
                <span class="glyphicon glyphicon-fullscreen" aria-hidden="true"></span>
              </a>
              <a data-toggle="tooltip" data-placement="top" title="Lock">
                <span class="glyphicon glyphicon-eye-close" aria-hidden="true"></span>
              </a>
              <a data-toggle="tooltip" data-placement="top" title="Logout" href="{{ route('logout') }}" onclick="event.preventDefault(); document.getElementById('logout-form').submit();">
                <span class="glyphicon glyphicon-off" aria-hidden="true"></span>
              </a>
              <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                  @csrf
                              </form>
            </div>
          </div>
        </div>
