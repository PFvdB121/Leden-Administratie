<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Contributie extends Model
{
    use HasFactory;
    // Connects it to table contributies
    protected $table = "contributies";
    // makes following columns fillable
    protected $fillable = [
        "bedrag",
        "leeftijd",
        "soort_lid_id",
        "boekjaar_id",
        "familie_lid_id",
    ];

    // Connects this model to table familie_leden
    public function familieLid(): BelongsTo
    {
        return $this->belongsTo(Familielid::class, "familie_lid_id", "id");
    }

    // Connects this model to table boekenjaren
    public function boekjaar(): BelongsTo
    {
        return $this->belongsTo(Boekjaar::class, "boekjaar_id", "id");
    }

    // Connects this model to table `soorten_leden`
    public function soortLid(): BelongsTo
    {
        return $this->belongsTo(SoortLid::class, "soort_lid_id", "id");
    }
}
