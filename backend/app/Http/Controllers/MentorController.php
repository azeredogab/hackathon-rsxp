<?php

namespace App\Http\Controllers;

use App\Mentor;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class MentorController extends Controller
{
    public function index()
    {
        return response()->json([
            'mentors' => Mentor::with('skills')->paginate(10),
        ]);
    }

    public function show($id)
    {
        try {
            $mentor = Mentor::with('skills')->findOrFail($id);
        } catch (ModelNotFoundException $e) {
            return response()->json([
                'error' => 'Mentor not found',
            ], 404);
        }

        return response()->json([
            'mentor' => $mentor,
        ]);
    }
}
