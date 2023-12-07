<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Land extends Model
{
    use HasFactory;
    protected $table = "landen";
    protected $fillable = [
        "naam",
    ];

    public function steden(): HasMany
    {
        return $this->hasMany(Land::class, "land_id", "id");
    }
}
