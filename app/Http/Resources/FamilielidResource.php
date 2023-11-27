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
            "soort lid" => $this->soort_lid()->first()->omschrijving,
            "geboortedatum" => $this->geboortedatum,
            "email" => $this->email,
            "familie" => $this->familie->first()->naam,
            "adres" => $this->familie->adres->first()->huisnummer . $this->familie->adres->first()->bijvoeging,
            "straat" => $this->familie->adres->straat->first()->naam,
            "stad" => $this->familie->adres->straat->stad->first()->naam,
            "naam" => $this->naam,
        ];
    }
}
