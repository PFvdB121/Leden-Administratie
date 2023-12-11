<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Contributie extends Model
{
    use HasFactory;
    protected $table = "contributies";
    protected $fillable = [
        "bedrag",
        "leeftijd",
        "soort_lid_id",
        "boekjaar_id",
        "familie_lid_id",
    ];

    public function familieLid(): BelongsTo
    {
        return $this->belongsTo(Familielid::class, "familie_lid_id", "id");
    }

    public function boekjaar(): BelongsTo
    {
        return $this->belongsTo(Boekjaar::class, "boekjaar_id", "id");
    }

    public function soortLid(): BelongsTo
    {
        return $this->belongsTo(SoortLid::class, "soort_lid_id", "id");
    }
}
