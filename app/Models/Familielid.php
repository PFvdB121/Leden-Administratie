<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Familielid extends Model
{
    use HasFactory;
    // Connects it to table familie_leden
    protected $table = "familie_leden";
    // makes following columns fillable
    protected $fillable = [
        "naam",
        "email",
        "geboortedatum",
        "soort_lid_id",
        "familie_id",
    ];

    // Connects this model to table families
    public function familie(): BelongsTo
    {
        return $this->belongsTo(Familie::class, "familie_id", "id");
    }

    // Connects this model to table soorten_leden
    public function soortLid(): BelongsTo
    {
        return $this->belongsTo(SoortLid::class, "soort_lid_id", "id");
    }

    // Connects this model to table contributies
    public function contributies(): HasMany
    {
        return $this->hasMany(Contributie::class, "familie_lid_id", "id");
    }
}
