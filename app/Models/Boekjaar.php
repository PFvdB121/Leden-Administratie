<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Boekjaar extends Model
{
    use HasFactory;
    // Connects it to table boekenjaren
    protected $table = "boekenjaren";
    // makes following columns fillable
    protected $fillable = [
        "jaar"
    ];

    // Connects this model to table contributies
    public function contributies(): HasMany
    {
        return $this->hasMany(Contributie::class, "boekjaar_id", "id");
    }
}
