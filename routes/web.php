<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', 'HomeController@index' );

Auth::routes();

Route::get('/admin', 'HomeController@index');

Route::resource('department', 'DepartmentController');

Route::resource('doctor', 'DoctorController');

Route::resource('patient', 'PatientController');

Route::resource('employee', 'EmployeeController');
Route::get('employees', 'EmployeeController@list')->name('employee.list');
Route::post('employee/{id}/update', 'EmployeeController@update')->name('employee.update');
Route::resource('employee_role', 'EmployeeRoleController');
Route::resource('schedule', 'ScheduleController');
Route::resource('appointment', 'AppointmentController');

