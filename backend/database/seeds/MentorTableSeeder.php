<?php

use App\Mentor;
use Illuminate\Database\Seeder;

class MentorTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        factory(Mentor::class, 10)->create();
    }
}
