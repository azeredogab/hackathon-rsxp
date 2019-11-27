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
        factory(Mentor::class, 8)->create();

        factory(Mentor::class, 2)
            ->create()
            ->each(function ($mentor) {
                $mentor->price = 0;

                $mentor->save();
            })
        ;
    }
}
