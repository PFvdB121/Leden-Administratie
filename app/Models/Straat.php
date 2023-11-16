<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Straat extends Model
{
    use HasFactory;
    protected $table = "straten";

    public function stad(): BelongsTo
    {
        return $this->belongsTo(Stad::class);
    }

    public function adressen(): HasMany
    {
        return $this->hasMany(Adres::class);
    }
}
