<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */
use App\Mentor;
use Faker\Generator as Faker;

$factory->define(Mentor::class, function (Faker $faker) {
    return [
        'name' => $faker->name(),
        'age' => $faker->numberBetween(20, 80),
        'country' => 'Brasil',
        'state' => 'SP',
        'city' => 'São Paulo',
        'university' => 'IFSP',
        'course' => 'ADS',
        'semester' => $faker->numberBetween(1, 10),
        'price' => '20000',
        'video' => 'http://urldovideo.com.br',
    ];
});
