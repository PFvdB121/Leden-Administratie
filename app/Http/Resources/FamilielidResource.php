<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class FamilielidResource extends JsonResource
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
            "soort_lid" => $this->soort_lid->omschrijving,
            "geboortedatum" => $this->geboortedatum,
            "email" => $this->email,
            "familie" => $this->familie->naam,
            "adres" => $this->familie->adres->huisnummer . $this->familie->adres->bijvoeging,
            "straat" => $this->familie->adres->straat->naam,
            "stad" => $this->familie->adres->straat->stad->naam,
            "land" => $this->familie->adres->straat->stad->land->naam,
            "naam" => $this->naam,
        ];
    }
}
