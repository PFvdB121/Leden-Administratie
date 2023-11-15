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
        Schema::create('familie_leden', function (Blueprint $table) {
            $table->id();
            $table->string("naam");
            $table->date("geboortedatum");
            $table->foreignid("soort_lid_id")->constrained("soorten_leden");
            $table->foreignid("familie_id")->constrained("families");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('familie_leden');
    }
};
