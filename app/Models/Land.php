<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Land extends Model
{
    use HasFactory;
    // Connects it to table landen
    protected $table = "landen";
    // makes following columns fillable
    protected $fillable = [
        "naam",
    ];

    // Connects this model to table steden
    public function steden(): HasMany
    {
        return $this->hasMany(Land::class, "land_id", "id");
    }
}
