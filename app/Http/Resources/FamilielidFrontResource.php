<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class FamilielidFrontResource extends JsonResource
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
            "naam" => $this->naam,
            "soort lid" => $this->soortLid->omschrijving,
            "geboortedatum" => $this->geboortedatum,
            "email" => $this->email,
            "familie" => $this->familie->naam,
            "adres" => $this->familie->adres->straat->naam . 
                " " . $this->familie->adres->huisnummer . 
                $this->familie->adres->bijvoeging . " " .
                $this->familie->adres->straat->stad->naam . " ".
                $this->familie->adres->straat->stad->land->naam,
        ];
    }
}
