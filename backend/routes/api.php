<?php

Route::post('students', 'StudentController@store');
Route::get('students/{id}', 'StudentController@show');

Route::get('mentors', 'MentorController@index');
Route::get('mentors/{id}', 'MentorController@show');
