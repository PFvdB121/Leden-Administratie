<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Boekjaar extends Model
{
    use HasFactory;
    protected $table = "boekenjaren";

    public function contributies(): HasMany
    {
        return $this->hasMany(Contributie::class);
    }
}
