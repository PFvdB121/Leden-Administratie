<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Familie extends Model
{
    use HasFactory;
    protected $table = "families";

    public function familieleden(): HasMany
    {
        return $this->hasMany(Familielid::class);
    }
}
