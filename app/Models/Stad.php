<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Stad extends Model
{
    use HasFactory;
    // Connects it to table steden
    protected $table = "steden";
    // makes following columns fillable
    protected $fillable = [
        "naam",
        "land_id",
    ];

    // Connects this model to table landen
    public function land(): BelongsTo
    {
        return $this->belongsTo(Land::class, "land_id", "id");
    }

    // Connects this model to table straten
    public function straten(): HasMany
    {
        return $this->hasMany(Straat::class, "stad_id", "id");
    }
}
