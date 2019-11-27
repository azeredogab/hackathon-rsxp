<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */
use App\Skill;
use Faker\Generator as Faker;

$skills = [
    'Java',
    'NodeJs',
    'React',
    'Mobile',
    'Manutenção Micros',
    'Carreira',
    'React Native',
];

$factory->define(Skill::class, function (Faker $faker) use ($skills) {
    $randSkill = array_rand($skills);

    return [
        'name' => $skills[$randSkill],
        'mentor_id' => $faker->numberBetween(1, 10),
    ];
});
