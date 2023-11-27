<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Stad extends Model
{
    use HasFactory;
    protected $table = "steden";

    public function land(): BelongsTo
    {
        return $this->belongsTo(Land::class, "land_id", "id");
    }

    public function straten(): HasMany
    {
        return $this->hasMany(Straat::class, "stad_id", "id");
    }
}
