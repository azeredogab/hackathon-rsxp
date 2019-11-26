<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreStudent;
use App\Student;
use Illuminate\Support\Facades\Hash;

class StudentController extends Controller
{
    public function store(StoreStudent $request)
    {
        $data = $request->validated();

        $student = Student::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
        ]);

        return response()->json([
            'student' => $student,
        ], 201);
    }

    public function show(Student $student)
    {
        return response()->json([
            'student' => $student,
        ]);
    }
}
