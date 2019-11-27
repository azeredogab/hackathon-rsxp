<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */
use App\Mentor;
use Faker\Generator as Faker;


$universities = [
    'Estácio', 
    'Veiga de Almeida', 
    'UFRJ', 
    'UFF'
]; 

$courses = [
    'Análise de Sistemas', 
    'Engenharia de Computação', 
    'Sistemas de Informação'
];

$factory->define(Mentor::class, function (Faker $faker) use ($universities, $courses){

    $randUniversity = array_rand($universities); 
    $randCourses = array_rand($courses); 

    return [
        'name' => $faker->name(),
        'age' => $faker->numberBetween(20, 50),
        'country' => 'Brasil',
        'state' => 'SP',
        'city' => 'São Paulo',
        'university' => $universities[$randUniversity],
        'course' => $courses[$randCourses],
        'semester' => $faker->numberBetween(1, 10),
        'price' => $faker->numberBetween(20, 50),
        'video' => 'http://urldovideo.com.br',
    ];
});
