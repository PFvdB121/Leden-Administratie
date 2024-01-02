<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class SoortLid extends Model
{
    use HasFactory;
    // Connects it to table soorten_leden
    protected $table = "soorten_leden";
    // makes following columns fillable
    protected $fillable = [
        "omschrijving",
        "min_leeftijd",
        "max_leeftijd",
        "korting",
    ];

    // Connects this model to table familie_leden
    public function familieLeden(): HasMany
    {
        return $this->hasMany(Familielid::class, "soort_lid_id", "id");
    }

    // Connects this model to table contributies
    public function contributies(): HasMany
    {
        return $this->hasMany(Contributie::class, "soort_lid_id", "id");
    }
}
