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

    public function familie(): BelongsTo
    {
        return $this->belongsTo(Familie::class);
    }

    public function soort_lid(): BelongsTo
    {
        return $this->belongsTo(SoortLid::class);
    }

    public function contributies(): HasMany
    {
        return $this->belongsTo(Contributie::class);
    }
}
