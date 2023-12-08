<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Familielid extends Model
{
    use HasFactory;
    protected $table = "familie_leden";
    protected $fillable = [
        "naam",
        "email",
        "geboortedatum",
        "soort_lid_id",
        "familie_id",
    ];

    public function familie(): BelongsTo
    {
        return $this->belongsTo(Familie::class, "familie_id", "id");
    }

    public function soortLid(): BelongsTo
    {
        return $this->belongsTo(SoortLid::class, "soort_lid_id", "id");
    }

    public function contributies(): HasMany
    {
        return $this->hasMany(Contributie::class, "familie_lid_id", "id");
    }
}
