<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class SoortLid extends Model
{
    use HasFactory;
    protected $table = "soorten_leden";

    public function familie_leden(): HasMany
    {
        return $this->hasMany(Familielid::class);
    }

    public function contributies(): HasMany
    {
        return $this->hasMany(Contributie::class);
    }
}
