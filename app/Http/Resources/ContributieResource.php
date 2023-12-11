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
            "lid" => $this->familieLid->first()->naam,
            "emailLid" => $this->familieLid->first()->email,
            "soortLid" => $this->soortLid->first()->omschrijving,
            "boekjaar" => $this->boekjaar->first()->jaar,
        ];
    }
}
