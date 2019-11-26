<?php

namespace App\Http\Controllers;

use App\Mentor;

class MentorController extends Controller
{
    public function index()
    {
        return response()->json([
            'mentors' => Mentor::paginate(),
        ]);
    }

    public function show(Mentor $mentor)
    {
        return response()->json([
            'mentor' => $mentor,
        ]);
    }
}
