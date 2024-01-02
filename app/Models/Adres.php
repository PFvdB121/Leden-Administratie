<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Adres extends Model
{
    use HasFactory;
    // Connects it to table adressen
    protected $table = "adressen";
    // makes following columns fillable
    protected $fillable = [
        "huisnummer",
        "bijvoeging",
        "straat_id",
    ];

    // Connects this model to table straten
    public function straat(): BelongsTo
    {
        return $this->belongsTo(Straat::class, "straat_id", "id");
    }

    // Connects this model to table families
    public function families(): HasMany
    {
        return $this->hasMany(Familie::class, "adres_id", "id");
    }
}
