<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class FamilieResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            "naam" => $this->naam,
            "huisnummer" => $this->adres->huisnummer,
            "bijvoeging" => $this->adres->bijvoeging,
            "straat" => $this->adres->straat->naam,
            "stad" => $this->adres->straat->stad->naam,
            "land" => $this->adres->straat->stad->land->naam,
        ];
    }
}
