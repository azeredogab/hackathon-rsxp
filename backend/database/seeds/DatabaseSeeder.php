<?php

use App\Skill;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run()
    {
        $this->call(MentorTableSeeder::class);

        factory(Skill::class, 50)->create();
    }
}
