<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Familie extends Model
{
    use HasFactory;
    protected $table = "families";
    protected $fillable = [
        "naam",
        "adres_id",
    ];

    public function familieleden(): HasMany
    {
        return $this->hasMany(Familielid::class, "familie_id", "id");
    }

    public function adres(): BelongsTo
    {
        return $this->belongsTo(Adres::class, "adres_id", "id");
    }
}
