<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ContributieResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            "bedrag" => $this->bedrag,
            "leeftijd" => $this->leeftijd,
            "lid" => $this->familieLid->naam,
            "email" => $this->familieLid->email,
            "soort lid" => $this->soortLid->omschrijving,
            "boekjaar" => $this->boekjaar->jaar,
        ];
    }
}
