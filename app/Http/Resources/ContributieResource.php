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
            "lid" => $this->familie_lid->first()->naam,
            "email_lid" => $this->familie_lid->first()->email,
            "soortLid" => $this->soortLid->first()->omschrijving,
            "boekjaar" => $this->boekjaar->first()->jaar,
        ];
    }
}
