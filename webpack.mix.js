const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
   .sass('resources/sass/app.scss', 'public/css');

mix.styles([
    'public/asset/vendors/bootstrap/dist/css/bootstrap.min.css',
    'public/asset/vendors/font-awesome/css/font-awesome.min.css',
    'public/asset/vendors/nprogress/nprogress.css',
    'public/asset/vendors/iCheck/skins/flat/green.css',
    'public/asset/vendors/bootstrap-progressbar/css/bootstrap-progressbar-3.3.4.min.css',
    'public/asset/vendors/jqvmap/dist/jqvmap.min.css',
    'public/asset/vendors/bootstrap-daterangepicker/daterangepicker.css',
    'public/asset/build/css/custom.min.css'
], 'public/css/all.css');

mix.scripts([
    'public/asset/vendors/jquery/dist/jquery.min.js',
    'public/asset/vendors/bootstrap/dist/js/bootstrap.bundle.min.js',
    'public/asset/vendors/fastclick/lib/fastclick.js',
    'public/asset/vendors/nprogress/nprogress.js',
    'public/asset/vendors/Chart.js/dist/Chart.min.js',
    'public/asset/vendors/gauge.js/dist/gauge.min.js',
    'public/asset/vendors/bootstrap-progressbar/bootstrap-progressbar.min.js',
    'public/asset/vendors/iCheck/icheck.min.js',
    'public/asset/vendors/skycons/skycons.js',
    'public/asset/vendors/Flot/jquery.flot.js',
    'public/asset/vendors/Flot/jquery.flot.pie.js',
    'public/asset/vendors/Flot/jquery.flot.time.js',
    'public/asset/vendors/Flot/jquery.flot.stack.js',
    'public/asset/vendors/Flot/jquery.flot.resize.js',
    'public/asset/vendors/flot.orderbars/js/jquery.flot.orderBars.js',
    'public/asset/vendors/flot-spline/js/jquery.flot.spline.min.js',
    'public/asset/vendors/flot.curvedlines/curvedLines.js',
    'public/asset/vendors/DateJS/build/date.js',
    'public/asset/vendors/jqvmap/dist/jquery.vmap.js',
    'public/asset/vendors/jqvmap/examples/js/jquery.vmap.sampledata.js',
    'public/asset/vendors/moment/min/moment.min.js',
    'public/asset/vendors/bootstrap-daterangepicker/daterangepicker.js',
    'public/asset/build/js/custom.min.js'
], 'public/js/all.js');