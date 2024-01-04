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
        Schema::create('contributies', function (Blueprint $table) {
            $table->id();
            $table->integer("leeftijd")->nullable();
            $table->foreignId("soort_lid_id")->nullable()->constrained("soorten_leden");
            $table->decimal("bedrag", 5, 2);
            $table->foreignId("boekjaar_id")->constrained("boekenjaren");
            $table->foreignId("familie_lid_id")->nullable()->constrained("familie_leden");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('contributies');
    }
};
