
<!DOCTYPE html>
<html dir="ltr">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" type="image/png" sizes="16x16" href="{{asset('asset/assets/images/favicon.png')}}">
    <title>Hospital Management System</title>
    <link href="{{asset('asset/dist/css/style.min.css')}}" rel="stylesheet">
</head>

<body>
    <div class="main-wrapper">
        <div class="preloader">
            <div class="lds-ripple">
                <div class="lds-pos"></div>
                <div class="lds-pos"></div>
            </div>
        </div>
        <div class="auth-wrapper d-flex no-block justify-content-center align-items-center bg-dark">
            <div class="auth-box bg-dark  border-secondary">
                <div>
                    <div class="text-center p-t-20 p-b-20">
                        <span class="db"><img src="{{asset('asset/assets/images/logo.png')}}" alt="logo" /></span>
                    </div>
                    <form class="form-horizontal m-t-20" method="POST" action="{{ route('register') }}">
                          @csrf
                        <div class="row p-b-30">
                            <div class="col-12">
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text bg-success text-white" id="basic-addon1"><i class="ti-user"></i></span>
                                    </div>
                                    <input id="name" type="text" class="form-control form-control-lg @error('name') is-invalid @enderror" name="name" value="{{ old('name') }}"placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" required>
                                </div>
                                @error('name')
                                    <strong style="color: red;">{{ $message }}</strong>
                                @enderror
                                <!-- email -->
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text bg-danger text-white" id="basic-addon1"><i class="ti-email"></i></span>
                                    </div>
                                    <input id="email" type="email" class="form-control form-control-lg @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}"placeholder="Email Address" aria-label="Username" aria-describedby="basic-addon1" required>
                                </div>
                                @error('email')
                                    <strong style="color: red;">{{ $message }}</strong>
                                @enderror
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text bg-warning text-white" id="basic-addon2"><i class="ti-pencil"></i></span>
                                    </div>
                                    <input id="password" type="password" class="form-control form-control-lg @error('password') is-invalid @enderror" name="password" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1" required autocomplete="new-password">
                                </div>
                                @error('password')
                                    <strong style="color: red;">{{ $message }}</strong>
                                @enderror
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text bg-info text-white" id="basic-addon2"><i class="ti-pencil"></i></span>
                                    </div>
                                    <input type="password" id="password-confirm" name="password_confirmation" class="form-control form-control-lg" placeholder=" Confirm Password" aria-label="Password" aria-describedby="basic-addon1" required autocomplete="new-password">
                                </div>
                            </div>
                        </div>
                      <button class="btn btn-block btn-lg btn-info" type="submit">Sign Up</button>
                       
                    </form>
                </div>
            </div>
        </div>
    </div>
    <script src="{{asset('asset/assets/libs/jquery/dist/jquery.min.js')}}"></script>
    <script src="{{asset('asset/assets/libs/popper.js/dist/umd/popper.min.js')}}"></script>
    <script src="{{asset('asset/assets/libs/bootstrap/dist/js/bootstrap.min.js')}}"></script>
    <script>
    $('[data-toggle="tooltip"]').tooltip();
    $(".preloader").fadeOut();
    </script>
</body>

</html>