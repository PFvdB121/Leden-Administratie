<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class SoortLid extends Model
{
    use HasFactory;
    protected $table = "soorten_leden";
    protected $fillable = [
        "omschrijving",
        "min_leeftijd",
        "max_leeftijd",
        "korting",
    ];

    public function familieLeden(): HasMany
    {
        return $this->hasMany(Familielid::class, "soort_lid_id", "id");
    }

    public function contributies(): HasMany
    {
        return $this->hasMany(Contributie::class, "soort_lid_id", "id");
    }
}
