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
                <span>Welcome,</span>
                <h2>{{Auth::user()->name}}</h2>
              </div>
            </div>
            <!-- /menu profile quick info -->

            <br />

            <!-- sidebar menu -->
            <div id="sidebar-menu" class="main_menu_side hidden-print main_menu">
              <div class="menu_section">

                <ul class="nav side-menu">
                <li><a href="/"><i class="fas fa-home"></i> Dashboard </a>

                </li>
                  <li><a><i class="fas fa-sitemap"></i> Department <span class="fa fa-chevron-down"></span></a>
                    <ul class="nav child_menu">
                      <li><a href="{{url('department')}}">Department List</a></li>
                    </ul>
                  </li>

                  <li><a><i class="fas fa-edit"></i> Doctor <span class="fa fa-chevron-down"></span></a>
                    <ul class="nav child_menu">
                      <li><a href="{{route('doctor.create')}}">Add Doctor</a></li>
                      <li><a href="{{url('doctor')}}">Doctor List</a></li>
                    </ul>
                  </li>

                  <li><a><i class="fas fa-edit"></i> Patient <span class="fa fa-chevron-down"></span></a>
                    <ul class="nav child_menu">
                      <li><a href="form.html">Add Department</a></li>
                      <li><a href="form_advanced.html">Department List</a></li>
                    </ul>
                  </li>

                  <li><a><i class="fas fa-clock"></i> Schedule <span class="fa fa-chevron-down"></span></a>
                    <ul class="nav child_menu">
                      <li><a href="form.html">Add Department</a></li>
                      <li><a href="form_advanced.html">Department List</a></li>
                    </ul>
                  </li>

                  <li><a><i class="fas fa-user-md"></i> Appointment <span class="fa fa-chevron-down"></span></a>
                    <ul class="nav child_menu">
                      <li><a href="form.html">Add Department</a></li>
                      <li><a href="form_advanced.html">Department List</a></li>
                    </ul>
                  </li>


                  <li><a><i class="fas fa-users"></i> Human Resources Management<span class="fa fa-chevron-down"></span></a>
                    <ul class="nav child_menu">
                      <li><a href="{{route('employee_role.index')}}">Employee Roles</a></li>
                      <li><a href="{{route('employee.index')}}">Employee List</a></li>
                      <li><a href="{{route('employee.create')}}">Add Employee</a></li>

                    </ul>
                  </li>

                  <li><a><i class="fas fa-dollar-sign"></i> Financial Activities <span class="fa fa-chevron-down"></span></a>
                    <ul class="nav child_menu">
                      <li><a href="form.html">Add Department</a></li>
                      <li><a href="form_advanced.html">Department List</a></li>
                    </ul>
                  </li>


                  <li><a><i class="fas fa-notes-medical"></i> Prescription <span class="fa fa-chevron-down"></span></a>
                    <ul class="nav child_menu">
                      <li><a href="form.html">Add Department</a></li>
                      <li><a href="form_advanced.html">Department List</a></li>
                    </ul>
                  </li>

                  <li><a><i class="fas fa-flask"></i> Lab Tests <span class="fa fa-chevron-down"></span></a>
                    <ul class="nav child_menu">
                      <li><a href="form.html">Add Department</a></li>
                      <li><a href="form_advanced.html">Department List</a></li>
                    </ul>
                  </li>

                  <li><a><i class="fas fa-stethoscope"></i> Donor <span class="fa fa-chevron-down"></span></a>
                    <ul class="nav child_menu">
                      <li><a href="form.html">Add Department</a></li>
                      <li><a href="form_advanced.html">Department List</a></li>
                    </ul>
                  </li>


                  <li><a><i class="fas fa-bed"></i> Bed Manager <span class="fa fa-chevron-down"></span></a>
                    <ul class="nav child_menu">
                      <li><a href="form.html">Add Department</a></li>
                      <li><a href="form_advanced.html">Department List</a></li>
                    </ul>
                  </li>


                  <li><a><i class="fas fa-edit"></i> Report <span class="fa fa-chevron-down"></span></a>
                    <ul class="nav child_menu">
                      <li><a href="form.html">Add Department</a></li>
                      <li><a href="form_advanced.html">Department List</a></li>
                    </ul>
                  </li>

                  <li><a><i class="fas fa-edit"></i> Noticeboard <span class="fa fa-chevron-down"></span></a>
                    <ul class="nav child_menu">
                      <li><a href="form.html">Add Department</a></li>
                      <li><a href="form_advanced.html">Department List</a></li>
                    </ul>
                  </li>

                </ul>
              </div>

            </div>
            <!-- /sidebar menu -->

            <!-- /menu footer buttons -->
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
              <a data-toggle="tooltip" data-placement="top" title="Logout" href="login.html">
                <span class="glyphicon glyphicon-off" aria-hidden="true"></span>
              </a>
            </div>
            <!-- /menu footer buttons -->
          </div>
        </div>
