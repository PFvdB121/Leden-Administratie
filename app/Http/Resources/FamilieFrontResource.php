<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class FamilieFrontResource extends JsonResource
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
            "hoeveelheid leden" => $this->familieleden->count(),
            "adres" => $this->adres->straat->naam . 
                " " . $this->adres->huisnummer . 
                $this->adres->bijvoeging . " " .
                $this->adres->straat->stad->naam . " ".
                $this->adres->straat->stad->land->naam,
        ];
    }
}
