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
            "omschrijving" => $this->omschrijving,
            "korting" => $this->korting . "%",
            "min leeftijd" => $this->minLeeftijd,
            "max leeftijd" => $this->maxLeeftijd,
            "hoeveelheid leden" => $this->leden->count(),
        ];
    }
}
