<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Skill extends Model
{
    protected $guarded = ['id'];

    public function mentor()
    {
        return $this->belongsTo(Mentor::class);
    }
}
