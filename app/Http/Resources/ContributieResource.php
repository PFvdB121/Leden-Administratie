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
            "id" => $this->id,
            "bedrag" => $this->bedrag,
            "leeftijd" => $this->leeftijd,
            "email" => ($this->familieLid ? $this->familieLid->email : null),
            "soort lid" => ($this->soortLid ? $this->soortLid->omschrijving : null),
            "boekjaar" => $this->boekjaar->jaar,
        ];
    }
}
