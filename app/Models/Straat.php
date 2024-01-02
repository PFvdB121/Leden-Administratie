<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Straat extends Model
{
    use HasFactory;
    // Connects it to table straten
    protected $table = "straten";
    // makes following columns fillable
    protected $fillable = [
        "naam",
        "stad_id",
    ];

    // Connects this model to table steden
    public function stad(): BelongsTo
    {
        return $this->belongsTo(Stad::class, "stad_id");
    }

    // Connects this model to table adressen
    public function adressen(): HasMany
    {
        return $this->hasMany(Adres::class, "straat_id");
    }
}
