<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Familie extends Model
{
    use HasFactory;
    // Connects it to table families
    protected $table = "families";
    // makes following columns fillable
    protected $fillable = [
        "naam",
        "adres_id",
    ];

    // Connects this model to table familie_leden
    public function familieleden(): HasMany
    {
        return $this->hasMany(Familielid::class, "familie_id", "id");
    }

    // Connects this model to table adressen
    public function adres(): BelongsTo
    {
        return $this->belongsTo(Adres::class, "adres_id", "id");
    }
}
