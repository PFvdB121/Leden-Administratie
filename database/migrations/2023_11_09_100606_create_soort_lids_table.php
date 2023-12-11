<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('soorten_leden', function (Blueprint $table) {
            $table->id();
            $table->string("omschrijving");
            $table->integer("min_leeftijd");
            $table->integer("max_leeftijd")->nullable();
            $table->integer("korting");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('soorten_leden');
    }
};
