<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Adres extends Model
{
    use HasFactory;
    protected $table = "adressen";

    public function straat(): BelongsTo
    {
        return $this->belongsTo(Straat::class);
    }

    public function families(): HasMany
    {
        return $this->hasMany(Familie::class);
    }
}
