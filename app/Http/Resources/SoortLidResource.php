<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class SoortLidResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            "id" => $this->id,
            "omschrijving" => $this->omschrijving,
            "korting" => $this->korting . "%",
            "min leeftijd" => $this->min_leeftijd,
            "max leeftijd" => $this->max_leeftijd,
            "hoeveelheid leden" => $this->familieLeden->count(),
        ];
    }
}
