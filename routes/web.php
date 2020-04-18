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
Route::resource('bed_category', 'BedCategorieController');
Route::resource('bed', 'BedController');
Route::resource('bed_allotment', 'BedAllotmentController');
Route::get('get_patient_name/{patient_id}', 'BedAllotmentController@get_patient_name');
Route::get('get_bed_quantity/{quantity_id}', 'BedAllotmentController@get_bed_quantity');
Route::get('list/{quantity_id}', 'BedAllotmentController@list');

Route::resource('medicine_category','MedicineCategorieController');
Route::resource('medicine','MedicineController');
Route::get('medicines', 'MedicineController@list')->name('medicine.list');
Route::post('medicine/{id}/update', 'MedicineController@update')->name('medicine.update');
Route::post('medicine/stock', 'MedicineController@stock')->name('medicine.stock');

Route::resource('prescription','PrescriptionController');
Route::get('prescriptions','PrescriptionController@list')->name('prescription.list');
Route::get('prescription/show','PrescriptionController@show')->name('prescription.show');
Route::post('prescription/{id}/update','PrescriptionController@update')->name('prescription.update');


Route::resource('donor', 'DonorListController');
Route::resource('bloodbank', 'BloodBankController');
